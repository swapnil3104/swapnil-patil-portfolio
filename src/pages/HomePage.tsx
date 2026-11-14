import React from 'react';
import { HeroSection, NumbersSection, StackKeyboard } from '@/components/hero';
import { WorkSection } from '@/components/work';
import { ConsultantSection } from '@/components/consultant';
import { UIUXSection } from '@/components/uiux';
import { ServicesSection } from '@/components/services';
import { AboutSection } from '@/components/about';
import { LabSection } from '@/components/lab';
import { ContactSection } from '@/components/contact';
import { useRouter } from '@/hooks/useRouter';
import { ArrowRightIcon, SparklesIcon, TerminalIcon } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <>
      {/* Section 00: Hero & Foundation Section with Interactive Portrait, Telemetry & Ticker */}
      <HeroSection />

      {/* Soren Hale Signature Section: Full-Bleed High-Voltage Numbers Section */}
      <NumbersSection />

      {/* Section 01: Work (#work) — Core Engineering & AI/ML Projects Grid */}
      <WorkSection />

      {/* Soren Hale Editorial Work Callout Card */}
      <section className="py-8 bg-[#0c0e0d] border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c6ff00]/[0.02] via-transparent to-[#c6ff00]/[0.02] pointer-events-none" />
        <div className="layout-container relative z-10 scroll-reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-all duration-300 group">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>Editorial Case Studies</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Explore all 28 projects with before → after metric diffs
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Browse our dedicated editorial Work directory featuring live performance benchmarks, side-by-side metric transformations, and category filters for AI/ML, commercial client builds, and UI/UX prototypes.
              </p>
            </div>
            <a
              href="/work"
              onClick={(e) => handleLinkClick(e, '/work')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.25)] hover:shadow-[0_0_30px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0"
            >
              <span>View Dedicated /work Page</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Soren Hale Signature Section: The Stack 16-Key Mechanical Keyboard Matrix */}
      <StackKeyboard />

      {/* Section 02: Independent Consultant (#consultant) — 11 Commercial Client Deployments */}
      <ConsultantSection />

      {/* Section 03: UI/UX Design (#ui-ux) — 5 Figma Systems, Prototypes & Case Studies */}
      <UIUXSection />

      {/* Section 04: Services & Capabilities (#services / #expertise) */}
      <ServicesSection />

      {/* Section 05: About & Journey (#about / #journey) */}
      <AboutSection />

      {/* Soren Hale Editorial About Callout Card */}
      <section className="py-8 bg-[#0c0e0d] border-y border-white/[0.06] relative overflow-hidden">
        <div className="layout-container relative z-10 scroll-reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-all duration-300 group">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Deep Dive Narrative</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Discover the 3-part story, 6 core principles & code reviews
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Read the comprehensive engineering journey from Kolhapur to medical AI research grants, client deployments, and design philosophy on the dedicated About page.
              </p>
            </div>
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/[0.2] hover:border-[#c6ff00] bg-white/[0.05] hover:bg-[#c6ff00] hover:text-black text-white font-mono font-medium text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0"
            >
              <span>Explore Full /about Story</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 06: Lab (#lab) — Phase 8: Lab, Learning Journeys & Technical Experiments */}
      <LabSection />

      {/* Section 07: Contact & Conversion (#contact) — Phase 9 */}
      <ContactSection />
    </>
  );
};

export default HomePage;
