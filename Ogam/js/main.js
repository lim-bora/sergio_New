$(function() {
    let topBtn = $('.topBanner .btnClose').find('img');
    topBtn.click( function() {
        console.log('ㅅㄷㄴㅅ');
        $('.topBanner a').style.pointerEvents="none"
        $('.topbanner').addClass('close');
    });
});
function closeTop(){
    $('.topbanner').css('display','none');
}

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
    pcMaintxt.eq(1).text('NEW YEAR SALE'); /*첫번째 배너 텍스트*/
    $('.pc_main01 a:last-child').find('h3').text('NEW YEAR SALE'); /*첫번째 배너 텍스트*/
    pcMaintxt.eq(2).text('test test'); /*두번째 배너 텍스트*/
    pcMaintxt.eq(3).text('test test test'); /*세번째 배너 텍스트*/
    pcMaintxt.eq(0).text('test test test'); /*세번째 배너 텍스트*/

    //mo 타이틀
    moMaintxt.eq(1).text('NEW YEAR SALE'); /*첫번째 배너 텍스트*/
    $('.mo_main01 a:last-child').find('h3').text('NEW YEAR SALE'); /*첫번째 배너 텍스트*/
    moMaintxt.eq(2).text('test test'); /*두번째 배너 텍스트*/
    moMaintxt.eq(3).text('test test test'); /*세번째 배너 텍스트*/
    moMaintxt.eq(0).text('test test test'); /*세번째 배너 텍스트*/

    /////////////////////////// 메인배너 서브설명글///////////////////////////
    //pc 서브글
    pcSubtxt.eq(1).html("<p>세르지오 타키니의 봄 컬렉션은 민감하게 반응하는 트렌트를 지향하기 위해 새로운 균형을 고민했습니다.<br>DAMARINDO 라인에서는 편안함과 세련미를 동시에 약속하는 아이템을 선보입니다.</p>");
    $('.pc_main01 a:last-child').find('p').html("<p>세르지오 타키니의 봄 컬렉션은 민감하게 반응하는 트렌트를 지향하기 위해 새로운 균형을 고민했습니다.<br>DAMARINDO 라인에서는 편안함과 세련미를 동시에 약속하는 아이템을 선보입니다.</p>");
    pcSubtxt.eq(2).html("<p>세르지오 타키니의 봄 컬렉션~~");
    pcSubtxt.eq(3).html("<p>세르지오 타키니 테스트~~");
    pcSubtxt.eq(0).html("<p>세르지오 타키니 테스트~~");

    //mo 서브글
    moSubtxt.eq(1).html("<p>세르지오 타키니의 봄 컬렉션은 민감하게 반응하는<br>트렌트를 지향하기 위해 새로운 균형을 고민했습니다.<br>DAMARINDO 라인에서는 편안함과 세련미를<br>동시에 약속하는 아이템을 선보입니다.</p>");
    $('.mo_main01 a:last-child').find('p').html("<p>세르지오 타키니의 봄 컬렉션은 민감하게 반응하는<br>트렌트를 지향하기 위해 새로운 균형을 고민했습니다.<br>DAMARINDO 라인에서는 편안함과 세련미를<br>동시에 약속하는 아이템을 선보입니다.</p>");
    moSubtxt.eq(2).html("<p>세르지오 타키니의 봄 컬렉션~~");
    moSubtxt.eq(3).html("<p>세르지오 타키니 테스트~~");
    moSubtxt.eq(0).html("<p>세르지오 타키니 테스트~~");

});