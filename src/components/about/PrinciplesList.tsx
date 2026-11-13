import React from 'react';
import { TargetIcon, GitBranchIcon, LayoutIcon, BookOpenIcon } from '@/components/icons';
import { principles } from '@/data';

const principleIcons: Record<string, React.ReactNode> = {
  '01': <TargetIcon size={18} className="text-[#c6ff00]" />,
  '02': <GitBranchIcon size={18} className="text-[#c6ff00]" />,
  '03': <LayoutIcon size={18} className="text-[#c6ff00]" />,
  '04': <BookOpenIcon size={18} className="text-[#c6ff00]" />,
};

export const PrinciplesList: React.FC = () => {
  return (
    <div className="space-y-4 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#c6ff00] font-semibold">
            // Core Engineering Principles
          </span>
          <span className="text-[11px] font-mono text-[#8a928f]">
            (4 Tenets)
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#8a928f] hidden sm:inline">
          Architectural Philosophy
        </span>
      </div>

      {/* Principles Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {principles.map((p) => {
          const icon = principleIcons[p.number] || <TargetIcon size={18} className="text-[#c6ff00]" />;

          return (
            <div
              key={p.number}
              className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Monospace Number & Icon */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[#c6ff00]/10 text-[#c6ff00] border border-[#c6ff00]/25">
                      //{p.number}
                    </span>
                    <h3 className="text-base font-bold font-display text-[#f2f4f3] group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[#c6ff00] group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                </div>

                {/* Tagline */}
                {p.tagline && (
                  <div className="text-[11px] font-mono text-[#c6ff00]/90 mb-2 leading-tight">
                    &bull; {p.tagline}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-[#8a928f] leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>

              {/* Status footer pill */}
              <div className="pt-3 mt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#8a928f]">
                <span>Verified Metric</span>
                <span className="text-[#c6ff00]">Production Standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
