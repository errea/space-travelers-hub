import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Reserve rockets', () => {
  it('should render the rockets', async () => {
    render(<App />);

    expect(await screen.findByText('Falcon 1')).toBeInTheDocument();
    expect(await screen.findByText('Falcon 9')).toBeInTheDocument();
    expect(await screen.findByText('Falcon Heavy')).toBeInTheDocument();
  });

  it('should show the reserved badge', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByText('Reserve Rocket')[0]);
    expect(await screen.findByText('Reserved')).toBeInTheDocument();
  });

  it('should be two reserved badges', async () => {
    render(<App />);

    fireEvent.click(screen.getAllByText('Reserve Rocket')[1]);

    const reservedRockets = screen.queryAllByText('Reserved');
    expect(reservedRockets).toHaveLength(2);
  });
});