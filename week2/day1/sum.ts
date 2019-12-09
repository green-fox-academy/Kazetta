// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict';

let num: number = 10;
let numbersUntilTen: number = sum(num);
console.log(numbersUntilTen);

function sum(until: number): number {
  console.log('until is ' + until);
  let sum: number = 0;
  for (let i: number = 0; i <= until; i++) {
    sum += i;
  }
  return sum;
}


