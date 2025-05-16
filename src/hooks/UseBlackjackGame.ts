// src/hooks/useBlackjackGame.ts
import { useCallback, useState } from "react";
import { BlackjackGame, Card } from "../logic/BlackjackGame";

export function useBlackjackGame() {
  const [game] = useState(() => new BlackjackGame());
  const [playerHand, setPlayerHand] = useState<Card[]>(game.playerHand);
  const [dealerHand, setDealerHand] = useState<Card[]>(game.dealerHand);
  const [isRunning, setIsRunning] = useState(false);

  const startGame = useCallback(() => {
    game.resetGame();
    setPlayerHand([...game.playerHand]);
    setDealerHand([...game.dealerHand]);
    setIsRunning(true);
  }, [game]);

  const hit = useCallback(() => {
    game.hit();
    setPlayerHand([...game.playerHand]);
  }, [game]);

  const stand = useCallback(() => {
    game.stand();
    setDealerHand([...game.dealerHand]);
    setIsRunning(false);
  }, [game]);

  const reset = useCallback(() => {
    game.resetGame();
    setPlayerHand([]);
    setDealerHand([]);
    setIsRunning(false);
  }, [game]);

  return {
    playerHand,
    dealerHand,
    isRunning,
    startGame,
    hit,
    stand,
    reset,
  };
}
