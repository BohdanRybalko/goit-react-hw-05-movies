import React, { useEffect, useState } from 'react';
import { getMovieCredits, getCastPhotos } from 'services/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast details', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
            {actor.id && (
              <img
                src={`https://image.tmdb.org/t/p/w500${getCastPhotos(actor.id)}`}
                alt={`Cast ${actor.name}`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
