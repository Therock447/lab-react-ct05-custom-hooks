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
import { ThemeProvider, useTheme } from '../theme/themeContext';
// import styles from './App.css';


// const toggle = ({ target }) => {
//   if(target.checked) return selectTheme('light');
//   else return selectTheme('dark');
// };


// const selectTheme = (currentTheme) => {
//   if(currentTheme === 'light') return styles.light;
//   else return styles.dark;
// };

// const currentTheme = selectTheme('dark');


export default function App() {
  // const { theme, selectTheme } = useTheme();

  // const currentTheme = selectTheme(theme);
  // const currentTheme = theme;

  // const currentTheme = styles.App;

  return (
    <div>
      <Router>
        <ThemeProvider>
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
        </ThemeProvider>
      </Router>
    </div>
  );
}
