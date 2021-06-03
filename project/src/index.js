import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const HOUSING_INFO = [
  {
    id: 1,
    image: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    header: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isFavorites: false,
    rating: 4,
  },
  {
    id: 2,
    image: 'img/room.jpg',
    isPremium: false,
    price: 80,
    header: 'Wood and stone place',
    type: 'Private room',
    isFavorites: true,
    rating: 4,
  },
  {
    id: 3,
    image: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    header: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorites: false,
    rating: 4,
  },
  {
    id: 4,
    image: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    header: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorites: false,
    rating: 5,
  },
  {
    id: 5,
    image: 'img/room.jpg',
    isPremium: false,
    price: 80,
    header: 'Wood and stone place',
    type: 'Private room',
    isFavorites: true,
    rating: 4,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App housingInfo={ HOUSING_INFO } />
  </React.StrictMode>,
  document.getElementById('root'));
