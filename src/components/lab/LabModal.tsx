import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LabProject } from '@/types';
import {
  XIcon,
  ExternalLinkIcon,
  GitHubIcon,
  CheckIcon,
  CopyIcon,
  TerminalIcon,
  BookOpenIcon,
  CodeIcon,
  LayersIcon,
} from '@/components/icons';
import { useModalDialog } from '@/hooks';

interface LabModalProps {
  project: LabProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LabModal: React.FC<LabModalProps> = ({ project, isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  const { dialogRef } = useModalDialog<HTMLDivElement>({
    isOpen: isOpen && !!project,
    onClose,
    initialFocusRef: closeButtonRef,
  });

  const handleCopyClone = () => {
    if (!project) return;
    navigator.clipboard.writeText(project.cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen || !project || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lab-modal-title"
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
          aria-label="Close modal"
        >
          <XIcon size={18} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-5 mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald">
              // {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] border border-white/10 text-typography-muted">
                {project.badge}
              </span>
            )}
            {project.language && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-typography-dim">
                {project.language}
              </span>
            )}
          </div>
          <h2
            id="lab-modal-title"
            className="text-xl sm:text-2xl font-bold text-typography-headline tracking-tight mb-2"
          >
            {project.title}
          </h2>
          <p className="text-sm text-typography-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Clone Command Bar */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#080a09] border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-typography-dim flex items-center gap-1.5">
              <TerminalIcon size={14} className="text-accent-emerald" />
              <span>Clone Repository</span>
            </span>
            <button
              type="button"
              onClick={handleCopyClone}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-typography-muted hover:text-accent-emerald transition-colors"
            >
              {copied ? (
                <>
                  <CheckIcon size={13} className="text-accent-emerald" />
                  <span className="text-accent-emerald">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <CopyIcon size={13} />
                  <span>Copy command</span>
                </>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-xs text-typography-headline overflow-x-auto">
            <span className="text-accent-emerald select-none">$</span>
            <span className="select-all flex-1 truncate">{project.cloneCommand}</span>
          </div>
        </div>

        {/* Technical Topics & Tags */}
        {project.topics && project.topics.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-typography-dim mb-3 flex items-center gap-1.5">
              <CodeIcon size={14} className="text-accent-emerald" />
              <span>Core Technologies & Focus Areas</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-typography-body"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prerequisites */}
        {project.prerequisites && project.prerequisites.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-typography-dim mb-2.5 flex items-center gap-1.5">
              <BookOpenIcon size={14} className="text-accent-emerald" />
              <span>Recommended Prerequisites & Foundations</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-typography-muted">
              {project.prerequisites.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Detailed Curriculum Phases */}
        {project.curriculumPhases && project.curriculumPhases.length > 0 ? (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-typography-dim mb-3 flex items-center gap-1.5">
              <LayersIcon size={14} className="text-accent-emerald" />
              <span>Curriculum & Module Breakdown</span>
            </h3>
            <div className="space-y-3">
              {project.curriculumPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-accent-emerald/10 text-accent-emerald font-semibold">
                      {phase.phase}
                    </span>
                    <span className="text-typography-headline font-semibold">
                      {phase.title}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-typography-muted pl-2 border-l border-white/10 mt-2">
                    {phase.topics.map((t, ti) => (
                      <li key={ti} className="flex items-start gap-2">
                        <CheckIcon size={13} className="text-accent-emerald shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          project.modules && (
            <div className="mb-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-typography-dim mb-3 flex items-center gap-1.5">
                <LayersIcon size={14} className="text-accent-emerald" />
                <span>Modules & Topics</span>
              </h3>
              <ul className="space-y-2 text-xs text-typography-muted">
                {project.modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <CheckIcon size={14} className="text-accent-emerald shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Modal Footer Actions */}
        <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-typography-dim">
            Repository: <span className="text-typography-muted">{project.repo}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-typography-muted hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Close
            </button>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-accent-emerald text-black hover:bg-accent-emerald-hover transition-colors shadow-lg shadow-accent-emerald/20"
            >
              <GitHubIcon size={15} />
              <span>Explore on GitHub</span>
              <ExternalLinkIcon size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LabModal;


