import React from 'react';
import { HeroEditorial } from './HeroEditorial';
import { InteractivePortrait } from './InteractivePortrait';
import { TechMarquee } from './TechMarquee';
import { ProfessionalMetadataStrip } from './ProfessionalMetadataStrip';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" aria-label="Hero Section" className="relative w-full pt-6 sm:pt-10 lg:pt-16 pb-0 overflow-hidden">
      {/* Background Architectural Grid Pattern & Atmospheric Ambient Aura */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-[#c6ff00]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-[#c6ff00]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Two-Column Asymmetric Hero Grid */}
      <div className="layout-container relative z-10 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column (60% on Desktop / 7 cols) */}
          <div className="lg:col-span-7">
            <HeroEditorial />
          </div>

          {/* Right Column (40% on Desktop / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none flex flex-col items-center">
              {/* Interactive Shader/Canvas Portrait */}
              <InteractivePortrait />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Continuous Marquee & Metadata Bar */}
      <TechMarquee />
      <ProfessionalMetadataStrip />
    </section>
  );
};

