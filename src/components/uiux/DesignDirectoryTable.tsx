import React from 'react';
import { ProjectUIUX } from '@/types';
import {
  FigmaIcon,
  ExternalLinkIcon,
  SmartphoneIcon,
  MonitorIcon,
  EyeIcon,
} from '@/components/icons';

interface DesignDirectoryTableProps {
  designs: ProjectUIUX[];
  onOpenDetails: (design: ProjectUIUX) => void;
}

export const DesignDirectoryTable: React.FC<DesignDirectoryTableProps> = ({
  designs,
  onOpenDetails,
}) => {
  if (designs.length === 0) {
    return (
      <div className="p-12 text-center rounded-xl bg-white/[0.02] border border-white/[0.08]">
        <p className="text-sm font-mono text-typography-muted">No design systems match your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0c0f0d]">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03] text-typography-muted font-mono uppercase tracking-wider text-[11px]">
            <th className="py-3.5 px-4 font-semibold w-12">#</th>
            <th className="py-3.5 px-4 font-semibold">Design System / Project</th>
            <th className="py-3.5 px-4 font-semibold">Platform & Ecosystem</th>
            <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Design Tokens & Grid Scale</th>
            <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Screen Coverage</th>
            <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06]">
          {designs.map((design, index) => {
            const isMobile = design.category === 'Mobile App';

            return (
              <tr
                key={design.id}
                className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                onClick={() => onOpenDetails(design)}
              >
                {/* Index */}
                <td className="py-4 px-4 font-mono text-typography-dim">
                  0{index + 1}
                </td>

                {/* Project Name & Domain */}
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-typography-headline group-hover:text-accent-emerald transition-colors text-sm">
                      {design.title.split('—')[0].trim()}
                    </span>
                    <span className="text-[11px] font-mono text-typography-muted">
                      {design.domain}
                    </span>
                  </div>
                </td>

                {/* Platform */}
                <td className="py-4 px-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-typography-body font-mono text-[11px]">
                    {isMobile ? (
                      <SmartphoneIcon size={12} className="text-accent-emerald" />
                    ) : (
                      <MonitorIcon size={12} className="text-accent-emerald" />
                    )}
                    <span>{design.platform.split('&')[0].trim()}</span>
                  </div>
                </td>

                {/* Tokens & Grid Scale */}
                <td className="py-4 px-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    {design.designSystemTokens ? (
                      design.designSystemTokens.slice(0, 2).map((tok, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-typography-muted"
                        >
                          {tok.value.split('(')[0].trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-typography-dim font-mono text-[11px]">Auto-Layout 5.0</span>
                    )}
                  </div>
                </td>

                {/* Screen Count */}
                <td className="py-4 px-4 hidden sm:table-cell">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-accent-emerald/10 border border-accent-emerald/25 text-accent-emerald font-semibold">
                    {design.screenCount || 'Interactive'}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="inline-flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenDetails(design)}
                      className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-typography-muted hover:text-white transition-colors"
                      title="Inspect design specifications"
                    >
                      <EyeIcon size={14} />
                    </button>
                    <a
                      href={design.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-accent-emerald/10 hover:bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30 text-[11px] font-mono font-semibold transition-colors"
                      title="Open Figma file"
                    >
                      <FigmaIcon size={12} />
                      <span>Figma</span>
                      <ExternalLinkIcon size={11} />
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

