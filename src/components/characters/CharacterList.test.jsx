import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('displays a list of characters', async() => {
    render(<CharacterList />);

    screen.getByText('Loading');

    const listOfCharacters = await screen.findByTestId('characters');
  });
});
