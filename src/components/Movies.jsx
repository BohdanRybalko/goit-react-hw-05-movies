import React, { useState } from 'react';
import MovieResultItem from './MovieResultItem';
import { SearchContainer, SearchInput, SearchButton, MovieResults } from './styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
  event.preventDefault();

  try {
    const response = await (searchQuery);
    const searchResults = response.data.results;
    setSearchResults(searchResults);
  } catch (error) {
    console.error('Error fetching search results', error);
  }
};

  return (
    <SearchContainer>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>

        <div>
          <SearchInput
            type="text"
            placeholder="Search for movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>

        </div>
      </form>
      <MovieResults>
        {searchResults.map((result) => (

          <MovieResultItem key={result.id} result={result} />
        ))}
      </MovieResults>
    </SearchContainer>
  );
};

export default Movies;
