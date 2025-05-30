import { useReducer } from 'react';
import {
  blackjackReducer,
  BlackjackState,
  BlackjackAction,
} from '../logic/blackjackReducer';

const initialState: BlackjackState = {
  deck: [],
  players: [],
  dealer: { hand: [], isBusted: false },
  currentPlayerIndex: 0,
  winner: null,
  gameOver: false,
};

export function useBlackjackReducer(numPlayers = 1) {
  const [state, dispatch] = useReducer(blackjackReducer, initialState);

  // Helper actions
  const resetGame = () => dispatch({ type: 'RESET_GAME', numPlayers });
  const hit = () => dispatch({ type: 'HIT' });
  const stand = () => dispatch({ type: 'STAND' });
  const nextPlayer = () => dispatch({ type: 'NEXT_PLAYER' });

  return {
    state,
    resetGame,
    hit,
    stand,
    nextPlayer,
    dispatch,
  };
}
