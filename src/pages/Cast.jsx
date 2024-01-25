import React, { useEffect, useState } from 'react';
import { getMovieCredits, getCastPhotos } from '../services/api';
import { useParams } from 'react-router-dom';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                width={250}
                alt={`${actor.name} Photo`}
              />
            ) : (
              <img src={defaultImg} width={250} alt="Default Cast Member Photo" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
