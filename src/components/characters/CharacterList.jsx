import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../hooks/characters';
import Loading from '../loading/Loading';
import Character from './Character';

export default function CharacterList() {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;

  const characterElements = characters.map(character => (
    <Link
      key={character.id}
      to={`character/${character.id}`}
    >
      <li>
        <Character {...character} />
      </li>
    </Link>
  ));

  return (
    <>
      List of Characters
      <div data-testid="characters">
        {characterElements}
      </div>
    </>
  );
}
