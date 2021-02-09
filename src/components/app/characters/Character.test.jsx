import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('displays a single character', async() => {
    render(<Character />);

    screen.getByText('Character');

    const character = await screen.findByTestId('character');
  });
});
