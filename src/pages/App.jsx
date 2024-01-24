import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" index={<Home />} />
      <Route path="movies" element={<Movies />}>
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
