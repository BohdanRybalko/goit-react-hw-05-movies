import React from 'react';

const SearchForm = ({ query, onQueryChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
