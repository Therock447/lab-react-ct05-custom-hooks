import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  it('displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const listOfCharacters = await screen.findByTestId('characters');
  });
});
