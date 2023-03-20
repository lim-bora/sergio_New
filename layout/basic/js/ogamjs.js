$(function () {
    // placeholder 삽입
    $(".xans-layout-searchheader #keyword").attr("placeholder", "검색어를 입력해주세요.");
    $(".xans-product-searchdata .searchField .keyword").attr("placeholder", "검색어를 입력해주세요.");
    $("input#name").attr("placeholder", "이름을 입력해주세요.");
    $("input#email").attr("placeholder", "이메일을 입력해주세요.");
    $("input#email1").attr("placeholder", "이메일을 입력해주세요.");
    $("input#member_id").attr("placeholder", "아이디를 입력해주세요.");
    $("input#member_passwd").attr("placeholder", "비밀번호를 입력해주세요.");
    $("input#user_passwd_confirm").attr("placeholder", "비밀번호를 입력해주세요.");
    $("input#bank_account_owner").attr("placeholder", "예금주를 입력해주세요.");
    $("input#bank_account_no").attr("placeholder", "계좌번호를 입력해주세요.");

    // 아이디찾기 페이지 휴대폰번호 인증 우선 체크
    let isClicked = true;
    changeRadioBtnState();
    foreignerDisplay();

    function changeRadioBtnState() {
        if (isClicked)
            $("#check_method2").prop('checked', true);
        else
            $("#check_method2").prop('checked', false);

        $('.xans-member-findid #email_view').css('display','none');
        $('.xans-member-findid #ssn_view').css('display','none');
        $('.xans-member-findpasswd #email_view').css('display','none');
        $('.xans-member-findpasswd #ssn_view').css('display','none');
        $('.xans-member-findid #mobile_view').css('display','inline')
        $('.xans-member-findpasswd #mobile_view').css('display','inline')
    }
    $('#searchType').on('change', function() {
        changeRadioBtnState();
    });


    // 회원가입 : 외국인 회원가입 이름 필드 비노출 함수
    function foreignerDisplay() {
        let foreForm = $('.xans-member-join .ec-base-table #foreignerAuth');
        if(foreForm.css('display') === 'none') {
            $('.xans-member-join .ec-base-table th#nameTitle').parent().removeClass('layout_hidden');
            console.log("외국인 안보임");
        } else {
            $('.xans-member-join .ec-base-table th#nameTitle').parent().addClass('layout_hidden');
            console.log("외국인 보임");
        }
    }
    $("input[name='member_type']").on('change', function (){
        foreignerDisplay();
    });


    // 쇼핑큐레이션 js 영역
    let searchFilter = $('tr.xans-product-searchfilterlist th.title');
    searchFilter.on('click',function () {
        $(this).parent().children('td').stop().slideToggle();
        $(this).toggleClass('arrowUp')
        $(this).parent().siblings().children('td').css('display','none');
        $(this).parent().siblings().children('th.title').removeClass('arrowUp');

        $('.menuCategory.menu').css('display','none');
        $('p.cateTitle').removeClass('arrowUp');
    });

    $('.xans-product-normalmenu .filterBtn').on('click', function (){
        $('#searchContent').css('display','block');
        // $('body').addClass('ofHidden')
    });
    $('#searchContent .closeFilter').on('click', function () {
        $('#searchContent').css('display','none');
        // $('body').removeClass('ofHidden')
    });

    $('p.cateTitle').on('click',function () {
        $('.menuCategory.menu').stop().slideToggle();
        $(this).toggleClass('arrowUp');
        $('tr.xans-product-searchfilterlist td').css('display','none');
        $('tr.xans-product-searchfilterlist th.title').removeClass('arrowUp');
    });
});