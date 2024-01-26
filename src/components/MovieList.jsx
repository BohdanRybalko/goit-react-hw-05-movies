import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title || movie.name}</li>
      ))}
    </ul>
  );
};

export default MovieList;
