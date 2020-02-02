'use strict';

// a body egész contentjék kicserélhetem, ugyanez működik a header-rel vagy bármelyik részével
// let mybody = document.getElementsByTagName("body");
// mybody[0].innerHTML = "<p>Im a paragraph</p>"; 

//text content method
let mytitle = document.getElementById("page-title");
//console.log(mytitle.textContent);
mytitle.textContent = "I changed this title"

let link = document.getElementById("test"); 
//ezt fogja visszadni: <a href="/valami" id="test" class="ninja">valami</a>

link.getAttribute("href");
//ezt fogja visszaadni: "/valami"

link.getAttribute("class");
//ninja

link.setAttribute("class", "pie");
// a link class-át átállítottam pie-ra

link.setAttribute("alt","hello");
//adtam neki egy alt-ot, aminek az értéke "hello"

link.className;
//pie

link.className = "ninja";
//"ninja" lett a link classname-ja

link.href;
//a href értékét adja vissza

link.style;
//a link formázását adja vissza