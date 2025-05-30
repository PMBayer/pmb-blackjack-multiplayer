import { blackjackReducer, BlackjackState, getHandValue } from './blackjackReducer';

describe('blackjackReducer edge cases', () => {
  it('ends the game gracefully when the deck is exhausted', () => {
    // Create a tiny deck to force exhaustion
    const tinyDeck = [
      { suit: 'spades' as const, value: '2' },
      { suit: 'hearts' as const, value: '3' },
    ];
    const initialState: BlackjackState = {
      deck: tinyDeck,
      players: [
        { id: 'p1', name: 'Player 1', hand: [], isBusted: false, hasStood: false },
      ],
      dealer: { hand: [], isBusted: false },
      currentPlayerIndex: 0,
      winner: null,
      gameOver: false,
    };
    // First hit: should succeed
    let state = blackjackReducer(initialState, { type: 'HIT' });
    expect(state.gameOver).toBe(false);
    // Second hit: should exhaust deck and end game
    state = blackjackReducer(state, { type: 'HIT' });
    expect(state.gameOver).toBe(true);
    expect(state.winner).toMatch(/deck exhausted/i);
  });

  it('correctly calculates hand value with double aces', () => {
    // Two aces should be 12
    const hand = [
      { suit: 'spades' as const, value: 'A' },
      { suit: 'hearts' as const, value: 'A' },
    ];
    // Use internal getHandValue
    const value = getHandValue(hand);
    expect(value).toBe(12);
  });

  it('handles all players busting (simultaneous busts)', () => {
    // Simulate two players, both bust
    const state: BlackjackState = {
      deck: [
        { suit: 'spades' as const, value: 'K' },
        { suit: 'hearts' as const, value: 'K' },
      ],
      players: [
        { id: 'p1', name: 'Player 1', hand: [{ suit: 'spades' as const, value: 'K' }, { suit: 'hearts' as const, value: 'Q' }], isBusted: false, hasStood: false },
        { id: 'p2', name: 'Player 2', hand: [{ suit: 'clubs' as const, value: 'K' }, { suit: 'diamonds' as const, value: 'Q' }], isBusted: false, hasStood: false },
      ],
      dealer: { hand: [{ suit: 'spades' as const, value: '9' }, { suit: 'hearts' as const, value: '8' }], isBusted: false },
      currentPlayerIndex: 0,
      winner: null,
      gameOver: false,
    };
    // Both players hit and bust
    let s1 = blackjackReducer(state, { type: 'HIT' });
    s1.players[0].hand.push({ suit: 'spades' as const, value: '5' }); // bust
    s1.players[0].isBusted = true;
    s1.currentPlayerIndex = 1;
    let s2 = blackjackReducer(s1, { type: 'HIT' });
    s2.players[1].hand.push({ suit: 'hearts' as const, value: '5' }); // bust
    s2.players[1].isBusted = true;
    // Next player triggers dealer and winner logic
    const final = blackjackReducer(s2, { type: 'NEXT_PLAYER' });
    expect(final.gameOver).toBe(true);
    // Dealer should win if all players bust
    expect(final.winner).toBe('Dealer');
  });
});
