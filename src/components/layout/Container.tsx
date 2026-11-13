import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

