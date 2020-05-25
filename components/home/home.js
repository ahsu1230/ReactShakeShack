"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";
import { updateSavedOrders } from "../localStorage.js"; 
import LoadingPopup from "../loading/loading.js";
import API from "../api.js";

export default class HomePage extends React.Component {
    state = {
        orderList: [],
        showLoading: false
    };

    componentDidMount() {
        API.fetchOrders().then(data => {
            this.setState({
                orderList: data || []
            })
        })
    }

    apiAddOrderToList = order => {
        this.setState({
            showLoading: true
        })
        API.addOrder()
            .then(() => {
                this.addOrderToList(order);
            })
            .catch(() => {
                console.log("Failed to save!");
            })
            .finally(() => {
                this.setState({
                    showLoading: false
                })
            })
    }

    addOrderToList = newOrder => {
        this.state.orderList.push(newOrder);
        this.setState({
            orderList: this.state.orderList
        });
        updateSavedOrders(this.state.orderList);
    };

    deleteOrderFromList = orderId => {
        console.log("delete home.js"+ orderId);
        for (let i = 0; i < this.state.orderList.length; i++) {
            if (orderId == this.state.orderList[i].id) {
                this.state.orderList.splice(i, 1);
                console.log(orderId);
                this.setState({
                    orderList: this.state.orderList
                });
            }
        }
        updateSavedOrders(this.state.orderList);
    };

    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1>
                <HomeOrderForm addOrderCallback={this.apiAddOrderToList} />
                <HomeOrderList list={this.state.orderList} deleteCallback={this.deleteOrderFromList}/>
                <LoadingPopup show={this.state.showLoading}/>
            </div>
        );
    }
}
