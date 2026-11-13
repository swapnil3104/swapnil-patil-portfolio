import React from 'react';
import { useReducedMotion } from '@/hooks';

const TICKER_ITEMS = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
  'FastAPI',
  'React',
  'Three.js',
  'LangChain',
  'Figma',
  'Studio Squanta',
  'Altecht',
  'BytePro Labs',
  'SS Creation',
  'Muscle Build Nutrition',
  'Shubharambh Events',
  'Samarth Business Group',
  'Display Promotion',
  'Prerna Saree',
  'Student-X',
  'Spark',
];

export const TechMarquee: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-label="Technologies and Client Deployments Ticker"
      className="w-full border-y border-white/[0.08] bg-[#0c0e0d]/90 py-3.5 overflow-hidden select-none"
    >
      <div className="flex items-center">
        {/* Monospace Label Badge on Left */}
        <div className="flex-shrink-0 z-10 px-4 sm:px-6 bg-[#0c0e0d] flex items-center gap-2 text-xs font-mono text-typography-muted border-r border-white/[0.08] py-0.5">
          <span className="text-[#c6ff00]">//</span>
          <span className="font-medium whitespace-nowrap text-[#f2f4f3]">Building with &amp; Deploying for</span>
        </div>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden flex-1 group">
          {/* Subtle Fade Edges */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#0c0e0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#0c0e0d] to-transparent z-10 pointer-events-none" />

          {reducedMotion ? (
            /* Reduced Motion Static Scrollable Fallback */
            <div className="flex items-center gap-6 px-6 overflow-x-auto py-1 scrollbar-none">
              {TICKER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 flex-shrink-0">
                  <span className="text-xs sm:text-sm font-mono text-typography-body whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-typography-dim text-xs font-mono select-none">/</span>
                </div>
              ))}
            </div>
          ) : (
            /* Infinite Smooth Running Marquee with Pause on Hover */
            <div className="flex items-center whitespace-nowrap will-change-transform animate-marquee group-hover:[animation-play-state:paused]">
              {/* First loop instance */}
              {TICKER_ITEMS.map((item, idx) => (
                <div key={`orig-${idx}`} className="inline-flex items-center gap-6 px-3 flex-shrink-0">
                  <span className="text-xs sm:text-sm font-mono text-[#d4d8d6] hover:text-[#c6ff00] transition-colors whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-[#4f5854] text-xs font-mono select-none">/</span>
                </div>
              ))}
              {/* Second loop instance for seamless repetition */}
              {TICKER_ITEMS.map((item, idx) => (
                <div key={`dup-${idx}`} className="inline-flex items-center gap-6 px-3 flex-shrink-0" aria-hidden="true">
                  <span className="text-xs sm:text-sm font-mono text-[#d4d8d6] hover:text-[#c6ff00] transition-colors whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-[#4f5854] text-xs font-mono select-none">/</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

