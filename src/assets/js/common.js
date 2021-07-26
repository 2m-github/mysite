
$(function(){


//screen width
if($(window).width() > 800){
    console.log("pc");
    $(".gnb").removeClass("mobile");
    $(".gnb").addClass("pc");
}
else{
    console.log("mobile");
    $(".gnb").removeClass("pc");
    $(".gnb").addClass("mobile");
}
$(window).resize(function(){
    if($(window).width() > 800){
        $(".gnb").removeClass("mobile");
        $(".gnb").addClass("pc");
    }
    else{
        $(".gnb").removeClass("pc");
        $(".gnb").addClass("mobile");
    }
})

//menu
var $pcMenu = $(".gnb.pc > li");
var $mMenu = $(".gnb.mobile > li");
var $subMenu = $(".sub_menu > li");
$pcMenu.on("mouseenter focusin",function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    $("#header").addClass("on")
    $(".sub_menu").show();
}).on("mouseleave",function(){
    $(this).removeClass("on");
    $("#header").removeClass("on")
    $(".sub_menu").hide();
});

var isClick = true;
$mMenu.on("click",function(){
    if($(this).hasClass("on")){
        $("#header").removeClass("on")
        $(".sub_menu").slideUp();
        $mMenu.removeClass("on");
    }
    else
    {
        $("#header").addClass("on");
        $(".sub_menu").slideUp();
        $(this).find(".sub_menu").slideDown();
        $mMenu.removeClass("on");
        $(this).addClass("on");
    }
    
})

$("#login").focusin(function(){
    $(".sub_menu").hide();
    $pcMenu.removeClass("on");
});


$subMenu.on("mouseenter focusin",function(){
    $(this).addClass("on");
}).on("mouseleave focusout",function(){
    $(this).removeClass("on");
});



})