# Buttons and On-Click

In HTML, Buttons are created using the following tag:

```html
<button>Click Here!</button>
```

Buttons are special because they have `onclick` events associated with them.
This means that whenever a user clicks on the button, do something!
In web development, we can use "handler" functions to do stuff whenever an onclick event occurs.
For example, we could do something like this:

```html
<button onclick="handleOnClick">Click Here!</button>
```

Somewhere in our javascript, we should've defined a function named `handleOnClick` which will be called whenever a user clicks on this button. *Clarification* In regular html, we use `onclick`. In ReactJs, we will use `onClick`.

## The React Way

In React, usually the Component who owns the `<button>` should also own the `handleOnClick` function. So you will (1) have to add the button inside the React Component's render and (2) define the function to be invoked when the button is clicked.
Here's an example:

```javascript
class MyComp extends React.Component {
    onClickButton = () => {
        console.log("button clicked!");
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton}>Click Me</button>
            </div>
        );
    }
}
```

As you can see, we have a `<button>` inside the Component's render(). When it is clicked, we invoke a function called `this.onClickButton`, which prints a message to console.

*As a side note:* `this.onClickButton` refers to the function `onClickButton` which is defined in "this" component.

*Here's another note* This...

```javascript
onClickButton = () => {
    ...
}
```

is just a shorthand for this:

```javascript
onClickButton: function() {
    ...
}
```

It's a new modern Javascript thing :)

## ShakeShack Exercise - Create a button with a hooked up onClick

Inside `home/homeOrderForm.js`, you should see a `HomeOrderForm` Component defined.

- Create a button inside it with the display text: "Add to Orders".
- Create an `onClick` hookup that will invoke the function `onClickAddButton`
- Define an `onClickAddButton` function inside the same component that `console.log` a simple message.
- Test to see if you display a message in Console when you click on the button.

*Style*
Give this button the following styled propeties:

- padding (top & bottom 6px) (left & right 12px)
- remove border `border: none`
- remove outline `outline: none`
- border radius is 4px
- background color is "green" defined in `_constants.sass`
- text color of button is "white" defined in `_constants.sass`
- font size is 14px
- bonus: when you hover over button, it should brighten up and have the pointy hand cursor. Use these properties: `filter: brightness(1.1)` & `cursor: pointer`. Remember, the button ONLY brightens when the user hovers over it.

**TIP** When you use SASS, you can use indents to style selectors within selectors. Here's an example:

```sass
#home-order-form
    margin-bottom: 48px

    & button
        padding: 6px 12px
        border-radius: 4px
        background-color: $colorGreen
        color: $colorWhite
        font-size: 14px

        &:hover
            cursor: pointer
```

This block of SASS does 3 things:

1. Give `#home-order-form` a margin-bottom CSS property.

2. Gives every `button` inside `#home-order-form` the 5 CSS properties that you see under it.

3. For every `button` inside `#home-order-form`, if it is hovered over by the user, turn the cursor into a pointy finger icon.

---

[Continue](./07_input_onchange.md)
