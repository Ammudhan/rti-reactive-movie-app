import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe('Footer', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const
            tree = renderer.create(
                <Footer />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});