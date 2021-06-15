import React from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
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
          <Favorites housingInfo={housingInfo} />
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

App.propTypes = VALIDATION_RULES;
