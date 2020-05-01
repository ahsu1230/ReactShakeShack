# Functions as Variables

Javascript is kind of weird. Javascript has a way to save functions as variables and then pass them as parameters to other functions. Wut?

Take a look here:

```javascript
function sayWorld() {
    return "World!";
}

function sayHello(someFunc) {
    let result = someFunc();
    console.log("Hello " + result);
}
```

Here, we have defined two functions.

- The first one `sayWorld` is just a regular function that returns a string.
- The second function `sayHello` takes a parameter. 

Notice when we take the parameter `someFunc` and apply a `()` to it, we are invoking the parameter as a function. Basically, `sayHello()` is expecting a function name, which we will actually execute later.

Here's how we use these functions within functions.

```javascript
sayHello(sayWorld); // will print out "Hello World"
```

If we trace the inside of `sayHello`, we'll find that `sayWorld` is passed in as `someFunc`. When we call `someFunc()` with the parantheses, we are actually invoking `sayWorld()` and saves it to the variable `result`. The value of `result` at this point is `"World!"`. And then we console.log `"Hello " + "World!"`.

## Uh ok, so why is this a thing?

Javascript functions is probably the main factor that differentiates it from other programming languages. With Javascript functions, you can do a lot of fancy things that would otherwise be extremely inelegant in other languages. Some people love it, some people hate it :)

We'll see how they can be used in a moment.

---

[Continue](./13b_react_function_parameters.md)