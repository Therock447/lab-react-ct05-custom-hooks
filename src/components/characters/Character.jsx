import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, species }) {
  return (
    <>
      <p data-testid="character">
        {name}
      </p>
      <p>
        ({species})
      </p>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
