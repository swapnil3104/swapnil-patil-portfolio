import React, { useState, Suspense } from 'react';
import { SectionHeader, SectionWrapper } from '@/components/layout';
import {
  BriefcaseIcon,
  ExternalLinkIcon,
  CpuIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
} from '@/components/icons';
import { services } from '@/data';
import { ServiceOffering } from '@/types';
import { trackEvent } from '@/utils/analytics';
import { ServiceCard } from './ServiceCard';
import { CapabilitiesMatrix } from './CapabilitiesMatrix';

const ServiceModal = React.lazy(() => import('./ServiceModal'));

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <SectionWrapper id="services" className="relative">
      {/* TASK-601: Services Section Header & Positioning */}
      <SectionHeader
        eyebrow="04 Services & Technical Capabilities"
        title="End-to-end engineering, from AI models to production interfaces."
        description="Providing specialized engineering across computer vision pipelines, full-stack cloud web applications, atomic Figma design systems, and independent technical advisory. Every engagement is backed by daily git commits, clean modular code, and zero technical debt."
        action={
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111413] hover:bg-[#181d1a] border border-white/10 hover:border-[#c6ff00]/50 text-[#f2f4f3] text-xs font-mono transition-all duration-200 hover:shadow-lg hover:shadow-[#c6ff00]/10 hover:-translate-y-0.5"
            title="Discuss project requirements or request an architecture audit"
          >
            <BriefcaseIcon size={16} className="text-white group-hover:text-[#c6ff00] transition-colors" />
            <span className="font-semibold">Request Service Scope</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] text-[11px] font-bold">
              Available
            </span>
            <ExternalLinkIcon size={12} className="text-[#c6ff00] group-hover:translate-x-0.5 transition-transform" />
          </a>
        }
      />

      {/* KPI / Telemetry Chips Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <CpuIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              4 Offerings
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Specialized Core Services
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <SparklesIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#c6ff00]">
              Full-Stack
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              AI Models to Frontend UI
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <ClockIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              2–8 Weeks
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Sprint-Based Turnaround
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
            <ShieldCheckIcon size={18} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold font-mono text-typography-headline">
              100% SLA
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Direct Client Transparency
            </div>
          </div>
        </div>
      </div>

      {/* TASK-602: 4 Core Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onOpenDetails={handleOpenDetails}
          />
        ))}
      </div>

      {/* TASK-603 & TASK-604: Technical Capabilities Matrix */}
      <CapabilitiesMatrix />

      {/* Service Details & Workflow Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ServiceModal
            service={selectedService}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </SectionWrapper>
  );
};

