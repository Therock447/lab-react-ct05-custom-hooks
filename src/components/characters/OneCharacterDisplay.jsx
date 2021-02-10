import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OneCharacter from './OneCharacter';
import getOneCharacter from '../../services/getOneCharacter';

export default function OneCharacterDisplay({ match }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
    
  useEffect(() => {
    getOneCharacter(match.params.id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);

  console.log(character);
  
  if(loading) return 'Loading';
  
  return (
    <ul>
      <OneCharacter {...character} />
    </ul>
    
  );
}

OneCharacterDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};