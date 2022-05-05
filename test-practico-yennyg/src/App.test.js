import { render, screen, shallow } from '@testing-library/react';
import App from './App';
import Busqueda from './components/busqueda/busqueda';
import ApiQuery from './components/api/apiQuery';
import ApiDetalle from './components/api/apiDetalle';

jest.mock("./components/busqueda/busqueda");
jest.mock("./components/api/apiQuery");
jest.mock("./components/api/apiDetalle");

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Developed by YennyG/i);
  expect(linkElement).toBeInTheDocument();
});

test("Should render page on default route", () => {
  // Arrange
  Busqueda.mockImplementation(() => <div>BusquedaMOck</div>);

  render(
      <App/>
  );

  // Assert
  expect(screen.getByText("Busqueda")).toBeInTheDocument();
});