'use strict';

let title = document.getElementById("page-title");
let body = document.getElementsByTagName("body")[0];
// let mybutton = document.getElementsByTagName("button")[0];

let mybutton = document.querySelector("div > .rigo");

title.setAttribute("style","font-size:200px; margin:0; padding:0; word-spacing: 40px; line-height: 110%; text-shadow: 6px 6px MidnightBlue; color: Gold;font-family: 'Monoton', cursive;");
title.style.left = "20px";
title.innerHTML = "Go your own way";

body.setAttribute("style", "background-color: Turquoise");

mybutton.innerHTML = "This button do nothing at all";
mybutton.setAttribute("style","font-family:monserrat;border-color:MidnightBlue ;color:Turquoise; padding: 16px; margin: 0.5% ; border-radius: 12px; font-size: 24px; background-color: MidnightBlue");

mybutton.onclick = () => {
    alert('I told you');
    console.log('after alert');
}