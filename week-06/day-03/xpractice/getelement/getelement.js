'use strict';

document.getElementsByClassName("content");

let mycontentdivs = document.getElementsByClassName("content");
console.log(mycontentdivs);

let myh2 = mycontentdivs[1].getElementsByTagName("h2");
console.log(myh2);

myh2[0].innerHTML = "you are pretty :)";

let myid = document.getElementById("page-title");
console.log(myid);