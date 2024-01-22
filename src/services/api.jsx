import axios from 'axios';

const API_KEY = '328830ad39afbbc4f4fea7244342fed5';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/get-trending');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/search-movies', { params: { query } });
    return response.data;
  } catch (error) {
    console.error('Error searching movies', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movies/get-movie-details/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details', error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await api.get(`/movies/get-movie-credits/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits', error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`/movies/get-movie-reviews/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews', error);
    throw error;
  }
};
