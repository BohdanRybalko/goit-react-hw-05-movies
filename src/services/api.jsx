import axios from 'axios';

const API_KEY = '61e29a7d781370c6066ef4e6795f5d25';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = () => api.get('/trending/all/day');
export const searchMovies = (query) => api.get('/search/movie', { params: { query } });
export const getMovieDetails = (movieId) => api.get(`/movie/${movieId}`);
export const getMovieCredits = (movieId) => api.get(`/movie/${movieId}/credits`);
export const getMovieReviews = (movieId) => api.get(`/movie/${movieId}/reviews`);
