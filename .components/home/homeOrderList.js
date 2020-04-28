"use strict";
import "./homeOrderList.sass";
import React from "react";
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
        return (
            <div>
                <h1>Order List</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
