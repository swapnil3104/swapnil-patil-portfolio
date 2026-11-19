import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/layout';
import { useCountUp, useReducedMotion } from '@/hooks';

interface MetricGaugeProps {
  score: number;
  label: string;
  sublabel: string;
}

const MetricGauge: React.FC<MetricGaugeProps> = ({ score, label, sublabel }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const animatedScore = useCountUp({
    end: score,
    duration: 1200,
    isInView: isVisible,
  });

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (score / 100) * circumference;
  const strokeDashoffset = isVisible ? targetOffset : circumference;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center p-4 rounded-2xl bg-black/[0.04] border border-black/10 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="7"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#000000"
            strokeWidth="7"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute font-display font-extrabold text-2xl text-black">
          {animatedScore}
        </span>
      </div>
      <div className="font-display font-bold text-base text-black tracking-tight">{label}</div>
      <div className="text-[11px] font-mono text-black/70 mt-0.5">{sublabel}</div>
    </div>
  );
};

export const NumbersSection: React.FC = () => {
  return (
    <section
      aria-label="Verified Performance & Engineering Metrics"
      className="w-full bg-[#c6ff00] text-black py-16 sm:py-20 lg:py-24 border-y border-black/10 relative overflow-hidden select-none"
    >
      <Container>
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-black/75 mb-3">
              // 00 Verified Metrics &middot; Benchmarks
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-black leading-[0.98]">
              Numbers, not adjectives.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/80 max-w-xl font-normal leading-relaxed">
              Every system is held to strict performance budgets: sub-45ms neural network latency, zero layout shift, and 100/100 accessibility standards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-[#c6ff00] font-mono text-xs font-semibold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
            <span>Audited Live Production</span>
          </div>
        </div>

        {/* 2-Column Grid: Left Gauges, Right Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Circular Speedometer Gauges */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <MetricGauge score={99} label="Performance" sublabel="Lighthouse Mobile" />
            <MetricGauge score={100} label="Accessibility" sublabel="WCAG 2.1 AA Compliance" />
            <MetricGauge score={100} label="Best Practices" sublabel="Security & Clean Code" />
            <MetricGauge score={100} label="SEO & Structure" sublabel="Semantic Metadata" />
          </div>

          {/* Deep Black High-Contrast Telemetry Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#080a09] text-[#f2f4f3] p-6 sm:p-8 border border-black/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] font-mono text-xs">
                <span className="text-[#c6ff00] font-semibold">// LATENCY &amp; FIDELITY BUDGETS</span>
                <span className="text-[#8a928f]">TARGET vs ACTUAL</span>
              </div>

              {/* Metric 1 */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono mb-2">
                  <span className="text-[#f2f4f3] font-medium">3D Car Running Game (WebGL Framerate)</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <del className="text-[#8a928f] line-through text-[11px]">30 FPS</del>
                    <span className="text-[#8a928f]">&rarr;</span>
                    <span className="text-[#c6ff00] font-bold text-sm">60 FPS</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-[#c6ff00] rounded-full transition-all duration-1000" style={{ width: '100%' }} />
                </div>
                <div className="text-[11px] font-mono text-[#8a928f] mt-1">
                  Budget: 60 FPS target (smooth 16.6ms render loop with Three.js WebGL)
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono mb-2">
                  <span className="text-[#f2f4f3] font-medium">Driver Micro-Sleep Detection Precision</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <del className="text-[#8a928f] line-through text-[11px]">88%</del>
                    <span className="text-[#8a928f]">&rarr;</span>
                    <span className="text-[#c6ff00] font-bold text-sm">99.4%</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-[#c6ff00] rounded-full transition-all duration-1000" style={{ width: '99%' }} />
                </div>
                <div className="text-[11px] font-mono text-[#8a928f] mt-1">
                  Night infrared camera tracking at 30 FPS
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono mb-2">
                  <span className="text-[#f2f4f3] font-medium">Largest Contentful Paint (LCP)</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <del className="text-[#8a928f] line-through text-[11px]">2.8 s</del>
                    <span className="text-[#8a928f]">&rarr;</span>
                    <span className="text-[#c6ff00] font-bold text-sm">0.8 s</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-[#c6ff00] rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                </div>
                <div className="text-[11px] font-mono text-[#8a928f] mt-1">
                  WebP multi-density + zero client render blocking
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8a928f]">
                <span>11 Client Deployments</span>
                <span className="text-[#c6ff00]">100% Production Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

