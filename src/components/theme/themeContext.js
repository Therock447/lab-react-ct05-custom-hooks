import React, { createContext, useContext, useState } from 'react';
import styles from '../app/App.css';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const selectTheme = (currentTheme) => {
    if(currentTheme === 'light') setTheme('light');
    else setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      <div className={styles[theme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, selectTheme } = useContext(ThemeContext);
  return { theme, selectTheme };
};
