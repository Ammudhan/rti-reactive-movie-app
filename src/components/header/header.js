import React, { Component } from 'react';
import './header.scss';
import {withRouter} from "react-router-dom";

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: 'Pop Movie'
        }
    };

    handleBack = () => {
        this.props.history.goBack()
    };

    render() {
        return (
            <span className="row">
                <span className="col-12 page-layout d-flex align-items-center justify-content-between">
                    <h1 className="title">
                        {/*<span onClick={this.handleBack} className="d-flex justify-content-start button">
                          GoBack
                        </span>*/}
                        {this.state.title}
                    </h1>
                    <span className="nav-icon"/>
                </span>
            </span>
        );
    };
}

export default withRouter(Header)