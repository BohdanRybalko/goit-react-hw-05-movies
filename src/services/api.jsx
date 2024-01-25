import axios from 'axios';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWUyOWE3ZDc4MTM3MGM2MDY2ZWY0ZTY3OTVmNWQyNSIsInN1YiI6IjY1YWUxZjdlNTQ0YzQxMDBhZTI0ZGJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sF3ftMOy8iN9HBFQU4cf_14roDw45jhm_X2UkCxIVtQ';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getTrendingMovies = () => api.get('/trending/all/day');
export const getSearchMovie = (query) => api.get('/search/movie', { params: { query } });
export const getMovieDetails = (movieId) => api.get(`/movie/${movieId}`);
export const getMovieCredits = (movieId) => api.get(`/movie/${movieId}/credits`);
export const getMovieReviews = (movieId) => api.get(`/movie/${movieId}/reviews`);
export const getCastPhotos = (personId) => api.get(`/person/${personId}/images`);
