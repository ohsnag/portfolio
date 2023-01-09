// main
function allSlide(){
    var wid = 0 ;
    var now = 0 ;
    var $panel = $(".slide-wrap");



    function init(){
        wid = $panel.width()/3;
    };   

    function slideEvent(){
        $(".prev-btn").click(function(){
            prevPlay();
        })
        $(".next-btn").click(function(){
            nextPlay();
        })

        slideMove();
        autoPlay();
        autoPlayStop();
        autoPlayRestart();
    }

    function nextPlay(){
        if(now==2){
            now=0;
        }else{
            now ++;
        }
        slideMove();
    }

    function prevPlay(){
        if(now==0){
            now=2;
        }else{
            now--;
        }
        slideMove();
    }

//    자동함수
    function slideMove(){
        $panel.stop().animate({'margin-left':-wid*now})
    };
    function autoPlay(){
        auto = setInterval(function(){
            nextPlay();
            
        },3000)
    };


    function autoPlayStop(){
        $(".pause").click(function(){
            clearInterval(auto);
            $(".pause").css("display","none");
            $(".play").css("display","block"); 
          
        })
     
    };
    function autoPlayRestart(){
        $(".play").click(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000)
            $(".play").css("display","none");
            $(".pause").css("display","block"); 
           
       
        })
    };
    init();
    slideEvent();
}
$(document).ready(function(){
    allSlide();
})



// sect-1


function slide(){
    var wid = 0 ;
    var now = 0 ;
    var $panel = $(".container");

    function init(){
        wid = $panel.width()/6;
    }    

    function slideEvent(){
        $(".left-btn").click(function(){
            prevPlay();
        })
        $(".right-btn").click(function(){
            nextPlay();
        })

        slideMove();
    }

    function nextPlay(){
        if(now==3){
            now=0;
        }else{
            now ++;
        }
        slideMove();
    }

    function prevPlay(){
        if(now==0){
            now=3;
        }else{
            now--;
        }
        slideMove();
    }
    function slideMove(){
        $panel.stop().animate({'margin-left':-wid*now})
    }
    init();
    slideEvent();
}
$(document).ready(function(){
    slide();
})


// sectin-2

$(function(){
    $(".map-wrap>div").click(function(e){
        e.preventDefault();
        $(".map-wrap>div").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index();

     
        $(".map-text-img").children("div").removeClass("active")
        .css("display","none");
        $(".map-text-img>div").eq(i).addClass("active")
        .css("display","block");
       
    })
})

// 스크롤 맨위
$(function(){
    $(".scrollTop").click(function(){
        $("html,body").animate({scrollTop : 0},1000)
    })
})