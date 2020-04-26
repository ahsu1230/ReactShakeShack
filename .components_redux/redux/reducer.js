"use strict";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as ACTIONS from "./actions";

/* Initial state of store values - when the entire application starts up
 * Note: If the user switches pages, this data persists.
 * However, if the user leaves the website, these values are gone and are reset.
 */
const initialState = {
    orderList: [],
    showLoading: false
};

/* Reducer - the pigeon-person */
function reducer(state = initialState, action) {
    console.log("Reducer invoked with action: " + action.type);

    switch (action.type) {
        case ACTIONS.ACTION_TYPE_ADD_ORDER:
            let newOrder = action.data;
            return {
                ...state,
                orderList: state.orderList.concat(newOrder)
            };
        case ACTIONS.ACTION_TYPE_DELETE_ORDER_BEGIN:
            return {
                ...state,
                showLoading: true // show loading screen when requested
            };
        case ACTIONS.ACTION_TYPE_DELETE_ORDER_SUCCESS:
            let orderToDelete = action.data;
            return {
                ...state,
                orderList: state.orderList.filter(
                    o => o.id !== orderToDelete.id
                ),
                showLoading: false // stop showing loading screen
            };
        case ACTIONS.ACTION_TYPE_DELETE_ORDER_FAIL:
            return {
                ...state,
                showLoading: false // stop showing loading screen
            };
        default:
            console.log("Unknown action type");
    }
    return state;
}

export const Store = createStore(reducer, applyMiddleware(thunk));
