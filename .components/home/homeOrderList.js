"use strict";
import "./homeOrderList.sass";
import React from "react";
import { Link } from "react-router-dom";
import { HomeOrderListItem } from "./homeOrderListItem";

export class HomeOrderList extends React.Component {
    render() {
        const orders = this.props.list;
        const items = orders.map((order, index) => {
            return (
                <li key={index}>
                    <HomeOrderListItem
                        order={order}
                        deleteOrderCallback={this.props.deleteOrderCallback}
                    />
                </li>
            );
        });

        let totalNumberOrders = 0;
        orders.forEach(order => {
            totalNumberOrders += order.numFood;
        });

        let quitLink = <div></div>;
        if (totalNumberOrders > 10) {
            quitLink = <Link to="/quit">Too many orders. I quit!</Link>;
        }

        return (
            <div id="home-order-list">
                <h1>Order List</h1>
                <div className="subheader">
                    <span className="med">Order Id</span>
                    <span className="lg">Name</span>
                    <span className="med">Food</span>
                    <span className="lg">Number of Food</span>
                </div>
                <ul>{items}</ul>
                {quitLink}
            </div>
        );
    }
}
