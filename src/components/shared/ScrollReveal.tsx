import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        filter: 'blur(0px)',
        transition: baseTransition,
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 28px, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translate3d(0, -28px, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-left':
        return {
          opacity: 0,
          transform: 'translate3d(28px, 0, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'fade-right':
        return {
          opacity: 0,
          transform: 'translate3d(-28px, 0, 0)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'scale':
        return {
          opacity: 0,
          transform: 'scale(0.94)',
          filter: 'blur(0px)',
          transition: baseTransition,
        };
      case 'blur':
        return {
          opacity: 0,
          transform: 'translate3d(0, 16px, 0)',
          filter: 'blur(8px)',
          transition: baseTransition,
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 28px, 0)',
          transition: baseTransition,
        };
    }
  };

  return (
    <Component
      ref={ref}
      className={`scroll-reveal will-change-transform ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </Component>
  );
};

