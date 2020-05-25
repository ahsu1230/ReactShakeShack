"use strict";
import "./homeOrderListItem.sass";
import React from "react";

export class HomeOrderListItem extends React.Component {
    onClickDelete = id => {
        this.props.deleteOrderCallback(id);
        console.log("original");
    }
    
    render() {
        var order = this.props.order;
        return (
            <div>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.numFood}</span>
                <button className="delete-button" onClick={() => this.onClickDelete(order.id)}>Delete</button>
            </div>
        )
    }
}