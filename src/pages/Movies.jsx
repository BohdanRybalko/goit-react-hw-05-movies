import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../services/api'; 
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

   useEffect(() => {
if(!query)return;
    const fetchMovies = async (query) => {
      try {
        setLoading(true);
        setError(null);

        const result = await getSearchMovie(query);
        setMovies(result.data.results)
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };

    fetchMovies(query);
  }, [query]);

   const handleSearchSubmit = (query ) => {
   
    setSearchParams({ query: query });
  };

  return (
    <div>
      <h2>Movies</h2>
      <p>Search parameter: {query}</p>

      <SearchForm
        query={query}
        onSearchSubmit={handleSearchSubmit}
      />

      <MovieList movies={movies} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Movies;
