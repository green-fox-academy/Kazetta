'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let oneday: number = 86400;
let cs: number = 42;
let cm: number = 60 * 34;
let ch: number = 14 * 60 * 60;

console.log(oneday - (cs + cm + ch));



//42 + 2040 + 50400 = 52482;
//86400 - 52482 = 33918;