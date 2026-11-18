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

  Root-relative paths such as "/map_photos/Location/photo.jpg" work from any page
  on ramosmedia.co. Coordinates are approximate and regional pins represent
  broader collections, not exact photo locations.
*/
const photographyLocations = [
  {
    "title": "Death Valley",
    "latitude": 36.46,
    "longitude": -116.87,
    "description": "Desert landscapes and outdoor moments from Death Valley and the surrounding area.",
    "coverImage": "/map_photos/Death_Valley/death_valley01.jpg",
    "galleryImages": [
      "/map_photos/Death_Valley/death_valley01.jpg",
      "/map_photos/Death_Valley/death_valley02.jpg",
      "/map_photos/Death_Valley/death_valley03.jpg",
      "/map_photos/Death_Valley/death_valley04.jpg",
      "/map_photos/Death_Valley/death_valley05.jpg",
      "/map_photos/Death_Valley/death_valley06.jpg",
      "/map_photos/Death_Valley/death_valley07.jpg",
      "/map_photos/Death_Valley/death_valley08.jpg",
      "/map_photos/Death_Valley/death_valley09.jpg",
      "/map_photos/Death_Valley/death_valley10.jpg",
      "/map_photos/Death_Valley/death_valley11.jpg",
      "/map_photos/Death_Valley/death_valley12.jpg",
      "/map_photos/Death_Valley/death_valley13.jpg",
      "/map_photos/Death_Valley/death_valley14.jpg",
      "/map_photos/Death_Valley/death_valley15.jpg",
      "/map_photos/Death_Valley/death_valley16.jpg",
      "/map_photos/Death_Valley/death_valley17.jpg",
      "/map_photos/Death_Valley/death_valley18.jpg",
      "/map_photos/Death_Valley/death_valley19.jpg",
      "/map_photos/Death_Valley/death_valley20.jpg",
      "/map_photos/Death_Valley/death_valley21.jpg"
    ]
  },
  {
    "title": "Lake Tahoe",
    "latitude": 39.1,
    "longitude": -120.02,
    "description": "Mountain scenery, forest trails, and outdoor adventures around Lake Tahoe.",
    "coverImage": "/map_photos/Lake_Tahoe/lake_tahoe01.jpg",
    "galleryImages": [
      "/map_photos/Lake_Tahoe/lake_tahoe01.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe02.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe03.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe04.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe05.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe06.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe07.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe08.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe09.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe10.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe11.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe12.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe13.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe14.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe15.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe16.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe17.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe18.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe19.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe20.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe21.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe22.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe23.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe24.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe25.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe26.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe27.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe28.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe29.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe30.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe31.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe32.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe33.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe34.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe35.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe36.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe37.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe38.jpg",
      "/map_photos/Lake_Tahoe/lake_tahoe39.jpg"
    ]
  },
  {
    "title": "Mammoth Lakes",
    "latitude": 37.63,
    "longitude": -118.99,
    "description": "Lakes, mountains, and outdoor scenes from the Mammoth Lakes area.",
    "coverImage": "/map_photos/Mammoth/mammoth01.jpg",
    "galleryImages": [
      "/map_photos/Mammoth/mammoth01.jpg",
      "/map_photos/Mammoth/mammoth02.jpg",
      "/map_photos/Mammoth/mammoth03.jpg",
      "/map_photos/Mammoth/mammoth04.jpg",
      "/map_photos/Mammoth/mammoth05.jpg",
      "/map_photos/Mammoth/mammoth06.jpg",
      "/map_photos/Mammoth/mammoth07.jpg",
      "/map_photos/Mammoth/mammoth08.jpg",
      "/map_photos/Mammoth/mammoth09.jpg",
      "/map_photos/Mammoth/mammoth10.jpg",
      "/map_photos/Mammoth/mammoth11.jpg",
      "/map_photos/Mammoth/mammoth12.jpg",
      "/map_photos/Mammoth/mammoth13.jpg",
      "/map_photos/Mammoth/mammoth14.jpg",
      "/map_photos/Mammoth/mammoth15.jpg",
      "/map_photos/Mammoth/mammoth16.jpg",
      "/map_photos/Mammoth/mammoth17.jpg",
      "/map_photos/Mammoth/mammoth18.jpg",
      "/map_photos/Mammoth/mammoth19.jpg",
      "/map_photos/Mammoth/mammoth20.jpg",
      "/map_photos/Mammoth/mammoth21.jpg",
      "/map_photos/Mammoth/mammoth22.jpg",
      "/map_photos/Mammoth/mammoth23.jpg",
      "/map_photos/Mammoth/mammoth24.jpg",
      "/map_photos/Mammoth/mammoth25.jpg",
      "/map_photos/Mammoth/mammoth26.jpg"
    ]
  },
  {
    "title": "Palisades Lakes",
    "latitude": 43.43,
    "longitude": -111.14,
    "description": "Trail and lakeside photography from the Palisades Lakes area in eastern Idaho.",
    "coverImage": "/map_photos/Palisade_Lakes/palisade_lakes01.jpg",
    "galleryImages": [
      "/map_photos/Palisade_Lakes/palisade_lakes01.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes02.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes03.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes04.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes05.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes06.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes07.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes08.jpg",
      "/map_photos/Palisade_Lakes/palisade_lakes09.jpg"
    ]
  },
  {
    "title": "Pacific Northwest",
    "latitude": 45.65,
    "longitude": -122.1,
    "description": "A collection from across the Pacific Northwest, from forest and coast to mountain landscapes. The pin represents the wider region.",
    "coverImage": "/map_photos/PNW/pnw03.jpg",
    "galleryImages": [
      "/map_photos/PNW/pnw01.jpg",
      "/map_photos/PNW/pnw02.jpg",
      "/map_photos/PNW/pnw03.jpg",
      "/map_photos/PNW/pnw04.jpg",
      "/map_photos/PNW/pnw05.jpg",
      "/map_photos/PNW/pnw06.jpg",
      "/map_photos/PNW/pnw07.jpg",
      "/map_photos/PNW/pnw08.jpg",
      "/map_photos/PNW/pnw09.jpg",
      "/map_photos/PNW/pnw10.jpg",
      "/map_photos/PNW/pnw11.jpg",
      "/map_photos/PNW/pnw12.jpg",
      "/map_photos/PNW/pnw13.jpg",
      "/map_photos/PNW/pnw14.jpg",
      "/map_photos/PNW/pnw15.jpg",
      "/map_photos/PNW/pnw16.jpg",
      "/map_photos/PNW/pnw17.jpg",
      "/map_photos/PNW/pnw18.jpg",
      "/map_photos/PNW/pnw19.jpg",
      "/map_photos/PNW/pnw20.jpg",
      "/map_photos/PNW/pnw21.jpg",
      "/map_photos/PNW/pnw22.jpg",
      "/map_photos/PNW/pnw23.jpg",
      "/map_photos/PNW/pnw24.jpg"
    ]
  },
  {
    "title": "Point Reyes",
    "latitude": 38.07,
    "longitude": -122.88,
    "description": "Coastal landscapes and outdoor scenes from Point Reyes and the surrounding area.",
    "coverImage": "/map_photos/Point_Reyes/point_reyes01.jpg",
    "galleryImages": [
      "/map_photos/Point_Reyes/point_reyes01.jpg",
      "/map_photos/Point_Reyes/point_reyes02.jpg",
      "/map_photos/Point_Reyes/point_reyes03.jpg",
      "/map_photos/Point_Reyes/point_reyes04.jpg",
      "/map_photos/Point_Reyes/point_reyes05.jpg",
      "/map_photos/Point_Reyes/point_reyes06.jpg",
      "/map_photos/Point_Reyes/point_reyes07.jpg",
      "/map_photos/Point_Reyes/point_reyes08.jpg",
      "/map_photos/Point_Reyes/point_reyes09.jpg"
    ]
  },
  {
    "title": "Southern Utah & Grand Canyon",
    "latitude": 37.05,
    "longitude": -112.85,
    "description": "Canyons, desert landscapes, and travel photography from southern Utah and the Grand Canyon. The pin represents the wider region.",
    "coverImage": "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon01.jpg",
    "galleryImages": [
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon01.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon02.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon03.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon04.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon05.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon06.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon07.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon08.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon09.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon10.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon11.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon12.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon13.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon14.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon15.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon16.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon17.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon18.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon19.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon20.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon21.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon22.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon23.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon24.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon25.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon26.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon27.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon28.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon29.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon30.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon31.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon32.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon33.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon34.jpg",
      "/map_photos/Southern_Utah_Grand_Caynon/southern_utah_grand_caynon35.jpg"
    ]
  },
  {
    "title": "Grand Teton National Park",
    "latitude": 43.79,
    "longitude": -110.68,
    "description": "Mountain landscapes and wildlife from Grand Teton National Park.",
    "coverImage": "/map_photos/Teton_National_Park/teton_national_park01.jpg",
    "galleryImages": [
      "/map_photos/Teton_National_Park/teton_national_park01.jpg",
      "/map_photos/Teton_National_Park/teton_national_park02.jpg",
      "/map_photos/Teton_National_Park/teton_national_park03.jpg",
      "/map_photos/Teton_National_Park/teton_national_park04.jpg",
      "/map_photos/Teton_National_Park/teton_national_park05.jpg",
      "/map_photos/Teton_National_Park/teton_national_park06.jpg",
      "/map_photos/Teton_National_Park/teton_national_park07.jpg",
      "/map_photos/Teton_National_Park/teton_national_park08.jpg",
      "/map_photos/Teton_National_Park/teton_national_park09.jpg",
      "/map_photos/Teton_National_Park/teton_national_park10.jpg",
      "/map_photos/Teton_National_Park/teton_national_park11.jpg",
      "/map_photos/Teton_National_Park/teton_national_park12.jpg",
      "/map_photos/Teton_National_Park/teton_national_park13.jpg",
      "/map_photos/Teton_National_Park/teton_national_park14.jpg"
    ]
  },
  {
    "title": "Trinity Alps",
    "latitude": 41.02,
    "longitude": -123.11,
    "description": "Mountain lakes, trails, and outdoor adventures in the Trinity Alps.",
    "coverImage": "/map_photos/Trinity_Alps/trinity_alps01.jpg",
    "galleryImages": [
      "/map_photos/Trinity_Alps/trinity_alps01.jpg",
      "/map_photos/Trinity_Alps/trinity_alps02.jpg",
      "/map_photos/Trinity_Alps/trinity_alps03.jpg",
      "/map_photos/Trinity_Alps/trinity_alps04.jpg",
      "/map_photos/Trinity_Alps/trinity_alps05.jpg",
      "/map_photos/Trinity_Alps/trinity_alps06.jpg",
      "/map_photos/Trinity_Alps/trinity_alps07.jpg",
      "/map_photos/Trinity_Alps/trinity_alps08.jpg",
      "/map_photos/Trinity_Alps/trinity_alps09.jpg",
      "/map_photos/Trinity_Alps/trinity_alps10.jpg",
      "/map_photos/Trinity_Alps/trinity_alps11.jpg",
      "/map_photos/Trinity_Alps/trinity_alps12.jpg",
      "/map_photos/Trinity_Alps/trinity_alps13.jpg",
      "/map_photos/Trinity_Alps/trinity_alps14.jpg",
      "/map_photos/Trinity_Alps/trinity_alps15.jpg",
      "/map_photos/Trinity_Alps/trinity_alps16.jpg",
      "/map_photos/Trinity_Alps/trinity_alps17.jpg",
      "/map_photos/Trinity_Alps/trinity_alps18.jpg",
      "/map_photos/Trinity_Alps/trinity_alps19.jpg",
      "/map_photos/Trinity_Alps/trinity_alps20.jpg",
      "/map_photos/Trinity_Alps/trinity_alps21.jpg",
      "/map_photos/Trinity_Alps/trinity_alps22.jpg"
    ]
  },
  {
    "title": "Yellowstone National Park",
    "latitude": 44.6,
    "longitude": -110.5,
    "description": "Wildlife and varied landscapes from Yellowstone National Park.",
    "coverImage": "/map_photos/Yellowstone/yellowstone01.jpg",
    "galleryImages": [
      "/map_photos/Yellowstone/yellowstone01.jpg",
      "/map_photos/Yellowstone/yellowstone02.jpg",
      "/map_photos/Yellowstone/yellowstone03.jpg",
      "/map_photos/Yellowstone/yellowstone04.jpg",
      "/map_photos/Yellowstone/yellowstone05.jpg",
      "/map_photos/Yellowstone/yellowstone06.jpg",
      "/map_photos/Yellowstone/yellowstone07.jpg",
      "/map_photos/Yellowstone/yellowstone08.jpg",
      "/map_photos/Yellowstone/yellowstone09.jpg",
      "/map_photos/Yellowstone/yellowstone10.jpg",
      "/map_photos/Yellowstone/yellowstone11.jpg",
      "/map_photos/Yellowstone/yellowstone12.jpg",
      "/map_photos/Yellowstone/yellowstone13.jpg",
      "/map_photos/Yellowstone/yellowstone14.jpg",
      "/map_photos/Yellowstone/yellowstone15.jpg",
      "/map_photos/Yellowstone/yellowstone16.jpg",
      "/map_photos/Yellowstone/yellowstone17.jpg",
      "/map_photos/Yellowstone/yellowstone18.jpg",
      "/map_photos/Yellowstone/yellowstone19.jpg",
      "/map_photos/Yellowstone/yellowstone20.jpg",
      "/map_photos/Yellowstone/yellowstone21.jpg"
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
