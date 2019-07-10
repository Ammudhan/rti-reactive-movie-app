import React from "react";
import renderer, { create } from "react-test-renderer";
import MovieCard from "./movie-card";
import MovieService from "../../services/movieService";

describe("Movie Card Component", () => {

    it("should define the state as expected", async () => {
        const movie = {
            id: 429617,
            original_title: "Spider-Man: Far from Home",
            poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
            overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            release_date: "2019-06-28",
            title: "Spider-Man: Far from Home",
            vote_average: 7.8
        };
        const props = {
            location: {
                state: {
                    movieId: 429617
                }
            }
        };
        const mockData = {
            data: movie
        };
        const mock = jest.spyOn(MovieService, "getMovieById");
        const promise = Promise.resolve(mockData);
        mock.mockImplementation(() => promise);
        const component = create(<MovieCard {...props}/>);
        await promise;
        expect(mock).toHaveBeenCalled();
        const instance = component.getInstance();
        expect(instance.state.movie).toBe(movie);
        expect(instance.state.error).toBe('');
    });

    it('should matches snapshot', async () => {
        const movie = {
            id: 429617,
            original_title: "Spider-Man: Far from Home",
            poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
            overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
            release_date: "2019-06-28",
            title: "Spider-Man: Far from Home",
            vote_average: 7.8
        };
        const props = {
            location: {
                state: {
                    movieId: 429617
                }
            }
        };
        const mockData = {
            data: movie
        };
        const mock = jest.spyOn(MovieService, "getMovieById");
        const promise = Promise.resolve(mockData);
        mock.mockImplementation(() => promise);

        const component = renderer.create(<MovieCard {...props}/>);
        await promise;

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});