"use strict";
import "./homeOrderList.sass";
import React from "react";
import { HomeOrderListItem } from "./homeOrderListItem.js";
import { Link } from "react-router-dom";

export class HomeOrderList extends React.Component {
    deleteOrderCallback = id => {
        this.props.deleteOrderCallback(id);
    };

    render() {
        const deleteOrder = this.props.deleteOrderCallback;
        const orders = this.props.list;
        const items = orders.map((orders, index) => (
            <li key={index}>
                <HomeOrderListItem
                    order={orders}
                    deleteOrderCallback={this.deleteOrderCallback}
                />
            </li>
        ));

        let totalOrders = 0;
        orders.forEach(order => {
            totalOrders = totalOrders + order.amount;
        });

        let quit = <p></p>;
        if (totalOrders >= 10) {
            quit = <Link to="/quit">Too many orders. I quit!</Link>;
        }

        return (
            <section id="home-order-list">
                <h1>Order List:</h1>
                <div id="header">
                    <span className="home-row-id">Id</span>
                    <span className="home-row-name">Name</span>
                    <span className="home-row-food">Food</span>
                    <span className="home-row-amount">Amount</span>
                </div>
                <ul>{items}</ul>
                <h3>Total Number of Orders: {totalOrders}</h3>
                <span>{quit}</span>
            </section>
        );
    }
}
