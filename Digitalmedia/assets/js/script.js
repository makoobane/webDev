"use strict";

const addEventsOnManyElements=function(elements,eventType,callback){
    let len=elements.length;
    for(let i=0;i<len;i++){
        elements[i].addEventListener(eventType,callback);
    }
}
//do navbar
const navbar=document.querySelector("[data-navbar]");
const menuButton=document.querySelector("[data-nav-toggle-btn]");
const overlay=document.querySelector("[data-overlay]");

const toggleActive=function(){
    navbar.classList.toggle("active");
    menuButton.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventsOnManyElements([menuButton,overlay],"click",toggleActive);

// PARALLAX EFFECT
const elementsForParallaxEffect=document.querySelectorAll("[data-parallax]");
window.addEventListener("mousemove",(event)=>{
    let length=elementsForParallaxEffect.length;
    for(let i=0;i<length;i++){
        let speed=Number(elementsForParallaxEffect[i].dataset.parallaxSpeed);    
        const dx=(event.clientX/window.innerWidth)*speed;
        const dy=(event.clientY/window.innerHeight)*speed;
        elementsForParallaxEffect[i].animate({transform:`translate(${dx}px,${dy}px`},{fill:"forwards",duration:500});
    }
})