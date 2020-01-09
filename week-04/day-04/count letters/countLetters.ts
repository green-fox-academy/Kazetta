'use strict'

/*Write a function, that takes a string as an argument 
and returns a dictionary with all letters in the string 
as keys, and numbers as values that shows how many 
occurrences there are.
Create a test for that.*/

export function countingLetter(text:string): {} {
    let myArray = text.split("");
    let counted: { [k:string]: number } = {};

    for (let i:number = 0; i < myArray.length; i++) {
        let currentNumber = myArray[i];

        if(counted.hasOwnProperty(currentNumber)) {
            counted[currentNumber] += 1;
        } else {
            counted[currentNumber] = 1;
        }
    }
    return counted;
}

//console.log(countingLetter("banana"));
