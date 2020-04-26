# React Lifecycles

As mentioned before, React likes to split a webpage into smaller components. You can almost think of every component like a class/object in other programming languages.

Just like classes & objects, components have a constructor and some methods that come with it. What's special about these methods is that they always get called in a specific order.

These are the main "lifecycle" functions of a React Component (there are others, but we'll focus on these)

- constructor()
- onComponentDidMount()
- render()

The `constructor()` as you might've guessed is called when the Component first gets created. This is where you will want to set the initial values of variables / data. This function is *optional*. If a Component does not specify a `constructor()`, it will just default to the constructor of React.Component (which your Component extends from). This default contructor simply creates the Component and does not set any states.

The `onComponentDidMount()` is an intermediate function that's called after the constructor and before the first render. This method is very situational and won't be used often... But any asynchronous function (which we'll talk about later) should be called in this method. This function is *optional*.

The `render()` function is the main function that actually produces the HTML for the user to see. The render function must have a `return` statement and you can only return ONE HTML element. However, this one HTML element can have many HTML elements inside it, but no matter how much is in it, the `return` statement can only accept one HTML element. **This function is required! All Components must define this function!**

This render function is interesting because you can inject variables inside your HTML. So if you place a variable inside the return statement's HTML, it will be evaluated to use the value of that variable!

Here's an example:

```javascript
class MyComp extends React.Component {
    render() {
        const name = "Pikachu";
        const trainer = "Ash Ketchum";
        return (
            <div>
                <h1>{name}</h1>
                <h2>{trainer}</h2>
            </div>
        );
    }
}

```

This component will produce a single HTML element (`<div>`) with two child header elements. The first header will show "Pikachu" while the second header will show "Ash Ketchum".
**NOTE** The variables are defined OUTSIDE the return statement but then used inside the return statement.

Learn more about React Components from the React website (https://reactjs.org/docs/react-component.html).

---

[Continue](./05a_react_parentchild.md)
