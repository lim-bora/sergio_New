$(function(){

    //쿠폰 : 쿠폰코드 플레이스홀더 추가
    $('#coupon_code').attr('placeholder','쿠폰번호를 입력해주세요');

    //교환신청페이지 : 플레이스홀더 추가
    $('#reason_detail').attr('placeholder','사유를 입력해주세요');

    //마일리지세부내역 좌측메뉴 마진탑값 추가
    if (window.location.pathname == '/myshop/mileage/historyList_add.html' || window.location.pathname == '/myshop/mileage/unavailList.html' || window.location.pathname == '/myshop/mileage/couponList.html'){
        $('#myshopMain').addClass('active');
    }

    //위시리스트 전체갯수 총합
    let wishTotal = $(".xans-myshop-wishlistitem .ec-base-prdInfo").length;
    let wishproductTotal = `<span>(${wishTotal}건)</span>`
    $(".xans-myshop-wishlistbutton .wishTotal").append(wishproductTotal);



});




$(function() {
    let totalMileage = $('.xans-myshop-asyncbenefit .wonDelet').text();
    // let milegeSlice = totalMileage.replaceAll('원', '')
    // totalMileage.text(milegeSlice)
    console.log(totalMileage);
    // console.log(milegeSlice)
});

