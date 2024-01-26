import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../services/api'; 
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async (query) => {
      try {
        setLoading(true);
        setError(null);

        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };

    fetchMovies(query);
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <div>
      <h2>Movies</h2>
      <p>Search parameter: {query}</p>

      <SearchForm
        query={query}
        onQueryChange={(newQuery) => setSearchParams({ query: newQuery })}
        onSearchSubmit={handleSearchSubmit}
      />

      <MovieList movies={movies} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Movies;
