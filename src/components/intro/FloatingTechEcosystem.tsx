import React from 'react';
import { TECH_ECOSYSTEM, TechEcosystemNode } from './types';

interface FloatingTechEcosystemProps {
  activeCategory?: string;
  onSelectNode?: (node: TechEcosystemNode) => void;
}

// Inter-node connection pairs to create circuit network topology
const NETWORK_CONNECTIONS: [string, string][] = [
  ['python', 'pytorch'],
  ['pytorch', 'tensorflow'],
  ['tensorflow', 'opencv'],
  ['python', 'ai'],
  ['ai', 'react'],
  ['react', 'javascript'],
  ['javascript', 'sql'],
  ['sql', 'github'],
];

export const FloatingTechEcosystem: React.FC<FloatingTechEcosystemProps> = () => {
  // Find node by id
  const getNode = (id: string) => TECH_ECOSYSTEM.find((n) => n.id === id);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {/* SVG Connecting Circuit Traces */}
      <svg className="w-full h-full absolute inset-0 opacity-40">
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c6ff00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c6ff00" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {NETWORK_CONNECTIONS.map(([startId, endId], idx) => {
          const start = getNode(startId);
          const end = getNode(endId);
          if (!start || !end) return null;

          return (
            <g key={`${startId}-${endId}`}>
              {/* Underlying static circuit trace */}
              <line
                x1={`${start.xPercent}%`}
                y1={`${start.yPercent}%`}
                x2={`${end.xPercent}%`}
                y2={`${end.yPercent}%`}
                stroke="rgba(198, 255, 0, 0.15)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              {/* Animated glowing signal pulse traveling along wire */}
              <line
                x1={`${start.xPercent}%`}
                y1={`${start.yPercent}%`}
                x2={`${end.xPercent}%`}
                y2={`${end.yPercent}%`}
                stroke="url(#traceGrad)"
                strokeWidth="1.5"
                strokeDasharray="8 60"
                className="animate-pulse"
                style={{
                  animationDuration: `${3 + (idx % 3)}s`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Floating Node Badges */}
      {TECH_ECOSYSTEM.map((node, i) => {
        const floatDelay = (i * 0.4).toFixed(1);
        const floatDuration = (4 + (i % 3)).toFixed(1);

        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121614]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#c6ff00]/60 hover:bg-[#1a211d] shadow-lg shadow-black/50 text-[10px] font-mono text-[#8a928f] hover:text-[#f2f4f3] group pointer-events-auto cursor-default"
            style={{
              left: `${node.xPercent}%`,
              top: `${node.yPercent}%`,
              animation: `floatUpDown ${floatDuration}s ease-in-out ${floatDelay}s infinite alternate`,
            }}
          >
            <span className="text-xs transition-transform group-hover:scale-125">
              {node.badge}
            </span>
            <span className="font-semibold tracking-tight group-hover:text-[#c6ff00]">
              {node.name}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c6ff00]/60 group-hover:bg-[#c6ff00] group-hover:shadow-[0_0_6px_#c6ff00]" />
          </div>
        );
      })}

      <style>{`
        @keyframes floatUpDown {
          0% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

