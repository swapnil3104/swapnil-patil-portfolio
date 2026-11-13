import React, { useState, useMemo, Suspense } from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import { GitHubIcon, ExternalLinkIcon, SearchIcon, FilterIcon, SparklesIcon } from '@/components/icons';
import { projectsGitHub } from '@/data';
import { ProjectGitHub } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { useRouter } from '@/hooks/useRouter';
import { ProjectCard } from './ProjectCard';
import { FeaturedRepoCard, FeaturedRepoData } from './FeaturedRepoCard';

const ProjectModal = React.lazy(() => import('./ProjectModal'));

const FEATURED_REPOS: FeaturedRepoData[] = [
  {
    id: 'isl-recognition',
    name: 'Indian-Sign-Language-Recognition',
    owner: 'swapnil3104',
    branch: 'main',
    visibility: 'Public',
    category: 'Featured Repo',
    diff: '+212 -1,048 · 60 FPS verified',
    description:
      'Real-time Indian Sign Language gesture recognition with MediaPipe landmark tracking, sentence synthesis, and interactive learning.',
    tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Flask'],
    url: 'https://github.com/swapnil3104/Indian-Sign-Language-Recognition',
  },
  {
    id: 'self-care-ai',
    name: 'Self-Care-AI',
    owner: 'swapnil3104',
    branch: 'main',
    visibility: 'Public',
    category: 'Featured Repo',
    diff: '+340 -820 · 92.3% validation',
    description:
      'AI-assisted medical imaging tool for preliminary eye health screening and symptom self-triage with Grad-CAM explainability.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'TorchVision', 'Docker'],
    url: 'https://github.com/swapnil3104/Self-Care-AI',
  },
];

type CategoryFilter = 'All' | 'Computer Vision' | 'Generative AI / RAG' | 'Edge AI' | 'WebGL' | 'Automation / Tools';

