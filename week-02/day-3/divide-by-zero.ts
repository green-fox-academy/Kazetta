'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide (number: number){
    if (number === 0) {
        throw Error ('error')
    } else {
        console.log(10/number);
    }
}

try {
    divide(0);
} catch (e){
    console.log('hujujuj');
}