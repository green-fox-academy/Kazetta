// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

let factorio: number = 5;

let factorialis: number = sum(factorio);
// console.log(factorialis);

function sum(until: number): number {
   
    let sum: number = 1;
   
    for (let i: number = 1; i <= until; i++) {
        sum = sum * i;
    }
   
    return sum;
}

console.log(sum(factorio));