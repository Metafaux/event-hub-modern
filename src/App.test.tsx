import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Event Hub text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Event Hub Modern/i);
  expect(linkElement).toBeInTheDocument();
});
