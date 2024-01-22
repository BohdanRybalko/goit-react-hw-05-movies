import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../services/api';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsResponse = await getMovieDetails(movieId);
        setMovieDetails(detailsResponse.data);

        const creditsResponse = await getMovieCredits(movieId);
        setCast(creditsResponse.data.cast);

        const reviewsResponse = await getMovieReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>

      <div>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Runtime: {movieDetails.runtime} minutes</p>   
      </div>

      <hr />

      <Cast cast={cast} />

      <hr />

      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
