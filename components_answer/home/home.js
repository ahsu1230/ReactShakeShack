"use strict";
require("./home.styl");
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { API } from "../api.js";

const DEFAULT_FOOD_CHOICE = "burgers";
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
        };
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNum = this.onChangeNum.bind(this);
        this.onClickAddOrder = this.onClickAddOrder.bind(this);
        this.onClickDeleteOrder = this.onClickDeleteOrder.bind(this);
    }

    componentDidMount() {
        API.getAllStoredOrders().then(orderList => {
            this.setState({
                orderList: orderList
            });
        });
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

        API.storeOrder(newOrder).then(
            orderList => {
                // Update orderList & reset other fields
                this.setState({
                    orderList: orderList,
                    orderCounter: this.state.orderCounter + 1,
                    inputOrderNum: 0,
                    inputOrderName: "",
                    inputOrderFood: DEFAULT_FOOD_CHOICE
                });
            },
            err => {
                window.alert(err);
            }
        );
    }

    onClickDeleteOrder(order) {
        console.log("Delete! " + order.id);
        API.deleteOrder(order).then(
            orderList => {
                this.setState({
                    orderList: orderList
                });
                window.alert("You've deleted order " + order.id);
            },
            err => {
                window.alert(err);
            }
        );
    }

    render() {
        let totalNumOrders = 0;
        this.state.orderList.forEach(order => {
            totalNumOrders += order.num;
        });
        const rows = this.state.orderList.map((o, index) => {
            return (
                <HomeRow
                    key={index}
                    order={o}
                    onClickDelete={this.onClickDeleteOrder}
                />
            );
        });

        let quitButton = <div></div>;
        if (totalNumOrders >= 10) {
            quitButton = <Link to="/quit">Quit Now</Link>;
        }

        let orderSubheader = {
            id: "Id",
            name: "Name",
            food: "Food",
            num: "Number"
        };

        return (
            <div id="view-home">
                <h1>Shake Shack Orders</h1>

                <section id="section-add-form">
                    <h2>New Order Form</h2>
                    <form>
                        <div>
                            <select
                                id="food"
                                value={this.state.inputOrderFood}
                                onChange={this.onChangeFood}
                            >
                                <option value="burgers">Burgers</option>
                                <option value="fries">Fries</option>
                                <option value="shake">Shake</option>
                            </select>
                            <span>Number:</span>
                            <input
                                type="text"
                                value={this.state.inputOrderNum}
                                onChange={this.onChangeNum}
                            />
                            <span>Your name:</span>
                            <input
                                type="text"
                                value={this.state.inputOrderName}
                                onChange={this.onChangeName}
                                placeholder="i.e. Austin"
                            />
                            <button onClick={this.onClickAddOrder}>
                                Add to Orders
                            </button>
                        </div>
                    </form>
                </section>

                <section id="section-order-list">
                    <h2>Order List:</h2>
                    <HomeRow order={orderSubheader} isSubHeader={true} />
                    <ul>{rows}</ul>
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
        const isSubHeader = this.props.isSubHeader;

        let liClassName = "home-row";
        let deleteButton;
        if (isSubHeader) {
            liClassName += " subheader";
            deleteButton = <div></div>;
        } else {
            deleteButton = (
                <button onClick={this.handleClickDelete}>Delete Order</button>
            );
        }
        return (
            <li className={liClassName}>
                <span className="home-row-id">{order.id}</span>
                <span className="home-row-name">{order.name}</span>
                <span className="home-row-food">{order.food}</span>
                <span className="home-row-num">{order.num}</span>
                {deleteButton}
            </li>
        );
    }
}
