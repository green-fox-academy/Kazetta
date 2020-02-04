'use strict';

const text = document.querySelector("h1");
document.addEventListener('keyup', logKey);

function logKey(e) {
    text.innerHTML = `Your last pressed key is ${e.code}`;
};

text.setAttribute("style", "font-size:60pt");
