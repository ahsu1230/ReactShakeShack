# Buttons and OnClick
 - How to use `<button>`
 - How to use it with `onClick`

## ShakeShack!
 - Add a button inside the `<form>` that says "Add to Orders"
 - Have your button call a function called `onClickAddOrder` when it is clicked on. Your function can simply console.log a message for now.

So the HTML portion should look like:
```
<button onClick={this.onClickAddOrder}>Add to Orders</button>
```

 ```
 onClickAddOrder() {
   console.log("...");
 }
 ```
