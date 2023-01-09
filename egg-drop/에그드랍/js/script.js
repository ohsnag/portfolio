





// scrollDown
$(function(){
    $("a[href^='#scrollMenu']").click(function(e){
        e.preventDefault();
        var target = $(this.hash);
        
        $("html,body").animate({scrollTop : target.offset().top},1000)
    })
});

$(function(){
    $(".scroll-btn").click(function(e){

        e.preventDefault();
        $('html,body').animate({scrollTop : 0},1000)
    })
})


// 스크롤 내릴때 생기는 효과

function scrollEvent(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());

        if($(window).scrollTop()>150){
            $(".main-indi").stop().css({"bottom":"20"+"px"});
            $(".scroll a").stop().css({"bottom":"20"+"px"});
           
        }else{
            $(".main-indi").stop().css({"bottom":"-10"+"px"});
            $(".scroll a").stop().css({"bottom":"-10"+"px"});   
        }
        if($(window).scrollTop()>333){
            $(".section-1 h3").stop().css({"top":"20"+"px"});
            $(".navi").stop().css({"top":"30"+"px"});
           
        }else{
            $(".section-1 h3").stop().css({"top":"20"+"px"});
            $(".navi").stop().css({"top":"50"+"px"});   
        }

        if($(window).scrollTop()>2600){
            $(".object>img").stop().css({"right":"10"+"px"});
            $(".bar>div").stop().css({"width":"100"+"%"});
           
           
        }else{
            $(".object>img").stop().css({"right":"-1800"+"px"});
            $(".bar>div").stop().css({"width":"0"+"%"});  
           
        }
        if($(window).scrollTop()>2700){
            $(".sect3-cont2>div:first-child").stop().css({"display":"block"});
            $(".sect3-cont2>div:last-child").stop().css({"display":"block"});
           
        }else{
            $(".sect3-cont2>div:first-child").stop().css({"display":"none"});
            $(".sect3-cont2>div:last-child").stop().css({"display":"none"});
        }

        if($(window).scrollTop()>3200){
            $(".sect3-bottom>img").stop().css({"left":"0"+"px"});
            $(".sect3-bottom>header>img").stop().css({"padding-top":"0"+"px"});
            $(".sect3-bottom-cont").stop().css({"margin-top":"0"+"px"});
        }else{
            $(".sect3-bottom>img").stop().css({"left":"-1140"+"px"});
            $(".sect3-bottom>header>img").stop().css({"padding-top":"50"+"px"});
            $(".sect3-bottom-cont").stop().css({"margin-top":"50"+"px"});
        }
        if($(window).scrollTop()>4300){
            $(".sec4-txt-bg").stop().css({"right":"0"+"px"});
            $(".section-4").stop().css({"margin-top":"0"+"px"});
        }else{
            $(".sec4-txt-bg").stop().css({"right":"-1550"+"px"});
            $(".section-4").stop().css({"margin-top":"100"+"px"});
        }

        if($(window).scrollTop()>4910){
            $(".section-5 header").stop().css({"margin-top":"0"+"px"});
           
        }else{
            $(".section-5 header").stop().css({"margin-top":"50"+"px"});
           
        }
    });
}
$(document).ready(function(){
    scrollEvent();
})




/* main-slide */
function slide(){
    var wid = 0;
    var i = 0;
    var slide_length = 0;
    var $indiLi = $('.main-indi>li');
    var $mainPanel = $('.img-panel');
    // var $panelLi = $('.main-img-panel>li'); 
    

    //초기화
    function init(){
        wid = $("main").width();
        i = $('.main-indi>li.main-indi-on').index();
        slide_length = $indiLi.length;
    };

    //slide event 인디케이터 누르면 인덱스 맞춰서 배경 이동
    function mainSlideEvent(){
        $indiLi.click(function(){
            i = $(this).index();
            mainSlideMove();
        });
    mainAutoPlay();
    };

    // 슬라이드 이동
    function mainSlideMove(){
        $('.img-panel>li>img').stop().animate({'margin-left': -wid * i});

        $indiLi.removeClass('main-indi-on');

        $indiLi.eq(i).addClass('main-indi-on');
    };

    // 자동 슬라이드
    function mainAutoPlay(){
        auto = setInterval(function(){
            nextPlay();
        },3000)
    };

    function nextPlay(){
        if( i == slide_length - 1){
            i = 0;
        } else{
            i++;
        }
        mainSlideMove();
    };

    init();
    mainSlideEvent();
}


$(document).ready(function(){
    slide();
});

// 팝업



$(function(){  
    $(".pop-up-text").click(function(){
        $(".pop-up").css("display","none");
    })

})

$(function () {
    setInterval(function () {
        $(".section1-slide-cont").animate({ marginLeft: -422 }, 1000, function () {
            $(this).css({ marginLeft: 0 }).find("div:last").after($(this).find("div:first"));
        })
    }, 2000);
});