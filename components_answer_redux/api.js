// "use strict";
//
// /*
//     Pretend that these functions take some time
//  */
// const API_WORKS = true; // turn this into false to see what happens
//
// function storeOrder(order) {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (API_WORKS) {
//                 resolve();
//             } else {
//                 reject("API store failed");
//             }
//         }, 1200);
//     });
//     return promise;
// }
//
// function deleteOrder(order) {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (API_WORKS) {
//                 resolve();
//             } else {
//                 reject("API delete failed");
//             }
//         }, 1200);
//     });
//     return promise;
// }
//
// /* API functions to expose to other js files */
// export const API = {
//     storeOrder: storeOrder,
//     deleteOrder: deleteOrder
// };
