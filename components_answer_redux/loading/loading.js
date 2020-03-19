"use strict";
import "./loading.sass";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { ACTION_TYPE_HIDE_LOADING } from '../redux/actions.js';
import src_spinner from "../../assets/spinner.svg";

class LoadingScreen extends React.Component {
    render() {
        const message = this.props.message || "Loading";
        const show = this.props.show ? "show" : "";
        return (
            <div id="view-loading" className={show}>
                <div id="loading-overlay"/>
                <div id="loading-container">
                    <h1>{message}</h1>
                    <img src={src_spinner}/>
                </div>
            </div>
        );
    }
}

// Allow these states to be usable via Component's props
const reduxMapStateToProps = (state) => {
    return {
        show: state.showLoading
    };
}

// Allow these dispatchXXX methods to be usable via Component's props
const reduxMapDispatchToProps = (dispatch) => {
    return {};
}

// Connect component to redux
export default connect(reduxMapStateToProps, reduxMapDispatchToProps)(LoadingScreen);
