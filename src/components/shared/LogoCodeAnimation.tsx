import React, { useState, useEffect, useRef } from 'react';
import { StatusDot } from '@/components/icons';

const LOGO_VARIANTS = [
  { tagOpen: '<', name: 'Swapnil', dot: '.', ext: 'Patil', tagClose: ' />' },
  { tagOpen: '{', name: 'Swapnil', dot: ':', ext: ' "AI/ML"', tagClose: ' }' },
  { tagOpen: 'const ', name: 'Swapnil', dot: ' = ', ext: 'Dev', tagClose: ';' },
  { tagOpen: '[', name: 'Swapnil', dot: '.', ext: 'Vision', tagClose: ']' },
];

const GLYPHS = '<>{}[];:=+-_/\\*~#!?01';

interface LogoCodeAnimationProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export const LogoCodeAnimation: React.FC<LogoCodeAnimationProps> = ({
  onClick,
  className = '',
}) => {
  const [variantIndex, setVariantIndex] = useState(0);
  const [scrambleName, setScrambleName] = useState('Swapnil');
  const [isHovered, setIsHovered] = useState(false);
  const scrambleInterval = useRef<NodeJS.Timeout | null>(null);

  const currentVariant = LOGO_VARIANTS[variantIndex];

  // Function to run a quick cyber scramble effect on the name
  const triggerScramble = (targetText: string = 'Swapnil') => {
    let iteration = 0;
    const maxIterations = targetText.length * 3;

    if (scrambleInterval.current) clearInterval(scrambleInterval.current);

    scrambleInterval.current = setInterval(() => {
      setScrambleName(() =>
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      iteration++;
      if (iteration >= maxIterations) {
        setScrambleName(targetText);
        if (scrambleInterval.current) clearInterval(scrambleInterval.current);
      }
    }, 28);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    triggerScramble('Swapnil');
    // Rotate to next creative code representation
    setVariantIndex((prev) => (prev + 1) % LOGO_VARIANTS.length);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      if (scrambleInterval.current) clearInterval(scrambleInterval.current);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex items-center gap-2 font-mono text-sm sm:text-base py-1 px-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-[#c6ff00]/30 transition-all duration-300 focus-visible:outline-none select-none ${className}`}
      aria-label="Swapnil Patil — Return to Home"
      title="Click to navigate home (Interactive Code Logo)"
    >
      {/* Live System Radar Dot */}
      <StatusDot pulse />

      {/* Code Syntax Highlighted Brand String */}
      <span className="flex items-center tracking-tight font-mono transition-transform duration-200 group-hover:scale-[1.02]">
        {/* Opening Bracket / Tag */}
        <span className="text-[#c6ff00] font-bold transition-transform duration-200 group-hover:-translate-x-0.5">
          {currentVariant.tagOpen}
        </span>

        {/* First Name with Scramble Effect */}
        <span className="text-[#f2f4f3] font-bold group-hover:text-white transition-colors">
          {scrambleName}
        </span>

        {/* Punctuation / Operator */}
        <span className="text-[#c6ff00] mx-[1px] font-semibold">
          {currentVariant.dot}
        </span>

        {/* Last Name / Extension */}
        <span className="text-[#8a928f] group-hover:text-[#c6ff00] transition-colors">
          {currentVariant.ext}
        </span>

        {/* Closing Bracket / Tag */}
        <span className="text-[#c6ff00] font-bold transition-transform duration-200 group-hover:translate-x-0.5">
          {currentVariant.tagClose}
        </span>

        {/* Blinking Terminal Cursor */}
        <span className="inline-block w-1.5 h-3.5 bg-[#c6ff00] ml-1 shadow-[0_0_8px_#c6ff00] animate-pulse" />
      </span>

      {/* Subtle Scanline Shimmer Beam on Hover */}
      <span
        className={`absolute inset-0 rounded-lg pointer-events-none overflow-hidden transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c6ff00]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      </span>
    </button>
  );
};

