import React, { useState, useMemo, Suspense } from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import {
  GitHubIcon,
  ExternalLinkIcon,
  SearchIcon,
  FilterIcon,
  TerminalIcon,
  CpuIcon,
  CodeIcon,
  ShieldCheckIcon,
} from '@/components/icons';
import { labProjects } from '@/data';
import { LabProject } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { LabCard } from './LabCard';
import { ArcadeRunnerVisual } from './ArcadeRunnerVisual';

const LabModal = React.lazy(() => import('./LabModal'));

export const LabSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedProject, setInspectedProject] = useState<LabProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Derive categories from projects
  const categories = useMemo(() => {
    const set = new Set<string>();
    labProjects.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return labProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.language && p.language.toLowerCase().includes(q)) ||
        (p.topics && p.topics.some((t) => t.toLowerCase().includes(q))) ||
        (p.modules && p.modules.some((m) => m.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenCurriculum = (project: LabProject) => {
    setInspectedProject(project);
    setIsModalOpen(true);
    trackEvent('view_lab_details', {
      projectId: project.id,
      repo: project.repo,
      category: project.category,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setInspectedProject(null);
  };

  const arcadeProject = useMemo(() => {
    return labProjects.find((p) => p.id === 'threejs-arcade-runner') || null;
  }, []);

  return (
    <SectionWrapper id="lab" className="relative">
      {/* TASK-801: Lab Section Header */}
      <SectionHeader
        eyebrow="06 The Research Lab"
        title="Learning journeys, open-source tools, and technical deep-dives."
        description="Public study repositories and engineering experiments tracking structured mastery across machine learning mathematics, deep neural networks, computer vision, agentic protocols, and WebGL graphics."
        action={
          <a
            href="https://github.com/swapnil3104?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-[#c6ff00]/50 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-[#c6ff00]/10 hover:-translate-y-0.5"
            title="Open Swapnil's public repositories on GitHub"
          >
            <GitHubIcon size={16} className="text-white group-hover:text-[#c6ff00] transition-colors" />
            <span className="font-semibold">Explore All Repositories</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] text-[11px] font-bold">
              6 Curriculums
            </span>
            <ExternalLinkIcon size={12} className="text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
          </a>
        }
      />

      {/* Lab Telemetry / KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <TerminalIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              6 Repos
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Structured Study Paths
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <CpuIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#c6ff00]">
              ML & Deep Learning
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              PyTorch & Scikit-Learn
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <CodeIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              Vision & MCP
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              OpenCV & Anthropic Tools
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <ShieldCheckIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              100% Public
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Open Source & MIT
            </div>
          </div>
        </div>
      </div>

      {/* TASK-803: Interactive 3D & Creative Experiments Spotlight Banner */}
      {arcadeProject && (
        <div className="mb-10 p-5 sm:p-7 rounded-2xl bg-[#090c0a] border border-white/10 hover:border-[#c6ff00]/30 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] font-semibold">
                // FEATURED EXPERIMENT
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-typography-muted">
                WebGL 2.0 & Three.js
              </span>
            </div>
            <span className="text-xs font-mono text-typography-dim">
              TASK-803: Interactive 3D Graphics Lab
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Canvas Simulation */}
            <div className="lg:col-span-7">
              <ArcadeRunnerVisual />
            </div>

            {/* Content & Actions */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-typography-headline mb-2 font-display">
                  {arcadeProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-typography-muted leading-relaxed">
                  Real-time browser graphics experiment implementing procedural curved highway generation, dynamic shadow mapping, custom GLSL speed-streak shaders, and synthesized vehicle engine audio via pure Web Audio API.
                </p>
              </div>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-typography-dim block text-[10px]">// Render Engine</span>
                  <span className="text-typography-headline font-semibold">Three.js + GLSL</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-typography-dim block text-[10px]">// Audio Core</span>
                  <span className="text-typography-headline font-semibold">Web Audio API</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-typography-dim block text-[10px]">// Physics</span>
                  <span className="text-typography-headline font-semibold">AABB Box Collision</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-typography-dim block text-[10px]">// Framerate</span>
                  <span className="text-[#c6ff00] font-semibold">60 FPS Stable</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenCurriculum(arcadeProject)}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white/[0.06] hover:bg-white/[0.1] text-typography-headline border border-white/10 transition-colors"
                >
                  View Architecture
                </button>
                <a
                  href={arcadeProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-semibold bg-[#c6ff00] text-black hover:bg-[#d4ff00] transition-colors shadow-lg shadow-[#c6ff00]/20"
                >
                  <GitHubIcon size={14} />
                  <span>Launch on GitHub</span>
                  <ExternalLinkIcon size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TASK-802: Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Lab repository categories">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? labProjects.length
                : labProjects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-md shadow-[#c6ff00]/20'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] text-typography-muted hover:text-typography-headline border border-white/[0.06]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-black/20 text-black font-bold'
                      : 'bg-white/[0.06] text-typography-dim'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real-time Search Input */}
        <div className="relative min-w-[240px] max-w-sm">
          <SearchIcon
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-typography-dim pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic, PyTorch, OpenCV..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#c6ff00] focus:outline-none text-xs font-mono text-typography-headline placeholder:text-typography-dim transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search input"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-typography-dim hover:text-typography-headline"
            >
              esc
            </button>
          )}
        </div>
      </div>

      {/* Repository Cards Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <LabCard
              key={project.id}
              project={project}
              onInspect={handleOpenCurriculum}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-2xl bg-white/[0.01] border border-white/[0.06] text-center">
          <FilterIcon size={28} className="mx-auto text-typography-dim mb-3" />
          <p className="text-sm font-mono text-typography-headline mb-1">
            No learning repositories match your query.
          </p>
          <p className="text-xs text-typography-muted mb-4">
            Try resetting your search query or choosing another category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-typography-headline transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Curriculum Deep-Dive Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <LabModal
            project={inspectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </SectionWrapper>
  );
};
