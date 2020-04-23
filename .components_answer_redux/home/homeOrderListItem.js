"use strict";
import "./homeOrderListItem.sass";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { dispatchDeleteOrder } from "../redux/actions.js";
import API from "../api.js";

class HomeOrderListItem extends React.Component {
    handleClickDelete = () => {
        this.props.dispatchDeleteOrder(this.props.order);
    };

    render() {
        let order;
        let deleteButton;
        let liClassName = "home-list-item";

        if (this.props.isSubheader) {
            liClassName += " subheader";
            order = {
                id: "Id",
                name: "Name",
                food: "Food",
                numFood: "Number"
            };
        } else {
            order = this.props.order;
            deleteButton = (
                <button onClick={this.handleClickDelete}>Delete Order</button>
            );
        }

        return (
            <li className={liClassName}>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.numFood}</span>
                {deleteButton}
            </li>
        );
    }
}

/* Redux mappers */
// Allow these states to be usable via Component's props
const mapStateToProps = state => {
    return {};
};

// Allow these dispatchXXX methods to be usable via Component's props
const mapDispatchToProps = dispatch => {
    return {
        dispatchDeleteOrder: order => dispatchDeleteOrder(dispatch, order)
    };
};

// Connect component to redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeOrderListItem);
