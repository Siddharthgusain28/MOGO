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
        $(".collapse-nav").slideToggle(500)
        $(this).toggleClass("active")
        $(".cart-item").slideUp()
        
        $(".crt").click(function(){
            $(".collapse-nav").slideUp()
            $(".collapse").toggleClass("active")
        })
    })

    if(screen.width<481){
        $(".collapse-nav a").click(function(e){
            $(".collapse-nav").slideUp()
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
        $(".collapse-nav nav").toggleClass("active")
        $(".search-box").slideToggle()
    })

    

})

