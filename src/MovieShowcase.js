import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const movieArray = movieData.map((movie, index) =>
      <MovieCard key={index} title={movie.title} poster={movie.poster} IMDBRating={movie.IMDBRating} genres={movie.genres}/>
    );
    return (
      movieArray
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
