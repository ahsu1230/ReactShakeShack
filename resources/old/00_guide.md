# Guide Notes
Guide should be refactored:
 - Introduction:
 - Basics (HTML, CSS, Javascript basics)
 - Guide (Concepts -> React coding OR SASS coding)
 - Additional Resources

## Pre-requisites
Before beginning, I am assuming you understand the following concepts:
 - HTML basics
  - What is a DOM?
  - `<div>` vs. `<span>`
  - What is a `<h1>`? What is a `<p>`?
  - What is a `<ul>` and `<li>`?
  - What is an `<img>`?
  - What is an `<a>`?
  - In HTML, what do parent/children elements mean?

 - CSS basics
  - `margin` vs. `padding`
  - The Box Model
  - `display` vs. `inline` vs. `inline-block`
  - Position: `static` vs. `relative` vs. `absolute`
  - `id` vs. `class`
  - With CSS, how do you select a parent element's child?

 - Javascript basics
  - Variables, if/else, loops
  - Arrays `[]`
  - Objects `{}`
  - How to use `debugger`

If there are some concepts you don't fully understand yet, please take the time to review them. They will be REALLY useful before diving into this project. You'll be learning a lot of different concepts in this guide, so it's best to already know the basics!

In this guide, we will touch on the following concepts / tools which are common industry developing tools for modern web applications.
 - ReactJs
 - Modern Javascript (ES6)
 - SASS
 - Redux
 - CSS Animations


## ADD HEADER + STYLE
 - Add home header and style header with sass (to black #070605, and fontFamily Helvetica, fontSize)

```
export class HomePage extends React.Component {
    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1>
            </div>
        );
    }
}

$colorBlack: #070605
$colorGreen: #54A432
$colorRed: #D80300
$colorWhite: #FFFFFF
$colorLightGray: #CCCCCC
$fontFamilyHelvetica: 'Helvetica'

#view-home
    width: 720px
    margin: 0 auto
    font-family: 'Helvetica'
    color: $colorBlack

#view-home h1
  font-size: 26px
```


## ADD NEW REACT COMPONENTS (PARENT-CHILD RELATIONSHIPS)
 - Create HomeOrderForm & HomeOrderList (create components & sass and insert into HomePage via importing)
 ** PICTURE **
 ```
 import { HomeOrderForm } from "./homeOrderForm.js";
 import { HomeOrderList } from "./homeOrderList.js";

 export class HomePage extends React.Component {
     render() {
         return (
             <div id="view-home">
                 <h1>Shake Shack Order Manager</h1>
                 <HomeOrderForm/>
                 <HomeOrderList/>
             </div>
         );
     }
 }

 "use strict";
 import "./homeOrderForm.sass";
 import React from "react";
 import ReactDOM from "react-dom";

 export class HomeOrderForm extends React.Component {
     render() {
         return (
             <section id="home-order-form">
                 Order Form
             </section>
         );
     }
 }

 "use strict";
 import "./homeOrderList.sass";
 import React from "react";
 import ReactDOM from "react-dom";

 export class HomeOrderList extends React.Component {
     render() {
         return (
             <section id="home-order-list">
                 Order List
             </section>
         );
     }
 }

 #home-order-form
     margin-bottom: 48px
 ```

## ADD BUTTONS AND INPUTS
```
export class HomeOrderForm extends React.Component {
    render() {
        return (
            <section id="home-order-form">
                <select id="food">
                    <option value="burgers">Burgers</option>
                    <option value="fries">Fries</option>
                    <option value="shake">Shake</option>
                </select>

                <span>Number:</span>
                <input type="text"/>

                <span>Your name:</span>
                <input type="text" placeholder="i.e. Austin"/>

                <button>Add to Orders</button>
            </section>
        );
    }
}
```

## Intro to onChange and onClick
```
<button onClick={this.onClickAddButton}>
    Add to Orders
</button>

onClickAddButton() {
    console.log("Add button clicked!")
}
```
```
onChangeSelect() {
    console.log("On change select menu");
}

onChangeInput() {
    console.log("On change input");
}

<select id="food" onChange={this.onChangeSelect}>
<input type="text" onChange={this.onChangeInput}/>
<input type="text" placeholder="i.e. Austin" onChange={this.onChangeInput}/>
```

## Intro to this.state & this.setState
```
create constructor

constructor(props) {
    super(props);
    this.state = {
        orderCounter: 1,
        orderName: "",
        orderFood: "",
        orderNumFood: 0
    };
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
}

onClickAddButton() {
    console.log("Add button clicked!");
    console.log("counter: " + this.state.orderCounter);
    console.log("Name: " + this.state.orderName);
    console.log("Food: " + this.state.orderFood);
    console.log("NumFood: " + this.state.orderNumFood);
}

onChangeSelect(event) {
    console.log("On change select menu");
    console.log(event.target.value);
    // we need to set state's orderFood to this value!
}

onChangeInput(event, input) {
    console.log("On change input");
    console.log(event.target.value);
    console.log(input);
    // we need to set the appropriate state to this value!
}

<input type="text"
    onChange={(event) => this.onChangeInput(event, "orderNumFood")}
/>
<input type="text" placeholder="i.e. Austin"
    onChange={(event) => this.onChangeInput(event, "orderName")}
/>
```

## INTRO REDUX - add order button to store
## INTRO REDUX - add to list
## INTRO REDUX - subscribe to list updates
Redux is a javascript tool (commonly used with React) to provide applications a great way to handle "global variables and states".
Without Redux, when we have use React, we have to pass values back and forth in between parent and children components.
This can get very messy very quickly.

With Redux, we can store global variables that can be used by any component.
And when one component updates the global variable, everyone else who cares about that variable will automatically get updated! So nice!

There are 3 parts to using Redux: Store, Actions, and a Reducer.
A store simply keeps these "global variables".
Actions are simple messages. These usually signal which data needs to be changed and to what.
A reducer is an engine that receives actions and updates data accordingly.

Imagine a pigeon mailing system in a medieval kingdom (?) with a food bank.
The food bank is the "store" which holds a city's food resources (like wheat or something).
The worker who receives messages from pigeons is our "reducer". This person receives messages from incoming pigeons, reads the message, and determines who needs to move around their food in the store.
As you may have guessed, the messages being attached to every pigeon are the "actions". And these actions will be sent by our React components.
These actions could be: `{"ADD_WHEAT", "Jon Targaryen", 500}` (500 bushels of wheat to Lord Jon).
When the data in the store gets updated, the pigeon person needs to broadcast the changes to everybody who cares (maybe some lords in other subkingdoms care where the wheat supply is going, but not everyone).

That was honestly a terrible analogy because that is definitely not how people managed gold back in the day. I just watched too much Game of Thrones. But, hopefully you see how the 3 different Redux actors play together.

Take a look at our actions
```
export const ACTION_TYPE_ADD_ORDER = "ACTION_ADD_ORDER";
export const ACTION_TYPE_DELETE_ORDER = "ACTION_DELETE_ORDER";
```

Take a look at the Reducer & Store
```
const initialState = {
    orderList: [],
    orderCounter: 0
};

function reducer(state = initialState, action) {...}
export const Store = createStore(reducer);
```

Now that we've creates our 3 Redux Actors, we want a way to:
1) Have a component send an action message (update some data)
2) Have a component receive data

