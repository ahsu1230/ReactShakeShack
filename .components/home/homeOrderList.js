"use strict";
import "./homeOrderList.sass";
import React from "react";
import { Link } from "react-router-dom";
import { HomeOrderListItem } from "./homeOrderListItem";

const FAKE_ORDER_LIST = [
    {
        id: 4,
        food: "burgers",
        numFood: 5,
        name: "Joe"
    },
    {
        id: 5,
        food: "burgers",
        numFood: 5,
        name: "Joe"
    },
    {
        id: 6,
        food: "burgers",
        numFood: 5,
        name: "Joe"
    },
];

export class HomeOrderList extends React.Component {
    render() {
        const orders = FAKE_ORDER_LIST;
        const items = orders.map((order, index) => <li key={index}><HomeOrderListItem order={order}/></li>);

        let totalNumberOrders = 0;
        orders.forEach(order => {
            totalNumberOrders += order.numFood;
        });

        let quitLink = (<div></div>);
        if (totalNumberOrders > 10) {
            quitLink = (<Link to="/quit">Too many orders. I quit!</Link>);
        }

        return (
            <div>
                <h1>Order List</h1>
                <ul>
                    {items}
                </ul>
                {quitLink}
            </div>
        );
    }
}
