import React, { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import api from "../../services/api";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    api.searchMovies(query).then(setMovies).catch(console.error);
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <div className={styles["search-container"]}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
