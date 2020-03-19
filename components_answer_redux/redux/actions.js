import API from '../api.js';

/* Action types For Redux Reducers */
export const ACTION_TYPE_ADD_ORDER = "ACTION_ADD_ORDER";

export const ACTION_TYPE_DELETE_ORDER_BEGIN = "ACTION_DELETE_ORDER_BEGIN";
export const ACTION_TYPE_DELETE_ORDER_SUCCESS = "ACTION_DELETE_ORDER_SUCCESS";
export const ACTION_TYPE_DELETE_ORDER_FAIL = "ACTION_DELETE_ORDER_FAIL";

export function dispatchDeleteOrder(dispatch, order) {
    dispatch({type: ACTION_TYPE_DELETE_ORDER_BEGIN});
    return API.deleteOrder(order)
        .then(res => {
            dispatch({type: ACTION_TYPE_DELETE_ORDER_SUCCESS, data: order});
        })
        .catch(err => {
            dispatch({type: ACTION_TYPE_DELETE_ORDER_FAIL});
            alert("An error occured! " + err);
        });
}
