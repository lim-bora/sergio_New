

$(function() {
    //메인배너 슬라이드 스와이프
    $(".mainSwiper ul").children().addClass("swiper-slide");
    var swiper = new Swiper(".mainSwiper", {
        loop: false,   //배너이미지 2개이상일경우 true로 변경해야 바 생김
        watchOverflow : true,
        resistance : false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

});



$(function() {
    //배너 아이프레임일 경우 css 추가
    let pcMaintxt = $('.pc_main01 .mainBannerTxt');
    let moMaintxt = $('.mo_main01 .mainBannerTxt');
    let pcSubtxt = $('.pc_main01 .mainBannerSub');
    let moSubtxt = $('.mo_main01 .mainBannerSub');

    if($('.mainbanne01 .pc_main01 .swiper-wrapper a').children('iframe')){
        $('.mainbanne01 .pc_main01 .swiper-wrapper a').css('paddingBottom','56.25%');
    }


});



$(document).ready(function() {
    /* 탑배너 스와이프 */
    var topSwiper = new Swiper(".topSwiper", {
        slidesPerView : 1,
        loop: true,
        watchOverflow : true,
        loopAdditionalSlides : 1,
        speed : 500,
        autoplay : {
            delay : 4000,  //5초
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });

    /*띠배너 네비겹침현상 방지/닫기버튼 이벤트*/
    let body = $('body');
    let topNav = $('.top_nav');
    let topBanner = $('.topBannerBox');
    let navCloseBtn = $('.btnBox').find('.btnClose');
    let close = $(document).find('.top_nav_box').find('.btnClose');

    topNav.click(function(e){
        if(body.hasClass('activeAside')===true){
            topBanner.css('display','none')
            console.log('dd')
        }else{
            topBanner.css('display','block')
        }
    });
    close.click(function(){
        topBanner.css('display','block')
    });
    navCloseBtn.click(function(){
        topBanner.css('display','none')
    });
})

$(document).ready(function() {
    //콜렉션 슬라이드 스와이프
    var swiper = new Swiper(".collectionSwiper", {
        slidesPerView: 1.23,
        spaceBetween: 10,
    });

    $('#popup_MO #popup_close_btn').on('click', function () {
        $('#popup_MO').addClass('displaynone');
    });

})

window.onload = function () {
    if($('#popup_1').length === 0) {
        $('#popup_MO').removeClass('displaynone');
    }
}

//띠배너 텍스트 pc/mo 다르게 넣을경우(다르지않으면 주석처리해주세요.)
$(window).resize(function(){
    if (window.innerWidth > 1024) {

        $('.topBannerBox .topPc').text('FREE SHIPPING & FREE RETURN | 전 상품 6월 한정 무료배송 & 무료반품')
    } else {

        $('.topBannerBox .topPc').text('전 상품 6월 한정 무료배송 & 무료반품')
    }

}).resize();

$(function() {
    //main iconic polos
    $(".iconicSwiper ul").children().addClass("swiper-slide");
    var swiper = new Swiper(".iconicSwiper", {
        loop: true,
        centeredSlides : true,
        initialSlide: 1,
        watchOverflow : true,
        resistance : false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

});
