import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../header/Header';

describe('Header component', () => {
  it('displays header', async() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    screen.getByText('Welcome to the Lord of the Rings: Character List');
  });
});
