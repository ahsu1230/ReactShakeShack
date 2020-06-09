"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        orderCounter: 0,
        name: "Unknown",
        food: "Burgers",
        amount: 0
    }

    onChangeSelect = e => {
        this.setState({
            food: e.target.value
        });
        console.log(e.target.value);
    }

    onChangeAmount = e => {
        this.setState({
            amount: parseInt(e.target.value)
        });
        console.log(e.target.value);
    }

    onChangeName = e => {
        this.setState({
            name: e.target.value
        });
        console.log(e.target.value);
    }

    onClickAddButton = () => {
        const order = {
            id: this.state.orderCounter,
            name: this.state.name,
            food: this.state.food,
            amount: this.state.amount
        }
        this.props.addOrderCallback(order);

        console.log("Order added");
        console.log("Order Counter: " + this.state.orderCounter);
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.food);
        console.log("Amount: " + this.state.amount);

        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
    }

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>

                <select onChange={e => this.onChangeSelect(e)}>
                    <option value="Burgers">Burgers</option>
                    <option value="Fries">Fries</option>
                    <option value="Shakes">Shakes</option>
                </select>

                <span>Amount: </span>
                <input
                    type="text"
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

                <button onClick={this.onClickAddButton}>Add to Orders</button>

                <hr/>
            </section>
        );
    }
}
