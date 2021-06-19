import React from 'react';
import ReactDOM from 'react-dom';
import { HOUSING_INFO } from './mocks/offers';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App housingInfo={ HOUSING_INFO } />
  </React.StrictMode>,
  document.getElementById('root'));
