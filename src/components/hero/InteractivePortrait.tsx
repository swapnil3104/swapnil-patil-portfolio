import React, { useRef, useEffect, useState, useCallback } from 'react';
import portraitFull from '@/assets/swapnil-portrait.webp';
import portrait800 from '@/assets/swapnil-portrait-800.webp';
import portrait400 from '@/assets/swapnil-portrait-400.webp';
import { useReducedMotion } from '@/hooks';
import { SparklesIcon, CodeIcon } from '@/components/icons';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char?: string;
  size: number;
  color: string;
  alpha: number;
  maxLife: number;
  life: number;
}

const GLYPHS = ['0', '1', 'λ', '∇', 'θ', 'Σ', 'f(x)', 'cv', 'py', 'ai', 'ISLR', '99.4%', 'tensor', 'ReLU'];
const COLORS = [
  '#c6ff00', // Soren Hale Cyber Lime
  '#d4ff00', // Bright Chartreuse
  '#f2f4f3', // Crisp White
  '#8a928f', // Muted Slate
];

const CODE_LINES = [
  'import torch',
  'import cv2',
  'import mediapipe as mp',
  'class ISLRNet(nn.Module):',
  '  def __init__(self):',
  '    super().__init__()',
  '    self.lstm = nn.LSTM(126, 64)',
  '    self.fc = nn.Linear(64, 35)',
  '  def forward(self, x):',
  '    out, _ = self.lstm(x)',
  '    return self.fc(out[:, -1, :])',
  '# EAR = (|p2-p6| + |p3-p5|)/(2|p1-p4|)',
  'def compute_ear(eye_landmarks):',
  '  A = dist(eye_landmarks[1], eye_landmarks[5])',
  '  B = dist(eye_landmarks[2], eye_landmarks[4])',
  '  C = dist(eye_landmarks[0], eye_landmarks[3])',
  '  return (A + B) / (2.0 * C)',
  'yolo = YOLO("yolov8n.pt")',
  'results = yolo.predict(frame)',
  'mcp_server.register_tool(name="detect")',
  'status = "optimal" // 99.4% confidence',
  'lat_budget: 18ms // 60 FPS verified',
];

