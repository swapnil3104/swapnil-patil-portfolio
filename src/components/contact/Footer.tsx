import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout';
import {
  StatusDot,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpIcon,
  ClockIcon,
  MapPinIcon,
  ExternalLinkIcon,
} from '@/components/icons';
import { CONTACT_INFO } from '@/data';
import { useRouter } from '@/hooks/useRouter';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');
  const { navigate } = useRouter();

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setIstTime(`${formatted} IST`);
      } catch {
        setIstTime('13:30:00 IST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080a09] pt-16 pb-12 text-[#d4d8d6] selection:bg-[#c6ff00]/25 selection:text-black relative overflow-hidden">
      <Container className="space-y-16">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1-5: Bio & Telemetry */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
              <StatusDot pulse />
              <span>Swapnil Patil</span>
            </div>
            <p className="text-sm text-[#8a928f] max-w-sm leading-relaxed">
              AI/ML Engineer, Computer Vision Specialist, and Product Designer building end-to-end intelligent systems that solve real problems.
            </p>
            <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-[#8a928f]">
              <div className="flex items-center gap-2">
                <ClockIcon size={13} className="text-[#c6ff00]" />
                <span>Local Time: {istTime || 'Loading...'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon size={13} className="text-[#c6ff00]" />
                <span>Maharashtra, India (Remote &amp; Relocation Ready)</span>
              </div>
            </div>
          </div>

          {/* Col 6-8: Navigation Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8a928f]">
              Navigation
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">00</span> Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/work')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">01</span> Work (All 28 Projects)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/consultant')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">02</span> Independent Consultant
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/ui-ux')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">03</span> UI/UX Design Systems
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">04</span> Services &amp; Capabilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">05</span> About &amp; Principles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/lab')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">06</span> Lab Experiments
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#c6ff00] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#4f5854]">07</span> Contact &amp; Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8a928f]">
              Direct Channels
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#c6ff00]/40 text-[#f2f4f3] transition-all"
              >
                <span>{CONTACT_INFO.email}</span>
                <span className="text-[#c6ff00] text-[11px] group-hover:translate-x-0.5 transition-transform">Email ↗</span>
              </a>

              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/15 text-[#f2f4f3] transition-all"
              >
                <div className="flex items-center gap-2">
                  <GitHubIcon size={14} />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLinkIcon size={12} className="text-[#8a928f] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-blue-400/30 text-[#f2f4f3] transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon size={14} className="text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLinkIcon size={12} className="text-[#8a928f] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Soren Hale Giant Typography Signature */}
        <div className="pt-8 pb-4 text-center select-none overflow-hidden">
          <div className="font-display font-black text-[13vw] leading-none tracking-tighter text-white/[0.07] hover:text-white/[0.12] transition-colors duration-500 whitespace-nowrap">
            SWAPNIL PATIL
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8a928f] pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Swapnil Patil</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-[#4f5854]">
              Clean Architecture &amp; Soren Hale Reference Design
            </span>
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top of the page"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-[#c6ff00]/40 text-[#f2f4f3] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Back to top</span>
            <ArrowUpIcon
              size={13}
              className="text-[#c6ff00] group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </Container>
    </footer>
  );
};
