import React from 'react';
import { SearchInput, SearchButton } from './styles';

const SearchForm = ({ searchQuery, onSearchInputChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <SearchInput
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={onSearchInputChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </form>
  );
};

export default SearchForm;
