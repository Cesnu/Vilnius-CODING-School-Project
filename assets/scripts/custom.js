"use strict";

// gauname MENU mygtuka
let burger = document.querySelector(".menu");
// console.log(burger);

// parasom ivykio stebetoja ant BURGER

burger.addEventListener("click", function(){
    let meniu = document.querySelector(".nav-menu");
    meniu.classList.toggle("show");
// event.preventDefault();
});


let burger2 = document.querySelectorAll(".container-menu-list a");
// console.log(burger2);

for (var i = 0; i < burger2.length; i++) {

burger2[i].addEventListener("click", function(){
    let meniu = document.querySelector(".nav-menu");
    meniu.classList.toggle("show");
});

}

let burger3 = document.querySelector(".nav-menu i");

burger3.addEventListener("click", function(){
    let meniu = document.querySelector(".nav-menu");
    meniu.classList.toggle("show");
});


$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $(".header").addClass("active");
    } else {
// remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});


$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           // downscroll code
           $(".header").css('visibility','hidden').hover ()
       } else {
          // upscroll code
          $(".header").css('visibility','visible');
       }
       lastScrollTop = st;
    });
});