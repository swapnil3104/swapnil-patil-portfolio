import React, { useState } from 'react';
import { LabProject } from '@/types';
import {
  ExternalLinkIcon,
  GitHubIcon,
  CopyIcon,
  CheckIcon,
  TerminalIcon,
  BookOpenIcon,
} from '@/components/icons';

interface LabCardProps {
  project: LabProject;
  onInspect: (project: LabProject) => void;
}

export const LabCard: React.FC<LabCardProps> = ({ project, onInspect }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="tech-card p-6 flex flex-col justify-between group hover:border-[#c6ff00]/40 transition-all duration-300 relative rounded-2xl border border-white/[0.1] bg-[#121614]/80"
    >
      <div>
        {/* Header Metadata Strip */}
        <div className="flex items-center justify-between gap-2 mb-3.5 text-xs font-mono">
          <span className="text-[#c6ff00] font-semibold">
            // {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.language && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/10 text-[#8a928f]">
                {project.language}
              </span>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a928f] hover:text-[#c6ff00] transition-colors p-1"
              title={`View ${project.title} on GitHub`}
              aria-label={`Open ${project.title} on GitHub`}
            >
              <GitHubIcon size={14} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-[#f2f4f3] tracking-tight mb-2 group-hover:text-[#c6ff00] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Curriculum Modules Checklist */}
        {project.modules && project.modules.length > 0 && (
          <div className="mb-5 space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.04]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#8a928f] mb-1 flex items-center justify-between">
              <span>// Modules &amp; Syllabus</span>
              <span className="text-[#c6ff00] text-[9px] font-bold">
                {project.modules.length} Core Areas
              </span>
            </div>
            <ul className="text-[11px] text-[#d4d8d6] space-y-1">
              {project.modules.slice(0, 3).map((mod, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-snug">
                  <span className="text-[#c6ff00] select-none mt-0.5">•</span>
                  <span className="truncate">{mod}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Topic Badges */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.topics.slice(0, 4).map((topic, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#8a928f]"
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#8a928f]">
                +{project.topics.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Area: Clone Command & Action Buttons */}
      <div className="pt-4 border-t border-white/[0.08] space-y-3">
        {/* Copyable Git Clone Bar */}
        <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-black/60 border border-white/[0.06]">
          <div className="flex items-center gap-1.5 min-w-0 font-mono text-[10px] text-[#8a928f] overflow-hidden">
            <TerminalIcon size={12} className="text-[#c6ff00] shrink-0" />
            <span className="truncate select-all">{project.cloneCommand}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyClone}
            className="p-1 rounded text-[#8a928f] hover:text-[#c6ff00] hover:bg-white/[0.05] transition-colors shrink-0"
            title="Copy clone command"
            aria-label="Copy clone command"
          >
            {copied ? (
              <CheckIcon size={13} className="text-[#c6ff00]" />
            ) : (
              <CopyIcon size={13} />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-white/[0.04] hover:bg-white/[0.08] text-[#f2f4f3] hover:text-[#c6ff00] border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <BookOpenIcon size={13} className="text-[#c6ff00]" />
            <span>Curriculum</span>
          </button>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-medium bg-[#c6ff00]/10 hover:bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30 hover:border-[#c6ff00]/60 transition-all duration-200"
            title="Open on GitHub"
          >
            <span>GitHub</span>
            <ExternalLinkIcon size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