Here's how to. There are 2 main functions you must define.
 - `reduxMapStateToProps` define which global state data you care about. Whenever this data gets changed by your current component or by ANY component, you will automatically receive updates!
 - `reduxMapDispatchToProps` are your "dispatch" functions that send actions to the reducer.
Once you define those, use a `connect` method to connect these two functions to your React component.

```
const reduxMapStateToProps = (state) => {
    return {
        orderList: state.orderList
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const reduxMapDispatchToProps = (dispatch) => {
    return {
        dispatchAddOrder: () => dispatch({type: ACTION_TYPE_ADD_ORDER})
    };
}

export default connect(reduxMapStateToProps, reduxMapDispatchToProps)(HomeOrderForm);
```

To use a dispatch method (send update action to store), you could do something like this:
```
onClickAddButton = () => {
    console.log("Add button clicked!");
    this.props.dispatchAddOrder();
}
```

To use a value in the store, it will automatically show up in your `this.props`. So in your component, you can do this:
```
const list = this.props.orderList;
```

## React Lists, <ul> & <li>, .map function,
```
<ul>
    <li> a </li>
    <li> b </li>
    <li> c </li>
    <li> d </li>
</ul>
```
We can refactor:
```
const list = ["a", "b", "c", "d"];
const items = list.map(letter => (<li>{letter}</li>));
...
<ul>
    {items}
</ul>
```

Wtf is map?
Map is a function... that takes in a function as a parameter. It's a javscript thing.
It then calls that function on every element in the list and returns the result.
So for example
```
const list = [1,2,3,4,5];
const newList = list.map(number => number + 1);
// newList = [2,3,4,5,6];
```
The function we passed into map does the following:
 - the element we're currently on is called `number`
 - we add one to `number`
 - we replace `number` with that new result.
And at the end, we return the whole list to be saved into `newList`


## React Parent-child review, props
From the above example, we can go one step further.
Let's say the instead of simple `<li>` elements per row, the items are a lot more complicated.
In this case, we can still use the `.map(letter => (<li>...</li>))`, but it's going to be very messy.
Instead, we're going to create a child Component and pass values to it to make our lives easier.

