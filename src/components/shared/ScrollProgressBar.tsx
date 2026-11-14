import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, TerminalIcon } from '@/components/icons';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('INIT');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setShowBackToTop(window.scrollY > 400);
      }

      // Determine active section name for telemetry
      const sections = ['home', 'work', 'consultant', 'ui-ux', 'services', 'about', 'lab', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Top Neon Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-white/[0.04] z-50 pointer-events-none">
        <div
          className="h-full bg-[#c6ff00] transition-[width] duration-75 ease-out shadow-[0_0_12px_#c6ff00,0_0_24px_rgba(198,255,0,0.8)] relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing cursor head at the edge of the bar */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c6ff00] shadow-[0_0_10px_#c6ff00] translate-x-1" />
        </div>
      </div>

      {/* Floating Bottom Telemetry & Quick Navigation HUD */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 transition-all duration-300 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
        }`}
      >
        {/* Telemetry Pill */}
        <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#121614]/90 backdrop-blur-md border border-white/[0.12] shadow-xl text-[11px] font-mono text-[#8a928f]">
          <TerminalIcon size={12} className="text-[#c6ff00]" />
          <span className="text-[#c6ff00] font-semibold">// {activeSection}</span>
          <span className="text-white/[0.2]">|</span>
          <span className="text-[#f2f4f3] tabular-nums font-medium">{Math.round(scrollProgress)}%</span>
        </div>

        {/* Scroll To Top Action Pill */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#121614]/90 backdrop-blur-md border border-white/[0.15] hover:border-[#c6ff00] text-[#f2f4f3] hover:text-[#c6ff00] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(198,255,0,0.3)] focus-visible:outline-none"
        >
          <ArrowUpIcon size={15} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </>
  );
};
