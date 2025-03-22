import { Header } from './Header';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import {AsteroidsContextProvider} from '../AsteroidCard/AsteroidContext/AsteroidsContext';


describe('[components] Header', () => {
  beforeEach(() => {
    render(
      <AsteroidsContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AsteroidsContextProvider>
    );
  });
  it('Should contains common header html element', () => {
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('ARMAGGEDON V');
  });

  it('Should contains links to asteroids and destroy pages', () => {
    const links = screen.getAllByRole('Link');
    expect(links[0]).toHaveAttribute('href', '/asteroids');
    expect(links[0]).toHaveAttribute('href', '/destroyments');
  });

  it('Should contains button, after click on it should hide button and display input', () => {
    const button = screen.getByText('Unautorization');
    expect(button).toBeInTheDocument();
    expect(screen.queryByTestId('api_key_input')).not.toBeInTheDocument();

    fireEvent.click(button);
    waitFor(() => {
      expect(button).not.toBeInTheDocument();
      expect(screen.getByTestId('api_key_input')).toBeInTheDocument();
    });
  });
});