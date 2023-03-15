$(function() {
    // 공지사항, 자주묻는질문 페이지 탭 스타일 변경
    const boardPara = document.location.href;
    if(boardPara.includes('board_no=1') || boardPara.includes('board' && '/1/') ) {
        $('.xans-board-listpackage .ec-base-tab.typeMenu .menu li:first-child .button').addClass('active');
    }
    if(boardPara.includes('board_no=3') || boardPara.includes('board' && '/3/')) {
        $('.xans-board-listpackage .ec-base-tab.typeMenu .menu li:nth-child(2) .button').addClass('active');
    }

    // 기간 셀렉트박스 기본값 : 전체
    $("#search_date option:last").attr("selected","selected")
}) ;