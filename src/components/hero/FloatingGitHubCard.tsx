import React from 'react';
import { GitHubIcon, GitBranchIcon, ExternalLinkIcon } from '@/components/icons';

interface FloatingGitHubCardProps {
  className?: string;
}

export const FloatingGitHubCard: React.FC<FloatingGitHubCardProps> = ({ className = '' }) => {
  const repo = {
    name: 'Quantum-Hybrid-Explainable-Deepfake-Detection',
    owner: 'swapnil3104',
    branch: 'main',
    visibility: 'Public',
    category: 'Research Repo',
    diff: 'Pennylane Quantum Circuit · ResNet + Grad-CAM',
    description:
      'Quantum-classical hybrid deepfake detection combining PennyLane variational circuits with classical transfer learning and Grad-CAM explainability.',
    tags: ['Python', 'PennyLane', 'PyTorch', 'Qiskit', 'Grad-CAM', 'OpenCV'],
    url: 'https://github.com/swapnil3104/Quantum-Hybrid-Explainable-Deepfake-Detection',
  };

  return (
    <aside
      aria-label="Featured GitHub Repository Telemetry"
      className={`relative z-10 w-full max-w-sm rounded-2xl bg-[#121614]/90 backdrop-blur-md border border-white/[0.14] p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:border-[#c6ff00]/40 hover:shadow-[0_8px_32px_rgba(198,255,0,0.22)] ${className}`}
    >
      {/* Header bar: Branch & Public Badge */}
      <div className="flex items-center justify-between mb-3 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-[#c6ff00]">
          <GitBranchIcon size={14} className="text-[#c6ff00]" />
          <span className="font-semibold">{repo.branch}</span>
          <span className="text-[#4f5854]">/</span>
          <span className="text-[#8a928f] text-[11px]">{repo.category}</span>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/[0.06] border border-white/[0.08] text-[#8a928f]">
          {repo.visibility}
        </span>
      </div>

      {/* Repo Title Link */}
      <h3 className="font-mono text-sm sm:text-base font-semibold text-[#f2f4f3] hover:text-[#c6ff00] transition-colors mb-2">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00] rounded"
        >
          <GitHubIcon size={16} className="text-[#8a928f] flex-shrink-0" />
          <span className="truncate">{repo.owner}/{repo.name}</span>
        </a>
      </h3>

      {/* Project Description */}
      <p className="text-xs text-[#8a928f] leading-relaxed mb-3.5">
        {repo.description}
      </p>

      {/* Tech Stack Chips */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {repo.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#f2f4f3]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: View on GitHub Action */}
      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#8a928f]">
          {repo.diff}
        </span>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#c6ff00] hover:text-[#d4ff00] transition-colors"
        >
          <span>View on GitHub</span>
          <ExternalLinkIcon size={12} />
        </a>
      </div>
    </aside>
  );
};
