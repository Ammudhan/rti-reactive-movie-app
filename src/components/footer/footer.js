import React, { Component } from 'react';
import './footer.scss';

export default class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: 'Footer'
        }
    };

    render() {
        return (
            <span className="row">
                <span className="col-12 page-layout d-flex align-items-center justify-content-center">
                    <h1 className="footer-title">{this.state.title}</h1>
                </span>
            </span>
        );
    };
}