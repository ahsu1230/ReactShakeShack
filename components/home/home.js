'use strict';
require('./home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
    render() {
        return (
            <div id="view-home">
                <h1>Home Page</h1>
            </div>
        );
    }
}
