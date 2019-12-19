'use strict';

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addNumbers(nNumber:number): number {
    if(nNumber === 1) {
        return nNumber;
    }
    return addNumbers(nNumber-1) + nNumber;
}
1   
console.log(addNumbers(5));