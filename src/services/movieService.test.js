
import mockAxios from "jest-mock-axios";
import MovieService from "./movieService";

describe("MovieService", () => {

    afterEach(() => {
        // cleaning up the mess left behind the previous test
        mockAxios.reset();
    });

    it("should call downstream API and return movies array result ", () => {
        let thenFn = jest.fn(),
            catchFn = jest.fn();

        MovieService.getMovies()
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.get).toHaveBeenCalledWith(expect.any(String));

        // simulating a server response
        let responseObj = { data: {results : [] } };
        mockAxios.mockResponse(responseObj);

        // checking the `then` spy has been called
        expect(thenFn).toHaveBeenCalled();

        // catch should not have been called
        expect(catchFn).not.toHaveBeenCalled();

    });

});