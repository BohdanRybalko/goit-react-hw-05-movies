import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import MovieResultItem from '../components/MovieResultItem';
import { SearchContainer, MovieResults } from '../components/styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

  };

  return (
    <SearchContainer>
      <h2>Search Movies</h2>
      <SearchForm
        searchQuery={searchQuery}
        onSearchInputChange={(e) => setSearchQuery(e.target.value)}
        onSearchSubmit={handleSearch}
      />
      <MovieResults>
        {searchResults.map((result) => (
          <MovieResultItem key={result.id} result={result} />
        ))}
      </MovieResults>
    </SearchContainer>
  );
};

export default Movies;
