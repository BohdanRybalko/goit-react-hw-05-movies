import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MoviesList />} />
          <Route path="search" element={<SearchMovies />} />
          <Route path=":id" element={<MovieDetails />} />
        </Route>
        <Route path="tv-shows" element={<TVShows />}>
          <Route index element={<TVShowsList />} />
          <Route path=":id" element={<TVShowDetails />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
