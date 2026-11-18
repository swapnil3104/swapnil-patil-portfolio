import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { Volume2, VolumeX, FastForward, Play } from 'lucide-react';
import { IntroScene, BOOT_STEPS } from './types';
import { LaptopDevice } from './LaptopDevice';
import { CodeEditorScene } from './CodeEditorScene';
import {
  playStartupChime,
  playBootTick,
  playZoomWhoosh,
  playButtonClick,
  getStoredMuteState,
  setStoredMuteState,
} from './soundEffects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface LaptopStartupIntroProps {
  onComplete?: () => void;
}

const STORAGE_KEY = 'swapnil_patil_intro_seen_v2';

export const LaptopStartupIntro: React.FC<LaptopStartupIntroProps> = ({ onComplete }) => {
  const prefersReducedMotion = useReducedMotion();

  // Check if user has already experienced the intro in this browser session
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      return seen !== 'true';
    } catch {
      return true;
    }
  });

  const [scene, setScene] = useState<IntroScene>('welcome');
  const [isMuted, setIsMuted] = useState<boolean>(getStoredMuteState);
  const [keyboardLit, setKeyboardLit] = useState<boolean>(false);
  const [screenGlowOpacity, setScreenGlowOpacity] = useState<number>(0.2);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  // Animation DOM refs
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const laptopWrapperRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const welcomeTextRef = useRef<HTMLDivElement>(null);
  const startBtnRef = useRef<HTMLButtonElement>(null);

  // Audio mute toggle
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      setStoredMuteState(next);
      if (!next) {
        playButtonClick(false);
      }
      return next;
    });
  };

  // Immediate Skip handler
  const handleSkip = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          setIsVisible(false);
          onComplete?.();
        },
      });
    } else {
      setIsVisible(false);
      onComplete?.();
    }
  }, [onComplete]);

  // Coding Scene completion callback
  const handleCodingComplete = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
    setIsVisible(false);
    setScene('completed');
    onComplete?.();
  }, [onComplete]);

  // Prevent background scrolling while intro is active
  useEffect(() => {
    if (isVisible) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isVisible]);

  // Listen to Replay event from footer or portfolio controls
  useEffect(() => {
    const handleReplay = () => {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore
      }
      setScene('welcome');
      setKeyboardLit(false);
      setScreenGlowOpacity(0.2);
      setActiveStepIndex(0);
      setProgressPercent(0);
      setIsVisible(true);
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { opacity: 1, pointerEvents: 'auto' });
        }
        if (laptopWrapperRef.current) {
          gsap.set(laptopWrapperRef.current, {
            scale: 1,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            opacity: 1,
          });
        }
        if (welcomeTextRef.current) {
          gsap.set(welcomeTextRef.current, { opacity: 1, y: 0 });
        }
        if (startBtnRef.current) {
          gsap.set(startBtnRef.current, { opacity: 1, scale: 1, pointerEvents: 'auto' });
        }
      });
    };

    window.addEventListener('portfolio-replay-intro', handleReplay);
    return () => window.removeEventListener('portfolio-replay-intro', handleReplay);
  }, []);

  // Keyboard shortcut: Esc to skip
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleSkip]);

  // Reduced motion: auto-skip or quick fade
  useEffect(() => {
    if (prefersReducedMotion && isVisible) {
      handleSkip();
    }
  }, [prefersReducedMotion, isVisible, handleSkip]);

  // ----------------------------------------------------
  // SCENE 2: POWER ON ANIMATION (When user clicks START)
  // ----------------------------------------------------
  const handleStart = () => {
    if (scene !== 'welcome') return;

    setScene('powering-on');

    // 1. Play tactile click and rich polyphonic startup chime
    playButtonClick(isMuted);
    playStartupChime(isMuted);

    // 2. Animate START button disappearance and text fade
    if (startBtnRef.current && welcomeTextRef.current) {
      gsap.to(startBtnRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
        pointerEvents: 'none',
      });
      gsap.to(welcomeTextRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    // 3. Staggered keyboard backlighting and screen illumination
    gsap.to(
      {},
      {
        duration: 0.35,
        onComplete: () => {
          setKeyboardLit(true);
          setScreenGlowOpacity(1);
        },
      }
    );

    // 4. Proceed to Scene 3 (System Boot) after power-on sequence
    const bootTimer = setTimeout(() => {
      setScene('booting');
    }, 1400);

    return () => clearTimeout(bootTimer);
  };

  // ----------------------------------------------------
  // SCENE 3: SYSTEM BOOT SEQUENCE
  // ----------------------------------------------------
  useEffect(() => {
    if (scene !== 'booting') return;

    let currentStep = 0;
    const totalSteps = BOOT_STEPS.length;

    // Progress bar animation timeline
    const progressTimeline = { val: 0 };
    const progressTween = gsap.to(progressTimeline, {
      val: 100,
      duration: 3.3,
      ease: 'power1.inOut',
      onUpdate: () => {
        setProgressPercent(progressTimeline.val);
      },
    });

    // Step-by-step sequential boot loader
    const stepInterval = setInterval(() => {
      currentStep++;
      if (currentStep < totalSteps) {
        setActiveStepIndex(currentStep);
        playBootTick(isMuted, 800 + currentStep * 110);
      } else {
        clearInterval(stepInterval);
        setActiveStepIndex(totalSteps - 1);
        // Completed loading 100% -> Trigger Scene 4 Camera Zoom
        setTimeout(() => {
          triggerCameraZoom();
        }, 350);
      }
    }, 550);

    return () => {
      clearInterval(stepInterval);
      progressTween.kill();
    };
  }, [scene, isMuted]);

  // ----------------------------------------------------
  // SCENE 4: CINEMATIC CAMERA ZOOM TRANSITION
  // ----------------------------------------------------
  const triggerCameraZoom = () => {
    setScene('zooming');
    playZoomWhoosh(isMuted);

    if (prefersReducedMotion) {
      handleSkip();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setScene('coding');
      },
    });

    if (laptopWrapperRef.current) {
      tl.to(laptopWrapperRef.current, {
        scale: 6.2,
        y: '26%',
        z: 750,
        rotateX: 0,
        rotateY: 0,
        duration: 1.35,
        ease: 'power3.inOut',
      });
    } else {
      setScene('coding');
    }
  };

  if (!isVisible) return null;

  // Scene 5: Full-screen Cinematic Coding Environment & Portal
  if (scene === 'coding') {
    return (
      <CodeEditorScene
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onComplete={handleCodingComplete}
        onSkip={handleSkip}
      />
    );
  }

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-label="Interactive Workspace Startup Intro"
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-[#080a09] text-[#f2f4f3] select-none font-mono"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 35%, #131715 0%, #0c0e0d 50%, #080a09 100%)',
      }}
    >
      {/* Background Cinematic Atmosphere Horizon & Grid in Portfolio Lime (#c6ff00) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient horizontal horizon line */}
        <div className="absolute top-[48%] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c6ff00]/25 to-transparent blur-[1px]" />

        {/* Subtle perspective grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #c6ff00 1px, transparent 1px), linear-gradient(to bottom, #c6ff00 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient top vignette bloom */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-[#c6ff00]/10 rounded-full blur-3xl" />
      </div>

      {/* ========================================================
          TOP UTILITY BAR (Telemetry, Sound, Skip Intro)
         ======================================================== */}
      <header className="relative z-30 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c6ff00] shadow-[0_0_8px_rgba(198,255,0,0.8)] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#f2f4f3]/70 uppercase">
            Swapnil Patil &bull; Workspace OS
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute intro audio' : 'Mute intro audio'}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.2] transition-colors text-[#8a928f] hover:text-[#f2f4f3] text-xs font-mono focus:outline-none focus:ring-1 focus:ring-[#c6ff00]"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8a928f]" />
                <span className="hidden sm:inline text-[11px]">MUTED</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#c6ff00]" />
                <span className="hidden sm:inline text-[11px]">SOUND ON</span>
              </>
            )}
          </button>

          {/* Skip Intro Button */}
          <button
            type="button"
            onClick={handleSkip}
            aria-label="Skip interactive intro"
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-[#c6ff00]/40 text-[#8a928f] hover:text-[#f2f4f3] text-xs font-mono transition-all duration-200"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5 text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline text-[10px] text-[#4f5854] ml-0.5">[Esc]</span>
          </button>
        </div>
      </header>

      {/* ========================================================
          CENTER 3D WORKSTATION HARDWARE STAGE
         ======================================================== */}
      <main
        ref={contentWrapperRef}
        className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 w-full"
      >
        {/* Welcome Narrative Header */}
        <div
          ref={welcomeTextRef}
          className="text-center mb-2.5 sm:mb-3.5 space-y-1 transition-opacity duration-300 max-w-md mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-[#c6ff00] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
            <span>Interactive Digital Identity</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#f2f4f3] tracking-tight">
            Swapnil Patil
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#8a928f] max-w-sm mx-auto leading-relaxed">
            AI/ML Engineer &bull; Python Developer &bull; UI/UX Architect
          </p>
        </div>

        {/* 3D Interactive Laptop Device Container */}
        <div
          ref={laptopWrapperRef}
          className="w-full max-w-[620px] flex items-center justify-center transform-gpu"
          style={{ willChange: 'transform, opacity' }}
        >
          <LaptopDevice
            scene={scene}
            activeStepIndex={activeStepIndex}
            bootSteps={BOOT_STEPS}
            progressPercent={progressPercent}
            screenGlowOpacity={screenGlowOpacity}
            keyboardLit={keyboardLit}
            screenRef={screenRef}
          />
        </div>

        {/* Scene 1: START WORKSPACE Button */}
        {scene === 'welcome' && (
          <div className="mt-3.5 sm:mt-5 flex flex-col items-center gap-2">
            <button
              ref={startBtnRef}
              type="button"
              onClick={handleStart}
              aria-label="Power on laptop workstation and launch portfolio experience"
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(198,255,0,0.35)] hover:shadow-[0_0_36px_rgba(198,255,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-black text-black group-hover:scale-110 transition-transform" />
              </div>

              <span>START WORKSPACE</span>
              <span className="text-[10px] font-mono tracking-wider opacity-70 hidden sm:inline">&bull; OS</span>
            </button>
          </div>
        )}

        {/* Scene 2 & 3: Live Status Telemetry Indicator */}
        {scene !== 'welcome' && scene !== 'completed' && (
          <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-[#c6ff00] animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
            <span className="tracking-widest uppercase text-[10px] sm:text-[11px]">
              {scene === 'powering-on' && 'Powering on workstation hardware...'}
              {scene === 'booting' && `Initializing kernel subsystems [${Math.round(progressPercent)}%]...`}
              {scene === 'zooming' && 'Workspace ready • Entering environment...'}
            </span>
          </div>
        )}
      </main>

      {/* ========================================================
          BOTTOM FOOTER TELEMETRY
         ======================================================== */}
      <footer className="relative z-30 flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[11px] font-mono text-[#8a928f]/60 border-t border-white/[0.05]">
        <div className="flex items-center gap-3">
          <span>PORTFOLIO OS // 2026</span>
          <span className="hidden sm:inline">&bull; AI / ML &bull; COMPUTER VISION &bull; UI/UX</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#8a928f]/40">Move cursor to tilt device in 3D</span>
          <span className="text-[#c6ff00]/90 font-medium">SYS_STATUS: OPTIMAL</span>
        </div>
      </footer>
    </div>
  );
};
