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