import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('displays a single character', async() => {
    render(<Character
      name="name"
      species="species"
    />);

    screen.getByText('Character');
  });
});
