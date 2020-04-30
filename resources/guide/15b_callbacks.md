# Reading: Callbacks

It is a common pattern in Javascript to pass functions around to be executed "later". Let's say a complicated function has many tasks and when it's done you want it do something else. A common pattern is when you attempt to do many tasks and if it succeeds, you print a success message, but if the tasks fail, you print an error message.

```javascript
function doComplicatedTasks() {
    let success = ...;
    // do tasks... success could be set to true/false
    // do tasks...
    if (success) {
        console.log("Success!");
    } else {
        console.log("Fail!");
    }
}
```

Now what if we wanted to do something more complicated than just printing? Let's say I want to do some data processing. As an added bonus, let's say those functions were passed in from elsewhere.

```javascript
function doComplicatedTasks(successFunc, failFunc) {
    let success = ...;
    // do tasks... success could be set to true/false
    // do tasks...
    if (success) {
        successFunc(); // invoke success function!
    } else {
        failFunc();    // invoke fail function!
    }
}
```

To use this function `doComplicatedTasks`, I would do something like this:

```javascript
let successCallback = function() {
    console.log("Success!");
};

let failCallback = function() {
    console.log("Failed!");
};

doComplicatedTasks(successCallback, failCallback);
```

*Side note:* we created something called an "anonymous" function which is basically a function without a name. The point of an anonymous function is just a convenient way to declare short-lived functions without having to declare them elsewhere. Too many functions means too many names everywhere. Anonymous functions help because they just define a function without requiring a name reference.

Anyway, in the above example, as you may have guessed, `successCallback` and `failCallback` are **callback functions**. They are functions we declare now and pass it to another function. At the end of that other function, we will execute one of these callback functions. If the operation was a success, we invoke `successCallback()` and if it is a failure, we invoke `failCallback`!.

Again, to invoke a function, you must use its name followed by `()`. When you pass a function as a parameter, do NOT do this.

```javascript
doComplicatedTasks(successCallback(), ...)
```

When you do the above, it will actually evaluate `successCallback()` and you end up passing the return value of that function into `doComplicatedTasks()`. If you're going to pass the function, do it without the parantheses. That way, javascript just holds the function and can pass it around without evaluating the function.

## Previous callbacks

Actually, we've already been using callback functions. When we've been passing functions (`addOrderToList` or `deleteOrderFromList` between parent-child components, we were essentially passing functions that would be executed later after an event happened. In this case, after the "Add Order" button was clicked, we invoked `addOrderToList()` and after the `Delete` button was clicked, we invoke `deleteOrderFromList`.

## Callbacks and Promises

Asynchronous and Callbacks basically go hand-in-hand. Remember that a callback function is invoked AFTER some tasks happen. In this case, we often call callback functions after an asynchronous task has finished. Take a look at the below example.

```javascript
let successCallback = (data) => processData(data);
let failCallback = (errors) => window.alert("errors: " + errors);

...

// Define a promise object
let somePromise = new Promise(...);

// When promise has finished, catch the success/failure results and invoke appropriate callback function.
somePromise
    .then((res) => successCallback(res))
    .error((err) => failCallback(err));
```

---

[Continue](./16a_localstorage.md)