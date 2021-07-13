

$(function(){

    $(".tab > li > a").on("click focusin",function(){
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");
    })
})