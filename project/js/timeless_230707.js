window.addEventListener('DOMContentLoaded', (event) => {
    // 230707 기획전
    var containerWidth = document.querySelector('.og_product_here .prdList__item').offsetWidth;
    var slideWidth = containerWidth * 0.5;
    const time_swiper = new Swiper(".timeSwiper", {
        slidesPerView: 'auto',
        loop: true,
        slidesOffsetBefore: slideWidth,
        centeredSlides: true,
        watchOverflow : true,
        resistance : false,
        autoplay: {
            delay: 2000,
        },
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});