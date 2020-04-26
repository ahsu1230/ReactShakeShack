"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    onClickAddButton = () => {
        console.log("Add Order!");
    }

    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <button onClick={this.onClickAddButton}>Add To Orders</button>
            </section>
        );
    }
}
