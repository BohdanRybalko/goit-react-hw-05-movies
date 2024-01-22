import axios from 'axios';

const API_KEY = '328830ad39afbbc4f4fea7244342fed5';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = () => api.get('/trending/get-trending');
export const searchMovies = (query) => api.get('/search/search-movies', { params: { query } });
export const getMovieDetails = (movieId) => api.get(`/movies/get-movie-details/${movieId}`);
export const getMovieCredits = (movieId) => api.get(`/movies/get-movie-credits/${movieId}`);
export const getMovieReviews = (movieId) => api.get(`/movies/get-movie-reviews/${movieId}`);
