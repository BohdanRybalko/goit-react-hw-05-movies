import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        const responseDetails = await getMovieDetails(movieId);
        setMovieDetails(responseDetails.data);

        const responseCredits = await getMovieCredits(movieId);
        setMovieCredits(responseCredits.data.cast);

        const responseReviews = await getMovieReviews(movieId);
        setMovieReviews(responseReviews.data.results);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>

      <h3>Cast</h3>
      <ul>
        {movieCredits.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h3>Reviews</h3>
      <ul>
        {movieReviews.map((review) => (
          <li key={review.id}>{review.author}: {review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
