import { useState, useEffect } from 'react';
import getCharacters from '../services/getCharacters';
import getOneCharacter from '../services/getOneCharacter';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getCharacters ()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);
  
  return {
    loading,
    characters
  };
};

export const useOneCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
      
  useEffect(() => {
    getOneCharacter(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    character
  };
};
