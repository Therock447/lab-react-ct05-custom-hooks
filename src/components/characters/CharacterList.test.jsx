import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { setUpServer } from 'msw/node';
import CharacterList from './CharacterList';
// import allCharacters from '../../fixtures/allCharacters.json';

// const server = setUpServer(
//   rest.get('https://the-one-api.dev/v2/character/', (req, res, ctx) => {
//     return res(ctx.json(allCharacters));
//   })
// );

describe('CharacterList component', () => {
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());
  it('displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByAltText('Sauron hoola hooping with the one ring');

    const listOfCharacters = await screen.findByTestId('characters');
  });
});
