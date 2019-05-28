import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import MemeDetail from './memes/MemeDetail';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/:id" component={MemeDetail} />
        <Route exact path="/" component={Home} /> 
      </Switch>
    </Router>
  );
}
