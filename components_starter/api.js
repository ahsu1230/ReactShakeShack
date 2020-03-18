"use strict";

var ORDER_COUNTER = 0;
var ORDER_LIST = "order_list";
var DELAY_TIME_MS = 500; // delay time in milliseconds

/*
    Pretend that these functions take some time
 */

function getAllStoredOrders() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // TODO: Implement
            // Must call resolve(...) with list of orders
            // List of orders is retrieved from localStorage
        }, DELAY_TIME_MS);
    });
    return promise;
}

function storeOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // TODO: Implement
            // If order is invalid, must call reject(...) with error message
            // If order is valid, must call resolve(...) with updated list of orders
        }, DELAY_TIME_MS);
    });
    return promise;
}

function deleteOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // TODO: Implement
            // If order is not found in list, must call reject(...) with error message
            // If order is valid, must call resolve(...) with updated list of orders
        }, DELAY_TIME_MS);
    });
    return promise;
}

/* API functions to expose to other js files */
export const API = {
    getAllStoredOrders: getAllStoredOrders,
    storeOrder: storeOrder,
    deleteOrder: deleteOrder
};
