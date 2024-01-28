import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>

      <img
        src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : defaultImg}
        width={250}
        alt="Movie Poster"
      />

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
