import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <div>
                <Link to="/films">
                    <span>Film</span>
                </Link>
                <Link to="/people">
                    <span>People</span>
                </Link>
                <hr/>
            </div>
        );
    }
}