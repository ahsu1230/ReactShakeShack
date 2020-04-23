# Introduction to Redux (Action and Reducers)

Redux is a javascript tool (commonly used with React) to provide applications a great way to handle "global variables and states". Without Redux, when we have use React, we have to pass values back and forth in between parent and children components.
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
These actions could be: `{"ADD_WHEAT", "Jon Stark", 500}` (500 bushels of wheat to Lord Jon).
When the data in the store gets updated, the pigeon person needs to broadcast the changes to everybody who cares (maybe some lords in other subkingdoms care where the wheat supply is going, but not everyone).

That was honestly a terrible analogy because that is definitely not how people managed gold back in the day. I just watched too much Game of Thrones. But, hopefully you see how the 3 different Redux actors play together.

## Exercise: Define your Redux Actions and Reducer

Before we start working on our app, we need to think about the following things:

- What central data needs to be "synced" across many components?
- What actions are going on that affect this central data?
- When an action occurs, how should the central data change?

In our app, the central data that we need to sync is our list of orders. At first, it starts off as empty. But as it grows, it may affect other parts of our app. Similarly, when orders get deleted, other components should know about it too.

Given that, can you guess the actions at play? In our app, we will have two actions. One is to add an order, the other is to delete orders. When an add order action is received, add the order to our central list. When a delete order action is received, delete the order to our central list.

I recommend creating a folder called `redux` to contain all your Redux stuff. Inside `redux` you can have an `actions.js` file to store only actions and a `reducer.js` file to store only reducer related stuff.

### Inside `actions.js`

```javascript
export const ACTION_TYPE_ADD_ORDER = "ACTION_ADD_ORDER";
export const ACTION_TYPE_DELETE_ORDER = "ACTION_DELETE_ORDER";
```

### Inside `reducer.js`... a few things

- First have the correct import statements in this file.

``` javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as ACTIONS from './actions';
```

- The central list needs to be declared and initialized.

```javascript
const initialState = {
    orderList: []
};
```

- A reducer function must also be declared to describe how it will behave when it receives actions.

``` javascript
/* Reducer - the pigeon-person */
function reducer(state = initialState, action) {
    console.log("Reducer invoked with action: " + action.type);

    switch(action.type) {
        case ACTIONS.ACTION_TYPE_ADD_ORDER:
            let newOrder = action.data;
            return {
                ...state,
                // Add order to list
                orderList: state.orderList.concat(newOrder)
            };
        case ACTIONS.ACTION_TYPE_DELETE_ORDER:
            return {
                ...state,
                // Delete order from list
                orderList: state.orderList.filter(o => o.id !== orderToDelete.id),
            };
        default:
            console.log("Unknown action type");
    }
    return state;
}
```

- Finally, to wrap it all together for Redux, we need to create a Store. 

``` javascript
export const Store = createStore(
    reducer, applyMiddleware(thunk)
);
```

- This Store will be connected to the React App in `index.js` through these lines:

``` javascript
import { Store } from "./redux/reducer.js";
...
ReactDOM.render(<Provider store={Store}><App/></Provider>,
    document.getElementById("root"));
```

[Continue](./14_redux_subscribing.md)