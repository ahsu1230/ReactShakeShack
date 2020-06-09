"use strict";
import "./homeOrderForm.sass";
import React from "react";
import API from "./../api.js";
import { updateOrderCount } from "./../localStorage.js";

export class HomeOrderForm extends React.Component {
    state = {
        orderCounter: 0,
        name: "Unknown",
        food: "Burgers",
        amount: 0
    };

    onChangeSelect = e => {
        this.setState({
            food: e.target.value
        });
        console.log(e.target.value);
    };

    onChangeAmount = e => {
        var amount = e.target.value;
        if (amount == "") {
            amount = "0";
        }

        this.setState({
            amount: parseInt(amount)
        });
        console.log(amount);
    };

    onChangeName = e => {
        var name = e.target.value;
        if (name == "") {
            name = "Unknown";
        }

        this.setState({
            name: name
        });
        console.log(name);
    };

    onClickAddButton = () => {
        this.state.orderCounter = this.state.orderCounter + 1;
        this.setState({
            orderCounter: this.state.orderCounter
        });

        const order = {
            id: this.state.orderCounter,
            name: this.state.name,
            food: this.state.food,
            amount: this.state.amount
        };
        this.props.addOrderCallback(order);
        updateOrderCount(this.state.orderCounter);

        console.log("Order added");
        console.log("Id: " + this.state.orderCounter);
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.food);
        console.log("Amount: " + this.state.amount);
    };

    componentDidMount() {
        API.fetchCount().then(data => {
            this.setState({
                orderCounter: data || -1
            });
        });
    }

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <div>
                    <select onChange={e => this.onChangeSelect(e)}>
                        <option value="Burgers">Burgers</option>
                        <option value="Fries">Fries</option>
                        <option value="Shakes">Shakes</option>
                    </select>

                    <span>Amount: </span>
                    <input
                        type="number"
                        min="0"
                        placeholder="0"
                        onChange={e => this.onChangeAmount(e)}
                        className="amount"
                    />

                    <span>Name: </span>
                    <input
                        type="text"
                        placeholder="i.e. Tony"
                        onChange={e => this.onChangeName(e)}
                        className="name"
                    />

                    <button onClick={this.onClickAddButton}>
                        Add to Orders
                    </button>
                </div>
            </section>
        );
    }
}
