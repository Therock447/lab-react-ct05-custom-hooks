import React from 'react';
import PropTypes from 'prop-types';

export default function OneCharacter({ name, species, birth, death, url }) {

  return (
    <>
      <p>
        Name: {name}
      </p>
      <p>
        Species: {species}
      </p>
      <p>
        Birth: {birth ? `${birth}` : 'No birth date available.'}
        <br />
         Death: {death ? `${death}` : 'No death date available.'}
      </p>
      <p>
        <a href={url} target="_blank" rel="noreferrer">Bio</a>
      </p>
    </>
  );
}

OneCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
