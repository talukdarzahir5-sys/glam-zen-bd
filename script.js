/* =========================
   ORDER → FACEBOOK PAGE
   ========================= */

function order(product) {
  const facebookPage =
    "https://www.facebook.com/share/19KVYgXFED/";

  window.open(facebookPage, "_blank");
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


  // ছবি tap করলে বড় হবে
  images.forEach(function (image) {

    image.style.cursor = "zoom-in";

    image.addEventListener("click", function () {

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";

      lightboxImage.style.transform = "scale(1)";
      lightboxImage.style.cursor = "zoom-in";

    });

  });


  // Close button
  closeButton.addEventListener("click", function () {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    lightboxImage.style.transform = "scale(1)";

  });


  // ছবির বাইরে tap করলে বন্ধ হবে
  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      lightbox.classList.remove("active");

      document.body.style.overflow = "";

      lightboxImage.style.transform = "scale(1)";

    }

  });


  // বড় ছবিতে আবার tap করলে zoom হবে
  lightboxImage.addEventListener("click", function (event) {

    event.stopPropagation();

    const isZoomed =
      lightboxImage.style.transform === "scale(1.8)";

    if (isZoomed) {

      lightboxImage.style.transform = "scale(1)";
      lightboxImage.style.cursor = "zoom-in";

    } else {

      lightboxImage.style.transform = "scale(1.8)";
      lightboxImage.style.cursor = "zoom-out";

    }

  });

});
