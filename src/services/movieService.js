import axios from 'axios'

const apiKey = '<<<API_KEY>>>';

const MovieService = {
    getMovies: () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        return axios.get(url);
    },
    getMovieById: (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        return axios.get(url);
    },
};

export default MovieService;