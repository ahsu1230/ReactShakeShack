"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";

export default class HomePage extends React.Component {
    render() {
        return (
            <div id="view-home">
                <h1>Shake Shake Burgers</h1>
                <HomeOrderForm/>
                <HomeOrderList/>
            </div>
        );
    }
}
