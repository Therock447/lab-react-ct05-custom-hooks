import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OneCharacterDisplay from './OneCharacterDisplay';

describe('OneCharacterDisplay component', () => {
  it('displays component with details of one character', async() => {
    render(<OneCharacterDisplay
      match={{ params: { id: '5cd99d4bde30eff6ebccfbbe' } }}
    />);

    screen.getByText('Loading');

    // const oneCharacter = await screen.findByTestId('one character');

    return waitFor(() => {
      screen.findByText('Adanel');
      screen.findByText('Human');
    });
  });
});
