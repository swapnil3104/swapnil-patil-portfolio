import { useEffect } from 'react';

/**
 * Universal Scroll Reveal Observer
 * Automatically detects elements with `.scroll-reveal` or `[data-reveal]`
 * and adds `.is-revealed` when they scroll into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: make everything visible immediately
      document.querySelectorAll(
        '.scroll-reveal, [data-reveal], .sh-fade-up, .tech-card, .sh-editorial-card'
      ).forEach((el) => {
        el.classList.add('is-revealed', 'is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed', 'is-visible');

            // If it's a stagger container, stagger its direct children
            if (entry.target.hasAttribute('data-stagger')) {
              const children = entry.target.children;
              Array.from(children).forEach((child, index) => {
                const htmlChild = child as HTMLElement;
                htmlChild.style.transitionDelay = `${index * 85}ms`;
                htmlChild.classList.add('is-revealed', 'is-visible');
              });
            }

            // Once revealed, unobserve to keep DOM performant
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.scroll-reveal, [data-reveal], .sh-fade-up, .tech-card, .sh-editorial-card, [data-stagger]'
      );
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Re-observe if dynamic content renders
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
