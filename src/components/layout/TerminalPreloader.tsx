import React, { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TerminalPreloaderProps {
  onComplete?: () => void;
}

export const TerminalPreloader: React.FC<TerminalPreloaderProps> = ({ onComplete }) => {
  const fullText = '> swapnil patil — ai/ml engineer & product designer';
  const prefersReducedMotion = useReducedMotion();

  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleFinish = useCallback(() => {
    setIsFadingOut(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 400);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  // Reduced motion override
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(fullText);
      setIsTypingComplete(true);
      const timer = setTimeout(() => {
        handleFinish();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion, fullText, handleFinish]);

  // Typing effect
  useEffect(() => {
    if (prefersReducedMotion) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        // Automatic transition / fade out after 800ms
        const fadeTimer = setTimeout(() => {
          handleFinish();
        }, 800);
        return () => clearTimeout(fadeTimer);
      }
    }, 28);

    return () => clearInterval(typingInterval);
  }, [prefersReducedMotion, fullText, handleFinish]);

  // Escape key to dismiss immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={handleFinish}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#080a09] px-4 cursor-pointer transition-opacity duration-300 ease-out select-none ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-white/[0.12] bg-[#0c0e0d]/95 backdrop-blur-xl shadow-2xl p-4 sm:p-6 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block" />
          </div>
          <div className="text-[11px] font-mono text-typography-dim tracking-wide">
            terminal &bull; bash &bull; 80x24
          </div>
          <button
            onClick={handleFinish}
            aria-label="Skip preloader"
            className="text-[11px] font-mono text-typography-muted hover:text-typography-headline px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] transition-colors"
          >
            [Esc to skip]
          </button>
        </div>

        {/* Terminal Output */}
        <div className="font-mono text-sm sm:text-base leading-relaxed text-[#f2f4f3] min-h-[64px] flex items-center">
          <div className="flex flex-wrap items-center">
            <span className="text-[#c6ff00] font-semibold mr-2">{'>'}</span>
            <span className="text-[#f2f4f3] tracking-wide font-medium">
              {displayText.startsWith('> ') ? displayText.slice(2) : displayText}
            </span>
            <span
              className={`inline-block w-2.5 h-4 ml-1 bg-[#c6ff00] shadow-[0_0_8px_rgba(198,255,0,0.6)] ${isTypingComplete ? 'animate-pulse' : 'opacity-100'
                }`}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Boot Telemetry Footnote */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8a928f]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
            Kernel initialised &bull; Ready
          </span>
          <span className="hidden sm:inline">Swapnil Patil System Architecture</span>
        </div>
      </div>
    </div>
  );
};

