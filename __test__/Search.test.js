import * as React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../src/Search';

// Jest
// jest.mock('axios');
// Vitest
jest.mock('axios');

describe('Search', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search/>);

    await userEvent.click(screen.getByRole('button'));

    // v1
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
    // v2 
    const items2 = await screen.findByText('Hello');
    expect(items2).toBeInTheDocument();
  });
});