"use strict";
import "./loading.sass";
import React from "react";
import src from "../../assets/spinner.svg";

export default class LoadingPopup extends React.Component {
    render() {
        const show = this.props.show;
        return (
            <div id="popup-loading" className={show ? "show" : ""}>
                <div className="overlay"></div>
                <div className="popup-wrapper">
                    <h3>Loading...</h3>
                    <img src={src}/>
                </div>
            </div>
        );
    }
}
