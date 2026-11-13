import React from 'react';
import { ArrowRightIcon, DownloadIcon, CheckIcon, MapPinIcon } from 'lucide-react';
import { ProjectIntakeForm } from '@/components/shared/ProjectIntakeForm';
import { useCountUp } from '@/hooks/useCountUp';
import { useRouter } from '@/hooks/useRouter';
import { trackEvent } from '@/utils/analytics';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Measure first',
    description: 'No rewrite or model tuning starts before there is a baseline for latency, memory, and error rates. Otherwise nobody can tell when it is truly better.',
  },
  {
    number: '02',
    title: 'Ship on Friday',
    description: 'A real verified deploy or model checkpoint every sprint, however small. A prototype that runs only on my local machine is not progress.',
  },
  {
    number: '03',
    title: 'Latency is UX',
    description: 'Whether it is hand landmark gesture extraction or LLM retrieval, fast answers win. Sub-45ms pipeline turnaround is engineered from day one.',
  },
  {
    number: '04',
    title: 'Simpler pipelines',
    description: 'The cleanest architecture is the least complex one that satisfies the SLA. Fewer moving parts mean fewer failure modes and lower cloud cost.',
  },
  {
    number: '05',
    title: 'Write it down',
    description: 'Architecture decisions, dataset schemas, and performance benchmarks go directly in the repository, next to the code they explain.',
  },
  {
    number: '06',
    title: 'Zero-dependency fallback',
    description: 'Systems must degrade gracefully. If a camera is low-resolution or connectivity drops, edge heuristics ensure the user remains unblocked.',
  },
];

