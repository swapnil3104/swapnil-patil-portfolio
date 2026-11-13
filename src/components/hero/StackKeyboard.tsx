import React, { useState } from 'react';
import { Container } from '@/components/layout';

interface KeycapData {
  id: string;
  name: string;
  category: 'Languages' | 'Frameworks' | 'Vision & AI' | 'Tooling & Web';
  experience: string;
  frequency: string;
  role: string;
  deployedIn: string[];
  philosophy: string;
}

const STACK_DATA: KeycapData[] = [
  // Languages
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    experience: '4+ Years',
    frequency: 'Daily Production',
    role: 'Primary Language for AI/ML, Computer Vision & Backends',
    deployedIn: ['ISLR Studio', 'DrishtiDrive AI', 'RoadGuard AI', 'FastAPI Microservices'],
    philosophy: 'Clean vectorization with NumPy, neural modeling in PyTorch, and asynchronous API serving.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'Strict Type-Safe Frontend & Node.js Tooling',
    deployedIn: ['Swapnil Portfolio', 'Client Web Portals', 'Spark', 'Student-X'],
    philosophy: 'Zero runtime type errors, clean domain interfaces, and predictable component architecture.',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Languages',
    experience: '3+ Years',
    frequency: 'Weekly',
    role: 'Relational Database Queries & Schema Architecture',
    deployedIn: ['Face Attendance System', 'Client E-Commerce DBs', 'PostgreSQL'],
    philosophy: 'ACID-compliant indexing, query plan optimization, and clean migrations.',
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    experience: '2+ Years',
    frequency: 'Research & Systems',
    role: 'Data Structures, Algorithmic Theory & Low-Level Routines',
    deployedIn: ['ADCET Algorithms Coursework', 'Competitive Programming'],
    philosophy: 'Algorithmic efficiency, manual memory comprehension, and time-complexity optimization.',
  },

  // Frameworks
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'Frameworks',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'Deep Learning & Neural Network Architecture',
    deployedIn: ['Deep Learning Journey', 'DrishtiDrive AI', 'Self-Care AI'],
    philosophy: 'Dynamic computational graphs, custom autograd loss functions, and model weights optimization.',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'Frameworks',
    experience: '3+ Years',
    frequency: 'Production',
    role: 'CNN Training, Sequence Classification & Keras Pipelines',
    deployedIn: ['ISLR Studio', 'Traffic Sign Recognition'],
    philosophy: 'Robust data pipeline mapping, model checkpointing, and edge quantization.',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frameworks',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'Interactive Component Systems & Reactive Web UIs',
    deployedIn: ['Commercial Client Sites', '3D Runner Game', 'Portfolio'],
    philosophy: 'Declarative state machines, zero-layout-shift render cycles, and custom performance hooks.',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Frameworks',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'High-Throughput Asynchronous REST & Inference APIs',
    deployedIn: ['RoadGuard AI', 'RAG Pipelines', 'Vision Endpoints'],
    philosophy: 'Asynchronous event loops, Pydantic type validation, and automatic OpenAPI documentation.',
  },

  // Vision & AI
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'Vision & AI',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'Spatial Filtering, Contours & Image Processing Pipelines',
    deployedIn: ['VisionMeasure', 'Drowsiness Detection', 'Face Recognition'],
    philosophy: 'Matrix transformations, morphological operations, and real-time video buffer handling.',
  },
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    category: 'Vision & AI',
    experience: '2+ Years',
    frequency: 'Production',
    role: 'Edge 3D Hand, Pose & Facial Landmark Tracking',
    deployedIn: ['ISLR Studio', 'Gesture Interactive UIs'],
    philosophy: 'Coordinate-space 3D geometry extracting 21 keypoints per hand at 30+ FPS on CPU.',
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'Vision & AI',
    experience: '2+ Years',
    frequency: 'Active R&D',
    role: 'RAG Retrieval, Vector Embeddings & Agent Tool Calling',
    deployedIn: ['RAG-Engineering', 'MCP Server Implementations'],
    philosophy: 'Grounding LLMs with hybrid semantic vector indexing and verifiable context sources.',
  },
  {
    id: 'yolo',
    name: 'YOLOv8',
    category: 'Vision & AI',
    experience: '2+ Years',
    frequency: 'Production',
    role: 'Real-Time Object Detection & Spatial Zoning',
    deployedIn: ['RoadGuard AI Potholes', 'YOLO26 Restaurant Occupancy'],
    philosophy: 'Single-stage bounding-box regression, anchor-free detection, and high-speed edge inferencing.',
  },

  // Tooling & Web
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tooling & Web',
    experience: '2+ Years',
    frequency: 'Production',
    role: 'Containerization, Multi-Stage Builds & Reproducibility',
    deployedIn: ['FastAPI Backend Deployments', 'ML Evaluation Sandboxes'],
    philosophy: 'Immutable application runtimes, lightweight Alpine bases, and zero environment drift.',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tooling & Web',
    experience: '4+ Years',
    frequency: 'Daily Production',
    role: 'Version Control, Atomic Commits & Branch Workflows',
    deployedIn: ['12+ GitHub Repos', 'Commercial Client Deliveries'],
    philosophy: 'Conventional commits, feature branching, rebase workflows, and clean commit history.',
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: 'Tooling & Web',
    experience: '2+ Years',
    frequency: 'Production',
    role: 'WebGL 3D Scene Graphs, Shaders & Canvas Rendering',
    deployedIn: ['3D Car Running Game', 'Interactive Shaders'],
    philosophy: 'Instanced geometries, 60 FPS requestAnimationFrame loops, and procedural shaders.',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tooling & Web',
    experience: '3+ Years',
    frequency: 'Daily Production',
    role: 'Atomic Design Systems, Autolayout & Interactive Prototypes',
    deployedIn: ['HousTrack', 'GlowVita Salon', 'Melodies Web', 'FlyMitra'],
    philosophy: 'Design tokens paired directly with TailwindCSS code, responsive frames, and WCAG a11y.',
  },
];

