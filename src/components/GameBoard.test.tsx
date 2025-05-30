import { render, screen, fireEvent } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

describe('GameBoard (multiplayer)', () => {
  it('renders multiple players and allows turn-based actions', () => {
    render(<GameBoard />);
    // Should render two player areas
    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByText('Player 2')).toBeInTheDocument();
    // Only Player 1's buttons should be enabled
    const hitButtons = screen.getAllByRole('button', { name: /hit/i });
    expect(hitButtons[0]).toBeEnabled();
    expect(hitButtons[1]).toBeDisabled();
    // Simulate Player 1 hitting and standing
    fireEvent.click(hitButtons[0]);
    const standButtons = screen.getAllByRole('button', { name: /stand/i });
    fireEvent.click(standButtons[0]);
    // Now Player 2's buttons should be enabled
    expect(hitButtons[1]).toBeEnabled();
  });
});
