import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /vennila velu/i })).toBeInTheDocument();
  expect(screen.getByText(/transportation management platform/i)).toBeInTheDocument();
});
