/* =========================
   ORDER → WHATSAPP / MESSENGER
   ========================= */

function order(product) {

  const message =
    `আমি ${product} অর্ডার করতে চাই।\n\n` +
    `দয়া করে এই product-এর দাম, ডেলিভারি চার্জ, ` +
    `ডেলিভারি সময় এবং পেমেন্ট পদ্ধতি জানাবেন।`;

  const choice = confirm(
    `আপনি "${product}" অর্ডার করতে চান?\n\n` +
    `OK চাপলে WhatsApp খুলবে।\n` +
    `Cancel চাপলে Messenger খুলবে।`
  );

  if (choice) {

    // =========================
    // WHATSAPP
    // =========================

    const whatsappUrl =
      `https://wa.me/8801857240568?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

  } else {

    // =========================
    // FACEBOOK MESSENGER
    // =========================

    const messengerUrl =
      `https://m.me/61578607263593`;

    window.open(messengerUrl, "_blank");

  }

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

      <button
        class="lightbox-close"
        aria-label="Close">
        ×
      </button>

      <img
        class="lightbox-image"
        src=""
        alt="Product image">

    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage =
    lightbox.querySelector(".lightbox-image");

  const closeButton =
    lightbox.querySelector(".lightbox-close");


  /* =========================
     IMAGE CLICK → ZOOM
     ========================= */

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


  /* =========================
     CLOSE BUTTON
     ========================= */

  closeButton.addEventListener("click", function () {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    lightboxImage.style.transform = "scale(1)";

  });


  /* =========================
     CLICK OUTSIDE → CLOSE
     ========================= */

  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      lightbox.classList.remove("active");

      document.body.style.overflow = "";

      lightboxImage.style.transform = "scale(1)";

    }

  });


  /* =========================
     IMAGE CLICK → ZOOM 1.8x
     ========================= */

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
