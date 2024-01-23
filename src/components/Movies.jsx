import React, { useState } from 'react';
import MovieResultItem from './MovieResultItem';
import { SearchContainer, SearchInput, SearchButton, MovieResults } from './styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults] = useState([]);

  const handleSearch = async () => {
  };

  return (
    <SearchContainer>
      <h2>Search Movies</h2>
      <div>
        <SearchInput
          type="text"
          placeholder="Search for movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
      <MovieResults>
        {searchResults.map((result) => (
          <MovieResultItem key={result.id} result={result} />
        ))}
      </MovieResults>
    </SearchContainer>
  );
};

export default Movies;
