$(document).ready(function () {
    $("dd").css("display","none")

    $(".standard_M dl dt").click(function (){
        $("dt").removeClass("on");
        $(this).addClass("on");
        $("dd").removeClass("on")
        $(this).next("dd").addClass("on");
        $("dt").children("img:nth-of-type(1)").css("display","block");
        $(this).children("img:nth-of-type(1)").css("display","none");
        $("dt").children("img:nth-of-type(2)").css("display","none");
        $(this).children("img:nth-of-type(2)").css("display","block");

        $(this).next("dd").stop().slideToggle(200);
        $(".standard_M dl dt").not(this).next("dd").stop().slideUp(200);
    })
})