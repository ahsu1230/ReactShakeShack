# Exercise: React Shakeshack Delete Function Parameter

By this step, you should be able to successfully add new orders to a list, and display the updated full list of orders. With every order in this list, there should be a "Delete" button which should remove the selected order from the list.

To fully implement the Delete Order feature, we'll have to do the following:
- Create the "Delete Order" button for every row in order list
- Hookup functions to successfully delete order from the list
- Style Delete Order button

## Create a Delete Order button

For each row in our list, create a Delete Order button.
*Hint* This button should be part of your `HomeOrderListItem` Component.

## Hookup Functions

When clicking on this button, it should invoke a "delete-this-order-from-list" function.
Now remember, the original list data is in the `HomePage` component. The `HomePage` component also has a `deleteOrderFromList` function. This delete button needs to somehow call this `deleteOrderFromList` function and in order to do that, we're going to need to use parameter functions.

We'll have to pass the parameter function from `HomePage` to `HomeOrderList`, then from `HomeOrderList` to `HomeOrderListItem`.

*Note* Remember that this `deleteOrderFromList` function takes in an `orderId` as its parameter. You will need to invoke the parameter function with the `orderId` passed in.

## Style

Give the delete button the following style:

- padding of 6px (top and bottom) and 12px (left and right)
- no border, but border radius of 4px
- no outline
- red background color, but white text color (use variables from `_constants.sass`)
- font size is 14px
- *bonus:* when you hover over this button, the cursor should be the pointy finger and make the brightness of the button a little lighter (only on hover)

```
filter: brightness(1.1)
cursor: pointer
```

[Continue](./15_callbacks.md)