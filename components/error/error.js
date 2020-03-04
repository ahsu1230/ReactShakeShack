'use strict';
require('./error.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Error Page</h1>
            </div>
        );
    }
}