export const StackKeyboard: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<KeycapData>(STACK_DATA[0]);

  return (
    <section
      id="stack"
      aria-label="The Engineering Tech Stack Keyboard"
      className="w-full bg-[#0c0e0d] py-16 sm:py-20 lg:py-24 border-t border-white/[0.08]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="mono-eyebrow mb-3">
              <span className="text-[#c6ff00]">//</span>
              <span className="text-[#8a928f]">03 The Stack &middot; Production Keycaps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#f2f4f3] tracking-tight leading-[1.05]">
              Physical keycaps of daily production.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#8a928f] leading-relaxed">
              Click or hover any key to inspect real-world deployment telemetry, daily usage frequency, and architectural philosophy.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8a928f]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
            <span>Interactive 16-Key Matrix</span>
          </div>
        </div>

        {/* 2-Column Grid: Physical Keyboard Matrix on Left, Real-Time Inspector Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 16-Keycap Physical Keyboard Deck */}
          <div className="lg:col-span-7 bg-[#131715] p-5 sm:p-7 rounded-3xl border border-white/[0.12] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] text-xs font-mono text-[#8a928f]">
              <span className="text-[#c6ff00] font-semibold">// MECHANICAL DECK · 16 KEYS</span>
              <span>4 CATEGORIES</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {STACK_DATA.map((item) => {
                const isSelected = selectedKey.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedKey(item)}
                    onMouseEnter={() => setSelectedKey(item)}
                    className={`relative p-3.5 sm:p-4 rounded-xl text-left font-mono transition-all duration-150 flex flex-col justify-between min-h-[96px] ${
                      isSelected
                        ? 'bg-[#c6ff00] text-black shadow-[0_4px_0_#9bc200,0_0_24px_rgba(198,255,0,0.35)] translate-y-0.5'
                        : 'bg-[#181c1a] text-[#f2f4f3] border border-white/[0.08] hover:border-[#c6ff00]/40 hover:bg-[#202623] shadow-[0_4px_0_#0a0c0b]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-black/70' : 'text-[#8a928f]'}`}>
                        {item.category.slice(0, 4)}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                      )}
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg tracking-tight mt-2">
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-Time Inspector Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#121614] p-6 sm:p-8 border border-[#c6ff00]/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <span className="text-[#c6ff00] font-semibold">// TELEMETRY INSPECTOR</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#c6ff00]/15 text-[#c6ff00] font-bold text-[11px]">
                  {selectedKey.frequency}
                </span>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#8a928f] uppercase tracking-wider mb-1">
                  Technology &middot; {selectedKey.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#f2f4f3] tracking-tight">
                  {selectedKey.name}
                </h3>
              </div>

              <div>
                <div className="text-xs font-mono text-[#8a928f] mb-1.5 font-semibold">
                  // Architectural Role
                </div>
                <p className="text-sm text-[#f2f4f3] leading-relaxed">
                  {selectedKey.role}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-[#8a928f] mb-2 font-semibold">
                  // Deployed in Projects
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedKey.deployedIn.map((proj, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#f2f4f3]"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-[#8a928f] mb-1">
                  // Engineering Philosophy
                </div>
                <p className="text-xs text-[#8a928f] leading-normal italic">
                  "{selectedKey.philosophy}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

