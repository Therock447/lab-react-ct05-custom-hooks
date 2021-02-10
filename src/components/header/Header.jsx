import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        Welcome to the Lord of the Rings: Character List
      <Link to={'/'}>
        Home
      </Link>
    </div>
  );
}
