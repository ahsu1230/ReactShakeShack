# Introduction to Redux (Subscribers)

So from the previous section, we've created our Actions and a Reducer.
We've also connected it to our app so it knows about our Reducer.
The last thing we need is to have individual React components "subscribe" to updates of our central data. The React components in this case are the lords of the land from our stupid Game of Thrones analogy. 

Whenever our central dataset is changed, components probably want to know about them right? So some components need a way to "listen" to updates whenever they happen. In addition, some components may initiate these changes so will need to be able to send actions to our reducer.

A component that *EITHER* needs to initiate an action or listen to updates must define the two functions:

- `reduxMapStateToProps` define which central state data you care about. Whenever the specified central data gets changed by your current component or by ANY component, you will automatically receive updates! The central data can be accessed with `this.props.____`.
- `reduxMapDispatchToProps` are your "dispatch" functions that send actions to the reducer. You can use this dispatch function with `this.props.___`.

**Once you define these 2 functions, use a `connect` method to connect them to your React component.**

Here's an example of how to define and connect these two functions.

``` javascript
const reduxMapStateToProps = (state) => {
    return {
        list: state.orderList // the central data `orderList` will be available in this.props.list
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const reduxMapDispatchToProps = (dispatch) => {
    return {
        dispatchAddOrder: () => dispatch({type: ACTION_TYPE_ADD_ORDER}) // you can now use this.props.dispatchAddOrder() in your Component to send an ADD_ORDER action
    };
}

// Connect these two functions to our Component `HomeOrderForm`
export default connect(reduxMapStateToProps, reduxMapDispatchToProps)(HomeOrderForm);
```

Here are examples of using them inside your Component:

To dispatch an action, we might want to do it inside an onClick() function handler.

```javascript
onClickAddButton = () => {
    console.log("Add button clicked!");
    this.props.dispatchAddOrder();
}
```

To use the central list data, we might want to use it inside our component render() function.

```javascript
render() {
       let centralList = this.props.list;
       // do some processing on centralList...
       return (
           <div>
                {centralList}
           </div>
       );
}
```

So as a whole, the file would look something like this: (Note: your file won't look exactly like this! It's just an example!). I recommend the redux functions be at the bottom of the page while your component is higher up.

```javascript
"use strict";
import React from "react";
import { connect } from 'react-redux';
import { ACTION_TYPE_ADD_ORDER } from '../redux/actions.js';

class MyComponent extends React.Component {

    onClickButton = () => {
        console.log("Add button clicked!");
        this.props.dispatchAddOrder();
    }

    render() {
        let centralList = this.props.list;
        // do some processing on centralList...
        return (
            <div>
                    {centralList}
            </div>
        );
    }
}

// Redux Subscribing Functions
const reduxMapStateToProps = (state) => {
    return {
        list: state.orderList // the central data `orderList` will be available in this.props.list
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const reduxMapDispatchToProps = (dispatch) => {
    return {
        dispatchAddOrder: () => dispatch({type: ACTION_TYPE_ADD_ORDER}) // you can now use this.props.dispatchAddOrder() in your Component to send an ADD_ORDER action
    };
}

// Connect these two functions to component
export default connect(reduxMapStateToProps, reduxMapDispatchToProps)(MyComponent);
```

## Exercise: Subscribe Components to the Reducer

The exercise here is to have the HomeOrderForm dispatch an "Add Order" action to the Reducer. With this action, will be the new order data (Javascript object). The Reducer will receive this new order, add it to the central list. The reducer will automatically broadcast to all listening components that the list has changed. Our current component will automatically be notified that the new list is available and will automatically call its render() function, which can display the new changes to the central list.

[Continue](./16_redux_more.md)