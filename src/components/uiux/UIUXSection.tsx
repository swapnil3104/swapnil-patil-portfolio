import React, { useState, useMemo, Suspense } from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import {
  FigmaIcon,
  ExternalLinkIcon,
  SearchIcon,
  LayoutGridIcon,
  ListIcon,
  PaletteIcon,
  SmartphoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@/components/icons';
import { projectsUIUX } from '@/data';
import { ProjectUIUX } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { DesignCard } from './DesignCard';
import { DesignDirectoryTable } from './DesignDirectoryTable';

const DesignModal = React.lazy(() => import('./DesignModal'));

type CategoryFilter = 'All' | 'Mobile App' | 'Web Platform & Dashboard';

export const UIUXSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedDesign, setSelectedDesign] = useState<ProjectUIUX | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      // Category filter
      const matchesCategory = activeCategory === 'All' || design.category === activeCategory;

      // Search query filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = design.title.toLowerCase().includes(q);
      const matchesDomain = design.domain.toLowerCase().includes(q);
      const matchesDesc = design.description.toLowerCase().includes(q);
      const matchesPlatform = design.platform.toLowerCase().includes(q);
      const matchesScreens = design.keyScreens.some((s) => s.toLowerCase().includes(q));
      const matchesFeatures = design.features.some((f) => f.toLowerCase().includes(q));

      return (
        matchesCategory &&
        (matchesTitle || matchesDomain || matchesDesc || matchesPlatform || matchesScreens || matchesFeatures)
      );
    });
  }, [activeCategory, searchQuery]);

  // Modal handlers
  const handleOpenDetails = (design: ProjectUIUX) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
    trackEvent('view_design_case_study', {
      designId: design.id,
      title: design.title,
      category: design.category || 'UI/UX',
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDesign(null);
  };

  return (
    <SectionWrapper id="ui-ux" className="relative">
      {/* TASK-501: Section Header & Philosophy */}
      <SectionHeader
        eyebrow="03 UI/UX Design Systems — Mobile Apps & Web Platforms"
        title="User-centered design systems engineered for conversion and clarity."
        description="Crafting atomic design systems, intuitive mobile thumb-zone interactions, and high-density SaaS dashboards. Every interface is anchored by strict 8pt spatial scales, accessible typography, and interactive Figma prototypes."
        action={
          <a
            href="https://www.figma.com/@swapnilpatil"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-[#c6ff00]/50 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-[#c6ff00]/10 hover:-translate-y-0.5"
            title="Explore Swapnil's Figma design files and community resources"
          >
            <FigmaIcon size={16} className="text-white group-hover:text-[#c6ff00] transition-colors" />
            <span className="font-semibold">Figma Workspace</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] text-[11px] font-bold">
              5 Systems
            </span>
            <ExternalLinkIcon size={12} className="text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
          </a>
        }
      />

      {/* KPI / Telemetry Chips Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <FigmaIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              5 Systems
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              End-to-End Figma Files
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <PaletteIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#c6ff00]">
              100% Tokens
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Auto-Layout & 8pt Grids
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <SmartphoneIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              Web & Mobile
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Dual Platform Architectures
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <ShieldCheckIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              WCAG AA
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Accessible Contrast & Targets
            </div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              { id: 'All', label: 'All Systems', count: categoryCounts['All'] },
              { id: 'Mobile App', label: 'Mobile Apps', count: categoryCounts['Mobile App'] },
              { id: 'Web Platform & Dashboard', label: 'Web & Dashboards', count: categoryCounts['Web Platform & Dashboard'] },
            ] as const
          ).map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#c6ff00] text-black font-bold shadow-md shadow-[#c6ff00]/20'
                    : 'bg-white/[0.03] text-typography-muted hover:text-white hover:bg-white/[0.06] border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-white font-mono' : 'bg-white/10 text-typography-dim'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar & View Mode Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <SearchIcon
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-typography-dim pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search design systems..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-typography-headline placeholder:text-typography-dim focus:outline-none focus:border-accent-emerald transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-typography-dim hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* View Toggle: Grid vs Table */}
          <div className="flex items-center p-0.5 rounded-lg bg-white/[0.03] border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-accent-emerald/20 text-accent-emerald'
                  : 'text-typography-dim hover:text-white'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGridIcon size={16} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded transition-colors ${
                viewMode === 'table'
                  ? 'bg-accent-emerald/20 text-accent-emerald'
                  : 'text-typography-dim hover:text-white'
              }`}
              title="Design Matrix Table"
              aria-label="Design Matrix Table"
            >
              <ListIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Display: Grid of Cards vs Matrix Directory Table */}
      {viewMode === 'grid' ? (
        filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <p className="text-sm font-mono text-typography-muted">
              No design systems match &quot;{searchQuery}&quot; in {activeCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-accent-emerald/10 text-accent-emerald text-xs font-mono border border-accent-emerald/30 hover:bg-accent-emerald/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )
      ) : (
        <DesignDirectoryTable
          designs={filteredDesigns}
          onOpenDetails={handleOpenDetails}
        />
      )}

      {/* Bottom Architectural Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0d1210] to-[#090c0b] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-emerald">
            <SparklesIcon size={13} />
            <span>Figma Component Systems & Auto-Layout</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-typography-headline">
            Need a production-ready design system for your engineering team?
          </h3>
          <p className="text-xs sm:text-sm text-typography-muted max-w-2xl">
            From design token taxonomies and multi-state component variants to interactive click-through prototypes that engineers love to build from.
          </p>
        </div>

        <a
          href="#contact"
          className="shrink-0 px-5 py-2.5 rounded-lg bg-accent-emerald hover:bg-emerald-400 text-bg-primary font-bold text-xs font-mono transition-all duration-200 shadow-lg shadow-accent-emerald/20 hover:-translate-y-0.5"
        >
          Discuss Product Design ↗
        </a>
      </div>

      {/* Interactive Case Study Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <DesignModal
            design={selectedDesign}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </SectionWrapper>
  );
};
