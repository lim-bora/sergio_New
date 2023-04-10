

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
    //WOMAN,MEN 이미지
    let cateTxt = `<span class="cateTxt"></span>`
    let halfA = $('.half_Cate').find('a');
    halfA.append(cateTxt);
    let firstA = $('.half_Cate a:first-child').find('span');
    firstA.text('WOMEN');
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

$(function() {
    /**메인배너 텍스트*/
    /*
    - pc/mo 텍스트 각각 기입해주세요.
    - 첫번째 배너 텍스트는 pc/mo 두개씩 적어주세요.('첫번째 배너 텍스트' 라고 적힌 부분 모두기입)
    - 2, 3, 4 번째 등 추가배너는 185/190번째 각 복사하여 eq(숫자)만 바꿔주세요. ex.(.eq(2) => 2번째 배너 / .eq(3) => 3번째 배너)
    */
    let pcMaintxt = $('.pc_main01 .mainBannerTxt');
    let moMaintxt = $('.mo_main01 .mainBannerTxt');
    let pcSubtxt = $('.pc_main01 .mainBannerSub');
    let moSubtxt = $('.mo_main01 .mainBannerSub');

    //////////////////////////// 메인배너 타이틀///////////////////////////
    //pc 타이틀
    pcMaintxt.eq(1).text('23SS COLLECTION'); /*첫번째 배너 텍스트*/
    $('.pc_main01 a:last-child').find('h3').text('23SS COLLECTION'); /*첫번째 배너 텍스트*/
    // pcMaintxt.eq(2).text('test test'); /*두번째 배너 텍스트*/
    // pcMaintxt.eq(3).text('test test test'); /*세번째 배너 텍스트*/
    pcMaintxt.eq(0).text('23SS COLLECTION'); /*마지막 배너 텍스트 , 배너1개일경우 배너1개 텍스트 기입*/

    //mo 타이틀
    moMaintxt.eq(1).text('23SS COLLECTION'); /*첫번째 배너 텍스트*/
    $('.mo_main01 a:last-child').find('h3').text('23SS COLLECTION'); /*첫번째 배너 텍스트*/
    // moMaintxt.eq(2).text('test test'); /*두번째 배너 텍스트*/
    // moMaintxt.eq(3).text('test test test'); /*세번째 배너 텍스트*/
    moMaintxt.eq(0).text('23SS COLLECTION'); /*마지막 배너 텍스트 , 배너1개일경우 배너1개 텍스트 기입*/

    /////////////////////////// 메인배너 서브설명글///////////////////////////
    //pc 서브글
    pcSubtxt.eq(1).html("<p>코트에서부터 일상까지 빛나는 스타일링을 위해, 이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");
    $('.pc_main01 a:last-child').find('p').html("<p>코트에서부터 일상까지 빛나는 스타일링을 위해, 이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");
    // pcSubtxt.eq(2).html("<p>세르지오 타키니의 봄 컬렉션~~</p>");
    // pcSubtxt.eq(3).html("<p>세르지오 타키니 테스트~~</p>");
    pcSubtxt.eq(0).html("코트에서부터 일상까지 빛나는 스타일링을 위해, 이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");/*마지막 배너 텍스트 , 배너1개일경우 배너1개 텍스트 기입*/

    //mo 서브글
    moSubtxt.eq(1).html("<p>코트에서부터 일상까지 빛나는 스타일링을 위해,<br>이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");
    $('.mo_main01 a:last-child').find('p').html("<p>코트에서부터 일상까지 빛나는 스타일링을 위해,<br>이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");
    // moSubtxt.eq(2).html("<p>세르지오 타키니의 봄 컬렉션~~</p>");
    // moSubtxt.eq(3).html("<p>세르지오 타키니 테스트~~</p>");
    moSubtxt.eq(0).html("<p>코트에서부터 일상까지 빛나는 스타일링을 위해,<br>이탈리안 헤리티지 감성의 ON COURT 컬렉션</p>");/*마지막 배너 텍스트 , 배너1개일경우 배너1개 텍스트 기입*/

});

$(document).ready(function() {
    //인스타클릭시 PC 새창열림 /M 현윈도우에서 창열림
    if (window.innerWidth > 1024) {  // 다바이스 크기가 1024이하일때
        $(".instagramST .insta a").attr({"target" : "_blank"})
    }else{
        $(".instagramST .insta a").attr({"target" : "_self"})
    }

    let flag = (window.innerWidth < 1024) ? 'a' : 'b';
    let flag_chk;
    let flag_start = 0;
    $(window).resize(function(){
        flag_chk = (window.innerWidth < 1024) ? 'a' : 'b';
        if(flag !== flag_chk && flag_start == 0){
            flag_start ++;
            location.reload();
        }
    });
})

$(document).ready(function() {
    /* 탑배너 스와이프 */
    var topSwiper = new Swiper(".topSwiper", {
        slidesPerView : 1,
        loop: true,
        watchOverflow : true,
        loopAdditionalSlides : 1,
        // autoplay : {
        //     delay : 5000,  //5초
        //     disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        // },
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