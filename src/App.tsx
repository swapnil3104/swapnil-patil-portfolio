import React, { useEffect } from 'react';
import { Navbar, TerminalPreloader } from '@/components/layout';
import { Footer } from '@/components/contact';
import {
  HomePage,
  WorkPage,
  AboutPage,
  ConsultantPage,
  UIUXPage,
  ServicesPage,
  LabPage,
  ContactPage,
} from '@/pages';
import { useRouter } from '@/hooks/useRouter';
import { trackPageView } from '@/utils/analytics';

export const App: React.FC = () => {
  const { currentRoute } = useRouter();

  useEffect(() => {
    trackPageView();
  }, [currentRoute]);

  return (
    <div className="min-h-screen bg-[#0c0e0d] text-[#f2f4f3] flex flex-col selection:bg-[#c6ff00]/25 selection:text-black">
      {/* Skip to Content Link - First in DOM */}
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>

      {/* Terminal Boot Preloader */}
      <TerminalPreloader />

      {/* Sticky Navigation Header with Mobile Drawer & Scrollspy */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        {currentRoute === 'work' && <WorkPage />}
        {currentRoute === 'about' && <AboutPage />}
        {currentRoute === 'consultant' && <ConsultantPage />}
        {currentRoute === 'ui-ux' && <UIUXPage />}
        {currentRoute === 'services' && <ServicesPage />}
        {currentRoute === 'lab' && <LabPage />}
        {currentRoute === 'contact' && <ContactPage />}
        {currentRoute === 'home' && <HomePage />}
      </main>

      {/* Global Footer with Full-Bleed Display Typography */}
      <Footer />
    </div>
  );
};

export default App;
