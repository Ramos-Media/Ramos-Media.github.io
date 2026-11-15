(() => {
  const story = document.querySelector("[data-gear-story]");
  const canvas = story?.querySelector("[data-gear-canvas]");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopQuery = window.matchMedia("(min-width: 1000px)");

  if (!story || !canvas || motionQuery.matches || !desktopQuery.matches) {
    return;
  }

  const chapters = [...story.querySelectorAll(".gear-chapter")];
  const label = story.querySelector("[data-gear-stage-label]");
  const progressBar = story.querySelector("[data-gear-progress]");
  const context = canvas.getContext("2d", { alpha: true });
  const cache = new Map();
  const boundsCache = new WeakMap();
  const cutoutCache = new WeakMap();
  let activeIndex = 0;
  let requestedFrame = 0;

  const sequences = chapters.map((chapter) => ({
    folder: chapter.dataset.folder,
    prefix: chapter.dataset.prefix,
    count: Number(chapter.dataset.count),
    title: chapter.querySelector("h3").textContent.trim()
  }));

  /*
   * Every inactive item has a permanent parking spot. The reserved open space
   * in the middle is where the featured frame is drawn, so the kit does not
   * shuffle around or pile on top of itself as chapters change.
   */
  const lineup = [
    { sequenceIndex: 2, x: 0.07, baseY: 0.72, maxW: 0.11, maxH: 0.3 },
    { sequenceIndex: 3, x: 0.19, baseY: 0.71, maxW: 0.11, maxH: 0.3 },
    { sequenceIndex: 0, x: 0.31, baseY: 0.72, maxW: 0.12, maxH: 0.25 },
    { sequenceIndex: 4, x: 0.8, baseY: 0.71, maxW: 0.12, maxH: 0.34 },
    { sequenceIndex: 5, x: 0.93, baseY: 0.72, maxW: 0.1, maxH: 0.39 }
  ];

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const frameUrl = (sequence, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `/assets/servicespage/gear/${sequence.folder}/${sequence.prefix}${number}.webp`;
  };

  const loadFrame = (sequenceIndex, frameIndex) => {
    const key = `${sequenceIndex}-${frameIndex}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const image = new Image();
    image.decoding = "async";
    image.crossOrigin = "anonymous";
    image.src = frameUrl(sequences[sequenceIndex], frameIndex);
    image.addEventListener("load", requestRender, { once: true });
    cache.set(key, image);
    return image;
  };

  const preloadSequence = (sequenceIndex) => {
    if (sequenceIndex < 0 || sequenceIndex >= sequences.length) {
      return;
    }

    for (let index = 0; index < sequences[sequenceIndex].count; index += 1) {
      loadFrame(sequenceIndex, index);
    }
  };

  const resizeCanvas = () => {
    const rectangle = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rectangle.width * ratio));
    const height = Math.max(1, Math.round(rectangle.height * ratio));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  };

  const getContentBounds = (image) => {
    if (boundsCache.has(image)) {
      return boundsCache.get(image);
    }

    const sampleWidth = 180;
    const sampleHeight = Math.max(1, Math.round(sampleWidth * image.naturalHeight / image.naturalWidth));
    const sampleCanvas = document.createElement("canvas");
    const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
    sampleCanvas.width = sampleWidth;
    sampleCanvas.height = sampleHeight;
    sampleContext.drawImage(image, 0, 0, sampleWidth, sampleHeight);

    const pixels = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
    let minX = sampleWidth;
    let minY = sampleHeight;
    let maxX = 0;
    let maxY = 0;

    for (let y = 0; y < sampleHeight; y += 1) {
      for (let x = 0; x < sampleWidth; x += 1) {
        const offset = (y * sampleWidth + x) * 4;
        const brightness = pixels[offset] + pixels[offset + 1] + pixels[offset + 2];
        if (pixels[offset + 3] > 20 && brightness > 34) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }

    const hasContent = minX <= maxX && minY <= maxY;
    const scaleX = image.naturalWidth / sampleWidth;
    const scaleY = image.naturalHeight / sampleHeight;
    const bounds = hasContent
      ? {
          x: minX * scaleX,
          y: minY * scaleY,
          width: Math.max(1, (maxX - minX + 1) * scaleX),
          height: Math.max(1, (maxY - minY + 1) * scaleY)
        }
      : { x: 0, y: 0, width: image.naturalWidth, height: image.naturalHeight };

    boundsCache.set(image, bounds);
    return bounds;
  };

  const getCutout = (image, bounds) => {
    if (cutoutCache.has(image)) {
      return cutoutCache.get(image);
    }

    const longestSide = Math.max(bounds.width, bounds.height);
    const sampleScale = Math.min(1, 760 / longestSide);
    const cutout = document.createElement("canvas");
    cutout.width = Math.max(1, Math.round(bounds.width * sampleScale));
    cutout.height = Math.max(1, Math.round(bounds.height * sampleScale));
    const cutoutContext = cutout.getContext("2d", { willReadFrequently: true });

    cutoutContext.drawImage(
      image,
      bounds.x,
      bounds.y,
      bounds.width,
      bounds.height,
      0,
      0,
      cutout.width,
      cutout.height
    );

    /*
     * The exported frames use exact black as their matte. Remove only those
     * pixels. A feathered near-black threshold would also reduce the opacity
     * of the black camera bodies and create the blue see-through effect.
     */
    const frame = cutoutContext.getImageData(0, 0, cutout.width, cutout.height);
    const pixels = frame.data;
    const visited = new Uint8Array(cutout.width * cutout.height);
    const queue = new Int32Array(cutout.width * cutout.height);
    let queueStart = 0;
    let queueEnd = 0;

    const enqueueMatte = (pixelIndex) => {
      const offset = pixelIndex * 4;
      const isExactMatte = Math.max(
        pixels[offset],
        pixels[offset + 1],
        pixels[offset + 2]
      ) <= 3;

      if (!visited[pixelIndex] && pixels[offset + 3] > 0 && isExactMatte) {
        visited[pixelIndex] = 1;
        queue[queueEnd] = pixelIndex;
        queueEnd += 1;
      }
    };

    for (let x = 0; x < cutout.width; x += 1) {
      enqueueMatte(x);
      enqueueMatte((cutout.height - 1) * cutout.width + x);
    }

    for (let y = 0; y < cutout.height; y += 1) {
      enqueueMatte(y * cutout.width);
      enqueueMatte(y * cutout.width + cutout.width - 1);
    }

    while (queueStart < queueEnd) {
      const pixelIndex = queue[queueStart];
      const x = pixelIndex % cutout.width;
      const y = Math.floor(pixelIndex / cutout.width);
      queueStart += 1;
      pixels[pixelIndex * 4 + 3] = 0;

      if (x > 0) enqueueMatte(pixelIndex - 1);
      if (x < cutout.width - 1) enqueueMatte(pixelIndex + 1);
      if (y > 0) enqueueMatte(pixelIndex - cutout.width);
      if (y < cutout.height - 1) enqueueMatte(pixelIndex + cutout.width);
    }

    cutoutContext.putImageData(frame, 0, 0);
    cutoutCache.set(image, cutout);
    return cutout;
  };

  const drawPlaced = (image, placement, foreground = false) => {
    if (!image?.complete || !image.naturalWidth) {
      return false;
    }

    const bounds = getContentBounds(image);
    const cutout = getCutout(image, bounds);
    const scale = Math.min(
      (canvas.width * placement.maxW) / cutout.width,
      (canvas.height * placement.maxH) / cutout.height
    );
    const width = cutout.width * scale;
    const height = cutout.height * scale;
    const x = canvas.width * placement.x - width / 2;
    const y = canvas.height * placement.baseY - height;

    context.save();
    context.globalAlpha = 1;
    context.filter = foreground
      ? "none"
      : "saturate(0.86) brightness(0.78)";
    context.drawImage(cutout, x, y, width, height);
    context.restore();
    return true;
  };

  const drawLineup = (activeSequenceIndex) => {
    const hiddenSequences = activeSequenceIndex === 1
      ? new Set([0, 3])
      : new Set([activeSequenceIndex]);

    lineup.forEach((placement) => {
      if (hiddenSequences.has(placement.sequenceIndex)) {
        return;
      }

      drawPlaced(loadFrame(placement.sequenceIndex, 0), placement);
    });
  };

  const drawFeatured = (image) => drawPlaced(image, {
    x: 0.54,
    baseY: 0.84,
    maxW: 0.37,
    maxH: 0.49
  }, true);

  const findLoadedFrame = (sequenceIndex, preferredIndex) => {
    const sequence = sequences[sequenceIndex];

    for (let offset = 0; offset < sequence.count; offset += 1) {
      for (const candidate of [preferredIndex - offset, preferredIndex + offset]) {
        if (candidate < 0 || candidate >= sequence.count) {
          continue;
        }

        const image = loadFrame(sequenceIndex, candidate);
        if (image.complete && image.naturalWidth) {
          return image;
        }
      }
    }

    return null;
  };

  const getChapterState = () => {
    const viewportMarker = window.innerHeight * 0.5;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    chapters.forEach((chapter, index) => {
      const rectangle = chapter.getBoundingClientRect();
      const center = rectangle.top + rectangle.height / 2;
      const distance = Math.abs(center - viewportMarker);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const rectangle = chapters[closestIndex].getBoundingClientRect();
    const progress = clamp(
      (viewportMarker - rectangle.top) / Math.max(rectangle.height, 1),
      0,
      1
    );

    return { index: closestIndex, progress };
  };

  const render = () => {
    requestedFrame = 0;
    resizeCanvas();

    const { index, progress } = getChapterState();
    const sequence = sequences[index];
    const framePosition = progress * Math.max(sequence.count - 1, 0);
    const frameIndex = Math.round(framePosition);

    if (index !== activeIndex) {
      activeIndex = index;
      chapters.forEach((chapter, chapterIndex) => {
        chapter.classList.toggle("is-active", chapterIndex === index);
      });
      label.textContent = sequence.title;
      preloadSequence(index);
      preloadSequence(index + 1);
    }

    if (progressBar) {
      progressBar.style.width = `${Math.round(progress * 100)}%`;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLineup(index);

    const image = loadFrame(index, frameIndex);
    const drewFrame = drawFeatured(image);

    if (!drewFrame) {
      drawFeatured(findLoadedFrame(index, frameIndex));
    }
  };

  function requestRender() {
    if (!requestedFrame) {
      requestedFrame = window.requestAnimationFrame(render);
    }
  }

  document.documentElement.classList.add("gear-enhanced");
  lineup.forEach(({ sequenceIndex }) => loadFrame(sequenceIndex, 0));
  preloadSequence(0);
  preloadSequence(1);

  const resizeObserver = new ResizeObserver(requestRender);
  resizeObserver.observe(canvas);

  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
  requestRender();
})();

