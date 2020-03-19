"use strict";
import "./homeOrderList.sass";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import HomeOrderListItem from './homeOrderListItem.js';

class HomeOrderList extends React.Component {
    onClickDeleteButton = () => {}

    render() {
        const rows = this.props.orderList.map((order, index) => {
            return (<HomeOrderListItem key={index} order={order}/>);
        });
        let totalNumOrders = 0;
        this.props.orderList.forEach(order => {
            totalNumOrders += order.numFood;
        });
        let deleteButton = (<div></div>);
        if (totalNumOrders >= 10) {
            deleteButton = (<Link to="/quit">Too many orders. I quit!</Link>);
        }

        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <ul>{rows}</ul>
                <p>Total number of orders: {totalNumOrders}</p>
                {deleteButton}
            </section>
        );
    }
}

/* Redux mappers */
// Allow these states to be usable via Component's props
const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const mapDispatchToProps = (dispatch) => {
    return {};
}

// Connect component to redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeOrderList);
