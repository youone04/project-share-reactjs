import React from 'react';
import { render, screen } from '@testing-library/react';
import TestHello from '../src/TestHello';

test('renders the TestHello component', () => {
  render(<TestHello />);
  const helloElement = screen.getByText('Hello');
  expect(helloElement).toBeInTheDocument();
});
