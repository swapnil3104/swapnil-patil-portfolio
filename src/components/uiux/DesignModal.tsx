import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ProjectUIUX } from '@/types';
import {
  XIcon,
  ExternalLinkIcon,
  FigmaIcon,
  CheckIcon,
  CopyIcon,
  PaletteIcon,
  LayoutIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@/components/icons';
import { DesignVisual } from './DesignVisual';
import { useModalDialog } from '@/hooks';

interface DesignModalProps {
  design: ProjectUIUX | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'overview' | 'tokens' | 'screens' | 'accessibility';

export const DesignModal: React.FC<DesignModalProps> = ({ design, isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [copied, setCopied] = useState(false);

  const { dialogRef } = useModalDialog<HTMLDivElement>({
    isOpen: isOpen && !!design,
    onClose,
    initialFocusRef: closeButtonRef,
  });

  // Reset tab when design changes or opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab('overview');
    }
  }, [design, isOpen]);

  if (!isOpen || !design || typeof document === 'undefined') return null;

  const caseStudy = design.caseStudy;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(design.figmaUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="design-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative my-auto w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-[#0c0f0d] border border-white/15 shadow-2xl text-typography-body flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview Graphic */}
        <div className="relative">
          {design.image ? (
            <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-[#080b09]">
              <img
                src={design.image}
                alt={`${design.title} design system preview`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0d] via-black/30 to-black/20 pointer-events-none" />
            </div>
          ) : (
            <DesignVisual id={design.id} className="h-48 sm:h-60" />
          )}

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-typography-muted hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-emerald"
            aria-label="Close design specifications modal"
          >
            <XIcon size={18} />
          </button>

          {/* Verification Badge */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-typography-headline">
            <span className="text-accent-emerald font-semibold flex items-center gap-1.5">
              <FigmaIcon size={13} />
              <span>FIGMA DESIGN SYSTEM</span>
            </span>
            <span className="text-typography-dim">&bull;</span>
            <span className="text-typography-dim">{design.platform}</span>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Header Title Zone */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald">
                  {design.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] border border-white/10 text-typography-muted">
                  {design.screenCount || 'Interactive Prototype'}
                </span>
              </div>
              <h3 id="design-modal-title" className="text-xl sm:text-2xl font-bold text-typography-headline">
                {design.title}
              </h3>
              <p className="text-xs sm:text-sm text-typography-muted mt-2 leading-relaxed">
                {design.description}
              </p>
            </div>

            {/* Direct Figma Button in Header */}
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyUrl}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-typography-muted hover:text-white transition-colors"
                title="Copy direct Figma link"
              >
                {copied ? <CheckIcon size={14} className="text-accent-emerald" /> : <CopyIcon size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Figma Link'}</span>
              </button>
              <a
                href={design.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent-emerald hover:bg-emerald-400 text-bg-primary font-semibold text-xs font-mono transition-colors shadow-lg shadow-accent-emerald/20"
              >
                <FigmaIcon size={14} />
                <span>Open in Figma</span>
                <ExternalLinkIcon size={13} />
              </a>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-1 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'text-accent-emerald border-b-2 border-accent-emerald font-semibold bg-accent-emerald/5'
                  : 'text-typography-muted hover:text-white'
              }`}
            >
              <SparklesIcon size={13} />
              <span>Overview & Problem</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tokens')}
              className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'tokens'
                  ? 'text-accent-emerald border-b-2 border-accent-emerald font-semibold bg-accent-emerald/5'
                  : 'text-typography-muted hover:text-white'
              }`}
            >
              <PaletteIcon size={13} />
              <span>Design System & Tokens</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('screens')}
              className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'screens'
                  ? 'text-accent-emerald border-b-2 border-accent-emerald font-semibold bg-accent-emerald/5'
                  : 'text-typography-muted hover:text-white'
              }`}
            >
              <LayoutIcon size={13} />
              <span>Key Screens & Flows</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('accessibility')}
              className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'accessibility'
                  ? 'text-accent-emerald border-b-2 border-accent-emerald font-semibold bg-accent-emerald/5'
                  : 'text-typography-muted hover:text-white'
              }`}
            >
              <ShieldCheckIcon size={13} />
              <span>A11y & Interactions</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {caseStudy ? (
                <>
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08]">
                    <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>// The Core User Problem & Friction Points</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-typography-headline leading-relaxed">
                      {caseStudy.userProblem}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent-emerald/[0.03] border border-accent-emerald/20">
                    <h4 className="text-xs font-mono text-accent-emerald uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>// UX Solution Architecture & Ergonomics</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-typography-body leading-relaxed">
                      {caseStudy.solutionArchitecture}
                    </p>
                  </div>
                </>
              ) : (
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08]">
                  <p className="text-xs sm:text-sm text-typography-body leading-relaxed">
                    {design.description}
                  </p>
                </div>
              )}

              {/* Core Features & Highlights */}
              <div>
                <h4 className="text-xs font-mono text-typography-dim uppercase tracking-wider mb-3">
                  // Design System Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {design.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                    >
                      <div className="p-1 rounded bg-accent-emerald/15 text-accent-emerald mt-0.5 shrink-0">
                        <CheckIcon size={12} />
                      </div>
                      <span className="text-xs text-typography-headline">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DESIGN SYSTEM & TOKENS */}
          {activeTab === 'tokens' && (
            <div className="space-y-5">
              {/* Token Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {design.designSystemTokens?.map((tok, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.08]">
                    <div className="text-[11px] font-mono text-accent-emerald mb-1">// {tok.label}</div>
                    <div className="text-xs font-semibold text-typography-headline">{tok.value}</div>
                  </div>
                ))}
              </div>

              {caseStudy?.designSystemSpec && (
                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-typography-muted uppercase mb-1">
                      Typography Hierarchy
                    </div>
                    <p className="text-xs text-typography-headline leading-relaxed">
                      {caseStudy.designSystemSpec.typography}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-typography-muted uppercase mb-1">
                      Spatial Layout & Grids
                    </div>
                    <p className="text-xs text-typography-headline leading-relaxed">
                      {caseStudy.designSystemSpec.gridSystem}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-typography-muted uppercase mb-1">
                      Color Tokens & Semantics
                    </div>
                    <p className="text-xs text-typography-headline leading-relaxed">
                      {caseStudy.designSystemSpec.colorSystem}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[11px] font-mono text-typography-muted uppercase mb-1">
                        Component Library
                      </div>
                      <p className="text-xs text-typography-headline">
                        {caseStudy.designSystemSpec.componentsCount}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[11px] font-mono text-typography-muted uppercase mb-1">
                        Auto-Layout 5.0
                      </div>
                      <p className="text-xs text-typography-headline">
                        {caseStudy.designSystemSpec.autoLayoutCompliance}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: KEY SCREENS & FLOWS */}
          {activeTab === 'screens' && (
            <div className="space-y-4">
              {caseStudy?.screensDetailed ? (
                <div className="space-y-3">
                  {caseStudy.screensDetailed.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h5 className="text-sm font-semibold text-typography-headline flex items-center gap-2">
                          <span className="font-mono text-xs text-accent-emerald">0{idx + 1}.</span>
                          <span>{screen.title}</span>
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {screen.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-typography-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-typography-body leading-relaxed mb-2">
                        <span className="text-typography-muted font-mono text-[11px]">Purpose: </span>
                        {screen.purpose}
                      </p>
                      <p className="text-xs text-accent-emerald leading-relaxed">
                        <span className="text-typography-dim font-mono text-[11px]">User Benefit: </span>
                        {screen.userBenefit}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {design.keyScreens.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center gap-2"
                    >
                      <span className="font-mono text-xs text-accent-emerald">0{idx + 1}.</span>
                      <span className="text-xs text-typography-headline">{screen}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ACCESSIBILITY & INTERACTIONS */}
          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              {/* Accessibility Points */}
              <div>
                <h4 className="text-xs font-mono text-typography-dim uppercase tracking-wider mb-3">
                  // Accessibility Standards (WCAG 2.1 AA Compliance)
                </h4>
                <div className="space-y-2.5">
                  {(caseStudy?.accessibilityHighlights || [
                    'Color contrast ratios >= 4.5:1 on all essential reading typography.',
                    'Minimum 44pt touch bounding targets on all interactive controls.',
                    'Clear semantic structure with keyboard focus states.',
                  ]).map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                    >
                      <div className="p-1 rounded bg-accent-emerald/15 text-accent-emerald mt-0.5 shrink-0">
                        <ShieldCheckIcon size={13} />
                      </div>
                      <span className="text-xs text-typography-headline leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prototype Interactions */}
              {caseStudy?.prototypeInteractions && (
                <div>
                  <h4 className="text-xs font-mono text-typography-dim uppercase tracking-wider mb-3">
                    // Interactive Prototype Micro-Behaviors
                  </h4>
                  <div className="space-y-2.5">
                    {caseStudy.prototypeInteractions.map((interaction, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                      >
                        <div className="p-1 rounded bg-cyan-500/15 text-cyan-400 mt-0.5 shrink-0">
                          <SparklesIcon size={13} />
                        </div>
                        <span className="text-xs text-typography-headline leading-relaxed">{interaction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Direct CTA Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-typography-muted">
              <span>Figma Community File Node:</span>
              <span className="text-accent-emerald font-semibold">{design.nodeId || '0-1'}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-typography-headline text-xs font-mono transition-colors"
              >
                Close Specs
              </button>
              <a
                href={design.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-accent-emerald hover:bg-emerald-400 text-bg-primary font-bold text-xs font-mono transition-colors shadow-lg shadow-accent-emerald/20"
              >
                <FigmaIcon size={14} />
                <span>Open Figma File</span>
                <ExternalLinkIcon size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DesignModal;

