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
            let list = window.localStorage.getItem(ORDER_LIST) || "[]";
            resolve(JSON.parse(list));
        }, DELAY_TIME_MS);
    });
    return promise;
}

function storeOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // If order is invalid, then reject!
            if (order.id <= 0 || order.num <= 0 || order.name == "") {
                reject("Invalid Order!");
            } else {
                // Otherwise, change list and resolve
                let list = window.localStorage.getItem(ORDER_LIST) || "[]";
                list = JSON.parse(list);
                list.push(order);
                window.localStorage.setItem(ORDER_LIST, JSON.stringify(list));
                resolve(list);
            }
        }, DELAY_TIME_MS);
    });
    return promise;
}

function deleteOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let list = window.localStorage.getItem(ORDER_LIST) || "[]";
            list = JSON.parse(list);

            // Find index of Order with order.id
            let index = -1;
            for (let i = 0; i < list.length; i++) {
                if (list[i].id == order.id) {
                    index = i;
                    break;
                }
            }

            // If order is invalid (not found), then reject!
            if (index == -1) {
                reject("Order not found!");
            } else {
                // Otherwise, change list and resolve!
                list.splice(index, 1);
                window.localStorage.setItem(ORDER_LIST, JSON.stringify(list));
                resolve(list);
            }
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
