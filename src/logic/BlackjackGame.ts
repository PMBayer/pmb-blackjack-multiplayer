export type Card = {
    suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
    value: string; // '2' bis '10', 'J', 'Q', 'K', 'A'
  };
  
  type Hand = Card[];
  
  export class BlackjackGame {
    private deck: Card[] = [];
    public playerHand: Hand = [];
    public dealerHand: Hand = [];
  
    constructor() {
      this.initGame();
    }
  
    private createDeck(): Card[] {
      const suits = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
      return suits.flatMap(suit =>
        values.map(value => ({ suit, value }))
      );
    }
  
    private shuffleDeck(deck: Card[]): Card[] {
      return [...deck].sort(() => Math.random() - 0.5);
    }
  
    private drawCard(): Card {
      if (this.deck.length === 0) throw new Error("Deck ist leer");
      return this.deck.pop()!;
    }

    public initGame(): void {
      this.deck = this.shuffleDeck(this.createDeck());
    }

    public clearCards(): void {
      this.deck = [];
      this.playerHand = [];
      this.dealerHand = [];
    }
    
    public startGame() {
      this.playerHand = [this.drawCard(), this.drawCard()];
      this.dealerHand = [this.drawCard(), this.drawCard()];
    }

    public resetGame(): void {
      this.clearCards();
      this.initGame();
      this.startGame();
    }
  
    public hit(): void {
      this.playerHand.push(this.drawCard());
    }
  
    public stand(): void {
      // Dealer zieht Karten, bis er mindestens 17 hat
      while (this.getHandValue(this.dealerHand) < 17) {
        this.dealerHand.push(this.drawCard());
      }
    }
  
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
  
      // Asse auf 1 setzen, wenn über 21
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
  