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
    // 슬라이드쇼 시작

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
    
    // 슬라이드쇼 끝
    // 모달레이어팝업 시작
    $("#popPoint").click(function(){
        $("#layerBG").css({"display":"block"});
    });

    $("#closeBtnArea button ").click(function(){
        $("#layerBG").css({"display":"none"});
    });
    // 모달레이어팝업 끝
});