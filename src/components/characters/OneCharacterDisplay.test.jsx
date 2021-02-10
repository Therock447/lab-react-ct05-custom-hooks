import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import { rest } from 'msw';
// import { setUpServer } from 'msw/node';
import OneCharacterDisplay from './OneCharacterDisplay';
// import oneCharacterByIdResponse from '../../fixtures/oneCharacterById.json';

// const server = setUpServer(
//   rest.get('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbbe', (req, res, ctx) => {
//     return res(ctx.json(oneCharacterByIdResponse));
//   })
// );

describe('OneCharacterDisplay component', () => {
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());

  it('fetches and displays details of one character', async() => {
    render(<OneCharacterDisplay
      match={{ params: { id: '5cd99d4bde30eff6ebccfbbe' } }}
    />);

    screen.getByAltText('Sauron hoola hooping with the one ring');

    return waitFor(() => {
      screen.findByText('Adanel');
      screen.findByText('Human');
      screen.findByText('No birth date available.');
      screen.findByText('No death date available.');
      screen.findByText('Bio');
    });
  });
});
