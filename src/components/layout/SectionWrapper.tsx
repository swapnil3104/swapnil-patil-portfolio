import React from 'react';
import { Container } from './Container';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  hasTopBorder?: boolean;
  animateOnScroll?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  hasTopBorder = true,
  animateOnScroll = true,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 relative scroll-mt-20 ${
        hasTopBorder ? 'border-t border-white/[0.08]' : ''
      } ${className}`}
      {...props}
    >
      <Container className={`${animateOnScroll ? 'scroll-reveal' : ''} ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
};

