import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/themeContext';
import styles from './Header.css';

export default function Header() {

  const { selectTheme } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) selectTheme('light');
    else selectTheme('dark');
  };

  return (
    <div
      // className={styles[theme]}
    >
      <h1>Welcome to the Lord of the Rings: Character List</h1>
      Check box for Light Mode <input type="checkbox" onChange={toggle}/>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
    </div>
  );
}
