import React from 'react';
import '../styles/movies.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="card-front">
        <img src={movie.poster} alt={movie.title} width={movie.posterWidth} height={movie.posterHeight} />
      </div>
      <div className="card-back">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
