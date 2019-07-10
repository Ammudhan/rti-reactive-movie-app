import React from "react";
import renderer, { create } from "react-test-renderer";
import MovieList from "./movie-list";
import MovieService from "../../services/movieService";
import {MemoryRouter} from "react-router-dom";
import {Link} from "react-router-dom";

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
            <MemoryRouter>
                <MovieList/>
            </MemoryRouter>
        );
        await promise;
        expect(mock).toHaveBeenCalled();
    });

});