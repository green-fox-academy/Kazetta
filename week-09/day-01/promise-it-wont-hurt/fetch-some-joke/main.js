'use strict';

const button = document.querySelector('button');

button.onclick = () => {
    
};

fetch('http://api.icndb.com/jokes/random', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ a: 12, b:13 })
})
