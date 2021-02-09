import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('displays a list of characters', () => {
    render(<CharacterList />);
  });
});
