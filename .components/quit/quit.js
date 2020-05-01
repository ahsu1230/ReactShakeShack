"use strict";
import "./quit.sass";
import React from "react";
import { Link } from "react-router-dom";

import src from "../../assets/i_quit.jpg";

export default class QuitPage extends React.Component {
    render() {
        return (
            <div id="view-quit">
                <h1>I Quit!</h1>
                <img src={src} />
                <Link to="/">jk, me poor</Link>
            </div>
        );
    }
}
