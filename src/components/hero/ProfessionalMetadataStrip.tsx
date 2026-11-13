import React from 'react';
import { MapPinIcon, StatusDot, GitHubIcon, ClockIcon, ExternalLinkIcon } from '@/components/icons';

export const ProfessionalMetadataStrip: React.FC = () => {
  return (
    <div
      aria-label="Professional Availability and Operational Metadata"
      className="w-full bg-[#0c0e0d] border-b border-white/[0.08] py-3 text-xs font-mono text-[#8a928f]"
    >
      <div className="layout-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 items-center justify-between">
          {/* Item 1: Location */}
          <div className="flex items-center gap-2 min-w-0">
            <MapPinIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
            <span className="text-[#4f5854] flex-shrink-0">Location:</span>
            <span className="text-[#f2f4f3] truncate">
              Pune, India <span className="text-[#4f5854]">&middot; UTC+05:30</span>
            </span>
          </div>

          {/* Item 2: Status */}
          <div className="flex items-center gap-2 min-w-0">
            <StatusDot pulse={true} className="flex-shrink-0" />
            <span className="text-[#4f5854] flex-shrink-0">Status:</span>
            <span className="text-[#f2f4f3] truncate">
              Available for Work
            </span>
          </div>

          {/* Item 3: GitHub */}
          <div className="flex items-center gap-2 min-w-0">
            <GitHubIcon size={14} className="text-[#8a928f] flex-shrink-0" />
            <span className="text-[#4f5854] flex-shrink-0">GitHub:</span>
            <a
              href="https://github.com/swapnil3104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f2f4f3] hover:text-[#c6ff00] transition-colors inline-flex items-center gap-1 min-w-0 truncate"
            >
              <span className="truncate">swapnil3104</span>
              <ExternalLinkIcon size={11} className="text-[#4f5854] flex-shrink-0" />
            </a>
          </div>

          {/* Item 4: Response Window */}
          <div className="flex items-center gap-2 lg:justify-end">
            <ClockIcon size={14} className="text-[#c6ff00] flex-shrink-0" />
            <span className="text-[#4f5854]">Response:</span>
            <span className="text-[#f2f4f3]">
              Replies within 24h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
