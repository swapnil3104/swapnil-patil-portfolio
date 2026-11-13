import React, { useState } from 'react';
import { ProjectUIUX } from '@/types';
import {
  FigmaIcon,
  SmartphoneIcon,
  MonitorIcon,
  LayersIcon,
  EyeIcon,
} from '@/components/icons';
import { DesignVisual } from './DesignVisual';

interface DesignCardProps {
  design: ProjectUIUX;
  onOpenDetails: (design: ProjectUIUX) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);
  const isMobile = design.category === 'Mobile App';
  const hasImage = Boolean(design.image && !imageError);

  return (
    <article
      className="tech-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121614]/80 transition-all duration-300 hover:border-[#c6ff00]/40 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
      aria-label={`Design Case Study: ${design.title}`}
    >
      {/* Top Section: Visual Mockup & Device Badge */}
      <div
        onClick={() => onOpenDetails(design)}
        className="relative cursor-pointer group/visual overflow-hidden"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(design);
          }
        }}
      >
        {hasImage ? (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#080b09] flex items-center justify-center">
            <img
              src={design.image}
              alt={`${design.title} design system preview`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover/visual:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d] via-black/25 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          </div>
        ) : (
          <DesignVisual id={design.id} />
        )}

        {/* Floating Platform Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#f2f4f3]">
          {isMobile ? (
            <SmartphoneIcon size={12} className="text-[#c6ff00]" />
          ) : (
            <MonitorIcon size={12} className="text-[#c6ff00]" />
          )}
          <span>{design.platform.split('&')[0].trim()}</span>
        </div>

        {/* Screen Count Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] backdrop-blur-md font-semibold">
          {design.screenCount || 'Interactive Prototype'}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/visual:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-black/90 border border-[#c6ff00]/60 text-[#c6ff00] text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-1.5">
            <span>Explore Design System</span>
            <span>&rarr;</span>
          </span>
        </div>
      </div>

      {/* Middle Section: Content & Design System Specs */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Domain & Badge Tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-mono text-[#c6ff00] tracking-wide">
              // {design.domain}
            </span>
            {design.badge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#8a928f] border border-white/[0.06]">
                {design.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold font-display text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors mb-2 tracking-tight">
            {design.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#8a928f] leading-relaxed line-clamp-3 mb-4">
            {design.description}
          </p>

          {/* Key Screens List (First 3) */}
          <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
            <div className="text-[10px] font-mono text-[#8a928f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <LayersIcon size={11} className="text-[#c6ff00]" />
              <span>Key Interaction Screens</span>
            </div>
            {design.keyScreens.slice(0, 3).map((screen, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#d4d8d6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] shrink-0" />
                <span className="truncate">{screen}</span>
              </div>
            ))}
          </div>

          {/* Design System Foundations Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {design.designSystemTokens ? (
              design.designSystemTokens.slice(0, 3).map((tok, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.08] text-[#8a928f]"
                  title={`${tok.label}: ${tok.value}`}
                >
                  {tok.value.split('(')[0].trim()}
                </span>
              ))
            ) : (
              design.features.slice(0, 2).map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.08] text-[#8a928f]"
                >
                  {feat}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-4">
          <button
            type="button"
            onClick={() => onOpenDetails(design)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#f2f4f3] hover:text-[#c6ff00] text-xs font-mono transition-colors"
          >
            <EyeIcon size={13} />
            <span>Design Specs</span>
          </button>

          <a
            href={design.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#c6ff00]/10 hover:bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30 hover:border-[#c6ff00] text-xs font-mono font-semibold transition-all"
            title={`Open ${design.title} in Figma`}
          >
            <FigmaIcon size={13} />
            <span>Figma ↗</span>
          </a>
        </div>
      </div>
    </article>
  );
};
