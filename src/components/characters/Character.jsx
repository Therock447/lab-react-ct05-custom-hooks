import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, species }) {
  return (
    <>
      Character
      <p data-testid="character">
        {name}
        {species}
      </p>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
