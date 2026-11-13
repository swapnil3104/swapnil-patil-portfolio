import React, { useState, useMemo, Suspense } from 'react';
import {
  SearchIcon,
  FilterIcon,
  TerminalIcon,
  GitHubIcon,
  ExternalLinkIcon,
} from '@/components/icons';
import { ArrowRightIcon } from 'lucide-react';
import { labProjects } from '@/data';
import { LabProject } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { LabCard } from '@/components/lab/LabCard';
import { ArcadeRunnerVisual } from '@/components/lab/ArcadeRunnerVisual';
import { useCountUp } from '@/hooks';
import { useRouter } from '@/hooks/useRouter';

const LabModal = React.lazy(() => import('@/components/lab/LabModal'));

export const LabPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedProject, setInspectedProject] = useState<LabProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Animated counts
  const curriculaCount = useCountUp({ end: 5, duration: 1200 });
  const openSourcePct = useCountUp({ end: 100, duration: 1400 });

  // Derive categories from projects
  const categories = useMemo(() => {
    const set = new Set<string>();
    labProjects.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return labProjects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
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

  return (
    <div className="relative">
      {/* Background Architectural Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> Research Lab &amp; Experiments
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              Where curiosity meets{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                rigorous benchmarks.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Open-source research journeys, computer vision experiments, competitive Kaggle notebooks, and algorithmic prototypes. Free, accessible to the engineering community, and documented line by line.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Research Curricula
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {curriculaCount}
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Kaggle Standing
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                Top 4%
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Open Source
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {openSourcePct}% MIT
              </div>
            </div>
          </div>

          {/* Feature Highlight: Interactive Arcade Visual */}
          <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-3xl bg-[#121614] border border-white/[0.08] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] text-xs font-mono font-semibold">
                  <TerminalIcon size={13} />
                  <span>Interactive Real-time Visualizer</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Continuous Benchmarking &amp; Algorithmic Runners
                </h3>
                <p className="text-sm font-sans text-[#8a928f] leading-relaxed">
                  Interactive simulations run directly in your browser without client-side stalls. Test throughput rates, memory allocations, and visual framerates.
                </p>
              </div>

              <div className="w-full lg:w-auto flex justify-center">
                <ArcadeRunnerVisual />
              </div>
            </div>
          </div>

          {/* Filter Pills & Search */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Research categories">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSelectedCategory(cat);
                      trackEvent('filter_lab_category', { category: cat });
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_15px_rgba(198,255,0,0.3)]'
                        : 'bg-white/[0.04] text-[#8a928f] hover:text-[#f2f4f3] hover:bg-white/[0.08] border border-white/[0.08]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a928f]" />
              <input
                type="text"
                placeholder="Search curricula by title, topic, language, or algorithm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#f2f4f3] placeholder-[#4f5854] focus:outline-none focus:border-[#c6ff00] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#8a928f] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Counter & GitHub Link */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8a928f] mb-6">
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong> of {labProjects.length} research experiments
            </span>
            <a
              href="https://github.com/swapnil3104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6ff00] hover:underline inline-flex items-center gap-1.5"
            >
              <GitHubIcon size={13} />
              <span>Explore GitHub Repos</span>
              <ExternalLinkIcon size={11} />
            </a>
          </div>

          {/* Lab Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
              <FilterIcon size={32} className="mx-auto text-[#8a928f] mb-3 opacity-60" />
              <h3 className="font-display font-semibold text-lg text-white mb-1">
                No lab experiments match your criteria
              </h3>
              <p className="text-xs font-mono text-[#8a928f] mb-4">
                Try resetting your search query or switching to &apos;All&apos;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-[#c6ff00] text-black font-mono text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <LabCard
                  key={project.id}
                  project={project}
                  onInspect={handleOpenCurriculum}
                />
              ))}
            </div>
          )}

          {/* Editorial Callout: Next Section Contact */}
          <div className="mt-16 sm:mt-24 p-8 rounded-3xl bg-[#121614] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-[#c6ff00]/40 transition-all duration-300">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                // 07 Direct Dispatch &amp; Inquiries
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Have an ambitious AI/ML initiative or engineering role?
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Reach out directly via email, phone, WhatsApp, or through our interactive message dispatch terminal.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.25)] hover:shadow-[0_0_30px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <span>Go to /contact Page</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Lab Modal */}
      <Suspense fallback={null}>
        {isModalOpen && inspectedProject && (
          <LabModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            project={inspectedProject}
          />
        )}
      </Suspense>
    </div>
  );
};

export default LabPage;
