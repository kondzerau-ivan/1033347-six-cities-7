import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main';

export default function App({ housingInfo }) {
  return <Main housingInfo={ housingInfo } />;
}

App.propTypes = {
  housingInfo: PropTypes.arrayOf(
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
