import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './app.scss';
import Header from "../header";
import Footer from "../footer";
import NotFound from "../not-found";
import MovieList from "../movie-list";
import MovieCard from "../movie-card";

export default class App extends Component {
    render () {
        return (
        <>
            <Router>
                <Header/>
                <div className="body-content">
                    <Switch>
                        <Route path="/" component={MovieList} exact />
                        <Route path="/movie" component={MovieCard} exact />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </>
        )
    }
}