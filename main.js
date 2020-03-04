'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ErrorPage } from './components/error/error.js';
import { HomePage } from './components/home/home.js';

const Error = () => <ErrorPage/>;
const Home = () => <HomePage/>;

class AppContainer extends React.Component {
	render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Router>
        );
	}
}

// This is how you attach your React code to your index.html
// It looks for the `#root` element
ReactDOM.render(
    <AppContainer/>,
    document.getElementById('root')
);
