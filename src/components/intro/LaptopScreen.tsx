import React from 'react';
import { IntroScene, BootStep } from './types';

interface LaptopScreenProps {
  scene: IntroScene;
  activeStepIndex: number;
  bootSteps: BootStep[];
  progressPercent: number;
  screenGlowOpacity: number;
}

export const LaptopScreen: React.FC<LaptopScreenProps> = ({
  scene,
  activeStepIndex,
  bootSteps,
  progressPercent,
  screenGlowOpacity,
}) => {
  const isOff = scene === 'welcome';
  const isPoweringOn = scene === 'powering-on';
  const isBooting = scene === 'booting';

  return (
    <div className="w-full h-full bg-[#080a09] relative overflow-hidden rounded-[8px] flex flex-col font-mono select-none">
      {/* 1. Deep OLED Screen Black & Electric Lime Phosphor Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          opacity: screenGlowOpacity,
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(198, 255, 0, 0.14) 0%, rgba(12, 14, 13, 0.95) 75%, #080a09 100%)',
        }}
      />

      {/* 2. Realistic Screen Reflections (Diagonal Specular Glass Sheen) */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-40"
        style={{
          background:
            'linear-gradient(130deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.03) 24%, transparent 50%, rgba(198,255,0,0.02) 100%)',
        }}
      />
      {/* Secondary micro-sheen */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-20"
        style={{
          background:
            'linear-gradient(20deg, transparent 40%, rgba(255,255,255,0.06) 65%, transparent 75%)',
        }}
      />

      {/* 3. Scene 1: Screen Off Standby State */}
      {isOff && (
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center backdrop-blur-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c6ff00]/40 animate-pulse shadow-[0_0_8px_rgba(198,255,0,0.5)]" />
          </div>
          <span className="text-[8px] sm:text-[9.5px] text-[#8a928f] tracking-[0.25em] mt-3 uppercase font-mono">
            Standby &bull; Click Start
          </span>
        </div>
      )}

      {/* 4. Scene 2: Power-On Logo Ignition State */}
      {isPoweringOn && (
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10 animate-fadeIn">
          {/* Glowing Monogram / Workstation Emblem */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-[#c6ff00]/20 blur-2xl animate-pulse" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-[#c6ff00]/50 bg-[#121614]/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(198,255,0,0.4)]">
              <span className="text-base sm:text-lg font-bold text-[#f2f4f3] tracking-tighter">
                SP<span className="text-[#c6ff00]">.</span>
              </span>
            </div>
          </div>
          <div className="mt-3.5 sm:mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-ping" />
            <span className="text-[9px] sm:text-[10px] text-[#c6ff00] tracking-widest uppercase font-mono font-medium">
              Swapnil Patil • Workstation Ignition
            </span>
          </div>
        </div>
      )}

      {/* 5. Scene 3: Personalized High-Tech Terminal Boot Sequence State */}
      {isBooting && (
        <div className="w-full h-full flex flex-col justify-between p-2 sm:p-2.5 text-[#f2f4f3] relative z-10 text-[8px] sm:text-[9.5px]">
          {/* Top Window Bar Chrome */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-1 sm:pb-1.5 text-[7.5px] sm:text-[9px] text-[#8a928f]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] inline-block shadow-[0_0_4px_rgba(239,68,68,0.5)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#eab308] inline-block shadow-[0_0_4px_rgba(234,179,8,0.5)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
              <span className="ml-2 text-[#f2f4f3]/80 font-mono hidden sm:inline">
                swapnil@workspace: ~/terminal-startup
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#c6ff00] bg-[#c6ff00]/10 px-1.5 py-0.5 rounded border border-[#c6ff00]/30 font-semibold">
                SYSTEM_BOOT
              </span>
              <span className="text-[#8a928f] hidden sm:inline">TTY_1</span>
            </div>
          </div>

          {/* Terminal Command Output Lines (Personalized Startup Sequence) */}
          <div className="flex-1 py-1.5 overflow-hidden flex flex-col justify-center space-y-1 font-mono">
            {bootSteps.slice(0, activeStepIndex + 1).map((step, idx) => {
              const isCurrent = idx === activeStepIndex;
              return (
                <div
                  key={step.id}
                  className={`flex items-start gap-1.5 leading-tight transition-opacity duration-200 ${
                    isCurrent ? 'text-[#c6ff00]' : 'text-[#8a928f]'
                  }`}
                >
                  <span className="text-[#c6ff00] flex-shrink-0 select-none">›</span>
                  <div className="truncate">
                    <span className="font-semibold text-[#f2f4f3]">{step.label}</span>
                    <span className="text-[7px] sm:text-[8px] text-[#8a928f] ml-1.5 hidden md:inline">
                      [{step.detail}]
                    </span>
                  </div>
                  {isCurrent && (
                    <span className="w-1.5 h-2.5 bg-[#c6ff00] inline-block animate-pulse flex-shrink-0 ml-1" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Dynamic Telemetry & Progress Indicator */}
          <div className="space-y-1 pt-1 border-t border-white/[0.08]">
            <div className="flex items-center justify-between text-[7px] sm:text-[8.5px] font-mono text-[#8a928f]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-ping" />
                <span className="text-[#c6ff00] font-semibold">
                  {progressPercent >= 100 ? 'INITIALIZATION_COMPLETE' : 'LOADING_WORKSPACE'}
                </span>
              </span>
              <span className="tabular-nums font-semibold text-[#f2f4f3]">
                {Math.round(progressPercent)}%
              </span>
            </div>

            {/* Neon Accent Progress Bar Track */}
            <div className="w-full h-1 sm:h-1.5 rounded-full bg-white/[0.06] overflow-hidden p-[0.5px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#c6ff00] to-[#d4ff00] shadow-[0_0_8px_#c6ff00] transition-[width] duration-150 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
