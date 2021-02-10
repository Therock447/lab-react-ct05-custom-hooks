import React, { useState } from 'react';
import { useCharacters } from '../../hooks/characters';
import Loading from '../loading/Loading';
import OnePage from './OnePage';

export default function Pagination() {
  const { loading, characters } = useCharacters();

  const [page, setPage] = useState(1);

  const decrement = () => setPage(currentPage => currentPage - 1);
  const increment = () => setPage(currentPage => currentPage + 1);

  if(loading) return <Loading />;

  return (
    <>
      <button onClick={decrement}>&lt;</button>
      {page}
      <button onClick={increment}>&gt;</button>
      <OnePage />
    </>
  );
}
