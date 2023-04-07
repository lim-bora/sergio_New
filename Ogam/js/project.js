window.addEventListener('DOMContentLoaded', (event) => {


    let $catgoryItem = $('[id^="og_menuCategory_item_cate_"]');

    $catgoryItem.each(function(){
        let $e = $(this),
            index = $e.index() + 1,
            cateNum = $e.attr('id').replace(/[^0-9]/gi, '');
        $('#og_menuCate_' + index + ' .og_product_here').append($e.find('.ec-base-product'));
        $('#og_menuCate_' + index + ' .og_title_here').append($e.find('h3'));
    });


    const swiper1 = new Swiper('.cnt7 .swiper', {
        slidesPerView: 4,
        spaceBetween: 8,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: "auto"
            }
        }
    });


    var ww = $(window).width();
    var swiper2 = undefined;
    var swiper3 = undefined;
    function initSwiper() {
        if (ww < 1024 && swiper2 == undefined && swiper3 == undefined) {
            swiper2 = new Swiper('.cnt4 .swiper', {
                slidesPerView: "auto",
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            });
            swiper3 = new Swiper('.cnt5 .swiper', {
                slidesPerView: "auto",
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            });
        } else if (ww >= 1024 && swiper2 != undefined && swiper3 != undefined) {
            swiper2.destroy();
            swiper2 = undefined;
            swiper3.destroy();
            swiper3 = undefined;
        }
    }
    initSwiper();
    $(window).on('resize', function () {
        ww = $(window).width();
        initSwiper();
    });

    const swiper = new Swiper(".section5 .project3Swiper", {
        slidesPerView: "auto",
        watchOverflow : true,
        resistance : false,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

});



