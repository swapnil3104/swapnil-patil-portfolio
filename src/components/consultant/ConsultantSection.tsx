import React, { useState, useMemo, Suspense } from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import {
  ExternalLinkIcon,
  SearchIcon,
  FilterIcon,
  LayoutGridIcon,
  ListIcon,
  BriefcaseIcon,
  GlobeIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
} from '@/components/icons';
import { projectsConsultant } from '@/data';
import { ProjectConsultant } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { ClientCard } from './ClientCard';
import { ClientDirectoryTable } from './ClientDirectoryTable';

const ClientModal = React.lazy(() => import('./ClientModal'));

type ConsultantCategory = 'All' | 'Agency & Enterprise' | 'Marketing & E-Commerce' | 'Startup & Web Apps';

export const ConsultantSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ConsultantCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedClient, setSelectedClient] = useState<ProjectConsultant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Category Counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projectsConsultant.length,
      'Agency & Enterprise': 0,
      'Marketing & E-Commerce': 0,
      'Startup & Web Apps': 0,
    };
    projectsConsultant.forEach((c) => {
      if (counts[c.category] !== undefined) {
        counts[c.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered Clients based on category and search query
  const filteredClients = useMemo(() => {
    return projectsConsultant.filter((client) => {
      // Category filter
      const matchesCategory = activeCategory === 'All' || client.category === activeCategory;

      // Search query filter
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesName = client.name.toLowerCase().includes(q);
      const matchesIndustry = client.industry.toLowerCase().includes(q);
      const matchesScope = client.scope.toLowerCase().includes(q);
      const matchesSummary = client.summary.toLowerCase().includes(q);
      const matchesTech = client.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && (matchesName || matchesIndustry || matchesScope || matchesSummary || matchesTech);
    });
  }, [activeCategory, searchQuery]);

  // Handlers for modal
  const handleOpenDetails = (client: ProjectConsultant) => {
    setSelectedClient(client);
    setIsModalOpen(true);
    trackEvent('view_consultant_case_study', {
      clientId: client.id,
      clientName: client.name,
      category: client.category,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <SectionWrapper id="consultant" className="relative">
      {/* TASK-401: Section Header & Positioning */}
      <SectionHeader
        eyebrow="02 Independent Consultant — Commercial Projects & Client Deployments"
        title="Delivering production digital systems for growing businesses."
        description="Engineering enterprise web infrastructure, high-converting digital storefronts, and tailored software architectures. Every deployment pairs clean code and modern design systems with measurable business outcomes."
        action={
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-[#c6ff00]/50 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-[#c6ff00]/10 hover:-translate-y-0.5"
            title="Discuss your engineering or web consulting requirements"
          >
            <BriefcaseIcon size={16} className="text-white group-hover:text-[#c6ff00] transition-colors" />
            <span className="font-semibold">Consulting Inquiries</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] text-[11px] font-bold">
              Open
            </span>
            <ExternalLinkIcon size={12} className="text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
          </a>
        }
      />

      {/* KPI Chips Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00]">
            <GlobeIcon size={18} />
          </div>
          <div>
            <div className="text-lg font-mono font-bold text-typography-headline">11 Deployments</div>
            <div className="text-[11px] font-mono text-typography-dim">Live In Production</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00]">
            <TrendingUpIcon size={18} />
          </div>
          <div>
            <div className="text-lg font-mono font-bold text-typography-headline">100% On-Time</div>
            <div className="text-[11px] font-mono text-typography-dim">Track Record Delivery</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00]">
            <BriefcaseIcon size={18} />
          </div>
          <div>
            <div className="text-lg font-mono font-bold text-typography-headline">Full-Stack + UX</div>
            <div className="text-[11px] font-mono text-typography-dim">End-to-End Scopes</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00]">
            <ShieldCheckIcon size={18} />
          </div>
          <div>
            <div className="text-lg font-mono font-bold text-typography-headline">Sub-Second</div>
            <div className="text-[11px] font-mono text-typography-dim">Core Web Vitals</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar & View Selector */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Category Tabs */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]"
            role="tablist"
            aria-label="Client Categories"
          >
            {(['All', 'Agency & Enterprise', 'Marketing & E-Commerce', 'Startup & Web Apps'] as ConsultantCategory[]).map(
              (cat) => {
                const count = categoryCounts[cat] || 0;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-150 ${
                      isActive
                        ? 'bg-[#c6ff00] text-black font-semibold shadow-sm'
                        : 'text-typography-muted hover:text-typography-headline hover:bg-white/5'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/5 text-typography-dim'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* Search Input & View Switcher */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <SearchIcon
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-typography-dim"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clients, tech, scope..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-typography-headline placeholder:text-typography-dim focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-typography-dim hover:text-typography-headline text-xs font-mono"
                  title="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Toggle (Grid / Table) */}
            <div className="flex items-center p-1 rounded-lg bg-white/[0.03] border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white/10 text-[#c6ff00] shadow-sm'
                    : 'text-typography-dim hover:text-typography-headline'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <LayoutGridIcon size={16} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'table'
                    ? 'bg-white/10 text-[#c6ff00] shadow-sm'
                    : 'text-typography-dim hover:text-typography-headline'
                }`}
                title="Directory table view"
                aria-label="Directory table view"
              >
                <ListIcon size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filter Indicators */}
        <div className="flex items-center justify-between text-xs font-mono text-typography-dim px-1">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-typography-headline">{filteredClients.length}</strong> of{' '}
              {projectsConsultant.length} client deployments
            </span>
            {(activeCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-accent-emerald hover:underline ml-2"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>11/11 Verified Production URLs</span>
          </div>
        </div>
      </div>

      {/* Main Content Display: Grid View or Directory Table View */}
      {filteredClients.length === 0 ? (
        <div className="p-12 text-center rounded-xl bg-[#0e1210] border border-white/10">
          <FilterIcon size={24} className="mx-auto text-typography-dim mb-3" />
          <p className="text-sm font-mono text-typography-muted mb-2">
            No client projects matched your search for &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-md bg-accent-emerald/10 hover:bg-accent-emerald/20 text-accent-emerald text-xs font-mono border border-accent-emerald/30 transition-colors"
          >
            Clear Search & Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <ClientCard
              key={client.id}
              client={client}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      ) : (
        <ClientDirectoryTable
          clients={filteredClients}
          onOpenDetails={handleOpenDetails}
        />
      )}

      {/* Bottom Technical Consulting Conversion Callout */}
      <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d1410] via-[#0f1813] to-[#0c120f] border border-accent-emerald/25 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-emerald font-semibold uppercase tracking-wider">
            <span>✦</span>
            <span>Commercial Technical Consulting</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-typography-headline">
            Need production-grade web architecture or MVP execution?
          </h3>
          <p className="text-xs sm:text-sm text-typography-muted max-w-2xl leading-relaxed">
            From high-conversion e-commerce and performant brand platforms to modern Next.js/React web applications. Full transparency, clean code, and zero compromises on speed.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-emerald hover:bg-accent-hover text-black font-semibold text-xs font-mono tracking-tight transition-all shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] shrink-0"
        >
          <span>Start a Project &rarr;</span>
        </a>
      </div>

      {/* Case Study Detail Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ClientModal
            client={selectedClient}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </SectionWrapper>
  );
};

