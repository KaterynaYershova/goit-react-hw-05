import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import api from "../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    api.searchMovies(query).then(setMovies).catch(console.error);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
