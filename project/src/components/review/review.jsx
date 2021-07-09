import React from 'react';
import PropTypes from 'prop-types';


function Review({ review }) {
  const {
    comment,
    date,
    rating,
    user,
  } = review;

  const convertDate = new Date(date);
  const year = convertDate.getFullYear();
  const month = convertDate.getMonth();
  const monthName = convertDate.toLocaleString('ru', {month: 'long'}).charAt(0).toUpperCase() + convertDate.toLocaleString('ru', {month: 'long'}).slice(1);
  const day = convertDate.getDate();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${year}-${month}-${day}`}>{`${monthName} ${day}`}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
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
};

export default Review;
