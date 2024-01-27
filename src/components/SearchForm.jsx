import React from 'react';

const SearchForm = ({  onSearchSubmit }) => {
const handleSummit =(e) =>{
 e.preventDefault();
onSearchSubmit(e.target.elements.query.value)
}
  return (
    <form onSubmit={handleSummit }>
      <input
        type="text"
        placeholder="Search for movies"
      name='query'
required
      />
      <button type="submit">Search</button>
    </form>
  );
};


export default SearchForm;
