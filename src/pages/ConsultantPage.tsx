import React, { useState, useMemo, Suspense } from 'react';
import {
  SearchIcon,
  FilterIcon,
  LayoutGridIcon,
  ListIcon,
  BriefcaseIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@/components/icons';
import { ArrowRightIcon } from 'lucide-react';
import { projectsConsultant } from '@/data';
import { ProjectConsultant } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { ClientCard } from '@/components/consultant/ClientCard';
import { ClientDirectoryTable } from '@/components/consultant/ClientDirectoryTable';
import { useCountUp } from '@/hooks';
import { useRouter } from '@/hooks/useRouter';

const ClientModal = React.lazy(() => import('@/components/consultant/ClientModal'));

type ConsultantCategory = 'All' | 'Agency & Enterprise' | 'Marketing & E-Commerce' | 'Startup & Web Apps';

export const ConsultantPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<ConsultantCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedClient, setSelectedClient] = useState<ProjectConsultant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animated counts for editorial stat bar
  const clientCount = useCountUp({ end: 11, duration: 1200 });
  const uptimeScore = useCountUp({ end: 99, duration: 1400 });
  const domainCount = useCountUp({ end: 8, duration: 1000 });

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
      const matchesCategory = activeCategory === 'All' || client.category === activeCategory;
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      return (
        matchesCategory &&
        (client.name.toLowerCase().includes(q) ||
          client.industry.toLowerCase().includes(q) ||
          client.scope.toLowerCase().includes(q) ||
          client.summary.toLowerCase().includes(q) ||
          client.techStack.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  const handleOpenClient = (client: ProjectConsultant) => {
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
    <div className="relative">
      {/* Background Architectural Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> Commercial Deployments
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              11 commercial client systems, engineered for{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                scale.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Independent consulting engagements across industrial IoT, healthcare diagnostics, marketing engines, and enterprise web applications. Each engagement is backed by strict SLAs, verified business metrics, and zero technical debt.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Shipments
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {clientCount}
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Production SLA
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                {uptimeScore}.8%
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Industry Sectors
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {domainCount}+
              </div>
            </div>
          </div>

          {/* KPI Guarantee Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <TrendingUpIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">3.2x Avg Throughput</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <ShieldCheckIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">SOC2 / GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <BriefcaseIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Daily Git Commitments</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <SparklesIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Zero Client Downtime</span>
            </div>
          </div>

          {/* Controls: Categories, Search, Grid/Table Toggle */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Client engagement categories">
                {(['All', 'Agency & Enterprise', 'Marketing & E-Commerce', 'Startup & Web Apps'] as ConsultantCategory[]).map(
                  (cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => {
                          setActiveCategory(cat);
                          trackEvent('filter_consultant_category', { category: cat });
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
                  }
                )}
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
                placeholder="Search by client name, industry, tech stack, or deliverable..."
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
              Showing <strong className="text-white">{filteredClients.length}</strong> of {projectsConsultant.length} deployments
            </span>
            {searchQuery && (
              <span>
                Filtered by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Clients Grid or Table View */}
          {filteredClients.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
              <FilterIcon size={32} className="mx-auto text-[#8a928f] mb-3 opacity-60" />
              <h3 className="font-display font-semibold text-lg text-white mb-1">
                No client deployments match your criteria
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client, idx) => (
                <ClientCard
                  key={client.id}
                  client={client}
                  index={idx}
                  onOpenDetails={handleOpenClient}
                />
              ))}
            </div>
          ) : (
            <ClientDirectoryTable
              clients={filteredClients}
              onOpenDetails={handleOpenClient}
            />
          )}

          {/* Editorial Callout: Next Section UI/UX */}
          <div className="mt-16 sm:mt-24 p-8 rounded-3xl bg-[#121614] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-[#c6ff00]/40 transition-all duration-300">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                // 03 Design Systems &amp; UI/UX
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Looking for design systems and atomic components?
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Explore 5 production Figma design systems, interactive mobile prototypes, and 450+ design tokens.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/ui-ux')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.25)] hover:shadow-[0_0_30px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <span>Explore /ui-ux Page</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Client Details Modal */}
      <Suspense fallback={null}>
        {isModalOpen && selectedClient && (
          <ClientModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            client={selectedClient}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ConsultantPage;
