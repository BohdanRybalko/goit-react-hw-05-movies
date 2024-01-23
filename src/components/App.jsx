import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import MoviesList from './MoviesList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />}>
        <Route index element={<MoviesList />} />
        <Route path="search" element={<MovieDetails/>} />
        <Route path=":movieId" element={<MovieDetails />}>
          <Route index element={<Cast />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
