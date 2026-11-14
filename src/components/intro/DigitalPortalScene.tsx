import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface DigitalPortalSceneProps {
  onComplete: () => void;
}

export const DigitalPortalScene: React.FC<DigitalPortalSceneProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalCoreRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // 1. Initial portal charge up & ring expansion
    tl.fromTo(
      portalCoreRef.current,
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    // 2. Telemetry text bloom
    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.4'
      );
    }

    // 3. Camera hyper-drive warp: zoom deep into portal core
    tl.to(portalCoreRef.current, {
      scale: 18,
      rotation: 45,
      duration: 1.1,
      ease: 'expo.in',
    });

    // 4. Whiteout flash into portfolio dark background
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      },
      '-=0.25'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080a09] overflow-hidden select-none"
    >
      {/* Radial Background Horizon Bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,255,0,0.12)_0%,rgba(12,14,13,0.95)_70%,#080a09_100%)] pointer-events-none" />

      {/* Perspective Grid Tunnel */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #c6ff00 1px, transparent 1px), linear-gradient(to right, rgba(198,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          perspective: '800px',
        }}
      />

      {/* Central Rotating Digital Portal Core */}
      <div
        ref={portalCoreRef}
        className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full flex items-center justify-center pointer-events-none"
      >
        {/* Outer Ring 1: Concentric Lime Glow */}
        <div className="absolute inset-0 rounded-full border border-[#c6ff00]/60 shadow-[0_0_50px_rgba(198,255,0,0.4)] animate-spin" style={{ animationDuration: '8s' }} />

        {/* Outer Ring 2: Dashed Circuit Gyro */}
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#c6ff00]/40 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }} />

        {/* Middle Ring 3: Telemetry Orbit */}
        <div className="absolute inset-10 rounded-full border border-[#c6ff00]/80 shadow-[inset_0_0_30px_rgba(198,255,0,0.3)] animate-pulse" />

        {/* Inner Luminous Singularity */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#c6ff00] via-[#d4ff00] to-white shadow-[0_0_80px_#c6ff00,0_0_140px_rgba(198,255,0,0.8)] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#0c0e0d] border-2 border-[#c6ff00]" />
        </div>
      </div>

      {/* Portal Text Telemetry */}
      <div
        ref={textRef}
        className="absolute bottom-16 sm:bottom-20 z-20 flex flex-col items-center gap-2 text-center"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#121614]/90 border border-[#c6ff00]/40 text-[#c6ff00] font-mono text-xs shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
          <span>ENTERING SWAPNIL PATIL WORKSPACE</span>
        </div>
        <p className="text-[11px] font-mono text-[#8a928f]">
          Architecting Intelligent Systems • 2026 Edition
        </p>
      </div>
    </div>
  );
};

