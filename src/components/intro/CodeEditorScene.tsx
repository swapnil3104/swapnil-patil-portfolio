import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Code,
  Terminal as TerminalIcon,
  Play,
  CheckCircle2,
  FolderTree,
  ChevronDown,
  Layers,
  Bot,
  Volume2,
  VolumeX,
  FastForward,
} from 'lucide-react';
import { CODE_FILES, TERMINAL_ENTRIES } from './types';
import { FloatingTechEcosystem } from './FloatingTechEcosystem';
import { ProjectModuleCards } from './ProjectModuleCards';
import { DigitalPortalScene } from './DigitalPortalScene';
import {
  playTypingSound,
  playCommandSuccess,
  playButtonClick,
} from './soundEffects';

interface CodeEditorSceneProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onComplete: () => void;
  onSkip: () => void;
}

// Lightweight syntax highlighter for JSX and Python matching portfolio palette
function renderSyntaxHighlightedLine(line: string) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();
  // Full-line comments
  if (trimmed.startsWith('//') || trimmed.startsWith('#')) {
    return <span className="text-[#637069] italic">{line}</span>;
  }

  // Tokenization matching strings, keywords, classes, numbers, and symbols
  const regex = /(".*?"|'.*?'|\/\/.*$|#.*$|[a-zA-Z_$][a-zA-Z0-9_$]*|\d+(?:\.\d+)?|[{}()[\];,=+\-*/<>!&|:.]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const keywords = new Set([
    'import', 'from', 'export', 'const', 'let', 'var', 'return', 'function',
    'def', 'class', 'while', 'for', 'in', 'if', 'else', 'elif', 'break',
    'as', 'with', 'async', 'await', 'self', 'true', 'false', 'True', 'False',
  ]);

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.substring(lastIndex, match.index));
    }

    const token = match[0];
    const nextChar = line[match.index + token.length];

    if (token.startsWith('"') || token.startsWith("'")) {
      parts.push(<span key={match.index} className="text-[#c6ff00]">{token}</span>);
    } else if (token.startsWith('//') || token.startsWith('#')) {
      parts.push(<span key={match.index} className="text-[#637069] italic">{token}</span>);
    } else if (keywords.has(token)) {
      parts.push(<span key={match.index} className="text-[#d4ff00] font-semibold">{token}</span>);
    } else if (/^\d+(?:\.\d+)?$/.test(token)) {
      parts.push(<span key={match.index} className="text-[#fde047]">{token}</span>);
    } else if (/^[A-Z][a-zA-Z0-9_]*$/.test(token)) {
      parts.push(<span key={match.index} className="text-[#ffffff] font-medium">{token}</span>);
    } else if (nextChar === '(') {
      parts.push(<span key={match.index} className="text-[#e2e8f0]">{token}</span>);
    } else {
      parts.push(<span key={match.index} className="text-[#8a928f]">{token}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.substring(lastIndex));
  }

  return <>{parts}</>;
}

