import React, { useState, useEffect } from 'react';
import { useCharacters } from '../../hooks/characters';
import getCharacters from '../../services/getCharacters';
import Character from './Character';

export default function CharacterList() {
  const { loading, characters } = useCharacters();

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
