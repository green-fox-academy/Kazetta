'use strict';

/*Task

Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.

*/

function delayWithPromise() {
    return new Promise(function (resolve, reject) {
        // Your solution here
        setTimeout(() => resolve('FULFILLED!'), 300);
    });

}

delayWithPromise()
    // Your solution here
    .then((result) => {
        console.log(result);
    })