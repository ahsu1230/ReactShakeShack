# Callbacks

Javascript is kind of weird. Javascript has a way to save functions as variables and then pass them as parameters to other functions. Wut?

Take a look here:

```javascript
function doSomething() {
    return "World!";
}

function doSomethingElse(someFunc) {
    var result = someFunc();
    console.log("Hello " + result);
}
```

Here, we have defined two functions. The first one is just a regular function. The second function takes a parameter. Notice when we take the parameter and apply a `()` to it, we are invoking the parameter as a function.

Here's how we use these functions within functions.

```javascript
doSomethingElse(doSomething); // will print out "Hello World"
```

In the first example, we pass `doSomething` which we've already defined as a function. `doSomething` is passed as a parameter of `doSomethingElse`, which is then invoked to become the variable `result`.

So why is this a thing?

In Javascript, there are many situations when you want someone else to do something eventually. Let's say a complicated function has many tasks and when it's done you want it do something. A common pattern is when you attempt to do many tasks and if it succeeds, you print a success message, but if the tasks fail, you print an error message.

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

Here's how we use this .

```javascript
let successCallback = function() { console.log("Success!"); }
let failCallback = function() { console.log("Failed!"); }
doComplicatedTasks(successCallback, failCallback);
```

Side note: we created something called an "anonymous" function which is basically a function without a name. The point of an anonymous function is just a convenience way to declare short functions without having to declare them elsewhere. When you have too many functions declared, you end up going back and forth where they might show up in your file - and it just gets to be a pain.

Anyway, in the above example, we declare two functions and pass them into the function `doComplicatedTasks`. When `doComplicatedTasks` finishes, we're going to hit the if/else block above. If the operation was a success, we invoke `successCallback()` and if it is a failure, we invoke `failCallback`!.

Again, to invoke a function, you must use its name followed by `()`. When you pass a function as a parameter, do NOT do this.

```javascript
doComplicatedTasks(successCallback(), ...)
```

When you do the above, it will actually evaluate `successCallback()` and you end up passing the return value of that function into `doComplicatedTasks()`. If you're going to pass the function, do it without the parantheses. That way, javascript just holds the function and can pass it around without evaluating the function.

[Continue](./20_finish_line.md)