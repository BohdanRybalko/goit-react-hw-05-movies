import React from 'react';

const MovieResultItem = ({ result }) => {
  return (
    <li>
      <img src={result.poster_url} alt={result.title} />
      <p>{result.title}</p>
    </li>
  );
};

export default MovieResultItem;
