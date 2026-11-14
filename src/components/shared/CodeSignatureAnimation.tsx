import React, { useState, useRef } from 'react';
import { TerminalIcon, CheckIcon, CopyIcon } from '@/components/icons';

interface ThemePreset {
  id: string;
  name: string;
  ink: string;
  ink2: string;
  ink3: string;
}

const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk (#FF4FD8 / #4FF8FF)',
    ink: '#f2f4f3',
    ink2: '#FF4FD8',
    ink3: '#4FF8FF',
  },
  {
    id: 'electric-lime',
    name: 'Electric Lime (#c6ff00 / #4FF8FF)',
    ink: '#f2f4f3',
    ink2: '#c6ff00',
    ink3: '#4FF8FF',
  },
  {
    id: 'matrix',
    name: 'Matrix (#00ff66 / #c6ff00)',
    ink: '#f2f4f3',
    ink2: '#00ff66',
    ink3: '#c6ff00',
  },
];

const TARGET_TEXT = 'SWAPNIL PATIL';
const CODE_GLYPHS = '<>{}[];:=+-_/\\*~#!?0101XYZ';

export const CodeSignatureAnimation: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(THEME_PRESETS[0]);
  const [mode, setMode] = useState<'cipher-loop' | 'interactive'>('cipher-loop');
  const [displayText, setDisplayText] = useState(TARGET_TEXT);
  const [isScrambling, setIsScrambling] = useState(false);
  const [isCodeViewOpen, setIsCodeViewOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [activeCharIndex, setActiveCharIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger manual cyber matrix scramble animation
  const runCodeAnimation = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const totalSteps = TARGET_TEXT.length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        TARGET_TEXT.split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < Math.floor(iteration / 3)) {
              return TARGET_TEXT[index];
            }
            return CODE_GLYPHS[Math.floor(Math.random() * CODE_GLYPHS.length)];
          })
          .join('')
      );

      iteration++;
      if (iteration >= totalSteps) {
        setDisplayText(TARGET_TEXT);
        setIsScrambling(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 32);
  };

  // Hover single char scramble in interactive mode
  const handleCharHover = (index: number) => {
    if (isScrambling) return;
    setActiveCharIndex(index);

    let count = 0;
    const charTimer = setInterval(() => {
      setDisplayText((prev) => {
        const chars = prev.split('');
        if (count >= 5) {
          chars[index] = TARGET_TEXT[index];
          clearInterval(charTimer);
          return chars.join('');
        }
        chars[index] = CODE_GLYPHS[Math.floor(Math.random() * CODE_GLYPHS.length)];
        return chars.join('');
      });
      count++;
    }, 35);
  };

  const copyCodeSnippet = () => {
    const snippet = `/* 10 Cipher for SWAPNIL PATIL */
:root {
  --ink: ${activeTheme.ink};
  --ink-2: ${activeTheme.ink2};
  --ink-3: ${activeTheme.ink3};
}

<!-- Markup: <div class="fx-decoder-swapnil" role="img" aria-label="SWAPNIL PATIL"></div> -->`;

    navigator.clipboard.writeText(snippet);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full pt-10 pb-6 my-4 select-none overflow-hidden"
      style={
        {
          '--ink': activeTheme.ink,
          '--ink-2': activeTheme.ink2,
          '--ink-3': activeTheme.ink3,
        } as React.CSSProperties
      }
    >
      {/* High-Tech Metadata & Controls Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 px-4 max-w-5xl mx-auto font-mono text-xs">
        {/* Left: Telemetry & Mini Decoder Widget */}
        <div className="flex flex-wrap items-center gap-3 text-[#8a928f]">
          <div className="flex items-center gap-2">
            <TerminalIcon size={14} className="text-[#c6ff00]" />
            <span>// 10.CIPHER.DECODER</span>
          </div>
          <span className="text-[#4f5854]">·</span>
          {/* Mini 28px fx-decoder from user specification */}
          <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
            <span className="text-[10px] text-[#4f5854]">SAMPLE:</span>
            <div className="fx-decoder text-xs" role="img" aria-label="DECODER" />
          </div>
        </div>

        {/* Right: Color Scheme Switcher & Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Theme Color Selector */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
            {THEME_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setActiveTheme(preset)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all flex items-center gap-1.5 ${activeTheme.id === preset.id
                    ? 'bg-white/[0.1] text-white font-medium shadow-sm'
                    : 'text-[#8a928f] hover:text-white'
                  }`}
                title={preset.name}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: preset.ink2 }}
                />
                <span className="hidden sm:inline">{preset.id}</span>
              </button>
            ))}
          </div>

          {/* Mode Switcher: Cipher Loop vs Interactive */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setMode('cipher-loop')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all ${mode === 'cipher-loop'
                  ? 'bg-[#c6ff00]/20 border border-[#c6ff00]/50 text-[#c6ff00]'
                  : 'text-[#8a928f] hover:text-white'
                }`}
            >
              Cipher Loop
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('interactive');
                runCodeAnimation();
              }}
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all ${mode === 'interactive'
                  ? 'bg-[#c6ff00]/20 border border-[#c6ff00]/50 text-[#c6ff00]'
                  : 'text-[#8a928f] hover:text-white'
                }`}
            >
              Interactive
            </button>
          </div>

          {/* Toggle Interactive Code View */}
          <button
            type="button"
            onClick={() => setIsCodeViewOpen((prev) => !prev)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-mono transition-all ${isCodeViewOpen
                ? 'bg-[#c6ff00]/15 border-[#c6ff00] text-[#c6ff00]'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.1] text-[#8a928f] hover:text-white'
              }`}
          >
            <span>{'< />'}</span>
            <span>{isCodeViewOpen ? 'Close Code' : 'CSS Tokens'}</span>
          </button>
        </div>
      </div>

      {/* Main Massive Cipher Animation Display */}
      <div className="relative text-center group cursor-pointer py-4 flex flex-col items-center justify-center">
        {/* Subtle Ambient Backlight Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-700">
          <div
            className="w-3/4 h-28 blur-[110px] rounded-full transition-colors duration-500"
            style={{ backgroundColor: activeTheme.ink2 }}
          />
        </div>

        {/* Code Opening Tag */}
        <div className="text-xs sm:text-sm font-mono text-[#c6ff00]/60 mb-3 tracking-widest">
          &lt;decoder id=&quot;swapnil-patil&quot; theme=&quot;{activeTheme.id}&quot;&gt;
        </div>

        {/* Render Cipher Decoder based on Mode */}
        {mode === 'cipher-loop' ? (
          /* User's Exact 10-Cipher Animation for SWAPNIL PATIL */
          <div
            className="fx-decoder-swapnil transform group-hover:scale-[1.02] transition-transform duration-300"
            role="img"
            aria-label="SWAPNIL PATIL"
          />
        ) : (
          /* Interactive Hover / Click Matrix Scramble */
          <h2
            className="font-display font-black text-[11.5vw] leading-none tracking-tighter text-white/[0.08] group-hover:text-white/[0.18] transition-all duration-300 whitespace-nowrap drop-shadow-sm flex items-center justify-center gap-[0.05em]"
            aria-label="Swapnil Patil"
            onClick={runCodeAnimation}
          >
            {displayText.split('').map((char, idx) => (
              <span
                key={idx}
                onMouseEnter={() => handleCharHover(idx)}
                className={`inline-block transition-all duration-150 ${isScrambling
                    ? 'scale-105'
                    : activeCharIndex === idx
                      ? 'scale-110'
                      : 'hover:scale-105'
                  }`}
                style={{
                  color:
                    isScrambling || activeCharIndex === idx
                      ? activeTheme.ink2
                      : undefined,
                  textShadow:
                    isScrambling || activeCharIndex === idx
                      ? `0 0 20px ${activeTheme.ink2}`
                      : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        )}

        {/* Code Closing Tag */}
        <div className="text-xs sm:text-sm font-mono text-[#c6ff00]/60 mt-3 tracking-widest">
          &lt;/decoder&gt;
        </div>
      </div>

      {/* Expandable CSS Tokens & Source Code Block */}
      {isCodeViewOpen && (
        <div className="mt-8 max-w-2xl mx-auto rounded-xl bg-[#0e1210] border border-[#c6ff00]/30 shadow-2xl p-4 sm:p-6 font-mono text-xs text-[#d4d8d6] animate-fadeIn relative">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-white/50 text-[11px]">cipher-decoder.css</span>
            </div>

            <button
              type="button"
              onClick={copyCodeSnippet}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.05] hover:bg-[#c6ff00] hover:text-black border border-white/[0.1] text-xs transition-colors"
            >
              {hasCopied ? (
                <>
                  <CheckIcon size={12} className="text-black" />
                  <span className="font-semibold text-black">Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon size={12} />
                  <span>Copy CSS</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto leading-relaxed text-[11px] sm:text-xs">
            <code>
              <span className="text-[#8a928f]">{`/* Colour tokens — override to re-skin the effect: */`}</span>{'\n'}
              <span className="text-purple-400">:root</span> &#123;{'\n'}
              {'  '}<span className="text-blue-400">--ink</span>: <span className="text-emerald-300">{activeTheme.ink}</span>;{'\n'}
              {'  '}<span className="text-blue-400">--ink-2</span>: <span className="text-emerald-300">{activeTheme.ink2}</span>;{'\n'}
              {'  '}<span className="text-blue-400">--ink-3</span>: <span className="text-emerald-300">{activeTheme.ink3}</span>;{'\n'}
              &#125;{'\n\n'}
              <span className="text-[#8a928f]">{`/* 10 Cipher Decoder for SWAPNIL PATIL */`}</span>{'\n'}
              <span className="text-purple-400">.fx-decoder-swapnil</span> &#123;{'\n'}
              {'  '}<span className="text-blue-400">font</span>: 800 clamp(2.2rem, 7.8vw, 6.75rem)/1.1 &quot;JetBrains Mono&quot;, monospace;{'\n'}
              {'  '}<span className="text-blue-400">letter-spacing</span>: .08em;{'\n'}
              {'  '}<span className="text-blue-400">color</span>: <span className="text-yellow-300">var(--ink-3)</span>;{'\n'}
              &#125;{'\n'}
              <span className="text-purple-400">.fx-decoder-swapnil::after</span> &#123;{'\n'}
              {'  '}<span className="text-blue-400">content</span>: &quot;▓K#R1&amp;Q ▒4%X@!&quot;;{'\n'}
              {'  '}<span className="text-blue-400">animation</span>: fx-decoder-swapnil 4s steps(1) infinite;{'\n'}
              &#125;{'\n\n'}
              <span className="text-[#8a928f]">{`<!-- Markup: <div class="fx-decoder-swapnil" role="img" aria-label="SWAPNIL PATIL"></div> -->`}</span>
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};
