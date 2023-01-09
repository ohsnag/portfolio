// gnb
$(function(){
    $(".main-nav-wrap>li").hover(function(e){
        e.preventDefault();

        $(this).find(".sub-menu").stop().fadeToggle(200);
    });
})


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
  