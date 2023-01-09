// 페이지당 스크롤
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
 
var page = 1;
 
var lastPage = $(".sect-3").length;
 
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


// 클릭시 해당페이지로 이동

$(function(){
    var $menu = $(".gnb-wrap li");
    var $contents =$(".scroll");


   
    // $menu를 클릭하면 해당 요소에만 클래스명 on 추가되도록 

    $menu.click(function(e){
        e.preventDefault();
        
        $menu.removeClass("on");
        $(this).addClass("on")

        var i = $(this).index();
        var section = $contents.eq(i)
        var sectionDistance = section.offset().top;
        //A.scrollTop() 스크롤양을 확인
        $("html,body").stop().animate({scrollTop:sectionDistance});
        

        
        
    });


// 윈도우 스크롤이 생기면 $contents 마다 할일 각각의 화면상단에서의 거리sectionDistance 보다 스크롤양이 많은지 적은지 많다는 조건이 참이면 각요소마다 순번 변수명 idx 저장

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


// 팝업창 

$(function(){
    $(".btn-tablet").click(function(){
        $(".int-inner-tablet").show();
        $(".int-bg").show();
       
    });

    $(".close").click(function(){
        $(".int-inner-tablet").hide();
        $(".int-bg").hide();
       
       
    });
})

// 상세페이지
$(function(){
    // 이디야
    $(".more-e").click(function(e){
        e.preventDefault();
        $(".sub_wrap-e").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
        $(".sub_wrap-e").hide();
        $(".sub-bg").hide();
    });

    // 일룸
    $(".more-l").click(function(e){
        e.preventDefault();
        $(".sub_wrap-l").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
        $(".sub_wrap-l").hide();
        $(".sub-bg").hide();
    });

    // 에그드랍
    $(".more-g").click(function(e){
        e.preventDefault();
        $(".sub_wrap-g").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
   
        $(".sub_wrap-g").hide();
        $(".sub-bg").hide();
    });

    // 카페베네
    $(".more-c").click(function(e){
        e.preventDefault();
        $(".sub_wrap-c").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
    
        $(".sub_wrap-c").hide();
        $(".sub-bg").hide();
    });

    // 바르다김선생
    $(".more-b").click(function(e){
        e.preventDefault();
        $(".sub_wrap-b").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
    
        $(".sub_wrap-b").hide();
        $(".sub-bg").hide();
    });

    // 슬로우베드
    $(".more-s").click(function(e){
        e.preventDefault();
        $(".sub_wrap-s").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
     
        $(".sub_wrap-s").hide();
        $(".sub-bg").hide();
    });
     // 서울로 떠나요
     $(".more-se").click(function(e){
        e.preventDefault();
        $(".sub_wrap-se").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
   
        $(".sub_wrap-se").hide();
        $(".sub-bg").hide();
    });

     // 서울로 떠나요
     $(".more-app").click(function(e){
        e.preventDefault();
        $(".sub_wrap-app").fadeIn(600);
        $(".sub-bg").show();
    });

    $(".sub-close").click(function(){
        $(".sub_wrap-app").hide();
        $(".sub-bg").hide();
    });
})



