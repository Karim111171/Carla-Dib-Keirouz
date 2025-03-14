// Initialize Swiper Carousel
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true, // Enable looping of slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allow clicking on pagination bullets
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

// Open Modal on Image Click
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// Close Modal
closeModal.onclick = () => {
    modal.style.display = 'none';
};

// Close Modal on Outside Click
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};