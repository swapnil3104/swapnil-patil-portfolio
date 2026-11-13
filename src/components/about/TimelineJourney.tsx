import React, { useState } from 'react';
import {
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  SparklesIcon,
} from '@/components/icons';
import { milestones } from '@/data';
import { MilestoneItem } from '@/types';

type CategoryFilter = 'all' | 'academic' | 'consulting' | 'award' | 'certification';

const categoryMeta: Record<
  MilestoneItem['category'],
  { label: string; icon: React.ReactNode; color: string; badgeClass: string }
> = {
  academic: {
    label: 'Academic',
    icon: <GraduationCapIcon size={14} />,
    color: 'emerald',
    badgeClass: 'bg-[#c6ff00]/10 text-[#c6ff00] border-[#c6ff00]/30',
  },
  consulting: {
    label: 'Consulting & Industry',
    icon: <BriefcaseIcon size={14} />,
    color: 'sky',
    badgeClass: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  },
  award: {
    label: 'Award & Funding',
    icon: <AwardIcon size={14} />,
    color: 'amber',
    badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  },
  certification: {
    label: 'Verified Credential',
    icon: <ShieldCheckIcon size={14} />,
    color: 'purple',
    badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
};

const GIT_COMMITS = [
  'c618ff5 HEAD -> main',
  '7e0230a feat(vision)',
  '5b91df0 release(v2.0)',
  '8d34e12 audit(cwv)',
  '4f81bb3 grant(bplan)',
  '39a7e40 init(adcet)',
];

export const TimelineJourney: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredMilestones = milestones.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="journey" className="scroll-mt-24 space-y-5">
      {/* Header & Category Filters */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#c6ff00] font-semibold">
                // Git Log &middot; Professional Milestones
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-[#8a928f] border border-white/[0.06]">
                {filteredMilestones.length} Commits
              </span>
            </div>
            <p className="text-xs text-[#8a928f] font-mono mt-0.5">
              Chronological record of education, client consulting, research &amp; honors
            </p>
          </div>

          <div className="text-[11px] font-mono text-[#c6ff00] flex items-center gap-1.5 self-start sm:self-auto">
            <SparklesIcon size={13} />
            <span>Verified Timeline</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              { id: 'all', label: 'All' },
              { id: 'academic', label: 'Academic' },
              { id: 'consulting', label: 'Consulting' },
              { id: 'award', label: 'Awards & Grants' },
              { id: 'certification', label: 'Certifications' },
            ] as const
          ).map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 ${
                  isActive
                    ? 'bg-[#c6ff00] text-black font-semibold shadow-sm'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] text-[#8a928f] hover:text-[#f2f4f3] border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline Stream */}
      <div className="relative pl-6 sm:pl-7 border-l-2 border-white/10 space-y-5 before:absolute before:top-0 before:-left-[5px] before:w-2 before:h-2 before:rounded-full before:bg-[#c6ff00]">
        {filteredMilestones.map((item, index) => {
          const meta = categoryMeta[item.category];
          const isExpanded = expandedId === item.id || (!expandedId && index === 0);
          const commitHash = GIT_COMMITS[index % GIT_COMMITS.length];

          return (
            <div
              key={item.id}
              className="relative group transition-all duration-200"
            >
              {/* Timeline Connector Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[35px] top-4 w-3.5 h-3.5 rounded-full border-2 bg-[#0c0e0d] transition-all duration-200 flex items-center justify-center ${
                  index === 0
                    ? 'border-[#c6ff00] ring-4 ring-[#c6ff00]/20'
                    : 'border-white/30 group-hover:border-[#c6ff00]'
                }`}
              >
                {index === 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
                )}
              </div>

              {/* Milestone Card */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  isExpanded
                    ? 'bg-white/[0.04] border-[#c6ff00]/40 shadow-lg shadow-black/40'
                    : 'bg-white/[0.02] hover:bg-white/[0.03] border-white/[0.07] hover:border-white/15'
                }`}
              >
                {/* Top Meta Strip: Category, Git Commit & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] border ${meta.badgeClass}`}
                    >
                      {meta.icon}
                      <span>{meta.label}</span>
                    </span>

                    <span className="text-[11px] text-[#c6ff00] hidden sm:inline">
                      {commitHash}
                    </span>

                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[10px] text-[#f2f4f3] font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-[#8a928f]">
                    {item.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="mb-2">
                  <h4 className="text-base sm:text-lg font-bold font-display text-[#f2f4f3] group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs sm:text-sm font-medium text-[#c6ff00] font-mono mt-0.5">
                    {item.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed font-normal mb-3">
                  {item.description}
                </p>

                {/* Highlights Accordion & Metrics */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/[0.05]">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex items-center justify-between w-full text-left text-xs font-mono text-[#8a928f] hover:text-[#f2f4f3] transition-colors py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRightIcon
                          size={13}
                          className={`text-[#c6ff00] transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                        <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights & Metrics'}</span>
                      </span>

                      {item.metrics && (
                        <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-[#c6ff00] border border-white/[0.08]">
                          {item.metrics.label}: <strong className="text-white">{item.metrics.value}</strong>
                        </span>
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-2.5 space-y-1.5 pl-2 animate-fadeIn">
                        {item.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[#8a928f] leading-relaxed"
                          >
                            <CheckCircle2Icon
                              size={13}
                              className="text-[#c6ff00] shrink-0 mt-0.5"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
