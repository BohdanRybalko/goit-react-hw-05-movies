import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MovieDetailsContainer,
  MovieDetailsHeader,
  MovieDetailsContent,
  MovieDetailsPoster,
  MovieDetailsInfo,
} from './styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <MovieDetailsHeader>{movieDetails.title}</MovieDetailsHeader>
      <MovieDetailsContent>
        <MovieDetailsPoster src={movieDetails.poster_url} alt={movieDetails.title} />
        <MovieDetailsInfo>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Rating: {movieDetails.vote_average}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>
          <p>Genres: {movieDetails.genres?.join(', ')}</p>
          <p>Overview: {movieDetails.overview}</p>
        </MovieDetailsInfo>
      </MovieDetailsContent>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
