import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

function ReviewsList({ reviews }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      'comment': PropTypes.string.isRequired,
      'date': PropTypes.string.isRequired,
      'id': PropTypes.number.isRequired,
      'rating': PropTypes.number.isRequired,
      'user': PropTypes.shape({
        'avatar_url': PropTypes.string.isRequired,
        'id': PropTypes.number.isRequired,
        'is_pro': PropTypes.bool.isRequired,
        'name': PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
