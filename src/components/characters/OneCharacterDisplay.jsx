import React from 'react';
import PropTypes from 'prop-types';
import OneCharacter from './OneCharacter';
import { useOneCharacter } from '../../hooks/characters';
import Loading from '../loading/Loading';

export default function OneCharacterDisplay({ match }) {
  const { loading, character } = useOneCharacter(match.params.id);
  
  if(loading) return <Loading />;
  
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
