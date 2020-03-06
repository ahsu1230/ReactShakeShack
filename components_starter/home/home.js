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
            // TODO: should be filled
        }
    }

    render() {
        // TODO: there should be processing here
        return (
            <div id="view-home">
                <h1>Shake Shack Orders</h1>

                <section id="section-add-form">
                    <h2>New Order Form</h2>
                    <form>
                    </form>
                </section>

                <section id="section-order-list">
                </section>
            </div>
        );
    }
}

// TODO: you may have to create additional components here
