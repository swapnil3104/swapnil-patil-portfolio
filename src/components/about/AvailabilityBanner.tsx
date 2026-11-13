import React from 'react';
import {
  StatusDot,
  MapPinIcon,
  DownloadIcon,
  GitHubIcon,
  ExternalLinkIcon,
  BriefcaseIcon,
} from '@/components/icons';
import { trackEvent } from '@/utils/analytics';

export const AvailabilityBanner: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.03] border border-white/10 backdrop-blur-md shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Status & Location */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/25 text-[#c6ff00] text-xs font-mono font-medium">
              <StatusDot pulse={true} />
              <span>Available for Hire &amp; Select Consulting</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#8a928f] text-xs font-mono">
              <MapPinIcon size={12} className="text-[#c6ff00]" />
              <span>Pune, Maharashtra, India</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#f2f4f3] font-medium leading-relaxed">
            Open to Full-Time AI/ML &amp; Software Engineering Roles &bull; Available for Select Client Consulting &amp; Architecture Audits
          </p>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0 pt-1 md:pt-0">
          {/* Download Resume Button */}
          <a
            href="/Swapnil_Patil_Resume1.pdf"
            download="Swapnil_Patil_Resume.pdf"
            onClick={() => trackEvent('download_resume', { location: 'about_availability_banner' })}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c6ff00] text-black text-xs font-mono font-semibold transition-all duration-200 hover:bg-[#d4ff00] hover:shadow-lg hover:shadow-[#c6ff00]/25 hover:-translate-y-0.5 active:translate-y-0"
            title="Download verified resume (PDF)"
          >
            <DownloadIcon size={14} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/swapnil3104"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
            title="View public repositories on GitHub"
          >
            <GitHubIcon size={14} className="text-[#8a928f] group-hover:text-white transition-colors" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLinkIcon size={11} className="text-[#8a928f] group-hover:text-[#c6ff00]" />
          </a>

          {/* Get in Touch */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
            title="Jump to contact channels"
          >
            <BriefcaseIcon size={14} className="text-[#c6ff00]" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
