//smoth scroll nav links
$(".nav-item .nav-link").click(function(){
    $("body,html").animate({scrollTop:$("#" + $(this).data("value")).offset().top + 1}
        ,1000)
        $(".nav-item .nav-link").removeClass("active")  
        $(this).addClass("active")  
})
//syn nav links with section
$(window).scroll(function(){
    $(".section").each(function(){
        if($(window).scrollTop() > $(this).offset().top){
            let sectionId = $(this).attr("id");
            $(".navbar ul li a").removeClass("active")

                $('.navbar ul li a[data-value="'+ sectionId +'"] ').addClass("active")

        }
})
})



//smoth scroll navbar
let serOffset = $("#Service").offset().top
$(window).scroll(function(){
    let windScroll = $(window).scrollTop()
    if(windScroll > serOffset - 50){
        $(".navbar").addClass("navscroll")
    }else{
        $(".navbar").removeClass("navscroll")
    }
})



//custum shuffle our-works

$(".our-work ul li").click(function(e){
    $(e.target).addClass("btn-style").siblings().removeClass("btn-style") 
    $(".item").hide()
    $('.'+ $(this).data("value")).fadeIn()
})