import React from 'react';
import { PROJECT_MODULES } from './types';

interface ProjectModuleCardsProps {
  unlockedModules: string[];
  activeModuleId?: string;
}

export const ProjectModuleCards: React.FC<ProjectModuleCardsProps> = ({
  unlockedModules,
  activeModuleId,
}) => {
  return (
    <div className="w-full space-y-2 select-none">
      <div className="flex items-center justify-between px-1 text-[10px] font-mono text-[#8a928f]">
        <span className="flex items-center gap-1.5 text-[#c6ff00]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-ping" />
          ENGINEERING DOMAINS &amp; SYSTEMS
        </span>
        <span className="tabular-nums">
          {unlockedModules.length} / {PROJECT_MODULES.length} LOADED
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {PROJECT_MODULES.map((module) => {
          const isUnlocked = unlockedModules.includes(module.id);
          const isActive = activeModuleId === module.id;

          return (
            <div
              key={module.id}
              className={`p-2.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                isUnlocked
                  ? isActive
                    ? 'bg-[#18201a] border-[#c6ff00] shadow-[0_0_16px_rgba(198,255,0,0.2)]'
                    : 'bg-[#121614]/90 border-white/[0.12] hover:border-white/[0.25]'
                  : 'bg-black/30 border-white/[0.04] opacity-35'
              }`}
            >
              {/* Top Accent line when active */}
              {isActive && (
                <div className="absolute top-0 inset-x-0 h-0.5 bg-[#c6ff00] shadow-[0_0_8px_#c6ff00]" />
              )}

              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8a928f]">
                  {module.category}
                </span>
                <span
                  className={`text-[8.5px] font-mono px-1.5 py-0.2 rounded border ${
                    module.status === 'ACTIVE'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : module.status === 'DEPLOYED'
                      ? 'bg-[#c6ff00]/10 text-[#c6ff00] border-[#c6ff00]/30'
                      : module.status === 'RESEARCH'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                  }`}
                >
                  {module.status}
                </span>
              </div>

              <h4 className="font-display font-bold text-xs sm:text-[13px] text-[#f2f4f3] truncate mb-1">
                {module.name}
              </h4>

              <div className="font-mono text-[10px] text-[#c6ff00] font-medium mb-1.5">
                {module.metric}
              </div>

              <div className="flex flex-wrap gap-1">
                {module.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-[#8a928f]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