export const WorkSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllSecondary, setShowAllSecondary] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectGitHub | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Category Counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projectsGitHub.length,
      'Computer Vision': 0,
      'Generative AI / RAG': 0,
      'Edge AI': 0,
      WebGL: 0,
      'Automation / Tools': 0,
    };
    projectsGitHub.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return projectsGitHub.filter((project) => {
      // Category filter
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

      // Search query filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = project.title.toLowerCase().includes(q);
      const matchesDesc = project.description.toLowerCase().includes(q);
      const matchesTags = project.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategoryName = project.category.toLowerCase().includes(q);

      return matchesCategory && (matchesTitle || matchesDesc || matchesTags || matchesCategoryName);
    });
  }, [activeCategory, searchQuery]);

  // Split into Featured (Top 6) and Secondary when displaying "All" with no search
  const isDefaultView = activeCategory === 'All' && !searchQuery.trim();
  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  // Handlers for modal
  const handleOpenCaseStudy = (project: ProjectGitHub) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    trackEvent('view_project_case_study', {
      projectId: project.id,
      title: project.title,
      category: project.category,
    });
  };

  const handleOpenCaseStudyById = (id: string) => {
    const proj = projectsGitHub.find((p) => p.id === id);
    if (proj) {
      handleOpenCaseStudy(proj);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <SectionWrapper id="work" className="relative">
      {/* TASK-301: Section Header & Prominent GitHub Action Button */}
      <SectionHeader
        eyebrow="01 Work & Production Deployments"
        title="Intelligent systems, client products, and measured designs."
        description="Every project pairs rigorous engineering with real-world utility — spanning deep learning models, commercial web infrastructure, and user-centered design systems."
        action={
          <a
            href="https://github.com/swapnil3104"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-[#c6ff00]/50 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-[#c6ff00]/10 hover:-translate-y-0.5"
            title="Explore Swapnil's public GitHub repositories"
          >
            <GitHubIcon size={16} className="text-white group-hover:text-[#c6ff00] transition-colors" />
            <span className="font-semibold">View All on GitHub</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] text-[11px] font-bold">
              15+ Repos
            </span>
            <ExternalLinkIcon size={12} className="text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
          </a>
        }
      />

      {/* Portfolio Pillar Shortcuts Bar */}
      <div className="mb-8 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-typography-muted">
          <SparklesIcon size={14} className="text-[#c6ff00]" />
          <span>PORTFOLIO PILLARS:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#c6ff00]/15 text-[#c6ff00] border border-[#c6ff00]/30 font-semibold">
            01 AI/ML &amp; Engineering (12 Repos)
          </span>
          <button
            type="button"
            onClick={() => navigate('/consultant')}
            className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-typography-muted hover:text-typography-headline border border-white/10 transition-colors"
          >
            02 Independent Consultant (11 Live Sites) ↗
          </button>
          <button
            type="button"
            onClick={() => navigate('/ui-ux')}
            className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-typography-muted hover:text-typography-headline border border-white/10 transition-colors"
          >
            03 UI/UX Design (5 Figma Systems) ↗
          </button>
        </div>
      </div>

      {/* Featured GitHub Repository Telemetry Spotlight (ISLR & Self-Care AI) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
            Featured Repository Telemetry &middot; Live Production Repos
          </span>
          <span className="text-xs font-mono text-[#8a928f]">
            ISLR Studio &amp; Self-Care AI
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_REPOS.map((repo) => (
            <FeaturedRepoCard
              key={repo.id}
              repo={repo}
              onOpenCaseStudy={handleOpenCaseStudyById}
            />
          ))}
        </div>
      </div>

      {/* Filter Toolbar: Category Pills + Search Input */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {(
            [
              'All',
              'Computer Vision',
              'Generative AI / RAG',
              'Edge AI',
              'WebGL',
              'Automation / Tools',
            ] as CategoryFilter[]
          ).map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllSecondary(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-md shadow-[#c6ff00]/25'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-typography-muted hover:text-typography-headline'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-black' : 'bg-white/10 text-typography-dim'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Filter */}
        <div className="relative min-w-[240px] sm:w-64">
          <SearchIcon
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-typography-dim pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech..."
            aria-label="Filter engineering projects"
            className="w-full pl-9 pr-8 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.07] border border-white/[0.08] focus:border-accent-emerald/40 rounded-full text-typography-headline placeholder-typography-dim focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search input"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-typography-dim hover:text-typography-headline text-xs font-mono"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-16 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8">
          <FilterIcon size={32} className="mx-auto text-typography-dim mb-3" />
          <h3 className="text-base font-semibold text-typography-headline mb-1 font-display">
            No projects match your filter
          </h3>
          <p className="text-xs text-typography-muted font-mono mb-4">
            Try adjusting your search query or selecting &quot;All&quot; categories.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-full text-xs font-mono bg-accent-emerald text-black font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Standard Categorized View or Active Search View */}
      {!isDefaultView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
              isFeatured={project.featured}
            />
          ))}
        </div>
      ) : (
        /* Default View: Top Featured Grid + Expandable Secondary Grid */
        <div className="space-y-8">
          {/* TASK-302: Featured Core AI/ML Projects Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-accent-emerald uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                Featured Engineering &amp; AI Systems ({featuredProjects.length} Repositories)
              </span>
              <span className="text-xs font-mono text-typography-dim">
                {featuredProjects.length} of {filteredProjects.length} Displayed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={handleOpenCaseStudy}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>

          {/* TASK-303: Secondary Engineering Repositories */}
          <div className="pt-4 border-t border-white/[0.06]">
            {!showAllSecondary ? (
              <div className="text-center py-6">
                <button
                  onClick={() => setShowAllSecondary(true)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-accent-emerald/40 text-typography-headline text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-accent-emerald/10"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-emerald group-hover:animate-ping" />
                  <span>Explore {secondaryProjects.length} Additional Production Repositories (YOLO, OpenCV, MCP &amp; Tools)</span>
                  <span className="text-accent-emerald font-bold">↓</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-typography-muted uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-typography-dim" />
                    Additional Engineering Repositories ({secondaryProjects.length} Projects)
                  </span>
                  <button
                    onClick={() => setShowAllSecondary(false)}
                    className="text-xs font-mono text-accent-emerald hover:underline"
                  >
                    Collapse to Top {featuredProjects.length} ↑
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {secondaryProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenCaseStudy={handleOpenCaseStudy}
                      isFeatured={false}
                    />
                  ))}
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setShowAllSecondary(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-typography-muted hover:text-white text-xs font-mono transition-colors"
                  >
                    <span>Collapse Additional Repositories</span>
                    <span>↑</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TASK-305: Expandable Project Case Study Modal / Drawer */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </SectionWrapper>
  );
};

