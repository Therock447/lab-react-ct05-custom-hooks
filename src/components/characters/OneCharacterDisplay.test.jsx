import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OneCharacterDisplay from './OneCharacterDisplay';

describe('OneCharacterDisplay component', () => {
  it('displays component with details of one character', async() => {
    render(<OneCharacterDisplay />);

    screen.getByText('Loading');

    const oneCharacter = await screen.findByTestId('one character');
  });
});
