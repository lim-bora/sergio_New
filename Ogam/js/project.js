

window.addEventListener('DOMContentLoaded', (event) => {


    let $catgoryItem = $('[id^="og_menuCategory_item_cate_"]');

    $catgoryItem.each(function(){
        let $e = $(this),
            index = $e.index() + 1,
            cateNum = $e.attr('id').replace(/[^0-9]/gi, '');
        $('#og_menuCate_' + index + ' .og_product_here').append($e.find('.ec-base-product'));
        $('#og_menuCate_' + index + ' .og_title_here').append($e.find('h3'));
    });






});