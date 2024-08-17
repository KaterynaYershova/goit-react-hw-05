import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDA4YTdlNjBkNjJiYzllYTlkMWY2ZTVkMmNmZTExNiIsIm5iZiI6MTcyMzg5MDY2Ny44Mzk5NCwic3ViIjoiNjZjMDdhODc2NTRjNWZmNmQ1MWY1M2MyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hIFwcJAErlE1M6OuctzPIyZSO-CMm6MysYcxFXEYFcc";
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

export default {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
};
