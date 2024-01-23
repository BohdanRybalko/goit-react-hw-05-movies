import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies} from '../services/api'; 

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError(null);

      const result = await searchMovies(query);
      setMovies(result.results);
    } catch (e) {
      setError(e.toJSON());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const updateQuery = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h2>Movies</h2>
      <p>Search parameter: {query}</p>

      <input
        type="text"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Movies;
