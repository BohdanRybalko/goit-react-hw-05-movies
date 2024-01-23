import React, { useState } from 'react';
import MovieResultItem from './MovieResultItem';
import { SearchContainer, SearchInput, SearchButton, MovieResults } from './styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const fakeSearchResults = [
      { id: 1, title: 'Movie 1', poster_url: 'url1' },
      { id: 2, title: 'Movie 2', poster_url: 'url2' },
      
    ];

    setSearchResults(fakeSearchResults);
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
