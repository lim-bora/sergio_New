
$(document).ready(function() {
    //sec02 img zoomIn
    $('.section2 .imgBox a').mouseover(function(){
        let $this = $(this).find('img');
        $this.addClass('zoomOn');
    });
    $('.section2 .imgBox a').mouseleave(function(){
        let $this = $(this).find('img');
        $this.removeClass('zoomOn');
    });

    //맵 리사이징
    $('img[usemap]').rwdImageMaps();


    //sec2백그라운드배경 높이 유동적으로 조절
    $(window).resize(function(){
        resize();
    })
    $(window).trigger('resize');



    //sec02 cate 텍스트 추가
    let $imgBox = $('.section2 .content .imgBox'),
        cate = $imgBox.find('a');
        // cateTxt = cate.find('img');

        cate.eq(0).append('<span class="cateTxt">T-SHIRTS</span>');
        cate.eq(1).append('<span class="cateTxt">SKIRTS</span>');
        cate.eq(2).append('<span class="cateTxt">SHOES</span>');






});

function resize(){
    //컨텐츠의 헤이트값 가져와 부모의 헤이트값으로 줌으로 백그라운드이미지 유동적 조절
    let section02 = $('.section2');
    let sec02Height = $('.section2 .content').innerHeight();
    let section04 = $('.section4');
    let sec04Height = $('.section4 .content').innerHeight();
    section02.css("height",sec02Height);
    section04.css("height",sec04Height);
}

//반응형리사이징 새로고침
let flag = (window.innerWidth < 1024) ? 'a' : 'b';
let flag_chk;
let flag_start = 0;
$(window).resize(function(){
    flag_chk = (window.innerWidth < 1024) ? 'a' : 'b';
    if(flag !== flag_chk && flag_start == 0){
        flag_start ++;
        location.reload();
    }
});

