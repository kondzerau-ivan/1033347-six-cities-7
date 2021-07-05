import PropTypes from 'prop-types';

export const VALIDATION_RULES = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      'bedrooms': PropTypes.number.isRequired,
      'city': PropTypes.shape({
        'location': PropTypes.shape({
          'latitude': PropTypes.number.isRequired,
          'longitude': PropTypes.number.isRequired,
          'zoom': PropTypes.number.isRequired,
        }).isRequired,
        'name': PropTypes.string.isRequired,
      }).isRequired,
      'description': PropTypes.string.isRequired,
      'goods': PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      'host': PropTypes.shape({
        'avatar_url': PropTypes.string.isRequired,
        'id': PropTypes.number.isRequired,
        'is_pro': PropTypes.bool.isRequired,
        'name': PropTypes.string.isRequired,
      }).isRequired,
      'id': PropTypes.number.isRequired,
      'images': PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      'is_favorite': PropTypes.bool.isRequired,
      'is_premium': PropTypes.bool.isRequired,
      'location': PropTypes.shape({
        'latitude': PropTypes.number.isRequired,
        'longitude': PropTypes.number.isRequired,
        'zoom': PropTypes.number.isRequired,
      }).isRequired,
      'max_adults': PropTypes.number.isRequired,
      'preview_image': PropTypes.string.isRequired,
      'price': PropTypes.number.isRequired,
      'title': PropTypes.string.isRequired,
      'type': PropTypes.string.isRequired,
      'rating': PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
