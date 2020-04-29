# React Lifecycle - ComponentDidMount

Remember [React lifecycles](./05_react_lifecycles.md)?

One of the lifecycles we mentioned but didn't explain in detail was `componentDidMount()`. The lifecycle functions of a component get called in this order:

- constructor()         // called once
- componentDidMount()   // called once
- render()              // can be called many times

`componentDidMount()` is usually used to call any asynchronous functions to re-render our component. The asynchronous call that we're calling here is a fake API call that actually retrieves data from `localStorage`. The data we want to save for this website is the list of orders.

## Exercise: Implementing LocalStorage

Inside `localStorage.js`, implement `getSavedOrders()` and `updateSaveOrders()`. Observe a constant is provided for you. You will use this as the key for `localStorage.setItem(...)` and `localStorage.getItem(...)`.

```javascript
const STORAGE_ORDER_LIST = "storage_order_list";

export const getSavedOrders = () => {
    // Retrieve data with localStorage. Be sure to use STORAGE_ORDER_LIST
    const orders = []; // Replace this!

    return JSON.parse(orders);
}

export const updateSavedOrders = (l) => {
    const list = JSON.stringify(l);

    // Implement this! Using the above variable `list`.
    // Saves data to localStorage. Be sure to use STORAGE_ORDER_LIST
}
```

## Exercise: Updating LocalStorage

Whenever the list of orders is updated in `home.js`, call the appropriate function from `localStorage.js`.

You will need an import statement.

```javascript
import { updateSavedOrders } from "./localStorage.js";
```

And update the functions `addOrderToList` and `deleteOrderFromList`.

## Exercise: Retrieving from LocalStorage

In the `componentDidMount()` of `HomePage`, call `API.fetchOrders()` from the API library. When the asynchronous call is finished, update the state `orderList`.

You will need an import statement.

```javascript
import API from "./api.js";
```

And to implement the `componentDidMount` lifecycle.

```javascript
export default class HomePage extends React.Component {
    state = {...};

    componentDidMount() {
        API.fetchOrders().then(data => {
            // Implement this!
            // Be careful, the first time you call this, data might be null.
            // If data is null, don't change orderList.
        });
    }
    ...
}
```

Things should have worked correctly if the list persists even after you refresh the page or go to the Quit page and come back. This is a very useful feature for saving information a user doesn't want to lose.

---

[Continue](./16a_callbacks.md)