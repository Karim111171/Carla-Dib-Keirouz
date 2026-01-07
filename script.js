document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HEADER & FOOTER INJECTION
     ========================= */
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
      })
      .catch(err => console.error("Header load error:", err));
  }

  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(err => console.error("Footer load error:", err));
  }

  /* =========================
     SWIPER INITIALIZATION
     ========================= */
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
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
  const closeBtn = document.querySelector(".close");

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll(".gallery-img").forEach(img => {
      img.addEventListener("click", () => {
        const item = img.closest(".gallery-item");
        const caption = item?.querySelector(".caption");

        if (caption) {
          caption.classList.toggle("visible");
        }

        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

});
