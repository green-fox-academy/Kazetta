'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3


let limit: number = 5;


let a: number = 0;

for (let i: number = 1; i <= limit; i++ ) {
    a = a + i; 
  }

console.log('Sum:' + a);  

console.log('Average:' + a / limit);