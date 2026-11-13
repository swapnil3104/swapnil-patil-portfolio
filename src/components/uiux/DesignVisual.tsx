import React from 'react';

interface DesignVisualProps {
  id: string;
  className?: string;
}

export const DesignVisual: React.FC<DesignVisualProps> = ({ id, className = '' }) => {
  switch (id) {
    // ------------------------------------------------------------------------
    // 01 HousTrack: Real Estate SaaS Dashboard & Maintenance Kanban
    // ------------------------------------------------------------------------
    case 'houstrack':
      return (
        <div className={`relative w-full h-48 sm:h-52 overflow-hidden rounded-t-lg bg-[#080B0A] border-b border-white/[0.06] flex items-center justify-center select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}>
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />

          <svg className="w-full h-full p-3 sm:p-4 relative z-10" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Operational Bar */}
            <rect x="15" y="10" width="350" height="24" rx="4" fill="#101513" stroke="rgba(255,255,255,0.08)" />
            <circle cx="28" cy="22" r="3.5" fill="#10B981" />
            <text x="38" y="25" fill="#F4F4F5" fontSize="9" fontFamily="monospace" fontWeight="600">
              HOUSTRACK_OS // MULTI-TENANT DASHBOARD
            </text>
            <rect x="290" y="14" width="65" height="16" rx="3" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
            <text x="297" y="25" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="600">
              LIVE METRICS
            </text>

            {/* Left Metric Widget: Occupancy Radial Progress */}
            <g transform="translate(15, 42)">
              <rect x="0" y="0" width="130" height="126" rx="4" fill="#0D1210" stroke="rgba(255,255,255,0.08)" />
              <text x="12" y="18" fill="#A1A1AA" fontSize="8" fontFamily="sans-serif">PORTFOLIO OCCUPANCY</text>
              <text x="12" y="38" fill="#F4F4F5" fontSize="20" fontFamily="sans-serif" fontWeight="bold">96.4%</text>
              
              {/* Radial Arc Indicator */}
              <circle cx="65" cy="82" r="28" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
              <circle
                cx="65"
                cy="82"
                r="28"
                stroke="#10B981"
                strokeWidth="6"
                strokeDasharray="175"
                strokeDashoffset="18"
                strokeLinecap="round"
                fill="none"
              />
              <text x="65" y="85" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                128/132
              </text>
              <text x="65" y="118" textAnchor="middle" fill="#71717A" fontSize="7.5" fontFamily="monospace">
                UNITS OCCUPIED
              </text>
            </g>

            {/* Right Metric Widget: Kanban Maintenance Pipeline */}
            <g transform="translate(155, 42)">
              <rect x="0" y="0" width="210" height="126" rx="4" fill="#0D1210" stroke="rgba(255,255,255,0.08)" />
              
              {/* Kanban Column 1: Triaged */}
              <g transform="translate(10, 10)">
                <rect x="0" y="0" width="90" height="18" rx="2" fill="#141B18" />
                <circle cx="8" cy="9" r="2.5" fill="#F59E0B" />
                <text x="15" y="12" fill="#D4D4D8" fontSize="7.5" fontFamily="monospace" fontWeight="600">PENDING (3)</text>
                
                {/* Ticket Card 1 */}
                <rect x="0" y="24" width="90" height="36" rx="3" fill="#101513" stroke="rgba(245,158,11,0.3)" />
                <text x="6" y="36" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Unit 402 — HVAC Leak</text>
                <text x="6" y="48" fill="#F59E0B" fontSize="6.5" fontFamily="monospace">PRIORITY: HIGH</text>

                {/* Ticket Card 2 */}
                <rect x="0" y="66" width="90" height="36" rx="3" fill="#101513" stroke="rgba(255,255,255,0.08)" />
                <text x="6" y="78" fill="#D4D4D8" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Unit 118 — Intercom</text>
                <text x="6" y="90" fill="#71717A" fontSize="6.5" fontFamily="monospace">ROUTINE DISPATCH</text>
              </g>

              {/* Kanban Column 2: Resolved */}
              <g transform="translate(110, 10)">
                <rect x="0" y="0" width="90" height="18" rx="2" fill="#141B18" />
                <circle cx="8" cy="9" r="2.5" fill="#10B981" />
                <text x="15" y="12" fill="#D4D4D8" fontSize="7.5" fontFamily="monospace" fontWeight="600">RESOLVED (18)</text>

                {/* Resolved Card */}
                <rect x="0" y="24" width="90" height="36" rx="3" fill="#101513" stroke="rgba(16,185,129,0.3)" />
                <text x="6" y="36" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Unit 205 — Keycard</text>
                <text x="6" y="48" fill="#10B981" fontSize="6.5" fontFamily="monospace">CLOSED · INVOICED</text>

                {/* Rent Collections Badge */}
                <rect x="0" y="66" width="90" height="36" rx="3" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" />
                <text x="6" y="78" fill="#10B981" fontSize="7" fontFamily="monospace">RENT LEDGER OCT</text>
                <text x="6" y="92" fill="#F4F4F5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">$48,250 / $50K</text>
              </g>
            </g>
          </svg>

          {/* Design System Token Badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
            8pt Grid · Auto-Layout 5.0
          </div>
        </div>
      );

    // ------------------------------------------------------------------------
    // 02 GlowVita: Luxury Salon & Stylist Booking Mobile App
    // ------------------------------------------------------------------------
    case 'glowvita':
      return (
        <div className={`relative w-full h-48 sm:h-52 overflow-hidden rounded-t-lg bg-[#0C0B0A] border-b border-white/[0.06] flex items-center justify-center select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}>
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,194,133,0.06),transparent_70%)]" />

          <svg className="w-full h-full p-3 relative z-10" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mobile Device Frame Silhouette */}
            <g transform="translate(115, 6)">
              <rect x="0" y="0" width="150" height="168" rx="14" fill="#131211" stroke="rgba(226,194,133,0.3)" strokeWidth="1.2" />
              {/* Dynamic Island / Speaker */}
              <rect x="52" y="4" width="46" height="6" rx="3" fill="#000000" />

              {/* Header Title */}
              <text x="14" y="24" fill="#E2C285" fontSize="8" fontFamily="serif" fontWeight="bold">
                GLOWVITA SALON
              </text>
              <text x="14" y="34" fill="#A1A1AA" fontSize="6.5" fontFamily="sans-serif">
                Select Senior Stylist
              </text>

              {/* Stylist Profile Card */}
              <rect x="12" y="40" width="126" height="34" rx="4" fill="#1C1B19" stroke="rgba(255,255,255,0.08)" />
              <circle cx="28" cy="57" r="10" fill="#E2C285" opacity="0.3" />
              <circle cx="28" cy="57" r="6" fill="#E2C285" />
              <text x="44" y="53" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">
                Elena Vance
              </text>
              <text x="44" y="63" fill="#E2C285" fontSize="6.5" fontFamily="monospace">
                MASTER COLORIST ★ 4.9
              </text>

              {/* Date Selector Strip */}
              <g transform="translate(12, 80)">
                {/* Day 1 */}
                <rect x="0" y="0" width="28" height="24" rx="3" fill="#18181B" stroke="rgba(255,255,255,0.08)" />
                <text x="14" y="10" textAnchor="middle" fill="#71717A" fontSize="6" fontFamily="sans-serif">THU</text>
                <text x="14" y="19" textAnchor="middle" fill="#D4D4D8" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">14</text>

                {/* Day 2 (Active Selected) */}
                <rect x="32" y="0" width="28" height="24" rx="3" fill="#E2C285" />
                <text x="46" y="10" textAnchor="middle" fill="#0D0E0E" fontSize="6" fontFamily="sans-serif" fontWeight="bold">FRI</text>
                <text x="46" y="19" textAnchor="middle" fill="#0D0E0E" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">15</text>

                {/* Day 3 */}
                <rect x="64" y="0" width="28" height="24" rx="3" fill="#18181B" stroke="rgba(255,255,255,0.08)" />
                <text x="78" y="10" textAnchor="middle" fill="#71717A" fontSize="6" fontFamily="sans-serif">SAT</text>
                <text x="78" y="19" textAnchor="middle" fill="#D4D4D8" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">16</text>

                {/* Day 4 */}
                <rect x="96" y="0" width="28" height="24" rx="3" fill="#18181B" stroke="rgba(255,255,255,0.08)" />
                <text x="110" y="10" textAnchor="middle" fill="#71717A" fontSize="6" fontFamily="sans-serif">SUN</text>
                <text x="110" y="19" textAnchor="middle" fill="#D4D4D8" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">17</text>
              </g>

              {/* Time Slot Chips */}
              <g transform="translate(12, 110)">
                <rect x="0" y="0" width="38" height="16" rx="2" fill="#18181B" />
                <text x="19" y="11" textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">11:00 AM</text>

                <rect x="42" y="0" width="42" height="16" rx="2" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
                <text x="63" y="11" textAnchor="middle" fill="#10B981" fontSize="6.5" fontFamily="monospace" fontWeight="bold">02:30 PM</text>

                <rect x="88" y="0" width="38" height="16" rx="2" fill="#18181B" />
                <text x="107" y="11" textAnchor="middle" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">04:00 PM</text>
              </g>

              {/* Book Appointment CTA Button */}
              <g transform="translate(12, 134)">
                <rect x="0" y="0" width="126" height="22" rx="4" fill="#E2C285" />
                <text x="63" y="14" textAnchor="middle" fill="#0D0E0E" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">
                  CONFIRM BOOKING • $85
                </text>
              </g>
            </g>

            {/* Left Context Flank Tag */}
            <g transform="translate(15, 60)" className="hidden sm:block">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#121110" stroke="rgba(255,255,255,0.08)" />
              <text x="8" y="15" fill="#E2C285" fontSize="7.5" fontFamily="monospace" fontWeight="600">IOS / ANDROID</text>
              <text x="8" y="27" fill="#D4D4D8" fontSize="7" fontFamily="sans-serif">Thumb-Zone Flow</text>
              <text x="8" y="37" fill="#71717A" fontSize="6.5" fontFamily="monospace">Min 44pt Touch Targets</text>
            </g>

            {/* Right Context Flank Tag */}
            <g transform="translate(280, 60)" className="hidden sm:block">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#121110" stroke="rgba(255,255,255,0.08)" />
              <text x="8" y="15" fill="#10B981" fontSize="7.5" fontFamily="monospace" fontWeight="600">ZERO NO-SHOWS</text>
              <text x="8" y="27" fill="#D4D4D8" fontSize="7" fontFamily="sans-serif">Automated Reminders</text>
              <text x="8" y="37" fill="#71717A" fontSize="6.5" fontFamily="monospace">Apple / Google Wallet</text>
            </g>
          </svg>

          {/* Design System Token Badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
            Champagne & Warm Dark Mode · SF Pro
          </div>
        </div>
      );

    // ------------------------------------------------------------------------
    // 03 Melodies: Dark Mode Web Audio Client & Waveform Visualizer
    // ------------------------------------------------------------------------
    case 'melodies':
      return (
        <div className={`relative w-full h-48 sm:h-52 overflow-hidden rounded-t-lg bg-[#070908] border-b border-white/[0.06] flex items-center justify-center select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}>
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.06),transparent_60%)]" />

          <svg className="w-full h-full p-3 sm:p-4 relative z-10" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Navigation Strip */}
            <rect x="15" y="10" width="350" height="22" rx="3" fill="#0E1210" stroke="rgba(255,255,255,0.08)" />
            <circle cx="26" cy="21" r="3" fill="#06B6D4" />
            <text x="35" y="24" fill="#F4F4F5" fontSize="8.5" fontFamily="monospace" fontWeight="600">
              MELODIES_WEB // ROOM #04: SYNTHWAVE_LOUNGE
            </text>
            <rect x="290" y="13" width="65" height="15" rx="2" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.3)" />
            <text x="297" y="24" fill="#06B6D4" fontSize="7.5" fontFamily="monospace">
              8 LISTENING
            </text>

            {/* Left Track Artwork & Info */}
            <g transform="translate(15, 38)">
              <rect x="0" y="0" width="105" height="88" rx="4" fill="#111613" stroke="rgba(255,255,255,0.08)" />
              <rect x="8" y="8" width="40" height="40" rx="3" fill="#1B2420" stroke="rgba(16,185,129,0.3)" />
              {/* Soundwave Motif */}
              <path d="M 16 28 L 20 20 L 24 36 L 28 14 L 32 32 L 36 24 L 40 28" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
              
              <text x="54" y="22" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Resonance</text>
              <text x="54" y="32" fill="#A1A1AA" fontSize="6.5" fontFamily="sans-serif">HOME &bull; Synth</text>
              <text x="54" y="42" fill="#06B6D4" fontSize="6.5" fontFamily="monospace">FLAC 24-bit/96kHz</text>

              {/* Dynamic Queue Vote */}
              <rect x="8" y="56" width="89" height="24" rx="2" fill="#151C18" />
              <text x="14" y="68" fill="#D4D4D8" fontSize="6.5" fontFamily="sans-serif">Next: Midnight City</text>
              <text x="14" y="76" fill="#10B981" fontSize="6" fontFamily="monospace">&uarr; 6 VOTES TO PLAY</text>
            </g>

            {/* Center & Right: Multi-Bar Equalizer Waveform Canvas */}
            <g transform="translate(130, 38)">
              <rect x="0" y="0" width="235" height="88" rx="4" fill="#0E1210" stroke="rgba(255,255,255,0.08)" />
              <text x="10" y="16" fill="#71717A" fontSize="7" fontFamily="monospace">REAL-TIME FFT SPECTRUM ANALYZER</text>
              <text x="175" y="16" fill="#10B981" fontSize="7" fontFamily="monospace">60 FPS STEREO</text>

              {/* 24 Frequency Bars */}
              {[
                16, 24, 38, 52, 44, 30, 62, 54, 42, 68, 58, 48,
                36, 50, 64, 46, 32, 56, 42, 28, 38, 22, 18, 12
              ].map((h, i) => (
                <rect
                  key={i}
                  x={12 + i * 9}
                  y={78 - h}
                  width="5"
                  height={h}
                  rx="1.5"
                  fill={i % 3 === 0 ? '#06B6D4' : '#10B981'}
                  opacity={0.85}
                />
              ))}

              <line x1="8" y1="80" x2="225" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            </g>

            {/* Bottom Persistent Audio Dock */}
            <g transform="translate(15, 134)">
              <rect x="0" y="0" width="350" height="34" rx="4" fill="#121815" stroke="rgba(16,185,129,0.3)" />
              
              {/* Play / Pause Button */}
              <circle cx="22" cy="17" r="10" fill="#10B981" />
              <polygon points="20,13 20,21 26,17" fill="#080A09" />

              {/* Progress Scrub Bar */}
              <text x="40" y="20" fill="#D4D4D8" fontSize="7.5" fontFamily="monospace">02:44</text>
              <line x1="72" y1="17" x2="300" y2="17" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" />
              <line x1="72" y1="17" x2="220" y2="17" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
              <circle cx="220" cy="17" r="4.5" fill="#FFFFFF" />
              <text x="310" y="20" fill="#71717A" fontSize="7.5" fontFamily="monospace">04:12</text>
            </g>
          </svg>

          {/* Design System Token Badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
            Acoustic Dark Obsidian · 3-Pane Desktop Layout
          </div>
        </div>
      );

    // ------------------------------------------------------------------------
    // 04 FlyMitra: Flight Itinerary, Price Calendar & QR Boarding Pass
    // ------------------------------------------------------------------------
    case 'flymitra':
      return (
        <div className={`relative w-full h-48 sm:h-52 overflow-hidden rounded-t-lg bg-[#080B0F] border-b border-white/[0.06] flex items-center justify-center select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}>
          {/* Subtle Aeronautical Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:18px_18px]" />

          <svg className="w-full h-full p-3 sm:p-4 relative z-10" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Flight Search Header */}
            <rect x="15" y="10" width="350" height="26" rx="4" fill="#0F141B" stroke="rgba(255,255,255,0.08)" />
            <text x="26" y="27" fill="#F4F4F5" fontSize="12" fontFamily="sans-serif" fontWeight="bold">BOM</text>
            <text x="60" y="27" fill="#71717A" fontSize="8" fontFamily="sans-serif">MUMBAI</text>
            
            {/* Direct Flight Arc Arrow */}
            <path d="M 115 23 L 155 23" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="156,20 162,23 156,26" fill="#10B981" />
            
            <text x="175" y="27" fill="#F4F4F5" fontSize="12" fontFamily="sans-serif" fontWeight="bold">DXB</text>
            <text x="208" y="27" fill="#71717A" fontSize="8" fontFamily="sans-serif">DUBAI INT</text>

            <rect x="290" y="15" width="65" height="16" rx="3" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" />
            <text x="298" y="26" fill="#10B981" fontSize="7.5" fontFamily="monospace" fontWeight="600">
              NON-STOP
            </text>

            {/* Date Fare Price Matrix Row */}
            <g transform="translate(15, 42)">
              <rect x="0" y="0" width="350" height="30" rx="3" fill="#0C1017" stroke="rgba(255,255,255,0.08)" />
              
              {/* Day 1 */}
              <text x="25" y="14" textAnchor="middle" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">WED 13</text>
              <text x="25" y="25" textAnchor="middle" fill="#D4D4D8" fontSize="8" fontFamily="monospace">$240</text>
              
              {/* Day 2 (Lowest Fare Highlight) */}
              <rect x="58" y="4" width="60" height="22" rx="2" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
              <text x="88" y="14" textAnchor="middle" fill="#10B981" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">THU 14 (LOWEST)</text>
              <text x="88" y="23" textAnchor="middle" fill="#10B981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">$190</text>

              {/* Day 3 */}
              <text x="155" y="14" textAnchor="middle" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">FRI 15</text>
              <text x="155" y="25" textAnchor="middle" fill="#D4D4D8" fontSize="8" fontFamily="monospace">$225</text>

              {/* Day 4 */}
              <text x="220" y="14" textAnchor="middle" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">SAT 16</text>
              <text x="220" y="25" textAnchor="middle" fill="#D4D4D8" fontSize="8" fontFamily="monospace">$270</text>

              {/* Day 5 */}
              <text x="285" y="14" textAnchor="middle" fill="#71717A" fontSize="6.5" fontFamily="sans-serif">SUN 17</text>
              <text x="285" y="25" textAnchor="middle" fill="#D4D4D8" fontSize="8" fontFamily="monospace">$295</text>
            </g>

            {/* Flight Ticket Summary & Offline Boarding Pass QR Flank */}
            <g transform="translate(15, 78)">
              {/* Flight Ticket Details */}
              <rect x="0" y="0" width="245" height="90" rx="4" fill="#0F141B" stroke="rgba(255,255,255,0.08)" />
              <text x="14" y="20" fill="#F4F4F5" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">Emirates &bull; EK-501</text>
              <text x="160" y="20" fill="#10B981" fontSize="8" fontFamily="monospace">ON-TIME &bull; 04h 15m</text>

              {/* Route Timeline */}
              <circle cx="20" cy="40" r="3.5" fill="#10B981" />
              <line x1="24" y1="40" x2="180" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <circle cx="184" cy="40" r="3.5" fill="#10B981" />
              
              <text x="14" y="56" fill="#F4F4F5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">04:30</text>
              <text x="14" y="66" fill="#71717A" fontSize="7" fontFamily="sans-serif">T2 BOM</text>

              <text x="175" y="56" fill="#F4F4F5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">07:15</text>
              <text x="175" y="66" fill="#71717A" fontSize="7" fontFamily="sans-serif">T3 DXB</text>

              {/* Baggage & Seat Pill */}
              <rect x="14" y="72" width="70" height="12" rx="2" fill="#161E28" />
              <text x="20" y="81" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">2x 23kg Bags</text>

              <rect x="90" y="72" width="70" height="12" rx="2" fill="#161E28" />
              <text x="96" y="81" fill="#10B981" fontSize="6.5" fontFamily="monospace">Seat 14A (Window)</text>
            </g>

            {/* Offline Digital Boarding Pass QR Box */}
            <g transform="translate(268, 78)">
              <rect x="0" y="0" width="97" height="90" rx="4" fill="#FFFFFF" />
              <text x="48" y="14" textAnchor="middle" fill="#000000" fontSize="7" fontFamily="sans-serif" fontWeight="bold">BOARDING PASS</text>
              
              {/* High-Contrast QR Code Blocks Simulation */}
              <g transform="translate(18, 20)">
                <rect x="0" y="0" width="18" height="18" fill="#000000" />
                <rect x="3" y="3" width="12" height="12" fill="#FFFFFF" />
                <rect x="6" y="6" width="6" height="6" fill="#000000" />

                <rect x="42" y="0" width="18" height="18" fill="#000000" />
                <rect x="45" y="3" width="12" height="12" fill="#FFFFFF" />
                <rect x="48" y="6" width="6" height="6" fill="#000000" />

                <rect x="0" y="42" width="18" height="18" fill="#000000" />
                <rect x="3" y="45" width="12" height="12" fill="#FFFFFF" />
                <rect x="6" y="48" width="6" height="6" fill="#000000" />

                {/* Random Pattern Dots */}
                <rect x="24" y="6" width="6" height="6" fill="#000000" />
                <rect x="33" y="12" width="6" height="6" fill="#000000" />
                <rect x="21" y="24" width="18" height="6" fill="#000000" />
                <rect x="24" y="36" width="12" height="12" fill="#000000" />
                <rect x="42" y="30" width="6" height="18" fill="#000000" />
              </g>

              <text x="48" y="84" textAnchor="middle" fill="#000000" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
                GATE B12 &bull; GRP A
              </text>
            </g>
          </svg>

          {/* Design System Token Badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
            Aviation Slate · Price Matrix & QR Engine
          </div>
        </div>
      );

    // ------------------------------------------------------------------------
    // 05 Food App UI: On-Demand Food Delivery, Customizer & Telemetry
    // ------------------------------------------------------------------------
    case 'food-app-ui':
      return (
        <div className={`relative w-full h-48 sm:h-52 overflow-hidden rounded-t-lg bg-[#0A0B09] border-b border-white/[0.06] flex items-center justify-center select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}>
          {/* Subtle Warm Backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.06),transparent_65%)]" />

          <svg className="w-full h-full p-3 sm:p-4 relative z-10" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Food Dish Spotlight Card */}
            <g transform="translate(15, 12)">
              <rect x="0" y="0" width="165" height="156" rx="6" fill="#121411" stroke="rgba(255,255,255,0.08)" />
              
              {/* Dish Visual Header */}
              <rect x="8" y="8" width="149" height="66" rx="4" fill="#1A1E18" />
              <circle cx="82" cy="41" r="26" fill="#F59E0B" opacity="0.2" />
              <circle cx="82" cy="41" r="18" fill="#F59E0B" />
              {/* Burger/Bowl Outline */}
              <path d="M 68 40 Q 82 28 96 40 Z" fill="#E2C285" />
              <rect x="68" y="42" width="28" height="5" rx="2" fill="#10B981" />
              <path d="M 68 49 Q 82 56 96 49 Z" fill="#E2C285" />

              <text x="12" y="88" fill="#F4F4F5" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                Truffle Wagyu Burger
              </text>
              <text x="12" y="99" fill="#A1A1AA" fontSize="7" fontFamily="sans-serif">
                Brioche, aged cheddar &bull; 4.9★ (420)
              </text>

              {/* Price & Quantity Stepper */}
              <text x="12" y="118" fill="#F59E0B" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                $18.50
              </text>

              <g transform="translate(90, 107)">
                <rect x="0" y="0" width="67" height="18" rx="3" fill="#1E241E" />
                <text x="10" y="12" fill="#A1A1AA" fontSize="9" fontFamily="monospace">-</text>
                <text x="33" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">1</text>
                <text x="56" y="12" fill="#10B981" fontSize="9" fontFamily="monospace">+</text>
              </g>

              {/* Add to Cart CTA */}
              <rect x="8" y="130" width="149" height="18" rx="3" fill="#10B981" />
              <text x="82" y="142" textAnchor="middle" fill="#080A09" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">
                ADD TO CART &bull; $18.50
              </text>
            </g>

            {/* Right: Customization Drawer & Live Driver Telemetry */}
            <g transform="translate(190, 12)">
              {/* Toppings & Modifiers Drawer Preview */}
              <rect x="0" y="0" width="175" height="78" rx="4" fill="#121411" stroke="rgba(255,255,255,0.08)" />
              <text x="10" y="16" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">CUSTOMIZE INGREDIENTS</text>
              <text x="110" y="16" fill="#F59E0B" fontSize="6.5" fontFamily="monospace">OPTIONAL</text>

              {/* Checkbox 1 */}
              <rect x="10" y="24" width="155" height="16" rx="2" fill="#181C16" />
              <rect x="15" y="28" width="8" height="8" rx="1.5" fill="#10B981" />
              <text x="28" y="35" fill="#D4D4D8" fontSize="6.5" fontFamily="sans-serif">Extra Truffle Aioli</text>
              <text x="135" y="35" fill="#10B981" fontSize="6.5" fontFamily="monospace">+$1.50</text>

              {/* Checkbox 2 */}
              <rect x="10" y="43" width="155" height="16" rx="2" fill="#181C16" />
              <rect x="15" y="47" width="8" height="8" rx="1.5" fill="#10B981" />
              <text x="28" y="54" fill="#D4D4D8" fontSize="6.5" fontFamily="sans-serif">Smoked Bacon Crisp</text>
              <text x="135" y="54" fill="#10B981" fontSize="6.5" fontFamily="monospace">+$2.00</text>

              {/* Checkbox 3 */}
              <rect x="10" y="62" width="155" height="14" rx="2" fill="#181C16" />
              <rect x="15" y="64" width="8" height="8" rx="1.5" fill="#2A332B" />
              <text x="28" y="70" fill="#71717A" fontSize="6" fontFamily="sans-serif">Gluten-Free Bun</text>
              <text x="135" y="70" fill="#71717A" fontSize="6" fontFamily="monospace">+$1.00</text>

              {/* Live Driver Tracking Telemetry HUD */}
              <g transform="translate(0, 84)">
                <rect x="0" y="0" width="175" height="72" rx="4" fill="#121411" stroke="rgba(16,185,129,0.25)" />
                <circle cx="12" cy="14" r="3.5" fill="#10B981" />
                <text x="20" y="17" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">
                  LIVE COURIER ON ROUTE
                </text>
                <text x="110" y="17" fill="#F4F4F5" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">
                  18-24 MIN
                </text>

                {/* Route Vector Map Line */}
                <circle cx="20" cy="38" r="4" fill="#F59E0B" />
                <path d="M 24 38 L 80 38 L 100 50 L 145 50" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="149" cy="50" r="4" fill="#10B981" />

                <text x="12" y="50" fill="#71717A" fontSize="6" fontFamily="monospace">KITCHEN</text>
                <text x="135" y="62" fill="#10B981" fontSize="6" fontFamily="monospace">DOORSTEP</text>

                {/* Rider Info */}
                <rect x="10" y="56" width="155" height="12" rx="2" fill="#161B15" />
                <text x="14" y="64" fill="#D4D4D8" fontSize="6" fontFamily="sans-serif">Rider: Marcus K. &bull; Electric Scooter</text>
              </g>
            </g>
          </svg>

          {/* Design System Token Badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
            Cabinet Grotesk · 1-Tap Funnel & GPS Telemetry
          </div>
        </div>
      );

    default:
      return null;
  }
};

