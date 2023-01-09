$(function(){
    $(".top-menu>ul>li").click(function(){
  
        $(".top-menu>ul>li").removeClass("on");
        $(this).addClass("on");
    });
  });
  

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

    // header 고정

    $(window).scroll(function(){
      if($(document).scrollTop()>50){
        $("header").addClass("top-fixed");
        $("main").css("margin-top","150px");
      }else{
        $("header").removeClass("top-fixed");
        $("main").css("margin-top","0px");
      }
    })