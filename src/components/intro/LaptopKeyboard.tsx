import React from 'react';
import { IntroScene } from './types';

interface LaptopKeyboardProps {
  scene: IntroScene;
  isLit: boolean;
}

export const LaptopKeyboard: React.FC<LaptopKeyboardProps> = ({ scene, isLit }) => {
  const isPoweredOn =
    isLit || scene === 'powering-on' || scene === 'booting' || scene === 'zooming';

  // Keycap rows layout with authentic hardware symbols
  const functionRow = ['⎋', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '⏻'];
  const numberRow = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'];
  const rowQ = ['⇥', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
  const rowA = ['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '⏎'];
  const rowZ = ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⇧'];

  return (
    <div className="w-full h-full p-2 sm:p-3 flex flex-col justify-between select-none relative">
      {/* Keyboard Well: Recessed Anodized Aluminum Tray */}
      <div className="w-full flex-1 rounded-lg bg-[#0a0c0b] p-1 sm:p-1.5 border border-white/[0.05] shadow-[inset_0_2px_6px_rgba(0,0,0,0.85)] relative flex flex-col justify-between overflow-hidden">
        {/* Row 1: Function Row with Glowing Power Button */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[14%]">
          {functionRow.map((key, i) => {
            const isPower = key === '⏻';
            return (
              <div
                key={i}
                className={`flex-1 h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono transition-all duration-700 relative ${
                  isPower
                    ? isPoweredOn
                      ? 'bg-[#18241b] text-[#c6ff00] shadow-[0_0_12px_#c6ff00,0_0_24px_rgba(198,255,0,0.6)] border border-[#c6ff00] ring-1 ring-[#c6ff00]/50 font-bold'
                      : 'bg-[#131614] text-white/30 border border-white/[0.04]'
                    : isPoweredOn
                    ? 'bg-[#141a16] text-[#c6ff00]/90 border border-[#c6ff00]/20 shadow-[0_0_4px_rgba(198,255,0,0.15)]'
                    : 'bg-[#101311] text-white/30 border border-white/[0.03] shadow-[0_1px_1px_rgba(0,0,0,0.4)]'
                }`}
              >
                {key}
                {isPower && isPoweredOn && (
                  <span className="absolute inset-0 rounded-[2.5px] bg-[#c6ff00]/20 animate-pulse pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Row 2: Numbers */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[15%]">
          {numberRow.map((key, i) => {
            const isWide = key === '⌫';
            return (
              <div
                key={i}
                className={`${isWide ? 'flex-[1.5]' : 'flex-1'} h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono transition-all duration-700 ${
                  isPoweredOn
                    ? 'bg-[#141a16] text-[#f2f4f3]/90 border border-[#c6ff00]/15 shadow-[0_0_3px_rgba(198,255,0,0.1)]'
                    : 'bg-[#101311] text-white/30 border border-white/[0.03]'
                }`}
              >
                {key}
              </div>
            );
          })}
        </div>

        {/* Row 3: QWERTY */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[15%]">
          {rowQ.map((key, i) => {
            const isTab = key === '⇥';
            return (
              <div
                key={i}
                className={`${isTab ? 'flex-[1.4]' : 'flex-1'} h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono transition-all duration-700 ${
                  isPoweredOn
                    ? 'bg-[#141a16] text-[#f2f4f3]/90 border border-[#c6ff00]/15 shadow-[0_0_3px_rgba(198,255,0,0.1)]'
                    : 'bg-[#101311] text-white/30 border border-white/[0.03]'
                }`}
              >
                {key}
              </div>
            );
          })}
        </div>

        {/* Row 4: Home Row with F/J tactile bars */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[15%]">
          {rowA.map((key, i) => {
            const isWide = key === '⇪' || key === '⏎';
            const hasHoming = key === 'F' || key === 'J';
            return (
              <div
                key={i}
                className={`${isWide ? 'flex-[1.7]' : 'flex-1'} h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono transition-all duration-700 relative ${
                  isPoweredOn
                    ? 'bg-[#141a16] text-[#f2f4f3]/90 border border-[#c6ff00]/15 shadow-[0_0_3px_rgba(198,255,0,0.1)]'
                    : 'bg-[#101311] text-white/30 border border-white/[0.03]'
                }`}
              >
                {key}
                {hasHoming && (
                  <span className="absolute bottom-[2px] w-2 sm:w-2.5 h-[0.8px] bg-white/40 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Row 5: ZXCVB */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[15%]">
          {rowZ.map((key, i) => {
            const isShift = key === '⇧';
            return (
              <div
                key={i}
                className={`${isShift ? 'flex-[1.9]' : 'flex-1'} h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono transition-all duration-700 ${
                  isPoweredOn
                    ? 'bg-[#141a16] text-[#f2f4f3]/90 border border-[#c6ff00]/15 shadow-[0_0_3px_rgba(198,255,0,0.1)]'
                    : 'bg-[#101311] text-white/30 border border-white/[0.03]'
                }`}
              >
                {key}
              </div>
            );
          })}
        </div>

        {/* Row 6: Bottom Modifiers & Spacebar */}
        <div className="flex items-center justify-between gap-[2.5px] sm:gap-1 h-[15%]">
          <div className={`flex-[1.2] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>fn</div>
          <div className={`flex-[1.2] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>control</div>
          <div className={`flex-[1.2] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>option</div>
          <div className={`flex-[1.5] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>command</div>
          <div className={`flex-[5.5] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] border border-[#c6ff00]/20 shadow-[0_0_6px_rgba(198,255,0,0.15)]' : 'bg-[#101311] border border-white/[0.03]'}`} />
          <div className={`flex-[1.5] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>command</div>
          <div className={`flex-[1.2] h-full rounded-[2.5px] sm:rounded-[3px] flex items-center justify-center text-[6.5px] sm:text-[8.5px] font-mono ${isPoweredOn ? 'bg-[#141a16] text-[#8a928f]' : 'bg-[#101311] text-white/30'}`}>option</div>
        </div>
      </div>
    </div>
  );
};
