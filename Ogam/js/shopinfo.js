$(".standard_M dl dt").click(function (){
    $(this).next("dd").stop().slideToggle(200);
    $(".standard_M dl dt").not(this).next("dd").stop().slideUp(200);

    $(this).toggleClass('on');
    $(this).parent().siblings().children('dt').removeClass('on');
});