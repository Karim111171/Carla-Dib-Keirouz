document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".mySwiper", {
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
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        },
    });

    // Gestion du modal pour les images
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery-img').forEach(img => {
        // Afficher les informations sur le clic
        img.addEventListener('click', () => {
            const item = img.closest('.gallery-item');
            const caption = item.querySelector('.caption'); // Récupère la légende associée
            caption.classList.toggle('visible'); // Affiche ou cache la légende
        });

        // Affichage de l'image dans le modal
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src; // Met à jour l'image du modal
            modalImg.alt = img.alt; // Met à jour l'attribut alt du modal
        });
    });

    // Fermeture du modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


