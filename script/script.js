"use strict";
$(function(){
    $(".accordion a").on("click",function(e){
        e.preventDefault();
        $(".accordion a").removeClass("active")
        $(this).addClass("active")
        $(".accordion .div-fieldset").slideUp()
        $(this).next(".div-fieldset").slideDown()
    });

    $(".pages").bxSlider({
        auto:true,
        pager:false,
        pause:3500,
        controls:false
    })
    $(".part-7 .sliders").bxSlider({
        auto:true,
        controls:false
    })

    $(".collapse").click(function(e){
        $("nav").slideToggle(500)
        $(this).toggleClass("active")
        $(".cart-item").slideUp()
        
        $(".crt").click(function(){
            $("nav").slideUp()
            $(".collapse").toggleClass("active")
        })
    })

    if(screen.width<481){
        $("nav a").click(function(e){
            $("nav").slideUp()
            $(".collapse").removeClass("active")
        })

    }


    $(".crt").click(function(){
        $(".cart-item").slideToggle(500)
    })
    $(".close").click(function(){
        $(".cart-item").slideUp()
    })

    $(".search").click(function(){
        $(" nav").toggleClass("active")
        $(".search-box").slideToggle()
    })

    

})

