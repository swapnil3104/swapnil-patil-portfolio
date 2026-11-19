import React from 'react';

interface ProjectVisualProps {
  projectId: string;
  category: string;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId, category, className = '' }) => {
  return (
    <div
      className={`relative w-full h-48 sm:h-52 rounded-lg overflow-hidden bg-[#070908] border border-white/[0.06] flex items-center justify-center p-3 select-none group-hover:border-accent-emerald/30 transition-colors ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Render Bespoke Project Diagram */}
      {renderVisual(projectId, category)}

      {/* Corner Category Tag Badge */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 border border-white/10 text-typography-muted backdrop-blur-sm pointer-events-none">
        {category}
      </div>
    </div>
  );
};

function renderVisual(id: string, category: string) {
  switch (id) {
    case 'student-attendance':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Institutional Portal Frame */}
          <g transform="translate(25, 20)">
            <rect x="0" y="0" width="310" height="120" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
            {/* Header bar */}
            <rect x="0" y="0" width="310" height="28" rx="8" fill="rgba(198,255,0,0.08)" />
            <text x="12" y="18" fill="#c6ff00" fontSize="10" fontFamily="monospace" fontWeight="bold">
              FACULTY ATTENDANCE ROSTER &middot; CS-2024
            </text>
            <text x="240" y="18" fill="#8a928f" fontSize="9" fontFamily="monospace">
              PHP/MySQL
            </text>

            {/* Roster Table Rows */}
            <g transform="translate(10, 36)">
              <rect x="0" y="0" width="290" height="22" rx="3" fill="#131916" stroke="rgba(255,255,255,0.04)" />
              <text x="8" y="15" fill="#f2f4f3" fontSize="9.5" fontFamily="monospace">
                #CS101 &middot; Aarav Sharma
              </text>
              <rect x="220" y="3" width="60" height="16" rx="3" fill="rgba(16,185,129,0.2)" />
              <text x="232" y="15" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                PRESENT
              </text>
            </g>

            <g transform="translate(10, 62)">
              <rect x="0" y="0" width="290" height="22" rx="3" fill="#131916" stroke="rgba(255,255,255,0.04)" />
              <text x="8" y="15" fill="#f2f4f3" fontSize="9.5" fontFamily="monospace">
                #CS102 &middot; Priya Patil
              </text>
              <rect x="220" y="3" width="60" height="16" rx="3" fill="rgba(16,185,129,0.2)" />
              <text x="232" y="15" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                PRESENT
              </text>
            </g>

            <g transform="translate(10, 88)">
              <rect x="0" y="0" width="290" height="22" rx="3" fill="#131916" stroke="rgba(255,255,255,0.04)" />
              <text x="8" y="15" fill="#f2f4f3" fontSize="9.5" fontFamily="monospace">
                #CS103 &middot; Rohan Deshmukh
              </text>
              <rect x="220" y="3" width="60" height="16" rx="3" fill="rgba(239,68,68,0.2)" />
              <text x="235" y="15" fill="#EF4444" fontSize="9" fontFamily="monospace" fontWeight="bold">
                ABSENT
              </text>
            </g>
          </g>

          {/* Telemetry Footer */}
          <g transform="translate(25, 150)">
            <rect x="0" y="0" width="310" height="34" rx="6" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="15" fill="#10B981" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ROLE ACCESS: FACULTY &middot; STUDENT PORTAL
            </text>
            <text x="12" y="27" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              Relational attendance records with MySQL persistence &middot; PHP backend
            </text>
          </g>
        </svg>
      );

    case 'drishtidrive-ai':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Night-Vision Cabin Viewfinder HUD */}
          <circle cx="180" cy="85" r="70" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeDasharray="3 3" />
          <line x1="180" y1="10" x2="180" y2="160" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" />
          <line x1="105" y1="85" x2="255" y2="85" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" />

          {/* Left & Right Eye Landmark Mesh */}
          <g transform="translate(130, 75)">
            {/* Left Eye Contour */}
            <path
              d="M-30,0 Q-15,-10 0,0 Q-15,10 -30,0 Z"
              fill="rgba(245, 158, 11, 0.1)"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            {/* Vertical Ratio Lines (EAR) */}
            <line x1="-20" y1="-7" x2="-20" y2="7" stroke="#c6ff00" strokeWidth="1.5" />
            <line x1="-10" y1="-7" x2="-10" y2="7" stroke="#c6ff00" strokeWidth="1.5" />

            {/* Right Eye Contour */}
            <path
              d="M30,0 Q45,-10 60,0 Q45,10 30,0 Z"
              fill="rgba(245, 158, 11, 0.1)"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <line x1="40" y1="-7" x2="40" y2="7" stroke="#c6ff00" strokeWidth="1.5" />
            <line x1="50" y1="-7" x2="50" y2="7" stroke="#c6ff00" strokeWidth="1.5" />
          </g>

          {/* Yawn MAR Landmark */}
          <path
            d="M165,115 Q180,132 195,115 Q180,122 165,115 Z"
            fill="none"
            stroke="rgba(245, 158, 11, 0.6)"
            strokeWidth="1.5"
          />

          {/* EAR Waveform Telemetry Graph */}
          <g transform="translate(20, 135)">
            <rect x="0" y="0" width="320" height="50" rx="4" fill="#111413" stroke="rgba(245, 158, 11, 0.3)" />
            {/* Threshold Line */}
            <line x1="10" y1="25" x2="310" y2="25" stroke="rgba(245, 158, 11, 0.5)" strokeDasharray="3 3" />
            <text x="215" y="22" fill="#F59E0B" fontSize="8" fontFamily="monospace">
              THRESHOLD (0.22)
            </text>

            {/* Rolling EAR Wave */}
            <path
              d="M15,18 Q30,16 45,20 T75,18 T105,21 T135,19 T165,36 T195,38 T225,35 T255,20 T285,18 T305,19"
              fill="none"
              stroke="#c6ff00"
              strokeWidth="2"
            />
            <circle cx="195" cy="38" r="4" fill="#EF4444" className="animate-ping" />
            <circle cx="195" cy="38" r="3" fill="#EF4444" />
            <text x="12" y="44" fill="#EF4444" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ALERT: EYE CLOSURE &gt; 1.2s (EAR: 0.17)
            </text>
          </g>
        </svg>
      );

    case 'roadguard-ai':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Road Asphalt Perspective Mesh */}
          <polygon points="120,20 240,20 340,150 20,150" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" />
          <line x1="180" y1="20" x2="180" y2="60" stroke="#c6ff00" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="180" y1="80" x2="180" y2="150" stroke="#c6ff00" strokeWidth="3" strokeDasharray="12 12" />

          {/* YOLOv8 Defect Detection Box */}
          <g transform="translate(130, 65)">
            <rect
              x="0"
              y="0"
              width="100"
              height="60"
              rx="4"
              fill="rgba(239, 68, 68, 0.12)"
              stroke="#EF4444"
              strokeWidth="2"
            />
            {/* Defect Texture Inside */}
            <path
              d="M15,30 Q30,15 50,32 T85,28 T70,48 T30,50 Z"
              fill="rgba(0, 0, 0, 0.6)"
              stroke="rgba(239, 68, 68, 0.5)"
              strokeWidth="1"
            />
            {/* Confidence Label */}
            <rect x="0" y="-18" width="92" height="18" fill="#EF4444" rx="2" />
            <text x="5" y="-5" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              POTHOLE 94.2%
            </text>
          </g>

          {/* Telematics Geocode Bar */}
          <g transform="translate(20, 155)">
            <rect x="0" y="0" width="320" height="32" rx="4" fill="#111413" stroke="rgba(255,255,255,0.1)" />
            <text x="12" y="16" fill="#c6ff00" fontSize="9.5" fontFamily="monospace">
              GPS: 18.5204° N, 73.8567° E (PUNE)
            </text>
            <text x="12" y="27" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              TICKET: #RDG-2024-089 · SEVERITY: GRADE-A
            </text>
            <rect x="250" y="7" width="58" height="18" rx="3" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" />
            <text x="256" y="19" fill="#10B981" fontSize="9" fontFamily="monospace">
              LOGGED ↗
            </text>
          </g>
        </svg>
      );

    case 'rag-engineering':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* RAG Pipeline Dataflow Diagram */}
          <g transform="translate(15, 30)">
            {/* Step 1: Chunks */}
            <rect x="0" y="10" width="55" height="50" rx="4" fill="#131715" stroke="rgba(255,255,255,0.15)" />
            <text x="6" y="28" fill="#f2f4f3" fontSize="8" fontFamily="monospace" fontWeight="bold">DOCUMENT</text>
            <text x="10" y="42" fill="#8a928f" fontSize="7.5" fontFamily="monospace">CHUNKS</text>
            <text x="12" y="52" fill="#c6ff00" fontSize="7.5" fontFamily="monospace">1024 tok</text>

            {/* Arrow 1 */}
            <line x1="58" y1="35" x2="74" y2="35" stroke="#c6ff00" strokeWidth="1.5" />
            <polygon points="76,35 71,32 71,38" fill="#c6ff00" />

            {/* Step 2: Dense + Sparse */}
            <rect x="78" y="5" width="62" height="60" rx="4" fill="#131715" stroke="#10B981" />
            <text x="84" y="22" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="bold">HYBRID</text>
            <text x="84" y="34" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">BGE Dense</text>
            <text x="84" y="46" fill="#8a928f" fontSize="7.5" fontFamily="monospace">+ BM25 Lex</text>
            <text x="84" y="58" fill="#c6ff00" fontSize="7" fontFamily="monospace">ChromaDB</text>

            {/* Arrow 2 */}
            <line x1="143" y1="35" x2="159" y2="35" stroke="#c6ff00" strokeWidth="1.5" />
            <polygon points="161,35 156,32 156,38" fill="#c6ff00" />

            {/* Step 3: Cross-Encoder */}
            <rect x="163" y="5" width="68" height="60" rx="4" fill="#131715" stroke="#c6ff00" />
            <text x="169" y="22" fill="#c6ff00" fontSize="8" fontFamily="monospace" fontWeight="bold">RE-RANKER</text>
            <text x="169" y="34" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">Cohere/BGE</text>
            <text x="169" y="46" fill="#8a928f" fontSize="7.5" fontFamily="monospace">Top 50 ➔ 5</text>
            <text x="169" y="58" fill="#10B981" fontSize="7" fontFamily="monospace">Score: 0.94</text>

            {/* Arrow 3 */}
            <line x1="234" y1="35" x2="250" y2="35" stroke="#c6ff00" strokeWidth="1.5" />
            <polygon points="252,35 247,32 247,38" fill="#c6ff00" />

            {/* Step 4: Grounded LLM */}
            <rect x="254" y="10" width="76" height="50" rx="4" fill="#18181B" stroke="#c6ff00" strokeWidth="1.5" />
            <text x="260" y="28" fill="#c6ff00" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SYNTHESIS</text>
            <text x="260" y="40" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">Zero-Halluc</text>
            <text x="260" y="52" fill="#10B981" fontSize="7.5" fontFamily="monospace">Attributed</text>
          </g>

          {/* RAGAS Benchmark Metrics Card */}
          <g transform="translate(15, 115)">
            <rect x="0" y="0" width="330" height="65" rx="5" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="20" fill="#f2f4f3" fontSize="10" fontFamily="monospace" fontWeight="bold">
              // RAGAS BENCHMARK RESULTS
            </text>
            <g transform="translate(12, 32)">
              <text x="0" y="0" fill="#8a928f" fontSize="8.5" fontFamily="monospace">Context Precision:</text>
              <text x="105" y="0" fill="#10B981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">+38% (vs Naive)</text>

              <text x="0" y="14" fill="#8a928f" fontSize="8.5" fontFamily="monospace">Faithfulness:</text>
              <text x="105" y="14" fill="#c6ff00" fontSize="8.5" fontFamily="monospace" fontWeight="bold">91.4% Grounded</text>

              <text x="175" y="0" fill="#8a928f" fontSize="8.5" fontFamily="monospace">Latency:</text>
              <text x="235" y="0" fill="#f2f4f3" fontSize="8.5" fontFamily="monospace">&lt; 280ms</text>

              <text x="175" y="14" fill="#8a928f" fontSize="8.5" fontFamily="monospace">Tested:</text>
              <text x="235" y="14" fill="#f2f4f3" fontSize="8.5" fontFamily="monospace">100k+ tokens</text>
            </g>
          </g>
        </svg>
      );

    case '3d-car-running-game':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Retro-Futuristic 3D WebGL Perspective Grid */}
          <defs>
            <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(198, 255, 0, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Vanishing Horizon Sun */}
          <circle cx="180" cy="70" r="32" fill="url(#horizonGlow)" />
          <line x1="20" y1="70" x2="340" y2="70" stroke="rgba(198, 255, 0, 0.4)" strokeWidth="1" />

          {/* Perspective Road Trajectory */}
          <polygon points="175,70 185,70 330,170 30,170" fill="rgba(18, 22, 20, 0.8)" stroke="rgba(198, 255, 0, 0.3)" />
          {/* Receding Crossbars */}
          {[78, 88, 102, 120, 142, 168].map((y, i) => (
            <line
              key={i}
              x1={180 - (y - 70) * 1.5}
              y1={y}
              x2={180 + (y - 70) * 1.5}
              y2={y}
              stroke="rgba(198, 255, 0, 0.35)"
              strokeWidth="1.2"
            />
          ))}

          {/* Wireframe Sports Car Silhouette */}
          <g transform="translate(155, 125)">
            <polygon
              points="25,5 40,15 48,28 2,28 10,15"
              fill="#111113"
              stroke="#c6ff00"
              strokeWidth="2"
            />
            {/* Windshield */}
            <polygon points="25,7 35,14 15,14" fill="rgba(198, 255, 0, 0.4)" />
            {/* Wheels */}
            <rect x="0" y="22" width="8" height="12" rx="2" fill="#c6ff00" />
            <rect x="42" y="22" width="8" height="12" rx="2" fill="#c6ff00" />
            {/* Tail Lights */}
            <line x1="8" y1="26" x2="18" y2="26" stroke="#EF4444" strokeWidth="2" />
            <line x1="32" y1="26" x2="42" y2="26" stroke="#EF4444" strokeWidth="2" />
          </g>

          {/* WebGL Performance Badge Bar */}
          <g transform="translate(20, 160)">
            <rect x="0" y="0" width="320" height="28" rx="4" fill="#0c0e0d" stroke="rgba(255,255,255,0.12)" />
            <text x="12" y="18" fill="#c6ff00" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              60 FPS LOCKED · WEBGL 2.0 SHADERS
            </text>
            <text x="215" y="18" fill="#10B981" fontSize="9" fontFamily="monospace">
              BUNDLE: 2.1 MB
            </text>
          </g>
        </svg>
      );

    case 'traffic-sign-cnn':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* German Speed Limit Sign */}
          <g transform="translate(45, 25)">
            <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#EF4444" strokeWidth="10" />
            <text x="50" y="62" fill="#000000" fontSize="34" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">
              60
            </text>
          </g>

          {/* CNN Convolutional Layers Diagram */}
          <g transform="translate(160, 20)">
            {/* Conv Block 1 */}
            <rect x="0" y="15" width="22" height="70" rx="3" fill="#131715" stroke="#10B981" strokeWidth="1.5" />
            <text x="4" y="55" fill="#10B981" fontSize="8" fontFamily="monospace" transform="rotate(-90 4 55)">CONV1</text>

            <line x1="25" y1="50" x2="35" y2="50" stroke="rgba(255,255,255,0.3)" />

            {/* Conv Block 2 */}
            <rect x="38" y="25" width="22" height="50" rx="3" fill="#131715" stroke="#c6ff00" strokeWidth="1.5" />
            <text x="42" y="55" fill="#c6ff00" fontSize="8" fontFamily="monospace" transform="rotate(-90 42 55)">CONV2</text>

            <line x1="63" y1="50" x2="73" y2="50" stroke="rgba(255,255,255,0.3)" />

            {/* Dense 43-Class Output */}
            <rect x="76" y="32" width="24" height="36" rx="3" fill="#18181B" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="80" y="53" fill="#F59E0B" fontSize="7" fontFamily="monospace" transform="rotate(-90 80 53)">43-FC</text>

            <line x1="103" y1="50" x2="115" y2="50" stroke="rgba(255,255,255,0.3)" />

            {/* Prediction Label */}
            <rect x="118" y="30" width="60" height="40" rx="4" fill="#0c0e0d" stroke="#10B981" />
            <text x="122" y="45" fill="#10B981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">97.4% ACC</text>
            <text x="122" y="58" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">&lt;18ms CPU</text>
          </g>

          {/* Voice Notification Soundwave */}
          <g transform="translate(20, 140)">
            <rect x="0" y="0" width="320" height="45" rx="4" fill="#111413" stroke="rgba(255,255,255,0.1)" />
            {/* Audio Waveform Bars */}
            {[6, 12, 20, 16, 24, 14, 8, 18, 22, 10, 14, 20, 16, 8, 12].map((h, i) => (
              <rect
                key={i}
                x={15 + i * 6}
                y={22 - h / 2}
                width="3.5"
                height={h}
                rx="1"
                fill="#c6ff00"
              />
            ))}
            <text x="115" y="20" fill="#f2f4f3" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              AUDIO SYNTHESIS DISPATCH:
            </text>
            <text x="115" y="33" fill="#10B981" fontSize="8.5" fontFamily="monospace">
              &quot;Speed Limit 60 km/h ahead — reduce velocity&quot;
            </text>
          </g>
        </svg>
      );

    case 'restaurant-yolo26':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Overhead Restaurant Floorplan */}
          <rect x="30" y="15" width="300" height="120" rx="6" fill="#101412" stroke="rgba(255,255,255,0.1)" />

          {/* Table 1: Occupied */}
          <g transform="translate(55, 30)">
            <circle cx="35" cy="35" r="24" fill="#18181B" stroke="#10B981" strokeWidth="2" />
            <text x="35" y="32" fill="#10B981" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">T-01</text>
            <text x="35" y="44" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace" textAnchor="middle">18m Dwell</text>
            {/* Chairs */}
            <circle cx="35" cy="3" r="5" fill="#10B981" />
            <circle cx="35" cy="67" r="5" fill="#10B981" />
            <circle cx="3" cy="35" r="5" fill="#10B981" />
            <circle cx="67" cy="35" r="5" fill="#10B981" />
          </g>

          {/* Table 2: Vacant Ready */}
          <g transform="translate(145, 30)">
            <circle cx="35" cy="35" r="24" fill="#18181B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <text x="35" y="32" fill="#8a928f" fontSize="9" fontFamily="monospace" textAnchor="middle">T-02</text>
            <text x="35" y="44" fill="#c6ff00" fontSize="7.5" fontFamily="monospace" textAnchor="middle">VACANT</text>
            <circle cx="35" cy="3" r="4" fill="rgba(255,255,255,0.2)" />
            <circle cx="35" cy="67" r="4" fill="rgba(255,255,255,0.2)" />
          </g>

          {/* Table 3: Overdue Service Alert */}
          <g transform="translate(235, 30)">
            <circle cx="35" cy="35" r="24" fill="#18181B" stroke="#EF4444" strokeWidth="2" />
            <text x="35" y="32" fill="#EF4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">T-03</text>
            <text x="35" y="44" fill="#F59E0B" fontSize="7" fontFamily="monospace" textAnchor="middle">WAITING 12m</text>
            <circle cx="35" cy="3" r="5" fill="#EF4444" />
            <circle cx="35" cy="67" r="5" fill="#EF4444" />
          </g>

          {/* Floor Manager Status Strip */}
          <g transform="translate(30, 150)">
            <rect x="0" y="0" width="300" height="35" rx="4" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="16" fill="#f2f4f3" fontSize="9" fontFamily="monospace">
              OCCUPANCY: 72% · AVG DWELL: 44m · BTL-ALERT: T-03
            </text>
            <text x="12" y="28" fill="#10B981" fontSize="8" fontFamily="monospace">
              95.1% ACCURACY · PERSPECTIVE HOMOGRAPHY WARP
            </text>
          </g>
        </svg>
      );

    case 'self-care-ai':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Habit Tracker Board */}
          <g transform="translate(25, 20)">
            <rect x="0" y="0" width="310" height="120" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
            <rect x="0" y="0" width="310" height="28" rx="8" fill="rgba(198,255,0,0.08)" />
            <text x="12" y="18" fill="#c6ff00" fontSize="10" fontFamily="monospace" fontWeight="bold">
              DAILY WELLNESS &middot; HABIT METRICS
            </text>
            <text x="235" y="18" fill="#8a928f" fontSize="9" fontFamily="monospace">
              TypeScript
            </text>

            {/* Habit Rows */}
            <g transform="translate(12, 38)">
              <text x="0" y="12" fill="#f2f4f3" fontSize="9" fontFamily="monospace">Hydration (2.5L Target)</text>
              <rect x="135" y="3" width="150" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
              <rect x="135" y="3" width="125" height="10" rx="5" fill="#10B981" />
              <text x="135" y="24" fill="#8a928f" fontSize="8" fontFamily="monospace">83% completed</text>
            </g>

            <g transform="translate(12, 68)">
              <text x="0" y="12" fill="#f2f4f3" fontSize="9" fontFamily="monospace">Sleep Routine (8h Target)</text>
              <rect x="135" y="3" width="150" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
              <rect x="135" y="3" width="140" height="10" rx="5" fill="#c6ff00" />
              <text x="135" y="24" fill="#8a928f" fontSize="8" fontFamily="monospace">92% completed</text>
            </g>

            <g transform="translate(12, 98)">
              <text x="0" y="12" fill="#f2f4f3" fontSize="9" fontFamily="monospace">Active Mindfulness</text>
              <rect x="135" y="3" width="150" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
              <rect x="135" y="3" width="150" height="10" rx="5" fill="#3b82f6" />
            </g>
          </g>

          {/* Telemetry Footer */}
          <g transform="translate(25, 150)">
            <rect x="0" y="0" width="310" height="34" rx="6" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="15" fill="#10B981" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              WELLNESS &middot; HABIT RETENTION &middot; LOCAL PERSISTENCE
            </text>
            <text x="12" y="27" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              Type-safe state management &middot; Daily streak analytics
            </text>
          </g>
        </svg>
      );

    case 'vision-measure':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* ArUco Reference Marker in Corner */}
          <g transform="translate(35, 30)">
            <rect x="0" y="0" width="45" height="45" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
            {/* ArUco Matrix Pixels */}
            <rect x="8" y="8" width="10" height="10" fill="#FFFFFF" />
            <rect x="27" y="8" width="10" height="10" fill="#FFFFFF" />
            <rect x="18" y="18" width="10" height="10" fill="#FFFFFF" />
            <rect x="8" y="27" width="10" height="10" fill="#FFFFFF" />
            <text x="0" y="56" fill="#8a928f" fontSize="7.5" fontFamily="monospace">ArUco #42</text>
          </g>

          {/* Target Package with Measurement Calipers */}
          <g transform="translate(125, 35)">
            <rect x="0" y="0" width="170" height="90" rx="4" fill="#131715" stroke="#c6ff00" strokeWidth="1.5" />
            {/* Horizontal Dimension Arrow */}
            <line x1="5" y1="-12" x2="165" y2="-12" stroke="#c6ff00" strokeWidth="1.5" />
            <polygon points="5,-12 12,-15 12,-9" fill="#c6ff00" />
            <polygon points="165,-12 158,-15 158,-9" fill="#c6ff00" />
            <rect x="55" y="-22" width="60" height="16" rx="2" fill="#000000" />
            <text x="60" y="-10" fill="#c6ff00" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              W: 142.5 mm
            </text>

            {/* Vertical Dimension Arrow */}
            <line x1="182" y1="5" x2="182" y2="85" stroke="#10B981" strokeWidth="1.5" />
            <polygon points="182,5 179,12 185,12" fill="#10B981" />
            <polygon points="182,85 179,78 185,78" fill="#10B981" />
            <rect x="175" y="38" width="55" height="16" rx="2" fill="#000000" />
            <text x="178" y="50" fill="#10B981" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              H: 88.0 mm
            </text>
          </g>

          {/* Telemetry Metric Bar */}
          <g transform="translate(20, 150)">
            <rect x="0" y="0" width="320" height="35" rx="4" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="16" fill="#f2f4f3" fontSize="9" fontFamily="monospace">
              CALIBRATED ERROR: ±0.8mm · 30 FPS REAL-TIME
            </text>
            <text x="12" y="28" fill="#c6ff00" fontSize="8" fontFamily="monospace">
              Perspective Homography Matrix + Subpixel ArUco Pose
            </text>
          </g>
        </svg>
      );

    case 'website-automation':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* JSON Brand Spec to AST Compiler */}
          <g transform="translate(25, 20)">
            <rect x="0" y="0" width="90" height="110" rx="4" fill="#131715" stroke="rgba(255,255,255,0.15)" />
            <text x="8" y="18" fill="#c6ff00" fontSize="8" fontFamily="monospace" fontWeight="bold">JSON BRAND SPEC</text>
            <text x="8" y="34" fill="#8a928f" fontSize="7" fontFamily="monospace">&#123;</text>
            <text x="14" y="46" fill="#f2f4f3" fontSize="7" fontFamily="monospace">&quot;brand&quot;: &quot;Studio&quot;,</text>
            <text x="14" y="58" fill="#10B981" fontSize="7" fontFamily="monospace">&quot;accent&quot;: &quot;#10B981&quot;,</text>
            <text x="14" y="70" fill="#f2f4f3" fontSize="7" fontFamily="monospace">&quot;sections&quot;: [</text>
            <text x="20" y="82" fill="#F59E0B" fontSize="7" fontFamily="monospace">&quot;hero&quot;, &quot;grid&quot;</text>
            <text x="14" y="94" fill="#f2f4f3" fontSize="7" fontFamily="monospace">]</text>
            <text x="8" y="104" fill="#8a928f" fontSize="7" fontFamily="monospace">&#125;</text>
          </g>

          {/* Engine Arrow */}
          <g transform="translate(125, 60)">
            <line x1="0" y1="15" x2="35" y2="15" stroke="#c6ff00" strokeWidth="2" />
            <polygon points="37,15 30,11 30,19" fill="#c6ff00" />
            <text x="-5" y="32" fill="#c6ff00" fontSize="7.5" fontFamily="monospace">JINJA2 AST</text>
          </g>

          {/* Generated DOM & Tailwind Component */}
          <g transform="translate(175, 20)">
            <rect x="0" y="0" width="160" height="110" rx="4" fill="#18181B" stroke="#10B981" strokeWidth="1.5" />
            <text x="8" y="18" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="bold">SCAFFOLDED CODEBASE</text>
            <text x="8" y="34" fill="#8a928f" fontSize="7.5" fontFamily="monospace">&lt;section class=&quot;layout&quot;&gt;</text>
            <text x="16" y="48" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">&lt;header class=&quot;sticky&quot;&gt;</text>
            <text x="16" y="62" fill="#c6ff00" fontSize="7.5" fontFamily="monospace">&lt;h1 class=&quot;text-4xl&quot;&gt;</text>
            <text x="16" y="76" fill="#8a928f" fontSize="7.5" fontFamily="monospace">&lt;div class=&quot;grid&quot;&gt;</text>
            <text x="8" y="92" fill="#8a928f" fontSize="7.5" fontFamily="monospace">&lt;/section&gt;</text>
            <rect x="8" y="96" width="144" height="1" fill="rgba(255,255,255,0.1)" />
            <text x="8" y="106" fill="#10B981" fontSize="7" fontFamily="monospace">GEN TIME: 3.2s · WCAG AA</text>
          </g>

          {/* Efficiency Bar */}
          <g transform="translate(20, 145)">
            <rect x="0" y="0" width="320" height="38" rx="4" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="16" fill="#c6ff00" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              TIME SAVED: ~12 HOURS PER CLIENT ONBOARDING
            </text>
            <text x="12" y="29" fill="#8a928f" fontSize="8" fontFamily="monospace">
              Powers rapid boilerplate setup across commercial client engagements
            </text>
          </g>
        </svg>
      );

    case 'mcp-learning-path':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Model Context Protocol Topology */}
          <g transform="translate(20, 30)">
            {/* Host */}
            <rect x="0" y="10" width="80" height="50" rx="4" fill="#131715" stroke="#c6ff00" strokeWidth="1.5" />
            <text x="12" y="30" fill="#c6ff00" fontSize="8.5" fontFamily="monospace" fontWeight="bold">MCP HOST</text>
            <text x="12" y="44" fill="#8a928f" fontSize="7.5" fontFamily="monospace">Claude/AGY</text>

            {/* Protocol Pipe */}
            <g transform="translate(85, 25)">
              <line x1="0" y1="10" x2="60" y2="10" stroke="#10B981" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="60" y1="10" x2="0" y2="10" stroke="#10B981" strokeWidth="2" strokeDasharray="3 2" />
              <text x="5" y="24" fill="#10B981" fontSize="7" fontFamily="monospace">JSON-RPC 2.0</text>
            </g>

            {/* Client / Server */}
            <rect x="150" y="10" width="85" height="50" rx="4" fill="#18181B" stroke="#10B981" strokeWidth="1.5" />
            <text x="158" y="30" fill="#10B981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">MCP SERVER</text>
            <text x="158" y="44" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace">Stdio &amp; SSE</text>

            {/* Connector */}
            <line x1="240" y1="35" x2="260" y2="35" stroke="rgba(255,255,255,0.3)" />

            {/* Capabilities */}
            <g transform="translate(265, 5)">
              <rect x="0" y="0" width="60" height="18" rx="2" fill="#131715" stroke="rgba(255,255,255,0.15)" />
              <text x="6" y="12" fill="#c6ff00" fontSize="7.5" fontFamily="monospace">TOOLS</text>

              <rect x="0" y="23" width="60" height="18" rx="2" fill="#131715" stroke="rgba(255,255,255,0.15)" />
              <text x="6" y="35" fill="#10B981" fontSize="7.5" fontFamily="monospace">RESOURCES</text>

              <rect x="0" y="46" width="60" height="18" rx="2" fill="#131715" stroke="rgba(255,255,255,0.15)" />
              <text x="6" y="58" fill="#F59E0B" fontSize="7.5" fontFamily="monospace">PROMPTS</text>
            </g>
          </g>

          {/* Reference Implementation Strip */}
          <g transform="translate(20, 120)">
            <rect x="0" y="0" width="320" height="60" rx="4" fill="#111413" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="18" fill="#f2f4f3" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              // COMPLETE REFERENCE SERVERS INCLUDED:
            </text>
            <text x="12" y="34" fill="#10B981" fontSize="8.5" fontFamily="monospace">
              • SQLite DB Inspector · Secure Filesystem Sandbox
            </text>
            <text x="12" y="48" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              • Dual Language Support: TypeScript SDK &amp; Python MCP
            </text>
          </g>
        </svg>
      );

    case 'face-attendance':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Facial Mesh Landmarks */}
          <g transform="translate(100, 20)">
            <ellipse cx="80" cy="55" rx="45" ry="55" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeDasharray="3 3" />

            {/* 68 Facial Mesh Keypoint Sample */}
            {[
              [50, 40], [60, 36], [70, 40], [60, 44], // Left Eye
              [90, 40], [100, 36], [110, 40], [100, 44], // Right Eye
              [80, 50], [80, 60], [75, 68], [85, 68], // Nose
              [65, 85], [80, 80], [95, 85], [80, 92] // Mouth
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2.5" fill="#10B981" />
            ))}

            {/* Bounding Box */}
            <rect x="25" y="5" width="110" height="110" rx="4" fill="none" stroke="#10B981" strokeWidth="1.5" />
            <text x="28" y="18" fill="#10B981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              FACE_ID: #SWAPNIL
            </text>
          </g>

          {/* Verification Ledger */}
          <g transform="translate(20, 145)">
            <rect x="0" y="0" width="320" height="42" rx="4" fill="#111413" stroke="rgba(255,255,255,0.1)" />
            <text x="12" y="16" fill="#10B981" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              VERIFIED: SWAPNIL PATIL (99.2% MATCH)
            </text>
            <text x="12" y="30" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              09:15:22 IST · Anti-spoofing liveness passed · DB logged
            </text>
          </g>
        </svg>
      );

    case 'quantum-deepfake-detection':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Face scanner with Grad-CAM and Quantum PQC overlay */}
          <g transform="translate(20, 20)">
            {/* Manipulated Face Region */}
            <rect x="10" y="10" width="120" height="110" rx="6" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
            <ellipse cx="70" cy="65" rx="36" ry="42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            {/* Grad-CAM Heatmap overlay */}
            <ellipse cx="70" cy="80" rx="24" ry="16" fill="rgba(239, 68, 68, 0.45)" />
            <circle cx="56" cy="55" r="3" fill="#10B981" />
            <circle cx="84" cy="55" r="3" fill="#10B981" />
            <text x="16" y="24" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">
              [DEEPFAKE ANOMALY]
            </text>

            {/* Quantum PQC Circuit Visualization */}
            <g transform="translate(150, 10)">
              <rect x="0" y="0" width="160" height="110" rx="6" fill="#0c100e" stroke="rgba(255,255,255,0.1)" />
              <text x="10" y="18" fill="#c6ff00" fontSize="8" fontFamily="monospace" fontWeight="bold">
                PENNYLANE PQC ANSATZ
              </text>
              {[0, 1, 2, 3].map((q) => (
                <g key={q} transform={`translate(10, ${32 + q * 20})`}>
                  <line x1="0" y1="0" x2="140" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="-4" y="3" fill="#8a928f" fontSize="7.5" fontFamily="monospace">q{q}</text>
                  <rect x="25" y="-7" width="16" height="14" rx="2" fill="#16221c" stroke="#10b981" strokeWidth="1" />
                  <text x="30" y="3" fill="#10b981" fontSize="7" fontFamily="monospace">H</text>
                  <rect x="60" y="-7" width="22" height="14" rx="2" fill="#1f2214" stroke="#c6ff00" strokeWidth="1" />
                  <text x="63" y="3" fill="#c6ff00" fontSize="6.5" fontFamily="monospace">Ry</text>
                  <circle cx="100" cy="0" r="2.5" fill="#10b981" />
                  <rect x="120" y="-7" width="16" height="14" rx="2" fill="#121614" stroke="rgba(255,255,255,0.3)" />
                  <text x="124" y="3" fill="#f2f4f3" fontSize="7" fontFamily="monospace">M</text>
                </g>
              ))}
              <line x1="110" y1="32" x2="110" y2="92" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          </g>

          {/* Status Bar */}
          <g transform="translate(20, 145)">
            <rect x="0" y="0" width="320" height="42" rx="4" fill="#111413" stroke="rgba(239,68,68,0.3)" />
            <text x="12" y="16" fill="#ef4444" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              BENCHMARK AUC: 92.4% · LATENCY: 42ms
            </text>
            <text x="12" y="30" fill="#8a928f" fontSize="8.5" fontFamily="monospace">
              XAI Grad-CAM visual heatmaps · 8-Qubit Entangled Ansatz
            </text>
          </g>
        </svg>
      );

    case 'mentora-ai':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* Concept Graph and Interactive Dialogue */}
          <g transform="translate(20, 15)">
            {/* Concept Tree nodes */}
            <g transform="translate(10, 10)">
              <rect x="0" y="5" width="85" height="30" rx="4" fill="#121815" stroke="#10b981" strokeWidth="1" />
              <text x="6" y="21" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Attention</text>
              <text x="6" y="30" fill="#10b981" fontSize="6.5" fontFamily="monospace">Mastery 96%</text>

              <line x1="85" y1="20" x2="115" y2="40" stroke="#c6ff00" strokeWidth="1" strokeDasharray="2 2" />

              <rect x="115" y="25" width="90" height="30" rx="4" fill="#18201b" stroke="#c6ff00" strokeWidth="1.5" />
              <text x="121" y="41" fill="#c6ff00" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Transformers</text>
              <text x="121" y="50" fill="#8a928f" fontSize="6.5" fontFamily="monospace">Active Focus</text>

              <line x1="85" y1="80" x2="115" y2="45" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />

              <rect x="0" y="65" width="85" height="30" rx="4" fill="#121815" stroke="#10b981" strokeWidth="1" />
              <text x="6" y="81" fill="#f2f4f3" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Pos. Encoding</text>
              <text x="6" y="90" fill="#10b981" fontSize="6.5" fontFamily="monospace">Mastery 92%</text>

              <line x1="205" y1="40" x2="235" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

              <rect x="235" y="25" width="85" height="30" rx="4" fill="#0d110f" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="241" y="41" fill="#8a928f" fontSize="7.5" fontFamily="monospace">LoRA / QLoRA</text>
              <text x="241" y="50" fill="#4f5854" fontSize="6.5" fontFamily="monospace">Next Chapter</text>
            </g>
          </g>

          {/* Chat Stream Bubble */}
          <g transform="translate(20, 125)">
            <rect x="0" y="0" width="320" height="62" rx="4" fill="#111413" stroke="rgba(198,255,0,0.2)" />
            <text x="12" y="16" fill="#c6ff00" fontSize="9" fontFamily="monospace" fontWeight="bold">
              AI MENTOR RESPONSE [STREAMING 380MS]:
            </text>
            <text x="12" y="32" fill="#f2f4f3" fontSize="8.5" fontFamily="monospace">
              &quot;Self-attention computes dot-product scores between Q and K...&quot;
            </text>
            <text x="12" y="48" fill="#8a928f" fontSize="8" fontFamily="monospace">
              Citation: Attention is All You Need §3.2 · Recall Accuracy: 94.8%
            </text>
          </g>
        </svg>
      );

    case 'url-safety-checker':
      return (
        <svg viewBox="0 0 360 200" className="w-full h-full text-typography-body">
          {/* URL Threat Inspector and Risk Bar */}
          <g transform="translate(20, 15)">
            {/* Input URL display */}
            <rect x="0" y="0" width="320" height="30" rx="4" fill="#121714" stroke="rgba(255,255,255,0.12)" />
            <text x="10" y="18" fill="#ef4444" fontSize="8.5" fontFamily="monospace">
              https://secure-login.paypa1-verify.xyz
            </text>
            <rect x="260" y="6" width="50" height="18" rx="3" fill="#ef4444" />
            <text x="267" y="18" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">
              BLOCKED
            </text>

            {/* Heuristic vectors */}
            <g transform="translate(0, 40)">
              <rect x="0" y="0" width="100" height="50" rx="4" fill="#0d110f" stroke="rgba(239,68,68,0.4)" />
              <text x="8" y="18" fill="#ef4444" fontSize="7.5" fontFamily="monospace" fontWeight="bold">HOMOGRAPH</text>
              <text x="8" y="34" fill="#f2f4f3" fontSize="8" fontFamily="monospace">paypa1 (1!=l)</text>

              <rect x="110" y="0" width="100" height="50" rx="4" fill="#0d110f" stroke="rgba(239,68,68,0.4)" />
              <text x="118" y="18" fill="#ef4444" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DOMAIN AGE</text>
              <text x="118" y="34" fill="#f2f4f3" fontSize="8" fontFamily="monospace">2 Days Old</text>

              <rect x="220" y="0" width="100" height="50" rx="4" fill="#0d110f" stroke="rgba(245,158,11,0.4)" />
              <text x="228" y="18" fill="#f59e0b" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ENTROPY</text>
              <text x="228" y="34" fill="#f2f4f3" fontSize="8" fontFamily="monospace">4.82 bits</text>
            </g>
          </g>

          {/* Assessment Score */}
          <g transform="translate(20, 115)">
            <rect x="0" y="0" width="320" height="72" rx="4" fill="#111413" stroke="rgba(239,68,68,0.3)" />
            <text x="12" y="18" fill="#ef4444" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              THREAT LEVEL: 98/100 (HIGH RISK PHISHING)
            </text>
            <rect x="12" y="28" width="296" height="10" rx="5" fill="#1f2420" />
            <rect x="12" y="28" width="280" height="10" rx="5" fill="#ef4444" />
            <text x="12" y="54" fill="#8a928f" fontSize="8" fontFamily="monospace">
              Random Forest + GBDT Ensemble · Scan Latency &lt; 120ms · 97.2% Acc
            </text>
          </g>
        </svg>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center text-center p-4">
          <div className="font-mono text-xs text-accent-emerald mb-1">// {category}</div>
          <div className="font-display font-semibold text-typography-headline text-sm">{id}</div>
        </div>
      );
  }
}
