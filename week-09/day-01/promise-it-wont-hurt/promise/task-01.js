'use strict';

/*function timeOut() {
    console.log("TIME OUT");
}
timeOut();*/

function delayWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('TIMED OUT!'), 300);
    });
}

delayWithPromise()
    .then((result) => {
        //  in case of resolve - line 34
        console.log(result);
    })
    .catch((err) => {
        //  in case of reject - line 35
        console.log(`failed: ${err}`);
    })
