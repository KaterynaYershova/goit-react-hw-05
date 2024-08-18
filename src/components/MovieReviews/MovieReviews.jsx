import React, { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./MovieReviews.module.css";

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api
      .getMovieReviews(movieId)
      .then((response) => setReviews(response.results))
      .catch(console.error);
  }, [movieId]);

  return (
    <div className={styles.reviewsList}>
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>: {review.content}
              </p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