export const InteractivePortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [viewSource, setViewSource] = useState(false);

  // Animation state refs
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; smoothX: number; smoothY: number }>({
    x: 0,
    y: 0,
    active: false,
    smoothX: 0,
    smoothY: 0,
  });
  const rafIdRef = useRef<number | null>(null);
  const matrixRafRef = useRef<number | null>(null);

  // Detect touch devices
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(hover: none)').matches;
      setIsTouchDevice(isTouch);
    }
  }, []);

  // Spawn particles at pointer location
  const spawnParticles = useCallback((x: number, y: number, count = 3) => {
    for (let i = 0; i < count; i++) {
      const isGlyph = Math.random() > 0.45;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.8 + 0.4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.2,
        char: isGlyph ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : undefined,
        size: isGlyph ? Math.random() * 4 + 10 : Math.random() * 2.5 + 1.5,
        color,
        alpha: 1,
        maxLife: Math.floor(Math.random() * 30 + 35),
        life: 0,
      });
    }

    if (particlesRef.current.length > 70) {
      particlesRef.current.splice(0, particlesRef.current.length - 70);
    }
  }, []);

  // Particle & Reticle Canvas Animation Loop
  useEffect(() => {
    if (reducedMotion || isTouchDevice || viewSource) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.2;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.2;

      // Draw active CV reticle in Soren Hale Cyber Lime
      if (mouse.active) {
        const rx = mouse.smoothX;
        const ry = mouse.smoothY;
        const boxSize = 28;
        const armLength = 8;

        ctx.save();
        ctx.strokeStyle = '#c6ff00';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(198, 255, 0, 0.45)';
        ctx.shadowBlur = 8;

        // Top-left
        ctx.beginPath();
        ctx.moveTo(rx - boxSize, ry - boxSize + armLength);
        ctx.lineTo(rx - boxSize, ry - boxSize);
        ctx.lineTo(rx - boxSize + armLength, ry - boxSize);
        ctx.stroke();

        // Top-right
        ctx.beginPath();
        ctx.moveTo(rx + boxSize - armLength, ry - boxSize);
        ctx.lineTo(rx + boxSize, ry - boxSize);
        ctx.lineTo(rx + boxSize, ry - boxSize + armLength);
        ctx.stroke();

        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(rx - boxSize, ry + boxSize - armLength);
        ctx.lineTo(rx - boxSize, ry + boxSize);
        ctx.lineTo(rx - boxSize + armLength, ry + boxSize);
        ctx.stroke();

        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(rx + boxSize - armLength, ry + boxSize);
        ctx.lineTo(rx + boxSize, ry + boxSize);
        ctx.lineTo(rx + boxSize, ry + boxSize - armLength);
        ctx.stroke();

        // Reticle coordinates tag
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(242, 244, 243, 0.9)';
        ctx.shadowBlur = 0;
        ctx.fillText(`CV_TRACK [${Math.round(rx)}, ${Math.round(ry)}]`, rx + boxSize + 4, ry - boxSize + 10);
        ctx.fillStyle = '#c6ff00';
        ctx.fillText(`CONF: 99.4%`, rx + boxSize + 4, ry - boxSize + 22);

        ctx.restore();
      }

      // Update and render particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        if (p.life >= p.maxLife || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;

        if (p.char) {
          ctx.font = `${Math.floor(p.size)}px "JetBrains Mono", monospace`;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      resizeObserver.disconnect();
    };
  }, [reducedMotion, isTouchDevice, viewSource]);

  // Glyphfield / ASCII Matrix Canvas Animation Loop for "View Source" Mode
  useEffect(() => {
    if (!viewSource || reducedMotion) return;

    const canvas = matrixCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const fontSize = 13;
    let columns = 0;
    let drops: number[] = [];

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -30);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    const chars = '01λ∇θΣf(x)yolo=18msISLRcv2.torch+−=><{}[]';

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(8, 10, 9, 0.18)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading head character in neon lime
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#c6ff00';
          ctx.shadowColor = '#c6ff00';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = 'rgba(198, 255, 0, 0.45)';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      matrixRafRef.current = requestAnimationFrame(drawMatrix);
    };

    matrixRafRef.current = requestAnimationFrame(drawMatrix);

    return () => {
      if (matrixRafRef.current) cancelAnimationFrame(matrixRafRef.current);
      resizeObserver.disconnect();
    };
  }, [viewSource, reducedMotion]);

  // Pointer event handlers
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouchDevice || viewSource) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.active = true;

    spawnParticles(x, y, 2);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouchDevice || viewSource) return;
    setIsHovered(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.smoothX = x;
    mouseRef.current.smoothY = y;
    mouseRef.current.active = true;
    spawnParticles(x, y, 6);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden bg-[#080a09] border border-white/[0.12] shadow-2xl select-none group transition-all duration-300"
    >
      {/* Soren Hale Signature "{ } View source" Toggle Button */}
      <div className="absolute top-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setViewSource(!viewSource)}
          aria-label={viewSource ? 'View photographic portrait' : 'View glyphfield source code'}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md border transition-all duration-200 shadow-lg ${
            viewSource
              ? 'bg-[#c6ff00] text-black border-[#c6ff00] font-semibold'
              : 'bg-[#111413]/85 text-[#f2f4f3] border-white/15 hover:border-[#c6ff00]/60 hover:text-[#c6ff00]'
          }`}
        >
          <CodeIcon size={12} className={viewSource ? 'text-black' : 'text-[#c6ff00]'} />
          <span>{viewSource ? '{ } View portrait' : '{ } View source'}</span>
        </button>
      </div>

      {viewSource ? (
        /* Soren Hale Glyphfield / Code Matrix Mode */
        <div className="relative w-full h-full bg-[#080a09] flex flex-col justify-between p-6 font-mono text-xs overflow-hidden">
          <canvas
            ref={matrixCanvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          />
          <div className="relative z-20 space-y-1.5 text-xs text-[#8a928f] pointer-events-none opacity-90 select-none">
            <div className="text-[#c6ff00] font-bold text-sm mb-3">
              // swapnil_patil.py · architecture runtime
            </div>
            {CODE_LINES.slice(0, 14).map((line, idx) => (
              <div
                key={idx}
                className={
                  line.startsWith('//') || line.startsWith('#')
                    ? 'text-[#4f5854]'
                    : line.includes('c6ff00') || line.includes('confidence')
                    ? 'text-[#c6ff00]'
                    : 'text-[#f2f4f3]'
                }
              >
                <span className="text-[#4f5854] select-none mr-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {line}
              </div>
            ))}
          </div>

          <div className="relative z-20 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#8a928f]">
            <span className="text-[#c6ff00]">// GLYPHFIELD ACTIVE</span>
            <span>60 FPS · WebGL Canvas</span>
          </div>
        </div>
      ) : (
        /* Photographic Portrait with Interactive Shaders */
        <>
          <picture>
            <source
              type="image/webp"
              srcSet={`${portrait400} 400w, ${portrait800} 800w, ${portraitFull} 1200w`}
              sizes="(max-width: 640px) 380px, (max-width: 1024px) 460px, 520px"
            />
            <img
              src={portraitFull}
              alt="Swapnil Patil — AI/ML Engineer, Computer Vision Developer & Product Designer"
              width={520}
              height={650}
              loading="eager"
              decoding="async"
              {...({ fetchpriority: 'high' } as any)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </picture>

          {/* Vignette & Atmospheric Shadows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 40%, transparent 45%, rgba(12, 14, 13, 0.4) 75%, rgba(12, 14, 13, 0.9) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0e0d] via-[#0c0e0d]/70 to-transparent pointer-events-none" />

          {/* Hairline Rim Lighting */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent pointer-events-none" />

          {/* Interactive Canvas Overlay (Reticle & Glowing Cyber Particles) */}
          {!reducedMotion && !isTouchDevice && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            />
          )}

          {/* Helper Interaction Hint */}
          {!reducedMotion && !isTouchDevice && (
            <div
              className={`absolute bottom-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono backdrop-blur-md border transition-all duration-300 ${
                isHovered
                  ? 'bg-[#c6ff00]/15 border-[#c6ff00]/40 text-[#c6ff00]'
                  : 'bg-[#111413]/70 border-white/[0.08] text-[#8a928f]'
              }`}
            >
              <SparklesIcon size={12} className={isHovered ? 'animate-pulse text-[#c6ff00]' : 'text-[#8a928f]'} />
              <span>Hover portrait to interact</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
