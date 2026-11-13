import React from 'react';

interface ArcadeRunnerVisualProps {
  className?: string;
}

export const ArcadeRunnerVisual: React.FC<ArcadeRunnerVisualProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-[#060807] border border-white/10 flex items-center justify-center select-none ${className}`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#10b98115,transparent_70%)] pointer-events-none" />

      {/* Cyber Grid Horizon */}
      <svg
        viewBox="0 0 400 240"
        className="w-full h-full text-typography-body"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="roadGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizon Line & Distant Sun */}
        <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <ellipse cx="200" cy="80" rx="36" ry="12" fill="url(#horizonGlow)" />
        <circle cx="200" cy="74" r="16" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />

        {/* Perspective Road Quad */}
        <polygon points="180,80 220,80 320,240 80,240" fill="url(#roadGradient)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />

        {/* Perspective Grid Cross Lines */}
        <line x1="160" y1="100" x2="240" y2="100" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
        <line x1="140" y1="125" x2="260" y2="125" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
        <line x1="115" y1="155" x2="285" y2="155" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
        <line x1="95" y1="195" x2="305" y2="195" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />

        {/* Lane Center Dashes */}
        <line x1="200" y1="85" x2="200" y2="105" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="200" y1="115" x2="200" y2="140" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="200" y1="155" x2="200" y2="190" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />
        <line x1="200" y1="205" x2="200" y2="240" stroke="#FFFFFF" strokeWidth="3" strokeOpacity="0.9" />

        {/* Left & Right Procedural Pylons / Obstacles */}
        <polygon points="110,135 116,135 119,165 107,165" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" strokeWidth="1" />
        <polygon points="284,145 290,145 293,175 281,175" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" strokeWidth="1" />

        {/* 3D Wireframe Player Vehicle (Center Lane) */}
        <g transform="translate(200, 185)">
          {/* Vehicle Shadow */}
          <ellipse cx="0" cy="18" rx="34" ry="7" fill="rgba(0,0,0,0.8)" />

          {/* Underglow */}
          <ellipse cx="0" cy="16" rx="26" ry="5" fill="rgba(16, 185, 129, 0.6)" filter="blur(2px)" />

          {/* Body Cockpit & Chassis */}
          <polygon
            points="-22,14 -18,2 -12,-8 12,-8 18,2 22,14 16,16 -16,16"
            fill="#0F1311"
            stroke="#10B981"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />

          {/* Windshield */}
          <polygon
            points="-10,-6 10,-6 14,0 -14,0"
            fill="rgba(52, 211, 153, 0.25)"
            stroke="rgba(52, 211, 153, 0.8)"
            strokeWidth="1"
          />

          {/* Tail Lights */}
          <rect x="-19" y="10" width="7" height="3" rx="1" fill="#EF4444" />
          <rect x="12" y="10" width="7" height="3" rx="1" fill="#EF4444" />
          <line x1="-16" y1="11" x2="16" y2="11" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />

          {/* Wheels (Left & Right Rear) */}
          <rect x="-26" y="6" width="5" height="12" rx="2" fill="#0A0C0B" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <rect x="21" y="6" width="5" height="12" rx="2" fill="#0A0C0B" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </g>

        {/* HUD Telemetry Overlay */}
        <g transform="translate(18, 22)">
          <rect x="0" y="0" width="105" height="36" rx="4" fill="rgba(0,0,0,0.7)" stroke="rgba(255,255,255,0.1)" />
          <text x="8" y="14" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
            SPD // 184 KM/H
          </text>
          <text x="8" y="27" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
            FPS: 60.0 · DRAW: 14
          </text>
        </g>

        <g transform="translate(285, 22)">
          <rect x="0" y="0" width="98" height="36" rx="4" fill="rgba(0,0,0,0.7)" stroke="rgba(255,255,255,0.1)" />
          <text x="8" y="14" fill="#F4F4F5" fontSize="9" fontFamily="monospace" fontWeight="bold">
            SCORE // 08,420
          </text>
          <text x="8" y="27" fill="#34D399" fontSize="8" fontFamily="monospace">
            WEBGL 2.0 · THREE.JS
          </text>
        </g>
      </svg>

      {/* Interactive Badge Pill */}
      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-md flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
        <span>Procedural Shader Track & Web Audio Synthesis</span>
      </div>
    </div>
  );
};

