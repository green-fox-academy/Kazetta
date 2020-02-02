'use strict';

// a body egész contentjék kicserélhetem, ugyanez működik a header-rel vagy bármelyik részével
//let mybody = document.getElementsByTagName("body");
//mybody[0].innerHTML = "<p>Im a paragraph</p>"; 

//text content method
let mytitle = document.getElementById("page-title");
//console.log(mytitle.textContent);
mytitle.textContent = "I changed this title"