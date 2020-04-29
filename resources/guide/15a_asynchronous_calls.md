# Reading: Asynchronous Programming



# Callbacks and Asynchronous Calls

Asynchronous and Callbacks basically go hand-in-hand. Remember that a callback function is invoked AFTER some tasks happen. In this case, we often use callback functions to be invoked after an asynchronous task is finished. Take a look at the below example.

```javascript
let successCallback = () => console.log("Success!");
let failCallback = () => console.log("Failed!");
doAsyncTask()
    .then(() => successCallback())
    .error(() => failCallback());
```

This `asyncTask` function is a function that takes 1 second to finish. 

[Continue](./18_loading_screen.md)