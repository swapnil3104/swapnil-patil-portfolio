import { useState, useEffect } from 'react';

export function useScrollspy(sectionIds: string[], offset: number = 120): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Special check: at the top of the page, activate first section
      if (window.scrollY < 100) {
        if (sectionIds.length > 0) {
          setActiveSection(sectionIds[0]);
        }
        return;
      }

      // Check sections from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

