import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState(""); // track which section is active
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    api.getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(locationRef.current);
  };

  return (
    <div className={styles.movieDetails}>
      <button className={styles.goBackButton} onClick={handleGoBack}>
        ← Go back
      </button>
      {movie && (
        <>
          <div className={styles.movieInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
            <div className={styles.movieText}>
              <h1>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p>
                <strong>User Score:</strong> {movie.vote_average * 10}%
              </p>
              <p>
                <strong>Overview:</strong> {movie.overview}
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <h3>Additional information</h3>
            <nav>
              <button
                className={styles.toggleButton}
                onClick={() => setActiveTab("cast")}
              >
                Cast
              </button>
              <button
                className={styles.toggleButton}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </nav>
          </div>

          {activeTab === "cast" && <MovieCast movieId={movieId} />}
          {activeTab === "reviews" && <MovieReviews movieId={movieId} />}
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
