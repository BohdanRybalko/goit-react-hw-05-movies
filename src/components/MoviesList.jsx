import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {

  const location = useLocation();

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: location.state }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
