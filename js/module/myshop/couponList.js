(function(){
	var toggleList = document.querySelectorAll('.couponList td.layer');
    toggleList.forEach(function(toggle){
        toggle.addEventListener('click', function() {
            var target = toggle.parentNode.nextElementSibling;
            if(toggle.className.indexOf('selected') > 0) {
                toggle.classList.remove('selected');
                target.classList.remove('selected');
            } else {
                toggle.classList.add('selected');
                target.classList.add('selected');
            }

            // 쿠폰 : 구매가격 쉼표 추가
            let prchsAmnt = $(this).closest('tbody').find('tr.selected td ul li:first-child .content');
            let prchsAmntRe = prchsAmnt.text().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            prchsAmnt.text(prchsAmntRe);
        });
    });

    //반복 : 사용가능기간 카운트형식으로 변경
    $('.couponList tbody').each(function(){
        let $tbody = $(this),
            $period = $tbody.find('.usePeriod .content'),
            period = $period.text(),
            replacePeriod = period.replaceAll('-', '/');

        getTime(replacePeriod, $period);
    });

    //반복 : 쿠폰혜택 컴마 추가
    $('.couponList tbody').each(function(){
        let $tbody = $(this),
            $benefit = $tbody.find('.cpBenefit .content'),
            benefit = $benefit.text();
        $benefit.text(comma(benefit))
    });
})();

/*******디데이 카운트계산*********/
function getTime(date, $el){
    let cnt = date;
    let strSlice = cnt.substring(0, 19); //시작날짜 커트
    let ddaySlice = cnt.substring(22, 32); //마지막날짜 커트
    const Dday = new Date(ddaySlice); //마지막날짜
    const today = new Date(); //오늘날짜
    const diff = Dday.getTime() - today.getTime(), //마지막날짜 - 오늘날짜(남은날짜)
        secInMs = Math.floor(diff / 1000), //남은날짜 / 1000 = 초단위로 변환
        minInMs = Math.floor(secInMs / 60), //남은초단위 / 60 = 분단위로 변환
        hourInMs = Math.floor(minInMs / 60), //남은분단위 / 60 = 시간단위로 변환
        days = Math.floor(hourInMs / 24); //남은시간단위 / 24 = 날짜로 변환

    //console.log(`${days}일 이내 (${strSlice} ~ ${ddaySlice})`);
    $el.text(`~${ddaySlice} (${days}일 남음)`);
}

/*******쿠폰혜택 컴마추가*********/
function comma(str){
    try {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    } catch (err) {
        console.log(err);
        return str;
    }
}