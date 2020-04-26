"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    onClickAddButton = () => {
        console.log("Add Order!");
    }

    onChangeSelect = (event) => {
        console.log("Select: " + event.target.value);    
    }

    onChangeNum = (event) => {
        console.log("Num: " + event.target.value);    
    }

    onChangeName = (event) => {
        console.log("Name: " + event.target.value);        
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
                    onChange={(event) => this.onChangeNum(event)}/>

                <span>Your Name:</span>
                <input type="text" placeholder="Your name" 
                    className="name"
                    onChange={(event) => this.onChangeName(event)}/>

                <button onClick={this.onClickAddButton}>Add To Orders</button>
            </section>
        );
    }
}
