import '@testing-library/jest-dom';
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

describe('Reserve missions', () => {
  it('should render the missions', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('Missions'));
    expect(await screen.findByText('Thaicom')).toBeInTheDocument();
    expect(await screen.findByText('Telstar')).toBeInTheDocument();
    expect(await screen.findByText('Iridium NEXT')).toBeInTheDocument();
  });

  it('should show the active member badge', async () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Join Mission')[0]);
    expect(await screen.findByText('Active Member')).toBeInTheDocument();
  });

  it('should be two active badges', async () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Join Mission')[1]);
    const reservedRockets = screen.queryAllByText('Active Member');
    expect(reservedRockets).toHaveLength(2);
  });
});

describe('My profile page', () => {
  it('should render the profile page', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('My Profile'));
    expect(await screen.findByText('My Missions')).toBeInTheDocument();
  });

  it('should render the profile page', async () => {
    render(<App />);
    expect(await screen.findByText('My Rockets')).toBeInTheDocument();
  });

  it('should render the items', async () => {
    render(<App />);
    expect(await screen.findByText('Thaicom')).toBeInTheDocument();
    expect(await screen.findByText('Iridium NEXT')).toBeInTheDocument();
    expect(await screen.findByText('Falcon 1')).toBeInTheDocument();
    expect(await screen.findByText('Falcon Heavy')).toBeInTheDocument();
  });
});
