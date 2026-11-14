import React, { useEffect, useState, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const GreenCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'clickable' | 'text'>('default');
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Smooth lerp coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);
  const hoverTypeRef = useRef<'default' | 'clickable' | 'text'>('default');

  const pointRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine cursor pointer
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }

      // Detect hovered element type
      const target = e.target as HTMLElement | null;
      if (target) {
        const isTextInput = target.closest('input[type="text"], input[type="email"], textarea');
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .clickable, .tech-card, .sh-editorial-card, .interactive'
        );

        let nextHover: 'default' | 'clickable' | 'text' = 'default';
        if (isTextInput) {
          nextHover = 'text';
        } else if (isInteractive) {
          nextHover = 'clickable';
        }

        if (hoverTypeRef.current !== nextHover) {
          hoverTypeRef.current = nextHover;
          setHoverType(nextHover);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 650);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // High performance animation loop for trailing ring
    const renderLoop = () => {
      if (isVisibleRef.current) {
        // Lerp ring towards mouse position
        const ease = 0.22;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

        if (pointRef.current) {
          pointRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Follower Ring with Dynamic State Interpolation */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,border-color,background-color] duration-200 ease-out flex items-center justify-center ${
          hoverType === 'clickable'
            ? 'w-12 h-12 border border-[#c6ff00] bg-[#c6ff00]/10 shadow-[0_0_24px_rgba(198,255,0,0.35)] backdrop-blur-[1px]'
            : hoverType === 'text'
            ? 'w-4 h-8 rounded-sm border border-[#c6ff00]/60 bg-[#c6ff00]/15'
            : 'w-8 h-8 border border-[#c6ff00]/40 bg-[#c6ff00]/[0.02]'
        } ${isClicking ? 'scale-75 border-[#c6ff00] bg-[#c6ff00]/30' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {/* Subtle crosshair brackets when hovering interactive elements */}
        {hoverType === 'clickable' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]/40 animate-ping" />
          </div>
        )}
      </div>

      {/* Main Laser Green Center Point (Replaces the cursor arrow) */}
      <div
        ref={pointRef}
        className={`fixed top-0 left-0 rounded-full bg-[#c6ff00] transition-[width,height,transform] duration-75 shadow-[0_0_12px_#c6ff00,0_0_20px_rgba(198,255,0,0.7)] ${
          isClicking
            ? 'w-1.5 h-1.5 scale-90'
            : hoverType === 'clickable'
            ? 'w-2 h-2 scale-125'
            : hoverType === 'text'
            ? 'w-1 h-4 rounded-none'
            : 'w-2 h-2'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Shockwave Ripples on Click */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed pointer-events-none rounded-full border border-[#c6ff00] animate-cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