export const CodeEditorScene: React.FC<CodeEditorSceneProps> = ({
  isMuted,
  onToggleMute,
  onComplete,
  onSkip,
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [visibleLinesCount, setVisibleLinesCount] = useState<number>(1);
  const [terminalLog, setTerminalLog] = useState<{ command: string; output: string[] }[]>([]);
  const [unlockedModules, setUnlockedModules] = useState<string[]>(['vision']);
  const [showPortal, setShowPortal] = useState<boolean>(false);

  const editorRootRef = useRef<HTMLDivElement>(null);
  const terminalScrollRef = useRef<HTMLDivElement>(null);
  const codePaneScrollRef = useRef<HTMLDivElement>(null);

  const activeFile = CODE_FILES[activeFileIndex] || CODE_FILES[0];

  // ----------------------------------------------------
  // SEQUENTIAL AUTOMATED TYPING & PROJECT DISCOVERY
  // ----------------------------------------------------
  useEffect(() => {
    let fileIdx = 0;
    let lineIdx = 1;
    let terminalEntryIdx = 0;
    let isCancelled = false;

    if (TERMINAL_ENTRIES[0]) {
      setTerminalLog([TERMINAL_ENTRIES[0]]);
    }

    const typeNextLine = () => {
      if (isCancelled) return;

      const currentFile = CODE_FILES[fileIdx];
      if (!currentFile) {
        triggerPortalTransition();
        return;
      }

      if (lineIdx < currentFile.codeLines.length) {
        lineIdx += 1;
        setVisibleLinesCount(lineIdx);
        playTypingSound(isMuted);

        if (codePaneScrollRef.current) {
          codePaneScrollRef.current.scrollTop = codePaneScrollRef.current.scrollHeight;
        }

        const delay = Math.random() * 40 + 35;
        setTimeout(typeNextLine, delay);
      } else {
        // Finished typing current file -> Unlock module
        setUnlockedModules((prev) => {
          if (!prev.includes(currentFile.id)) {
            return [...prev, currentFile.id];
          }
          return prev;
        });

        // Trigger corresponding terminal build output
        terminalEntryIdx += 1;
        if (terminalEntryIdx < TERMINAL_ENTRIES.length) {
          const nextEntry = TERMINAL_ENTRIES[terminalEntryIdx];
          setTerminalLog((prev) => [...prev, nextEntry]);
          playCommandSuccess(isMuted);
          if (terminalScrollRef.current) {
            terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
          }
        }

        // Pause to appreciate code, then switch to next file
        setTimeout(() => {
          if (isCancelled) return;
          fileIdx += 1;
          if (fileIdx < CODE_FILES.length) {
            setActiveFileIndex(fileIdx);
            lineIdx = 1;
            setVisibleLinesCount(1);
            setTimeout(typeNextLine, 280);
          } else {
            // All files completed -> Trigger Digital Portal Transition
            triggerPortalTransition();
          }
        }, 950);
      }
    };

    const initialTimer = setTimeout(typeNextLine, 350);

    return () => {
      isCancelled = true;
      clearTimeout(initialTimer);
    };
  }, [isMuted]);

  // ----------------------------------------------------
  // CREATIVE PORTAL TRANSITION TRIGGER
  // ----------------------------------------------------
  const triggerPortalTransition = () => {
    playCommandSuccess(isMuted);

    // Zoom and expand editor into portal horizon
    if (editorRootRef.current) {
      gsap.to(editorRootRef.current, {
        scale: 1.08,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          setShowPortal(true);
        },
      });
    } else {
      setShowPortal(true);
    }
  };

  if (showPortal) {
    return <DigitalPortalScene onComplete={onComplete} />;
  }

  return (
    <div
      ref={editorRootRef}
      role="region"
      aria-label="Developer Workspace Code Editor"
      className="fixed inset-0 z-50 flex flex-col bg-[#0c0e0d] text-[#f2f4f3] font-mono overflow-hidden select-none selection:bg-[#c6ff00]/25 selection:text-black"
    >
      {/* 4. Floating Technology Ecosystem (Overlay Network) */}
      <FloatingTechEcosystem />

      {/* ========================================================
          1. VS CODE WINDOW TITLE BAR
         ======================================================== */}
      <div className="h-9 sm:h-10 bg-[#080a09] border-b border-white/[0.08] flex items-center justify-between px-3 sm:px-4 z-30 select-none flex-shrink-0">
        {/* Left: Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]/90 flex items-center justify-center cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#eab308]/90 flex items-center justify-center cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#22c55e]/90 flex items-center justify-center cursor-pointer" />

          <span className="ml-3 text-[11px] font-mono text-[#8a928f] hidden md:inline truncate">
            swapnil-patil-portfolio — Visual Studio Code [Creative Studio]
          </span>
        </div>

        {/* Center: Command Palette Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8a928f] max-w-sm w-full justify-center">
          <span className="text-[#8a928f]">workspace</span>
          <span className="text-[#c6ff00]">&gt;</span>
          <span className="text-[#f2f4f3] font-medium truncate">{activeFile.path}</span>
        </div>

        {/* Right: Sound toggle and Skip Intro */}
        <div className="flex items-center gap-2">
          {/* Audio toggle */}
          <button
            type="button"
            onClick={() => {
              playButtonClick(isMuted);
              onToggleMute();
            }}
            aria-label={isMuted ? 'Unmute coding sound' : 'Mute coding sound'}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#8a928f] hover:text-[#f2f4f3] text-xs font-mono transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#8a928f]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#c6ff00]" />
            )}
            <span className="hidden sm:inline text-[11px]">
              {isMuted ? 'MUTED' : 'AUDIO ON'}
            </span>
          </button>

          {/* Skip Intro */}
          <button
            type="button"
            onClick={onSkip}
            aria-label="Skip to portfolio"
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black font-semibold text-xs font-mono transition-all shadow-[0_0_12px_rgba(198,255,0,0.3)] hover:shadow-[0_0_20px_rgba(198,255,0,0.5)]"
          >
            <span>Skip to Portfolio</span>
            <FastForward className="w-3 h-3 text-black group-hover:translate-x-0.5 transition-transform" />
            <span className="hidden md:inline text-[10px] text-black/70 ml-0.5">[Esc]</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          2. MAIN WORKSPACE BODY (Sidebar + Editor + Terminal)
         ======================================================== */}
      <div className="flex-1 flex overflow-hidden relative z-20">
        {/* Activity Bar (Icon Strip on far left) */}
        <div className="w-10 sm:w-12 bg-[#080a09] border-r border-white/[0.06] flex flex-col items-center justify-between py-3 flex-shrink-0 z-20">
          <div className="flex flex-col items-center gap-4 text-[#8a928f]">
            <button
              type="button"
              className="text-[#c6ff00] p-1 rounded transition-colors relative"
              title="Explorer"
            >
              <FolderTree className="w-5 h-5 text-[#c6ff00]" />
              <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#c6ff00] rounded-r shadow-[0_0_8px_#c6ff00]" />
            </button>
            <button type="button" className="hover:text-white p-1 transition-colors" title="Source Control">
              <Code className="w-5 h-5" />
            </button>
            <button type="button" className="hover:text-white p-1 transition-colors" title="Run and Debug">
              <Play className="w-5 h-5" />
            </button>
            <button type="button" className="hover:text-white p-1 transition-colors" title="Extensions">
              <Layers className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[#8a928f] flex flex-col items-center gap-3">
            <Bot className="w-4 h-4 text-[#c6ff00] animate-pulse" />
          </div>
        </div>

        {/* Explorer Sidebar */}
        <div className="w-44 sm:w-60 bg-[#0c0e0d] border-r border-white/[0.06] flex-col hidden md:flex flex-shrink-0 z-10 text-xs font-mono select-none">
          <div className="px-3 py-2 text-[10px] tracking-wider text-[#8a928f] uppercase font-semibold flex items-center justify-between border-b border-white/[0.04]">
            <span>Explorer</span>
            <span className="text-[9px] text-[#c6ff00]">SWAPNIL-CORE</span>
          </div>

          <div className="p-2 space-y-1 flex-1 overflow-y-auto">
            <div className="flex items-center gap-1 text-[#f2f4f3] py-1 font-semibold text-[11px]">
              <ChevronDown className="w-3.5 h-3.5 text-[#8a928f]" />
              <span>PROJECT-SRC</span>
            </div>

            {/* Folder List with Files */}
            <div className="pl-3 space-y-0.5">
              {CODE_FILES.map((file, idx) => {
                const isActive = idx === activeFileIndex;
                const isDiscovered = unlockedModules.includes(file.id);

                return (
                  <button
                    key={file.id}
                    type="button"
                    onClick={() => {
                      playButtonClick(isMuted);
                      setActiveFileIndex(idx);
                      setVisibleLinesCount(file.codeLines.length);
                    }}
                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-left transition-colors text-[11px] ${
                      isActive
                        ? 'bg-[#18201a] text-[#c6ff00] font-medium border-l-2 border-[#c6ff00]'
                        : 'text-[#8a928f] hover:bg-white/[0.04] hover:text-[#f2f4f3]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span>{file.icon}</span>
                      <span className="truncate">{file.filename}</span>
                    </div>
                    {isDiscovered && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] shadow-[0_0_6px_#c6ff00]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer Info */}
          <div className="p-2.5 border-t border-white/[0.04] text-[10px] text-[#8a928f] flex items-center justify-between">
            <span>BRANCH: main*</span>
            <span className="text-[#c6ff00]">ONLINE</span>
          </div>
        </div>

        {/* ========================================================
            3. MAIN CODE EDITOR PANE
           ======================================================== */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#0a0c0b] relative">
          {/* Top File Tabs Bar */}
          <div className="flex items-center bg-[#080a09] border-b border-white/[0.06] overflow-x-auto no-scrollbar flex-shrink-0">
            {CODE_FILES.map((file, idx) => {
              const isActive = idx === activeFileIndex;
              return (
                <button
                  key={file.id}
                  type="button"
                  onClick={() => {
                    playButtonClick(isMuted);
                    setActiveFileIndex(idx);
                    setVisibleLinesCount(file.codeLines.length);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 border-r border-white/[0.06] text-xs font-mono transition-colors flex-shrink-0 relative ${
                    isActive
                      ? 'bg-[#0a0c0b] text-[#c6ff00] font-medium'
                      : 'text-[#8a928f] hover:bg-white/[0.03] hover:text-[#f2f4f3]'
                  }`}
                >
                  <span>{file.icon}</span>
                  <span>{file.filename}</span>
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#c6ff00] shadow-[0_0_8px_#c6ff00]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Breadcrumb strip */}
          <div className="px-4 py-1 bg-[#0a0c0b] border-b border-white/[0.04] text-[10.5px] font-mono text-[#8a928f] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-1.5 truncate">
              <span>swapnil-workspace</span>
              <span>&gt;</span>
              <span>{activeFile.path.split('/')[0]}</span>
              <span>&gt;</span>
              <span className="text-[#f2f4f3] font-medium">{activeFile.filename}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#c6ff00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
              <span>{activeFile.identityTag}</span>
            </div>
          </div>

          {/* Active Code Lines Editor Area */}
          <div
            ref={codePaneScrollRef}
            className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-[13px] leading-relaxed relative"
          >
            <div className="flex">
              {/* Line Numbers Gutter */}
              <div className="w-8 sm:w-10 flex flex-col text-right pr-3 select-none text-[#4f5854] font-mono flex-shrink-0">
                {activeFile.codeLines.slice(0, visibleLinesCount).map((_, i) => (
                  <span key={i} className="leading-relaxed">
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Code Text Content */}
              <div className="flex-1 pl-2 overflow-x-auto">
                {activeFile.codeLines.slice(0, visibleLinesCount).map((line, i) => (
                  <div key={i} className="leading-relaxed whitespace-pre font-mono">
                    {renderSyntaxHighlightedLine(line)}
                    {/* Blinking Cursor on current active line */}
                    {i === visibleLinesCount - 1 && (
                      <span className="inline-block w-2 h-4 bg-[#c6ff00] shadow-[0_0_8px_#c6ff00] align-middle ml-0.5 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Project Module Cards Reveal Drawer */}
          <div className="px-3 sm:px-4 py-2 bg-[#0c0e0d] border-t border-white/[0.08] flex-shrink-0">
            <ProjectModuleCards
              unlockedModules={unlockedModules}
              activeModuleId={activeFile.id}
            />
          </div>

          {/* Integrated VS Code Terminal Panel */}
          <div className="h-28 sm:h-36 bg-[#080a09] border-t border-white/[0.08] flex flex-col flex-shrink-0">
            {/* Terminal Header Tabs */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#0c0e0d] border-b border-white/[0.06] text-[10px] font-mono text-[#8a928f]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[#c6ff00] font-semibold border-b border-[#c6ff00] pb-0.5">
                  <TerminalIcon className="w-3 h-3 text-[#c6ff00]" />
                  TERMINAL
                </span>
                <span className="hover:text-[#f2f4f3] cursor-pointer">OUTPUT</span>
                <span className="hover:text-[#f2f4f3] cursor-pointer">PROBLEMS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8a928f]">bash</span>
                <span className="text-[#c6ff00] bg-[#c6ff00]/10 px-1.5 py-0.2 rounded border border-[#c6ff00]/20 font-semibold">
                  LIVE_EXEC
                </span>
              </div>
            </div>

            {/* Terminal Log Console */}
            <div
              ref={terminalScrollRef}
              className="flex-1 p-2 sm:p-2.5 overflow-y-auto font-mono text-[10px] sm:text-[11px] space-y-1.5 text-[#8a928f]"
            >
              {terminalLog.map((entry, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[#c6ff00] font-semibold flex items-center gap-1.5">
                    <span>{entry.command}</span>
                  </div>
                  {entry.output.map((out, outIdx) => (
                    <div key={outIdx} className="text-[#d4d8d6] pl-2">
                      {out}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* VS Code Bottom Status Bar */}
          <div className="h-5 sm:h-6 bg-[#080a09] border-t border-white/[0.08] flex items-center justify-between px-3 text-[9px] sm:text-[10px] font-mono text-[#8a928f] flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#c6ff00]">
                <CheckCircle2 className="w-3 h-3 text-[#c6ff00]" />
                <span>workspace: optimal</span>
              </span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">{activeFile.language.toUpperCase()}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={triggerPortalTransition}
                className="text-[#c6ff00] hover:text-[#d4ff00] underline font-semibold flex items-center gap-1"
              >
                <span>Enter Portal &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
