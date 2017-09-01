import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

import Header from './Header';
import Movie from './Movie';
import AddMovie from './AddMovie';

class App extends Component {
  constructor() {
    super();
    this.headerText = "Hello"
    this.state = {
      movies: initialMovies
    };
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );

    this.setState({ movies: newMovies });
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
  }

  render() {

    return (
      <div className="App">
        <Header text={this.headerText} />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>
        <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }
}

export default App;
