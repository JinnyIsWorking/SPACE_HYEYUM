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


// scroll 
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


// page click
var pg_n = document.getElementsByClassName("pg_n");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < pg_n.length; i++) {
      pg_n[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < pg_n.length; i++) {
    pg_n[i].addEventListener("click", handleClick);
  }
}

init();