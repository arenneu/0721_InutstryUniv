/* eslint-disable */

$(function(){
    
    /* gnb 메뉴 구현 */
    
    $("#mainMenu").mouseover(function(){
        $(".subMenu").stop().slideDown(300);
        $("#gnbBG").stop().slideDown(300);
    });
    
    $("#mainMenu").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
        $("#gnbBG").stop().slideUp(300);
    });
    
    // gnb 메뉴 구현
    
    // 슬라이드쇼 구현

    setInterval(fnSlide,4000);

    function fnSlide(){
        
    $("div#shuttleFrame").animate({
        "margin-left":"-1200px"},
        3000,
    function(){
        $("#shuttleFrame>a:nth-child(1)")
            .insertAfter("#shuttleFrame>a:nth-child(3)");

        $("#shuttleFrame").css({"margin-left":"0"});
    });
}
    // 슬라이드쇼 구현

    // 모달레이어 구현
        $("tr#popupPoint").click(function(){
            $("#popupBG").css({"display":"block"});
        });

        $("#closeBtn").click(function(){
            $("#popupBG").css({"display":"none"});
        });

    // 모달레이어 구현
    
});