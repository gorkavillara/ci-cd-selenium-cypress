import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el título => Mi aplicación', () => {
  render(<App />);
  const textElement = screen.queryByText("Mi aplicación")
  expect(textElement).toBeInTheDocument();
});
