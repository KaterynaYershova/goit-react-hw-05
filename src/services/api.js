import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDA4YTdlNjBkNjJiYzllYTlkMWY2ZTVkMmNmZTExNiIsIm5iZiI6MTcyMzk4OTk1My4wNTU2NTQsInN1YiI6IjY2YzA3YTg3NjU0YzVmZjZkNTFmNTNjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLWAt38m6w9X-It3rncUp9M1Ik8sg1wSD_kDgverJls";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

const searchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};

export default {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
