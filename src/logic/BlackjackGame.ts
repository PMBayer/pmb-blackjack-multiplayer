// src/game/BlackjackGame.ts

export type Card = {
    suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
    value: string; // '2' to '10', 'J', 'Q', 'K', 'A'
  };
  
  type Hand = Card[];
  
  export class BlackjackGame {
    private deck: Card[] = [];
    private numDecks: number;
    public playerHand: Hand = [];
    public dealerHand: Hand = [];
  
    constructor(numDecks = 6) {
      this.numDecks = numDecks;
      this.resetGame();
    }
  
    private createDeck(): Card[] {
      const suits = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const deck: Card[] = [];
      for (let d = 0; d < this.numDecks; d++) {
        for (const suit of suits) {
          for (const value of values) {
            deck.push({ suit, value });
          }
        }
      }
      return deck;
    }
  
    private shuffleDeck(deck: Card[]): Card[] {
      // Fisher-Yates shuffle
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }
  
    private drawCard(): Card {
      if (this.deck.length === 0) {
        throw new Error('Deck is empty');
      }
      return this.deck.pop()!;
    }
  
    public resetGame(): void {
      this.deck = this.shuffleDeck(this.createDeck());
      this.playerHand = [this.drawCard(), this.drawCard()];
      this.dealerHand = [this.drawCard(), this.drawCard()];
    }
  
    public hit(): void {
      this.playerHand.push(this.drawCard());
    }
  
    /**
     * Dealer draws cards until the hand value is at least 17.
     */
    public stand(): void {
      while (this.getHandValue(this.dealerHand) < 17) {
        this.dealerHand.push(this.drawCard());
      }
    }
  
    /**
     * Calculates the total value of a hand, treating Aces as 11 or 1 as needed.
     * @param hand The hand to evaluate
     * @returns The total value of the hand
     */
    public getHandValue(hand: Hand): number {
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
  
    public isPlayerBusted(): boolean {
      return this.getHandValue(this.playerHand) > 21;
    }
  
    public isDealerBusted(): boolean {
      return this.getHandValue(this.dealerHand) > 21;
    }
  
    public getWinner(): 'player' | 'dealer' | 'draw' | null {
      const playerValue = this.getHandValue(this.playerHand);
      const dealerValue = this.getHandValue(this.dealerHand);
      if (playerValue > 21) return 'dealer';
      if (dealerValue > 21) return 'player';
      if (playerValue > dealerValue) return 'player';
      if (dealerValue > playerValue) return 'dealer';
      if (playerValue === dealerValue) return 'draw';
      return null;
    }
  }
