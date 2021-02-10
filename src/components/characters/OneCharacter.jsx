import React from 'react';
import PropTypes from 'prop-types';
// import getOneCharacter from '../../services/getOneCharacter';

export default function OneCharacter({ name, species }) {
  
  return (
    <div>
        This Character
      {name}
        Character Details
      {species}
    </div>
  );
}


OneCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired  
};
