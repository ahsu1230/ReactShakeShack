"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";
import { updateSavedOrders } from "./../localStorage.js";
import API from "./../api.js";

export default class HomePage extends React.Component {
    state = {
        orderList: []
    }

    addOrderToList = order => {
        this.state.orderList.push(order);
        this.setState({
            orderList: this.state.orderList
        })
        updateSavedOrders(this.state.orderList);
    }

    deleteOrderFromList = orderId => {
        for (let i = 0; i < this.state.orderList.length; i++) {
            if (this.state.orderList[i].id == orderId) {
                this.state.orderList.splice(i, 1);
                this.setState({
                    orderList: this.state.orderList
                })
            }
        }
        updateSavedOrders(this.state.orderList);
    }

    componentDidMount() {
        API.fetchOrders().then(data => {
            this.setState({
                orderList: data || []
            })
        });
    }

    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1>
                <HomeOrderForm addOrderCallback={this.addOrderToList}/>
                <HomeOrderList list={this.state.orderList} deleteOrderCallback={this.deleteOrderFromList}/>
            </div>
        );
    }
}
