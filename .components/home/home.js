"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";
import LoadingPopup from "../loading/loading.js";
import API from "../api.js";
import { updateSavedOrders } from "../localStorage.js";

export default class HomePage extends React.Component {
    state = {
        orderList: [],
        showLoading: false
    };

    componentDidMount() {
        API.fetchOrders()
            .then(data => {
                this.setState({
                    orderList: data || []
                });
            });
    }

    apiAddOrderToList = order => {
        this.setState({showLoading: true});
        API.addOrder()
            .then(() => {
                this.addOrderToList(order);
            })
            .catch(() => {
                window.alert("Order failed to add :(");
            })
            .finally(() => {
                this.setState({showLoading: false});
            });
    }

    addOrderToList = order => {
        this.state.orderList.push(order);
        this.setState({
            orderList: this.state.orderList
        });
        updateSavedOrders(this.state.orderList);
    };

    deleteOrderFromList = orderId => {
        const newList = this.state.orderList.filter(o => o.id !== orderId);
        this.setState({
            orderList: newList
        });
        updateSavedOrders(newList);
    };

    render() {
        return (
            <div id="view-home">
                <LoadingPopup show={this.state.showLoading}/>
                <h1>Shake Shake Burgers</h1>
                <HomeOrderForm addOrderCallback={this.apiAddOrderToList} />
                <HomeOrderList
                    list={this.state.orderList}
                    deleteOrderCallback={this.deleteOrderFromList}
                />
            </div>
        );
    }
}
