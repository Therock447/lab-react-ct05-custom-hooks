import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import OneCharacterDisplay from './OneCharacterDisplay';
import oneCharacterByIdResponse from '../../fixtures/oneCharacterById.json';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbbe', (req, res, ctx) => {
    return res(ctx.json(oneCharacterByIdResponse));
  })
);

describe('OneCharacterDisplay component', () => {
  act(async() => {
    await beforeAll(() => server.listen());
    afterAll(() => server.close());
  });

  it('fetches and displays details of one character', async() => {
    await act(async() => {

      await render(<OneCharacterDisplay
        match={{ params: { id: '5cd99d4bde30eff6ebccfbbe' } }}
      />);

      screen.getByAltText('Sauron hoola hooping with the one ring');
    });


    return await act(async() => {
      await waitFor(() => {
        screen.findByText('Adanel');
        screen.findByText('Human');
        screen.findByText('No birth date available.');
        screen.findByText('No death date available.');
        screen.findByText('Bio');
      });
    });
  });
});
