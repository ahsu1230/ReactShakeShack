"use strict";
import "./homeOrderListItem.sass";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { dispatchDeleteOrder } from '../redux/actions.js';
import API from '../api.js';

class HomeOrderListItem extends React.Component {
    handleClickDelete = () => {
        this.props.dispatchDeleteOrder(this.props.order);
    }

    render() {
        const order = this.props.order;
        return (
            <li>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.numFood}</span>
                <button onClick={this.handleClickDelete}>Delete Order</button>
            </li>
        );
    }
}

/* Redux mappers */
// Allow these states to be usable via Component's props
const mapStateToProps = (state) => {
    return {};
}

// Allow these dispatchXXX methods to be usable via Component's props
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteOrder: order => dispatchDeleteOrder(dispatch, order)
    };
}

// Connect component to redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeOrderListItem);
