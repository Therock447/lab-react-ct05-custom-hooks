import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import OneCharacterDisplay from '../characters/OneCharacterDisplay';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact path="/" component={CharacterList}
          />
          <Route
            exact path="/character/:id" component={OneCharacterDisplay}
          />
          <Route
            exact path="/pagination" component={Pagination}
          />
        </Switch>
      </Router>
    </div>
  );
}
