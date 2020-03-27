"use strict";
import '@babel/polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
// import { Store } from "./redux/reducer.js";
import QuitPage from "./quit/quit.js";
import HomePage from "./home/home.js";

const Home = () => <HomePage/>;
const Quit = () => <QuitPage/>;

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/quit" component={Quit} />
                </Switch>
            </Router>
        );
    }
}

// This is how you attach your React code to your index.html
// It looks for the `#root` element
ReactDOM.render(<Provider store={Store}><App/></Provider>,
    document.getElementById("root"));