const CODE_REVIEWS = [
  {
    author: 'Studio Squanta Leadership',
    role: 'Creative Agency Client · Pune',
    quote: 'Swapnil took our heavy digital showcase and delivered a sub-second, highly polished web presence with 98+ Lighthouse scores. The engineering precision was remarkable.',
    status: 'Approved',
  },
  {
    author: 'Paarsh Infotech Engineering',
    role: 'Project Coordination & UI/UX · Internship',
    quote: 'Exceptional coordination across sprint backlogs and design systems. Swapnil bridged the gap between Figma design tokens and production React components seamlessly.',
    status: 'Approved',
  },
  {
    author: "Institution's Innovation Council (IIC)",
    role: 'Medical AI Research Grant Committee',
    quote: 'Awarded INR 1,50,000+ research grant for pioneering retinal fundus classification with Grad-CAM visual interpretability for clinicians.',
    status: 'Approved',
  },
  {
    author: 'Discovery 2k24 Symposium Jury',
    role: 'State-Level Business Plan Competition',
    quote: 'First Place Winner: Swapnil presented an airtight technical feasibility model and unit economics for edge-automated computer vision solutions.',
    status: 'Approved',
  },
];

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  // Animated counters
  const yearsCount = useCountUp({ end: 3, duration: 1200 });
  const productsCount = useCountUp({ end: 28, duration: 1400 });
  const clientsCount = useCountUp({ end: 11, duration: 1500 });

  return (
    <div className="relative">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main About Content */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> About
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              I build intelligent systems that answer{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                at once.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Computer Science Engineer engineering end-to-end machine learning pipelines, real-time computer vision systems, and high-performance interactive web products. All of it is tested, reproducible, and measured.
            </p>
          </div>

          {/* Two CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14 sm:mb-16">
            <button
              type="button"
              onClick={() => navigate('/#contact')}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(198,255,0,0.35)] hover:-translate-y-0.5"
            >
              <span>Start a project</span>
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRightIcon className="w-3.5 h-3.5 text-black" />
              </span>
            </button>

            <a
              href="/Swapnil_Patil_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Swapnil_Patil_Resume.pdf"
              onClick={() => trackEvent('download_resume', { location: 'about_hero' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.15] text-[#f2f4f3] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <DownloadIcon className="w-4 h-4 text-[#c6ff00]" />
              <span>Read the resume</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 border-y border-white/[0.12] py-6 sm:py-8 mb-20 sm:mb-24">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Years of Code
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {yearsCount}+
              </div>
            </div>
            <div className="px-4 sm:px-8 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Systems Shipped
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {productsCount}
              </div>
            </div>
            <div className="pl-4 sm:pl-8">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Clients & Teams
              </div>
              <div className="font-mono text-3xl sm:text-5xl font-bold text-[#c6ff00] tracking-tight">
                {clientsCount}
              </div>
            </div>
          </div>

          {/* The Story Section (2-Column Split) */}
          <section className="mb-24 sm:mb-32">
            <div className="mb-4">
              <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
                <span className="text-[#c6ff00]">//</span> The story
              </span>
            </div>

            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-typography-headline tracking-tight leading-[1.02]">
                The journey, in <span className="text-[#c6ff00]">three chapters.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: 3 Chapters */}
              <div className="lg:col-span-7 space-y-12 sm:space-y-16">
                {/* Chapter 1 */}
                <div className="border-t border-white/[0.1] pt-6">
                  <div className="text-xs font-mono text-[#c6ff00] mb-2 flex items-center gap-2">
                    <span>01</span>
                    <span className="text-[#8a928f]">·</span>
                    <span className="text-[#8a928f]">2021 to 2022</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-typography-headline mb-4">
                    The foundation in machine learning & Python.
                  </h3>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed mb-3">
                    My engineering journey began with the math and data pipelines behind modern computer science. I wrote statistical models, cleaned noisy training sets, and dove deep into neural network architectures to understand how weight tensors converge under gradient descent.
                  </p>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed">
                    That is how I realized I loved the bridge between raw algorithmic logic and reproducible real-time execution.
                  </p>
                </div>

                {/* Chapter 2 */}
                <div className="border-t border-white/[0.1] pt-6">
                  <div className="text-xs font-mono text-[#c6ff00] mb-2 flex items-center gap-2">
                    <span>02</span>
                    <span className="text-[#8a928f]">·</span>
                    <span className="text-[#8a928f]">2022 to 2024</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-typography-headline mb-4">
                    Real-time computer vision & assistive AI.
                  </h3>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed mb-3">
                    Next came real-time systems: building Indian Sign Language Recognition (ISLR Studio) with MediaPipe landmark tracking at 60 FPS, and Self-Care AI medical diagnostic screening with Grad-CAM visual heatmaps.
                  </p>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed">
                    Secured a ₹1,50,000+ institutional innovation grant from the Institution's Innovation Council (IIC) and won 1st Place in the Discovery 2k24 state-level business symposium.
                  </p>
                </div>

                {/* Chapter 3 */}
                <div className="border-t border-white/[0.1] pt-6">
                  <div className="text-xs font-mono text-[#c6ff00] mb-2 flex items-center gap-2">
                    <span>03</span>
                    <span className="text-[#8a928f]">·</span>
                    <span className="text-[#8a928f]">2024 to now</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-typography-headline mb-4">
                    High-performance web architecture & commercial consulting.
                  </h3>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed mb-3">
                    Delivered 11 verified commercial client deployments across marketing, luxury events, fitness, and enterprise. Completed Project Coordinator & Product Design internship at Paarsh Infotech managing agile sprint deliverables.
                  </p>
                  <p className="text-sm sm:text-base text-[#8a928f] leading-relaxed">
                    Every project ships with verified Core Web Vitals, typed TypeScript contracts, and structured handoff documentation.
                  </p>
                </div>
              </div>

              {/* Right Column: Sticky Portrait Frame */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="bg-[#111413] border border-white/[0.12] rounded-[24px] p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
                  {/* Portrait Image */}
                  <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-black mb-4">
                    <img
                      src="/assets/swapnil-portrait.webp"
                      alt="Swapnil Patil"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/swapnil-portrait.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Live Status Pill Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-md border border-[#c6ff00]/40 text-[#c6ff00]">
                        <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
                        Available for Work
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-base font-bold font-display">Swapnil Patil</div>
                      <div className="text-xs font-mono text-[#8a928f] flex items-center gap-1.5">
                        <MapPinIcon className="w-3.5 h-3.5 text-[#c6ff00]" />
                        Pune / Mumbai, Maharashtra
                      </div>
                    </div>
                  </div>

                  {/* Telemetry metadata footer */}
                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl font-mono text-xs space-y-1.5">
                    <div className="flex justify-between text-[#8a928f]">
                      <span>Role</span>
                      <span className="text-white">AI/ML Engineer & Product Designer</span>
                    </div>
                    <div className="flex justify-between text-[#8a928f]">
                      <span>Education</span>
                      <span className="text-white">B.Tech CSE (8.80 SGPA)</span>
                    </div>
                    <div className="flex justify-between text-[#8a928f]">
                      <span>Availability</span>
                      <span className="text-[#c6ff00]">Immediate Deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Principles Section (6-Card Grid) */}
          <section className="mb-24 sm:mb-32">
            <div className="mb-4">
              <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
                <span className="text-[#c6ff00]">//</span> Principles
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-typography-headline tracking-tight leading-[1.02]">
                Six rules I <span className="text-[#c6ff00]">build by.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#8a928f] max-w-md">
                None of them are theoretical. All of them were learned by shipping real models, edge devices, and client deadlines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRINCIPLES.map((pr) => (
                <div
                  key={pr.number}
                  className="bg-[#111413] border border-white/[0.09] hover:border-[#c6ff00]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(198,255,0,0.1)] flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-xs text-[#c6ff00] font-semibold mb-3">
                      {pr.number}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-typography-headline mb-3">
                      {pr.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a928f] leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Standout "Now" Widget Card */}
          <section className="mb-24 sm:mb-32">
            <div className="bg-gradient-to-r from-[#111413] via-[#141816] to-[#111413] border border-[#c6ff00]/30 rounded-[24px] p-6 sm:p-10 shadow-[0_0_35px_rgba(198,255,0,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 font-mono text-xs text-[#8a928f] mb-3">
                  <span className="flex items-center gap-1.5 text-[#c6ff00]">
                    <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
                    Now
                  </span>
                  <span>·</span>
                  <span>Updated November 2026</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-typography-headline mb-2 leading-tight">
                  Engineering Quantum Deepfake Detection & ISLR Studio, available for select AI/ML & Full-Stack contracts.
                </h3>
              </div>

              <button
                type="button"
                onClick={() => navigate('/#contact')}
                className="group flex-shrink-0 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-[#c6ff00] text-white hover:text-black font-mono text-xs font-semibold border border-white/[0.12] hover:border-[#c6ff00] transition-all duration-200"
              >
                <span>See what I am doing now</span>
                <span className="w-6 h-6 rounded-full bg-[#c6ff00] text-black group-hover:bg-black group-hover:text-[#c6ff00] flex items-center justify-center transition-colors">
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </section>

          {/* IDE-Style Code Review Section */}
          <section className="mb-24 sm:mb-32">
            <div className="mb-4">
              <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
                <span className="text-[#c6ff00]">//</span> Code review
              </span>
            </div>

            <div className="max-w-2xl mb-12 sm:mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-typography-headline tracking-tight leading-[1.02]">
                Reviewed, then <span className="text-[#c6ff00]">approved.</span>
              </h2>
            </div>

            {/* VS Code Pull Request Window */}
            <div className="bg-[#111413] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Tab Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d100f] border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-white flex items-center gap-1.5 ml-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
                    reviews/clients.md
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#c6ff00] flex items-center gap-1">
                  <CheckIcon className="w-3.5 h-3.5" /> 4 of 4 approved
                </span>
              </div>

              {/* Code Review Entries */}
              <div className="divide-y divide-white/[0.06]">
                {CODE_REVIEWS.map((rev, idx) => (
                  <div key={rev.author} className="p-6 sm:p-8 flex items-start gap-4 sm:gap-6 hover:bg-white/[0.01] transition-colors">
                    {/* Line number gutter */}
                    <div className="font-mono text-xs text-[#8a928f]/40 pt-1 select-none">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="font-display font-bold text-base sm:text-lg text-white">
                            {rev.author}
                          </div>
                          <div className="text-xs font-mono text-[#8a928f]">
                            {rev.role}
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#c6ff00]/10 border border-[#c6ff00]/40 text-[#c6ff00]">
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>{rev.status}</span>
                        </span>
                      </div>

                      <blockquote className="text-sm sm:text-base text-[#d4d8d6] leading-relaxed italic border-l-2 border-[#c6ff00]/40 pl-4 py-1">
                        "{rev.quote}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Project Intake Form */}
        <ProjectIntakeForm />
      </div>
    </div>
  );
};
