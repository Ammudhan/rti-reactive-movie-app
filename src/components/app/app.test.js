import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './app';
import {MemoryRouter} from "react-router-dom";
import MovieList from "../movie-list"; //Import the MovieList component for mocking

// Mocking the nested components
jest.mock("../movie-list", () => () => (<movie-list />));

describe('APP Component', () => {

  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        // TODO - Need to explore more on the Memory Router & Enzyme
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should matches snapshot', () => {
    const
        tree = renderer.create(
            <MemoryRouter initialEntries={['/']}>
              <App />
            </MemoryRouter>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});