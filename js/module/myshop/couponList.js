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
})();
