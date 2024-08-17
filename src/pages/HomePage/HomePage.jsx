import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import api from "../services/api"; // сервіс для роботи з API

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
