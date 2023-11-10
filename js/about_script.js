// submenu
$('.submenu').hide();
$('.gnb_wrap li').mouseenter(function () {
    $('.submenu').stop().slideDown()
});
$('.nav').mouseleave(function () {
    $('.submenu').stop().slideUp()
});

// $('.sub_deco').hide();

// // submenu_img
// $('.sub_deco').hide();
// $(".gnb_wrap li").mouseenter(function(){
//     $(this).children(".sub_deco").stop().slideDown();
// });
// $(".gnb_wrap li").mouseleave(function(){
//     $(this).children(".sub_deco").stop().slideUp();
// });


// scroll header css
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('#header').addClass('header_scroll')
    } else {
        $('#header').removeClass('header_scroll')
    }
});


// scroll up-down header 
$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        if (nowScrollTop > prevScrollTop) { $('#header').addClass('active'); }
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('#header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
    });
});



// scroll object
$(document).ready(function () {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll_on");

    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function () {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function () {
            const $el = $(this);

            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이

            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 130) && rect.bottom >= (contentHeight * exposurePercentage / 130)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= -300 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
});
