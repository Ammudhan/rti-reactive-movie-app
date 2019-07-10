import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NotFound from './not-found';

describe('NotFound', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NotFound />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const
            tree = renderer.create(
                <NotFound />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});