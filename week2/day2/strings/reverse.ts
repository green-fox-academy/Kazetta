'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let letter: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
//console.log(reverse(reversed));

//export = reverse;

console.log(letter);

let characterArray: string[] = letter.split('')
console.log(characterArray);

let c: string = '';
for (let i = characterArray.length -1; i >= 0; i--){
    c = c + characterArray[i];
}
console.log(c);




//reversed.forEach(
  //  function(reversed) {
    //console.log(reversed)
    //} )
    