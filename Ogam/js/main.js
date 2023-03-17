
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