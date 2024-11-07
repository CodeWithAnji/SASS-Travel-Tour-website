let navbar = document.querySelector('.header .navbar');

// Open navbar when clicking on #menu-btn
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

// Close navbar when clicking on #nav-close
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
};

let search = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () => {
    search.classList.add('active');
};


document.querySelector('#close-search').onclick = () => {
    search.classList.remove('active');
};
// Close navbar when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

