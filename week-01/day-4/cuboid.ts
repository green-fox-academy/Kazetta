'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

/*let a:number = ();
let b:number = ();
let c:number = ();*/

//2*(front + side + top) = 600;

let a:number = 2;
let b:number = 4;
let c:number = 6;

console.log('Surface Area:', 2*(a + b + c));
console.log('Volume:', a * b * c);