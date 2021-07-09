import React from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../no-match/no-match';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

function App({ cities, reviews }) {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Main cities={cities} />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/favorites'>
          <Favorites cities={cities} />
        </Route>
        <Route exact path='/offer/:id'>
          <Room reviews={reviews} cities={cities} />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = VALIDATION_RULES;

export default App;
