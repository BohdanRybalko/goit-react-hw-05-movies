import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails, getMoviePosters } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [moviePosters, setMoviePosters] = useState([]);

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    const fetchMoviePosters = async () => {
      try {
        const response = await getMoviePosters(movieId);
        setMoviePosters(response.data.posters);
      } catch (error) {
        console.error('Error fetching movie posters', error);
      }
    };

    fetchMovieDetailsData();
    fetchMoviePosters();
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <div>
        <h3>Movie Posters</h3>
        {moviePosters.map((poster) => (
          <img key={poster.file_path} src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} alt="Movie Poster" />
        ))}
      </div>

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