```
const rows = this.props.orderList.map((order, index) => {
    return (<HomeOrderListItem key={index} order={order}/>);
});
...
<ul>{rows}</ul>
```

```
return (
    <li className={liClassName}>
        <span className="home-row-id">{order.id}</span>
        <span className="home-row-name">{order.name}</span>
        <span className="home-row-food">{order.food}</span>
        <span className="home-row-num">{order.num}</span>
    </li>
);
```

## REDUX - DELETE action
```
<button onClick={this.handleClickDelete}>Delete Order</button>
handleClickDelete = () => {
    this.props.dispatchDeleteOrder(this.props.order);
}

case ACTION_TYPE_DELETE_ORDER:
    let orderToDelete = action.value;
    return {
        ...state,
        orderList: state.orderList.filter(o => o.id !== orderToDelete.id),
    };

```

## React - total number of orders & foreach
```
let totalNumberOrders = 0;
this.props.orderList.forEach(order => {
    totalNumberOrders += order.numFood;
});
```

## React - quit Link (conditional render) and React Routes?
```
let deleteButton = (<div></div>);
if (totalNumberOrders >= 10) {
    deleteButton = (<Link to="/quit">Too many orders. I quit!</Link>);
}
```

Take a look at in main.js
```
<Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quit" component={Quit} />
    </Switch>
</Router>
```

## Images
```
import src_img_quit from "../../assets/i_quit.jpg";
<img src={src_img_quit} />
```

## Asynchronous Calls (with Redux)
Look at thunk:
```
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```

Look at api.js
```
function deleteOrder(order) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (API_WORKS) {
                resolve();
            } else {
                reject("API delete failed");
            }
        }, API_WAIT_TIME_MS);
    });
    return promise;
}
```
// Promises, resolve, reject, setTimeout
States then become requested -> success or failure
This means we need 3 action types: `_BEGIN`, `_SUCCESS`, `_FAILURE` for every operation.

Action:
```
export const ACTION_TYPE_DELETE_ORDER_BEGIN = "ACTION_DELETE_ORDER_BEGIN";
export const ACTION_TYPE_DELETE_ORDER_SUCCESS = "ACTION_DELETE_ORDER_SUCCESS";
export const ACTION_TYPE_DELETE_ORDER_FAIL = "ACTION_DELETE_ORDER_FAIL";

export function dispatchDeleteOrder(dispatch, order) {
    dispatch({type: ACTION_TYPE_DELETE_ORDER_BEGIN});
    return API.deleteOrder(order)
        .then(res => {
            dispatch({type: ACTION_TYPE_DELETE_ORDER_SUCCESS, data: order});
        })
        .catch(err => {
            dispatch({type: ACTION_TYPE_DELETE_ORDER_FAIL});
            alert("An error occured! " + err);
        });
}

```

Dispatch:
```
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteOrder: order => dispatchDeleteOrder(dispatch, order)
    };
}

import {
    ACTION_TYPE_DELETE_ORDER_BEGIN,
    ACTION_TYPE_DELETE_ORDER_SUCCESS,
    ACTION_TYPE_DELETE_ORDER_FAIL,
} from '../redux/actions.js';
import API from '../api.js';
```

Reducer:
```
case ACTIONS.ACTION_TYPE_DELETE_ORDER_BEGIN:
    return {
        ...state,
    };
case ACTIONS.ACTION_TYPE_DELETE_ORDER_SUCCESS:
    let orderToDelete = action.data;
    return {
        ...state,
        orderList: state.orderList.filter(o => o.id !== orderToDelete.id),
    };
case ACTIONS.ACTION_TYPE_DELETE_ORDER_FAIL:
    return {
        ...state,
    };
```


## Loading...
Take a look at loading.js and loading.sass
Include into home.js
```
import LoadingScreen from "../loading/loading.js";
<LoadingScreen/>
```

No actions needed this time! The state will change based on other actions.
Setup Reducer
```
const initialState = {
    orderList: [],
    showLoading: false
};


case ACTIONS.ACTION_TYPE_DELETE_ORDER_BEGIN:
    return {
        ...state,
        showLoading: true // show loading screen when requested
    };
case ACTIONS.ACTION_TYPE_DELETE_ORDER_SUCCESS:
    let orderToDelete = action.data;
    return {
        ...state,
        orderList: state.orderList.filter(o => o.id !== orderToDelete.id),
        showLoading: false // stop showing loading screen
    };
case ACTIONS.ACTION_TYPE_DELETE_ORDER_FAIL:
    return {
        ...state,
        showLoading: false // stop showing loading screen
    };
```

```
const reduxMapStateToProps = (state) => {
    return {
        show: state.showLoading
    };
}
```

# Callback functions?

# Congratulations!
You've finally finished! You may keep this repository for your own reference in the future.

# Resources:
https://redux.js.org/
https://daveceddia.com/redux-tutorial/
