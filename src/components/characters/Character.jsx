import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ id, name, species }) {
  return (
    <>
      Character
      <p data-testid="character">
        {/* {id} */}
        {name}
        {species}
      </p>
    </>
  );
}

Character.propTypes = {
  // id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
}