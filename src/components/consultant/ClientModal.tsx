import React, { useEffect, useRef } from 'react';
import { ProjectConsultant } from '@/types';
import { XIcon, ExternalLinkIcon, StatusDot, CheckIcon, ShieldCheckIcon } from '@/components/icons';
import { ClientVisual } from './ClientVisual';

interface ClientModalProps {
  client: ProjectConsultant | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ClientModal: React.FC<ClientModalProps> = ({ client, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !client) return null;

  const engagement = client.engagement;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultant-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0e1210] border border-white/15 shadow-2xl text-typography-body flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview Graphic */}
        <div className="relative">
          {client.image ? (
            <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-[#080b09]">
              <img
                src={client.image}
                alt={`${client.name} commercial preview`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1210] via-black/30 to-black/20 pointer-events-none" />
            </div>
          ) : (
            <ClientVisual id={client.id} className="h-48 sm:h-56" />
          )}

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-typography-muted hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-emerald"
            aria-label="Close client details modal"
          >
            <XIcon size={18} />
          </button>

          {/* Verification Badge */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-typography-headline">
            <StatusDot pulse />
            <span className="text-emerald-400 font-semibold">PRODUCTION VERIFIED</span>
            <span className="text-typography-dim">&bull;</span>
            <span className="text-typography-dim">{client.domainHost || client.name}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-6">
          {/* Title & Scope Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-typography-dim mb-1">
                <span>{client.industry}</span>
                <span>&bull;</span>
                <span className="text-accent-emerald">{client.category}</span>
              </div>
              <h2
                id="consultant-modal-title"
                className="text-2xl sm:text-3xl font-bold text-typography-headline flex items-center gap-2"
              >
                <span>{client.name}</span>
                {client.verified && (
                  <span title="Verified Client Engagement" className="text-accent-emerald">
                    <ShieldCheckIcon size={20} />
                  </span>
                )}
              </h2>
              <p className="text-xs font-mono text-accent-emerald mt-1">
                Role: {engagement?.role || 'Technical Consultant & Frontend Architect'}
              </p>
            </div>

            <a
              href={client.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent-emerald hover:bg-accent-hover text-black font-semibold text-xs font-mono tracking-tight transition-all shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] shrink-0"
            >
              <span>Visit Live Website</span>
              <ExternalLinkIcon size={14} />
            </a>
          </div>

          {/* Engagement Overview & Summary */}
          <div>
            <h3 className="text-xs font-mono text-typography-headline uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-accent-emerald">//</span>
              <span>Engagement Overview & Scope</span>
            </h3>
            <p className="text-sm text-typography-body leading-relaxed">
              {client.summary}
            </p>
          </div>

          {/* Measured Business Impact & Key Metrics */}
          {client.metrics && client.metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-typography-headline uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="text-accent-emerald">//</span>
                <span>Verified Business Outcomes & Performance</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {client.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-lg bg-black/40 border border-accent-emerald/20 flex flex-col justify-between"
                  >
                    <div className="text-[11px] font-mono text-typography-dim">{m.label}</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-accent-emerald my-1">
                      {m.value}
                    </div>
                    {m.detail && (
                      <div className="text-[10px] text-typography-muted">{m.detail}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {engagement?.architectureHighlights && (
            <div>
              <h3 className="text-xs font-mono text-typography-headline uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="text-accent-emerald">//</span>
                <span>Architecture & Engineering Highlights</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-typography-muted">
                {engagement.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-accent-emerald font-mono text-xs mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Deliverables */}
          {client.deliverables && client.deliverables.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-typography-headline uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="text-accent-emerald">//</span>
                <span>Production Deliverables</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {client.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-xs"
                  >
                    <span className="text-accent-emerald shrink-0">
                      <CheckIcon size={14} />
                    </span>
                    <span className="text-typography-body">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Matrix */}
          <div>
            <h3 className="text-xs font-mono text-typography-headline uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-accent-emerald">//</span>
              <span>Technology & Platform Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {client.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-typography-headline text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-typography-dim">
          <div className="flex items-center gap-2">
            <span>Direct Client Deployment</span>
            <span>&bull;</span>
            <span className="text-accent-emerald">Verified In Production</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-typography-dim text-[11px]">Press ESC to close</span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-white/5 hover:bg-white/10 text-typography-body hover:text-white transition-colors border border-white/10"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientModal;


