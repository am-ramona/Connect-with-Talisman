import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  await act(async () => {
    root.render(<App />);
  })
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

