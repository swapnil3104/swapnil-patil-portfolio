import React, { useState } from 'react';
import { ArrowRightIcon, TerminalIcon, CheckIcon } from 'lucide-react';
import { useRouter } from '@/hooks/useRouter';

const SERVICES = [
  'AI / ML Pipeline',
  'Computer Vision',
  'Full-Stack Web',
  'Figma Design System',
  'Technical Consulting',
  'Something else',
];

const BUDGETS = ['Under $5k', '$5k–$10k', '$10k–$25k', '$25k+', 'Not sure yet'];

export const ProjectIntakeForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState('AI / ML Pipeline');
  const [selectedBudget, setSelectedBudget] = useState('$10k–$25k');
  const [clientName, setClientName] = useState('');
  const { navigate } = useRouter();

  const handleContinue = () => {
    // Navigate to contact with pre-filled hash
    navigate('/#contact');
  };

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.08] relative overflow-hidden bg-[#0c0e0d]">
      <div className="layout-container">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
            <span className="text-[#c6ff00]">//</span> Start a project
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-typography-headline tracking-tight leading-[1.05] mb-4">
            Tell me what you are <span className="text-[#c6ff00]">building.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed">
            Three quick picks so the first reply is useful. You finish the message on the contact page or write directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Picks */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Need */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-typography-muted mb-3">
                01 · What do you need?
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService === srv;
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_16px_rgba(198,255,0,0.3)] scale-[1.02]'
                          : 'bg-white/[0.03] text-typography-headline hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Budget */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-typography-muted mb-3">
                02 · Rough budget
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {BUDGETS.map((bdg) => {
                  const isSelected = selectedBudget === bdg;
                  return (
                    <button
                      key={bdg}
                      type="button"
                      onClick={() => setSelectedBudget(bdg)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#c6ff00] text-black font-semibold shadow-[0_0_16px_rgba(198,255,0,0.3)] scale-[1.02]'
                          : 'bg-white/[0.03] text-typography-headline hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {bdg}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Name / Company */}
            <div>
              <label htmlFor="intake-name" className="block text-xs font-mono uppercase tracking-wider text-typography-muted mb-3">
                03 · Your name or company
              </label>
              <input
                id="intake-name"
                type="text"
                placeholder="e.g. Acme Health or Dr. Sarah"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/[0.12] focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] rounded-xl px-4 py-3 text-sm text-typography-headline placeholder-white/20 transition-all font-mono outline-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={handleContinue}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(198,255,0,0.35)] hover:-translate-y-0.5"
              >
                <span>Continue to contact</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-xs text-[#8a928f] font-mono flex items-center gap-1.5">
                <span>or email directly:</span>
                <a
                  href="mailto:swapnilpatil3104@gmail.com?subject=New%20Project%20Inquiry"
                  className="text-white hover:text-[#c6ff00] underline transition-colors"
                >
                  swapnilpatil3104@gmail.com
                </a>
              </div>
            </div>

            <p className="text-[11px] text-[#8a928f]/70 font-mono">
              Nothing is sent from this page. Your picks are saved in your session.
            </p>
          </div>

          {/* Right Column: IDE Code Window with Live brief.ts */}
          <div className="lg:col-span-5">
            <div className="bg-[#121514] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d100f] border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[#8a928f] flex items-center gap-1.5 ml-2">
                    <TerminalIcon className="w-3.5 h-3.5 text-[#c6ff00]" />
                    brief.ts
                  </span>
                </div>
                <span className="text-[11px] text-[#8a928f]/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
                  live draft
                </span>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#f2f4f3]">
                <div className="text-[#8a928f]">// Automatically structured project intake payload</div>
                <div className="mt-2">
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-[#c6ff00]">projectBrief</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">scope</span>:{' '}
                  <span className="text-amber-300">"{selectedService}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">budgetTier</span>:{' '}
                  <span className="text-amber-300">"{selectedBudget}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">organization</span>:{' '}
                  <span className="text-amber-300">
                    "{clientName.trim() || 'Confidential / Pending'}"
                  </span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">targetLead</span>:{' '}
                  <span className="text-emerald-400">"Swapnil Patil"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">handshake</span>:{' '}
                  <span className="text-[#c6ff00]">"ready_for_dispatch"</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Status Footer */}
              <div className="px-5 py-3 bg-[#0d100f]/60 border-t border-white/[0.06] text-[11px] font-mono text-[#8a928f] flex items-center justify-between">
                <span>TypeScript · UTF-8</span>
                <span className="text-[#c6ff00] flex items-center gap-1">
                  <CheckIcon className="w-3 h-3" /> Valid Schema
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
