$(function(){
  $(".top-menu>ul>li").click(function(){

      $(".top-menu>ul>li").removeClass("on");
      $(this).addClass("on");
  });
});


// main slide
function slide(){
  var wid = 0; //1920px = 0
  var i = 0; //인디케이터의 (가짜)인덱스
  var slide_length = 0; //슬라이드이미지의 (가짜)인덱스
  var $indiLi = $(".main-indi>li");
  var $mainPanel = $(".img-panel");
  var $panelLi = $mainPanel.children('li');

  //tablet
  var $tabletPanel = $(".img-panel-tablet");
  var $tabletPanelLi =$tabletPanel.children('li');

  //mobile
  var $mobilePanel = $(".img-panel-mobile");
  var $mobilePanelLi = $mobilePanel.children('li');

  //초기화 == 0
  function init(){
      wid = $(".main-slide").width(); //1920px
      i = $(".main-indi>li.main-indi-on").index(); //인디케이터의 (진짜)인덱스
      slide_length = $indiLi.length; //슬라이드의 갯수 = 인디케이터li갯수
  };

  //event(실행되는) : 인디케이터, next , prev
  function slideEvent(){
      $indiLi.click(function(){
          i = $(this).index(); //0 이 내가선택한 인디케이터li의 인덱스로 맞춰진다.
          slideMove();  //함수로 지정해놓은 i가 여기서 생김!!
      })

      $(".main-next").click(function(){
          nextPlay();
      })

      $(".main-prev").click(function(){
          prevPlay();
      })

      //자동함수
      autoPlay();
      autoPlayStop();
      autoPlayRestart();
  };

  //next(함수)
  function nextPlay(){
      if(i == slide_length - 1){
          i = 0;
      }else{
          i++;
      }
      slideMove();
  };

  //prev(함수)
  function prevPlay(){
      if(i == 0){
          i = slide_length - 1;
      }else{
          i--;
      }
      slideMove();
  };

  //슬라이드이동(함수)
  function slideMove(){
      $mainPanel.stop().animate({'margin-left': -wid * i}); 
      $tabletPanel.stop().animate({'margin-left': -wid * i}); 
      $mobilePanel.stop().animate({'margin-left': -wid * i}); 
       //이미지가보여지는 화면에 움직임(animate) left로 이미지가 차지할 여백 공간
      $indiLi.removeClass('main-indi-on');
       //인디케이터 li on활성화 요소(클래스) 먼저 지우고,
      $indiLi.eq(i).addClass('main-indi-on');
       //인디케이터 li on활성화 요소(클래스) 넣어주고, 조건 : eq(현재 인덱스)
  };

  //자동함수
  function autoPlay(){
      auto = setInterval(function(){
          nextPlay();
      },4000)
  };
  function autoPlayStop(){
      $panelLi.mouseenter(function(){
          clearInterval(auto) //삭제
      })
      $tabletPanelLi.mouseenter(function(){
          clearInterval(auto) //삭제
      })
      $mobilePanelLi.mouseenter(function(){
          clearInterval(auto) //삭제
      })
  };
  function autoPlayRestart(){
      $panelLi.mouseleave(function(){
          auto = setInterval(function(){
              nextPlay();
          },4000)
      })
      $tabletPanelLi.mouseleave(function(){
          auto = setInterval(function(){
              nextPlay();
          },4000)
      })
      $mobilePanelLi.mouseleave(function(){
          auto = setInterval(function(){
              nextPlay();
          },4000)
      })
  };

  //브라우저사이즈(함수)
  function resize(){
     $(window).resize(function(){
         init();
         $mainPanel.css({'margin-left': -wid * i}); 
         $tabletPanel.css({'margin-left': -wid * i}); 
         $mobilePanel.css({'margin-left': -wid * i}); 
         //.css메서드는 바로바로 변환되기위해서
     })
  }

  init();
  slideEvent();
  resize(); 
  //브라우저 너비를 받아오기때문에 width: % 일때만 사용 (현재는 px )
}
$(document).ready(function() {
  slide();
});


