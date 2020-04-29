"use strict";
import "./homeOrderForm.sass";
import React from "react";

const foodItems = ["burgers", "fries", "shakes"];
export class HomeOrderForm extends React.Component {
    state = {
        food: foodItems[0],
        num: 1,
        name: "",
        orderCounter: 0
    };

    onClickAddButton = () => {
        console.log("Add Order! " + this.state.orderCounter);
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.food);
        console.log("NumFood: " + this.state.num);
        const order = {
            id: this.state.orderCounter,
            name: this.state.name,
            food: this.state.food,
            numFood: this.state.num
        };
        this.props.addOrderCallback(order);
        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
    };

    onChangeSelect = event => {
        console.log("Select: " + event.target.value);
        this.setState({
            food: event.target.value
        });
    };

    onChangeNum = event => {
        console.log("Num: " + event.target.value);
        this.setState({
            num: parseInt(event.target.value)
        });
    };

    onChangeName = event => {
        console.log("Name: " + event.target.value);
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>

                <select onChange={e => this.onChangeSelect(e)}>
                    <option value={foodItems[0]}>Burgers</option>
                    <option value={foodItems[1]}>Fries</option>
                    <option value={foodItems[2]}>Shakes</option>
                </select>

                <span>Number:</span>
                <input
                    type="text"
                    placeholder="1"
                    className="num"
                    value={this.state.num}
                    onChange={event => this.onChangeNum(event)}
                />

                <span>Your Name:</span>
                <input
                    type="text"
                    placeholder="Your name"
                    className="name"
                    value={this.state.name}
                    onChange={event => this.onChangeName(event)}
                />

                <button onClick={this.onClickAddButton}>Add To Orders</button>
            </section>
        );
    }
}
