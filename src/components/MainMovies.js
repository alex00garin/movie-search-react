import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { movies } from "../data/MoviesData";
import "../styles/movies.css";

function MainMovies() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="mainmovies">
      <p className="title">Movie Search</p>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
  
}

export default MainMovies;
