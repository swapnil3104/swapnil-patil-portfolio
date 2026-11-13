import React from 'react';

interface ProjectPlaceholderProps {
  category: string;
  title: string;
  index?: string;
  className?: string;
}

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({
  category,
  title,
  index = '01',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full aspect-[16/10] bg-bg-card border border-border-hairline rounded-lg overflow-hidden flex flex-col justify-between p-6 select-none group-hover:border-border-hover transition-colors ${className}`}
    >
      {/* Background Subtle Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Top Bar with Index & Category */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs text-typography-muted tracking-wider">
          // SYS_{index}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg-elevated border border-border-hairline text-accent-emerald">
          {category}
        </span>
      </div>

      {/* Center Schematic Art / Icon Badge */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
        <div className="w-12 h-12 rounded-full border border-border-hover bg-bg-elevated/70 flex items-center justify-center mb-3 text-accent-emerald shadow-inner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="font-sans text-xs text-typography-muted text-center max-w-[200px] line-clamp-1">
          {title}
        </p>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.05] text-[10px] font-mono text-typography-dim">
        <span>STATUS: PRODUCTION</span>
        <span>RES: 1080P_60</span>
      </div>
    </div>
  );
};

