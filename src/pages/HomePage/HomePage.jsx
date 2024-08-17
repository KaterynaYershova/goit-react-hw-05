import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import api from "../../services/api";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
