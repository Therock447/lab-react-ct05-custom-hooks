import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1>Welcome to the Lord of the Rings: Character List</h1>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
    </div>
  );
}
