'use strict';

let listContent = ['apple', 'banana', 'cat', 'dog'];
let ulElement = document.querySelector('ul');

console.log(ulElement.children);
console.log(ulElement.children[1]);
console.log(ulElement.children[2].innerText);

let ilElement = document.querySelectorAll('li');

for (let i = 0; i < ilEl.length; i++) {
    ilElement[i].innerText = listContent[i];
}

console.log(ulElement.children);

ulElement.setAttribute('class', 'color');


console.log(ulElement);