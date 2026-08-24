function order(product) {
  const msg = encodeURIComponent(
    `আমি ${product} অর্ডার করতে চাই। দয়া করে দাম, ডেলিভারি ও পেমেন্ট সম্পর্কে জানাবেন।`
  );

  const facebookUrl =
    `https://www.facebook.com/share/19KVYgXFED/?message=${msg}`;

  window.open(facebookUrl, "_blank");
}


/* =========================
   IMAGE ZOOM / LIGHTBOX
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".product-img img");

  if (!images.length) return;

  const lightbox = document.createElement("div");

  lightbox.id = "imageLightbox";

  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">×</button>
      <img class="lightbox-image" src="" alt="Product image">
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage =
    lightbox.querySelector(".lightbox-image");

  const closeButton =
    lightbox.querySelector(".lightbox-close");


  /* Open image */

  images.forEach(function (image) {

    image.style.cursor = "zoom-in";

    image.addEventListener("click", function () {

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });


  /* Close button */

  closeButton.addEventListener("click", function () {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

  });


  /* Close by clicking outside image */

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      lightbox.classList.remove("active");

      document.body.style.overflow = "";

    }

  });


  /* Double tap / double click zoom */

  let zoomed = false;

  lightboxImage.addEventListener("click", function () {

    zoomed = !zoomed;

    if (zoomed) {

      lightboxImage.style.transform = "scale(1.8)";
      lightboxImage.style.cursor = "zoom-out";

    } else {

      lightboxImage.style.transform = "scale(1)";
      lightboxImage.style.cursor = "zoom-in";

    }

  });

});
/* =========================
   PRODUCT IMAGE ZOOM
   ========================= */

.product-img img {
  cursor: zoom-in;
  transition: transform 0.25s ease;
}

#imageLightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
}

#imageLightbox.active {
  opacity: 1;
  visibility: visible;
}

.lightbox-content {
  position: relative;
  max-width: 95vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 92vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 14px;
  cursor: zoom-in;
  transition: transform 0.3s ease;
  user-select: none;
}

.lightbox-close {
  position: absolute;
  top: -48px;
  right: 0;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: white;
  color: #222;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  z-index: 10000;
}

.lightbox-close:hover {
  transform: scale(1.08);
}

/* Mobile */

@media (max-width: 600px) {

  #imageLightbox {
    padding: 12px;
  }

  .lightbox-image {
    max-width: 94vw;
    max-height: 82vh;
  }

  .lightbox-close {
    top: -50px;
    right: 0;
  }
}
