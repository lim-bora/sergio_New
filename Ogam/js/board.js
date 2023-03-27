
$(function() {
    //1:1문의 글쓰기페이지 관리자답변 유무 : 버튼 그리드 조절
    let hasBtn = $('.xans-board-write-9 .ec-base-button.gBottom').find('.hasBtn');

    if(hasBtn.hasClass("displaynone") === true) {//관리자답변없으면, 버튼2개면 한줄나열
        $('.xans-board-write-9 .ec-base-button.gBottom').css('flexDirection','row');
    } else {

    }
});