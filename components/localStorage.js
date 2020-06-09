const STORAGE_ORDER_LIST = "storage_order_list";
const STORAGE_ORDER_COUNT = "storage_order_count";

export const getSavedOrders = () => {
    const orders = window.localStorage.getItem(STORAGE_ORDER_LIST);

    return JSON.parse(orders);
};

export const getOrderCount = () => {
    const count = window.localStorage.getItem(STORAGE_ORDER_COUNT);

    return JSON.parse(count);
}

export const updateSavedOrders = l => {
    const list = JSON.stringify(l);
    window.localStorage.setItem(STORAGE_ORDER_LIST, list);
};

export const updateOrderCount = c => {
    const count = JSON.stringify(c);
    window.localStorage.setItem(STORAGE_ORDER_COUNT, count);
}
