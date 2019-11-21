import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import MemeContainer from '../containers/MemeContainer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Auth} />
          <Route path='/memes' component={MemeContainer} />
        </Switch>
      </Router>
    </>
  );
}
