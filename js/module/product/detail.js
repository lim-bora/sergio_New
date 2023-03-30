function removePagingArea(oTarget)
{
    if ($(oTarget).length < 1 && (oTarget != '#prdReview' || oTarget != '#prdQna')) return;

    if ($(oTarget).css('display') == 'block') {
        if (oTarget == '#prdReview') {
            var record = $('.xans-record-', '.xans-product-review').first();
            if (record.length < 1 || record.is(':not(:visible)')) {
                $('.xans-product-reviewpaging').remove();
             }
         } else if (oTarget == '#prdQnA') {
            var record = $('.xans-record-', '.xans-product-qna').first();
            if (record.length < 1 || record.is(':not(:visible)')) {
                $('.xans-product-qnapaging').remove();
            }
         }
     }
}

$(function() {

    $('#actionCartClone, #actionWishClone, #actionBuyClone, #actionWishSoldoutClone').off().on('click', function() {
        try {
            var id = $(this).attr('id').replace(/Clone/g, '');
            if (typeof(id) !== 'undefined') $('#' + id).trigger('click');
            else return false;
        } catch(e) {
            return false;
        }
    });

    function productDetailOrigin(){
        var imgChk = $('#prdDetailContent').find('img').length;
        if(imgChk <= 0){
            $('#prdDetailBtn').remove();
        }
    }
    productDetailOrigin();

    // Add Image
    var oTarget = $('.xans-product-mobileimage ul li');
    var oAppend = oTarget.first().children('p').clone();

    oTarget.slice(1).each(function() {
        // $(this).children().wrap(function() {
        //     return '<p class="thumbnail">' + $(this).html() + oAppend.html() + '</p>';
        // });
        this.innerHTML = '<p class="thumbnail">' + oAppend.html() + this.innerHTML + '</p>';
        if ($(this).children('p').children('img').length > 1) {
            $(this).children('p').children('img').first().remove();
        }
    });
});

/** 오우이_JS 210519 **/
jQuery(document).ready(function() {

	/* 상세 관련상품 */
	if (jQuery('.xans-product-relation').val() != undefined) {	//관련상품 모듈 있을떄만 실행(없으면 주문서페이지에서 오류) -정환
		var relation_slide = new Swiper('.relation_slide', {
			slidesPerView: 4,
			spaceBetween: 8,
			observer: true,
			observeParents: true,
			watchOverflow: 'true', // 스와이프가 한개일때 버튼 라인 비활성
			speed:700,
			// navigation: {
			// 	nextEl: '.swiper-next-relation',
			// 	prevEl: '.swiper-prev-relation',
			// },
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
				draggable: true,
			},
			autoplay: false,
			breakpoints: {
				768: {
					slidesPerView: 2.2,
					spaceBetween: 10,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: false,
                    },
                    autoplay: false,
				},
			}
		});
	}

	/* 할인율 없을시 상품명길이 수정 */
	setTimeout(function(){
		jQuery(".sale_box").each(function(){
			jQuery(".xans-product-detail .headingArea").addClass('sale_on');
		});
	},500)

    // 상품상세 탭 이벤트
    $('#tabProduct a').click(function(e){
        var oTarget = $(this).attr('href');
        $(this).parent('li').addClass('selected').siblings().removeClass('selected');
        var domWidth = $(document).width();
        if(domWidth < 1024){	// 모바일에서만 실행
			$('#tabProduct a').each(function(){
				var oSiblings = $(this).attr('href');
				if (oTarget != oSiblings) {
					$(oSiblings).hide();
				} else {
					$(oTarget).show();
				}
			});
		}
        removePagingArea(oTarget);
        if(e) e.preventDefault();
    });

});

//할인판매가, 판매가 위치조정
$(function() {
    let sellPrice = $('.xans-product-detaildesign tr[data-name="판매가"]')
    $('.xans-product-detaildesign tr[data-name="할인판매가"] td > span').append(sellPrice);
});

//할인판매가 있을땐 판매가칼라 회색, 아니면 검정색
$(function() {
    let sellPrice = $('.xans-product-detaildesign tr[data-name="판매가"]')
    let sellPriceAdd = $('.xans-product-detaildesign tr[data-name="판매가"] td span') //판매가안에 글자 셀렉
    let salePrice = $('.xans-product-detaildesign tr[data-name="할인판매가"]') //할인판매가
    if(salePrice.length > 0){//할인판매가 존재하면
        sellPriceAdd.removeClass('priceBlack');//판매가 글자색 검정제거
        sellPrice.addClass('margin');
    }else{
        sellPriceAdd.addClass('priceBlack');//판매가 글자색 검정추가(검정컬러 클래스생성)
    }
});


$(function() {
    var swiper = new Swiper(".prdImgSwiper", {
        direction: "vertical",
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        debugger: true,
        mousewheel : {
            invert : true      // 마우스휠사용
        },
        speed: 500,
        slidesPerView: 1,
    });
});

$(window).resize(function(){
    let colorSection = $('.xans-product-detail .productSet');
    if (window.innerWidth < 1024) {
        $('.xans-product-detaildesign tr[data-name="할인판매가"]').after(colorSection);
    }
}).resize();

$(function() {
    //할인율 위치변경
    $('#totalProducts .option_product td .product').not('span').css('display','none');
    $('.xans-product-detaildesign tr[data-name="판매가"]').insertBefore('#span_product_price_sale span');
});


$(document).ready(function(){
    //아코디언
    let toggle_detail = $(".detailToggle .box div")
    toggle_detail.hide();
    $("ul li > p").click(function(){
        $(this).next('div').stop().slideToggle(300);
        $(this).find("span").toggleClass('rotate');
        $(this).parent("li").siblings().children("div").slideUp(300);
    });
});
//아코디언 해상도 크기에따라 위치변경
$(window).resize(function(){
    if (window.innerWidth < 1024) {  // 다바이스 크기가 1024이하일때
        $('.detailToggle').insertAfter('#prdDetail')
    }else{
        $('.detailToggle').insertAfter('#fixedActionButton')
    }
}).resize();

//옵션팝업 슬라이드업, 바디 스크롤방지
$(window).resize(function(){
    if (window.innerWidth < 1024) {  // 다바이스 크기가 1024이하일때
        $('#orderFixArea').click( function() {
            $('#opt_layer_iframe_parent').slideUp();
            $('body').css('overflow','hidden');
        } );
    }
}).resize();

$(document).ready(function(){
    //소재 텍스트 유무 스타일적용
    let materialTxt = $('.xans-product-detail .infoArea .info_material');
    let productName = materialTxt.next('h1');
    if(materialTxt.length == 0){
        productName.css('marginTop','0px');
    }else{
        productName.css('marginTop','16px');
    }
});
