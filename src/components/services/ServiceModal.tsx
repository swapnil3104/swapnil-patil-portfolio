import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { ServiceOffering } from '@/types';
import {
  XIcon,
  ExternalLinkIcon,
  CheckIcon,
  ClockIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@/components/icons';
import { useModalDialog } from '@/hooks';

interface ServiceModalProps {
  service: ServiceOffering | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { dialogRef } = useModalDialog<HTMLDivElement>({
    isOpen: isOpen && !!service,
    onClose,
    initialFocusRef: closeButtonRef,
  });

  if (!isOpen || !service || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative my-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0c0f0d] border border-white/15 shadow-2xl text-typography-body flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-typography-muted hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-emerald"
          aria-label="Close service modal"
        >
          <XIcon size={18} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-5 mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald">
              {service.badge || service.scope}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] border border-white/10 text-typography-muted">
              <ClockIcon size={12} className="text-accent-emerald" />
              <span>{service.timeline}</span>
            </span>
            {service.engagementModel && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-typography-dim">
                {service.engagementModel}
              </span>
            )}
          </div>

          <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-typography-headline">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-typography-muted mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* 4-Stage Delivery Workflow Timeline */}
        {service.workflowStages && service.workflowStages.length > 0 && (
          <div className="space-y-4 mb-6">
            <h4 className="text-xs font-mono text-accent-emerald uppercase tracking-wider flex items-center gap-1.5">
              <SparklesIcon size={13} />
              <span>// 4-Stage Delivery Lifecycle & Engineering Sprints</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.workflowStages.map((stage) => (
                <div
                  key={stage.stage}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-accent-emerald/15 border border-accent-emerald/30 text-accent-emerald text-[10px] font-mono font-bold flex items-center justify-center">
                      {stage.stage}
                    </span>
                    <h5 className="text-xs font-bold text-typography-headline">
                      {stage.title}
                    </h5>
                  </div>
                  <p className="text-[11px] text-typography-muted leading-relaxed pl-7">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables List */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono text-typography-dim uppercase tracking-wider">
            // Complete Deliverable Checklist
          </h4>
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04] space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-typography-body">
                <div className="p-0.5 rounded bg-accent-emerald/15 text-accent-emerald mt-0.5 shrink-0">
                  <CheckIcon size={12} />
                </div>
                <span className="leading-snug text-typography-headline">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SLAs & Quality Commitments */}
        <div className="p-4 rounded-xl bg-accent-emerald/[0.02] border border-accent-emerald/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon size={18} className="text-accent-emerald shrink-0" />
            <div>
              <div className="text-xs font-bold text-typography-headline">Direct Engineering Transparency</div>
              <div className="text-[11px] text-typography-muted font-mono">
                Daily git commits &bull; Documented APIs &bull; 0 Technical Debt Handoff
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald font-semibold uppercase">
            100% On-Time SLA
          </span>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-typography-muted hover:text-white text-xs font-mono transition-colors"
          >
            Close Overview
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-emerald hover:bg-emerald-400 text-bg-primary font-bold text-xs font-mono transition-all shadow-lg shadow-accent-emerald/20"
          >
            <span>Inquire About This Service</span>
            <ExternalLinkIcon size={13} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ServiceModal;

