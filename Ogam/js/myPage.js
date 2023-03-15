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


//최근본상품 할인판매가 있을땐 판매가칼라 회색, 아니면 검정색
$(function() {
    let sellPrice = $('.xans-product-recentlist .description .price').find('.sellPrice')//판매가
    let salePrice = $('.xans-product-recentlist .description .price').find('.salePrice') //할인판매가
    if(salePrice.hasClass('displaynone') === true){//할인판매가 없으면
        sellPrice.removeClass('priceGray');
        sellPrice.addClass('priceBlack');
    }else if(salePrice.hasClass('displaynone') === false){//할인판매가 있으면
        sellPrice.removeClass('priceBlack');
        sellPrice.addClass('priceGray');
    }
    // console.log(sellPrice);
    // console.log(salePrice);


});

// //위시리스트 할인판매가 있을땐 판매가칼라 회색, 아니면 검정색
// $(function() {
//     let sellPriceAdd = $('.xans-myshop-wishlist .description .price .sellPrice strong') //판매가안에 글자 셀렉
//     let salePrice = $('.xans-myshop-wishlist .description .price .salePrice') //할인판매가
//     if(salePrice.length > 0){//할인판매가 존재하면(할인상품이면)
//         sellPriceAdd.removeClass('priceBlack');//판매가 글자색 검정제거
//         sellPriceAdd.addClass('priceGray');//판매가 글자색 회색
//     }else{//할인판매가 없으면
//         sellPriceAdd.removeClass('priceGray');//판매가 글자색 회색
//         sellPriceAdd.addClass('priceBlack');//판매가 글자색 검정추가(검정컬러 클래스생성)
//
//     }
// });

$(function() {
    // 옵션 수량 :, [] 자르기
        let option = $(".optionGroup").children('div');
        let sliceTxt = option.text();
        /*console.log(sliceTxt)*/
        let replaceTxt = sliceTxt.replaceAll('옵션', '').replaceAll(':', '')
        option.text(replaceTxt)
});

