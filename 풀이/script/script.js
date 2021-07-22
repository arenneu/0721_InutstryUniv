$(function () {
    // gnb 메뉴 시작
    $(".mainLi, #subMenuBG").mouseover(function(){
        $(".subMenu").stop().slideDown(500);
        $("div#subMenuBG").stop().slideDown(500);
    });

    $(".mainLi, #subMenuBG").mouseout(function(){
        $(".subMenu").stop().slideUp(50);
        $("div#subMenuBG").stop().slideUp(50);
    });
    // gnb 메뉴 끝
    // 슬라이드쇼

    setInterval(fnslide, 3000);
    function fnslide(){
        $("#shuttleFrame").animate(
            {"margin-left":"-1200px"},
            3000,
            function(){
                $("#slide a:first-child").insertAfter("#slide a:last-child");
                $("#shuttleFrame").css({"margin-left":"0"});
            }
        );
    }



});