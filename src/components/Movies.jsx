import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchMovies } from '../services/api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchQuery);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies', error);
    }
  };

  const handleMovieClick = (movieId) => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
