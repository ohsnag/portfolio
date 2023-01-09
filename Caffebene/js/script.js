function slide(){

    var wid = 0; //슬라이드 가로값(브라우저100%)
    var i = 0; //현재 인덱스
    var slide_length = 0; //슬라이드,인디케이터의 갯수(인덱스)

    //초기화
    function init(){
        wid = $(".slide").width(); //브라우저의 너비(100%)
        i = $(".img-indi > li.indi-on").index(); //인디케이터(on)의 인덱스
        slide_length = $(".img-indi>li").length; //인디케이터의 갯수
    }

    //슬라이드 실행(왼쪽이동,인디케이터가 활성화되는 상태)
    function slideMove(){
        $(".img-panel").animate({"margin-left": -wid * i});
        $(".img-indi>li").removeClass("indi-on");
        $(".img-indi>li").eq(i).addClass("indi-on");
    }
    
    //자동 실행(진짜 이동,진짜 활성화-인덱스를 찾아주는 함수)
    function autoMove(){
        setInterval(function(){
            if(i == slide_length - 1){
                i = 0;
            }else{
                i++;
            }
            slideMove();
        },4000);
    }

    //인디케이터를 클릭했을때(인덱스가 일치되서 활성화)
    function indicator(){
        $(".img-indi>li").click(function(){
            i = $(this).index();
            slideMove();
        });
    }

    //화면크기 재설정
    function autoResize(){
        $(window).resize(function(){
            init();
            $(".img-panel").animate({"margin-left": -wid * i});
        });
    };

    init();
    autoMove();
    indicator();
    autoResize();
}

$(document).ready(function(){
    slide();
});



// nav
$(function(){
    $(".gnb").on("mouseover focus", function(){
       $(".sub-menu").show() 
       $("#header").addClass("menu-bg")
    });

    $(".gnb").on("mouseout blur", function(){
        $(".sub-menu").hide() 
        $("#header").removeClass("menu-bg")
     });

});


//contents 1 hover 고양이등장
$(function(){
    $(".cont1-left > ul > li").hover(function(){

        var i = Math.floor(Math.random()*5);
        var iconImages = new Array();

        iconImages[0]='<img src="http://www.caffebene.co.kr/images/common/cat1.png" class="hovercat">';
		iconImages[1]='<img src="http://www.caffebene.co.kr/images/common/cat2.png" class="hovercat">';
		iconImages[2]='<img src="http://www.caffebene.co.kr/images/common/cat3.png" class="hovercat">';
		iconImages[3]='<img src="http://www.caffebene.co.kr/images/common/cat4.png" class="hovercat">';
		iconImages[4]='<img src="http://www.caffebene.co.kr/images/common/cat5.png" class="hovercat">';

        $(this).append(iconImages[i]);
    },function(){
        $(".hovercat").remove();
    }
    );
});

//icon을 li를 hover했을때 html로 img태그가 작성되는것!



//header 스크롤 내려올때 고정
// $(window).scroll( function() {
//     if ($(document).scrollTop() > 10 ) {
//       $("header").addClass("top-fixed");
//       $("main").css("margin-top","150px");
//   }
//   else {
//       $("header").removeClass("top-fixed");
//       $("main").css("margin-top","0px");
//   }
//   });

$(window).scroll(function(){
    if($(document).scrollTop()>50){
        $("header").addClass("top-fixed");
        $("main").css("margin-top","150px")
    }else{
        $("header").removeClass("top-fixed");
        $("main").css("margin-top","0px");
    }
})



// // // ss
// function slidingMenu() {
//     var now = 0;
//     var show = 12; // li의 갯수 (숫자)
//     var $containner = $(".slide-ul"); // ul(li*12포함하는)
//     var length = $(".slide-ul>li").length;//li갯수 12개 (인덱스)
//     var view = $(".slide-list").width();//2460px
//     var move = view / show;//한칸씩 움직이는 크기 2460/6=410px씩 움직인다. .containner>li로 지정안한 이유는 margin값을 포함안해서 
//     var maxWidth = 3264;//최대 가로값 (2460*3=7380) *2을 해도 상관없음 



