import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './header';
import {BrowserRouter as Router} from "react-router-dom";

describe('Header Component', () => {

    it('should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Header />
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should matches snapshot', () => {
        const
            tree = renderer.create(
                <Router>
                    <Header />
                </Router>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});