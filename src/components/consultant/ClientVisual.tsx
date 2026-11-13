import React from 'react';

interface ClientVisualProps {
  id: string;
  className?: string;
}

export const ClientVisual: React.FC<ClientVisualProps> = ({ id, className = '' }) => {
  switch (id) {
    // ------------------------------------------------------------------------
    // 01 Studio Squanta: Editorial Design Studio, Golden Ratio & Grid Architecture
    // ------------------------------------------------------------------------
    case 'studio-squanta':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0c100e] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Boundary Frame */}
            <rect x="20" y="15" width="320" height="130" rx="4" stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" strokeWidth="1" />
            
            {/* Golden Ratio Nested Rectangles */}
            <rect x="40" y="30" width="100" height="100" rx="2" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2" fill="rgba(16,185,129,0.03)" />
            <rect x="140" y="30" width="62" height="62" rx="2" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
            <rect x="140" y="92" width="38" height="38" rx="2" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
            <rect x="178" y="92" width="24" height="24" rx="2" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
            
            {/* Golden Spiral Arc */}
            <path d="M 40 130 A 100 100 0 0 1 140 30 A 62 62 0 0 1 202 92 A 38 38 0 0 1 178 130" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
            
            {/* Design Specimen & Typographic Indicators */}
            <text x="50" y="65" fill="#F4F4F5" fontSize="28" fontFamily="sans-serif" fontWeight="bold" opacity="0.9">S</text>
            <text x="75" y="65" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="600">Q_STUDIO</text>
            <text x="50" y="85" fill="#A1A1AA" fontSize="9" fontFamily="monospace">GRID 12-COL / 1.618 φ</text>
            
            {/* Alignment Ruler & Guides */}
            <line x1="220" y1="35" x2="320" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="220" y1="45" x2="290" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="220" y1="55" x2="305" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            
            {/* Interactive Cursor Indicator */}
            <g transform="translate(260, 80)">
              <polygon points="0,0 0,16 5,12 10,20 13,18 8,10 14,10" fill="#10B981" />
              <rect x="18" y="-5" width="60" height="16" rx="3" fill="#18181B" stroke="rgba(255,255,255,0.15)" />
              <text x="23" y="6" fill="#10B981" fontSize="8" fontFamily="monospace">x:1920 y:1080</text>
            </g>
            
            {/* Status Tag */}
            <rect x="220" y="115" width="100" height="20" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
            <circle cx="230" cy="125" r="3" fill="#10B981" />
            <text x="238" y="128" fill="#D4D4D8" fontSize="8" fontFamily="monospace">CORE VITALS: 99</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 02 Altecht: Enterprise IT Infrastructure, Cloud Nodes & Cyber Defense
    // ------------------------------------------------------------------------
    case 'altecht':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0a0f14] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e915_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central Cloud Security Hub */}
            <circle cx="180" cy="80" r="38" fill="rgba(14,165,233,0.06)" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="180" cy="80" r="28" fill="#0f172a" stroke="rgba(14,165,233,0.5)" strokeWidth="1" />
            
            {/* Shield Icon in Center */}
            <path d="M180 66 L192 72 V84 C192 92 180 97 180 97 C180 97 168 92 168 84 V72 Z" fill="rgba(14,165,233,0.2)" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M176 80 L179 83 L185 76" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Distributed Cloud Nodes */}
            {/* Node 1: Top Left */}
            <line x1="90" y1="45" x2="155" y2="70" stroke="rgba(14,165,233,0.3)" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="85" cy="45" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="73" y="48" fill="#38bdf8" fontSize="8" fontFamily="monospace">AWS</text>

            {/* Node 2: Bottom Left */}
            <line x1="90" y1="115" x2="155" y2="90" stroke="rgba(14,165,233,0.3)" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="85" cy="115" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="71" y="118" fill="#38bdf8" fontSize="8" fontFamily="monospace">AZURE</text>

            {/* Node 3: Top Right */}
            <line x1="270" y1="45" x2="205" y2="70" stroke="rgba(14,165,233,0.3)" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="275" cy="45" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="261" y="48" fill="#38bdf8" fontSize="8" fontFamily="monospace">K8S</text>

            {/* Node 4: Bottom Right */}
            <line x1="270" y1="115" x2="205" y2="90" stroke="rgba(14,165,233,0.3)" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="275" cy="115" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="260" y="118" fill="#38bdf8" fontSize="8" fontFamily="monospace">SOC2</text>

            {/* Telemetry packet animations (simulated) */}
            <circle cx="120" cy="58" r="2.5" fill="#38bdf8" />
            <circle cx="240" cy="102" r="2.5" fill="#38bdf8" />

            {/* Metric pill */}
            <rect x="135" y="128" width="90" height="18" rx="3" fill="rgba(14,165,233,0.1)" stroke="rgba(14,165,233,0.3)" />
            <text x="142" y="140" fill="#bae6fd" fontSize="8" fontFamily="monospace">SLA: 99.99% SECURE</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 03 SS Creation: Media Production, Video Timeline & 4K Reel Camera
    // ------------------------------------------------------------------------
    case 'ss-creation':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#110e0c] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Camera Aperture / Viewfinder in Top Right */}
            <g transform="translate(45, 50)">
              <circle cx="0" cy="0" r="30" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" fill="rgba(245,158,11,0.03)" />
              <circle cx="0" cy="0" r="18" stroke="rgba(245,158,11,0.6)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="5" fill="#f59e0b" />
              {/* Shutter Blades */}
              <line x1="-12" y1="-18" x2="18" y2="-12" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
              <line x1="18" y1="-12" x2="12" y2="18" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
              <line x1="12" y1="18" x2="-18" y2="12" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
              <line x1="-18" y1="12" x2="-12" y2="-18" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
              {/* 4K Indicator */}
              <text x="-16" y="45" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="600">4K PRORES</text>
            </g>

            {/* Video Production Timeline */}
            <rect x="110" y="25" width="230" height="95" rx="4" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
            
            {/* Timecode header */}
            <rect x="110" y="25" width="230" height="20" rx="4" fill="rgba(255,255,255,0.03)" />
            <text x="120" y="38" fill="#f59e0b" fontSize="8" fontFamily="monospace">TC: 01:24:18:04</text>
            <text x="280" y="38" fill="#71717a" fontSize="8" fontFamily="monospace">24.00 FPS</text>
            
            {/* Video Track 1 */}
            <rect x="120" y="52" width="60" height="16" rx="2" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="0.8" />
            <rect x="185" y="52" width="80" height="16" rx="2" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.5)" strokeWidth="0.8" />
            <rect x="270" y="52" width="60" height="16" rx="2" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="0.8" />
            <text x="126" y="63" fill="#fef3c7" fontSize="7" fontFamily="monospace">CLIP_01.MOV</text>
            
            {/* Audio Waveform Track */}
            <rect x="120" y="74" width="210" height="18" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" />
            {/* Waveform lines */}
            <path d="M125 83 L130 78 L135 88 L140 76 L145 85 L150 80 L155 87 L160 77 L165 85 L170 82 L175 88 L180 78 L185 86 L190 81 L195 89 L200 77 L205 85 L210 79 L215 87 L220 76 L225 86 L230 82 L235 88 L240 78 L245 85 L250 80 L255 87 L260 76 L265 86 L270 81 L275 88 L280 77 L285 85 L290 80 L295 87 L300 78 L305 86 L310 82 L315 88 L320 83" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.8" />
            
            {/* Playhead red needle */}
            <line x1="210" y1="25" x2="210" y2="120" stroke="#ef4444" strokeWidth="1.5" />
            <polygon points="206,25 214,25 210,32" fill="#ef4444" />
            
            {/* Bottom Status */}
            <text x="120" y="110" fill="#a1a1aa" fontSize="7" fontFamily="monospace">50+ PRODUCTION REELS OPTIMIZED</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 04 Samarth Business Group: Multi-Division Conglomerate Hierarchy & Tree
    // ------------------------------------------------------------------------
    case 'samarth-business-group':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0d0f12] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#64748b15_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Parent Holding Conglomerate Node */}
            <g transform="translate(180, 35)">
              <rect x="-80" y="-18" width="160" height="36" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
              <circle cx="-60" cy="0" r="4" fill="#38bdf8" />
              <text x="-48" y="4" fill="#f8fafc" fontSize="9" fontFamily="monospace" fontWeight="bold">SAMARTH GROUP</text>
            </g>

            {/* Tree Branch Connectors */}
            <line x1="180" y1="53" x2="180" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="60" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="60" y1="75" x2="60" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="180" y1="75" x2="180" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="300" y1="75" x2="300" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />

            {/* Division 1: Agriculture */}
            <g transform="translate(60, 115)">
              <rect x="-48" y="-20" width="96" height="40" rx="3" fill="#111827" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
              <circle cx="-34" cy="-5" r="3" fill="#10b981" />
              <text x="-25" y="-2" fill="#e2e8f0" fontSize="8" fontFamily="monospace" fontWeight="600">AGRO VET</text>
              <text x="-34" y="10" fill="#64748b" fontSize="7" fontFamily="monospace">Crop Solutions</text>
            </g>

            {/* Division 2: Industrial & Manufacturing */}
            <g transform="translate(180, 115)">
              <rect x="-48" y="-20" width="96" height="40" rx="3" fill="#111827" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
              <circle cx="-34" cy="-5" r="3" fill="#38bdf8" />
              <text x="-25" y="-2" fill="#e2e8f0" fontSize="8" fontFamily="monospace" fontWeight="600">INDUSTRY</text>
              <text x="-34" y="10" fill="#64748b" fontSize="7" fontFamily="monospace">Supply Chain</text>
            </g>

            {/* Division 3: Consulting & Commercial */}
            <g transform="translate(300, 115)">
              <rect x="-48" y="-20" width="96" height="40" rx="3" fill="#111827" stroke="rgba(245,158,11,0.5)" strokeWidth="1" />
              <circle cx="-34" cy="-5" r="3" fill="#f59e0b" />
              <text x="-25" y="-2" fill="#e2e8f0" fontSize="8" fontFamily="monospace" fontWeight="600">CONSULTING</text>
              <text x="-34" y="10" fill="#64748b" fontSize="7" fontFamily="monospace">Advisory Hub</text>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 05 Display Promotion: Commercial Signage, LED Pixel Matrix & Calipers
    // ------------------------------------------------------------------------
    case 'display-promotion':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0c0d12] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ec489912_1px,transparent_1px)] bg-[size:12px_12px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* LED Display Screen Billboard Frame */}
            <rect x="40" y="25" width="280" height="90" rx="4" fill="#090a0f" stroke="#ec4899" strokeWidth="1.2" />
            
            {/* Simulating LED Pixel Grid Pattern */}
            <g opacity="0.35">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={55 + col * 14}
                    cy={35 + row * 9}
                    r="1.8"
                    fill={col > 4 && col < 14 && row > 1 && row < 6 ? '#ec4899' : '#38bdf8'}
                  />
                ))
              )}
            </g>

            {/* High-Impact Brand Center Text inside billboard */}
            <rect x="110" y="50" width="140" height="40" rx="3" fill="rgba(0,0,0,0.8)" stroke="rgba(236,72,153,0.6)" strokeWidth="1" />
            <text x="125" y="70" fill="#f43f5e" fontSize="11" fontFamily="monospace" fontWeight="bold">DISPLAY PRO</text>
            <text x="125" y="82" fill="#a1a1aa" fontSize="7" fontFamily="monospace">OUTDOOR LED · 5500 NITS</text>

            {/* Dimensional Caliper Dimension Markings */}
            <line x1="40" y1="125" x2="320" y2="125" stroke="#f43f5e" strokeWidth="1" />
            <line x1="40" y1="120" x2="40" y2="130" stroke="#f43f5e" strokeWidth="1" />
            <line x1="320" y1="120" x2="320" y2="130" stroke="#f43f5e" strokeWidth="1" />
            <text x="145" y="137" fill="#f43f5e" fontSize="8" fontFamily="monospace">WIDTH: 3840mm</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 06 Muscle Build Nutrition: Supplement Nutrition Card, Macro Curve & QR Auth
    // ------------------------------------------------------------------------
    case 'muscle-build-nutrition':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0e0c0b] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ea580c15_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Supplement Tub Silhouette / Container */}
            <g transform="translate(60, 40)">
              <rect x="-25" y="-15" width="50" height="12" rx="2" fill="#18181b" stroke="#f97316" strokeWidth="1" />
              <rect x="-35" y="-3" width="70" height="85" rx="6" fill="#18181b" stroke="#f97316" strokeWidth="1.2" />
              <rect x="-30" y="15" width="60" height="45" rx="3" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.4)" strokeWidth="0.8" />
              <text x="-24" y="32" fill="#f97316" fontSize="10" fontFamily="monospace" fontWeight="bold">WHEY</text>
              <text x="-24" y="44" fill="#fed7aa" fontSize="7" fontFamily="monospace">ISOLATE</text>
              <text x="-24" y="54" fill="#a1a1aa" fontSize="6" fontFamily="monospace">27g PROTEIN</text>
            </g>

            {/* Nutrition Facts Table */}
            <rect x="135" y="25" width="185" height="100" rx="4" fill="#18181b" stroke="rgba(255,255,255,0.12)" />
            <rect x="135" y="25" width="185" height="20" rx="4" fill="rgba(249,115,22,0.15)" />
            <text x="145" y="38" fill="#f97316" fontSize="8" fontFamily="monospace" fontWeight="bold">NUTRITION PROFILE / SERVING</text>
            
            {/* Macro Rows */}
            <text x="145" y="58" fill="#e4e4e7" fontSize="8" fontFamily="monospace">Pure Whey Protein</text>
            <text x="280" y="58" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">27.0 g</text>
            <line x1="145" y1="63" x2="310" y2="63" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            <text x="145" y="76" fill="#e4e4e7" fontSize="8" fontFamily="monospace">BCAA Complex 2:1:1</text>
            <text x="285" y="76" fill="#38bdf8" fontSize="8" fontFamily="monospace">6.2 g</text>
            <line x1="145" y1="81" x2="310" y2="81" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            <text x="145" y="94" fill="#e4e4e7" fontSize="8" fontFamily="monospace">Sugar / Trans Fat</text>
            <text x="290" y="94" fill="#a1a1aa" fontSize="8" fontFamily="monospace">0.0 g</text>
            <line x1="145" y1="99" x2="310" y2="99" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* Authenticity Badge */}
            <rect x="145" y="106" width="165" height="14" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
            <text x="150" y="116" fill="#34d399" fontSize="7" fontFamily="monospace">✓ 100% GENUINE BATCH VERIFIED</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 07 Shubharambh Events: Luxury Mandala Blueprint, Seating Map & Stage Spotlight
    // ------------------------------------------------------------------------
    case 'shubharambh-events':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#140e0c] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#d9770615_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stage Arch Center Top */}
            <g transform="translate(180, 40)">
              <path d="M-60 10 Q 0 -20 60 10" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
              <rect x="-40" y="5" width="80" height="25" rx="3" fill="#18181b" stroke="rgba(245,158,11,0.5)" strokeWidth="1" />
              <text x="-28" y="21" fill="#fde68a" fontSize="8" fontFamily="monospace" fontWeight="bold">ROYAL STAGE</text>
              {/* Spotlight Cones */}
              <polygon points="-40,5 -80,95 -20,95" fill="rgba(245,158,11,0.05)" />
              <polygon points="40,5 20,95 80,95" fill="rgba(245,158,11,0.05)" />
            </g>

            {/* Banquet Seating Layout Blueprint */}
            {/* Table 1: Left */}
            <g transform="translate(70, 95)">
              <circle cx="0" cy="0" r="14" fill="#1c1917" stroke="#f59e0b" strokeWidth="1" />
              <text x="-8" y="3" fill="#fef3c7" fontSize="7" fontFamily="monospace">T-01</text>
              {/* Chairs */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * 19}
                  cy={Math.sin((deg * Math.PI) / 180) * 19}
                  r="2.5"
                  fill="#78716c"
                />
              ))}
            </g>

            {/* Table 2: Center */}
            <g transform="translate(180, 110)">
              <circle cx="0" cy="0" r="16" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="-12" y="3" fill="#fef3c7" fontSize="8" fontFamily="monospace" fontWeight="bold">VIP-01</text>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * 22}
                  cy={Math.sin((deg * Math.PI) / 180) * 22}
                  r="2.8"
                  fill="#f59e0b"
                />
              ))}
            </g>

            {/* Table 3: Right */}
            <g transform="translate(290, 95)">
              <circle cx="0" cy="0" r="14" fill="#1c1917" stroke="#f59e0b" strokeWidth="1" />
              <text x="-8" y="3" fill="#fef3c7" fontSize="7" fontFamily="monospace">T-02</text>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * 19}
                  cy={Math.sin((deg * Math.PI) / 180) * 19}
                  r="2.5"
                  fill="#78716c"
                />
              ))}
            </g>

            {/* Event Header Banner */}
            <text x="110" y="20" fill="#f59e0b" fontSize="8" fontFamily="monospace">EXPERIENTIAL WEDDING DECOR PLAN</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 08 Prerna Saree: Fine Handloom Textile Weave, Gold Zari Border & Fabric Zoom
    // ------------------------------------------------------------------------
    case 'prerna-saree':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#140b10] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ec489915_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Zari Gold Border Strip (Top) */}
            <rect x="30" y="20" width="300" height="22" fill="#2d131f" stroke="#fbbf24" strokeWidth="1" />
            {/* Traditional Zari Geometric Diamond Pattern */}
            <g stroke="#fbbf24" strokeWidth="1" fill="none">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <polygon key={i} points={`${45 + i * 25},25 ${55 + i * 25},31 ${45 + i * 25},37 ${35 + i * 25},31`} />
              ))}
            </g>

            {/* Handloom Warp and Weft Weaving Matrix */}
            <g transform="translate(30, 52)">
              <rect x="0" y="0" width="180" height="85" fill="#1f1118" stroke="rgba(244,63,94,0.3)" strokeWidth="1" />
              {/* Vertical Warp Threads */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
                <line key={`v-${i}`} x1={12 * i + 6} y1="0" x2={12 * i + 6} y2="85" stroke="rgba(251,191,36,0.25)" strokeWidth="1" />
              ))}
              {/* Horizontal Weft Threads */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line key={`h-${i}`} x1="0" y1={12 * i + 6} x2="180" y2={12 * i + 6} stroke="rgba(244,63,94,0.35)" strokeWidth="1.2" strokeDasharray={i % 2 === 0 ? "4 4" : "2 2"} />
              ))}
              {/* Silk Loom Badge */}
              <rect x="15" y="55" width="150" height="20" rx="3" fill="rgba(0,0,0,0.85)" stroke="#fbbf24" strokeWidth="0.8" />
              <text x="23" y="68" fill="#fde68a" fontSize="8" fontFamily="monospace">PURE PAITHANI SILK · 120s</text>
            </g>

            {/* Magnifier / Macro Fabric Zoom Circle */}
            <g transform="translate(265, 95)">
              <circle cx="0" cy="0" r="34" fill="#260f1b" stroke="#fbbf24" strokeWidth="1.5" />
              {/* Dense Crosshatch inside zoom */}
              <g stroke="#f43f5e" strokeWidth="1" opacity="0.6">
                <line x1="-20" y1="-20" x2="20" y2="20" />
                <line x1="-20" y1="20" x2="20" y2="-20" />
                <circle cx="0" cy="0" r="15" stroke="#fbbf24" fill="none" strokeDasharray="3 2" />
              </g>
              <text x="-24" y="4" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold">8x ZOOM</text>
            </g>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 09 BytePro Labs: AI Incubator Neural Cluster, Venture Flow & Tensor Hub
    // ------------------------------------------------------------------------
    case 'bytepro-labs':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0a110d] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central BytePro Labs Core */}
            <g transform="translate(180, 80)">
              <rect x="-45" y="-22" width="90" height="44" rx="4" fill="#132a1c" stroke="#10b981" strokeWidth="1.5" />
              <text x="-36" y="-3" fill="#6ee7b7" fontSize="9" fontFamily="monospace" fontWeight="bold">BYTEPRO</text>
              <text x="-36" y="11" fill="#a7f3d0" fontSize="7" fontFamily="monospace">AI INCUBATOR</text>
            </g>

            {/* Neural Connections & Venture Pipelines */}
            {/* Product 1: ReelShop */}
            <g transform="translate(65, 45)">
              <line x1="45" y1="15" x2="70" y2="25" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="-40" y="-15" width="80" height="30" rx="3" fill="#0f1f16" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
              <text x="-30" y="4" fill="#e2e8f0" fontSize="8" fontFamily="monospace">REELSHOP</text>
              <circle cx="28" cy="0" r="3" fill="#10b981" />
            </g>

            {/* Product 2: Student-X */}
            <g transform="translate(65, 115)">
              <line x1="45" y1="-15" x2="70" y2="-25" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="-40" y="-15" width="80" height="30" rx="3" fill="#0f1f16" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
              <text x="-32" y="4" fill="#e2e8f0" fontSize="8" fontFamily="monospace">STUDENT-X</text>
              <circle cx="28" cy="0" r="3" fill="#10b981" />
            </g>

            {/* Venture Partner / Investor Output */}
            <g transform="translate(295, 80)">
              <line x1="-70" y1="0" x2="-45" y2="0" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="-40" y="-18" width="80" height="36" rx="3" fill="#0f1f16" stroke="#38bdf8" strokeWidth="1" />
              <text x="-32" y="-2" fill="#bae6fd" fontSize="8" fontFamily="monospace" fontWeight="600">VENTURE</text>
              <text x="-32" y="10" fill="#64748b" fontSize="7" fontFamily="monospace">Global Scale</text>
            </g>

            {/* Telemetry Footer */}
            <text x="110" y="145" fill="#10b981" fontSize="8" fontFamily="monospace">TENSORFLOW · NEXT.JS · CLOUD GPU</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 10 Spark: Glassmorphic Micro-Interactions, Speed HUD & Edge Telemetry
    // ------------------------------------------------------------------------
    case 'spark':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#090d14] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glassmorphic Command Menu Window */}
            <rect x="40" y="25" width="280" height="105" rx="6" fill="#0f172a" fillOpacity="0.8" stroke="rgba(56,189,248,0.3)" strokeWidth="1.2" />
            
            {/* Command Palette Bar */}
            <rect x="55" y="38" width="250" height="24" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
            <text x="68" y="53" fill="#38bdf8" fontSize="9" fontFamily="monospace">&gt; Search commands or actions...</text>
            <rect x="260" y="42" width="36" height="16" rx="2" fill="rgba(255,255,255,0.1)" />
            <text x="266" y="53" fill="#e2e8f0" fontSize="8" fontFamily="monospace">⌘ K</text>
            
            {/* Sparkline Velocity Curve */}
            <path d="M55 105 L95 95 L135 110 L175 75 L215 88 L255 68 L295 72" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <circle cx="255" cy="68" r="3.5" fill="#38bdf8" />
            <text x="245" y="60" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">PEAK</text>
            
            {/* Edge Latency Badge */}
            <rect x="55" y="112" width="115" height="15" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
            <text x="60" y="122" fill="#34d399" fontSize="7" fontFamily="monospace">⚡ EDGE LATENCY: 12ms</text>

            <rect x="180" y="112" width="125" height="15" rx="2" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.3)" />
            <text x="185" y="122" fill="#bae6fd" fontSize="7" fontFamily="monospace">VERCEL GLOBAL CDN</text>
          </svg>
        </div>
      );

    // ------------------------------------------------------------------------
    // 11 Student-X: EdTech Resource Repository, Syllabus Tree & Student Nodes
    // ------------------------------------------------------------------------
    case 'student-x':
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0a0f12] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Academic Portal Hub */}
            <g transform="translate(60, 45)">
              <rect x="-35" y="-20" width="70" height="40" rx="4" fill="#13231b" stroke="#10b981" strokeWidth="1.2" />
              <polygon points="0,-12 18,-3 0,6 -18,-3" fill="#10b981" />
              <line x1="12" y1="-1" x2="12" y2="8" stroke="#10b981" strokeWidth="1" />
              <text x="-25" y="14" fill="#e2e8f0" fontSize="8" fontFamily="monospace" fontWeight="bold">ADCET ENG</text>
            </g>

            {/* Tree branches to academic departments */}
            <line x1="95" y1="45" x2="140" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
            <line x1="140" y1="25" x2="140" y2="125" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />

            {/* Branch 1: CSE Syllabus & Notes */}
            <g transform="translate(140, 30)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <rect x="25" y="-12" width="145" height="24" rx="3" fill="#18181b" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
              <text x="35" y="3" fill="#e2e8f0" fontSize="8" fontFamily="monospace">CSE: DATA STRUCTURES & AI</text>
            </g>

            {/* Branch 2: Previous Papers Archive */}
            <g transform="translate(140, 75)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <rect x="25" y="-12" width="145" height="24" rx="3" fill="#18181b" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
              <text x="35" y="3" fill="#bae6fd" fontSize="8" fontFamily="monospace">EXAM PAPERS (2020-2025)</text>
            </g>

            {/* Branch 3: Project Guidance & B.Tech Capstone */}
            <g transform="translate(140, 120)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <rect x="25" y="-12" width="145" height="24" rx="3" fill="#18181b" stroke="rgba(245,158,11,0.5)" strokeWidth="1" />
              <text x="35" y="3" fill="#fef3c7" fontSize="8" fontFamily="monospace">CAPSTONE REPO & CODE</text>
            </g>

            {/* Active Student Community Counter */}
            <rect x="25" y="95" width="85" height="35" rx="3" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" />
            <text x="32" y="110" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">2,500+</text>
            <text x="32" y="122" fill="#a1a1aa" fontSize="7" fontFamily="monospace">STUDENTS SERVED</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-44 overflow-hidden rounded-t-lg bg-[#0e100f] border-b border-white/[0.06] flex items-center justify-center ${className}`}>
          <div className="font-mono text-xs text-typography-dim">
            // CLIENT ARCHITECTURE DEPLOYMENT
          </div>
        </div>
      );
  }
};

