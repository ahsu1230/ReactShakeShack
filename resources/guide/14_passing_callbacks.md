# Exercise: React Shakeshack with Callback functions

So we've done the following in our ShakeShack app:

- We have a HomePage which is our most parent Component
- We have a child component HomeOrderForm which adds orders to the list
- We have a child component HomeOrderList which displays the list

However, at this point in time, HomeOrderForm isn't really adding to our list of orders. And HomeOrderList is still displaying a fake list. We're going to connect them together using callback functions.

## The Gist

So we have this problem. We have two components that are modifying the same data. The HomeOrderForm is adding orders while the HomeOrderList is retrieving data in the list and also deleting orders too. So the question becomes who gets to internally save the orderList?

In React, the best way to solve this is to give it to their common ancestor, which in this case, it's the parent HomePage component. HomePage will keep track of the list, and using function callbacks, it will allow its child components to modify data or retrieve data from the list.

The HomePage Component will have 3 callbacks:

- getAllOrders()
- addOrderToList(...)
- deleteOrderFromList(...)

These callbacks will be passed to the children components and the children components can invoke these callback functions when they need to.

So for example, when the HomeOrderForm's "Add Order" button gets clicked, it will call `addOrderToList(...)` which is passed from the parent. Or when HomeOrderList renders, it will first call `getAllOrders()` to retrieve the list data first.

## Setting Up HomePage

To set up the HomePage component, we need to define its state variable that will have an `orderList`.

```javascript
state => {
    orderList: []
}
```

You will also have to define all of its callback functions.

```javascript
getAllOrders = () => {
    // todo
    // hint: use this.state.orderList
}

addOrderToList = (order) => {
    // todo
    // to change this.state.orderList, you must use this.setState(...). Remember that?
}

deleteOrderFromList = (order) => {
    // todo: delete the element in orderList with the same `id` as order.id
    // to change this.state.orderList, you must use this.setState(...). Remember that?
}
```

## Passing Callbacks to HomeOrderForm

Our callbacks are ready. To pass them to Components, you can simply define a parameter in `HomeOrderForm` and pass in the function.

```javascript
<HomeOrderForm addOrderCallback={this.addOrderToList}>
```

Inside HomeOrderForm, the callback function can be used using `this.props.addOrderCallback`.
Invoke it when the user clicks the add button.

## Passing Callbacks to HomeOrderList

Same thing, here. Pass the `getAllOrders()` function as a callback parameter. Then access it in HomeOrderList as a props variable. I think the `getAllOrders()` function should be invoked in the render() function here because anytime the order list changes, we should re-render the list.

```javascript
<HomeOrderList getAllOrdersCallback={this.getAllOrders}>
```

In HomeOrderList,

```javascript
render() {
    const orderList = this.props.getAllOrders();
    ...
    return (...);
}
```

We'll do the "delete" callback in the next step.
[Continue](./15_delete_callback.md)