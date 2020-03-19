"use strict";
require("./quit.styl");
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import src_img_quit from "../../assets/i_quit.jpg";

export class QuitPage extends React.Component {
    render() {
        return (
            <div id="view-quit">
                <h1>I Quit!</h1>
                <img src={src_img_quit} />
                <div>
                    <Link to="/">jk, me poor</Link>
                </div>
            </div>
        );
    }
}
