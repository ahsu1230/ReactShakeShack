# React States and setState()

The render() function in your components can render the values of variables. As an example, let's say we took our header text and replaced it with a variable.

```javascript
export class MyComponent extends React.Component {
   render() {
       const headerText = "Shake Shack Order Manager";
       return (
           <div>
                <h1>{headerText}</h1>
                ...
           </div>
       );
   }
}
```

As you can see, we create a constant variable called `headerText` and assign it a value. When we inject it into the return portion of our `render()` function, the variable `headerText` will evaluate into "Shake Shack Order Manager" for display. Now, if we were to change this variable, React automatically calls `render()` again to re-evaluate `headerText`. As developers, we don't have to manually re-render our components, ReactJs will do it for us! So convenient!

## Using a Counter Variable

Let's say whenever we click on a button, we increment a `count` variable which we will then display. Variables in the `render()` function are usually "constants" meaning variables that should not change value. If we want to use a value that will change often, it's best to store it in something called the component `state`.

A component state is just an object. Every field in this object must be initialized to something (in this case, zero). It can only be accessed by using `this.state.count` and can ***only*** be modified using `this.setState(...)`.

```javascript
export class MyComponent extends React.Component {
    state = {
        count: 0
    }

    onClickButton = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

   render() {
       const headerText = "You've clicked this button " + this.state.count + " times!";
       return (
           <div>
                <h1>{headerText}</h1>
                <button onClick={onClickButton}>Click Me</button>
           </div>
       );
   }
}
```

In the above example, we've added a few things:

- Initialize component state by setting count equal to 0
- Added an onClick handler that will increment the count every time we click the button.
- Display the count value in the header

State variables are very commonly used with buttons and inputs because every time a user interacts with these elements, we probably want to save a value or change some kind of state variable. Here's an additional example with inputs.

```javascript
export class MyComponent extends React.Component {
    state = {
        count: 0,
        name: ""
    }

    onClickButton = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    onChangeInput = (e) => {
        const value = e.target.value;
        this.setState({
            name: value
        });
    }

   render() {
       const headerText = "Hi " + this.state.name + "!";
       const clickText = "You've clicked this button " + this.state.count + " times!";
       return (
           <div>
                <h1>{headerText}</h1>
                <h2>{clickText}</h2>
                <input value={this.state.name} onChange={this.onChangeInput}/>
                <button onClick={this.onClickButton}>Click Me</button>
           </div>
       );
   }
}
```

In this example, the `<input>` would need two things in its tag. An `onChange` handler (which we've done before) and a `value`. The `value={this.state.name}` means the text of this input field must be equal to `this.state.name` at all times. Whenever the user tries to change the text in input, call `this.onChangeInput` and save the new value into `this.state.name`.
Again, to access the variable for display purposes, use `this.state.name`.

## ShakeShack Exercise - Hooking up button and inputs with state

At this point, you should have a select dropdown menu, 2 input fields, and 1 button. The Select and Input fields will store user input into state variables. The button, when clicked on, will retrieve all those state variables and display them in console.

We will split this into 4 steps:

- Initialize state variables
- Hookup onChange and onClick handlers
- Update state variables
- Retrieve state variables

### Step 1: Initialize State Variables

Take a look at `components/home/homeOrderForm.js`.
We are tracking 3 variables. One for customer's name, the food they want to order, and the number of orders of that food. So a user, named "Aaron", could order 4 burgers.

In the main React component, use this to initialize state variables:

```javascript
export class HomeOrderForm extends React.Component {
    state = {
        ...
    }
    ...
```

### Step 2: Hookup onChange and onClick handlers

If you haven't already...
You will need 3 onChange handlers (one for the food dropdown, one for name input and one for number input). And you should have one onClick handler for the "Add To Order" button.

### Step 3: Update State Variables

Inside the input onChange handlers, update the state variables. The food dropdown should invoke the onChange handler that will update the state variable for food. The name input should invoke the onChange handler that will update the state variable for name. And so on.

- *Hint* Use `e.target.value` to retrieve the values selected/input by the user.
- *Hint* Remember that the modify a `state` variable, you can ONLY use `this.setState{...}`.
- *Hint* All text in input are String values, so when a user inputs a number into the "Number of Food" input field, it will actually be a String value not an integer. Use the `parseInt()` Javascript function to convert from a string to a number.

### Step 4: Retrieve State Variables

When variables are correctly being updated, you can test them by adding `console.log` statements inside the onClick handler for the "Add to Order" button. So you're `onClickAddButton` should look something like this:

```javascript
onClickAddButton() {
    console.log("Add button clicked!");
    console.log("Name: " + this.state.___);
    console.log("Food: " + this.state.___);
    console.log("NumFood: " + this.state.___);
}
```

If you're values are showing up correctly in console.log, you're doing great!

### Step 5: Order counter and IDs

Every customer order should have its own ID. For example, the first order is order #1, the second order is order #2 and so on. This ID isn't from an input, but it is automatically generated by us. To do this, we will need to have one additional state variable which is our order counter. The order counter should start at 1 and every time the user clicks on the "Add Order" button, we increment the counter.

- Add orderCounter as a state variable (initialized at 0)
- Print the orderCounter whenever the "Add Order" button is clicked.
- Increment orderCounter whenever an order is added. *Hint* remember, orderCounter should be a state variable.

---

[Continue](./09_react_lists_and_props.md)
