import { useCallback, useEffect, useRef } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type ScrollDirection = "up" | "down" | "left" | "right";

interface ScrollInfo {
  position: number;
  delta: number;
}

interface ScrollDirectionInfo extends ScrollInfo {
  direction: ScrollDirection;
}

interface Callbacks {
  onScrollDirection?: (info: ScrollDirectionInfo) => void;
  onScrollUp?: (info: ScrollInfo) => void;
  onScrollDown?: (info: ScrollInfo) => void;
  onScrollLeft?: (info: ScrollInfo) => void;
  onScrollRight?: (info: ScrollInfo) => void;
}

export function useScrollDirection(callbacks: Callbacks = {}) {
  const last = useRef({ x: 0, y: 0 });

  // Stable callbacks
  const callbacksRef = useRef(callbacks);
  useEffect(() => {
    callbacksRef.current = callbacks;
  }, [callbacks]);

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x, y } = e.nativeEvent.contentOffset;
    const prev = last.current;

    const deltaX = x - prev.x;
    const deltaY = y - prev.y;

    const cb = callbacksRef.current;

    // Determine directions
    const verticalDirection: ScrollDirection | null =
      deltaY > 0 ? "down" : deltaY < 0 ? "up" : null;

    const horizontalDirection: ScrollDirection | null =
      deltaX > 0 ? "right" : deltaX < 0 ? "left" : null;

    // Vertical events
    if (verticalDirection) {
      const info = { position: y, delta: deltaY };

      if (verticalDirection === "down") cb.onScrollDown?.(info);
      else cb.onScrollUp?.(info);

      cb.onScrollDirection?.({
        ...info,
        direction: verticalDirection,
      });
    }

    // Horizontal events
    if (horizontalDirection) {
      const info = { position: x, delta: deltaX };

      if (horizontalDirection === "right") cb.onScrollRight?.(info);
      else cb.onScrollLeft?.(info);

      cb.onScrollDirection?.({
        ...info,
        direction: horizontalDirection,
      });
    }

    last.current = { x, y };
  }, []);

  return { onScroll };
}
