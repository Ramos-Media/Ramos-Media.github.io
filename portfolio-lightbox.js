document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".photo-grid a[href]")).filter((link) =>
    link.querySelector("img")
  );

  if (!items.length || typeof HTMLDialogElement === "undefined") {
    return;
  }

  const dialog = document.createElement("dialog");
  dialog.className = "portfolio-lightbox";
  dialog.setAttribute("aria-label", "Expanded photograph viewer");
  dialog.innerHTML = `
    <div class="lightbox-shell">
      <div class="lightbox-toolbar">
        <p class="lightbox-counter" aria-live="polite"></p>
        <div class="lightbox-actions">
          <a class="lightbox-original" href="#" target="_blank" rel="noopener noreferrer">View original</a>
          <button class="lightbox-close" type="button" aria-label="Close image viewer">Close</button>
        </div>
      </div>
      <div class="lightbox-stage">
        <button class="lightbox-nav lightbox-previous" type="button" aria-label="Previous photograph">
          <span aria-hidden="true">‹</span>
        </button>
        <figure>
          <img class="lightbox-image" alt="">
          <figcaption class="lightbox-caption"></figcaption>
        </figure>
        <button class="lightbox-nav lightbox-next" type="button" aria-label="Next photograph">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  `;
  document.body.append(dialog);

  const viewerImage = dialog.querySelector(".lightbox-image");
  const caption = dialog.querySelector(".lightbox-caption");
  const counter = dialog.querySelector(".lightbox-counter");
  const originalLink = dialog.querySelector(".lightbox-original");
  const closeButton = dialog.querySelector(".lightbox-close");
  const previousButton = dialog.querySelector(".lightbox-previous");
  const nextButton = dialog.querySelector(".lightbox-next");

  let currentIndex = 0;
  let opener = null;

  const preloadAdjacent = () => {
    const previous = items[(currentIndex - 1 + items.length) % items.length];
    const next = items[(currentIndex + 1) % items.length];
    [previous, next].forEach((link) => {
      const image = new Image();
      image.src = link.href;
    });
  };

  const showImage = (index) => {
    currentIndex = (index + items.length) % items.length;
    const link = items[currentIndex];
    const thumbnail = link.querySelector("img");
    const description = thumbnail.getAttribute("alt") || "Portfolio photograph";

    viewerImage.src = link.href;
    viewerImage.alt = description;
    caption.textContent = description;
    originalLink.href = link.href;
    counter.textContent = `${currentIndex + 1} of ${items.length}`;
    preloadAdjacent();
  };

  const openViewer = (index, link) => {
    opener = link;
    showImage(index);
    dialog.showModal();
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  };

  items.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openViewer(index, link);
    });
  });

  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));
  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      showImage(0);
    } else if (event.key === "End") {
      event.preventDefault();
      showImage(items.length - 1);
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("lightbox-open");
    viewerImage.removeAttribute("src");
    if (opener) {
      opener.focus();
    }
  });
});
