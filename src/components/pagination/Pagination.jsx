import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../hooks/characters';
import Loading from '../loading/Loading';
import OnePage from './OnePage';
import styles from './Pagination.css';

export default function Pagination() {
  const { loading, characters } = useCharacters();
  const [page, setPage] = useState(1);

  const decrement = () => setPage(currentPage => currentPage - 1);
  const increment = () => setPage(currentPage => currentPage + 1);

  const characterElements = characters.map(character => (
    <Link
      key={character.id}
      to={`character/${character.id}`}
    >
      <li>
        <OnePage {...character} />
      </li>
    </Link>
  ));


  if(loading) return <Loading />;

  return (
    <>
      <button onClick={decrement}>&lt;</button>
      {page}
      <button onClick={increment}>&gt;</button>

      <div
        data-testid="characters"
        className={styles.Pagination}
      >
        {characterElements}
      </div>
      <OnePage />
    </>
  );
}
