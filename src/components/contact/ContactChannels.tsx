import React, { useState } from 'react';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ExternalLinkIcon,
  CopyIcon,
  CheckIcon,
  MessageSquareIcon,
} from '@/components/icons';
import { CONTACT_INFO } from '@/data';

export const ContactChannels: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8a928f]">
          // Verified Channels &amp; Direct Access
        </h3>
        <span className="text-[11px] font-mono text-[#c6ff00] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
          <span>Active &amp; Monitored</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Channel 1: GitHub Profile */}
        <div className="group relative rounded-2xl bg-[#121614] border border-white/[0.08] hover:border-[#c6ff00]/40 p-5 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#f2f4f3] group-hover:text-[#c6ff00] group-hover:border-[#c6ff00]/30 transition-colors">
                <GitHubIcon size={18} />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8a928f] border border-white/[0.06]">
                11+ Public Repos
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#8a928f]">// GitHub Codebase</div>
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors inline-flex items-center gap-1.5 mt-0.5 font-mono max-w-full min-w-0"
              >
                <span className="truncate" title="github.com/swapnil3104">github.com/swapnil3104</span>
                <ExternalLinkIcon size={12} className="text-[#8a928f] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            <p className="text-xs text-[#8a928f] leading-relaxed line-clamp-2">
              Computer vision algorithms, ML learning curricula, and open-source utility tools.
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f2f4f3] hover:text-[#c6ff00] transition-colors inline-flex items-center gap-1"
            >
              <span>Explore GitHub</span>
              <span>&rarr;</span>
            </a>
            <span className="text-[10px] text-[#4f5854]">Public / Verified</span>
          </div>
        </div>

        {/* Channel 2: LinkedIn Profile */}
        <div className="group relative rounded-2xl bg-[#121614] border border-white/[0.08] hover:border-blue-400/40 p-5 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <LinkedInIcon size={18} />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Verified
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#8a928f]">// Professional Profile</div>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#f2f4f3] group-hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 mt-0.5 font-mono max-w-full min-w-0"
              >
                <span className="truncate" title={CONTACT_INFO.linkedinDisplay}>in/swapnil3104</span>
                <ExternalLinkIcon size={12} className="text-[#8a928f] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            <p className="text-xs text-[#8a928f] leading-relaxed line-clamp-2">
              Engineering journey, B.Tech credentials at ADCET, commercial client milestones.
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f2f4f3] hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Connect on LinkedIn</span>
              <span>&rarr;</span>
            </a>
            <span className="text-[10px] text-[#4f5854]">Recruiter Friendly</span>
          </div>
        </div>

        {/* Channel 3: Direct Email */}
        <div className="group relative rounded-2xl bg-[#121614] border border-white/[0.08] hover:border-[#c6ff00]/40 p-5 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-[#c6ff00]/10 border border-[#c6ff00]/20 flex items-center justify-center text-[#c6ff00]">
                <MailIcon size={18} />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c6ff00]/10 text-[#c6ff00] border border-[#c6ff00]/20">
                Fastest Response
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#8a928f]">// Direct Email</div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm font-semibold text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors block truncate mt-0.5 font-mono"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <p className="text-xs text-[#8a928f] leading-relaxed">
              Target response within 24 hours. Ideal for roles, RFPs, and technical proposals.
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-[#c6ff00] hover:underline inline-flex items-center gap-1"
            >
              <span>Send Mail</span>
              <span>&rarr;</span>
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
              aria-label="Copy email address"
              className="text-[#8a928f] hover:text-[#f2f4f3] transition-colors inline-flex items-center gap-1 text-[11px]"
            >
              {copiedKey === 'email' ? (
                <>
                  <CheckIcon size={12} className="text-[#c6ff00]" />
                  <span className="text-[#c6ff00]">Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Channel 4: Phone & WhatsApp */}
        <div className="group relative rounded-2xl bg-[#121614] border border-white/[0.08] hover:border-[#c6ff00]/40 p-5 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-[#c6ff00]/10 border border-[#c6ff00]/20 flex items-center justify-center text-[#c6ff00]">
                <PhoneIcon size={18} />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8a928f] border border-white/[0.06]">
                Voice / Chat
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-[#8a928f]">// Direct Line &amp; WhatsApp</div>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="text-sm font-semibold text-[#f2f4f3] group-hover:text-[#c6ff00] transition-colors block mt-0.5 font-mono"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <p className="text-xs text-[#8a928f] leading-relaxed">
              Available for technical screening calls, voice consultations, or quick chats.
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6ff00] hover:underline inline-flex items-center gap-1.5"
            >
              <MessageSquareIcon size={12} />
              <span>WhatsApp Chat</span>
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
              aria-label="Copy phone number"
              className="text-[#8a928f] hover:text-[#f2f4f3] transition-colors inline-flex items-center gap-1 text-[11px]"
            >
              {copiedKey === 'phone' ? (
                <>
                  <CheckIcon size={12} className="text-[#c6ff00]" />
                  <span className="text-[#c6ff00]">Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Location & Global Collaboration Bar */}
      <div className="rounded-2xl bg-[#121614]/80 border border-white/[0.08] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono min-w-0">
        <div className="flex items-center gap-2.5 text-[#f2f4f3] min-w-0 flex-wrap sm:flex-nowrap">
          <MapPinIcon size={15} className="text-[#c6ff00] flex-shrink-0" />
          <span className="flex-shrink-0">{CONTACT_INFO.location}</span>
          <span className="text-[#4f5854] hidden md:inline">·</span>
          <span className="text-[#8a928f] hidden md:inline truncate">
            Available for remote contracts &amp; onsite relocations (Pune / Mumbai / Bengaluru)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#8a928f] text-[11px] self-end sm:self-auto flex-shrink-0">
          <ClockIcon size={13} className="text-[#8a928f]" />
          <span>{CONTACT_INFO.timezone} (IST)</span>
        </div>
      </div>
    </div>
  );
};
