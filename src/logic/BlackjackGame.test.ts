import type { Card } from './BlackjackGame';
import { BlackjackGame } from './BlackjackGame';

describe('BlackjackGame', () => {
  let game: BlackjackGame;

  beforeEach(() => {
    game = new BlackjackGame();
  });

  test('resetGame starts with 2 cards each for player and dealer', () => {
    game.resetGame();
    expect(game.playerHand.length).toBe(2);
    expect(game.dealerHand.length).toBe(2);
    expect(game['deck'].length).toBe(game['numDecks'] * 52 - 4);
  });

  test('hit adds one card to the player hand', () => {
    const initialLength = game.playerHand.length;
    game.hit();
    expect(game.playerHand.length).toBe(initialLength + 1);
  });

  test('stand makes dealer draw cards until hand value is at least 17', () => {
    // start dealer hand with low cards
    game.dealerHand = [
      { suit: 'hearts', value: '2' },
      { suit: 'clubs', value: '3' },
    ];
    // set deck so dealer draws predictable cards
    game['deck'] = [
      { suit: 'spades', value: '10' },
      { suit: 'diamonds', value: '5' },
    ] as Card[]; // pop draws from end

    game.stand();

    const dealerValue = game.getHandValue(game.dealerHand);
    expect(dealerValue).toBeGreaterThanOrEqual(17);
  });

  test('getHandValue calculates ace as 11 or 1 correctly', () => {
    game.playerHand = [
      { suit: 'hearts', value: 'A' },
      { suit: 'spades', value: '9' },
    ];
    expect(game.getHandValue(game.playerHand)).toBe(20);
    game.playerHand.push({ suit: 'clubs', value: '5' });
    expect(game.getHandValue(game.playerHand)).toBe(15);
  });

  test('isPlayerBusted correctly detects when player busts', () => {
    game.playerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'spades', value: 'Q' },
      { suit: 'clubs', value: '2' },
    ];
    expect(game.isPlayerBusted()).toBe(true);
    game.playerHand = [
      { suit: 'hearts', value: '5' },
      { suit: 'spades', value: '6' },
    ];
    expect(game.isPlayerBusted()).toBe(false);
  });

  test('isDealerBusted correctly detects when dealer busts', () => {
    game.dealerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'spades', value: 'Q' },
      { suit: 'clubs', value: '2' },
    ];
    expect(game.isDealerBusted()).toBe(true);
    game.dealerHand = [
      { suit: 'hearts', value: '5' },
      { suit: 'spades', value: '6' },
    ];
    expect(game.isDealerBusted()).toBe(false);
  });

  test('getWinner determines the correct winner', () => {
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'spades', value: '9' },
    ];
    game.dealerHand = [
      { suit: 'clubs', value: '8' },
      { suit: 'diamonds', value: '8' },
    ];
    expect(game.getWinner()).toBe('player');
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'spades', value: '6' },
    ];
    game.dealerHand = [
      { suit: 'clubs', value: '10' },
      { suit: 'diamonds', value: '8' },
    ];
    expect(game.getWinner()).toBe('dealer');
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'spades', value: '7' },
    ];
    game.dealerHand = [
      { suit: 'clubs', value: '10' },
      { suit: 'diamonds', value: '7' },
    ];
    expect(game.getWinner()).toBe('draw');
  });

  test('drawCard throws error if deck is empty', () => {
    game['deck'] = [];
    expect(() => game['drawCard']()).toThrow('Deck is empty');
  });
});
