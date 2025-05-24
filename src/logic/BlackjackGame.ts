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
      let deck: Card[] = [];
      for (let d = 0; d < this.numDecks; d++) {
        deck = deck.concat(
          suits.flatMap(suit =>
            values.map(value => ({ suit, value }))
          )
        );
      }
      return deck;
    }
  
    private shuffleDeck(deck: Card[]): Card[] {
      return [...deck].sort(() => Math.random() - 0.5);
    }
  
    private drawCard(): Card {
      if (this.deck.length === 0) throw new Error("Deck is empty");
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
        if (['J', 'Q', 'K'].includes(card.value)) {
          total += 10;
        } else if (card.value === 'A') {
          aces += 1;
          total += 11;
        } else {
          total += parseInt(card.value, 10);
        }
      }
  
      // Adjust Aces to 1 if total is over 21
      while (total > 21 && aces > 0) {
        total -= 10;
        aces -= 1;
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
      if (this.isPlayerBusted()) return 'dealer';
      if (this.isDealerBusted()) return 'player';
  
      const playerTotal = this.getHandValue(this.playerHand);
      const dealerTotal = this.getHandValue(this.dealerHand);
  
      if (playerTotal > dealerTotal) return 'player';
      if (dealerTotal > playerTotal) return 'dealer';
      return 'draw';
    }
  }
