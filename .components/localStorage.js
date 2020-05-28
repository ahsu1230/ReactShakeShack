const STORAGE_ORDER_LIST = "storage_order_list";

export const getSavedOrders = () => {
    const orders = window.localStorage.getItem(STORAGE_ORDER_LIST);
    return JSON.parse(orders);
};

export const updateSavedOrders = l => {
    const list = JSON.stringify(l);
    window.localStorage.setItem(STORAGE_ORDER_LIST, list);
};
