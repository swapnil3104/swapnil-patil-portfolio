import React from 'react';
import {
  TerminalIcon,
  GitHubIcon,
  ExternalLinkIcon,
  DownloadIcon,
  ArrowDownIcon,
} from '@/components/icons';
import { useCountUp } from '@/hooks';

export const HeroEditorial: React.FC = () => {
  const deployments = useCountUp({ end: 11, duration: 1200 });
  const projects = useCountUp({ end: 12, duration: 1400 });
  const figmaSystems = useCountUp({ end: 5, duration: 1000 });
  return (
    <div className="flex flex-col justify-center">
      {/* Monospace Eyebrow */}
      <div className="mono-eyebrow mb-4 sm:mb-6">
        <TerminalIcon size={15} className="text-[#c6ff00] flex-shrink-0" />
        <span className="text-xs sm:text-sm tracking-wide text-[#8a928f]">
          // AI/ML Engineer &middot; Computer Vision &middot; Python Developer &middot; Product Designer
        </span>
      </div>

      {/* Primary Headline with Soren Hale Signature High-Voltage Accent */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-[#f2f4f3] tracking-[-0.04em] leading-[0.98] mb-6 font-display">
        Building intelligent products{' '}
        <span className="text-[#c6ff00] drop-shadow-[0_0_24px_rgba(198,255,0,0.35)]">
          that solve real-world problems.
        </span>
      </h1>

      {/* Subheadline / Value Proposition */}
      <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
        Computer Science Engineer engineering end-to-end machine learning pipelines,
        real-time computer vision systems, and high-performance interactive web
        products with clean code and intuitive design.
      </p>

      {/* Hero Metrics Bar (<dl>) */}
      <dl className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121614]/85 backdrop-blur-md border border-white/[0.12] mb-8 sm:mb-10 shadow-xl">
        <div className="flex flex-col">
          <dt className="text-[11px] sm:text-xs text-[#8a928f] order-2 mt-1 font-mono">
            Commercial Deployments
          </dt>
          <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#c6ff00] tracking-tight order-1">
            {deployments}+
          </dd>
        </div>

        <div className="flex flex-col border-l border-white/[0.08] pl-3 sm:pl-4">
          <dt className="text-[11px] sm:text-xs text-[#8a928f] order-2 mt-1 font-mono">
            AI/ML &amp; OSS Projects
          </dt>
          <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#c6ff00] tracking-tight order-1">
            {projects}+
          </dd>
        </div>

        <div className="flex flex-col border-l border-white/[0.08] pl-3 sm:pl-4">
          <dt className="text-[11px] sm:text-xs text-[#8a928f] order-2 mt-1 font-mono">
            Figma UX Systems
          </dt>
          <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#c6ff00] tracking-tight order-1">
            {figmaSystems}+
          </dd>
        </div>
      </dl>

      {/* Action Button Group */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Primary CTA in Soren Hale Style: Solid Lime Pill with Circular Arrow Badge */}
        <a
          href="#work"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-xs sm:text-sm font-sans tracking-tight transition-all duration-200 shadow-[0_0_24px_rgba(198,255,0,0.25)] hover:shadow-[0_0_32px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00]"
        >
          <span>Explore My Work</span>
          <span className="w-6 h-6 rounded-full bg-black text-[#c6ff00] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowDownIcon size={12} />
          </span>
        </a>

        {/* Secondary GitHub Button: Subtle Ghost Pill */}
        <a
          href="https://github.com/swapnil3104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] text-[#f2f4f3] text-xs sm:text-sm font-sans font-medium transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <GitHubIcon size={16} />
          <span>GitHub Profile</span>
          <ExternalLinkIcon size={12} className="text-[#8a928f]" />
        </a>

        {/* Tertiary Action: Resume Download */}
        <a
          href="/Swapnil_Patil_Resume1.pdf"
          download="Swapnil_Patil_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Swapnil Patil's verified Resume (PDF)"
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/[0.1] hover:border-white/[0.2] text-[#8a928f] hover:text-[#f2f4f3] text-xs sm:text-sm font-sans transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <DownloadIcon size={15} />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};
