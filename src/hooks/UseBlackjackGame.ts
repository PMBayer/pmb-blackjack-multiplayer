// src/hooks/useBlackjackGame.ts
import { useState } from 'react';
import { BlackjackGame } from '../game/BlackjackGame';

const useBlackjackGame = () => {
  const [game] = useState(new BlackjackGame());
  const [playerHand, setPlayerHand] = useState(game.playerHand);
  const [dealerHand, setDealerHand] = useState(game.dealerHand);
  const [winner, setWinner] = useState<string | null>(null);

  const hit = () => {
    game.hit();
    setPlayerHand([...game.playerHand]);

    if (game.isPlayerBusted()) {
      setWinner('dealer');
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
