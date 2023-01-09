$(function(){
    $(".main-nav-wrap>li").hover(function(e){
        e.preventDefault();

        $(this).find(".sub-menu").stop().fadeToggle(200);
    });
})


// 메인 자동 슬라이드
function mdSlide(){

    // var show = 3;
    var $slidePanel = $(".slide-left");
    // var view = $slidePanel.height();
    // var movin = view/show;
    var $slideLi = $(".slide-left>div")
    var $slideRight = $(".slide-right")
    var $slideDiv =$(".slide-right>div")
    var $center = $(".slide-center")
    var $paging =$(".paging")

    function mdSlideEvent(){

        $(".btn-next").click(function(){
            nextPlay();
        });


        $(".btn-prev").click(function(){
            prevPlay();
        });

        mdAutoPlay();
        mdAutoPlayStop();
        mdAutoPlayRestart();
    }

    function nextPlay(){
        $slidePanel.stop().animate({'margin-top':-100+"vh"},function(){
            $(this).css({'margin-top':0}).find("div:last").after($(this).find("div:first"));
        });
        $slideRight.stop().animate({'margin-top':0},function(){
            $(this).css({'margin-top':0}).find("div:last").after($(this).find("div:first"));
        });
        $center.stop().animate({'margin-top':0},function(){
            $(this).css({'margin-top':0}).find("div:last").after($(this).find("div:first"));
        });
        $paging.stop().animate({'margin-top':0},function(){
            $(this).css({'margin-top':0}).find("div:last").after($(this).find("div:first"));
        });
    };

    function prevPlay(){
        $slidePanel.stop().animate({'margin-top':100+"vh"},function(){
            $(this).css({'margin-top':0}).find("div:first").before($(this).find("div:last"));
        });
        $slideRight.stop().animate({'margin-top':0},function(){
            $(this).css({'margin-top':0}).find("div:first").before($(this).find("div:last"));
        });
        $center.stop().animate({'margin-top':0},function(){
            $(this).css({'margin-top':0}).find("div:first").before($(this).find("div:last"));
        });
        // $paging.stop().animate({'margin-top':0},function(){
        //     $(this).css({'margin-top':0}).find("div:last").before($(this).find("div:first"));
        // });
    };

   
    function mdAutoPlayRestart(){
        $slideLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $slideDiv.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".btn-prev").mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000);
        });
        $(".btn-next").mouseleave(function(){
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

// 호버시
$(function(){
    $(".img1").mouseenter(function(){
        $(".defult1").css("display","none");
        $(".hover1>img").css("display","block");
    })
    $(".img1").mouseleave(function(){
        $(".defult1").css("display","block");
        $(".hover1>img").css("display","none");
    })
})


$(function(){
    $(".img2").mouseenter(function(){
        $(".defult2").css("display","none");
        $(".hover2>img").css("display","block");
    })
    $(".img2").mouseleave(function(){
        $(".defult2").css("display","block");
        $(".hover2>img").css("display","none");
    })
})
$(function(){
    $(".img3").mouseenter(function(){
        $(".defult3").css("display","none");
        $(".hover3>img").css("display","block");
    })
    $(".img3").mouseleave(function(){
        $(".defult3").css("display","block");
        $(".hover3>img").css("display","none");
    })
})



// 휠

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
 
var page = 1;
 
var lastPage = $("footer").length;
 
$html.animate({scrollTop:0},10);


$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});


// 팝업창

$(function(){
    $(".hambuger").click(function(){
        $(".popup-wrap").show(600);
        $("header,main,.sect-1,.sect-2,.sect-3,footer").css("display","none");
    });
   $(".popup-close").click(function(){
    $(".popup-wrap").hide();
    $("header,main,.sect-1,.sect-2,.sect-3,footer").css("display","block");
   })

   $(".gnb-close").click(function(){
    $(".gnb").hide();
    $("header,main,.sect-1,.sect-2,.sect-3,footer").css("display","block");
   })
})

// 클릭시 해당페이지로 이동
$(function(){
    var $menu = $(".main-indi li");
    var $contents =$(".scroll");


   
    // $menu를 클릭하면 해당 요소에만 클래스명 on 추가되도록 

    $menu.click(function(e){
        e.preventDefault();
        $menu.removeClass("on");
        $(this).addClass("on")

        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        //A.scrollTop() 스크롤양을 확인
        $("html,body").stop().animate({scrollTop:sectionDistance});
        
        console.log(idx); 
        
    });



    $(window).scroll(function(){

        var window = $(this).scrollTop();
        var i = $(this).index();
        
        $contents.each(function(i){
        
        if($(this).offset().top <= window) {
        
        console.log(i);
        
        $menu.removeClass('on');
        $menu.eq(i).addClass('on');
        
        }
        });
        });
});

// 모바일 스크립트
if(matchMedia("screen and (max-width: 641px)").matches){
    console.log("mobile");
  }
  function slide(){
    var wid = 0; //1920px = 0
    var i = 0; //인디케이터의 (가짜)인덱스
    var slide_length = 0; //슬라이드이미지의 (가짜)인덱스
    var $indiLi = $(".m_number>a");
    var $mainPanel = $(".m_panel");
    var $panelLi = $mainPanel.children('div');
  
    
  
    //초기화 == 0
    function init(){
        wid = $(".mobile_slide-left").width(); //1920px
        i = $(".m_numbe>a.m_on").index(); //인디케이터의 (진짜)인덱스
        slide_length = $indiLi.length; //슬라이드의 갯수 = 인디케이터li갯수
    };
  
    //event(실행되는) : 인디케이터, next , prev
    function slideEvent(){
        $indiLi.click(function(){
            i = $(this).index(); //0 이 내가선택한 인디케이터li의 인덱스로 맞춰진다.
            slideMove();  //함수로 지정해놓은 i가 여기서 생김!!
        })
  
        $(".m_btn-right").click(function(){
            nextPlay();
        })
  
        $(".m_btn-left").click(function(){
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
            i = slide_length-1;
        }else{
            i--;
        }
        slideMove();
    };
  
    //슬라이드이동(함수)
    function slideMove(){
        $mainPanel.stop().animate({'margin-left': -wid * i}); 
         //이미지가보여지는 화면에 움직임(animate) left로 이미지가 차지할 여백 공간
        $indiLi.removeClass('m_on');
         //인디케이터 li on활성화 요소(클래스) 먼저 지우고,
        $indiLi.eq(i).addClass('m_on');
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
  window.onresize = function(){
    document.location.reload();
  };



//   모바일 팝업

// 모바일
$(function(){
    $(".hambuger").click(function(e){
    e.preventDefault();
    if (matchMedia("screen and (min-width: 640px)").matches) {
    $(".gnb").hide();
  
    } else {
    $(".gnb").show();
    }
    window.onresize = function(){
    document.location.reload();
    };
    
    });
    
    $(".popup-close").click(function(){
    $(".gnb").hide();
    });
    
    })

    $(function(){
        $(".hambuger").click(function(e){
        e.preventDefault();
        if (matchMedia("screen and (max-width: 640px)").matches) {
        $(".popup-wrap").hide();
      
        } else {
        $(".popup-wrap").show();
        }
        window.onresize = function(){
        document.location.reload();
        };
        
        });
        
        $(".gnb-close").click(function(){
        $(".gnb").hide();
        });
        
        })
    


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
  