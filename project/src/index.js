import React from 'react';
import ReactDOM from 'react-dom';
import { CITIES } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App cities={ CITIES } reviews={ REVIEWS } />
  </React.StrictMode>,
  document.getElementById('root'));
