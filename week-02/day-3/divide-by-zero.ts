'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divideByZero(num: number): void {
    if (num === 0) {
        throw new Error ('hujuj');
    }
    let result:number = 10 / num;
    console.log(result);
}

try {
    divideByZero(0);
} catch (error) {
    console.log('fail');
}
