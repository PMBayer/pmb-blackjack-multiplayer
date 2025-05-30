import { Card } from './BlackjackGame';

export type Player = {
  id: string;
  name: string;
  hand: Card[];
  isBusted: boolean;
  hasStood: boolean;
};

export type Dealer = {
  hand: Card[];
  isBusted: boolean;
};

export type BlackjackState = {
  deck: Card[];
  players: Player[];
  dealer: Dealer;
  currentPlayerIndex: number;
  winner: string | null;
  gameOver: boolean;
};

export type BlackjackAction =
  | { type: 'RESET_GAME'; numPlayers: number }
  | { type: 'HIT' }
  | { type: 'STAND' }
  | { type: 'NEXT_PLAYER' };

// Helper functions for deck, hand value, etc. will be added here.
function createDeck(numDecks: number): Card[] {
  const suits = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck: Card[] = [];
  for (let d = 0; d < numDecks; d++) {
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value });
      }
    }
  }
  return deck;
}

function shuffleDeck(deck: Card[]): Card[] {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
}

function drawCard(deck: Card[]): [Card | null, Card[]] {
  if (deck.length === 0) return [null, deck];
  const card = deck[deck.length - 1];
  return [card, deck.slice(0, -1)];
}

export function getHandValue(hand: Card[]): number {
  let total = 0;
  let aces = 0;
  for (const card of hand) {
    if (card.value === 'A') {
      total += 11;
      aces++;
    } else if (['K', 'Q', 'J'].includes(card.value)) {
      total += 10;
    } else {
      total += parseInt(card.value, 10);
    }
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

function dealInitialHands(deck: Card[], numPlayers: number): { deck: Card[]; players: Player[]; dealer: Dealer; gameOver: boolean; winner: string | null } {
  let newDeck = [...deck];
  const players: Player[] = [];
  let gameOver = false;
  let winner: string | null = null;
  for (let i = 0; i < numPlayers; i++) {
    const hand: Card[] = [];
    let card;
    [card, newDeck] = drawCard(newDeck);
    if (!card) {
      gameOver = true;
      winner = 'Deck exhausted - game over';
      break;
    }
    hand[0] = card;
    [card, newDeck] = drawCard(newDeck);
    if (!card) {
      gameOver = true;
      winner = 'Deck exhausted - game over';
      break;
    }
    hand[1] = card;
    players.push({
      id: `player${i + 1}`,
      name: `Player ${i + 1}`,
      hand,
      isBusted: false,
      hasStood: false,
    });
  }
  const dealerHand: Card[] = [];
  let card;
  [card, newDeck] = drawCard(newDeck);
  if (!card) {
    gameOver = true;
    winner = 'Deck exhausted - game over';
  } else {
    dealerHand[0] = card;
    [card, newDeck] = drawCard(newDeck);
    if (!card) {
      gameOver = true;
      winner = 'Deck exhausted - game over';
    } else {
      dealerHand[1] = card;
    }
  }
  return {
    deck: newDeck,
    players,
    dealer: { hand: dealerHand, isBusted: false },
    gameOver,
    winner,
  };
}

export function blackjackReducer(state: BlackjackState, action: BlackjackAction): BlackjackState {
  switch (action.type) {
    case 'RESET_GAME': {
      const deck = shuffleDeck(createDeck(6));
      const { deck: newDeck, players, dealer, gameOver, winner } = dealInitialHands(deck, action.numPlayers);
      return {
        deck: newDeck,
        players,
        dealer,
        currentPlayerIndex: 0,
        winner,
        gameOver,
      };
    }
    case 'HIT': {
      const players = [...state.players];
      const player = { ...players[state.currentPlayerIndex] };
      let deck = [...state.deck];
      let card;
      [card, deck] = drawCard(deck);
      if (!card) {
        return {
          ...state,
          deck,
          gameOver: true,
          winner: 'Deck exhausted - game over',
        };
      }
      player.hand = [...player.hand, card];
      const value = getHandValue(player.hand);
      player.isBusted = value > 21;
      players[state.currentPlayerIndex] = player;
      // If this was the last card, also end the game
      if (deck.length === 0) {
        return {
          ...state,
          deck,
          players,
          gameOver: true,
          winner: 'Deck exhausted - game over',
        };
      }
      return {
        ...state,
        deck,
        players,
      };
    }
    case 'STAND': {
      const players = [...state.players];
      players[state.currentPlayerIndex] = {
        ...players[state.currentPlayerIndex],
        hasStood: true,
      };
      return {
        ...state,
        players,
      };
    }
    case 'NEXT_PLAYER': {
      const nextIndex = state.currentPlayerIndex + 1;
      if (nextIndex >= state.players.length) {
        // Dealer's turn
        const dealer = { ...state.dealer };
        let deck = [...state.deck];
        while (getHandValue(dealer.hand) < 17) {
          let card;
          [card, deck] = drawCard(deck);
          if (!card) {
            return {
              ...state,
              deck,
              gameOver: true,
              winner: 'Deck exhausted - game over',
            };
          }
          dealer.hand = [...dealer.hand, card];
        }
        dealer.isBusted = getHandValue(dealer.hand) > 21;
        // Determine winner (simple: highest <= 21 wins)
        let bestPlayer = null;
        let bestValue = 0;
        for (const p of state.players) {
          const v = getHandValue(p.hand);
          if (v <= 21 && v > bestValue) {
            bestValue = v;
            bestPlayer = p;
          }
        }
        const dealerValue = getHandValue(dealer.hand);
        let winner = null;
        if (dealerValue > 21 && bestPlayer) winner = bestPlayer.name;
        else if (bestPlayer && bestValue > dealerValue) winner = bestPlayer.name;
        else if (dealerValue > bestValue) winner = 'Dealer';
        else winner = 'Draw';
        return {
          ...state,
          dealer,
          currentPlayerIndex: nextIndex,
          winner,
          gameOver: true,
        };
      }
      return {
        ...state,
        currentPlayerIndex: nextIndex,
      };
    }
    default:
      return state;
  }
}
