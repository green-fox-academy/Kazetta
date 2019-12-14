"use strict";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const path:string = ('mancika.txt')
const characterEncoding: string = 'utf-8';

function countLine (fileName: string);{
    const fs = require("fs");
    
    try {
      let fileContent = fs.readFileSync(path, characterEncoding);
      console.log(fileContent.split("\n").lenght);
    } catch (e) {
      console.log("zero");
    }
}

countLine('mancika.txt');