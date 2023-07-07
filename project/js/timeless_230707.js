window.addEventListener('DOMContentLoaded', (event) => {
    // 230707 기획전
    var containerWidth = document.querySelector('.og_product_here .prdList__item').offsetWidth;
    var slideWidth = containerWidth * 0.5;
    const time_swiper = new Swiper(".pc_swiper .timeSwiper", {
        slidesPerView: 'auto',
        loop: true,
        slidesOffsetBefore: slideWidth,
        centeredSlides: true,
        watchOverflow : true,
        resistance : false,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    const time_swiper_mo = new Swiper(".mo_swiper .timeSwiper", {
        slidesPerView: 1.5,
        loop: true,
        loopAdditionalSlides : 1,
        watchOverflow : true,
        resistance : false,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 800,
    });
});

