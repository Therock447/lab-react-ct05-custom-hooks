import React, { useState, useEffect } from 'react';
import Character from './Character';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if(loading) return 'Loading';

  return (
    <>
      List of Characters
      <div data-testid="characters">
        <Character characters={characters} />
      </div>
    </>
  );
}
