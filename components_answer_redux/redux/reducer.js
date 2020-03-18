"use strict";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    ACTION_TYPE_ADD_ORDER,
    ACTION_TYPE_DELETE_ORDER
} from './actions';

const initialState = {
    orderList: [],
    showLoading: false
};

function reducer(state = initialState, action) {
    console.log("Reducer invoked with action: " + action.type);

    switch(action.type) {
        case ACTION_TYPE_ADD_ORDER:
            let newOrder = action.value;
            return {
                ...state,
                orderList: state.orderList.concat(newOrder)
            };
        case ACTION_TYPE_DELETE_ORDER:
            let orderToDelete = action.value;
            return {
                ...state,
                orderList: state.orderList.filter(o => o.id !== orderToDelete.id),
            };
        default:
            console.log("Unknown action type");
    }
    return state;
}

export const Store = createStore(
    reducer,
    applyMiddleware(thunk)
);
