const STORAGE_ORDER_LIST = "storage_order_list";

export const getSavedOrders = () => {
    // Retrieve data with localStorage. Be sure to use STORAGE_ORDER_LIST
    const orders = "[]"; // Replace this!

    return JSON.parse(orders);
}

export const updateSavedOrders = (l) => {
    const list = JSON.stringify(l);

    // Implement this! Using the above variable `list`.
    // Saves data to localStorage. Be sure to use STORAGE_ORDER_LIST
}