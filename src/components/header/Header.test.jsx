import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../header/Header';
import { ThemeProvider } from '../theme/themeContext';

describe('Header component', () => {
  it('displays header', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    screen.getByText('Welcome to the Lord of the Rings: Character List');
  });
});
