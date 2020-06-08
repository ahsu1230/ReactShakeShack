"use strict";
import "./quit.sass";
import React from "react";
import QuitImgSrc from "./../../assets/i_quit.jpg";
import { Link } from "react-router-dom";

export default class QuitPage extends React.Component {
    render() {
        return (
            <div id="view-quit">
                <h1>I Quit!</h1>
                <img src={QuitImgSrc}/>
                <Link to="/" id="jk-link">jk, me poor</Link>
            </div>
        );
    }
}
