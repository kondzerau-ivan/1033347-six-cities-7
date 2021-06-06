import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import Main from '../Main/Main';
import SignIn from '../SignIn/SignIn';
import Favorites from '../Favorites/Favorites';
import Room from '../Room/Room';

export default function App({ housingInfo }) {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Main housingInfo={housingInfo} />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
        <Route exact path='/offer/:id'>
          <Room />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
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
