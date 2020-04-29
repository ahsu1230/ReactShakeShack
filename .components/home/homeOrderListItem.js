"use strict";
import "./homeOrderListItem.sass";
import React from "react";

export class HomeOrderListItem extends React.Component {
    render() {
        const order = this.props.order;
        return (
            <div className="home-order-list-item">
                <span className="home-row-id med">{order.id}</span>
                <span className="home-row-name lg">{order.name}</span>
                <span className="home-row-food med">{order.food}</span>
                <span className="home-row-num lg">{order.numFood}</span>
                <button
                    onClick={() => this.props.deleteOrderCallback(order.id)}>
                    Delete
                </button>
            </div>
        );
    }
}
