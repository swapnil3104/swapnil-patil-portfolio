import React, { useState, useEffect, useRef } from 'react';
import { IntroScene, BootStep } from './types';
import { LaptopScreen } from './LaptopScreen';
import { LaptopKeyboard } from './LaptopKeyboard';

interface LaptopDeviceProps {
  scene: IntroScene;
  activeStepIndex: number;
  bootSteps: BootStep[];
  progressPercent: number;
  screenGlowOpacity: number;
  keyboardLit: boolean;
  screenRef?: React.RefObject<HTMLDivElement>;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const LaptopDevice: React.FC<LaptopDeviceProps> = ({
  scene,
  activeStepIndex,
  bootSteps,
  progressPercent,
  screenGlowOpacity,
  keyboardLit,
  screenRef,
  containerRef,
}) => {
  // Mouse 3D parallax tilt state
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const targetRef = containerRef || internalContainerRef;

  useEffect(() => {
    // Only enable mouse parallax during welcome and initial powering-on scenes
    if (scene === 'zooming' || scene === 'completed' || scene === 'portal') {
      setRotate({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const normY = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Refined 3D rotation angles (-4.5 to +4.5 on X, -7 to +7 on Y)
      setRotate({
        x: -normY * 4.5,
        y: normX * 7,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [scene]);

  const isPoweredOn =
    keyboardLit ||
    scene === 'powering-on' ||
    scene === 'booting' ||
    scene === 'zooming';

  return (
    <div
      ref={targetRef}
      className="relative w-full mx-auto transition-transform duration-300 ease-out"
      style={{
        maxWidth: 'min(92vw, 580px, 46vh)',
        perspective: '1300px',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* 1. Ambient Lighting using Portfolio Accent Color (#c6ff00) */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[130%] h-60 rounded-full pointer-events-none transition-all duration-1000 blur-3xl"
        style={{
          background: isPoweredOn
            ? 'radial-gradient(circle, rgba(198, 255, 0, 0.24) 0%, rgba(198, 255, 0, 0.08) 45%, transparent 75%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 65%)',
          opacity: isPoweredOn ? 1 : 0.4,
        }}
      />

      {/* 2. Floating Ambient Phosphor Dust Particles */}
      <div className="absolute -inset-10 pointer-events-none overflow-hidden">
        <span
          className="absolute w-1.5 h-1.5 rounded-full bg-[#c6ff00]/40 blur-[1px] animate-pulse"
          style={{ top: '15%', left: '10%' }}
        />
        <span
          className="absolute w-1 h-1 rounded-full bg-[#c6ff00]/60 blur-[0.5px]"
          style={{ top: '35%', right: '12%' }}
        />
        <span
          className="absolute w-2 h-2 rounded-full bg-[#c6ff00]/30 blur-[1px] animate-pulse"
          style={{ bottom: '20%', left: '20%' }}
        />
        <span
          className="absolute w-1 h-1 rounded-full bg-white/40"
          style={{ bottom: '25%', right: '18%' }}
        />
      </div>

      {/* ========================================================
          1. LAPTOP LID & SCREEN (Upper Assembly)
         ======================================================== */}
      <div
        className="relative w-full aspect-[16/10.5] rounded-t-2xl sm:rounded-t-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#1b201d] via-[#121614] to-[#0c0e0d] border-t border-x border-white/[0.18] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500"
        style={{
          transformOrigin: 'bottom center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Edge Specular Aluminum Chamfer */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* FaceTime Camera & Status Indicator */}
        <div className="absolute top-1.5 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a0c0b] border border-white/20 flex items-center justify-center">
            <div
              className={`w-0.5 h-0.5 rounded-full ${
                isPoweredOn ? 'bg-[#c6ff00] shadow-[0_0_4px_#c6ff00]' : 'bg-white/20'
              }`}
            />
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
        </div>

        {/* Display Screen Chassis Well */}
        <div
          ref={screenRef}
          className="relative w-full h-full rounded-[10px] sm:rounded-xl overflow-hidden bg-black border border-white/[0.1] shadow-[inset_0_0_12px_rgba(0,0,0,0.9)]"
        >
          <LaptopScreen
            scene={scene}
            activeStepIndex={activeStepIndex}
            bootSteps={bootSteps}
            progressPercent={progressPercent}
            screenGlowOpacity={screenGlowOpacity}
          />
        </div>
      </div>

      {/* ========================================================
          2. HINGE CYLINDER
         ======================================================== */}
      <div className="relative w-full flex justify-center -mt-[1px] z-10">
        <div className="w-[50%] h-2.5 sm:h-3 rounded-b-md bg-gradient-to-r from-[#171b19] via-[#242b27] to-[#171b19] border-b border-x border-white/[0.12] shadow-inner" />
      </div>

      {/* ========================================================
          3. LAPTOP BASE DECK (Keyboard, Trackpad & Power LED)
         ======================================================== */}
      <div
        className="relative w-[104%] -left-[2%] aspect-[16/7.5] rounded-b-2xl sm:rounded-b-3xl p-2 sm:p-3 bg-gradient-to-b from-[#131715] via-[#0f1210] to-[#080a09] border-b border-x border-white/[0.15] shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(42deg)',
        }}
      >
        {/* Top Deck Anodized Hairline Highlight */}
        <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Integrated Mechanical Keyboard Component with Glowing Power Key */}
        <div className="w-full h-[68%]">
          <LaptopKeyboard scene={scene} isLit={keyboardLit} />
        </div>

        {/* Precision Glass Trackpad */}
        <div className="w-[30%] sm:w-[28%] h-[26%] mx-auto mt-1 sm:mt-1.5 rounded-md sm:rounded-lg bg-gradient-to-b from-[#171b19] to-[#0f1311] border border-white/[0.08] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />

        {/* Front Edge Chamfer Notch (MacBook Lip) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-1 rounded-t-sm bg-white/10" />
      </div>
    </div>
  );
};
