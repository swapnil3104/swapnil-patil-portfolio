import React, { useState, useMemo, Suspense } from 'react';
import {
  SearchIcon,
  LayoutGridIcon,
  ListIcon,
  PaletteIcon,
  SmartphoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from '@/components/icons';
import { ArrowRightIcon } from 'lucide-react';
import { projectsUIUX } from '@/data';
import { ProjectUIUX } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { DesignCard } from '@/components/uiux/DesignCard';
import { DesignDirectoryTable } from '@/components/uiux/DesignDirectoryTable';
import { useCountUp } from '@/hooks';
import { useRouter } from '@/hooks/useRouter';

const DesignModal = React.lazy(() => import('@/components/uiux/DesignModal'));

type CategoryFilter = 'All' | 'Mobile App' | 'Web Platform & Dashboard';

export const UIUXPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedDesign, setSelectedDesign] = useState<ProjectUIUX | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animated numbers
  const systemsCount = useCountUp({ end: 5, duration: 1200 });
  const wcagScore = useCountUp({ end: 100, duration: 1400 });
  const tokensCount = useCountUp({ end: 450, duration: 1600 });

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projectsUIUX.length,
      'Mobile App': 0,
      'Web Platform & Dashboard': 0,
    };
    projectsUIUX.forEach((d) => {
      if (d.category && counts[d.category] !== undefined) {
        counts[d.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered designs based on category and search query
  const filteredDesigns = useMemo(() => {
    return projectsUIUX.filter((design) => {
      const matchesCategory = activeCategory === 'All' || design.category === activeCategory;
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      return (
        matchesCategory &&
        (design.title.toLowerCase().includes(q) ||
          design.domain.toLowerCase().includes(q) ||
          design.description.toLowerCase().includes(q) ||
          design.platform.toLowerCase().includes(q) ||
          design.keyScreens.some((s) => s.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  const handleOpenModal = (design: ProjectUIUX) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
    trackEvent('view_uiux_case_study', {
      designId: design.id,
      title: design.title,
      domain: design.domain,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDesign(null);
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
              <span className="text-[#c6ff00]">//</span> Design Systems &amp; UI/UX
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              Design systems engineered with{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                mathematical precision.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Atomic token architectures, accessible WCAG 2.1 AA components, and high-fidelity interactive prototypes designed in Figma and coded in React + Tailwind. Bridging the gap between design fidelity and engineering rigor.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Design Systems
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {systemsCount}
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                WCAG 2.1 AA
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                {wcagScore}%
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Design Tokens
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {tokensCount}+
              </div>
            </div>
          </div>

          {/* Standards & Philosophy Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <PaletteIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Figma Auto-Layout 5.0</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <SmartphoneIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Fluid Typography &amp; Spacing</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <ShieldCheckIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Strict Contrast 4.5:1</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <SparklesIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Zero Redundant CSS</span>
            </div>
          </div>

          {/* Controls: Categories, Search, Grid/Table Toggle */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Design system categories">
                {(['All', 'Mobile App', 'Web Platform & Dashboard'] as CategoryFilter[]).map((cat) => {
                  const isSelected = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => {
                        setActiveCategory(cat);
                        trackEvent('filter_uiux_category', { category: cat });
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_15px_rgba(198,255,0,0.3)]'
                          : 'bg-white/[0.04] text-[#8a928f] hover:text-[#f2f4f3] hover:bg-white/[0.08] border border-white/[0.08]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-[#8a928f]'
                        }`}
                      >
                        {categoryCounts[cat] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.08] self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid View"
                  className={`p-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#c6ff00] text-black font-semibold'
                      : 'text-[#8a928f] hover:text-[#f2f4f3]'
                  }`}
                >
                  <LayoutGridIcon size={14} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  aria-label="Table View"
                  className={`p-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-colors ${
                    viewMode === 'table'
                      ? 'bg-[#c6ff00] text-black font-semibold'
                      : 'text-[#8a928f] hover:text-[#f2f4f3]'
                  }`}
                >
                  <ListIcon size={14} />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a928f]" />
              <input
                type="text"
                placeholder="Search by system title, domain, platform, key screen, or tokens..."
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

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8a928f] mb-6">
            <span>
              Showing <strong className="text-white">{filteredDesigns.length}</strong> of {projectsUIUX.length} systems
            </span>
            <a
              href="https://www.figma.com/@swapnilpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6ff00] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore Figma Community</span>
              <ExternalLinkIcon size={11} />
            </a>
          </div>

          {/* Systems Grid or Table View */}
          {filteredDesigns.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
              <h3 className="font-display font-semibold text-lg text-white mb-1">
                No design systems match your filter
              </h3>
              <p className="text-xs font-mono text-[#8a928f] mb-4">
                Try resetting your search query or switching to &apos;All&apos;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-[#c6ff00] text-black font-mono text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDesigns.map((design) => (
                <DesignCard
                  key={design.id}
                  design={design}
                  onOpenDetails={handleOpenModal}
                />
              ))}
            </div>
          ) : (
            <DesignDirectoryTable
              designs={filteredDesigns}
              onOpenDetails={handleOpenModal}
            />
          )}

          {/* Editorial Callout: Next Section Services */}
          <div className="mt-16 sm:mt-24 p-8 rounded-3xl bg-[#121614] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-[#c6ff00]/40 transition-all duration-300">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                // 04 Technical Services &amp; Capabilities
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Need production implementation of your design system?
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Explore our full-stack engineering services, computer vision model deployment, and SLA commitments on the Services page.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.25)] hover:shadow-[0_0_30px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <span>Explore /services Page</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Design Details Modal */}
      <Suspense fallback={null}>
        {isModalOpen && selectedDesign && (
          <DesignModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            design={selectedDesign}
          />
        )}
      </Suspense>
    </div>
  );
};

export default UIUXPage;
