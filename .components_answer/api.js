"use strict";

const API_WORKS = true;         // turn this into false to see what happens
const API_WAIT_TIME_MS = 1100;   // Wait time in milliseconds

/* This function is meant to take a very long time (>1 second).
 * It returns a promise,
 * which is a "I-don't-have-the-data-now-but-will-give-you-later" object.
 * Use resolve(...) to stop the promise and return a success case
 * Use reject(...) to stop the promise and return an error case
 */
function deleteOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (API_WORKS) {
                resolve();
            } else {
                reject("API delete failed");
            }
        }, API_WAIT_TIME_MS);
    });
    return promise;
}

/* API functions to expose to other js files */
export default {
    deleteOrder: deleteOrder
}
