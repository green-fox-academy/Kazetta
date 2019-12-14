'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 2;
let b: number = 4;
let c: number = 6;


let surface: number = (2 * (a * b)) + (2 * (c * b)) + (2 * (a * c));
console.log('Surface Area:' + surface);

let volume: number = (a * b * c);
console.log('Volume:' + volume);