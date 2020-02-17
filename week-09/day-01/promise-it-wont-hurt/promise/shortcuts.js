'use strict';

/*We don’t have any specific task we’d like to assign to you for this lesson.
Feel free to explore all three functions at your own pace. When you are
preparing to submit though, make sure you are using at least catch and one
of Promise.resolve and Promise.reject ☺*/

function shortcutPromise() {
    return Promise.reject('SECRET VALUE');
};

shortcutPromise()
    .catch((result) => {
        console.log(result);
    });