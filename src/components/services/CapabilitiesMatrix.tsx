import React, { useState, useMemo } from 'react';
import { capabilities, projectsGitHub, projectsConsultant, projectsUIUX } from '@/data';
import {
  CpuIcon,
  CodeIcon,
  GlobeIcon,
  PaletteIcon,
  SparklesIcon,
  EyeIcon,
  SearchIcon,
  ExternalLinkIcon,
  CheckIcon,
} from '@/components/icons';

interface CapabilitiesMatrixProps {
  onSkillSelect?: (skill: string) => void;
}

export const CapabilitiesMatrix: React.FC<CapabilitiesMatrixProps> = ({ onSkillSelect }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'CpuIcon':
        return <CpuIcon size={18} className="text-accent-emerald" />;
      case 'EyeIcon':
        return <EyeIcon size={18} className="text-accent-emerald" />;
      case 'SparklesIcon':
        return <SparklesIcon size={18} className="text-accent-emerald" />;
      case 'CodeIcon':
        return <CodeIcon size={18} className="text-accent-emerald" />;
      case 'GlobeIcon':
        return <GlobeIcon size={18} className="text-accent-emerald" />;
      case 'PaletteIcon':
        return <PaletteIcon size={18} className="text-accent-emerald" />;
      default:
        return <SparklesIcon size={18} className="text-accent-emerald" />;
    }
  };

  // Find matching projects for selected skill
  const matchingProjects = useMemo(() => {
    if (!selectedSkill) return { github: [], consultant: [], uiux: [] };

    const q = selectedSkill.toLowerCase().trim();

    const gh = projectsGitHub.filter(
      (p) =>
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q)
    );

    const con = projectsConsultant.filter(
      (c) =>
        c.techStack.some((t) => t.toLowerCase().includes(q)) ||
        c.summary.toLowerCase().includes(q)
    );

    const ui = projectsUIUX.filter(
      (u) =>
        u.features.some((f) => f.toLowerCase().includes(q)) ||
        u.description.toLowerCase().includes(q) ||
        (q === 'figma' && u.figmaUrl)
    );

    return { github: gh, consultant: con, uiux: ui };
  }, [selectedSkill]);

  const totalMatchingCount =
    matchingProjects.github.length +
    matchingProjects.consultant.length +
    matchingProjects.uiux.length;

  const handleChipClick = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
      if (onSkillSelect) onSkillSelect(skill);
    }
  };

  return (
    <div id="expertise" className="mt-16 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-xs text-accent-emerald tracking-wide">
            // Verified Technical Capabilities & Frameworks
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-typography-headline mt-1.5">
            Technical Capabilities Matrix
          </h3>
          <p className="text-xs sm:text-sm text-typography-muted max-w-2xl mt-1 leading-relaxed">
            Categorized competency breakdown across applied AI/ML, computer vision pipelines, full-stack architectures, and UI/UX design tokens. Click any skill chip to inspect associated production deployments.
          </p>
        </div>

        {/* Skill Search Box */}
        <div className="relative w-full md:w-64 shrink-0">
          <SearchIcon
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-typography-dim pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter capabilities..."
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-typography-headline placeholder:text-typography-dim focus:outline-none focus:border-accent-emerald transition-colors font-mono"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-typography-dim hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Selected Skill Banner HUD */}
      {selectedSkill && (
        <div className="mb-6 p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 animate-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
            <span className="text-xs font-mono text-typography-headline font-semibold">
              Filter Active: <span className="text-accent-emerald font-bold">{selectedSkill}</span>
            </span>
            <span className="text-[11px] font-mono text-typography-dim">
              &bull; Verified in {totalMatchingCount} project{totalMatchingCount !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent-emerald text-bg-primary text-xs font-mono font-bold hover:bg-emerald-400 transition-colors"
            >
              <span>View in Work Section</span>
              <ExternalLinkIcon size={12} />
            </a>
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="px-2.5 py-1 rounded-md bg-white/[0.08] hover:bg-white/[0.15] text-[11px] font-mono text-typography-headline transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* 6 Capabilities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {capabilities.map((cat) => {
          const filteredSkills = cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
          );

          if (searchQuery.trim() && filteredSkills.length === 0) return null;

          return (
            <div
              key={cat.category}
              className="tech-card p-5 sm:p-6 flex flex-col justify-between hover:border-white/15 transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald shrink-0">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-typography-headline">
                    {cat.category}
                  </h4>
                </div>

                {/* Category Description */}
                {cat.description && (
                  <p className="text-[11px] text-typography-muted leading-relaxed mb-4">
                    {cat.description}
                  </p>
                )}

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                  {filteredSkills.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleChipClick(skill)}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-accent-emerald text-bg-primary font-bold shadow-md shadow-accent-emerald/20'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-typography-headline'
                        }`}
                        title={`Click to inspect projects using ${skill}`}
                      >
                        {isSelected && <CheckIcon size={12} />}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

