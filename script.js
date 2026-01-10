document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     UTILITY FUNCTION: LOAD HTML
     ========================= */
  const loadHTML = async (selector, url) => {
    const placeholder = document.getElementById(selector);
    if (!placeholder) return;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      placeholder.innerHTML = await res.text();
    } catch (err) {
      console.error(`${selector} load error:`, err);
    }
  };

  /* =========================
     HEADER & FOOTER INJECTION
     ========================= */
  loadHTML("header-placeholder", "header.html");
  loadHTML("footer-placeholder", "footer.html");

  /* =========================
     SWIPER INITIALIZATION
     ========================= */
  const swiperEl = document.querySelector(".mySwiper");
  if (swiperEl) {
    new Swiper(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
    });
  }

  /* =========================
     MODAL IMAGE HANDLING
     ========================= */
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = modal?.querySelector(".close");

  if (modal && modalImg && closeBtn) {

    const openModal = (img) => {
      const caption = img.closest(".gallery-item")?.querySelector(".caption");
      caption?.classList.add("visible"); // optional: toggle can be changed to add only
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      // Accessibility: focus on modal
      modal.setAttribute("tabindex", "-1");
      modal.focus();
    };

    const closeModal = () => {
      modal.style.display = "none";
    };

    document.querySelectorAll(".gallery-img").forEach(img => {
      img.addEventListener("click", () => openModal(img));
    });

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });

    // Optional: close modal on ESC key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "block") closeModal();
    });
  }

});
