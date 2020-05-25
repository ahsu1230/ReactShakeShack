"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        food: "",
        numFood: 0,
        name: "",
        orderCounter: 0
    };

    onClickAddButton = () => {
        console.log("Add button clicked");
        console.log("food: " + this.state.food);
        console.log("number: " + this.state.numFood);
        console.log("customer name: " + this.state.name);
        console.log("order number: " + this.state.orderCounter);
        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
        const newOrder = {
            id: this.state.orderCounter,
            food: this.state.food,
            numFood: this.state.numFood,
            name: this.state.name
        };
        this.props.addOrderCallback(newOrder);
    };

    onChangeSelect = e => {
        console.log(e.target.value);
        this.setState({
            food: e.target.value
        });
    };

    onChangeNumber = e => {
        console.log(e.target.value);
        this.setState({
            numFood: parseInt(e.target.value)
        });
    };

    onChangeName = e => {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <select onChange={e => this.onChangeSelect(e)}>
                    <option value="burgers">Burgers</option>
                    <option value="fries">Fries</option>
                    <option value="shakes">Shakes</option>
                </select>
                <span>Number:</span>{" "}
                <input
                    type="text"
                    placeholder="0"
                    onChange={e => this.onChangeNumber(e)}
                    className="num"
                />
                <span>Your Name:</span>{" "}
                <input
                    type="text"
                    placeholder="i.e. Cathy"
                    onChange={e => this.onChangeName(e)}
                    className="name"
                />
                <button onClick={this.onClickAddButton}>Add to Orders</button>
            </section>
        );
    }
}
