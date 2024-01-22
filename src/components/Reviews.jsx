import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
