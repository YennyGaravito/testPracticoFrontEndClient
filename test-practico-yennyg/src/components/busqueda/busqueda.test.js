import { render, screen } from '@testing-library/react';
import Busqueda from './Busqueda';

test('renders Busqueda', () => {
  render(<Busqueda />);
  const linkElement = screen.getByText(/Developed by YennyG/i);
  expect(linkElement).toBeInTheDocument();
});
