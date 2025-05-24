import { BlackjackGame, Card } from './BlackjackGame';

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
    expect(
      game.getHandValue([
        { suit: 'hearts', value: 'A' },
        { suit: 'clubs', value: '9' },
      ])
    ).toBe(20);

    expect(
      game.getHandValue([
        { suit: 'hearts', value: 'A' },
        { suit: 'clubs', value: '9' },
        { suit: 'spades', value: '5' },
      ])
    ).toBe(15);

    expect(
      game.getHandValue([
        { suit: 'hearts', value: 'A' },
        { suit: 'clubs', value: 'A' },
        { suit: 'spades', value: '9' },
      ])
    ).toBe(21);
  });

  test('isPlayerBusted correctly detects when player busts', () => {
    game.playerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'clubs', value: 'Q' },
      { suit: 'spades', value: '3' },
    ];
    expect(game.isPlayerBusted()).toBe(true);

    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '6' },
    ];
    expect(game.isPlayerBusted()).toBe(false);
  });

  test('isDealerBusted correctly detects when dealer busts', () => {
    game.dealerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'clubs', value: 'Q' },
      { suit: 'spades', value: '3' },
    ];
    expect(game.isDealerBusted()).toBe(true);

    game.dealerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '6' },
    ];
    expect(game.isDealerBusted()).toBe(false);
  });

  test('getWinner determines the correct winner', () => {
    // player wins, dealer not busted
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '9' },
    ];
    game.dealerHand = [
      { suit: 'hearts', value: '8' },
      { suit: 'clubs', value: '8' },
    ];
    expect(game.getWinner()).toBe('player');

    // dealer wins, player busted
    game.playerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'clubs', value: 'Q' },
      { suit: 'spades', value: '3' },
    ];
    game.dealerHand = [
      { suit: 'hearts', value: '9' },
      { suit: 'clubs', value: '7' },
    ];
    expect(game.getWinner()).toBe('dealer');

    // draw
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '7' },
    ];
    game.dealerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '7' },
    ];
    expect(game.getWinner()).toBe('draw');

    // player wins, dealer busted
    game.playerHand = [
      { suit: 'hearts', value: '10' },
      { suit: 'clubs', value: '7' },
    ];
    game.dealerHand = [
      { suit: 'hearts', value: 'K' },
      { suit: 'clubs', value: 'Q' },
      { suit: 'spades', value: '3' },
    ];
    expect(game.getWinner()).toBe('player');
  });

  test('drawCard throws error if deck is empty', () => {
    game['deck'] = [];
    expect(() => game['drawCard']()).toThrow('Deck is empty');
  });
});
