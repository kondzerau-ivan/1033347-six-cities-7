import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ info, handleCardHover, block }) {
  const {
    'preview_image': previewImage,
    'is_premium': isPremium,
    'is_favorite': isFavorite,
    id,
    price,
    rating,
    title,
    type,
  } = info;

  return (
    <article className={`${block === 'favorites' ? 'favorites__card' : 'cities__place-card'} place-card`} onMouseOver={() => {handleCardHover(id);}}>
      {isPremium && block !== 'favorites' ?
        (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
        : ''}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <a href="/#">
          <img
            className="place-card__image"
            src={previewImage}
            width={block === 'favorites' ? '150' : '260'}
            height={block === 'favorites' ? '110' : '200'}
            alt="Place card"
          />
        </a>
      </div>
      <div className={`${block === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ?
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
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  info: PropTypes.shape().isRequired,
  handleCardHover: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
};

export default Card;
