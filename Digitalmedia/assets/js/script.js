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