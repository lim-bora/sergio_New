

$(window).resize(function(){

    let $btn = $('.btn');

    if (window.innerWidth > 1024) {  //pc 마우스오버시 block, 마우스리브시 none

        $btn.mouseover(function(e){
            e.preventDefault();
            $(this).find('span').show();
        });
        $btn.mouseout(function(e){
            e.preventDefault();
            $(this).find('span').hide();
        });

    } else { //m 클릭시 block, 다른버튼 클릭시 전꺼 none

        $btn.click(function(e){
            e.preventDefault();
            $btn.find('span').hide();
            $(this).find('span').show();
        });

    }

}).resize();




$('.section2 .btn').eq(0).append('<span>클래식 CP 반팔 폴로셔츠</span>')
$('.section2 .btn').eq(1).append('<span>클래식 CP 플리츠 스커트</span>')
$('.section2 .btn').eq(2).append('<span>모노그램 테리 브이넥<br/>슬리브리스 드레스</span>')
$('.section2 .btn').eq(3).append('<span>MC 스태프 중목 양말</span>')
$('.section2 .btn').eq(4).append('<span>프레피 크루 하이 삭스</span>')


$('.section3 .btn').eq(0).append('<span>푄 우븐 하프집 긴팔 아노락</span>')
$('.section3 .btn').eq(1).append('<span>푄 우븐 숏팬츠</span>')
$('.section3 .btn').eq(2).append('<span>모노그램 자카드<br/>엠보스드 크롭 폴로셔츠</span>')
$('.section3 .btn').eq(3).append('<span>크루 우븐 스커트</span>')
$('.section3 .btn').eq(4).append('<span>TACCHINI\n<br/>1966 COURT</span>')
$('.section3 .btn').eq(5).append('<span>TACCHINI\n<br/>1966 COURT</span>')
$('.section3 .btn').eq(6).append('<span>푄 우븐 하프집 긴팔 아노락</span>')
$('.section3 .btn').eq(7).append('<span>푄 우븐 숏팬츠</span>')
$('.section3 .btn').eq(8).append('<span>모노그램 자카드<br/>엠보스드 크롭 폴로셔츠</span>')
$('.section3 .btn').eq(9).append('<span>크루 우븐 스커트</span>')
$('.section3 .btn').eq(10).append('<span>TACCHINI<br/>1966 COURT</span>')
$('.section3 .btn').eq(11).append('<span>TACCHINI<br/>1966 COURT</span>')

$('.section5 .btn').eq(0).append('<span>프로 SP 워드마크 브라탑</span>')
$('.section5 .btn').eq(1).append('<span>클래식 CP 플리츠 스커트</span>')


