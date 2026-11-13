import React from 'react';
import { ServiceOffering } from '@/types';
import {
  ClockIcon,
  CheckIcon,
  ChevronRightIcon,
  CpuIcon,
  CodeIcon,
  PaletteIcon,
  BriefcaseIcon,
  SparklesIcon,
} from '@/components/icons';

interface ServiceCardProps {
  service: ServiceOffering;
  onOpenDetails: (service: ServiceOffering) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-cv-systems':
        return <CpuIcon size={20} className="text-[#c6ff00]" />;
      case 'fullstack-web':
        return <CodeIcon size={20} className="text-[#c6ff00]" />;
      case 'uiux-design-systems':
        return <PaletteIcon size={20} className="text-[#c6ff00]" />;
      case 'tech-consulting':
        return <BriefcaseIcon size={20} className="text-[#c6ff00]" />;
      default:
        return <SparklesIcon size={20} className="text-[#c6ff00]" />;
    }
  };

  return (
    <article
      className="tech-card group flex flex-col justify-between p-6 sm:p-7 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121614]/80 transition-all duration-300 hover:border-[#c6ff00]/40 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
      aria-label={`Service Offering: ${service.title}`}
    >
      <div>
        {/* Top Header: Icon, Scope & Timeline Pill */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#c6ff00]/10 border border-[#c6ff00]/25 text-[#c6ff00] shrink-0 group-hover:scale-105 transition-transform">
            {getIcon(service.id)}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#f2f4f3]">
            <ClockIcon size={12} className="text-[#c6ff00]" />
            <span>{service.timeline}</span>
          </div>
        </div>

        {/* Eyebrow Scope */}
        <div className="text-[11px] font-mono text-[#c6ff00] mb-2 tracking-wide font-semibold">
          // {service.scope}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors mb-2.5 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Ideal For Badge */}
        {service.idealFor && (
          <div className="mb-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#8a928f]">
            <span className="text-[#f2f4f3] font-semibold">Ideal For:</span>
            <span>{service.idealFor}</span>
          </div>
        )}

        {/* Core Deliverables Checklist */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
          <div className="text-[10px] font-mono text-[#8a928f] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <SparklesIcon size={11} className="text-[#c6ff00]" />
            <span>Key Engineering Deliverables</span>
          </div>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#d4d8d6]">
              <div className="p-0.5 rounded bg-[#c6ff00]/15 text-[#c6ff00] mt-0.5 shrink-0">
                <CheckIcon size={11} />
              </div>
              <span className="leading-snug text-xs">{item}</span>
            </div>
          ))}
        </div>

        {/* Technology Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.08] text-[#8a928f]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#f2f4f3] hover:text-[#c6ff00] text-xs font-mono transition-colors"
        >
          <span>Workflow &amp; Stages</span>
          <ChevronRightIcon size={13} />
        </button>

        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#c6ff00]/10 hover:bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30 hover:border-[#c6ff00] text-xs font-mono font-semibold transition-all"
        >
          <span>Inquire Scope ↗</span>
        </a>
      </div>
    </article>
  );
};
