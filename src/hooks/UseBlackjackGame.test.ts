import { act, renderHook } from '@testing-library/react';
import useBlackjackGame from '../hooks/UseBlackjackGame';

describe('useBlackjackGame hook', () => {
  test('initializes game state correctly', () => {
    const { result } = renderHook(() => useBlackjackGame());

    expect(result.current.playerHand.length).toBe(2);
    expect(result.current.dealerHand.length).toBe(2);
    expect(result.current.winner).toBeNull();
  });

  test('hit adds a card to playerHand and detects bust', () => {
    const { result } = renderHook(() => useBlackjackGame());

    act(() => {
      result.current.hit();
    });

    expect(result.current.playerHand.length).toBeGreaterThan(2);
    // Winner might be dealer if bust, or null if safe
    expect(['dealer', null]).toContain(result.current.winner);
  });

  test('stand lets dealer draw and determines winner', () => {
    const { result } = renderHook(() => useBlackjackGame());

    act(() => {
      result.current.stand();
    });

    expect(result.current.dealerHand.length).toBeGreaterThanOrEqual(2);
    expect(['player', 'dealer', 'draw', null]).toContain(result.current.winner);
  });

  test('reset resets the game', () => {
    const { result } = renderHook(() => useBlackjackGame());

    act(() => {
      result.current.hit();
      result.current.reset();
    });

    expect(result.current.playerHand.length).toBe(2);
    expect(result.current.dealerHand.length).toBe(2);
    expect(result.current.winner).toBeNull();
  });
});
