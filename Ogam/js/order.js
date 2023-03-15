$(function(){
    //타이틀명 변경
    $('#header .titleArea h1').text('주문결제');
    $('#ec-jigsaw-title-orderProduct').text('주문내역');
    $('#ec-jigsaw-title-shippingInfo h2').text('배송정보');

    //주문서페이지 헤더 스타일 추가
    if (window.location.pathname == '/order/orderform.html'){
        $('#header').addClass('headerOrder');
        $('#container').addClass('containerOrder');
    }





});

$(function(){
    //주문자 텍스트변경
    let orderInputParent = $('.address_form ').find('#oname').parent()
    let orderPerson = orderInputParent.prev();
    orderPerson.text('주문하시는 분');

    //주문자 인풋 : 플레이스홀더 추가
    let orderInput = $('.address_form ').find('#oname');
    orderInput.attr('placeholder','이름을 입력해 주세요.');

    //이메일하단 텍스트추가
    let emailInput = $('.ec-orderform-emailRow');
    let emailTxt = `<span class="emailtxt">이메일로 주문 처리 과정을 보내드립니다.</span>`
    let emailTxt2 = `<span class="emailtxt">수신 가능한 이메일 주소를 입력해주세요.</span>`
    emailInput.append(emailTxt,emailTxt2)

    //주문검색 -> 검색 텍스트 변경
    $('#btn_search_ozipcode').text('검색');



});

$(function(){
    //요청사항 텍스트추가
    let message = $('.ec-shippingInfo-shippingMessage #omessage_select');
    let messageTitle = `<span class="messageTxt">요청사항</span>`
    message.before(messageTitle)
});