import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const SharedLayout = lazy(() => import('./SharedLayout'));



const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route index element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
};

export default App;
