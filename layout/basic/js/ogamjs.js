$(function () {
    // placeholder 삽입
    $(".xans-layout-searchheader #keyword").attr("placeholder", "검색어를 입력해 주세요.");
    $(".xans-product-searchdata .searchField .keyword").attr("placeholder", "검색어를 입력해 주세요.");
    $("input#name").attr("placeholder", "이름을 입력해 주세요.");
    $("input#email").attr("placeholder", "이메일을 입력해 주세요.");
    $("input#email1").attr("placeholder", "이메일을 입력해 주세요.");
    $("input#member_id").attr("placeholder", "아이디를 입력해 주세요.");
    $("input#member_passwd").attr("placeholder", "비밀번호를 입력해 주세요.");
    $("input#passwd").attr("placeholder", "비밀번호를 입력해 주세요.");
    $("input#user_passwd_confirm").attr("placeholder", "비밀번호를 입력해 주세요.");
    $("input#bank_account_owner").attr("placeholder", "예금주를 입력해 주세요.");
    $("input#bank_account_no").attr("placeholder", "계좌번호를 입력해 주세요.");

    // 아이디찾기 페이지 휴대폰번호 인증 우선 체크
    let isClicked = true;
    changeRadioBtnState();

    function changeRadioBtnState() {
        if (isClicked)
            $("#check_method2").prop('checked', true);
        else
            $("#check_method2").prop('checked', false);

        $('.xans-member-findid #email_view').css('display', 'none');
        $('.xans-member-findid #ssn_view').css('display', 'none');
        $('.xans-member-findpasswd #email_view').css('display', 'none');
        $('.xans-member-findpasswd #ssn_view').css('display', 'none');
        $('.xans-member-findid #mobile_view').css('display', 'inline')
        $('.xans-member-findpasswd #mobile_view').css('display', 'inline')
    }

    $('#searchType').on('change', function () {
        changeRadioBtnState();
    });

    $('#postBtn').text('검색');


    // 쇼핑큐레이션 js 영역
    let searchFilter = $('tr.xans-product-searchfilterlist th.title');
    searchFilter.on('click', function () {
        $(this).parent().children('td').stop().slideToggle();
        $(this).toggleClass('arrowUp')
        $(this).parent().siblings().children('td').css('display', 'none');
        $(this).parent().siblings().children('th.title').removeClass('arrowUp');

        $('.menuCategory.menu').css('display', 'none');
        $('p.cateTitle').removeClass('arrowUp');
    });

    // 쇼핑큐레이션 : MO 필터 버튼 클릭 시 노출
    $('.filterBtn').on('click', function () {
        $('#searchContent').css('display', 'block');
        $('body').addClass('ofHidden');
    });
    $('#searchContent .closeFilter').on('click', function () {
        $('#searchContent').css('display', 'none');
        $('body').removeClass('ofHidden');
    });

    // 쇼핑큐레이션 : 항목 클릭 시 슬라이드 다운
    $('p.cateTitle').on('click', function () {
        $('.menuCategory.menu').stop().slideToggle({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $(this).toggleClass('arrowUp');
        $('tr.xans-product-searchfilterlist td').css('display', 'none');
        $('tr.xans-product-searchfilterlist th.title').removeClass('arrowUp');
    });

    // 쇼핑큐레이션 : 가격 항목 selected 클래스 제어
    $('#searchContent tr .button.full li button').on('click', function () {
        $(this).parent().siblings().removeClass('selected');
    });

    // 쇼핑큐레이션 : 컬러칩
    //쇼핑큐레이션
    $('.xans-product-searchfilterlist .xans-product-filterform li').each(function () {
        for(let i=0; i< $(this).length; i++){
            let filterTxt =  $(this).find('button').text();
            console.log(filterTxt);
            switch (filterTxt) {
                case 'BLACK' :
                    $(this).prepend('<span class="colorchip black"></span>');
                    break
                case 'WHITE' :
                    $(this).prepend('<span class="colorchip white"></span>');
                    break
                case 'IVORY' :
                    $(this).prepend('<span class="colorchip ivory"></span>');
                    break
                case 'BEIGE' :
                    $(this).prepend('<span class="colorchip beige"></span>');
                    break
                case 'YELLOW' :
                    $(this).prepend('<span class="colorchip yellow"></span>');
                    break
                case 'ORANGE' :
                    $(this).prepend('<span class="colorchip orange"></span>');
                    break
                case 'PINK' :
                    $(this).prepend('<span class="colorchip pink"></span>');
                    break
                case 'RED' :
                    $(this).prepend('<span class="colorchip red"></span>');
                    break
                case 'KHAKI' :
                    $(this).prepend('<span class="colorchip khaki"></span>');
                    break
                case 'GRAY' :
                    $(this).prepend('<span class="colorchip gray"></span>');
                    break
                case 'BLUE' :
                    $(this).prepend('<span class="colorchip blue"></span>');
                    break
                case 'NAVY' :
                    $(this).prepend('<span class="colorchip navy"></span>');
                    break
                case 'PURPLE' :
                    $(this).prepend('<span class="colorchip purple"></span>');
                    break
                case 'GREEN' :
                    $(this).prepend('<span class="colorchip green"></span>');
                    break
            }
        }
    })


    // 통합검색 : 판매가 스타일 조정
    let searchSalePrice = $('.xans-search-result .prdList .spec > li[data-name="할인판매가"]');
    if(searchSalePrice.length > 0) {
        console.log("hi");
        searchSalePrice.parent().find('li[data-name="판매가"] > span').addClass('active');
    }

    // 탑 버튼
    $(window).scroll(function(){

        if( $(this).scrollTop() > 100 ){
            $(".btnGoTop").addClass("on");
        }
        else{
            $(".btnGoTop").removeClass("on");
        }

    });

    $(".btnGoTop").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'});
    });

    // PLP js 영역
    let salePrice = $('.ec-base-product .prdList .spec > li[data-name="할인판매가"]');
    $('.ec-base-product .prdList .spec > li[data-name="할인판매가"] > span > span').addClass('discountRate');
    if(salePrice.length > 0) {
        salePrice.parent().find('li[data-name="판매가"] > span').addClass('active');
    }

    // 할인율 위치 이동
    salePrice.each(function () {
        let discountRate = $(this).find('.discountRate');
        if($(this).length > 0) {
            $(this).parent().find('li[data-name="판매가"]').append(discountRate);
        }
    });

    // 매장찾기 팝업
    $('.storeGuide').on('click', function () {
       $('.store_popup').addClass('active');
       $('body').addClass('ofHidden');
    });
    $('.close_popup').on('click', function() {
       $('.store_popup').removeClass('active');
       $('body').removeClass('ofHidden');
    });
    $('.close_popup_icon').on('click', function() {
        $('.store_popup').removeClass('active');
        $('body').removeClass('ofHidden');
    });
    $('.close_map').on('click', function() {
        $('.store_map_MO').hide();
    });
    $('.store_list li').on('click', function () {
        $('.store_map_MO').show();
    });


    // 아이디찾기, 비밀번호 찾기 js
    $(".xans-member-findid #searchType option[value='indibuis']").remove();
    $(".xans-member-findid #searchType option[value='corp']").remove();
    $(".xans-member-findpasswd  #searchType option[value='indibuis']").remove();
    $(".xans-member-findpasswd  #searchType option[value='corp']").remove();

    // 고객센터 : 관리자 only 체크박스 간격 조정
    let boardChkbox = $('.ec-base-table.typeList .xans-board-1002 td.subject .boardChk')
    if(boardChkbox.length > 0) {
        $('.ec-base-table.typeList .xans-board-1002 td:not(:first-child)').css('padding-left','24px')
    }
});


//인트로 닫기버튼
function introClose(){
    $('.introBanner').css('display','none');
    $('.introClose').css('display','none');
}
