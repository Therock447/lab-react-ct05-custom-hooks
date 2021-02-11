import React from 'react';
import PropTypes from 'prop-types';
import OneCharacter from './OneCharacter';
import { useOneCharacter } from '../../hooks/characters';
import Loading from '../loading/Loading';
import styles from './OneCharacterDisplay.css';
import { useTheme } from '../theme/themeContext';

export default function OneCharacterDisplay({ match }) {
  const { theme } = useTheme();
  
  const { loading, character } = useOneCharacter(match.params.id);
  
  if(loading) return <Loading />;
  
  return (
    <div className={styles.OneCharacterDisplay}>
      <div className={styles[theme]}>
        <OneCharacter {...character} />
      </div>
    </div>
  );
}

OneCharacterDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};
