import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
  isInView?: boolean;
}

export function useCountUp({
  end,
  duration = 1200,
  decimals = 0,
  startOnView = true,
  isInView = true,
}: UseCountUpOptions): string {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    if (startOnView && !isInView) {
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: 1 - (1 - x)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * end;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isInView, startOnView, prefersReducedMotion]);

  return count.toFixed(decimals);
}

