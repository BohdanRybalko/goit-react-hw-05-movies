import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews} from '../services/api';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const {data} = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
