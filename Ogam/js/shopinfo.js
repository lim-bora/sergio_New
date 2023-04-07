$(document).ready(function () {
    $("dd").css("display","none")

    $(".standard_M dl dt").click(function (){
        $(this).next("dd").stop().slideToggle(200);
        $(".standard_M dl dt").not(this).next("dd").stop().slideUp(200);

        var membership_img_src=($(this).children("img").attr("src") === "/SkinImg/img/btn_page_down.png")
            ? "/SkinImg/img/btn_page_up.png"
            : "/SkinImg/img/btn_page_down.png";
        $(this).children("img").attr("src",membership_img_src);
    })
})