const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectsDir = path.resolve(__dirname, '../public/assets/projects');
const consultantDir = path.resolve(__dirname, '../public/assets/consultant');
const uiuxDir = path.resolve(__dirname, '../public/assets/uiux');

[projectsDir, consultantDir, uiuxDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1200x675 (16:9 Aspect Ratio)
const WIDTH = 1200;
const HEIGHT = 675;

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Common SVG Wrapper
function createSvgWrapper(rawTitle, rawIndex, rawCategory, rawBadgeText, rawContentSvg, accentColor = '#c6ff00') {
  const title = escapeXml(rawTitle);
  const index = escapeXml(rawIndex);
  const category = escapeXml(rawCategory);
  const badgeText = escapeXml(rawBadgeText);
  const contentSvg = rawContentSvg.replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;');
  return `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080b09" />
        <stop offset="60%" stop-color="#0d120f" />
        <stop offset="100%" stop-color="#050706" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${accentColor}" />
        <stop offset="100%" stop-color="#10b981" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141a17" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#0e1310" stop-opacity="0.9" />
      </linearGradient>
      <pattern id="dotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.06)" />
      </pattern>
      <pattern id="diagLines" width="20" height="20" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.02)" stroke-width="1" />
      </pattern>
      <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background Base -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dotGrid)" />
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#diagLines)" />

    <!-- Ambient Lighting Glows -->
    <circle cx="250" cy="180" r="280" fill="${accentColor}" opacity="0.04" />
    <circle cx="950" cy="380" r="320" fill="#10b981" opacity="0.05" />

    <!-- Outer Structural Border -->
    <rect x="24" y="24" width="${WIDTH - 48}" height="${HEIGHT - 48}" rx="18" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Top Window Title Bar -->
    <g transform="translate(48, 52)">
      <!-- Window Controls -->
      <circle cx="10" cy="10" r="5" fill="#ef4444" opacity="0.75" />
      <circle cx="28" cy="10" r="5" fill="#f59e0b" opacity="0.75" />
      <circle cx="46" cy="10" r="5" fill="#10b981" opacity="0.75" />

      <!-- Breadcrumbs & Category -->
      <text x="75" y="14" fill="${accentColor}" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" letter-spacing="1">
        // ${index}
      </text>
      <text x="135" y="14" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="13">
        · ${category}
      </text>

      <!-- Right Status Badge -->
      <g transform="translate(900, -3)">
        <rect width="160" height="26" rx="13" fill="rgba(198, 255, 0, 0.1)" stroke="rgba(198, 255, 0, 0.3)" />
        <circle cx="14" cy="13" r="3.5" fill="${accentColor}" />
        <text x="26" y="17" fill="${accentColor}" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">
          ${badgeText}
        </text>
      </g>
    </g>

    <!-- Subtle Hairline Separator -->
    <line x1="48" y1="90" x2="${WIDTH - 48}" y2="90" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

    <!-- Main Project Content Area -->
    <g transform="translate(48, 110)">
      ${contentSvg}
    </g>

    <!-- Bottom Metadata Bar -->
    <g transform="translate(48, ${HEIGHT - 54})">
      <text x="0" y="12" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="12">
        PROJECT ARCHITECTURE: <tspan fill="#f2f4f3" font-weight="600">${title}</tspan>
      </text>
      <text x="${WIDTH - 240}" y="12" fill="${accentColor}" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="end">
        SWAPNIL PATIL // ENGINEERING PORTFOLIO 2026
      </text>
    </g>
  </svg>
  `;
}

// --------------------------------------------------------------------------
// 12 GitHub Engineering & AI/ML Projects
// --------------------------------------------------------------------------
const githubProjects = [
  {
    id: 'isl-recognition',
    title: 'Indian Sign Language Recognition (ISLR Studio)',
    index: '01',
    category: 'Computer Vision',
    badge: '30+ FPS · 96.8% ACC',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#0b0e0c" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(20, 24)">
        <circle cx="6" cy="6" r="4" fill="#ef4444" />
        <text x="18" y="10" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          STREAM_01: RGB INPUT [1920x1080 @ 30 FPS]
        </text>
        <text x="500" y="10" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          MEDIAPIPE_21_LANDMARKS
        </text>
      </g>
      <g transform="translate(140, 55)">
        <rect x="0" y="0" width="380" height="310" rx="8" fill="rgba(198, 255, 0, 0.03)" stroke="rgba(198, 255, 0, 0.35)" stroke-dasharray="6 4" stroke-width="1.5" />
        <text x="12" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          [TRACK_ID: HAND_RIGHT] CONF: 98.4%
        </text>
        <path d="M190,270 L190,210 L130,165 L110,135 L95,115
                 M190,210 L155,140 L145,95 L140,65
                 M190,210 L190,120 L190,75 L190,45
                 M190,210 L225,130 L235,90 L245,65
                 M190,210 L255,155 L265,125 L275,105"
              fill="none" stroke="#c6ff00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        ${[
          [190, 270], [190, 210],
          [130, 165], [110, 135], [95, 115],
          [155, 140], [145, 95], [140, 65],
          [190, 120], [190, 75], [190, 45],
          [225, 130], [235, 90], [245, 65],
          [255, 155], [265, 125], [275, 105]
        ].map(([cx, cy]) => `
          <circle cx="${cx}" cy="${cy}" r="5.5" fill="#10b981" stroke="#080b09" stroke-width="2" />
          <circle cx="${cx}" cy="${cy}" r="2" fill="#f2f4f3" />
        `).join('')}
        <g transform="translate(180, 20)">
          <rect width="170" height="24" rx="4" fill="rgba(0,0,0,0.85)" stroke="rgba(255,255,255,0.15)" />
          <text x="8" y="16" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="9.5">
            WRIST: [0.482, 0.761, -0.04]
          </text>
        </g>
      </g>
      <g transform="translate(20, 395)">
        <rect width="640" height="50" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <circle cx="20" cy="25" r="5" fill="#c6ff00" />
        <text x="36" y="24" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
          RECURRENT CLASSIFIER (Bi-LSTM 30-WINDOW)
        </text>
        <text x="36" y="41" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">
          SYNTHESIZED: &quot;NAMASTE / WELCOME TO OUR COMMUNITY&quot;
        </text>
        <text x="540" y="32" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          42ms LATENCY
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="140" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          // INFERENCE TELEMETRY
        </text>
        <text x="20" y="70" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">
          96.8%
        </text>
        <text x="20" y="92" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
          Vocabulary Classification Accuracy (35 ISL signs)
        </text>
        <text x="20" y="118" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          &#8226; 94% memory reduction via keypoint modeling
        </text>
        <g transform="translate(0, 155)">
          <rect width="390" height="150" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="28" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // PIPELINE COMPONENTS
          </text>
          <g transform="translate(20, 45)">
            <rect width="165" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="23" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">MediaPipe 3D</text>
          </g>
          <g transform="translate(195, 45)">
            <rect width="175" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="23" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">Bidirectional LSTM</text>
          </g>
          <g transform="translate(20, 95)">
            <rect width="165" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="23" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">Pyttsx3 Audio</text>
          </g>
          <g transform="translate(195, 95)">
            <rect width="175" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
            <text x="12" y="23" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">Flask REST Engine</text>
          </g>
        </g>
        <g transform="translate(0, 320)">
          <rect width="390" height="145" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="28" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // TTS AUDIO SYNTHESIS ENGINE
          </text>
          <g transform="translate(20, 48)">
            ${[35, 60, 45, 80, 50, 75, 90, 40, 65, 85, 55, 70, 95, 60, 40, 75, 50, 80, 65, 45].map((h, i) => `
              <rect x="${i * 17}" y="${60 - h * 0.6}" width="8" height="${h * 0.6}" rx="3" fill="${i % 2 === 0 ? '#c6ff00' : '#10b981'}" />
            `).join('')}
          </g>
          <text x="20" y="128" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">
            SPEECH PLAYBACK: ACTIVE (HINDI + ENGLISH)
          </text>
        </g>
      </g>
    `
  },
  {
    id: 'drishtidrive-ai',
    title: 'DrishtiDrive AI — Truck Driver Drowsiness Alert',
    index: '02',
    category: 'Edge AI',
    badge: 'EDGE HARDWARE · SUB-150ms ALARM',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(20, 24)">
        <circle cx="6" cy="6" r="4" fill="#10b981" />
        <text x="18" y="10" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          CABIN_IR_NIGHT_CAM // SENSOR_FEED_02
        </text>
        <text x="460" y="10" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="11">
          MICRO-SLEEP RISK: HIGH
        </text>
      </g>
      <g transform="translate(180, 60)">
        <rect x="0" y="0" width="320" height="290" rx="10" fill="rgba(16, 185, 129, 0.04)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5" />
        <ellipse cx="95" cy="110" rx="35" ry="12" fill="none" stroke="#ef4444" stroke-width="2.5" />
        <line x1="95" y1="98" x2="95" y2="122" stroke="#ef4444" stroke-width="2" stroke-dasharray="2 2" />
        <text x="65" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">
          EAR: 0.17 &lt; 0.25
        </text>
        <ellipse cx="225" cy="110" rx="35" ry="12" fill="none" stroke="#ef4444" stroke-width="2.5" />
        <line x1="225" y1="98" x2="225" y2="122" stroke="#ef4444" stroke-width="2" stroke-dasharray="2 2" />
        <text x="195" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">
          EAR: 0.18 &lt; 0.25
        </text>
        <path d="M160,115 L160,160 L145,175 L175,175" fill="none" stroke="#8a928f" stroke-width="2" />
        <ellipse cx="160" cy="225" rx="45" ry="28" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2.5" />
        <text x="110" y="275" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">
          MAR: 0.74 (YAWN ALERT)
        </text>
      </g>
      <g transform="translate(20, 395)">
        <rect width="640" height="50" rx="8" fill="#18100f" stroke="#ef4444" stroke-width="1.5" />
        <text x="24" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          [CRITICAL ALARM DISPATCHED]
        </text>
        <text x="24" y="41" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13">
          105dB Piezo Siren Triggered · Consecutive Closed Frames: 14 &gt; 10
        </text>
        <text x="520" y="32" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          LATENCY: 120ms
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="220" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          // EDGE HARDWARE METRICS
        </text>
        <g transform="translate(20, 50)">
          <text x="0" y="20" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Processor:</text>
          <text x="140" y="20" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Raspberry Pi 4B (Quad Cortex)</text>
          <text x="0" y="50" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Sensor Array:</text>
          <text x="140" y="50" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">IR 850nm Night Vision Cam</text>
          <text x="0" y="80" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Power Draw:</text>
          <text x="140" y="80" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">5V 2.5A (12V Vehicle Bus)</text>
          <text x="0" y="110" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Alarm Output:</text>
          <text x="140" y="110" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">High-Decibel Siren + Vibration</text>
        </g>
        <g transform="translate(0, 235)">
          <rect width="390" height="230" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // SAFETY THRESHOLD BENCHMARKS
          </text>
          <g transform="translate(20, 50)">
            <rect width="350" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
            <text x="15" y="28" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">EAR Trigger Latency: &lt; 150ms</text>
          </g>
          <g transform="translate(20, 105)">
            <rect width="350" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
            <text x="15" y="28" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">0 False Negatives on Micro-Sleep &gt;1.5s</text>
          </g>
          <g transform="translate(20, 160)">
            <rect width="350" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
            <text x="15" y="28" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">Full Operational Night Range: 0 to 50°C</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'roadguard-ai',
    title: 'RoadGuard AI — Pothole Detection & Municipal Reporting',
    index: '03',
    category: 'Computer Vision',
    badge: 'AUTONOMOUS CIVIC DISPATCH',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <path d="M120,400 L280,100 L400,100 L560,400 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      <line x1="340" y1="100" x2="340" y2="400" stroke="#c6ff00" stroke-width="2" stroke-dasharray="14 10" />
      <g transform="translate(180, 240)">
        <ellipse cx="70" cy="40" rx="65" ry="30" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="2.5" />
        <rect x="0" y="0" width="140" height="80" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 2" />
        <text x="5" y="-8" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          [POTHOLE_01: SEVERE]
        </text>
        <text x="5" y="98" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="10">
          DEPTH: ~7.4cm · AREA: 0.48m²
        </text>
      </g>
      <g transform="translate(420, 160)">
        <ellipse cx="45" cy="25" rx="40" ry="18" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2" />
        <text x="0" y="-6" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">
          [SURFACE_FISSURE_02: MODERATE]
        </text>
      </g>
      <g transform="translate(20, 395)">
        <rect width="640" height="50" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <text x="24" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10">
          TELEMETRY // PUNE MUNICIPAL HIGHWAY NETWORK
        </text>
        <text x="24" y="41" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">
          GPS: 18.5204° N, 73.8567° E · ROAD: SHIVAJINAGAR EXPRESSWAY
        </text>
        <text x="500" y="32" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          SPEED: 48 KM/H
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // AUTONOMOUS REPORTING DISPATCH
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.1)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">TICKET GENERATED</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">
            #PMC-2026-98124
          </text>
          <text x="20" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            PRIORITY: CRITICAL (TIER 1 DISPATCH)
          </text>
          <text x="20" y="110" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
            Autonomous API Payload Delivered to PWD Cloud
          </text>
          <text x="20" y="132" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
            Status: Queued for Road Maintenance Unit #04
          </text>
        </g>
        <g transform="translate(24, 230)">
          <rect width="342" height="210" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.1)" />
          <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // ACCURACY BENCHMARKS
          </text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">mAP@50 Detection:</text>
            <text x="180" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">92.4% (YOLOv8)</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">GPS Geotag Error:</text>
            <text x="180" y="45" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">&lt; 1.8 meters</text>
            <text x="0" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">False Positive Rate:</text>
            <text x="180" y="75" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">&lt; 3.1% on shadows</text>
            <text x="0" y="105" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Inference Speed:</text>
            <text x="180" y="105" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">38 FPS @ 1080p</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'rag-engineering',
    title: 'RAG Engineering Pipeline & Knowledge Retrieval',
    index: '04',
    category: 'Generative AI / RAG',
    badge: 'FAISS · HYBRID SEARCH · CITATIONS',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(20, 24)">
        <text x="0" y="12" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          VECTOR EMBEDDING CLUSTER SPACE // 1536-DIM PROJECTION
        </text>
        <text x="500" y="12" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          FAISS DENSE INDEX
        </text>
      </g>
      <g transform="translate(60, 70)">
        <circle cx="180" cy="160" r="110" fill="rgba(198, 255, 0, 0.05)" stroke="rgba(198, 255, 0, 0.2)" stroke-dasharray="4 4" />
        <circle cx="180" cy="160" r="8" fill="#c6ff00" />
        <text x="195" y="165" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          QUERY: q_vec
        </text>
        ${[
          [130, 110, '0.942', '#10b981'],
          [230, 120, '0.918', '#10b981'],
          [160, 220, '0.895', '#10b981'],
          [240, 200, '0.881', '#10b981'],
          [80, 80, '0.612', '#4f5854'],
          [340, 90, '0.540', '#4f5854'],
          [360, 260, '0.490', '#4f5854'],
          [100, 270, '0.510', '#4f5854'],
        ].map(([cx, cy, score, color]) => `
          <line x1="180" y1="160" x2="${cx}" y2="${cy}" stroke="${color}" stroke-width="1.5" stroke-dasharray="3 2" />
          <circle cx="${cx}" cy="${cy}" r="5" fill="${color}" />
          <text x="${Number(cx) + 8}" y="${Number(cy) + 4}" fill="${color}" font-family="'JetBrains Mono', monospace" font-size="9.5">
            ${score}
          </text>
        `).join('')}
      </g>
      <g transform="translate(20, 385)">
        <rect width="640" height="60" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(15, 12)">
          <text x="0" y="16" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CHUNK (512T)</text>
          <text x="100" y="16" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">&#8594;</text>
          <text x="120" y="16" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">OPENAI EMBED</text>
          <text x="220" y="16" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">&#8594;</text>
          <text x="240" y="16" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">FAISS RETRIEVE</text>
          <text x="355" y="16" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">&#8594;</text>
          <text x="375" y="16" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CROSS-ENCODER</text>
          <text x="490" y="16" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">&#8594;</text>
          <text x="510" y="10" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">SYNTHESIS</text>
          <text x="0" y="36" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">
            Grounding Confidence: 94.8% · Hallucination Rate: &lt; 1.2%
          </text>
        </g>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // RETRIEVAL PERFORMANCE
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="85" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="16" y="28" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">P95 RETRIEVAL LATENCY</text>
          <text x="16" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700">18.4ms</text>
          <text x="160" y="55" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Across 250k chunks</text>
        </g>
        <g transform="translate(24, 160)">
          <rect width="342" height="85" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="16" y="28" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">TOP-5 RECALL SCORE</text>
          <text x="16" y="55" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="700">96.2%</text>
          <text x="160" y="55" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">With BM25 + Vector hybrid</text>
        </g>
      </g>
    `
  },
  {
    id: '3d-car-running-game',
    title: '3D Car Running Game (Three.js WebGL)',
    index: '05',
    category: 'WebGL',
    badge: '60 FPS · PROCEDURAL RUNNER',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#060807" stroke="rgba(255,255,255,0.1)" />
      <ellipse cx="340" cy="180" rx="120" ry="70" fill="rgba(198, 255, 0, 0.15)" filter="url(#neonGlow)" />
      <line x1="0" y1="180" x2="680" y2="180" stroke="#c6ff00" stroke-width="1.5" opacity="0.6" />
      ${[-250, -150, -70, 0, 70, 150, 250].map((x) => `
        <line x1="${340 + x * 0.1}" y1="180" x2="${340 + x * 2.2}" y2="465" stroke="rgba(198, 255, 0, 0.4)" stroke-width="1.5" />
      `).join('')}
      ${[195, 215, 245, 285, 335, 395, 460].map((y) => `
        <line x1="0" y1="${y}" x2="680" y2="${y}" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
      `).join('')}
      <g transform="translate(290, 310)">
        <polygon points="50,0 75,25 90,65 10,65 25,25" fill="#121714" stroke="#c6ff00" stroke-width="2.5" />
        <rect x="15" y="55" width="20" height="6" rx="2" fill="#ef4444" />
        <rect x="65" y="55" width="20" height="6" rx="2" fill="#ef4444" />
        <ellipse cx="50" cy="68" rx="45" ry="8" fill="rgba(198,255,0,0.3)" />
      </g>
      <g transform="translate(20, 25)">
        <rect width="140" height="32" rx="6" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.15)" />
        <text x="14" y="21" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">
          60.0 FPS
        </text>
        <g transform="translate(150, 0)">
          <rect width="180" height="32" rx="6" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.15)" />
          <text x="14" y="21" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">
            SPEED: 184 KM/H
          </text>
        </g>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // WEBGL ENGINE TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="180" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">RENDER LOOP METRICS</text>
          <g transform="translate(20, 48)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Framework:</text>
            <text x="140" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Three.js (WebGL 2.0)</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Draw Calls:</text>
            <text x="140" y="45" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">42 (Instanced)</text>
            <text x="0" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Turnaround:</text>
            <text x="140" y="75" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">3.8ms &lt; 16.6ms</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'traffic-sign-cnn',
    title: 'Traffic Sign Recognition with Audio Alerts (CNN)',
    index: '06',
    category: 'Computer Vision',
    badge: '98.4% GTSRB · AUDIO SYNTH',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(80, 100)">
        <circle cx="100" cy="100" r="85" fill="#ef4444" stroke="#ffffff" stroke-width="8" />
        <circle cx="100" cy="100" r="68" fill="#ffffff" />
        <text x="100" y="125" fill="#18181b" font-family="'JetBrains Mono', monospace" font-size="64" font-weight="900" text-anchor="middle">
          60
        </text>
        <rect x="5" y="5" width="190" height="190" rx="8" fill="none" stroke="#c6ff00" stroke-width="2" stroke-dasharray="6 4" />
        <text x="10" y="-8" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          [CLASS_03: SPEED_LIMIT_60] 98.4%
        </text>
      </g>
      <g transform="translate(320, 90)">
        <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
          CONV2D FEATURE MAP EXTRACTION
        </text>
        ${[0, 25, 50, 75].map((offset, i) => `
          <rect x="${offset}" y="${35 + offset * 0.5}" width="70" height="140" rx="4" fill="rgba(198, 255, 0, ${0.08 + i * 0.05})" stroke="#c6ff00" stroke-width="1.2" />
        `).join('')}
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <circle cx="24" cy="27" r="5" fill="#c6ff00" />
        <text x="40" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10">
          ACOUSTIC DRIVER ASSISTANT
        </text>
        <text x="40" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">
          &quot;ALERT: SPEED LIMIT 60 KM/H ZONE DETECTED AHEAD&quot;
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // GTSRB DATASET BENCHMARKS
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">VALIDATION ACCURACY</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">98.4%</text>
          <text x="160" y="65" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">51,839 images</text>
        </g>
      </g>
    `
  },
  {
    id: 'restaurant-yolo26',
    title: 'Restaurant Table Occupancy & Service Tracker (YOLO26)',
    index: '07',
    category: 'Computer Vision',
    badge: 'YOLO REAL-TIME ANALYTICS',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(20, 24)">
        <text x="0" y="10" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          OVERHEAD DINING CAM // FLOOR_ZONE_A
        </text>
        <text x="470" y="10" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          OCCUPANCY: 18 / 24 SEATS
        </text>
      </g>
      <g transform="translate(60, 70)">
        <rect width="180" height="120" rx="12" fill="rgba(198, 255, 0, 0.06)" stroke="#c6ff00" stroke-width="2" />
        <circle cx="90" cy="60" r="30" fill="#121714" stroke="#c6ff00" stroke-width="1.5" />
        <text x="12" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          TABLE #01 [OCCUPIED 4/4]
        </text>
      </g>
      <g transform="translate(280, 70)">
        <rect width="180" height="120" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2" />
        <circle cx="90" cy="60" r="30" fill="#121714" stroke="#ef4444" stroke-width="1.5" />
        <text x="12" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          TABLE #02 [SERVICE ALERT]
        </text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="22" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">FLOOR DENSITY ANALYTICS</text>
        <text x="20" y="42" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          Active Wait Staff Dispatched: 3 · Table Turnaround Optimized by 22%
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // YOLO INFERENCE BENCHMARKS
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">DETECTION FPS (TENSORRT)</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">48 FPS</text>
        </g>
      </g>
    `
  },
  {
    id: 'self-care-ai',
    title: 'Self-Care AI — Ophthalmic & Health Diagnostics',
    index: '08',
    category: 'Computer Vision',
    badge: 'BIOMEDICAL AI · GRAD-CAM',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(80, 70)">
        <circle cx="160" cy="160" r="140" fill="#160d0b" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
        <circle cx="110" cy="160" r="35" fill="#f59e0b" opacity="0.6" filter="url(#neonGlow)" />
        <circle cx="110" cy="160" r="25" fill="#fef3c7" />
        <path d="M110,160 Q150,110 200,90 M110,160 Q160,200 240,230 M110,160 Q90,90 70,60 M110,160 Q100,220 80,260"
              fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
        <ellipse cx="200" cy="150" rx="45" ry="30" fill="rgba(198, 255, 0, 0.25)" stroke="#c6ff00" stroke-width="2" stroke-dasharray="4 2" />
        <text x="160" y="140" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          GRAD-CAM FOCUS
        </text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <circle cx="20" cy="27" r="5" fill="#10b981" />
        <text x="36" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10">
          DIAGNOSTIC TRIAGE RESULT
        </text>
        <text x="36" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">
          NO DIABETIC RETINOPATHY DETECTED (GRADE 0) · CONFIDENCE: 92.3%
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // OPHTHALMIC CLASSIFICATION
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="180" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">MODEL ARCHITECTURE</text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Backbone:</text>
            <text x="140" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">ResNet-50 / EfficientNet</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Explainability:</text>
            <text x="140" y="45" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Grad-CAM Heatmaps</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'vision-measure',
    title: 'VisionMeasure — Smart Object Measurement using OpenCV',
    index: '09',
    category: 'Computer Vision',
    badge: 'PIXEL-TO-METRIC CALIBRATION',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(80, 120)">
        <circle cx="50" cy="50" r="45" fill="rgba(198, 255, 0, 0.08)" stroke="#c6ff00" stroke-width="2" stroke-dasharray="4 2" />
        <circle cx="50" cy="50" r="4" fill="#c6ff00" />
        <text x="15" y="-10" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          [REF: 25.00mm COIN]
        </text>
      </g>
      <g transform="translate(240, 100)">
        <rect width="280" height="160" rx="10" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="2.5" />
        <line x1="0" y1="-20" x2="280" y2="-20" stroke="#c6ff00" stroke-width="2" />
        <text x="100" y="-30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">
          W: 84.62 mm
        </text>
        <line x1="305" y1="0" x2="305" y2="160" stroke="#c6ff00" stroke-width="2" />
        <text x="320" y="85" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">
          H: 42.15 mm
        </text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10">
          EDGE CONTOUR ALGORITHM // CANNY + FINDCONTOURS
        </text>
        <text x="20" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">
          Precision: ±0.25mm Error Margin · Perspective Homography Matrix Applied
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // CALIBRATION BENCHMARKS
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="180" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">OPENCV SPECS</text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Tolerance:</text>
            <text x="140" y="15" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">±0.25 mm verified</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Speed:</text>
            <text x="140" y="45" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">60 FPS on 1080p</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'website-automation',
    title: 'Website Design Automation System',
    index: '10',
    category: 'Automation / Tools',
    badge: 'AST ENGINE · HEADLESS BUILD',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(40, 40)">
        <rect width="360" height="230" rx="8" fill="#121714" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
        <rect width="360" height="24" rx="8" fill="#1c2420" />
        <circle cx="14" cy="12" r="3.5" fill="#ef4444" />
        <circle cx="26" cy="12" r="3.5" fill="#f59e0b" />
        <circle cx="38" cy="12" r="3.5" fill="#10b981" />
        <rect x="20" y="45" width="180" height="18" rx="4" fill="#c6ff00" opacity="0.8" />
        <rect x="20" y="75" width="260" height="8" rx="3" fill="#8a928f" opacity="0.6" />
        <rect x="20" y="120" width="95" height="85" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="130" y="120" width="95" height="85" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="240" y="120" width="95" height="85" rx="6" fill="rgba(255,255,255,0.05)" />
      </g>
      <g transform="translate(440, 60)">
        <rect width="180" height="300" rx="16" fill="#121714" stroke="#c6ff00" stroke-width="2" />
        <rect x="50" y="10" width="80" height="8" rx="4" fill="#1c2420" />
        <rect x="15" y="35" width="120" height="14" rx="3" fill="#c6ff00" />
        <rect x="15" y="60" width="150" height="60" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="15" y="130" width="150" height="60" rx="6" fill="rgba(255,255,255,0.05)" />
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <text x="20" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10">
          AUTOMATION RUNNER // AST GENERATOR
        </text>
        <text x="20" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">
          Design Tokens &#8594; DOM Compiler &#8594; Headless Chrome Screenshot &#8594; 100% WCAG AAA
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // BUILD TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="120" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">SYNTHESIS TIME</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">180ms</text>
        </g>
      </g>
    `
  },
  {
    id: 'mcp-learning-path',
    title: 'Model Context Protocol (MCP) Server & Tool Ecosystem',
    index: '11',
    category: 'Automation / Tools',
    badge: 'ANTHROPIC MCP · JSON-RPC 2.0',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(20, 24)">
        <text x="0" y="10" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          MODEL CONTEXT PROTOCOL (MCP) ARCHITECTURE
        </text>
        <text x="470" y="10" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          JSON-RPC 2.0 ACTIVE
        </text>
      </g>
      <g transform="translate(40, 70)">
        <rect x="0" y="40" width="160" height="100" rx="10" fill="#121714" stroke="#c6ff00" stroke-width="2" />
        <text x="20" y="70" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">
          MCP HOST
        </text>
        <text x="20" y="95" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
          Client IDE / Agent
        </text>
        <rect x="240" y="20" width="180" height="140" rx="10" fill="#121714" stroke="#10b981" stroke-width="2" />
        <text x="20" y="50" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">
          MCP SERVER
        </text>
        <text x="20" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
          Tool Definitions &amp; Handlers
        </text>
        <g transform="translate(490, 10)">
          <rect width="140" height="45" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="12" y="28" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">SQLite Database</text>
        </g>
        <g transform="translate(490, 70)">
          <rect width="140" height="45" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="12" y="28" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">Local File System</text>
        </g>
      </g>
      <g transform="translate(20, 260)">
        <rect width="640" height="185" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="26" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          // JSON-RPC 2.0 PROTOCOL STREAM
        </text>
        <g transform="translate(20, 45)">
          <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10.5">
            &gt; { &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;tools/call&quot;, &quot;params&quot;: { &quot;name&quot;: &quot;query_portfolio&quot;, &quot;args&quot;: {} } }
          </text>
          <text x="0" y="38" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10.5">
            &lt; { &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;result&quot;: { &quot;status&quot;: &quot;success&quot;, &quot;payload&quot;: [ &quot;Swapnil Patil&quot;, 12 repos ] } }
          </text>
        </g>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // STANDARDS &amp; COMPLIANCE
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">PROTOCOL COMPLIANCE</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">Anthropic MCP 2026</text>
        </g>
      </g>
    `
  },
  {
    id: 'face-attendance',
    title: 'Face Recognition Attendance Management System',
    index: '12',
    category: 'Computer Vision',
    badge: '128D EMBEDDINGS · ANTI-SPOOFING',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(180, 50)">
        <rect width="320" height="310" rx="14" fill="rgba(198, 255, 0, 0.03)" stroke="#c6ff00" stroke-width="2" />
        <path d="M0,30 L0,0 L30,0 M290,0 L320,0 L320,30 M0,280 L0,310 L30,310 M290,310 L320,310 L320,280"
              fill="none" stroke="#c6ff00" stroke-width="3.5" />
        <ellipse cx="160" cy="150" rx="80" ry="105" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 3" />
        <circle cx="130" cy="130" r="4" fill="#10b981" />
        <circle cx="190" cy="130" r="4" fill="#10b981" />
        <circle cx="160" cy="165" r="3" fill="#c6ff00" />
        <line x1="140" y1="205" x2="180" y2="205" stroke="#10b981" stroke-width="2" />
        <text x="20" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          [BIOMETRIC LOCK: VERIFIED]
        </text>
        <text x="20" y="280" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          SWAPNIL PATIL // ID #ADCET-8492
        </text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" />
        <circle cx="20" cy="27" r="5" fill="#10b981" />
        <text x="36" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10">
          ATTENDANCE LOGGED // SQLITE DATABASE
        </text>
        <text x="36" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">
          TIMESTAMP: 09:14:22 IST · DISTANCE: 0.34 &lt; 0.60 · LIVENESS: PASSED
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // BIOMETRIC TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">EMBEDDING SPACE</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">128-D Vector Euclidean</text>
          <text x="20" y="85" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">Recognition Acc: 99.2% on LFW</text>
        </g>
      </g>
    `
  },
  {
    id: 'quantum-deepfake-detection',
    title: 'Quantum-Hybrid Explainable Deepfake Detection',
    index: '05',
    category: 'Computer Vision',
    badge: 'PENNYLANE PQC · XAI GRAD-CAM · 92.4% AUC',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(30, 30)">
        <text x="0" y="15" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          // SPATIAL-FREQUENCY ARTIFACT SCAN &amp; GRAD-CAM
        </text>
        <g transform="translate(20, 35)">
          <rect width="260" height="260" rx="12" fill="rgba(255, 255, 255, 0.02)" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 3" />
          <ellipse cx="130" cy="120" rx="65" ry="85" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
          <ellipse cx="130" cy="155" rx="45" ry="30" fill="rgba(239, 68, 68, 0.35)" filter="url(#neonGlow)" />
          <ellipse cx="130" cy="155" rx="35" ry="20" fill="rgba(245, 158, 11, 0.45)" />
          <circle cx="105" cy="105" r="4" fill="#10b981" />
          <circle cx="155" cy="105" r="4" fill="#10b981" />
          <text x="15" y="25" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
            [ANOMALY: BOUNDARY BLEND 98.7%]
          </text>
          <text x="15" y="245" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
            FFT 2D DCT: High-Freq Cutoff Detected
          </text>
        </g>
        <g transform="translate(310, 35)">
          <rect width="320" height="260" rx="12" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="16" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
            PENNYLANE VARIATIONAL PQC (8 QUBITS)
          </text>
          ${[0, 1, 2, 3].map((q) => `
            <line x1="20" y1="${55 + q * 48}" x2="300" y2="${55 + q * 48}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
            <text x="24" y="${52 + q * 48}" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">|q${q}&#10217;</text>
            <rect x="65" y="${40 + q * 48}" width="30" height="26" rx="4" fill="#16221c" stroke="#10b981" stroke-width="1.2" />
            <text x="74" y="${57 + q * 48}" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">H</text>
            <rect x="120" y="${40 + q * 48}" width="42" height="26" rx="4" fill="#1f2214" stroke="#c6ff00" stroke-width="1.2" />
            <text x="125" y="${57 + q * 48}" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Ry(&#952;)</text>
            <circle cx="195" cy="${55 + q * 48}" r="4" fill="#10b981" />
            <rect x="250" y="${40 + q * 48}" width="32" height="26" rx="4" fill="#121614" stroke="rgba(255,255,255,0.3)" />
            <text x="259" y="${57 + q * 48}" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="10">M</text>
          `).join('')}
          <line x1="195" y1="55" x2="195" y2="199" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 2" />
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(239,68,68,0.4)" />
        <circle cx="20" cy="27" r="5" fill="#ef4444" />
        <text x="36" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          DEEPFAKE DETECTED // FORENSIC CONFIDENCE: 98.7%
        </text>
        <text x="36" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          BENCHMARK AUC: 92.4% · LATENCY: 42ms · EXPLAINABILITY: GRAD-CAM + SHAP
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // QUANTUM ML TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CIRCUIT ANSATZ</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="17" font-weight="700">Strongly Entangling PQC</text>
          <text x="20" y="85" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">Framework: PennyLane + PyTorch</text>
          <text x="20" y="110" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Cross-Dataset AUC: 92.4% on Celeb-DF</text>
        </g>
        <g transform="translate(24, 230)">
          <rect width="342" height="210" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // FORENSIC EXPLAINABILITY
          </text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Visual Attribution:</text>
            <text x="170" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Grad-CAM Overlay</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Frequency Anomaly:</text>
            <text x="170" y="45" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">DCT Discontinuity</text>
            <text x="0" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Court Admissibility:</text>
            <text x="170" y="75" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Auditable Log</text>
            <text x="0" y="105" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Qubit Topology:</text>
            <text x="170" y="105" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">8 Qubits All-to-All</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'mentora-ai',
    title: 'Mentora — Personal AI Learning Companion',
    index: '06',
    category: 'Generative AI / RAG',
    badge: 'LANGCHAIN · ADAPTIVE KG · ACTIVE RECALL',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(30, 30)">
        <text x="0" y="15" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          // ADAPTIVE CONCEPT GRAPH &amp; KNOWLEDGE RETRIEVAL
        </text>
        <g transform="translate(10, 40)">
          <rect x="20" y="30" width="160" height="50" rx="8" fill="#121815" stroke="#10b981" stroke-width="1.5" />
          <text x="32" y="52" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Attention Mechanism</text>
          <text x="32" y="68" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="9.5">Mastery: 96% · Solid</text>

          <line x1="180" y1="55" x2="240" y2="95" stroke="#c6ff00" stroke-width="1.5" stroke-dasharray="3 2" />

          <rect x="240" y="70" width="160" height="50" rx="8" fill="#18201b" stroke="#c6ff00" stroke-width="2" />
          <text x="252" y="92" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Transformer Blocks</text>
          <text x="252" y="108" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="9.5">Current Focus · Quiz Due</text>

          <line x1="180" y1="165" x2="240" y2="105" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2" />

          <rect x="20" y="140" width="160" height="50" rx="8" fill="#121815" stroke="#10b981" stroke-width="1.5" />
          <text x="32" y="162" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Positional Encoding</text>
          <text x="32" y="178" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="9.5">Mastery: 92% · Spaced</text>

          <line x1="400" y1="95" x2="450" y2="95" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />

          <rect x="450" y="70" width="160" height="50" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          <text x="462" y="92" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">LoRA / QLoRA</text>
          <text x="462" y="108" fill="#4f5854" font-family="'JetBrains Mono', monospace" font-size="9.5">Locked · Prereq Pending</text>
        </g>
        <g transform="translate(10, 260)">
          <rect width="620" height="75" rx="8" fill="#111613" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
            AI MENTOR RESPONSE [STREAMING // 380MS]:
          </text>
          <text x="20" y="44" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">
            &quot;In self-attention, queries and keys compute dot-product affinities to weigh value vectors...&quot;
          </text>
          <text x="20" y="62" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">
            Source Grounding: Attention Is All You Need (Vaswani et al., §3.2) [Confidence 99.1%]
          </text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(198,255,0,0.3)" />
        <circle cx="20" cy="27" r="5" fill="#c6ff00" />
        <text x="36" y="24" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          MENTORA ENGINE // ACTIVE COMPANION SESSION
        </text>
        <text x="36" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          ADAPTIVE SYLLABUS: ACTIVE · ACTIVE RECALL ACCURACY: 94.8% · LATENCY: &lt;380ms
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // COMPANION METRICS
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">KNOWLEDGE VECTOR STORE</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="17" font-weight="700">ChromaDB Hierarchical Graph</text>
          <text x="20" y="85" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">Zero-Hallucination Rate: &lt; 1.2%</text>
          <text x="20" y="110" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Spaced Repetition: SuperMemo SM-2</text>
        </g>
        <g transform="translate(24, 230)">
          <rect width="342" height="210" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // INTERACTIVE RECALL
          </text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Curriculum Mode:</text>
            <text x="170" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Adaptive Dynamic</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Flashcard Scheduler:</text>
            <text x="170" y="45" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">SM-2 Algorithm</text>
            <text x="0" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Streaming Response:</text>
            <text x="170" y="75" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">&lt; 380ms TTFT</text>
            <text x="0" y="105" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Concept Coverage:</text>
            <text x="170" y="105" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">50+ Domain Nodes</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'url-safety-checker',
    title: 'URL Safety Checker & Malicious Link Detector',
    index: '08',
    category: 'Automation / Tools',
    badge: 'ML ENSEMBLE · PHISHING SCAN · <120MS',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#080c09" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(30, 30)">
        <text x="0" y="15" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
          // URL THREAT AUDIT &amp; HEURISTIC FEATURE EXTRACTION
        </text>
        <g transform="translate(10, 35)">
          <rect width="620" height="48" rx="8" fill="#121714" stroke="rgba(255,255,255,0.12)" />
          <text x="16" y="29" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
            https://secure-login.paypa1-account.xyz/update-credential
          </text>
          <rect x="520" y="10" width="85" height="28" rx="5" fill="#ef4444" />
          <text x="532" y="28" fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
            BLOCKED
          </text>
        </g>
        <g transform="translate(10, 105)">
          <rect x="0" y="0" width="145" height="110" rx="8" fill="#0d110f" stroke="rgba(239,68,68,0.4)" />
          <text x="12" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">HOMOGRAPH SPOOF</text>
          <text x="12" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">paypa1 (1!=l)</text>
          <text x="12" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="9.5">Flag: Impersonation</text>

          <rect x="158" y="0" width="145" height="110" rx="8" fill="#0d110f" stroke="rgba(239,68,68,0.4)" />
          <text x="170" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">DOMAIN AGE</text>
          <text x="170" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">2 Days Old</text>
          <text x="170" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="9.5">Flag: Fresh Domain</text>

          <rect x="316" y="0" width="145" height="110" rx="8" fill="#0d110f" stroke="rgba(245,158,11,0.4)" />
          <text x="328" y="24" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">SHANNON ENTROPY</text>
          <text x="328" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">4.82 bits</text>
          <text x="328" y="85" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="9.5">Flag: High Randomness</text>

          <rect x="474" y="0" width="145" height="110" rx="8" fill="#0d110f" stroke="rgba(239,68,68,0.4)" />
          <text x="486" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">REDIRECT HOPS</text>
          <text x="486" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">3 Hops (Cloaked)</text>
          <text x="486" y="85" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="9.5">Flag: Obfuscated Hop</text>
        </g>
        <g transform="translate(10, 235)">
          <rect width="620" height="100" rx="8" fill="#111613" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="28" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
            RISK ASSESSMENT CLASSIFIER // RANDOM FOREST + GRADIENT BOOSTING
          </text>
          <rect x="20" y="44" width="580" height="16" rx="8" fill="#1f2420" />
          <rect x="20" y="44" width="550" height="16" rx="8" fill="#ef4444" />
          <text x="20" y="82" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">
            THREAT SCORE: 98/100 (HIGH RISK PHISHING ATTACK)
          </text>
          <text x="420" y="82" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
            Scan turnaround: 115ms
          </text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(239,68,68,0.4)" />
        <circle cx="20" cy="27" r="5" fill="#ef4444" />
        <text x="36" y="24" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
          MALICIOUS URL INTERCEPTED // PHISHING DEFENSE ACTIVE
        </text>
        <text x="36" y="43" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          ACCURACY: 97.2% · FEATURES: 32 SIGNALS · INFERENCE: &lt;120ms · ZERO-DAY DEFENSE
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // DEFENSE TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="150" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">ML ENSEMBLE</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="17" font-weight="700">Random Forest + GBDT</text>
          <text x="20" y="85" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">Dataset: PhishTank &amp; Alexa Top 100k</text>
          <text x="20" y="110" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">False Positive Rate: &lt; 1.4%</text>
        </g>
        <g transform="translate(24, 230)">
          <rect width="342" height="210" rx="10" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // DETECTION VECTORS
          </text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Lexical Features:</text>
            <text x="170" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">18 Tokens Analysed</text>
            <text x="0" y="45" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">WHOIS Reputation:</text>
            <text x="170" y="45" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Live DNS Resolution</text>
            <text x="0" y="75" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">SSL Security Audit:</text>
            <text x="170" y="75" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Untrusted / Invalid</text>
            <text x="0" y="105" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Audit Throughput:</text>
            <text x="170" y="105" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">&lt; 120ms Latency</text>
          </g>
        </g>
      </g>
    `
  }
];

