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

$('.sub_deco').hide();

// submenu_img
$('.sub_deco').hide();
$(".gnb_wrap li").mouseenter(function(){
    $(this).children(".sub_deco").stop().slideDown();
});
$(".gnb_wrap li").mouseleave(function(){
    $(this).children(".sub_deco").stop().slideUp();
});


// scroll 
$(window).scroll(function(){
    if($(this).scrollTop() > 780){
        $('#top').addClass('top_scroll')
    }else{
        $('#top').removeClass('top_scroll')
    }
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