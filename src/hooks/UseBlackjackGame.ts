import { useState } from 'react';
import { BlackjackGame } from '../logic/BlackjackGame';

type Winner = 'player' | 'dealer' | 'draw' | null;

const useBlackjackGame = (numDecks = 6) => {
  const [game] = useState(() => new BlackjackGame(numDecks));
  const [playerHand, setPlayerHand] = useState(game.playerHand);
  const [dealerHand, setDealerHand] = useState(game.dealerHand);
  const [winner, setWinner] = useState<Winner>(null);

  const hit = () => {
    game.hit();
    setPlayerHand([...game.playerHand]);

    if (game.isPlayerBusted()) {
      setWinner('dealer');
    } else {
      setWinner(null);
    }
  };

  const stand = () => {
    game.stand();
    setDealerHand([...game.dealerHand]);
    setWinner(game.getWinner());
  };

  const reset = () => {
    game.resetGame();
    setPlayerHand([...game.playerHand]);
    setDealerHand([...game.dealerHand]);
    setWinner(null);
  };

  return {
    playerHand,
    dealerHand,
    winner,
    hit,
    stand,
    reset,
  };
};

export default useBlackjackGame;
