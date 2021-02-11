import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterList from './CharacterList';
import allCharacters from '../../fixtures/allCharacters.json';

const server = setupServer(
  rest.get('https://the-one-api.dev/v2/character/', (req, res, ctx) => {
    return res(ctx.json(allCharacters));
  })
);

describe('CharacterList component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByAltText('Sauron hoola hooping with the one ring');
  });

  const listOfCharacters = screen.findByTestId('characters');

  return  waitFor(() => {
    expect(listOfCharacters).not.toBeEmptyDOMElement();
  });
});





  

