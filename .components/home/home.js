"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";

export default class HomePage extends React.Component {
    state = {
        orderList: []
    }

    addOrderToList = (order) => {
        this.state.orderList.push(order);
        this.setState({
            orderList: this.state.orderList
        });
    }

    render() {
        return (
            <div id="view-home">
                <h1>Shake Shake Burgers</h1>
                <HomeOrderForm addOrderCallback={this.addOrderToList}/>
                <HomeOrderList list={this.state.orderList}/>
            </div>
        );
    }
}
