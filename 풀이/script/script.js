$(function () {
    // gnb 메뉴
    $(".mainLi, #subMenuBG").mouseover(function(){
        $(".subMenu").stop().slideDown(500);
        $("div#subMenuBG").stop().slideDown(500);
    });

    $(".mainLi, #subMenuBG").mouseout(function(){
        $(".subMenu").stop().slideUp(50);
        $("div#subMenuBG").stop().slideUp(50);
    });



});