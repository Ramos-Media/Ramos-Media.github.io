/*
  PHOTOGRAPHY LOCATION DATA
  -------------------------
  Add, remove, or edit locations only in this array.

  Required fields for every location:
  - title: Name shown on the map and drawer
  - latitude / longitude: Decimal map coordinates
  - description: Short story or context for the location
  - coverImage: Image used in the marker preview and drawer header
  - galleryImages: Array of image file paths or full image URLs

  Root-relative paths such as "/new_photos/example.jpg" work from any page
  on ramosmedia.co. The three entries below are starter groupings and can be
  replaced or expanded whenever new location galleries are ready.
*/
const photographyLocations = [
  {
    title: "Teton Region",
    latitude: 43.7904,
    longitude: -110.6818,
    description:
      "Mountain landscapes and trail-driven images from the Teton region, where elevation, weather, and changing light shape every frame.",
    coverImage: "/new_photos/landscape-travel/IMG_6900.jpg",
    galleryImages: [
      "/new_photos/landscape-travel/IMG_6900.jpg",
      "/new_photos/landscape-travel/IMG_6363.jpg",
      "/new_photos/landscape-travel/IMG5002.jpg",
      "/new_photos/landscape-travel/IMG5318.jpg",
      "/new_photos/landscape-travel/IMG_8617.jpg",
      "/new_photos/landscape-travel/IMG4832.jpg"
    ]
  },
  {
    title: "Greater Yellowstone",
    latitude: 44.6,
    longitude: -110.5,
    description:
      "Wildlife and expansive landscapes photographed across the Greater Yellowstone ecosystem, with attention to behavior, habitat, and the space surrounding each animal.",
    coverImage: "/new_photos/wildlife/IMG5270.jpg",
    galleryImages: [
      "/new_photos/wildlife/IMG5270.jpg",
      "/new_photos/wildlife/IMG5339.jpg",
      "/new_photos/wildlife/IMG5515.jpg",
      "/new_photos/wildlife/IMG5204.jpg",
      "/new_photos/wildlife/IMG5141.jpg",
      "/new_photos/wildlife/IMG5545.jpg"
    ]
  },
  {
    title: "Eastern Idaho Trails",
    latitude: 43.638,
    longitude: -111.276,
    description:
      "Mountain biking and outdoor adventure photography built around movement, terrain, changing conditions, and the energy of a day on the trail.",
    coverImage: "/new_photos/action-adventure/DSC7216-Edit-2.jpg",
    galleryImages: [
      "/new_photos/action-adventure/DSC7216-Edit-2.jpg",
      "/new_photos/action-adventure/DSC7666.jpg",
      "/new_photos/action-adventure/DSC7210-2.jpg",
      "/new_photos/action-adventure/IMG_7188.jpg",
      "/photos/bike-04.jpeg",
      "/photos/bike-12.jpeg"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.getElementById("photography-map");
  const status = document.getElementById("map-status");
  const locationList = document.getElementById("location-list");
  const drawer = document.getElementById("location-drawer");
  const drawerClose = document.getElementById("drawer-close");
  const drawerCover = document.getElementById("drawer-cover");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerDescription = document.getElementById("drawer-description");
  const drawerGallery = document.getElementById("drawer-gallery");
  const lightbox = document.getElementById("map-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrevious = document.getElementById("lightbox-previous");
  const lightboxNext = document.getElementById("lightbox-next");
  let map = null;

  if (!mapElement || typeof L === "undefined") {
    if (status) {
      status.textContent = "The interactive map could not load. Please use the location directory below.";
    }
    buildLocationDirectory();
    return;
  }

  let drawerOpener = null;
  let lightboxOpener = null;
  let activeGallery = [];
  let activeLocationTitle = "";
  let activeImageIndex = 0;

  map = L.map(mapElement, {
    center: [44.02, -110.95],
    zoom: 7,
    minZoom: 4,
    maxZoom: 18,
    zoomControl: true,
    scrollWheelZoom: true
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const markerIcon = L.divIcon({
    className: "photo-marker",
    html: '<span class="photo-marker-pin" aria-hidden="true"></span>',
    iconSize: [36, 44],
    iconAnchor: [18, 42],
    tooltipAnchor: [0, -39]
  });

  const supportsClusters = typeof L.markerClusterGroup === "function";
  const markerLayer = supportsClusters
    ? L.markerClusterGroup({
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: true,
        disableClusteringAtZoom: 12,
        maxClusterRadius: 54,
        iconCreateFunction(cluster) {
          return L.divIcon({
            className: "photo-cluster",
            html: `<div><span>${cluster.getChildCount()}</span></div>`,
            iconSize: [42, 42]
          });
        }
      })
    : L.layerGroup();

  const markers = [];

  photographyLocations.forEach((location, index) => {
    const marker = L.marker([location.latitude, location.longitude], {
      icon: markerIcon,
      title: location.title,
      alt: `Open photography from ${location.title}`,
      keyboard: true,
      riseOnHover: true
    });

    const tooltip = document.createElement("div");
    const tooltipImage = document.createElement("img");
    const tooltipTitle = document.createElement("strong");

    tooltipImage.src = location.coverImage;
    tooltipImage.alt = "";
    tooltipImage.loading = "lazy";
    tooltipTitle.textContent = location.title;
    tooltip.append(tooltipImage, tooltipTitle);

    marker.bindTooltip(tooltip, {
      className: "photo-tooltip",
      direction: "top",
      opacity: 1,
      offset: [0, -4]
    });

    marker.on("click", () => {
      openLocation(location, marker.getElement() || mapElement);
    });

    markerLayer.addLayer(marker);
    markers.push(marker);
  });

  markerLayer.addTo(map);

  if (markers.length) {
    const bounds = L.latLngBounds(
      photographyLocations.map((location) => [location.latitude, location.longitude])
    );
    map.fitBounds(bounds.pad(0.24), { maxZoom: 8 });
  }

  buildLocationDirectory();

  if (status) {
    status.textContent = `${photographyLocations.length} photography locations loaded.`;
    window.setTimeout(() => {
      status.hidden = true;
    }, 1100);
  }

  window.setTimeout(() => map.invalidateSize(), 120);
  window.addEventListener("resize", () => map.invalidateSize());

  function buildLocationDirectory() {
    if (!locationList) {
      return;
    }

    locationList.replaceChildren();

    photographyLocations.forEach((location) => {
      const button = document.createElement("button");
      const image = document.createElement("img");
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      const details = document.createElement("span");
      const arrow = document.createElement("span");

      button.type = "button";
      button.className = "location-card";
      button.setAttribute("aria-label", `Open ${location.title} photography gallery`);

      image.src = location.coverImage;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";

      title.textContent = location.title;
      details.textContent = `${location.galleryImages.length} photographs`;
      copy.append(title, details);

      arrow.className = "location-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";

      button.append(image, copy, arrow);
      button.addEventListener("click", () => {
        if (map) {
          map.flyTo([location.latitude, location.longitude], 10, {
            duration: 0.8
          });
        }
        openLocation(location, button);
      });

      locationList.append(button);
    });
  }

  function openLocation(location, opener) {
    drawerOpener = opener;
    drawerCover.src = location.coverImage;
    drawerCover.alt = `Cover photograph for ${location.title}`;
    drawerTitle.textContent = location.title;
    drawerDescription.textContent = location.description;
    drawerGallery.replaceChildren();

    location.galleryImages.forEach((imagePath, index) => {
      const button = document.createElement("button");
      const image = document.createElement("img");

      button.type = "button";
      button.setAttribute(
        "aria-label",
        `Open photograph ${index + 1} of ${location.galleryImages.length} from ${location.title}`
      );

      image.src = imagePath;
      image.alt = `Photograph from ${location.title}, image ${index + 1}`;
      image.loading = "lazy";
      image.decoding = "async";

      button.append(image);
      button.addEventListener("click", () => {
        openLightbox(location.galleryImages, index, location.title, button);
      });
      drawerGallery.append(button);
    });

    if (!drawer.open) {
      drawer.showModal();
    }
    updateBodyLock();
    window.setTimeout(() => drawerClose.focus(), 0);
  }

  function openLightbox(images, index, locationTitle, opener) {
    activeGallery = images;
    activeLocationTitle = locationTitle;
    activeImageIndex = index;
    lightboxOpener = opener;
    showLightboxImage();

    if (!lightbox.open) {
      lightbox.showModal();
    }
    updateBodyLock();
    window.setTimeout(() => lightboxClose.focus(), 0);
  }

  function showLightboxImage() {
    activeImageIndex =
      (activeImageIndex + activeGallery.length) % activeGallery.length;

    lightboxImage.src = activeGallery[activeImageIndex];
    lightboxImage.alt = `Photograph from ${activeLocationTitle}, image ${activeImageIndex + 1}`;
    lightboxCounter.textContent =
      `${activeImageIndex + 1} of ${activeGallery.length} | ${activeLocationTitle}`;

    const previousIndex =
      (activeImageIndex - 1 + activeGallery.length) % activeGallery.length;
    const nextIndex = (activeImageIndex + 1) % activeGallery.length;

    [activeGallery[previousIndex], activeGallery[nextIndex]].forEach((source) => {
      const preload = new Image();
      preload.src = source;
    });
  }

  function updateBodyLock() {
    document.body.classList.toggle(
      "map-dialog-open",
      drawer.open || lightbox.open
    );
  }

  drawerClose.addEventListener("click", () => drawer.close());

  drawer.addEventListener("click", (event) => {
    if (event.target === drawer) {
      drawer.close();
    }
  });

  drawer.addEventListener("close", () => {
    updateBodyLock();
    drawerCover.removeAttribute("src");
    if (drawerOpener && typeof drawerOpener.focus === "function") {
      drawerOpener.focus();
    }
  });

  lightboxPrevious.addEventListener("click", () => {
    activeImageIndex -= 1;
    showLightboxImage();
  });

  lightboxNext.addEventListener("click", () => {
    activeImageIndex += 1;
    showLightboxImage();
  });

  lightboxClose.addEventListener("click", () => lightbox.close());

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activeImageIndex -= 1;
      showLightboxImage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      activeImageIndex += 1;
      showLightboxImage();
    } else if (event.key === "Home") {
      event.preventDefault();
      activeImageIndex = 0;
      showLightboxImage();
    } else if (event.key === "End") {
      event.preventDefault();
      activeImageIndex = activeGallery.length - 1;
      showLightboxImage();
    }
  });

  lightbox.addEventListener("close", () => {
    updateBodyLock();
    lightboxImage.removeAttribute("src");
    if (lightboxOpener && typeof lightboxOpener.focus === "function") {
      lightboxOpener.focus();
    }
  });
});
