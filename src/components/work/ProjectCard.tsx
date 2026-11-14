import React, { useState } from 'react';
import { ProjectGitHub } from '@/types';
import { GitHubIcon, ExternalLinkIcon, LayersIcon, CheckIcon } from '@/components/icons';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectGitHub;
  onOpenCaseStudy: (project: ProjectGitHub) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  isFeatured = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [triedOnlineFallback, setTriedOnlineFallback] = useState(false);
  const topMetric = project.caseStudy?.metrics?.[0];

  // Dynamic online generative AI image based on project name & domain
  const onlineGeneratedUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    `${project.title} ${project.category} futuristic artificial intelligence engineering dark interface high tech`
  )}?width=1200&height=675&nologo=true`;

  const imageSrc = project.image
    ? (triedOnlineFallback ? onlineGeneratedUrl : project.image)
    : onlineGeneratedUrl;

  const hasImage = !imageError;

  const handleImageError = () => {
    if (!triedOnlineFallback && project.image) {
      setTriedOnlineFallback(true);
    } else {
      setImageError(true);
    }
  };

  return (
    <article
      className={`tech-card flex flex-col justify-between group overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121614]/80 hover:border-[#c6ff00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 ${
        isFeatured ? 'p-6 lg:p-7' : 'p-5'
      }`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#c6ff00] font-semibold">// {project.index}</span>
            <span className="text-[#8a928f]">·</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/25 text-[#c6ff00] text-[11px] font-medium">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#8a928f]">
            <span className="inline-flex items-center gap-1.5 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
              {project.visibility}
            </span>
          </div>
        </div>

        {/* Visual Media Container with Hover Trigger */}
        <div
          onClick={() => onOpenCaseStudy(project)}
          className="cursor-pointer mb-5 group/visual relative rounded-xl overflow-hidden bg-[#070908] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-colors"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenCaseStudy(project);
            }
          }}
          title="Click to view full architecture & case study"
        >
          {hasImage ? (
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#080b09] flex items-center justify-center">
              <img
                src={imageSrc}
                alt={`${project.title} project preview`}
                loading="lazy"
                onError={handleImageError}
                className="w-full h-full object-cover object-center group-hover/visual:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Subtle dark gradient overlay for technical contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d] via-black/25 to-black/20 pointer-events-none" />
              {/* Background architectural grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              {/* Corner Category Tag Badge */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-[#8a928f] backdrop-blur-sm pointer-events-none">
                {project.category}
              </div>
            </div>
          ) : (
            <ProjectVisual projectId={project.id} category={project.category} />
          )}

          {/* Hover Overlay Action Prompt */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/visual:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-black/90 border border-[#c6ff00]/60 text-[#c6ff00] text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-1.5">
              <span>Explore Architecture</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold font-display text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors mb-2.5 tracking-tight">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="text-left hover:underline focus:outline-none"
          >
            {project.title}
          </button>
        </h3>

        {/* Problem-Solution Summary */}
        <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Soren Hale Key Metric / Benchmark Callout */}
        {topMetric && (
          <div className="mb-4 p-3 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between font-mono">
            <span className="text-[11px] text-[#8a928f]">
              {topMetric.label}:
            </span>
            <span className="text-sm font-bold text-[#c6ff00] tracking-tight">
              {topMetric.value}
            </span>
          </div>
        )}

        {/* Highlights Bullet List for Featured Cards */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5 pt-2 border-t border-white/[0.05]">
            {project.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-[#d4d8d6] leading-normal font-sans"
              >
                <CheckIcon size={13} className="text-[#c6ff00] flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#8a928f] group-hover:border-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f2f4f3] hover:text-[#c6ff00] transition-colors py-1 focus:outline-none"
        >
          <LayersIcon size={13} className="text-[#c6ff00]" />
          <span>Case Study &amp; Architecture</span>
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] hover:bg-[#c6ff00]/20 transition-all"
              title="Live interactive demo"
            >
              <span>Demo</span>
              <ExternalLinkIcon size={11} />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c6ff00] hover:text-[#d4ff00] transition-colors py-1 group/link"
            title="View code on GitHub"
          >
            <GitHubIcon size={13} />
            <span className="hidden sm:inline">Repo</span>
            <ExternalLinkIcon size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};
