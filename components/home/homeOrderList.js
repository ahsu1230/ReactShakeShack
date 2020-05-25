"use strict";
import "./homeOrderList.sass";
import React from "react";
import { Link } from "react-router-dom";
import { HomeOrderListItem } from './homeOrderListItem.js';

export class HomeOrderList extends React.Component {
    deleteOrderCallback = (id) => {
        this.props.deleteCallback(id);
        console.log("delete homeOrderList" + id);
    }
   
    render() {
        const order = this.props.list;
        const items = order.map((order,index) => <li key={index}><HomeOrderListItem order={order} deleteOrderCallback={this.deleteOrderCallback}/></li>);
       
        let totalNumberOrders = 0;
        order.forEach(order => {
            totalNumberOrders = totalNumberOrders + order.numFood;
        });
       
        let mysteryBlock = (<div></div>);
        if (totalNumberOrders>10) {
            mysteryBlock = <Link to="/quit">Too many orders. I quit!</Link>
        };

        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <div>
                    <span className="home-row-id">Order Id</span>
                    <span className="home-row-name">Name</span>
                    <span className="home-row-food">Food</span>
                    <span className="home-row-num">Number of Food</span>
                </div>
                <ul>
                    {items}
                </ul>
                <div>{mysteryBlock}</div>
            </section>
        );
    }
}
