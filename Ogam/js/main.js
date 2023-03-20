
$(function() {
    //메인배너 슬라이드 스와이프
    $(".mainSwiper ul").children().addClass("swiper-slide");
    var swiper = new Swiper(".mainSwiper", {
        loop: true,
        watchOverflow : true,
        resistance : false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

});

$(function() {
    //WOMAN,MEN 이미지
    let cateTxt = `<span class="cateTxt"></span>`
    let halfA = $('.half_Cate').find('a');
    halfA.append(cateTxt);
    let firstA = $('.half_Cate a:first-child').find('span');
    firstA.text('WOMAN');
    let seconA = $('.half_Cate a:nth-child(2)').find('span');
    seconA.text('MEN');
});

$(function() {
    //사이드섹션 슬라이드 스와이프
    $(".sideSectionSwiper ul").children().addClass("swiper-slide");
    var swiper = new Swiper(".sideSectionSwiper", {
        // loop: true,
        slidesPerView: 1.1,
        spaceBetween: 10,
        watchOverflow : true,
        resistance : false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
    });

    //텍스트
    $('.sideSectionSwiper .swiper-wrapper a span').eq(0).text('GIVEAWAY : WIN THE ST');/*첫번째 텍스트*/
    $('.sideSectionSwiper .swiper-wrapper a span').eq(1).text('SPRING/SUMMER ‘23 LOOKBOOK');/*두번째 텍스트*/

});