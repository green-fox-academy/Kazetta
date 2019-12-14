'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let letterArray: string[] = quote.split(' ')
//console.log(letterArray);

letterArray.splice(3,0,'always takes longer than'); 

let HofLaw: string = letterArray.join('');

console.log(HofLaw);

//console.log(letterArray);

//let takesLonger: string = 'always takes longer than';
//console.log(takesLonger); 

//console.log(quote);

