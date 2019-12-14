
'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


let lineCount: number = 7;
let output = "";

for (let a = 0; a < lineCount; a++) {
    let myspace: string = "a";

    for (let b = 0; b < (lineCount - a - 1); b++) {
        myspace += "-";
    }

    for (let c = 1; c <= 2 * a + 1; c++) {
        output += "*"
    }

    console.log(myspace + output);
    output = "";
} 



