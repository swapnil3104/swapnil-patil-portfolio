import React from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import { AboutEditorial } from './AboutEditorial';
import { PrinciplesList } from './PrinciplesList';
import { TimelineJourney } from './TimelineJourney';
import { AvailabilityBanner } from './AvailabilityBanner';

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" className="relative">
      {/* TASK-701: Section Header */}
      <SectionHeader
        eyebrow="05 About & Engineering Journey"
        title="Engineering intelligent systems with creative execution."
        description="Bridging applied machine learning research, robust software engineering, and disciplined UI/UX design. Grounded in academic rigor at ADCET, validated across 11+ commercial client deployments, and driven by continuous open-source inquiry."
      />

      {/* TASK-704: Live Status & Availability Banner */}
      <div className="mb-10 sm:mb-12">
        <AvailabilityBanner />
      </div>

      {/* Two-Column Editorial & Journey Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column (6 cols): Editorial Bio, Stats & Core Principles */}
        <div className="lg:col-span-6 space-y-8">
          <AboutEditorial />
          <PrinciplesList />
        </div>

        {/* Right Column (6 cols): Chronological Milestones Timeline */}
        <div className="lg:col-span-6">
          <TimelineJourney />
        </div>
      </div>
    </SectionWrapper>
  );
};

