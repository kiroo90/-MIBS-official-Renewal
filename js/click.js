$(document).ready(() => {
    // 메인 슬라이더
    $('.slide_container').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 1000
    });

    // 스크롤 네비게이션
    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        if (scroll > 10){
            $(".nav_gnb").addClass("scroll");
        } else {
            $(".nav_gnb").removeClass("scroll");
        }
    });
    
    //서브 네비 버튼
    $(".snb_nav_ber").on("click", () => {
        $(".nav_snb").toggleClass("click");
        $(".fa-times").toggleClass("none");
        $(".fa-bars").toggleClass("none");
    });

    // 디스코그라피 클릭 이벤트 미디어 쿼리적용
    $(window).ready(() => {
        if($(window).width() >= 1100) {
            $(".item").on("click", (e) => {
                const target = $(e.currentTarget).children("img").attr("src");
                const targetText = $(e.currentTarget).children(".item_txt").html();
                const targerAnchor = $(e.currentTarget).children("a").attr("href");
        
                $(".item_on").addClass("go_on");
                $(".info").children("img").attr("src", target);
                $(".info").children(".text").html(targetText);
                $(".info").children(".go_icon").children("a").attr("href");
                $(".info").children(".go_icon").children("a").attr("href", targerAnchor)
                console.log("d")
            });
        
            $(".close").on("click", () => {
                $(".item_on").removeClass("go_on");
            });
        };
    });  //ready를 사용했기 때문에 웹페이지로 로드시 창을 줄여도 이벤트 발생...

    // 가사 열기 닫기 버튼 
    $(".btn").on("click", (e)=>{
        $(e.currentTarget).next(".lyrics").addClass("on");
        if($(e.currentTarget).next(".lyrics").hasClass("on")) {
            $("body").css("overflow-y", "hidden");
        } else {
            $("body").css("overflow-y", "scroll");
            $(".lyrics").removeClass("on");
        };
    });
});
