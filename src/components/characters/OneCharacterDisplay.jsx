import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OneCharacter from './OneCharacter';
import getOneCharacter from '../../services/getOneCharacter';
import { useOneCharacter } from '../../hooks/characters';

export default function OneCharacterDisplay({ match }) {
  const { loading, character } = useOneCharacter(match.params.id);
  
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
