import React from 'react';
import { render, screen } from '@testing-library/react';
import OneCharacter from './OneCharacter';

describe('OneCharacter component', () => {
  it('displays a single character', async() => {
    render(<OneCharacter
      name="name"
      species="species"
      birth="birth"
      death="death"
      url="url"
    />);

    screen.findByText('Name');
  });
});
