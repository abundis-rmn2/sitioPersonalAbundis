import { useRef, useCallback } from 'react';

/**
 * useDebouncedHover — Custom Hook parametrizable para gestionar eventos hover con retardo.
 *
 * Principios CUPID:
 * - Composable: Hook independiente que puede usarse en cualquier componente React.
 * - Predictable: Cancela limpia y automáticamente cualquier temporizador previo al salir del elemento.
 * - Idiomatic: Utiliza `useRef` y `useCallback` de React de forma nativa.
 *
 * @param {Function} onHoverCallback - Callback invocado tras cumplir el tiempo de retardo.
 * @param {number} [delayMs=999]   - Milisegundos de espera antes de activar el callback (por defecto 999ms).
 * @param {Function} [onLeaveCallback] - Callback opcional ejecutado al salir del hover.
 * @returns {{ handleMouseEnter: Function, handleMouseLeave: Function, cancelHover: Function }}
 */
export function useDebouncedHover(onHoverCallback, delayMs = 999, onLeaveCallback = null) {
  const timerRef = useRef(null);

  const cancelHover = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback((id, ...args) => {
    cancelHover();
    timerRef.current = setTimeout(() => {
      if (typeof onHoverCallback === 'function') {
        onHoverCallback(id, ...args);
      }
    }, delayMs);
  }, [onHoverCallback, delayMs, cancelHover]);

  const handleMouseLeave = useCallback((id, ...args) => {
    cancelHover();
    if (typeof onLeaveCallback === 'function') {
      onLeaveCallback(id, ...args);
    }
  }, [onLeaveCallback, cancelHover]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    cancelHover
  };
}

export default useDebouncedHover;
