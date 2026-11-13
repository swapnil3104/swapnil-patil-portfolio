import React, { useState } from 'react';
import { ProjectConsultant } from '@/types';
import { ExternalLinkIcon, StatusDot, ShieldCheckIcon } from '@/components/icons';
import { ClientVisual } from './ClientVisual';

interface ClientCardProps {
  client: ProjectConsultant;
  index: number;
  onOpenDetails: (client: ProjectConsultant) => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client, index, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);
  const sequenceStr = (index + 1).toString().padStart(2, '0');
  const hasImage = Boolean(client.image && !imageError);

  return (
    <article
      className="tech-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121614]/80 transition-all duration-300 hover:border-[#c6ff00]/40 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
      aria-labelledby={`client-title-${client.id}`}
    >
      {/* Top Banner / Visual Telemetry Graphic */}
      <div
        onClick={() => onOpenDetails(client)}
        className="relative cursor-pointer group/visual overflow-hidden"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(client);
          }
        }}
      >
        {hasImage ? (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#080b09] flex items-center justify-center">
            <img
              src={client.image}
              alt={`${client.name} commercial deployment`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d] via-black/25 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          </div>
        ) : (
          <ClientVisual id={client.id} />
        )}

        {/* Live Domain Status Overlay Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#f2f4f3]">
          <StatusDot pulse />
          <span className="font-semibold tracking-wider text-[#c6ff00]">VERIFIED LIVE</span>
          <span className="text-[#8a928f] hidden sm:inline">&bull;</span>
          <span className="text-[#8a928f] hidden sm:inline">{client.domainHost || client.name.toLowerCase().replace(/\s+/g, '')}</span>
        </div>

        {/* Sequence Monospace Tag */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#8a928f]">
          //{sequenceStr}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/visual:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-black/90 border border-[#c6ff00]/60 text-[#c6ff00] text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-1.5">
            <span>View Engagement Details</span>
            <span>&rarr;</span>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Industry & Category Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono text-[#8a928f] tracking-tight">
              {client.industry}
            </span>
            <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-[#8a928f]">
              {client.category}
            </span>
          </div>

          {/* Client Brand Name */}
          <h3
            id={`client-title-${client.id}`}
            className="text-lg sm:text-xl font-bold font-display text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors duration-200 flex items-center justify-between"
          >
            <span>{client.name}</span>
            {client.verified && (
              <span title="Verified Client Deployment" className="text-[#c6ff00] ml-1.5 inline-flex items-center">
                <ShieldCheckIcon size={16} />
              </span>
            )}
          </h3>

          {/* Scope of Engagement Pill */}
          <div className="mt-2 mb-3 inline-block">
            <span className="text-[11px] font-mono text-[#c6ff00] bg-[#c6ff00]/10 border border-[#c6ff00]/25 px-2.5 py-0.5 rounded-full">
              Scope: {client.scope}
            </span>
          </div>

          {/* Deliverables Summary */}
          <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed mb-4 line-clamp-3">
            {client.summary}
          </p>

          {/* Business Impact Box */}
          <div className="mb-5 p-3 rounded-xl bg-black/50 border border-[#c6ff00]/20 text-xs">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#c6ff00] uppercase tracking-wider font-semibold mb-1">
              <span>✦</span>
              <span>Business Impact &amp; Deliverable</span>
            </div>
            <p className="text-[#d4d8d6] leading-normal text-[11px] sm:text-xs">
              {client.businessImpact}
            </p>
          </div>
        </div>

        {/* Card Footer: Tech Stack Badges & Dual CTAs */}
        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.08]">
            {client.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#8a928f] group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs: Visit Live Site + View Case Study Details */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
            <a
              href={client.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#c6ff00]/10 hover:bg-[#c6ff00]/20 border border-[#c6ff00]/30 hover:border-[#c6ff00]/60 text-[#c6ff00] text-xs font-mono font-semibold transition-all duration-200"
              title={`Visit live production site for ${client.name}`}
            >
              <span>Visit Live</span>
              <ExternalLinkIcon size={12} />
            </a>

            <button
              type="button"
              onClick={() => onOpenDetails(client)}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#f2f4f3] text-xs font-mono font-medium transition-all duration-200"
              title={`View architectural deep-dive for ${client.name}`}
            >
              <span>Scope Details &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
