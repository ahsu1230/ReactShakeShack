"use strict";
import "./homeOrderList.sass";
import React from "react";
import { HomeOrderListItem } from './homeOrderListItem.js';
import { Link } from "react-router-dom";

const FAKE_ORDER_LIST = [
    {
        id: 1,
        food: "burgers",
        amount: 5,
        name: "Joe"
    },
    {
        id: 2,
        food: "fries",
        amount: 3,
        name: "Tony"
    },
    {
        id: 3,
        food: "shakes",
        amount: 3,
        name: "Bob"
    },
];

export class HomeOrderList extends React.Component {
    render() {
        const orders = FAKE_ORDER_LIST;
        const items = orders.map((orders, index) => <li key={index}><HomeOrderListItem order={orders}/></li>);

        let totalOrders = 0;
        orders.forEach(order => {
            totalOrders = totalOrders + order.amount
        })

        let quit = <Link to="/quit"></Link>;
        if (totalOrders >= 10) {
            quit = <Link to="/quit">Too many orders. I quit!</Link>
        }

        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <div>
                    <span className="home-row-id">Order Id</span>
                    <span className="home-row-name">Name</span>
                    <span className="home-row-food">Food</span>
                    <span className="home-row-amount">Amount</span>
                </div>
                <ul>{items}</ul>
                {quit}
            </section>
        );
    }
}
