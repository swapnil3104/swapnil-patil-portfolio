import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 ${className}`}>
      <div className="max-w-2xl">
        <div className="mono-eyebrow mb-3">
          <span className="text-[#c6ff00]">//</span>
          <span className="text-[#8a928f]">{eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#f2f4f3] leading-[1.05]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base sm:text-lg text-[#8a928f] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};
