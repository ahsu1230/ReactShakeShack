"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        food: "",
        num: 0,
        name: "",
        orderCounter: 0
    }

    onClickAddButton = () => {
        console.log("Add Order! " + this.state.orderCounter);
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.food);
        console.log("NumFood: " + this.state.num);
        this.setState({
            orderCounter: this.state.orderCount + 1
        });
    }

    onChangeSelect = (event) => {
        console.log("Select: " + event.target.value);    
        this.setState({
            food: event.target.value
        });
    }

    onChangeNum = (event) => {
        console.log("Num: " + event.target.value);
        this.setState({
            num: parseInt(event.target.value)
        });
    }

    onChangeName = (event) => {
        console.log("Name: " + event.target.value);        
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>

                <select onChange={(e) => this.onChangeSelect(e)}>
                    <option>Burgers</option>
                    <option>Fries</option>
                    <option>Shakes</option>
                </select>

                <span>Number:</span>
                <input type="text" placeholder="1" 
                    className="num"
                    value={this.state.num}
                    onChange={(event) => this.onChangeNum(event)}/>

                <span>Your Name:</span>
                <input type="text" placeholder="Your name" 
                    className="name"
                    value={this.state.name}
                    onChange={(event) => this.onChangeName(event)}/>

                <button onClick={this.onClickAddButton}>Add To Orders</button>
            </section>
        );
    }
}
