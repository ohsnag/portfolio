

// 2022 슬라이드
function newSlide(){

    var show = 10;
    var $slidePanel = $(".product-slide");
    var view = $slidePanel.width();
    var movin = view/show;
    var $slideLi = $(".product-slide>li")

    function mdSlideEvent(){

        $(".next-btn").click(function(){
            nextPlay();
        });


        $(".prev-btn").click(function(){
            prevPlay();
        });

        mdAutoPlay();
        mdAutoPlayStop();
        mdAutoPlayRestart();
    }

    function nextPlay(){
        $slidePanel.stop().animate({'margin-left':-movin*2},function(){
            $(this).css({'margin-left':-movin}).find("li:last").after($(this).find("li:first"));
        });
    };

    function prevPlay(){
        $slidePanel.stop().animate({'margin-left':0},function(){
            $(this).css({'margin-left':-movin}).find("li:first").before($(this).find("li:last"));
        });
    };

    function mdAutoPlay(){
        auto = setInterval(function(){
            nextPlay();
        },4000);
    };
    function mdAutoPlayStop(){
        $slideLi.mouseenter(function(){
            clearInterval(auto);
        });
        $(".prev-btn").mouseenter(function(){
            clearInterval(auto);
        });
        $(".next-btn").mouseenter(function(){
            clearInterval(auto);
        });
    };
    function mdAutoPlayRestart(){
        $slideLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".prev-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".next-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
    };

    mdSlideEvent();
}

$(document).ready(function(){
    newSlide();
});



// 시즌 딜리버리 메뉴
function seasonSlide(){

    var show = 10;
    var $slidePanel = $(".sect4-product-slide");
    var view = $slidePanel.width();
    var movin = view/show;
    var $slideLi = $(".sect4-product-slide>li")

    function mdSlideEvent(){

        $(".sect4-next-btn").click(function(){
            nextPlay();
        });


        $(".sect4-prev-btn").click(function(){
            prevPlay();
        });

        mdAutoPlay();
        mdAutoPlayStop();
        mdAutoPlayRestart();
    }

    function nextPlay(){
        $slidePanel.stop().animate({'margin-left':-movin*2},function(){
            $(this).css({'margin-left':-movin}).find("li:last").after($(this).find("li:first"));
        });
    };

    function prevPlay(){
        $slidePanel.stop().animate({'margin-left':0},function(){
            $(this).css({'margin-left':-movin}).find("li:first").before($(this).find("li:last"));
        });
    };

    function mdAutoPlay(){
        auto = setInterval(function(){
            nextPlay();
        },4000);
    };
    function mdAutoPlayStop(){
        $slideLi.mouseenter(function(){
            clearInterval(auto);
        });
        $(".sect4-prev-btn").mouseenter(function(){
            clearInterval(auto);
        });
        $(".sect4-next-btn").mouseenter(function(){
            clearInterval(auto);
        });
    };
    function mdAutoPlayRestart(){
        $slideLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".sect4-prev-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".sect4-next-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
    };

    mdSlideEvent();
}

$(document).ready(function(){
    seasonSlide();
});

// 사이드 메뉴
function sideSlide(){

    var show = 10;
    var $slidePanel = $(".sect6-product-slide");
    var view = $slidePanel.width();
    var movin = view/show;
    var $slideLi = $(".sect6-product-slide>li")

    function mdSlideEvent(){

        $(".sect6-next-btn").click(function(){
            nextPlay();
        });


        $(".sect6-prev-btn").click(function(){
            prevPlay();
        });

        mdAutoPlay();
        mdAutoPlayStop();
        mdAutoPlayRestart();
    }

    function nextPlay(){
        $slidePanel.stop().animate({'margin-left':-movin*2},function(){
            $(this).css({'margin-left':-movin}).find("li:last").after($(this).find("li:first"));
        });
    };

    function prevPlay(){
        $slidePanel.stop().animate({'margin-left':0},function(){
            $(this).css({'margin-left':-movin}).find("li:first").before($(this).find("li:last"));
        });
    };

    function mdAutoPlay(){
        auto = setInterval(function(){
            nextPlay();
        },4000);
    };
    function mdAutoPlayStop(){
        $slideLi.mouseenter(function(){
            clearInterval(auto);
        });
        $(".sect6-prev-btn").mouseenter(function(){
            clearInterval(auto);
        });
        $(".sect6-next-btn").mouseenter(function(){
            clearInterval(auto);
        });
    };
    function mdAutoPlayRestart(){
        $slideLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".sect6-prev-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".sect6-next-btn").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
    };

    mdSlideEvent();
}

$(document).ready(function(){
    sideSlide();
});


// 스크롤 맨위
$(function(){
    $(".scrollTop").click(function(){
        $("html,body").animate({scrollTop : 0},1000)
    })
})