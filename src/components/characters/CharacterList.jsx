import React, { useState, useEffect } from 'react';
import getCharacters from '../../services/getCharacters';
import Character from './Character';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  console.log(characters);

  if(loading) return 'Loading';

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
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
