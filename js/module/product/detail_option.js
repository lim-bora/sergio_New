jQuery(document).ready(function() {
	/* 상품상세 레이어옵션 높이조절 */
    jQuery('#product_detail_option_layer').css('height','fit-content');
});




$(document).ready(function(){

    let close = $('#totalProducts .option_product td').find('.delete');
    $('#totalProducts .option_product tr').find('right').insertAfter(close);
    $('#totalProducts .option_product tr').css('color','red');
});