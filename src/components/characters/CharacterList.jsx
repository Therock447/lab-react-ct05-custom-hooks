import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../hooks/characters';
import Loading from '../loading/Loading';
import { useTheme } from '../theme/themeContext';
import Character from './Character';
import styles from './CharacterList.css';

export default function CharacterList() {
  const { theme } = useTheme();


  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;

  const characterElements = characters.map(character => (
    <Link
      key={character.id}
      to={`character/${character.id}`}
    >
      <li className={styles[theme]}>
        <Character {...character} />
      </li>
    </Link>
  ));

  return (
    <>
      <div
        data-testid="characters"
        className={styles.CharacterList}
      >
        {characterElements}
      </div>
    </>
  );
}
