import React, { useEffect, useState } from 'react';
import { ProjectGitHub } from '@/types';
import { GitHubIcon, ExternalLinkIcon, XIcon, CopyIcon, CheckIcon, LayersIcon, CpuIcon, SparklesIcon } from '@/components/icons';
import { ProjectVisual } from './ProjectVisual';
import { useModalDialog } from '@/hooks';

interface ProjectModalProps {
  project: ProjectGitHub | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'overview' | 'architecture' | 'highlights' | 'metrics' | 'future';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [copiedClone, setCopiedClone] = useState(false);
  const [modalImageError, setModalImageError] = useState(false);
  const [triedModalOnlineFallback, setTriedModalOnlineFallback] = useState(false);

  const { dialogRef } = useModalDialog<HTMLDivElement>({
    isOpen: isOpen && !!project,
    onClose,
  });

  useEffect(() => {
    setModalImageError(false);
    setTriedModalOnlineFallback(false);
    if (isOpen) {
      setActiveTab('overview');
    }
  }, [project?.id, isOpen]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy;
  const cloneCommand = `git clone ${project.repoUrl}.git`;

  const handleCopyClone = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
      setCopiedClone(true);
      setTimeout(() => setCopiedClone(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f1210] border border-white/15 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden text-typography-body z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 border-b border-white/[0.08] bg-[#131715]/70 backdrop-blur-md">
          <div className="pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
              <span className="text-accent-emerald font-semibold">// {project.index}</span>
              <span className="text-typography-muted">·</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.06] text-typography-headline">
                {project.category}
              </span>
              <span className="text-typography-muted">·</span>
              <span className="text-typography-dim">{project.visibility}</span>
              <span className="text-typography-muted">·</span>
              <span className="text-typography-dim">branch: {project.branch}</span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-typography-headline">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-typography-muted hover:text-white transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Action Bar / Clone Bar */}
        <div className="px-6 py-3 bg-[#0a0c0b] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-typography-muted truncate max-w-md">
            <span className="text-accent-emerald">$</span>
            <code className="text-typography-body truncate">{cloneCommand}</code>
            <button
              type="button"
              onClick={handleCopyClone}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.1] text-typography-headline transition-colors"
              title="Copy git clone command"
            >
              {copiedClone ? (
                <>
                  <CheckIcon size={12} className="text-accent-emerald" />
                  <span className="text-[11px] text-accent-emerald">Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon size={12} />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/40 text-accent-emerald hover:bg-accent-emerald/20 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon size={12} />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-typography-headline transition-all"
            >
              <GitHubIcon size={13} />
              <span>GitHub Repo</span>
              <ExternalLinkIcon size={12} className="text-accent-emerald" />
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-white/[0.08] overflow-x-auto no-scrollbar bg-[#0f1210]">
          {[
            { id: 'overview', label: 'Overview & Problem' },
            { id: 'architecture', label: 'System Architecture' },
            { id: 'highlights', label: 'Engineering Highlights' },
            { id: 'metrics', label: 'Benchmarks & Metrics' },
            { id: 'future', label: 'Limitations & Future' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-3.5 py-2.5 text-xs font-mono border-b-2 whitespace-nowrap transition-colors ${activeTab === tab.id
                  ? 'border-accent-emerald text-accent-emerald font-semibold bg-accent-emerald/[0.04]'
                  : 'border-transparent text-typography-muted hover:text-typography-headline hover:border-white/20'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tab 1: Overview & Problem */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-emerald mb-2">
                  // System Overview
                </h3>
                <p className="text-sm sm:text-base text-typography-headline leading-relaxed">
                  {caseStudy?.overview || project.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-typography-muted mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-warning" />
                  The Engineering Problem
                </h4>
                <p className="text-xs sm:text-sm text-typography-body leading-relaxed">
                  {caseStudy?.problem || project.problemSolution}
                </p>
              </div>

              <div>
                {(() => {
                  const onlineModalImageUrl = project
                    ? `https://image.pollinations.ai/prompt/${encodeURIComponent(
                      `${project.title} ${project.category} futuristic artificial intelligence engineering dark interface high tech`
                    )}?width=1200&height=675&nologo=true`
                    : '';
                  const modalImageSrc = project.image
                    ? (triedModalOnlineFallback ? onlineModalImageUrl : project.image)
                    : onlineModalImageUrl;
                  const hasModalImage = !modalImageError && Boolean(modalImageSrc);

                  return (
                    <>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-typography-muted mb-3 flex items-center justify-between">
                        <span>// Project Visual Preview</span>
                        {hasModalImage && (
                          <span className="text-[10px] font-mono text-[#c6ff00] px-2 py-0.5 rounded bg-[#c6ff00]/10 border border-[#c6ff00]/25">
                            PRODUCTION PREVIEW
                          </span>
                        )}
                      </h4>
                      {hasModalImage ? (
                        <div className="relative w-full h-56 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-[#070908] group">
                          <img
                            src={modalImageSrc}
                            alt={`${project.title} preview`}
                            onError={() => {
                              if (!triedModalOnlineFallback && project.image) {
                                setTriedModalOnlineFallback(true);
                              } else {
                                setModalImageError(true);
                              }
                            }}
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                            <span className="text-[#f2f4f3] font-semibold truncate mr-2">{project.title}</span>
                            <button
                              type="button"
                              onClick={() => setActiveTab('architecture')}
                              className="text-[#c6ff00] hover:underline flex-shrink-0 text-[11px] font-mono"
                            >
                              View Architecture Diagram &rarr;
                            </button>
                          </div>
                        </div>
                      ) : (
                        <ProjectVisual projectId={project.id} category={project.category} />
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Tab 2: System Architecture & Pipeline */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-emerald mb-2 flex items-center gap-2">
                  <LayersIcon size={14} />
                  // End-to-End Pipeline Stages
                </h3>
                <p className="text-xs text-typography-muted mb-4">
                  Deterministic dataflow from sensory/video capture to model inference and client synthesis.
                </p>
              </div>

              {caseStudy?.pipeline ? (
                <div className="space-y-3">
                  {caseStudy.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-accent-emerald/30 transition-colors"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center bg-accent-emerald/10 text-accent-emerald font-mono text-xs font-bold border border-accent-emerald/30">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xs sm:text-sm text-typography-body leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-typography-muted">
                  Pipeline details documented in project repository.
                </p>
              )}

              <div className="mt-4">
                <ProjectVisual projectId={project.id} category={project.category} />
              </div>
            </div>
          )}

          {/* Tab 3: Engineering Highlights */}
          {activeTab === 'highlights' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-emerald mb-2 flex items-center gap-2">
                  <CpuIcon size={14} />
                  // Key Architectural Decisions & Optimizations
                </h3>
                <p className="text-xs text-typography-muted mb-4">
                  Substantive technical breakthroughs and design trade-offs made during development.
                </p>
              </div>

              <div className="space-y-3">
                {(caseStudy?.engineeringHighlights || project.highlights || []).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                  >
                    <span className="flex-shrink-0 mt-0.5 text-accent-emerald">
                      <SparklesIcon size={16} />
                    </span>
                    <p className="text-xs sm:text-sm text-typography-headline leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-typography-muted mb-3">
                  // Technology Stack & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] border border-white/[0.08] text-typography-headline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Benchmarks & Metrics */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-emerald mb-2">
                  // Verified Performance Benchmarks
                </h3>
                <p className="text-xs text-typography-muted mb-4">
                  Genuine benchmark outcomes measured on test splits and edge devices.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(caseStudy?.metrics || []).map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-typography-muted block mb-1">
                        {metric.label}
                      </span>
                      <span className="text-2xl sm:text-3xl font-display font-bold text-accent-emerald">
                        {metric.value}
                      </span>
                    </div>
                    {metric.detail && (
                      <span className="mt-2 text-xs text-typography-dim font-mono">
                        {metric.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Limitations & Future Scope */}
          {activeTab === 'future' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-warning mb-2">
                  // Edge Cases & Production Constraints
                </h3>
                <p className="text-xs text-typography-muted mb-4">
                  Rigorous engineering recognizes operational boundaries and failure modes.
                </p>
              </div>

              <div className="space-y-3">
                {(caseStudy?.limitations || []).map((limitation, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-accent-warning/[0.04] border border-accent-warning/20"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-warning mt-2" />
                    <p className="text-xs sm:text-sm text-typography-body leading-relaxed">
                      {limitation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#0c0e0d] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-typography-dim"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-mono text-typography-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              Close
            </button>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald hover:bg-accent-hover text-black font-semibold text-xs font-mono transition-all"
            >
              <GitHubIcon size={14} />
              <span>Open on GitHub ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;


