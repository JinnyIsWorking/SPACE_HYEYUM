// main illust
$('#banner ul li').hide();
// $('#banner ul li:nth-child(1)').show();

setInterval(function(){
    $('#banner ul li:nth-child(1)').fadeIn(1700).next().fadeIn(2500).end().appendTo('#banner ul');
    // .end() 메서드는 재선택된 요소의 이전 요소를 선택하는 메서드입니다.
    // appendTo()는 선택한 요소를 다른 요소 안에 넣습니다.
    // .end().appendTo() -> .end() 선택된 요소를 .appendTo()의 소괄호 안에 넣는다.
},300);


// submenu
$('.submenu').hide();
$('.gnb_wrap li').mouseenter(function(){
    $('.submenu').stop().slideDown()
});
$('.nav').mouseleave(function(){
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


// scroll 
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#header').addClass('header_scroll')
    }else{
        $('#header').removeClass('header_scroll')
    }
});


// scroll up-down header
$(function() {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        if (nowScrollTop > prevScrollTop){ $('#header').addClass('active'); } 
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('#header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
    });
  });

// current bg
$('.title_bg ul li').hide();
$('.title_bg ul li:nth-child(1)').show();

setInterval(function(){
    $('.title_bg ul li:nth-child(1)').hide().next().show().end().appendTo('.title_bg ul');
    // .end() 메서드는 재선택된 요소의 이전 요소를 선택하는 메서드입니다.
    // appendTo()는 선택한 요소를 다른 요소 안에 넣습니다.
    // .end().appendTo() -> .end() 선택된 요소를 .appendTo()의 소괄호 안에 넣는다.
},500);


// program Swiper
const swiper = new Swiper('.swiper-container', {
    //기본 셋팅
    //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
    // direction: 'horizontal',
    //한번에 보여지는 페이지 숫자
    slidesPerView: 5,
    //페이지와 페이지 사이의 간격
    spaceBetween: 30,
    //드레그 기능 true 사용가능 false 사용불가
    debugger: true,
    //마우스 휠기능 true 사용가능 false 사용불가
    mousewheel: false,
    //반복 기능 true 사용가능 false 사용불가
    loop: true,
    //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
    centeredSlides: true,
    // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    // effect: 'fade',
    
    //자동 스크롤링
    autoplay: {
      //시간 1000 이 1초
      delay: 1800,
      disableOnInteraction: false,
     }
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