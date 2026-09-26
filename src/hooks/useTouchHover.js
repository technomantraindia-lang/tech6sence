/**
 * useTouchHover - A custom hook that adds touch-press-as-hover behavior
 * for mobile devices. When user presses and holds on an element,
 * it adds the 'touch-active' class (like YouTube's long-press preview).
 * When they lift their finger, it removes it.
 */
import { useCallback } from 'react';

export function useTouchHover() {
  const onTouchStart = useCallback((e) => {
    const card = e.currentTarget;
    card.classList.add('touch-active');
  }, []);

  const onTouchEnd = useCallback((e) => {
    const card = e.currentTarget;
    card.classList.remove('touch-active');
  }, []);

  const onTouchCancel = useCallback((e) => {
    const card = e.currentTarget;
    card.classList.remove('touch-active');
  }, []);

  return { onTouchStart, onTouchEnd, onTouchCancel };
}

/**
 * touchHoverProps - Simple object spread for components that don't want to use the hook.
 * Usage: <div {...touchHoverProps} className="group ...">
 */
export const touchHoverProps = {
  onTouchStart: (e) => e.currentTarget.classList.add('touch-active'),
  onTouchEnd: (e) => e.currentTarget.classList.remove('touch-active'),
  onTouchCancel: (e) => e.currentTarget.classList.remove('touch-active'),
};
