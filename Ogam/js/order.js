$(function(){
    //타이틀명 변경
    $('#header .titleArea h1').text('주문결제');
    $('#ec-jigsaw-title-orderProduct').text('주문내역');
    $('#ec-jigsaw-title-shippingInfo h2').text('배송정보');
    $('#ec-jigsaw-title-payment h2').text('결제예정금액');
    $('#ec-jigsaw-title-discount h2').text('할인적용');

    //주문서페이지 헤더 스타일 추가
    if (window.location.pathname == '/order/orderform.html'){
        $('#header').addClass('headerOrder');
        $('#container').addClass('containerOrder');
    }

    //주문정보 접혀진현상 제거
    let dd = $('.billingNshipping');
    dd.children(":first").removeClass('ec-base-fold');

    //이용약관 체크박스 디자인만 삽입
    let chk = $('#chk_purchase_agreement1').find('span');
    let checkBox = `<input type="checkbox" id="save_paymethod" name="save_paymethod" value="" checked="checked">`
    chk.prepend(checkBox);

    let chkk = $('#agreeMsg');
    chkk.prepend(checkBox);

});

$(function(){
    //주문자 텍스트변경
    let orderInputParent = $('.address_form ').find('#oname').parent()
    let orderPerson = orderInputParent.prev();
    orderPerson.text('주문하시는 분');

    //받으시는 분 텍스트변경
    let orderPersonnew = $('.ec-shippingInfo-newAddress-name').find('th')
    orderPersonnew.text('받으시는 분');

    //텍스트변경
    $('.paymentPrice .heading').text('최종결제금액');

    //주문자 인풋 : 플레이스홀더 추가
    let orderInput = $('.address_form ').find('#oname');
    orderInput.attr('placeholder','이름을 입력해 주세요.');

    //이메일 인풋 : 플레이스홀더 추가
    $('#oemail1').attr('placeholder','이메일을 입력해 주세요.');

    //이메일하단 텍스트추가
    let emailInput = $('.ec-orderform-emailRow');
    let emailTxt = `<span class="emailtxt">이메일로 주문 처리 과정을 보내드립니다.</span>`
    let emailTxt2 = `<span class="emailtxt">수신 가능한 이메일 주소를 입력해주세요.</span>`
    emailInput.append(emailTxt,emailTxt2)

    //검색,조회버튼들 텍스트 변경
    $('#btn_search_ozipcode').text('검색');
    $('#btn_search_rzipcode').text('검색');
    $('#all_use_mileage').text('전액 사용');
    $('#btn_coupon_select').text('조회');

    // 마일리지-쿠폰 순서변경
    $(".discountDetail.mCouponSelect").insertAfter("#mileage_use_area");
    $(".discountDetail.mCouponModify").insertAfter(".discountDetail.mCouponSelect");


    //결제수단 텍스트
    $('.ec-paymethod-newArea > label').empty();
    $('.ec-paymethod-newArea > label').append('<span class="payTitle">결제수단 선택</span>');
});


$(function(){
    //요청사항 텍스트추가
    let message = $('.ec-shippingInfo-shippingMessage #omessage_select');
    let messageTitle = `<span class="messageTxt">요청사항</span>`
    message.before(messageTitle)


    // $('#mileage_use_area .summary').text('보유 마일리지');
    $('#mileage_use_area .summary').contents()[0].textContent = "보유 마일리지 "
});

$(function() {
    // 쿠폰 이름변경
    let coupon = $('.mCouponSelect .heading');
    coupon.text('쿠폰');

    //결제하기 텍스트 변경
    let payBtn = $('#btn_payment');
    payBtn.text('결제하기');

});
$(function() {
    //사용가능한 마일리지
    let mileage = $('#ec-jigsaw-area-discount').find('#mileage_use_area');
    let summary = mileage.find('.summary');
    let mileageUseBox = `<span class="mileageUse">사용가능한 마일리지 </span>`
    summary.before(mileageUseBox);
    let mileageUse = CAFE24.SHOP_FRONT_ORDERFORM_DATA.mileage.fMemberAvailMileage;
    $('.mileageUse').append(comma(mileageUse) + '원');

    //마일리지문구 수정
    let mileageHelp = mileage.find('.ec-base-help')
    let helplimitNew = `<li class="mileage_max_limit">1회 구매 시, 최대 상품구매 합계액의 50%까지 사용가능 합니다.</li>`
    mileageHelp.prepend(helplimitNew)

    //마일리지문구 가리기
    $('#mileage_max_limit').css('display','none');
    let txtNone = $('#mileage_max_unlimit').next();
    txtNone.css('display','none');
});
$(function() {
    //상단 총 금액 추가
    let totalPrice = $('#ec-jigsaw-area-orderProduct').find('.totalPrice');
    let totalAdd = `<div class="totalAdd"></div>`
    totalPrice.prepend(totalAdd);
    let totalH3 = `<h3>총 금액</h3>`
    let totalprice = `<span class="totalprice"></span>`;
    $('.totalAdd').append(totalH3,totalprice);
    let totalComma = CAFE24.SHOP_FRONT_ORDERFORM_DATA.order.fBasicProductTotalPrice;
    $('.totalprice').append(comma(totalComma) + '원')

    console.log(comma(totalComma));

});

$(function() {
    //비회원 비밀번호섹션 텍스트 변경
    let passTxt = $('#mCafe24Order .pannelArea .ec-base-table tr:nth-child(1)').find('th');
    passTxt.text('주문조회 비밀번호');
    let passTxt2 = $('#mCafe24Order .pannelArea .ec-base-table tr:nth-child(2)').find('th');
    passTxt2.text('주문조회 비밀번호 확인');

    //비회워 주문약관 텍스트
    let allAgreeTitle = `<h2 class="allAgreeTitle">이용약관</h2>`
    $('#all_agreement_checkbox').prepend(allAgreeTitle)
    $('.allAgreeTitle').addClass('titleLine')

});

//금액+컴마 정규삭
function comma(str){
    try {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    } catch (err) {
        console.log(err);
        return str;
    }
    ;
}

// $(function() {
//     let totalPrice = $('#payment_total_order_sale_price_view');
//     let totalTxt = totalPrice.text();
//     console.log(totalTxt)
//     $('#btn_payment').prepend(totalTxt );
// });