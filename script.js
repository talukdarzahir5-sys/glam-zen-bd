/* =========================
   ORDER POPUP
   ========================= */

function order(product) {

  const message =
    `আমি ${product} অর্ডার করতে চাই।\n\n` +
    `দয়া করে এই product-এর দাম, ডেলিভারি চার্জ, ` +
    `ডেলিভারি সময় এবং পেমেন্ট পদ্ধতি জানাবেন।`;

  const popup = document.createElement("div");

  popup.className = "order-popup";

  popup.innerHTML = `
    <div class="order-popup-box">

      <button class="order-popup-close" aria-label="Close">
        ×
      </button>

      <div class="order-popup-icon">
        🛍️
      </div>

      <h3>
        আপনি কোথায় অর্ডার করতে চান?
      </h3>

      <p class="order-product">
        ${product}
      </p>

      <button class="order-whatsapp">
        🟢 WhatsApp-এ অর্ডার করুন
      </button>

      <button class="order-messenger">
        🔵 Messenger-এ অর্ডার করুন
      </button>

      <button class="order-cancel">
        ❌ বন্ধ করুন
      </button>

    </div>
  `;

  document.body.appendChild(popup);

  setTimeout(function () {
    popup.classList.add("show");
  }, 10);


  /* =========================
     WHATSAPP
     ========================= */

  popup
    .querySelector(".order-whatsapp")
    .addEventListener("click", function () {

      const whatsappUrl =
        `https://wa.me/8801857240568?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      popup.remove();

    });


  /* =========================
     MESSENGER
     ========================= */

  popup
    .querySelector(".order-messenger")
    .addEventListener("click", function () {

      const messengerUrl =
        `https://m.me/61578607263593`;

      window.open(messengerUrl, "_blank");

      popup.remove();

    });


  /* =========================
     CLOSE
     ========================= */

  function closePopup() {

    popup.classList.remove("show");

    setTimeout(function () {
      popup.remove();
    }, 250);

  }

  popup
    .querySelector(".order-popup-close")
    .addEventListener("click", closePopup);

  popup
    .querySelector(".order-cancel")
    .addEventListener("click", closePopup);


  /* বাইরে tap করলে বন্ধ */

  popup.addEventListener("click", function (event) {

    if (event.target === popup) {
      closePopup();
    }

  });

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


  closeButton.addEventListener("click", function () {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    lightboxImage.style.transform = "scale(1)";

  });


  lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

      lightbox.classList.remove("active");

      document.body.style.overflow = "";

      lightboxImage.style.transform = "scale(1)";

    }

  });


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
