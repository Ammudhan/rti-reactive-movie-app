import React from "react";
import renderer, { create } from "react-test-renderer";
import MovieList from "./movie-list";
import MovieService from "../../services/movieService";
import {StaticRouter} from "react-router-dom";

describe("Movie List Component", () => {

    it("should define the state as expected", async () => {
        const mockData = {
           data: {
                results: [
                    {
                        id: 429617,
                        original_title: "Spider-Man: Far from Home",
                        poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg"
                    }
                ]
            }
        };
        const mock = jest.spyOn(MovieService, "getMovies");
        const promise = Promise.resolve(mockData);
        mock.mockImplementation(() => promise);
        create(
            <StaticRouter>
                <MovieList/>
            </StaticRouter>
        );
        await promise;
        expect(mock).toHaveBeenCalled();
    });

    it('should matches snapshot', async () => {
        const mockData = {
            data: {
                results: [
                    {
                        id: 429617,
                        original_title: "Spider-Man: Far from Home",
                        poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg"
                    }
                ]
            }
        };
        const mock = jest.spyOn(MovieService, "getMovies");
        const promise = Promise.resolve(mockData);
        mock.mockImplementation(() => promise);
        const component = renderer.create(
            <StaticRouter>
                <MovieList/>
            </StaticRouter>
        );
        await promise;
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});