//     //초기화

//     $containner.css("width", "length*move"); //2460px

//     //슬라이드
//     //이동(한칸씩 왼쪽으로)
//     //1번(index 0)이 왼쪽으로 가면 컨테이너(ul)복사
//     //복사한 값이 컨테이너의 맨뒤에서가서 붙여넣기
//     //복사한 값을 삭제하고 초기화 
//     //무한반복,index값 초기화...
//     setInterval(function () {
//         console.log(now);
//         if (now == 0) {

//             //복사한 값 삭제, 초기화
//             $containner.find(">li").eq(length - 1).nextAll().remove();
//             $containner.css({ "left": 0 }).stop();

//             //이동
//             now++;
//             $containner.stop().animate({ "left": move * now * - 1 }, 1000)
//             //컨테이너 복사
//             var cloneCont = $containner.children().clone();

//             //컨테이너 붙여넣기
//             $containner.css({ "width": $containner.innerWidth() + (move * length) });
//             cloneCont.appendTo($containner); //appendTo붙여넣기 맨뒤에
//             $containner.css("width", maxWidth);

//         } else if (now >= 1) {

//             //이동
//             now++;
//             $containner.stop().animate({ "left": move * now *- 1 }, 1000)
//         }  
//         if (now == length) {
//             now = 0;
//         }
//     }, 2000);
// };

// $(document).ready(function () {
//     slidingMenu();
// })

// MD

function mdSlide(){

    var show = 12;
    var $slidePanel = $(".slide-ul");
    var view = $slidePanel.width();
    var movin = view/show;
    var $slideLi = $(".slide-ul>li")

    function mdSlideEvent(){

        $(".next").click(function(){
            nextPlay();
        });


        $(".prev").click(function(){
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
        $(".prev").mouseenter(function(){
            clearInterval(auto);
        });
        $(".next").mouseenter(function(){
            clearInterval(auto);
        });
    };
    function mdAutoPlayRestart(){
        $slideLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".prev").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".next").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
    };

    mdSlideEvent();
}

$(document).ready(function(){
    mdSlide();
});


// $(function(){
//     $("a[href^='#scrollMenu']").click(function(e){
//         e.preventDefault();
//         var target = $(this.hash);

//         $('html,body').animate({scrollTop : target.offset().top},1000)
//     })
// });


$(function(){
    $(".scrollTop").click(function(){
        $("html,body").animate({scrollTop : 0},1000)
    })
})



// md
// function allSlide() {

//     var wid = 0; //이동하는 가로값
//     var $slide = $(".slide-ul"); // li *12를 포함한 div
 
//     var now = 0; //click 횟수

//     //초기화
//     function init() {
//         wid = $slide.width() / 12; //960px (li 한 개는 272px * 12)
//     }

//         // md
//         $(function () {
//             setInterval(function () {
//                 $(".slide-ul").animate({ marginLeft: -272 }, 1000, function () {
//                     $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
//                 })
//             }, 4000);
//         });

        
//     //event
//     function slideEvent() {
//         //next
//         $(".next").click(function (e) {
//             e.preventDefault();
//             nextChkPlay();
//         });

//         //prev
//         $(".prev").click(function (e) {
//             e.preventDefault();
//             prevChkPlay();
//         });
//     }

//     //next
//     function nextChkPlay() {
//         if (now == 8) {
//             // return false; //0이 되지 않게 제어
//             now = 0;
//         } else {
//             now++;
//             console.log(now);
//         }
//         init();
//         slideMove();
//     }

//     //prev
//     function prevChkPlay() {
//         if (now == 0) {
     
//             now = 8;
//         } else {
//             now--;
//             console.log(now);
//         }
//         init();
//         slideMove();
//     }

//     //slide
//     function slideMove() {
//         $slide.stop().animate({ "margin-left": -wid * now });
            
//     };

//     slideEvent();



// }
// $(document).ready(function () {
//     allSlide();
// })