import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  symbol: string;
  size: number;
  opacity: number;
  rotation: number;
  rotSpeed: number;
}

const CODE_SYMBOLS = [
  '</>',
  '{ ... }',
  'λ => x',
  'import cv2',
  'tensor.cuda()',
  'model.eval()',
  '010101',
  'def forward():',
  'async/await',
  'git push origin',
  '// system_ok',
  'O(1)',
  'ReLU(x)',
  'JSON.parse()',
  'np.array()',
  'const [state]',
];

export const CodeParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initialize particles based on screen width
    const particleCount = Math.min(22, Math.floor(width / 65));
    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speedY: -0.15 - Math.random() * 0.25,
      speedX: (Math.random() - 0.5) * 0.15,
      symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
      size: Math.floor(10 + Math.random() * 4),
      opacity: 0.04 + Math.random() * 0.06,
      rotation: (Math.random() - 0.5) * 0.2,
      rotSpeed: (Math.random() - 0.5) * 0.002,
    }));

    // Listen to scroll to add subtle parallax drift
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Damp scroll velocity
      scrollVelocity *= 0.92;

      particles.forEach((p) => {
        p.y += p.speedY - scrollVelocity * 0.4;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        // Wrap around screen boundaries
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        } else if (p.y > height + 30) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -40) p.x = width + 30;
        if (p.x > width + 40) p.x = -30;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.fillStyle = `rgba(198, 255, 0, ${p.opacity})`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
      aria-hidden="true"
    />
  );
};

