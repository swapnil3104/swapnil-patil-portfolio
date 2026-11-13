import React from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import { ConversionBanner } from './ConversionBanner';
import { ContactChannels } from './ContactChannels';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="relative">
      {/* Section Header */}
      <SectionHeader
        eyebrow="07 Contact & Conversion"
        title="Have an ambitious project or role? Let’s talk."
        description="Open to discussing full-time software engineering roles, applied AI/ML initiatives, technical consulting engagements, and design system architectures."
      />

      {/* TASK-901: High-Impact Conversion Banner */}
      <div className="mb-10 sm:mb-12">
        <ConversionBanner />
      </div>

      {/* Two-Column Responsive Layout: Channels & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column (5 cols): Verified Channels & Direct Access */}
        <div className="lg:col-span-5 space-y-6">
          <ContactChannels />
        </div>

        {/* Right Column (7 cols): Contact Form with Validation & Feedback States */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