//   popup
$(function(){
  $(".popup-btn").click(function(){
      $(".popup").hide();
  })
});


//section1 상품 슬라이드
function contSlide(){
  var wid = 0; 
  var i = 0; 
  var slide_length = 0; 
  var $indiLi = $(".section1-indi>ul>li");
  var $mainPanel = $(".section1-slide");
  var $panelLi = $mainPanel.children('div');

  //초기화
  function init(){
      wid = $(".section1-slide").width();
      i = $(".section1-indi>ul>li.section1-indi-on").index();
      slide_length = $indiLi.length;
  };

  //event
  function slideEvent(){
      $indiLi.click(function(){
          i = $(this).index();
          slideMove();
      })
      //자동함수
      autoPlay();
      autoPlayStop();
      autoPlayRestart();
  };

  //next(함수)
  function nextPlay(){
      if(i == slide_length - 1){
          i = 0;
      }else{
          i++;
      }
      slideMove();
  };


  //슬라이드이동(함수)
  function slideMove(){
      $mainPanel.stop().animate({'margin-left': -wid * i}); 
      $indiLi.removeClass('section1-indi-on');
      $indiLi.eq(i).addClass('section1-indi-on');
  };

  //자동함수
  function autoPlay(){
      auto = setInterval(function(){
          nextPlay();
      },4000)
  };
  function autoPlayStop(){
      $panelLi.mouseenter(function(){
          clearInterval(auto) //삭제
      })
  };
  function autoPlayRestart(){
      $panelLi.mouseleave(function(){
          auto = setInterval(function(){
              nextPlay();
          },4000)
      })
  };

  //브라우저사이즈(함수)
  function resize(){
     $(window).resize(function(){
         init();
         $mainPanel.css({'margin-left': -wid * i}); 
     })
  }

  init();
  slideEvent();
  resize(); 
}
$(document).ready(function() {
  contSlide();
});


//header 스크롤 내려올때 고정
$(window).scroll( function() {
  if ($(document).scrollTop() > 50 ) {
    $("header").addClass("top-fixed");
    $("main").css("margin-top","150px");
}
else {
    $("header").removeClass("top-fixed");
    $("main").css("margin-top","0px");
}
});


// // 모바일 
// $(function(){
//     $(".nav-btn").click(function(e){
//         e.preventDefault();
//         $(".gnb").show();
//     })

//     $(".gnb-close").click(function(){
//         $(".gnb").hide();
//     })
// });

// 모바일
$(function(){
    $(".nav-btn").click(function(e){
    e.preventDefault();
    if (matchMedia("screen and (min-width: 1180px)").matches) {
    $(".gnb").hide();
    } else {
    $(".gnb").show();
    }
    window.onresize = function(){
    document.location.reload();
    };
    
    });
    
    $(".gnb-close").click(function(){
    $(".gnb").hide();
    });
    
    });
// $(function(){
//     $(".gnb-body>li").click(function(e){
//         e.preventDefault();
//         $(this).find(".sub").slideToggle('fast')
  
//     });

   
// });

// $(function(){
//     $(".gnb-body>li").click(function(e){
//         e.preventDefault();
//         $(".gnb-body>li").removeClass("on");
//         $(this).addClass("on");
        
        
//         var i = $(this).index();

//         $(".sub").css("display","none");
//         $(".sub").eq(i).css("display","block");
              
//     })
// });


// $(function(){
//     $(".gnb-body>li").click(function(){
//         $(this).find(".on").removeClass("on");
        
//     })
// });


$(function(){
    $(".gnb-body>li").click(function(e){
    e.preventDefault();
    
    if($(this).children(".sub").is(":hidden") == true){
    $(this).children(".sub").slideDown(300);
    $(this).addClass("on");
    }else if($(this).children(".sub").is(":visible") == true){
    $(this).children(".sub").slideUp(300);
    $(this).removeClass("on");
    }
    })
    });