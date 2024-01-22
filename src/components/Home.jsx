import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../services/api';

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
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
