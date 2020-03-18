"use strict";
require("./home.styl");
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const DEFAULT_FOOD_CHOICE = "burger";
/*
    Order objects look like:
    {
        id: 1
        name: "Austin",
        food: "Burger",
        num: 2
    }
 */

export class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: []
            // TODO: should be filled
        };
    }

    render() {
        const list = this.state.orderList;
        // TODO: there should be processing here

        return (
            <div id="view-home">
                <h1>Shake Shack Orders</h1>

                <section id="section-add-form">
                    <form>{/* Add your <input> fields here*/}</form>
                </section>

                <section id="section-order-list">
                    {/* Add your <ul> and <li> here*/}
                    {list}
                </section>
            </div>
        );
    }
}

// TODO: you may have to create additional components here
