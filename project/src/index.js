import React from 'react';
import ReactDOM from 'react-dom';
import { CITIES } from './mocks/offers';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App cities={ CITIES } />
  </React.StrictMode>,
  document.getElementById('root'));
