# React Lists

To create lists in HTML, we can use the unordered list `<ul>` tag. Inside this list, you can have multiple list items `<li>`.

```html
<ul>
    <li> <h1>a</h1> </li>
    <li> <h1>b</h1> </li>
    <li> <h1>c</h1> </li>
    <li> <h1>d</h1> </li>
</li>
```

With React, we can refactor this using a list variables. We first define a list of values, create a list of `<li>` elements from those values, and then inject them into a `<ul>`.

```javascript
const list = ["a", "b", "c", "d"];
const items = list.map(letter => (<li><h1>{letter}</h1></li>));
...
render(
    <ul>
        {items}
    </ul>
);
```

**Wtf is map??**
Map is a function... that takes in a function as a parameter. It's a javscript thing. It then calls that function on every element in the list and returns the result.
As a quick example on map:

```javascript
const list = [1,2,3,4,5];
const newList = list.map(num => num + 1);
// newList = [2,3,4,5,6];
// newList is equal to list, but with a function applied to every element
// the function applied on every element is simply adding 1 to the element
```

Let's take another look at this code again.

```javascript
const list = ["a", "b", "c", "d"];
const items = list.map(letter => (<li><h1>{letter}</h1></li>));
...
render(
    <ul>
        {items}
        {/*
            items gets evaluated into the following:
            <li><h1>a</h1></li>
            <li><h1>b</h1></li>
            <li><h1>c</h1></li>
            <li><h1>d</h1></li>
        */}
    </ul>
);
```

As you can see, the `map` converts every letter in `list` into an HTML `<li>` block. For each `<li>` block, the letter variable is placed inside `<li>`. Once this new list is created (`items`), we simply place it inside the `<ul>` to complete our list.

## React Parent-child review, Introduction to props

Remember [Parent-children relationships in React](./05a_react_parentchild.md)?

In React, components can be a parent and refer to other components as their children. This means that the children components are smaller parts of the parent component. As an example, a header component can have a lot of interactive links in it. The header component is the parent while the interactive link components inside it are the children.

In the header example just described, the header component will probably look something like this:

```javascript
class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><HeaderLink/></li>
                    <li><HeaderLink/></li>
                    <li><HeaderLink/></li>
                </ul>
            </div>
        );
    }
}
```

We have a list, where every list item is a HeaderLink (which is another React component). Let's refactor this using the `map` technique that we saw before.

```javascript
class Header extends React.Component {
    render() {
        const headerLinks = ["Home", "About", "Contact"];
        const items = headerLinks.map(headerLink => <li><HeaderLink link={headerLink}/></li>)
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
```

The map function takes every value in `headerLinks` to convert them into the following HTML snippet

```html
<li><HeaderLink link={headerLink}/></li>
```

But we're doing something slightly different here. In React, you can pass parameters to a component. This is how parent components can pass data to their children. So every headerLink value ("Home", "About", "Contact") from parent component `Header` is passed to the child component `HeaderLink`. The child component can access this passed in parameter using `this.props.link`.

```javascript
class HeaderLink extends React.Component {
    render() {
        const linkTitle = this.props.link;
        return (
            <div>
                <span>{linkTitle}</span>
                ... other stuff ...
            </div>
        );
    }
}
```

## Summary

- In React, we can use the javascript map function to create `<li>` list item elements from a list of values.
- Often items, it's a good idea to create a list of many children React components and pass parent values to the children components.
- The children components can access the passed in values with `this.props.____`.

*Note*
`this.state.____` variables should only be used when the component itself will change the value.
`this.props.____` variables are values that are changed OUTSIDE the component (like passed in from a parent). **In other words props variables are changed by external events while state variables are changed by internal events.**

## ShakeShack Exercise - Create list of orders

Go to your `components/home/homeOrderList.js`.

We are going to create our list of orders (but for now with fake data). We'll hook up the interaction with HomeOrderForms later.

First off, every we expect every order Javascript object to look like this:

```json
{
    id: 4,
    food: "burgers",
    numFood: 5,
    name: "Joe"
}
```

This represents a single order and we're going to have a list of these objects to represent our list of orders.
In the `homeOrderList.js` file, create a list of fake orders at the top of your file. Have your `HomeOrderList` component look like the snippet below.

```javascript
const FAKE_ORDER_LIST = [{...}, {...}, {...}]; // <- fill in with fake order data!

export class HomeOrderList extends React.Component {
    render() {
        const links = FAKE_ORDER_LIST;
        const items = links.map(...); // <- implement this!
        return (
            <div>
                <h1>Order List</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
```

In another file, `homeOrderListItem.js`, create a new component called `HomeOrderListItem`. This component is the "child" component of the parent component `HomeOrderList`. This child component represents every order in our list. It will take in an order object from `this.props.order` and display the information correctly.

```javascript
export class HomeOrderListItem extends React.Component {
    render() {
        const order = this.props.order;
        return (
            <li>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.num}</span>
            </li>
        );
    }
}
```

### Few Notes

- Make sure your import statements are correct.
In order for `HomeOrderList` to correctly use `HomeOrderListItem`, `HomeOrderList` must import the list item component. Place this line at the top of your file.

```javascript
import { HomeOrderListItem } from './homeOrderListItem.js';
```

- Small detail with mapping to list items that I didn't mention before. When converting a list into HTML elements, React requires a "key" mapping. This is required to help it differentiate list items. From the header links example, the correct way to map is actually this:

```javascript
const headerLinks = ["Home", "About", "Contact"];
const items = headerLinks.map((headerLink, index) => <li key={index}><HeaderLink link={headerLink}/></li>)
```

The map function automatically creates an `index` variable as it applies a function on each element. Indexes are unique to every element, so we can use it as the `key`. The `key` property must be placed onto the most outer tag which in this case is the `<li>`.

If all goes well, you should be able to see your order list render!

### Styling

For the home-order-list, give your `<ul>` element the following properties:

- no margins
- no paddings
- `list-style: none`

For each of your home-order-list-items, give it a:
- height of 64px
- line-height of 64px
- bottom border of 1px solid gray (use _constants.sass)
- <span> of each element inside this home-order-list-item should be `display: inline-block`
- Give different spans a certain width. For example, the number and id columns shouldn't be that big, so they can be more narrow than the name column.

[Continue](./10_react_conditionals.md)