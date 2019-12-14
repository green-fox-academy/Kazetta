'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

let c: number = a;
let d: number = b;

a = d;
b = c;


console.log(a);
console.log(b);