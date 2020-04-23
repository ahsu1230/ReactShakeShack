"use strict";
import "./homeOrderForm.sass";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { ACTION_TYPE_ADD_ORDER } from '../redux/actions.js';

const DEFAULT_FOOD = "burgers";

class HomeOrderForm extends React.Component {
    state = {
        inputFood: DEFAULT_FOOD,
        inputName: "",
        inputNumFood: 0,
        orderCounter: 1
    }

    onClickAddButton = () => {
        console.log("Add button clicked!");
        var order = {
            id: this.state.orderCounter,
            food: this.state.inputFood,
            name: this.state.inputName,
            numFood: this.state.inputNumFood
        };
        this.props.dispatchAddOrder(order);
        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
    }

    onChangeSelect = (event) => {
        const value = event.target.value;
        console.log("OnChange select " + value);

        this.setState({
            inputFood: value
        });
    }

    onChangeInput = (event, input) => {
        const value = event.target.value;
        console.log("OnChange input " + input + "->" + value);

        if (input == "inputNumFood") {
            this.setState({ [input]: parseInt(value) });
        } else {
            this.setState({ [input]: value });
        }
    }

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <select id="food" onChange={this.onChangeSelect} value={this.state.inputFood}>
                    <option value="burgers">Burgers</option>
                    <option value="fries">Fries</option>
                    <option value="shakes">Shake</option>
                </select>

                <span>Number:</span>
                <input
                    className="number"
                    type="text"
                    onChange={(event) => this.onChangeInput(event, "inputNumFood")}
                    value={this.state.inputNumFood}
                />

                <span>Your name:</span>
                <input
                    className="name"
                    type="text" placeholder="i.e. Austin"
                    onChange={(event) => this.onChangeInput(event, "inputName")}
                    value={this.state.inputName}
                />

                <button onClick={this.onClickAddButton}>
                    Add to Orders
                </button>
            </section>
        );
    }
}

/* Redux mappers */
// Allow these states to be usable via Component's props
const reduxMapStateToProps = (state) => {
    return {
        orderList: state.orderList
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const reduxMapDispatchToProps = (dispatch) => {
    return {
        dispatchAddOrder: order => {
            dispatch({type: ACTION_TYPE_ADD_ORDER, data: order});
        }
    };
}

// Connect component to redux
export default connect(reduxMapStateToProps, reduxMapDispatchToProps)(HomeOrderForm);
