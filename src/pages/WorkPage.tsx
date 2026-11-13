import React, { useState, useMemo, Suspense } from 'react';
import { projectsGitHub } from '@/data/projects-github';
import { projectsConsultant } from '@/data/projects-consultant';
import { projectsUIUX } from '@/data/projects-uiux';
import { ProjectGitHub, ProjectConsultant, ProjectUIUX } from '@/types';
import { ProjectIntakeForm } from '@/components/shared/ProjectIntakeForm';
import { ArrowUpRightIcon, ArrowRightIcon } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const ProjectModal = React.lazy(() => import('@/components/work/ProjectModal'));
const ClientModal = React.lazy(() => import('@/components/consultant/ClientModal'));
const DesignModal = React.lazy(() => import('@/components/uiux/DesignModal'));

type FilterType = 'all' | 'aiml' | 'consultant' | 'uiux';

interface UnifiedProjectCard {
  id: string;
  kind: 'aiml' | 'consultant' | 'uiux';
  title: string;
  year: string;
  role: string;
  categoryBadge: string;
  description: string;
  diffOld: string;
  diffNew: string;
  diffLabel: string;
  tags: string[];
  image: string;
  original: ProjectGitHub | ProjectConsultant | ProjectUIUX;
}

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Modal states
  const [selectedGithubProject, setSelectedGithubProject] = useState<ProjectGitHub | null>(null);
  const [selectedClientProject, setSelectedClientProject] = useState<ProjectConsultant | null>(null);
  const [selectedDesignProject, setSelectedDesignProject] = useState<ProjectUIUX | null>(null);

  // Stats count up
  const repoCount = useCountUp({ end: 12, duration: 1200 });
  const shipmentCount = useCountUp({ end: 28, duration: 1400 });
  const fpsScore = useCountUp({ end: 99, duration: 1500 });

  // Unified items
  const allProjects = useMemo<UnifiedProjectCard[]>(() => {
    const list: UnifiedProjectCard[] = [];

    // 1. AI/ML Projects
    projectsGitHub.forEach((p) => {
      let diffOld = '180ms';
      let diffNew = '35ms';
      let diffLabel = 'Inference Latency';

      if (p.id === 'isl-recognition') {
        diffOld = '12 FPS';
        diffNew = '60 FPS';
        diffLabel = 'Real-time gesture pipeline';
      } else if (p.id === 'self-care-ai') {
        diffOld = '71.0%';
        diffNew = '94.6%';
        diffLabel = 'Grad-CAM screening sensitivity';
      } else if (p.id.includes('deepfake') || p.id.includes('quantum')) {
        diffOld = '68.2%';
        diffNew = '92.4%';
        diffLabel = 'AUC benchmark on fake media';
      } else if (p.id.includes('cancer')) {
        diffOld = '82.0%';
        diffNew = '96.1%';
        diffLabel = 'Cytology multi-class recall';
      } else if (p.id.includes('drowsiness')) {
        diffOld = '180 ms';
        diffNew = '28 ms';
        diffLabel = 'Driver fatigue alert turnaround';
      } else if (p.id.includes('rag')) {
        diffOld = '3.8 s';
        diffNew = '0.6 s';
        diffLabel = 'Retrieval turnaround time';
      } else if (p.id.includes('roadguard') || p.id.includes('pothole')) {
        diffOld = '15 FPS';
        diffNew = '48 FPS';
        diffLabel = 'Hazard tracking throughput';
      } else if (p.id.includes('traffic')) {
        diffOld = '79.0%';
        diffNew = '97.8%';
        diffLabel = 'GTSRB sign classification';
      } else if (p.id.includes('face')) {
        diffOld = '1.8 s';
        diffNew = '0.2 s';
        diffLabel = 'Face landmark verification';
      } else if (p.id.includes('measure')) {
        diffOld = '±12 mm';
        diffNew = '±1.8 mm';
        diffLabel = 'Sub-pixel calibration error';
      } else if (p.id.includes('game') || p.id.includes('3d')) {
        diffOld = '28 FPS';
        diffNew = '60 FPS';
        diffLabel = 'Three.js WebGL rendering';
      }

      list.push({
        id: `aiml-${p.id}`,
        kind: 'aiml',
        title: p.title,
        year: '2024–2026',
        role: 'AI/ML Engineer',
        categoryBadge: p.category || 'AI / ML',
        description: p.description,
        diffOld,
        diffNew,
        diffLabel,
        tags: p.tags.slice(0, 4),
        image: p.image || '/assets/projects/isl-recognition.webp',
        original: p,
      });
    });

    // 2. Consultant Projects
    projectsConsultant.forEach((c) => {
      list.push({
        id: `consultant-${c.id}`,
        kind: 'consultant',
        title: c.name,
        year: c.engagement?.duration || '2024–2025',
        role: c.engagement?.role || 'Technical Consultant',
        categoryBadge: 'Client Deployment',
        description: (c.deliverables && c.deliverables[0]) || c.summary || c.scope || 'Commercial client web deployment and digital architecture.',
        diffOld: '4.2 s',
        diffNew: '0.8 s',
        diffLabel: c.metrics && c.metrics[0] ? `${c.metrics[0].label} · ${c.metrics[0].value}` : 'Page load time · Lighthouse 98+',
        tags: c.techStack.slice(0, 4),
        image: c.image || '/assets/consultant/studio-squanta.webp',
        original: c,
      });
    });

    // 3. UI/UX Projects
    projectsUIUX.forEach((u) => {
      list.push({
        id: `uiux-${u.id}`,
        kind: 'uiux',
        title: u.title,
        year: '2024–2026',
        role: 'Product Designer',
        categoryBadge: 'Figma System',
        description: u.description || 'High-fidelity design system & interactive component tokens.',
        diffOld: '7 steps',
        diffNew: '3 steps',
        diffLabel: 'User checkout completion flow',
        tags: u.features ? u.features.slice(0, 4) : [u.platform, u.domain, 'Figma', 'Design System'],
        image: u.image || '/assets/uiux/flymitra.webp',
        original: u,
      });
    });

    return list;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter((p) => p.kind === activeFilter);
  }, [allProjects, activeFilter]);

  const handleCardClick = (project: UnifiedProjectCard) => {
    if (project.kind === 'aiml') {
      setSelectedGithubProject(project.original as ProjectGitHub);
    } else if (project.kind === 'consultant') {
      setSelectedClientProject(project.original as ProjectConsultant);
    } else if (project.kind === 'uiux') {
      setSelectedDesignProject(project.original as ProjectUIUX);
    }
  };

  return (
    <div className="relative">
      {/* Background Architectural Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Work Content Area */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> Work
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              Engineering intelligent systems, each one{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                measured.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Every case starts with a bottleneck that was measured and ends with the model and pipeline that shipped. Filter by kind, or open any of them for the full architectural write-up.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Core Repos
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {repoCount}
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Client Shipments
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {shipmentCount}
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Target Score / FPS
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                {fpsScore}
              </div>
            </div>
          </div>

          {/* Filter Pills Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 sm:mb-12">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_20px_rgba(198,255,0,0.35)] scale-105'
                    : 'bg-white/[0.04] text-typography-headline hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                All 28
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('aiml')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                  activeFilter === 'aiml'
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_20px_rgba(198,255,0,0.35)] scale-105'
                    : 'bg-white/[0.04] text-typography-headline hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                AI / ML 12
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('consultant')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                  activeFilter === 'consultant'
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_20px_rgba(198,255,0,0.35)] scale-105'
                    : 'bg-white/[0.04] text-typography-headline hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                Consultant 11
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('uiux')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 ${
                  activeFilter === 'uiux'
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_20px_rgba(198,255,0,0.35)] scale-105'
                    : 'bg-white/[0.04] text-typography-headline hover:bg-white/[0.08] border border-white/[0.1]'
                }`}
              >
                UI / UX 5
              </button>
            </div>

            <div className="text-xs font-mono text-[#8a928f]">
              <span className="text-[#c6ff00] font-semibold">{filteredProjects.length.toString().padStart(2, '0')}</span> projects rendered
            </div>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const isHovered = hoveredCardId === project.id;
              return (
                <article
                  key={project.id}
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => handleCardClick(project)}
                  className={`group relative bg-[#111413] border rounded-[22px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? 'border-[#c6ff00] shadow-[0_0_35px_rgba(198,255,0,0.16)] -translate-y-1.5'
                      : 'border-white/[0.09] hover:border-white/[0.2]'
                  }`}
                >
                  {/* Top Thumbnail Image */}
                  <div className="relative w-full aspect-[16/10] rounded-[14px] overflow-hidden bg-[#0d100f] border border-white/[0.06] mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        // Fallback image if local webp fails
                        (e.target as HTMLImageElement).src = '/assets/projects/isl-recognition.webp';
                      }}
                    />

                    {/* Category Chip Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#c6ff00] text-black shadow-md">
                        {project.categoryBadge}
                      </span>
                    </div>

                    {/* Hover Overlay 'Open Case' Pill */}
                    <div
                      className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-200 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <span className="px-4 py-1.5 rounded-full bg-white text-black font-mono text-xs font-semibold shadow-2xl flex items-center gap-1.5 transform transition-transform group-hover:scale-100 scale-90">
                        <span>open case</span>
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#8a928f] mb-3">
                    <span>{project.year}</span>
                    <span className="text-[#8a928f]/80">{project.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-typography-headline mb-3 tracking-tight group-hover:text-[#c6ff00] transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Diff Metric Comparison Block */}
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-lg sm:text-2xl font-bold tracking-tight min-w-0">
                        <span className="sh-diff-old truncate">{project.diffOld}</span>
                        <span className="text-neutral-500 font-normal shrink-0">→</span>
                        <span className="sh-diff-new truncate">{project.diffNew}</span>
                      </div>
                      <div className="text-xs font-mono text-[#c6ff00] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Open case</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-[#8a928f] tracking-wide">
                      {project.diffLabel}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-[#d4d8d6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Project Intake Form */}
        <div className="mt-20">
          <ProjectIntakeForm />
        </div>
      </div>

      {/* Modals */}
      <Suspense fallback={null}>
        {selectedGithubProject && (
          <ProjectModal
            project={selectedGithubProject}
            isOpen={Boolean(selectedGithubProject)}
            onClose={() => setSelectedGithubProject(null)}
          />
        )}
        {selectedClientProject && (
          <ClientModal
            client={selectedClientProject}
            isOpen={Boolean(selectedClientProject)}
            onClose={() => setSelectedClientProject(null)}
          />
        )}
        {selectedDesignProject && (
          <DesignModal
            design={selectedDesignProject}
            isOpen={Boolean(selectedDesignProject)}
            onClose={() => setSelectedDesignProject(null)}
          />
        )}
      </Suspense>
    </div>
  );
};
