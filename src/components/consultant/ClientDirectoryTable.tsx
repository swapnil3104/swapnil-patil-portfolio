import React from 'react';
import { ProjectConsultant } from '@/types';
import { ExternalLinkIcon, StatusDot, ShieldCheckIcon } from '@/components/icons';

interface ClientDirectoryTableProps {
  clients: ProjectConsultant[];
  onOpenDetails: (client: ProjectConsultant) => void;
}

export const ClientDirectoryTable: React.FC<ClientDirectoryTableProps> = ({ clients, onOpenDetails }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-white/10 bg-[#0d0f0e] shadow-2xl">
      <table className="w-full text-left border-collapse min-w-[760px]">
        <thead>
          <tr className="border-b border-white/10 bg-black/40 text-[11px] font-mono text-typography-dim uppercase tracking-wider">
            <th className="py-3 px-4 font-semibold w-12 text-center">#</th>
            <th className="py-3 px-4 font-semibold">Client & Live Deployment</th>
            <th className="py-3 px-4 font-semibold">Industry Domain</th>
            <th className="py-3 px-4 font-semibold">Scope & Deliverables</th>
            <th className="py-3 px-4 font-semibold">Tech Stack</th>
            <th className="py-3 px-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
          {clients.map((client, idx) => {
            const indexStr = (idx + 1).toString().padStart(2, '0');
            return (
              <tr
                key={client.id}
                className="group hover:bg-white/[0.02] transition-colors duration-150"
              >
                {/* Index */}
                <td className="py-3.5 px-4 text-center text-typography-dim font-bold">
                  {indexStr}
                </td>

                {/* Client & URL */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <StatusDot pulse={false} className="scale-75" />
                    <span className="font-bold text-typography-headline group-hover:text-accent-emerald transition-colors text-sm">
                      {client.name}
                    </span>
                    {client.verified && (
                      <span title="Verified Client Domain" className="text-accent-emerald">
                        <ShieldCheckIcon size={14} />
                      </span>
                    )}
                  </div>
                  <a
                    href={client.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-accent-emerald/80 hover:text-accent-emerald hover:underline mt-0.5"
                  >
                    <span>{client.domainHost || client.liveUrl.replace('https://', '').replace('/', '')}</span>
                    <ExternalLinkIcon size={10} />
                  </a>
                </td>

                {/* Industry Domain & Category */}
                <td className="py-3.5 px-4">
                  <div className="text-typography-body font-sans text-xs">
                    {client.industry}
                  </div>
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-typography-dim border border-white/[0.06]">
                    {client.category}
                  </span>
                </td>

                {/* Scope & Business Impact */}
                <td className="py-3.5 px-4 max-w-xs">
                  <div className="text-accent-emerald text-[11px] font-medium mb-1">
                    {client.scope}
                  </div>
                  <p className="text-[11px] font-sans text-typography-muted line-clamp-2">
                    {client.businessImpact}
                  </p>
                </td>

                {/* Tech Stack Chips */}
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1 max-w-[180px]">
                    {client.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-typography-muted border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Action Buttons */}
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenDetails(client)}
                      className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-typography-headline text-[11px] transition-colors"
                      title="Inspect architectural details"
                    >
                      Details
                    </button>
                    <a
                      href={client.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent-emerald/10 hover:bg-accent-emerald/20 border border-accent-emerald/30 text-accent-emerald text-[11px] font-semibold transition-colors"
                      title="Open live website"
                    >
                      <span>Visit</span>
                      <ExternalLinkIcon size={10} />
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

