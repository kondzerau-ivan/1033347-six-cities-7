import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ info }) {
  const {
    image,
    isPremium,
    price,
    header,
    type,
    isFavorites,
    rating,
  } = info;

  return (
    <article className="cities__place-card place-card">
      {isPremium ?
        (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img
            className="place-card__image"
            src={image}
            width="260"
            height="200"
            alt="Place card"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorites ?
            'place-card__bookmark-button--active'
            : ''
          } button`}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{header}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      header: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isFavorites: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
