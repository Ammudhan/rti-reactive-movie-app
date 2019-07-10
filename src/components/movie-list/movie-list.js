import React, { Component } from 'react';
import MovieService from "../../services/movieService";
import './movie-list.scss';
import {Link} from "react-router-dom";
import ArrayUtils from "../../utils/array-utils";

export default class MovieList extends Component {

    _isMounted = false;

    constructor (props) {
        super(props);
        this.state = {
            movies: [],
            error: ''
        };
    };

    componentDidMount () {
        this._isMounted = true;
        this.getMovies();
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    getMovies = async() => {
        try {
            const response = await MovieService.getMovies();
            if (this._isMounted) {
                this.setState({
                    movies: ArrayUtils.getUniqueObjects(response.data.results, "id")
                });
            }
        } catch (error) {
            if (this._isMounted) {
                this.setState({
                    error: error.message
                })
            }
        }
    };

    render() {
        return (
            <span className="row">
                {
                    this.state.movies.map(movie => {
                        return (
                            <span className="col-6 col-md-4 col-lg-3 rti-no-gutter" key={movie.id}>
                                <Link to={{
                                        pathname: '/movie',
                                        state: {
                                            movieId: movie.id
                                        }
                                    }}>
                                    <img className="img-fluid link"
                                         src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                         alt={movie.original_title}/>
                                </Link>
                            </span>
                        )
                    })
                }
            </span>
        );
    };
}