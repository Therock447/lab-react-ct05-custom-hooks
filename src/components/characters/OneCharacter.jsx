import React from 'react';
import PropTypes from 'prop-types';
// import getOneCharacter from '../../services/getOneCharacter';

export default function OneCharacter({ name, species }) {
  
  return (
    <div>
      <p>
        This Character
        {name}
      </p>
      <p>
        Character Details
        {species}
      </p>
    </div>
  );
}


OneCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired  
};
