import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Universal Scroll Reveal Observer
 * Automatically detects elements with `.scroll-reveal` or `[data-reveal]`
 * and adds `.is-revealed` when they scroll into view.
 */
export function useScrollReveal() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealSelector =
      '.scroll-reveal, [data-reveal], .sh-fade-up, .tech-card, .sh-editorial-card, [data-stagger]';

    // If reduced motion is requested or IntersectionObserver not supported, reveal all immediately
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(revealSelector).forEach((el) => {
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
                htmlChild.style.transitionDelay = `${index * 75}ms`;
                htmlChild.classList.add('is-revealed', 'is-visible');
              });
            }

            // Once revealed, unobserve to free resources
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
      const elements = document.querySelectorAll(revealSelector);
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Batched re-observe on DOM changes via RAF to avoid layout thrashing
    let rafId: number | null = null;
    let isScheduled = false;

    const mutationObserver = new MutationObserver(() => {
      if (!isScheduled) {
        isScheduled = true;
        rafId = requestAnimationFrame(() => {
          observeElements();
          isScheduled = false;
        });
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);
}
