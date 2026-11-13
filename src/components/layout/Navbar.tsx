import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { StatusDot, GitHubIcon, ExternalLinkIcon, DownloadIcon } from '@/components/icons';
import { MobileDrawer, NavItem } from './MobileDrawer';
import { useScrollspy } from '@/hooks/useScrollspy';
import { useRouter } from '@/hooks/useRouter';
import { trackEvent } from '@/utils/analytics';

export const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work', shortLabel: 'Work', number: '01', href: '/work' },
  { id: 'consultant', label: 'Consultant', fullLabel: 'Independent Consultant', shortLabel: 'Consultant', number: '02', href: '/consultant' },
  { id: 'ui-ux', label: 'UI/UX Design', shortLabel: 'UI/UX', number: '03', href: '/ui-ux' },
  { id: 'services', label: 'Services', shortLabel: 'Services', number: '04', href: '/services' },
  { id: 'about', label: 'About', shortLabel: 'About', number: '05', href: '/about' },
  { id: 'lab', label: 'Lab', shortLabel: 'Lab', number: '06', href: '/lab' },
];

const SECTION_IDS = ['home', 'work', 'consultant', 'ui-ux', 'services', 'about', 'lab', 'contact'];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const activeSection = useScrollspy(SECTION_IDS, 120);
  const { currentRoute, navigate } = useRouter();

  // Scroll detection for sticky header contraction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full overflow-x-clip transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0c0e0d]/90 backdrop-blur-md border-white/[0.12] py-2.5 shadow-lg shadow-black/40'
            : 'bg-[#0c0e0d]/80 backdrop-blur-md border-white/[0.08] py-4'
        }`}
      >
        <Container className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left Zone: Brand */}
          <div className="flex items-center flex-shrink-0">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '/')}
              className="group flex items-center gap-2.5 font-display font-bold text-base sm:text-lg text-typography-headline hover:text-sh-brass transition-all duration-200 whitespace-nowrap hover:scale-[1.02]"
              aria-label="Swapnil Patil Home"
            >
              <StatusDot pulse />
              <span className="tracking-tight text-white group-hover:text-sh-brass transition-colors">
                Swapnil Patil
              </span>
              <span className="inline-block w-1.5 h-3.5 bg-[#c6ff00] ml-0.5" />
            </button>
          </div>

          {/* Center Zone: Desktop Nav Links (Hidden below lg/900px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs font-mono flex-shrink-0"
          >
            {NAV_ITEMS.map((item) => {
              // Determine active state: if on route page, match by route; if on home, match by scrollspy
              const isActive = currentRoute === item.id || (currentRoute === 'home' && activeSection === item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative px-2 xl:px-2.5 py-1.5 rounded transition-all flex items-center gap-1 xl:gap-1.5 whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'text-[#c6ff00] bg-white/[0.04]'
                      : 'text-typography-muted hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <span
                    className={`text-[10px] transition-colors ${
                      isActive ? 'text-[#c6ff00]' : 'text-typography-dim group-hover:text-typography-muted'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="font-medium whitespace-nowrap hidden xl:inline">{item.label}</span>
                  <span className="font-medium whitespace-nowrap xl:hidden">{item.shortLabel || item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#c6ff00] shadow-[0_0_8px_rgba(198,255,0,0.6)] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Status, GitHub & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Availability Pill with Sonar Radar Ping Animation */}
            <span className="hidden xl:inline-flex items-center gap-2.5 text-xs font-mono px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] whitespace-nowrap flex-shrink-0 shadow-[0_0_12px_rgba(198,255,0,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff00] shadow-[0_0_6px_rgba(198,255,0,0.9)]" />
              </span>
              <span>Available for Work</span>
            </span>

            {/* GitHub Quick Link */}
            <a
              href="https://github.com/swapnil3104"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.16] text-typography-headline hover:text-white transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <GitHubIcon size={14} />
              <span className="hidden xl:inline">GitHub</span>
              <ExternalLinkIcon size={11} className="text-typography-muted hidden xl:inline" />
            </a>

            {/* Resume Quick Link - visible on xl screens to maintain clean spacing */}
            <a
              href="/Swapnil_Patil_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Swapnil_Patil_Resume.pdf"
              onClick={() => trackEvent('download_resume', { location: 'navbar' })}
              aria-label="Download Swapnil Patil Resume (opens in new tab)"
              title="Download Swapnil Patil's Resume (PDF)"
              className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.16] text-typography-headline hover:text-white transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <DownloadIcon size={13} className="text-[#c6ff00]" />
              <span>Resume</span>
            </a>

            {/* Primary Get In Touch Button — Navigates to /contact */}
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="relative group overflow-hidden whitespace-nowrap flex-shrink-0 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/[0.18] bg-white/[0.05] hover:bg-[#c6ff00] hover:text-black hover:border-[#c6ff00] text-[#f2f4f3] font-medium text-xs font-mono tracking-tight transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,255,0,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">Get in touch</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={handleToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden min-w-[44px] min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-typography-headline transition-colors focus:outline-none focus:ring-2 focus:ring-accent-emerald flex-shrink-0"
            >
              <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
                <span
                  className={`h-0.5 w-full bg-current rounded-full transform transition-all duration-200 origin-left ${
                    isMenuOpen ? 'rotate-45 translate-x-0.5' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transform transition-all duration-200 origin-left ${
                    isMenuOpen ? '-rotate-45 translate-x-0.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        navItems={NAV_ITEMS}
        activeSection={currentRoute !== 'home' ? currentRoute : activeSection}
      />
    </>
  );
};
