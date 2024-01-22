import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, MovieList, MovieItem } from './styles';

const Home = ({ trendingMovies }) => {
  return (
    <HomeContainer>
      <h2>Popular Movies</h2>
      <MovieList>
        {trendingMovies.map((movie) => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.poster_url} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;
