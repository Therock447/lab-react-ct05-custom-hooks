import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
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
  act(async() => {
    await beforeAll(() => server.listen());
    afterAll(() => server.close());
  });

  it('displays a list of characters', async() => {
    await act(async() => {

      await render(
        <MemoryRouter>
          <CharacterList />
        </MemoryRouter>
      );

      screen.getByAltText('Sauron hoola hooping with the one ring');
    });

    const listOfCharacters = await screen.findByTestId('characters');

    return await act(async() => {
      await waitFor(() => {
        expect(listOfCharacters).not.toBeEmptyDOMElement();
      });
    });
  });
});




  

