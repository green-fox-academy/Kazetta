'use strict';
const text = document.querySelector("h1");
document.addEventListener('keyup', logKey);

function logKey(e) {
    text.innerHTML = `Last pressed key is ${e.code}`;
};