// --------------------------------------------------------------------------
// 11 Consultant Commercial Client Projects
// --------------------------------------------------------------------------
const consultantProjects = [
  {
    id: 'studio-squanta',
    title: 'Studio Squanta — Creative Agency Platform',
    index: 'C-01',
    category: 'Agency & Enterprise',
    badge: 'VERIFIED LIVE · LIGHTHOUSE 99',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Editorial Agency Mockup -->
      <g transform="translate(40, 40)">
        <rect width="600" height="320" rx="10" fill="#121714" stroke="rgba(198, 255, 0, 0.3)" stroke-width="1.5" />
        <rect width="600" height="30" rx="10" fill="#18201c" />
        <circle cx="16" cy="15" r="4" fill="#ef4444" />
        <circle cx="30" cy="15" r="4" fill="#f59e0b" />
        <circle cx="44" cy="15" r="4" fill="#10b981" />
        <text x="70" y="19" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">https://studiosquanta.com</text>
        
        <!-- Hero Layout -->
        <text x="40" y="85" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="800">
          STUDIO SQUANTA
        </text>
        <text x="40" y="115" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="14">
          CRAFTING DIGITAL ARCHITECTURES &amp; BESPOKE IDENTITIES
        </text>
        
        <rect x="40" y="145" width="160" height="135" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="220" y="145" width="160" height="135" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <rect x="400" y="145" width="160" height="135" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
          DELIVERED SUB-SECOND PAGE LOADS &amp; +40% INBOUND CLIENT INQUIRIES
        </text>
        <text x="20" y="43" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
          Stack: React, Next.js, TailwindCSS, Framer Motion · LCP &lt; 0.8s
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">
          // CLIENT IMPACT TELEMETRY
        </text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CORE WEB VITALS</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">99 / 100</text>
        </g>
        <g transform="translate(24, 180)">
          <rect width="342" height="260" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
            // KEY DELIVERABLES
          </text>
          <g transform="translate(20, 50)">
            <text x="0" y="15" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">&#8226; Interactive case study showcase</text>
            <text x="0" y="45" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">&#8226; Fluid Framer Motion animations</text>
            <text x="0" y="75" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">&#8226; High-conversion inquiry pipeline</text>
            <text x="0" y="105" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">&#8226; 100% WCAG 2.1 AA accessibility</text>
          </g>
        </g>
      </g>
    `
  },
  {
    id: 'altecht',
    title: 'Altecht — Global Tech Solutions & Consultancy',
    index: 'C-02',
    category: 'Agency & Enterprise',
    badge: 'ENTERPRISE ARCHITECTURE',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Multi-Cloud Topology Grid -->
      <g transform="translate(40, 50)">
        <rect width="600" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(40, 30)">
          <rect width="140" height="80" rx="8" fill="#18201c" stroke="#c6ff00" stroke-width="1.5" />
          <text x="20" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">AWS / GCP</text>
          <text x="20" y="55" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">Cloud Edge</text>

          <line x1="140" y1="40" x2="220" y2="40" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" />

          <g transform="translate(180, 0)">
            <rect width="140" height="80" rx="8" fill="#18201c" stroke="#10b981" stroke-width="1.5" />
            <text x="20" y="35" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">KUBERNETES</text>
            <text x="20" y="55" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">Orchestration</text>
          </g>

          <line x1="320" y1="40" x2="400" y2="40" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" />

          <g transform="translate(360, 0)">
            <rect width="140" height="80" rx="8" fill="#18201c" stroke="#c6ff00" stroke-width="1.5" />
            <text x="20" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">GLOBAL CDN</text>
            <text x="20" y="55" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">Sub-10ms TTFB</text>
          </g>
        </g>
        <g transform="translate(40, 150)">
          <rect width="520" height="110" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.06)" />
          <text x="20" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">INFRASTRUCTURE STATUS: 99.98% UPTIME SLA</text>
          <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">Enterprise Microservices &amp; Multi-Tenant Portal</text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          PRODUCTION DEPLOYMENT // HTTPS://ALTECHT.COM
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// METRICS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">PORTFOLIO IMPACT</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">99.98%</text>
          <text x="160" y="65" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Production Availability</text>
        </g>
      </g>
    `
  },
  {
    id: 'ss-creation',
    title: 'SS Creation — Creative & Production Studio',
    index: 'C-03',
    category: 'Agency & Enterprise',
    badge: 'MEDIA TIMELINE & GALLERY',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Film Reel & Video Showcase Graphic -->
      <g transform="translate(40, 50)">
        <rect width="600" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <!-- Film Sprockets -->
        <g transform="translate(20, 20)">
          ${[0, 60, 120, 180, 240, 300, 360, 420, 480, 540].map((x) => `
            <rect x="${x}" y="0" width="25" height="15" rx="3" fill="rgba(198,255,0,0.4)" />
            <rect x="${x}" y="240" width="25" height="15" rx="3" fill="rgba(198,255,0,0.4)" />
          `).join('')}
        </g>
        <g transform="translate(40, 60)">
          <rect width="240" height="160" rx="8" fill="#18201c" stroke="#c6ff00" stroke-width="1.5" />
          <polygon points="110,70 110,100 135,85" fill="#c6ff00" />
          <text x="15" y="145" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">SHOWREEL 2026</text>
          <g transform="translate(260, 0)">
            <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">SS CREATION</text>
            <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">COMMERCIAL PRODUCTION STUDIO</text>
            <text x="0" y="85" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Interactive portfolio showcase &amp; story timeline</text>
          </g>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE AT: HTTPS://WWW.SSCREATION.ONLINE/ABOUT
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// PERFORMANCE</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">USER ENGAGEMENT</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">+55%</text>
          <text x="140" y="65" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Average Session Duration</text>
        </g>
      </g>
    `
  },
  {
    id: 'samarth-business-group',
    title: 'Samarth Business Group — Corporate Conglomerate',
    index: 'C-04',
    category: 'Agency & Enterprise',
    badge: 'MULTI-DIVISION CONGLOMERATE',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Enterprise Division Tree -->
      <g transform="translate(40, 50)">
        <rect width="600" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(220, 20)">
          <rect width="160" height="45" rx="6" fill="#1c2420" stroke="#c6ff00" stroke-width="1.5" />
          <text x="15" y="28" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">SAMARTH GROUP</text>
        </g>
        <line x1="300" y1="65" x2="300" y2="100" stroke="#8a928f" stroke-width="2" />
        <line x1="120" y1="100" x2="480" y2="100" stroke="#8a928f" stroke-width="2" />
        <g transform="translate(40, 120)">
          <rect width="110" height="60" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="10" y="35" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">REAL ESTATE</text>
        </g>
        <g transform="translate(170, 120)">
          <rect width="110" height="60" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="15" y="35" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">LOGISTICS</text>
        </g>
        <g transform="translate(300, 120)">
          <rect width="110" height="60" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="18" y="35" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">AGRO TECH</text>
        </g>
        <g transform="translate(430, 120)">
          <rect width="110" height="60" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.1)" />
          <text x="25" y="35" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">FINANCE</text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://WWW.SAMARTHBUSINESSGROUP.COM
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// CORPORATE SCALE</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">ENTERPRISE DIVISIONS</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">4 Verticals</text>
        </g>
      </g>
    `
  },
  {
    id: 'display-promotion',
    title: 'Display Promotion — Digital Signage & Expo Catalogue',
    index: 'C-05',
    category: 'Marketing & E-Commerce',
    badge: 'LED DISPLAY CATALOGUE',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Digital Signage Grid -->
      <g transform="translate(60, 60)">
        <rect width="560" height="280" rx="8" fill="#121714" stroke="#c6ff00" stroke-width="2" />
        <g transform="translate(30, 30)">
          <rect width="140" height="100" rx="4" fill="#1c2420" stroke="rgba(255,255,255,0.15)" />
          <text x="15" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">P2.5 INDOOR LED</text>
        </g>
        <g transform="translate(200, 30)">
          <rect width="140" height="100" rx="4" fill="#1c2420" stroke="rgba(255,255,255,0.15)" />
          <text x="15" y="55" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">OUTDOOR BILLBOARD</text>
        </g>
        <g transform="translate(370, 30)">
          <rect width="140" height="100" rx="4" fill="#1c2420" stroke="rgba(255,255,255,0.15)" />
          <text x="25" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">EXPO STANDS</text>
        </g>
        <text x="30" y="200" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">
          DISPLAY PROMOTION // DIGITAL SERVICE SHOWCASE
        </text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://WWW.DISPLAYPROMOTION.IN
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// PERFORMANCE</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CATALOGUE CONVERSION</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">+48%</text>
        </g>
      </g>
    `
  },
  {
    id: 'muscle-build-nutrition',
    title: 'Muscle Build Nutrition — Sports E-Commerce',
    index: 'C-06',
    category: 'Marketing & E-Commerce',
    badge: 'E-COMMERCE & LAB QR AUTH',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- E-Commerce Product Layout -->
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <!-- Tub Silhouette -->
        <g transform="translate(50, 40)">
          <rect width="140" height="180" rx="12" fill="#18201c" stroke="#c6ff00" stroke-width="2" />
          <rect x="25" y="10" width="90" height="20" rx="4" fill="#c6ff00" />
          <text x="25" y="100" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">WHEY ISO</text>
          <text x="25" y="125" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10">100% PURE</text>
        </g>
        <g transform="translate(240, 60)">
          <text x="0" y="20" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="800">
            MUSCLE BUILD NUTRITION
          </text>
          <text x="0" y="50" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="13">
            FAST SECURE CHECKOUT · LAB TEST BATCH QR
          </text>
          <text x="0" y="80" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
            Optimized payment funnel with Razorpay integration
          </text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE AT: HTTPS://WWW.MUSCLEBUILDNUTRITION.CO.IN
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// CHECKOUT METRICS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">CHECKOUT VELOCITY</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">&lt; 35s</text>
        </g>
      </g>
    `
  },
  {
    id: 'shubharambh-events',
    title: 'Shubharambh Events — Wedding & Event Management',
    index: 'C-07',
    category: 'Marketing & E-Commerce',
    badge: 'LUXURY WEDDING PLANNER',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(30, 40)">
          <rect width="220" height="150" rx="8" fill="#1c2420" stroke="#f59e0b" stroke-width="1.5" />
          <text x="20" y="80" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700">DESTINATION WEDDINGS</text>
        </g>
        <g transform="translate(280, 50)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">
            SHUBHARAMBH EVENTS
          </text>
          <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">
            PREMIUM HOSPITALITY &amp; EVENT CURATION
          </text>
          <text x="0" y="85" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
            Masonry event gallery with real-time date reservations
          </text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://WWW.SHUBHARAMBHEVENTS.CO.IN
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// BOOKING CONVERSIONS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">INQUIRY INTAKE</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">+62%</text>
        </g>
      </g>
    `
  },
  {
    id: 'prerna-saree',
    title: 'Prerna Saree — Luxury Handloom & Ethnic Fashion',
    index: 'C-08',
    category: 'Marketing & E-Commerce',
    badge: 'ETHNIC HANDLOOM E-COM',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(40, 40)">
          <rect width="200" height="160" rx="8" fill="#18201c" stroke="#ec4899" stroke-width="1.5" />
          <text x="20" y="85" fill="#ec4899" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">PAITHANI &amp; SILK</text>
        </g>
        <g transform="translate(270, 60)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">
            PRERNA SAREE
          </text>
          <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">
            HERITAGE TEXTILE &amp; WEAVE CATALOGUE
          </text>
          <text x="0" y="85" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">
            Mobile-first responsive commerce with WhatsApp ordering
          </text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://PRERNASAREE.COM
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// COMMERCE PERFORMANCE</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">MOBILE SPEED</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">98 / 100</text>
        </g>
      </g>
    `
  },
  {
    id: 'bytepro-labs',
    title: 'BytePro Labs — Software Engineering Studio',
    index: 'C-09',
    category: 'Startup & Web Apps',
    badge: 'TECH LAB & CLOUD DEV',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="#c6ff00" stroke-width="1.5" />
        <g transform="translate(30, 30)">
          <text x="0" y="25" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="700">
            BYTEPRO LABS // CODE &amp; DEV SERVICES
          </text>
          <g transform="translate(0, 50)">
            <rect width="240" height="70" rx="6" fill="#18201c" />
            <text x="15" y="30" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">API GATEWAY</text>
            <text x="15" y="50" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">GraphQL + REST</text>
          </g>
          <g transform="translate(260, 50)">
            <rect width="240" height="70" rx="6" fill="#18201c" />
            <text x="15" y="30" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">CI/CD PIPELINE</text>
            <text x="15" y="50" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">Automated Deployments</text>
          </g>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE AT: HTTPS://BYTEPROLABS.COM
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// DEV METRICS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">DEPLOYMENT CYCLE</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">&lt; 3 mins</text>
        </g>
      </g>
    `
  },
  {
    id: 'spark',
    title: 'Spark — EdTech & Skill Accelerator Platform',
    index: 'C-10',
    category: 'Startup & Web Apps',
    badge: 'EDTECH ACCELERATOR',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(30, 30)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">SPARK EDTECH</text>
          <text x="0" y="50" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">LEARNING ROADMAPS &amp; PROGRESS TRACKER</text>
          <rect x="0" y="75" width="500" height="12" rx="6" fill="#18201c" />
          <rect x="0" y="75" width="380" height="12" rx="6" fill="#10b981" />
          <text x="0" y="115" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Course Completion: 76% · 12,400+ Active Learners</text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://SPARK-WOAD.VERCEL.APP
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// EDTECH IMPACT</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">ACTIVE STUDENTS</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">12.4k+</text>
        </g>
      </g>
    `
  },
  {
    id: 'student-x',
    title: 'Student-X — Campus Community & Resource Network',
    index: 'C-11',
    category: 'Startup & Web Apps',
    badge: 'CAMPUS COMMUNITY NETWORK',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <g transform="translate(50, 50)">
        <rect width="580" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(30, 30)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">STUDENT-X</text>
          <text x="0" y="50" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">CAMPUS PEER MARKETPLACE &amp; NOTES EXCHANGE</text>
          <g transform="translate(0, 80)">
            <rect width="150" height="80" rx="6" fill="#18201c" stroke="#10b981" />
            <text x="15" y="35" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">ACADEMIC NOTES</text>
          </g>
          <g transform="translate(170, 80)">
            <rect width="150" height="80" rx="6" fill="#18201c" stroke="#c6ff00" />
            <text x="15" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11">CAMPUS HOUSING</text>
          </g>
          <g transform="translate(340, 80)">
            <rect width="150" height="80" rx="6" fill="#18201c" stroke="rgba(255,255,255,0.2)" />
            <text x="25" y="35" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">EVENT TICKETS</text>
          </g>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          LIVE: HTTPS://STUDENT-X.VERCEL.APP
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// RETENTION</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">COLLEGE NODES</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">18 Campuses</text>
        </g>
      </g>
    `
  }
];

// --------------------------------------------------------------------------
// 5 UI/UX Design Case Studies
// --------------------------------------------------------------------------
const uiuxProjects = [
  {
    id: 'houstrack',
    title: 'HousTrack — Property & Tenant Management Dashboard',
    index: 'UI-01',
    category: 'Web Platform & Dashboard',
    badge: '14+ SCREENS · FIGMA SYSTEM',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Dashboard Wireframe & Analytics HUD -->
      <g transform="translate(40, 40)">
        <rect width="600" height="320" rx="10" fill="#121714" stroke="#c6ff00" stroke-width="1.5" />
        <rect width="600" height="30" rx="10" fill="#18201c" />
        <text x="20" y="20" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">HOUSTRACK SAAS DASHBOARD</text>
        <!-- KPI Cards -->
        <g transform="translate(20, 50)">
          <rect width="170" height="75" rx="6" fill="#18201c" />
          <text x="15" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">TOTAL UNITS</text>
          <text x="15" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">142 Units</text>
        </g>
        <g transform="translate(210, 50)">
          <rect width="170" height="75" rx="6" fill="#18201c" />
          <text x="15" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">RENT COLLECTED</text>
          <text x="15" y="55" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">$84,200</text>
        </g>
        <g transform="translate(400, 50)">
          <rect width="170" height="75" rx="6" fill="#18201c" />
          <text x="15" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">OCCUPANCY RATE</text>
          <text x="15" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">96.4%</text>
        </g>
        <!-- Kanban / Table Rows -->
        <g transform="translate(20, 140)">
          <rect width="550" height="150" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.06)" />
          <text x="20" y="30" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">TENANT STATUS LEDGER</text>
          <text x="20" y="60" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10.5">Unit 402 · Sarah Jenkins · Rent Paid via ACH · [CLEARED]</text>
          <text x="20" y="85" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10.5">Unit 108 · David Miller · Maintenance Request: HVAC · [IN PROGRESS]</text>
          <text x="20" y="110" fill="#ef4444" font-family="'JetBrains Mono', monospace" font-size="10.5">Unit 305 · Lease Expiry in 14 Days · [ACTION REQUIRED]</text>
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          FIGMA DESIGN SYSTEM // 100% AUTO-LAYOUT 5.0 COMPLIANT
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// DESIGN SPECS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">DESIGN ATOMS</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">48+ Components</text>
        </g>
      </g>
    `
  },
  {
    id: 'glowvita',
    title: 'GlowVita — Salon & Wellness Booking Mobile App',
    index: 'UI-02',
    category: 'Mobile App',
    badge: 'IOS & ANDROID FIGMA SYSTEM',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Dual Mobile Mockup Frames -->
      <g transform="translate(100, 30)">
        <rect width="200" height="340" rx="20" fill="#121714" stroke="#c6ff00" stroke-width="2" />
        <rect x="60" y="10" width="80" height="10" rx="5" fill="#18201c" />
        <text x="20" y="55" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">GLOWVITA SALON</text>
        <rect x="15" y="70" width="170" height="60" rx="8" fill="#18201c" />
        <text x="25" y="105" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="10">HAIR STYLING &amp; SPA</text>
        <rect x="15" y="145" width="170" height="50" rx="8" fill="#18201c" />
        <text x="25" y="175" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10">BOOK: 2:30 PM TODAY</text>
      </g>
      <g transform="translate(340, 30)">
        <rect width="200" height="340" rx="20" fill="#121714" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
        <rect x="60" y="10" width="80" height="10" rx="5" fill="#18201c" />
        <text x="20" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">STYLIST SCHEDULE</text>
        <circle cx="100" cy="120" r="40" fill="#18201c" stroke="#10b981" />
        <text x="80" y="125" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="11">MAY 18</text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          FIGMA PROTOTYPE // INTERACTIVE BOOKING CALENDAR &amp; SERVICE DRAWER
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// MOBILE SPECS</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">USER RETENTION</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">4.9 / 5.0</text>
        </g>
      </g>
    `
  },
  {
    id: 'melodies',
    title: 'Melodies — Web3 Music Streaming & Creator Community',
    index: 'UI-03',
    category: 'Web Platform & Dashboard',
    badge: 'WEB3 STREAMING & AUDIO HUD',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Audio Waveform & Player HUD -->
      <g transform="translate(40, 50)">
        <rect width="600" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(40, 30)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">MELODIES WEB3 STREAM</text>
          <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">DECENTRALIZED ROYALTY DISPATCH</text>
        </g>
        <g transform="translate(40, 110)">
          ${[25, 45, 70, 95, 60, 40, 85, 110, 50, 75, 90, 65, 40, 80, 100, 60, 45, 90, 70, 50, 35, 75, 95].map((h, i) => `
            <rect x="${i * 22}" y="${100 - h * 0.7}" width="10" height="${h * 0.7}" rx="4" fill="${i % 3 === 0 ? '#c6ff00' : '#10b981'}" />
          `).join('')}
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          CREATOR ROYALTY SPLITS // AUTOMATED SMART CONTRACT DISPATCH
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// AUDIO DESIGN</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">ROYALTY SPEED</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">Instant</text>
        </g>
      </g>
    `
  },
  {
    id: 'flymitra',
    title: 'FlyMitra — Flight Booking & Fare Comparison Platform',
    index: 'UI-04',
    category: 'Web Platform & Dashboard',
    badge: 'TRAVEL & FLIGHT DISCOVERY',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Flight Arc Map & Seat Selector -->
      <g transform="translate(40, 50)">
        <rect width="600" height="300" rx="10" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <g transform="translate(40, 30)">
          <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">FLYMITRA TRAVEL</text>
          <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">PUN (PUNE) &#8594; DXB (DUBAI)</text>
          <!-- Curved Arc Flight Path -->
          <path d="M50,150 Q250,50 450,150" fill="none" stroke="#c6ff00" stroke-width="2.5" stroke-dasharray="6 4" />
          <circle cx="50" cy="150" r="6" fill="#10b981" />
          <circle cx="450" cy="150" r="6" fill="#ef4444" />
        </g>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          FIGMA UI // FARE COMPARISON MATRIX &amp; SEAT CABIN SELECTOR
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// CONVERSION</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">BOOKING DROP-OFF</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">-34%</text>
        </g>
      </g>
    `
  },
  {
    id: 'food-app',
    title: 'FoodExpress / QuickBite — Hyperlocal Food Delivery',
    index: 'UI-05',
    category: 'Mobile App',
    badge: 'HYPERLOCAL FOOD DELIVERY',
    svg: `
      <rect x="0" y="0" width="680" height="465" rx="14" fill="#090d0b" stroke="rgba(255,255,255,0.1)" />
      <!-- Mobile Food Order & Tracking Map -->
      <g transform="translate(80, 40)">
        <rect width="240" height="320" rx="16" fill="#121714" stroke="#c6ff00" stroke-width="2" />
        <g transform="translate(20, 30)">
          <text x="0" y="20" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">QUICKBITE FOOD</text>
          <rect x="0" y="40" width="200" height="60" rx="8" fill="#18201c" />
          <text x="15" y="75" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="11">BURGER &amp; CRISPY FRIES</text>
          <rect x="0" y="120" width="200" height="80" rx="8" fill="#18201c" stroke="#10b981" />
          <text x="15" y="150" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="10.5">RIDER ON THE WAY</text>
          <text x="15" y="180" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="12">ETA: 12 MINS</text>
        </g>
      </g>
      <g transform="translate(360, 80)">
        <text x="0" y="25" fill="#f2f4f3" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">REAL-TIME GPS ROUTING</text>
        <text x="0" y="55" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12">CLEAN CART &amp; INSTANT ORDER FLOW</text>
        <text x="0" y="85" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="11">Figma tokens with dynamic order status milestones</text>
      </g>
      <g transform="translate(20, 390)">
        <rect width="640" height="55" rx="8" fill="#121714" stroke="rgba(255,255,255,0.1)" />
        <text x="20" y="24" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11">
          FIGMA PROTOTYPE // HYPERLOCAL MENU CARDS &amp; INTERACTIVE CHECKOUT
        </text>
      </g>
      <g transform="translate(710, 0)">
        <rect width="390" height="465" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="35" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">// APP PERFORMANCE</text>
        <g transform="translate(24, 60)">
          <rect width="342" height="100" rx="8" fill="#0d110f" stroke="rgba(255,255,255,0.08)" />
          <text x="20" y="30" fill="#8a928f" font-family="'JetBrains Mono', monospace" font-size="10">ORDER TIME</text>
          <text x="20" y="65" fill="#c6ff00" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="700">&lt; 40s</text>
        </g>
      </g>
    `
  }
];

async function generateAll() {
  console.log('Generating images across all project categories...');

  const FEATURED_AI_PROJECTS = new Set([
    'isl-recognition',
    'drishtidrive-ai',
    'roadguard-ai',
    'rag-engineering',
    '3d-car-running-game',
    'traffic-sign-cnn',
    'self-care-ai',
  ]);
  const overwriteFeatured = process.argv.includes('--overwrite-featured') || process.argv.includes('--force');

  // 1. GitHub Projects (12)
  console.log(`\n--- Generating ${githubProjects.length} GitHub Project Images ---`);
  for (const proj of githubProjects) {
    const destWebp = path.join(projectsDir, `${proj.id}.webp`);
    if (FEATURED_AI_PROJECTS.has(proj.id) && fs.existsSync(destWebp) && !overwriteFeatured) {
      console.log(`⚡ [GitHub] ${proj.id}.webp (Preserved AI-Generated High-Fidelity Image)`);
      continue;
    }
    const fullSvg = createSvgWrapper(proj.title, proj.index, proj.category, proj.badge, proj.svg, '#c6ff00');
    await sharp(Buffer.from(fullSvg))
      .resize(WIDTH, HEIGHT)
      .webp({ quality: 90 })
      .toFile(destWebp);
    console.log(`✓ [GitHub] ${proj.id}.webp`);
  }

  // 2. Consultant Projects (11)
  console.log(`\n--- Generating ${consultantProjects.length} Consultant Project Images ---`);
  for (const proj of consultantProjects) {
    const fullSvg = createSvgWrapper(proj.title, proj.index, proj.category, proj.badge, proj.svg, '#10b981');
    const destWebp = path.join(consultantDir, `${proj.id}.webp`);
    await sharp(Buffer.from(fullSvg))
      .resize(WIDTH, HEIGHT)
      .webp({ quality: 90 })
      .toFile(destWebp);
    console.log(`✓ [Consultant] ${proj.id}.webp`);
  }

  // 3. UI/UX Projects (5)
  console.log(`\n--- Generating ${uiuxProjects.length} UI/UX Project Images ---`);
  for (const proj of uiuxProjects) {
    const fullSvg = createSvgWrapper(proj.title, proj.index, proj.category, proj.badge, proj.svg, '#c6ff00');
    const destWebp = path.join(uiuxDir, `${proj.id}.webp`);
    await sharp(Buffer.from(fullSvg))
      .resize(WIDTH, HEIGHT)
      .webp({ quality: 90 })
      .toFile(destWebp);
    console.log(`✓ [UI/UX] ${proj.id}.webp`);
  }

  console.log('\nAll 28 project card images generated successfully!');
}

generateAll().catch((err) => {
  console.error('Error generating project images:', err);
  process.exit(1);
});
