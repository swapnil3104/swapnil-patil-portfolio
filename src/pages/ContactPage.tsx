import React from 'react';
import { ConversionBanner } from '@/components/contact/ConversionBanner';
import { ContactChannels } from '@/components/contact/ContactChannels';
import { ContactForm } from '@/components/contact/ContactForm';
import { SparklesIcon, StatusDot } from '@/components/icons';
import { useCountUp } from '@/hooks';

export const ContactPage: React.FC = () => {
  const responseTimeHours = useCountUp({ end: 24, duration: 1000 });
  const clientSatisfactionPct = useCountUp({ end: 100, duration: 1200 });

  return (
    <div className="relative">
      {/* Background Architectural Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> Direct Dispatch &amp; Inquiries
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              Have an ambitious project or role?{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                Let&apos;s talk.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Open to discussing full-time software engineering roles, applied AI/ML initiatives, technical consulting engagements, and design system architectures. Responses dispatched within 24 hours.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Target Response
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                &lt;{responseTimeHours}h
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Client Satisfaction
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {clientSatisfactionPct}%
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Availability
              </div>
              <div className="flex items-center gap-2 mt-1">
                <StatusDot pulse />
                <span className="font-mono text-sm sm:text-lg text-[#c6ff00] font-semibold">
                  Q1/Q2 Roles
                </span>
              </div>
            </div>
          </div>

          {/* High-Impact Conversion Banner */}
          <div className="mb-12 sm:mb-16">
            <ConversionBanner />
          </div>

          {/* Two-Column Responsive Layout: Channels & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (5 cols): Verified Channels & Direct Access */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                  <SparklesIcon size={13} />
                  <span>Direct Communication Lines</span>
                </div>
                <h2 className="font-display font-bold text-2xl text-white">
                  Verified Contact Channels
                </h2>
                <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed">
                  Choose your preferred medium. For formal RFPs or hiring managers, direct email and LinkedIn provide the fastest turnaround.
                </p>
              </div>

              <ContactChannels />
            </div>

            {/* Right Column (7 cols): Contact Form with Validation & Feedback States */}
            <div className="lg:col-span-7">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
                  <span>Interactive Dispatch Terminal</span>
                </div>
                <h2 className="font-display font-bold text-2xl text-white">
                  Send a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed">
                  Fill in your requirements and timeline. The form dispatches directly to my primary communication channel.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

