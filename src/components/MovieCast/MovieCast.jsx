import React, { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./MovieCast.module.css";

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api
      .getMovieCast(movieId)
      .then((response) => setCast(response.cast))
      .catch(console.error);
  }, [movieId]);

  return (
    <div className={styles.castList}>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id} className={styles.castItem}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImage}
              />
            ) : (
              <img
                src="https://via.placeholder.com/200x300?text=No+Image"
                alt="No Image Available"
                className={styles.actorImage}
              />
            )}
            <div className={styles.actorDetails}>
              <p>
                <strong>{actor.name}</strong>
              </p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
