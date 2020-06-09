# Reading: Asynchronous Programming

Most of the programming you've been up until now is called **Synchronous Programming**. It's the idea that code statements execute one after the other in the specified order. For instance...

```javascript
statement1();
statement2();
statement3();
```

From the above code, you would expect to call statement2 only after statement1 finishes and only call statement3 when statement2 finishes. Thus, you expect the order to be statement1 -> statement2 -> statement3. Simple right?

But computers have this insane ability to multi-task. Far better than a human ever could. Right now, many computer processes are happening all at once on your computer. One process is listening for new emails, another process is listening to music, and another process is handling what you type into your computer and displaying whatever you interact with. When programs / code are all running at the same time, we call this *Concurrency*.

Concurrency is important because it also allows a computer to work as efficiently as possible. Let's say there is a code statement that can take a long time because it's performing some heavy-duty data crunching. Let's say in the above example, statement2 is this heavy-duty function that takes 10 seconds to complete. In sychronous programming, that means statement3 will be "blocked" from executing for 10 seconds until statement2 is finished. That's... a long time! Especially in computer terms!

Synchronous programming means that statements are run on the same process in a certain order, one after the other. With **Asynchronous Programming**, there's a way to have statement2 "spinoff" to another computer process and run on that process while the current process can continue executing statements. Effectively, this allows the computer to multi-task running both processes at the same time and complete more work because statements are not blocking each other from running.

In pseudo-code, the asynchronous code would look something like this:

```javascript
// Your current process is processA
statement1();                       // Runs on processA
runAsyncOnProcessB(statement2);     // Starts running on processB. Now processA is unblocked.
statement3();                       // Runs on processA immediately.
...
// sometime in the future, statement2 finishes on processB.
```

## TLDR

We've been doing Synchronous Programming where statements execute in an orderly fashion. However, if statements take too long to execute, subsequence statements do not get to execute. Asynchronous programming was developed to take advantage of a computer's multi-tasking abilities and run heavy-duty statements at the same time (concurrently). This type of programming is called Asynchronous Programming.

## Promises

From the example above, the next interesting part here is how do we deal with statement2 finishing sometime in the future? Often times, we don't know when it will finish. It could be in 10 milliseconds, 1000 milliseconds, or maybe even hours and days, LOL!

Usually, we don't know how long it will take to finish, but we usually get a signal when it is finished processing or has stopped from an error. Different languages have their own ways of dealing with this "result-will-appear-sometime-in-the-future". In Javascript, there's an object called a **Promise** that deals with this concept. Let's take a look.

```javascript
let promise = new Promise(function(resolve, reject) {
    // ... heavy-duty computation that takes a long time ...
    if (success) {
        resolve("Success Message!");
    } else {
        reject("Error Message...");
    }
});
```

This is how you define a `Promise` object. A Promise contains a `resolve` and a `reject` function, both of which must be called when your data processing is finished. If the data processing was successful, `resolve` will be invoked. If the data processing failed, `reject` will be invoked.

To use a `Promise`, there are 3 main functions: `then`, `catch`, `finally`. It has a similar structure to the Java `try-catch-finally` block. These 3 functions are used to "catch" the success/failure cases when the promise is finished executing. Using the `promise` variable from above...

```javascript
promise.then(result => {
    // result contains the parameter from the `resolve` function earlier.
    // In this case, result is equal to "Success Message!"
    console.log("Woohoo! " + result);
}).catch(err => {
    // err contains the parameter from the `reject` function earlier.
    // In this case, err is equal to "Error Message..."
    window.alert(err);
}).finally(() => {
    // finally is always called regardless if the promise was a success or failure.
    // the finally part is optional, but can be used if there is something you can do regardless of the outcome.
    console.log("Promise is done");
});
```

The function `.then()` is used to catch the success case of a Promise while `.catch()` is used to catch the error case of a Promise. Only one of these functions should be run when a Promise finishes. In addition, `.finally()` can be defined if you want to do something regardless of the outcome.

So, the final code should look like this:

```javascript
let promise = new Promise(function(resolve, reject) {
    // ... heavy-duty computation that takes a long time ...
    if (success) {
        resolve(successData);
    } else {
        reject(errorData);
    }
});

... do some other stuff ...

promise.then(result => {
    processData(result);
}).catch(err => {
    alertErrors(err);
}).finally(() => {
    console.log("Processing finished.");
});
```

In the next section, we'll explore how to apply Promises to our project.

---

[Continue](./15b_callbacks.md)
