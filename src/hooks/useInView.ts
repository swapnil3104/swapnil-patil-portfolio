import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If IntersectionObserver is not supported, default to true
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}

