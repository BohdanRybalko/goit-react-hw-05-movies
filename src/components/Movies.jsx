import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton, MovieResults, MovieResultItem } from './styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
          <MovieResultItem key={result.id}>
            <img src={result.poster_url} alt={result.title} />
            <p>{result.title}</p>
          </MovieResultItem>
        ))}
      </MovieResults>
    </SearchContainer>
  );
};

export default Movies;
