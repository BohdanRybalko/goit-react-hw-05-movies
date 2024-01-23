import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MoviesList from './MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies', error);
      }
    };

    fetchTrendingMoviesData();
  }, []);

  return (
    <div>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
