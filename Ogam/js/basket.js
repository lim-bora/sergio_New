$(function(){
    // let prdList = $('.ec-base-prdInfo');
    // let optionGroup = $('.xans-order-basketpackage .prdBox').find('.optionGroup');
    // let optionStr = optionGroup.find('.optionStr');
    // // console.log(prdList.length)
    //
    //
    // for (let i = 0; i < prdList.length; i++){
    //     // 옵션 [] 자르기
    //     let sliceTxt = optionStr[i].text();
    //     let replaceTxt = sliceTxt.replaceAll('[', '').replaceAll(']', '')
    //     optionStr.text(replaceTxt)
    // }
    //

    // 할인가 0원일 경우 없애기
    const discountPrice = $('.ec-base-prdInfo .description .price li .discount_price');
    discountPrice.each(function () {
        const discountPriceTxt = $(this).text();
        if(discountPriceTxt === '-0') {
            $(this).remove();
        }
    });

});


