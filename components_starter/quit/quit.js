'use strict';
require('./quit.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class QuitPage extends React.Component {
    render() {
        return (
            <div id="view-quit">
                <h1>I Quit!</h1>
                {/* Add an image here*/}
                {/* Add a Link back to home page here*/}
            </div>
        );
    }
}
