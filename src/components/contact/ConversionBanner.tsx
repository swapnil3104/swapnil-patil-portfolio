import React, { useState } from 'react';
import {
  StatusDot,
  MailIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  SparklesIcon,
} from '@/components/icons';
import { CONTACT_INFO, CONTACT_METRICS } from '@/data';
import { trackEvent } from '@/utils/analytics';

export const ConversionBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    trackEvent('copy_contact', { channel: 'email', location: 'conversion_banner' });
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#131715] to-[#0c0e0d] border border-white/[0.14] p-6 sm:p-8 md:p-10 shadow-2xl">
      {/* Subtle architectural ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#c6ff00]/10 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-[#c6ff00]/5 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        {/* Availability Eyebrow Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/25 text-[#c6ff00] font-mono text-xs max-w-full">
            <StatusDot pulse />
            <span className="font-semibold tracking-wide uppercase text-[10px] sm:text-[11px] truncate">
              Available for Q1/Q2 Roles &amp; Select Consulting
            </span>
          </div>

          <div className="font-mono text-[11px] text-[#8a928f] flex items-center gap-2 flex-wrap">
            <span className="truncate">Location: {CONTACT_INFO.location}</span>
            <span>·</span>
            <span className="text-[#f2f4f3] flex-shrink-0">{CONTACT_INFO.timezone}</span>
          </div>
        </div>

        {/* TASK-901: Headline & Copy */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#f2f4f3] tracking-tight leading-[1.05]">
            Have an ambitious project or role?{' '}
            <span className="text-[#c6ff00] drop-shadow-[0_0_24px_rgba(198,255,0,0.35)]">
              Let’s talk.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed max-w-xl font-normal">
            Open to discussing <strong className="text-[#f2f4f3] font-semibold">full-time engineering roles</strong>, applied AI/ML initiatives, technical consulting engagements, and design system architectures.
          </p>
        </div>

        {/* Action CTAs Cluster */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Primary Action: Send an Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Project%20%2F%20Role%20Inquiry%20-%20Swapnil%20Patil`}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-xs sm:text-sm font-mono tracking-tight transition-all duration-200 shadow-[0_0_24px_rgba(198,255,0,0.25)] hover:shadow-[0_0_32px_rgba(198,255,0,0.45)] hover:-translate-y-0.5"
          >
            <MailIcon size={16} className="text-black" />
            <span>Send an Email</span>
            <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>

          {/* Quick Copy Email Action */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address to clipboard"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#f2f4f3] text-xs font-mono transition-all duration-200 active:scale-95"
          >
            {copied ? (
              <>
                <CheckIcon size={14} className="text-[#c6ff00]" />
                <span className="text-[#c6ff00] font-semibold">Copied address!</span>
              </>
            ) : (
              <>
                <CopyIcon size={14} className="text-[#8a928f]" />
                <span>{CONTACT_INFO.email}</span>
              </>
            )}
          </button>

          {/* Download Verified Resume */}
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={CONTACT_INFO.resumeFilename}
            onClick={() => trackEvent('download_resume', { location: 'conversion_banner' })}
            title="Download Swapnil Patil Verified Resume (PDF)"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#c6ff00]/40 text-[#8a928f] hover:text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
          >
            <DownloadIcon size={14} className="text-[#c6ff00]" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Quick Confidence Metrics Ribbon */}
        <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
          {CONTACT_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 font-display font-bold text-lg sm:text-xl text-[#f2f4f3]">
                <span>{metric.value}</span>
                {idx === 0 && <SparklesIcon size={14} className="text-[#c6ff00]" />}
              </div>
              <div className="font-mono text-xs text-[#8a928f] uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[11px] text-[#8a928f] line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
