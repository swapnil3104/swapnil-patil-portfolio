import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/contact';
import {
  GreenCursor,
  ScrollProgressBar,
  CodeParticlesBackground,
} from '@/components/shared';
import { HomePage } from '@/pages/HomePage';
import { useRouter } from '@/hooks/useRouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { trackPageView } from '@/utils/analytics';
import { LaptopStartupIntro } from '@/components/intro';

// Modern Route-Level Code Splitting for Lean Entry Chunks
const WorkPage = React.lazy(() =>
  import('@/pages/WorkPage').then((m) => ({ default: m.WorkPage }))
);
const AboutPage = React.lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ConsultantPage = React.lazy(() =>
  import('@/pages/ConsultantPage').then((m) => ({ default: m.ConsultantPage }))
);
const UIUXPage = React.lazy(() =>
  import('@/pages/UIUXPage').then((m) => ({ default: m.UIUXPage }))
);
const ServicesPage = React.lazy(() =>
  import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const LabPage = React.lazy(() =>
  import('@/pages/LabPage').then((m) => ({ default: m.LabPage }))
);
const ContactPage = React.lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

const INTRO_STORAGE_KEY = 'swapnil_patil_intro_seen_v2';

const checkIntroSeen = () => {
  if (typeof window === 'undefined') return true;
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === 'true';
  } catch {
    return true;
  }
};

const PageFallback: React.FC = () => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-[50vh] flex flex-col items-center justify-center gap-3 font-mono text-xs text-typography-muted"
  >
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
      <span className="text-[#c6ff00] font-semibold">// MOUNTING_VIEW</span>
    </div>
    <span className="text-[11px] text-typography-dim">Loading editorial architecture...</span>
  </div>
);

export const App: React.FC = () => {
  const { currentRoute } = useRouter();
  useScrollReveal();
  const [introActive, setIntroActive] = useState<boolean>(() => !checkIntroSeen());

  const handleIntroComplete = useCallback(() => {
    setIntroActive(false);
  }, []);

  useEffect(() => {
    trackPageView();
  }, [currentRoute]);

  // Replay intro listener
  useEffect(() => {
    const handleReplayEvent = () => {
      setIntroActive(true);
    };
    window.addEventListener('portfolio-replay-intro', handleReplayEvent);
    return () => window.removeEventListener('portfolio-replay-intro', handleReplayEvent);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0e0d] text-[#f2f4f3] flex flex-col selection:bg-[#c6ff00]/25 selection:text-black relative">
      {/* Precision Green Laser Point Cursor */}
      <GreenCursor />

      {/* Top Neon Scroll Progress Bar & Floating Telemetry HUD */}
      <ScrollProgressBar />

      {/* Deep Canvas Ambient Code Particles Motion */}
      <CodeParticlesBackground />

      {/* Skip to Content Link - First in DOM for Accessibility */}
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>

      {/* Interactive 3D Laptop Startup Intro */}
      <LaptopStartupIntro onComplete={handleIntroComplete} />

      {/* Website Shell: Hidden while intro is running to prevent any preview flash */}
      <div
        className={`flex-1 flex flex-col transition-opacity duration-700 ${
          introActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden={introActive}
      >
        {/* Sticky Navigation Header with Mobile Drawer & Scrollspy */}
        <Navbar />

        {/* Main Content Area with Suspense Boundaries for Fast Initial Paint */}
        <main id="main" className="flex-1 relative z-10">
          <Suspense fallback={<PageFallback />}>
            {currentRoute === 'work' && <WorkPage />}
            {currentRoute === 'about' && <AboutPage />}
            {currentRoute === 'consultant' && <ConsultantPage />}
            {currentRoute === 'ui-ux' && <UIUXPage />}
            {currentRoute === 'services' && <ServicesPage />}
            {currentRoute === 'lab' && <LabPage />}
            {currentRoute === 'contact' && <ContactPage />}
            {currentRoute === 'home' && <HomePage />}
          </Suspense>
        </main>

        {/* Global Footer with Full-Bleed Display Typography & Code Animation */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
