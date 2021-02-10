import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import OneCharacterDisplay from '../characters/OneCharacterDisplay';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact path="/" component={CharacterList}
        />
        <Route
          exact path="/character/:id" component={OneCharacterDisplay}
        />
      </Switch>
    </Router>
  );
}
