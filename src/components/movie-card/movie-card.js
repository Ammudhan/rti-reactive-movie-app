import React, { Component } from 'react';
import './movie-card.scss';
import MovieService from "../../services/movieService";
import DateUtils from "../../utils/date-utils";

export default class MovieCard extends Component {

    _isMounted = false;

    constructor (props) {
        super(props);
        this.state = {
            movie: {},
            error: ''
        };
    };

    componentDidMount () {
        this._isMounted = true;
        const { movieId } = this.props.location.state;
        this.getMovieById(movieId);
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    getMovieById = async(movieId) => {
        try {
            const response = await MovieService.getMovieById(movieId);
            if (this._isMounted) {
                this.setState({
                    movie: response.data
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
                <span className="col-12 card-layout card-title d-flex align-items-center justify-content-start">
                    {this.state.movie.original_title}
                </span>
                <span className="col-5 col-md-4 offset-1 ">
                    <img className="img-fluid link"
                         src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
                         alt={this.state.movie.original_title}/>
                </span>
                <span className="col-5 offset-md-1 card-info">
                    <div>{DateUtils.getYear(this.state.movie.release_date)}</div>
                    <div>{this.state.movie.runtime} mins</div>
                    <div>{this.state.movie.vote_average} / 10</div>
                    <div>
                        <button className="favorite-button">Mark As Favorite</button>
                    </div>
                    <div className="overview-desktop d-none d-md-block">{this.state.movie.overview}</div>
                </span>
                <span className="col-12 d-none d-md-block mb-5"/>
                <span className="col-12 d-md-none card-layout overview d-flex align-items-center">
                    {this.state.movie.overview}
                </span>
            </span>
        );
    };
}