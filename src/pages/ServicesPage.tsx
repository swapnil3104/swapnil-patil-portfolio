import React, { useState, Suspense } from 'react';
import {
  CpuIcon,
  ShieldCheckIcon,
  ClockIcon,
  CodeIcon,
} from '@/components/icons';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '@/data';
import { ServiceOffering } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CapabilitiesMatrix } from '@/components/services/CapabilitiesMatrix';
import { ProjectIntakeForm } from '@/components/shared/ProjectIntakeForm';
import { useCountUp } from '@/hooks';
import { useRouter } from '@/hooks/useRouter';

const ServiceModal = React.lazy(() => import('@/components/services/ServiceModal'));

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animated SLA numbers
  const latencyScore = useCountUp({ end: 18, duration: 1200 });
  const uptimeScore = useCountUp({ end: 99, duration: 1400 });

  const handleOpenDetails = (service: ServiceOffering) => {
    setSelectedService(service);
    setIsModalOpen(true);
    trackEvent('view_service_details', {
      serviceId: service.id,
      title: service.title,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="relative">
      {/* Background Architectural Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 pt-8 sm:pt-14 pb-20">
        <div className="layout-container">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="mono-eyebrow text-xs sm:text-sm text-[#8a928f]">
              <span className="text-[#c6ff00]">//</span> Technical Services &amp; Capabilities
              <span className="sh-cursor-block" />
            </span>
          </div>

          {/* Editorial Display Heading */}
          <div className="max-w-4xl mb-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#f2f4f3]">
              End-to-end engineering, from deep models to{' '}
              <span className="text-[#c6ff00] underline decoration-[#c6ff00]/40 decoration-wavy decoration-2 underline-offset-8">
                production web.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Providing specialized engineering across computer vision pipelines, full-stack cloud web applications, atomic Figma design systems, and independent technical advisory. Every engagement is backed by daily git commits, clean modular code, and zero technical debt.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/[0.12] py-6 sm:py-8 mb-10 sm:mb-12 gap-6">
            <div className="pr-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Model Latency
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#c6ff00] tracking-tight">
                {latencyScore} ms
              </div>
            </div>
            <div className="px-2 sm:px-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Production SLA
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {uptimeScore}.9%
              </div>
            </div>
            <div className="px-2 sm:px-4 border-r border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Layout Shift
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
                0.00 CLS
              </div>
            </div>
            <div className="pl-4">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#8a928f] mb-1.5">
                Response Window
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#c6ff00] tracking-tight">
                &lt;24 hrs
              </div>
            </div>
          </div>

          {/* KPI Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <CpuIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Edge ONNX &amp; TensorRT</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <ShieldCheckIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">100% Type-Safe Architecture</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <CodeIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">Clean Modular Repos</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <ClockIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
              <span className="text-[#8a928f]">On-Time Sprint Milestones</span>
            </div>
          </div>

          {/* 4 Core Service Cards Grid */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Core Service Pillars
              </h2>
              <span className="text-xs font-mono text-[#8a928f]">
                4 Engagement Models Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenDetails={handleOpenDetails}
                />
              ))}
            </div>
          </div>

          {/* Capabilities Matrix Section */}
          <div className="mb-16 sm:mb-20">
            <CapabilitiesMatrix />
          </div>

          {/* Interactive Project Scope Intake Form */}
          <div className="mb-16 sm:mb-20">
            <ProjectIntakeForm />
          </div>

          {/* Editorial Callout: Next Section Lab */}
          <div className="p-8 rounded-3xl bg-[#121614] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-[#c6ff00]/40 transition-all duration-300">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider">
                // 06 Research Lab &amp; Experiments
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Curious about open-source research and algorithmic journeys?
              </h3>
              <p className="text-sm font-sans text-[#8a928f] max-w-xl">
                Explore 5 deep-dive learning curricula, competitive Kaggle notebooks, and algorithmic prototypes in our dedicated Lab.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/lab')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-mono font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(198,255,0,0.25)] hover:shadow-[0_0_30px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <span>Explore /lab Page</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Service Details Modal */}
      <Suspense fallback={null}>
        {isModalOpen && selectedService && (
          <ServiceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            service={selectedService}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ServicesPage;
