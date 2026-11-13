import React from 'react';
import {
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from '@/components/icons';

export const AboutEditorial: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Editorial Narrative */}
      <div className="space-y-4 text-sm sm:text-base text-[#8a928f] leading-relaxed font-normal">
        <p className="text-[#d4d8d6]">
          I am a Computer Science Engineer and AI/ML builder based in <span className="text-[#f2f4f3] font-semibold">Pune, Maharashtra</span>. I operate at the intersection of applied machine learning, computer vision, full-stack systems engineering, and product design. Whether training neural networks or designing accessible web architectures, my focus is always on solving concrete, high-impact real-world problems.
        </p>

        <p>
          I am pursuing my B.Tech in Computer Science and Engineering at <span className="text-[#f2f4f3] font-semibold">Annasaheb Dange College of Engineering &amp; Technology (ADCET), Ashta</span>, maintaining an <span className="text-[#c6ff00] font-mono font-medium">8.80 / 10.0 SGPA</span> with a minor specialization in EV powertrain systems. During my academic career, I led student healthcare AI research that secured a competitive <span className="text-[#f2f4f3] font-semibold">₹1,50,000+ institutional innovation grant</span> from the Institution&apos;s Innovation Council (IIC) to detect retinopathy and cataracts from retinal fundus imaging.
        </p>

        <p>
          Beyond algorithms and research, I run an active independent consulting practice. Over the past three years, I have architected and deployed <span className="text-[#f2f4f3] font-semibold">11+ commercial client systems</span> spanning creative agencies, corporate business groups, high-throughput e-commerce stores, and logistics. I handle the complete loop — from stakeholder discovery and atomic Figma design systems to TypeScript backends, React interfaces, and production cloud infrastructure.
        </p>
      </div>

      {/* Key Telemetry KPI Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-colors">
          <div className="flex items-center gap-2 mb-1.5 text-[#c6ff00]">
            <GraduationCapIcon size={16} />
            <span className="font-mono text-xs text-[#8a928f]">ADCET B.Tech</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-[#f2f4f3]">
            8.80 <span className="text-xs font-normal text-[#8a928f]">SGPA</span>
          </div>
          <div className="text-[11px] text-[#8a928f] truncate">
            CS &amp; Engineering
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-colors">
          <div className="flex items-center gap-2 mb-1.5 text-[#c6ff00]">
            <BriefcaseIcon size={16} />
            <span className="font-mono text-xs text-[#8a928f]">Consulting</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-[#f2f4f3]">
            11+ <span className="text-xs font-normal text-[#8a928f]">Live</span>
          </div>
          <div className="text-[11px] text-[#8a928f] truncate">
            Commercial Systems
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-colors">
          <div className="flex items-center gap-2 mb-1.5 text-[#c6ff00]">
            <AwardIcon size={16} />
            <span className="font-mono text-xs text-[#8a928f]">Research</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-[#f2f4f3]">
            ₹1.5L+
          </div>
          <div className="text-[11px] text-[#8a928f] truncate">
            IIC Innovation Grant
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#c6ff00]/40 transition-colors">
          <div className="flex items-center gap-2 mb-1.5 text-[#c6ff00]">
            <SparklesIcon size={16} />
            <span className="font-mono text-xs text-[#8a928f]">B-Plan</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-[#f2f4f3]">
            1st <span className="text-xs font-normal text-[#8a928f]">Place</span>
          </div>
          <div className="text-[11px] text-[#8a928f] truncate">
            Discovery 2k24
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c6ff00]/40 text-xs font-mono text-[#f2f4f3] transition-all duration-200"
        >
          <span>Explore AI/ML Engineering</span>
          <span className="text-[#c6ff00]">&bull;</span>
          <span className="text-[#8a928f]">#work</span>
          <ExternalLinkIcon size={12} className="text-[#c6ff00]" />
        </a>

        <a
          href="#consultant"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c6ff00]/40 text-xs font-mono text-[#f2f4f3] transition-all duration-200"
        >
          <span>11 Client Case Studies</span>
          <span className="text-[#c6ff00]">&bull;</span>
          <span className="text-[#8a928f]">#consultant</span>
          <ExternalLinkIcon size={12} className="text-[#c6ff00]" />
        </a>
      </div>
    </div>
  );
};
