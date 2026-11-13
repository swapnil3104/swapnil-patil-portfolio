import React, { useEffect, useRef } from 'react';
import { StatusDot, GitHubIcon, ExternalLinkIcon, DownloadIcon } from '@/components/icons';
import { useRouter } from '@/hooks/useRouter';

export interface NavItem {
  id: string;
  label: string;
  shortLabel?: string;
  fullLabel?: string;
  number: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const { navigate } = useRouter();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onClose();
    navigate(href);
  };

  // Close on Escape & trap focus
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first focusable item
    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-drawer"
      ref={drawerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#0c0e0d]/95 backdrop-blur-2xl border-t border-white/[0.08] flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn lg:hidden"
    >
      {/* Navigation Links */}
      <nav aria-label="Mobile Navigation" className="space-y-2 mt-4">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              ref={index === 0 ? firstFocusableRef : undefined}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`flex items-center justify-between p-3.5 rounded-lg border transition-all ${
                isActive
                  ? 'bg-white/[0.06] border-[#c6ff00]/40 text-[#c6ff00]'
                  : 'bg-white/[0.02] border-white/[0.04] text-typography-headline hover:bg-white/[0.05] hover:border-white/[0.1]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-typography-dim">
                  {item.number}
                </span>
                <span className="font-medium text-base tracking-wide">
                  {item.fullLabel || item.label}
                </span>
              </div>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse shadow-[0_0_6px_rgba(198,255,0,0.8)]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Drawer Bottom Actions */}
      <div className="space-y-4 pt-6 border-t border-white/[0.08] mt-6">
        {/* Availability Status */}
        <div className="flex items-center justify-between px-3 py-2 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-2 text-typography-muted">
            <StatusDot pulse />
            <span>Status</span>
          </div>
          <span className="text-[#c6ff00] font-medium">Available for Work</span>
        </div>

        {/* GitHub & Contact Actions */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://github.com/swapnil3104"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] flex items-center justify-center gap-2 p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-typography-headline transition-all"
          >
            <GitHubIcon size={14} />
            <span>GitHub</span>
            <ExternalLinkIcon size={12} className="text-typography-muted" />
          </a>
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="min-h-[48px] flex items-center justify-center p-3 rounded-lg bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-xs font-mono tracking-wide transition-all shadow-[0_0_16px_rgba(198,255,0,0.3)]"
          >
            Get in touch
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/Swapnil_Patil_Resume1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Swapnil_Patil_Resume.pdf"
          className="min-h-[48px] flex items-center justify-center gap-2 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-typography-headline transition-all"
        >
          <DownloadIcon size={14} className="text-[#c6ff00]" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </div>
  );
};

