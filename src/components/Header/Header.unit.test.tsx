import { Header } from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe("[components] Header", () => {
  it("should contains common header html element", () => {
    render(<Header />);
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
  })
})