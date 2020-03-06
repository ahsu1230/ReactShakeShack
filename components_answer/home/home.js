'use strict';
require('./home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const DEFAULT_FOOD_CHOICE = "burger";
/*
    Order objects look like:
    {
        id: 1
        name: "Austin",
        food: "Burger",
        num: 2
    }
 */

export class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            orderCounter: 1,
            inputOrderFood: DEFAULT_FOOD_CHOICE,
            inputOrderName: "",
            inputOrderNum: 0
        }
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNum = this.onChangeNum.bind(this);
        this.onClickAddOrder = this.onClickAddOrder.bind(this);
        this.onClickDeleteOrder = this.onClickDeleteOrder.bind(this);
    }

    onChangeFood(event) {
        let newFood = event.target.value;
        console.log("Changed food " + newFood);
        this.setState({
            inputOrderFood: newFood
        });
    }

    onChangeName(event) {
        let newName = event.target.value;
        console.log("Changed name " + newName);
        this.setState({
            inputOrderName: newName
        });
    }

    onChangeNum(event) {
        let newNum = parseInt(event.target.value);
        console.log("Changed number " + newNum);
        this.setState({
            inputOrderNum: newNum
        });
    }

    onClickAddOrder() {
        console.log("Add Order");
        let newOrder = {
            id: this.state.orderCounter,
            food: this.state.inputOrderFood,
            name: this.state.inputOrderName,
            num: this.state.inputOrderNum
        };
        let orderList = this.state.orderList;
        orderList.push(newOrder);

        // Update orderList & Reset other fields
        this.setState({
            orderList: orderList,
            orderCounter: this.state.orderCounter + 1,
            inputOrderNum: 0,
            inputOrderName: "",
            inputOrderFood: DEFAULT_FOOD_CHOICE
        });
    }

    onClickDeleteOrder(order) {
        console.log("Delete! " + order.id);
        let orderList = this.state.orderList;
        let index = -1;
        for (let i = 0; i < orderList.length; i++) {
            if (orderList[i].id == order.id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            console.log("Order not found... ");
            return; // not found... do nothing
        }
        orderList.splice(index, 1)

        // Cannot directly modify this.state.orderList
        // Must always use this.setState(...)!
        this.setState({
            orderList: orderList
        });
    }

    render() {
        let totalNumOrders = 0;
        this.state.orderList.forEach(order => {
            totalNumOrders += order.num;
        });
        const rows = this.state.orderList.map((o, index) => {
            return (<li key={index}><HomeRow order={o} onClickDelete={this.onClickDeleteOrder}/></li>);
        });

        let quitButton = (<div></div>);
        if (totalNumOrders >= 10) {
            quitButton = (<Link to="/quit">Quit Now</Link>);
        }

        return (
            <div id="view-home">
                <h1>Shake Shack Orders</h1>

                <section id="section-add-form">
                    <h2>New Order Form</h2>
                    <form>
                        <div>
                            <select id="food" onChange={this.onChangeFood}>
                                <option value="burger">Burger</option>
                                <option value="fries">Fries</option>
                                <option value="shake">Shake</option>
                            </select>
                            <span>Number:</span>
                            <input type="text" value={this.state.inputOrderNum} onChange={this.onChangeNum}/>
                            <span>Your name:</span>
                            <input type="text" value={this.state.inputOrderName} onChange={this.onChangeName} placeholder="i.e. Austin"/>
                            </div>
                        <button onClick={this.onClickAddOrder}>Add to Orders</button>
                    </form>
                </section>

                <section id="section-order-list">
                    <h2>Order List:</h2>
                    <ul>
                        {rows}
                    </ul>
                </section>

                <h3>Total Number of Orders: {totalNumOrders}</h3>
                {quitButton}
            </div>
        );
    }
}

class HomeRow extends React.Component {
    constructor() {
        super();
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete() {
        this.props.onClickDelete(this.props.order);
    }

    render() {
        const order = this.props.order;
        return (
            <div>
                <span>{order.id}</span>
                <span>{order.name}</span>
                <span>{order.food}</span>
                <span>{order.num}</span>
                <button onClick={this.handleClickDelete}>Delete Order</button>
            </div>
        );
    }
}
