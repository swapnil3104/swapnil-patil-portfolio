export type IntroScene =
  | 'welcome'
  | 'powering-on'
  | 'booting'
  | 'zooming'
  | 'coding'
  | 'portal'
  | 'completed';

export interface BootStep {
  id: string;
  label: string;
  detail: string;
  durationMs: number;
}

// 2. Personalized Startup Sequence reflecting core engineering capabilities
export const BOOT_STEPS: BootStep[] = [
  {
    id: 'step-1',
    label: "Initializing Swapnil's Workspace...",
    detail: 'Kernel v6.8.0-sp, secure enclave & neural runtime',
    durationMs: 650,
  },
  {
    id: 'step-2',
    label: 'Loading Creative Studio...',
    detail: 'Design tokens, Bricolage typography, 3D viewport canvas',
    durationMs: 700,
  },
  {
    id: 'step-3',
    label: 'Loading AI/ML Environment...',
    detail: 'PyTorch, TensorFlow, OpenCV, MediaPipe, CUDA 12.4',
    durationMs: 700,
  },
  {
    id: 'step-4',
    label: 'Connecting Development Tools...',
    detail: 'Terminal emulator, debugger, GPU shaders & git origin',
    durationMs: 650,
  },
  {
    id: 'step-5',
    label: 'Preparing Engineering Modules...',
    detail: 'Computer Vision, Deep Learning, AI Agents, Full-Stack Architecture',
    durationMs: 750,
  },
  {
    id: 'step-6',
    label: 'Workspace Ready.',
    detail: 'Telemetry verified • All systems operational [100%]',
    durationMs: 500,
  },
];

export interface CodeFile {
  id: string;
  filename: string;
  path: string;
  language: 'jsx' | 'python';
  icon: string;
  identityTag: string;
  projectTag: string;
  codeLines: string[];
}

// 3. Code files representing general engineering domains and technical capabilities
export const CODE_FILES: CodeFile[] = [
  {
    id: 'vision',
    filename: 'computer_vision.py',
    path: 'vision/computer_vision.py',
    language: 'python',
    icon: '👁️',
    identityTag: 'Computer Vision & Spatial AI',
    projectTag: 'Computer Vision Systems',
    codeLines: [
      'import cv2',
      'import numpy as np',
      'import torch',
      '',
      '# Real-time multi-camera spatial perception & tracking pipeline',
      'class SpatialPerceptionPipeline:',
      '    def __init__(self, confidence_threshold=0.88):',
      '        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")',
      '        self.model = torch.hub.load("ultralytics/yolov5", "custom", path="weights/detector.pt")',
      '        self.model.to(self.device).eval()',
      '',
      '    def process_frame(self, frame_bgr):',
      '        # Convert color space and run GPU-accelerated inference',
      '        frame_rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)',
      '        results = self.model(frame_rgb)',
      '        detections = results.xyxy[0].cpu().numpy()',
      '        ',
      '        for *box, conf, cls_id in detections:',
      '            if conf >= 0.88:',
      '                x1, y1, x2, y2 = map(int, box)',
      '                cv2.rectangle(frame_bgr, (x1, y1), (x2, y2), (198, 255, 0), 2)',
      '        return frame_bgr',
      '',
      '# Stream telemetry initialized: 60 FPS live spatial processing',
    ],
  },
  {
    id: 'deeplearning',
    filename: 'neural_networks.py',
    path: 'models/neural_networks.py',
    language: 'python',
    icon: '🧠',
    identityTag: 'Deep Learning & Neural Systems',
    projectTag: 'Deep Learning Architecture',
    codeLines: [
      'import torch',
      'import torch.nn as nn',
      'import torch.nn.functional as F',
      '',
      '# Multi-modal neural vision & spatial representation network',
      'class MultiModalNeuralCore(nn.Module):',
      '    def __init__(self, in_channels=3, embedding_dim=512, num_classes=10):',
      '        super().__init__()',
      '        self.backbone = nn.Sequential(',
      '            nn.Conv2d(in_channels, 64, kernel_size=3, padding=1),',
      '            nn.BatchNorm2d(64),',
      '            nn.GELU(),',
      '            nn.MaxPool2d(2, 2),',
      '            nn.Conv2d(64, 128, kernel_size=3, padding=1),',
      '            nn.BatchNorm2d(128),',
      '            nn.GELU(),',
      '            nn.AdaptiveAvgPool2d((1, 1))',
      '        )',
      '        self.projection = nn.Linear(128, embedding_dim)',
      '        self.classifier = nn.Linear(embedding_dim, num_classes)',
      '',
      '    def forward(self, x):',
      '        feat = self.backbone(x).flatten(1)',
      '        latent = F.normalize(self.projection(feat), dim=-1)',
      '        return self.classifier(latent), latent',
    ],
  },
  {
    id: 'agents',
    filename: 'ai_agents.py',
    path: 'agents/ai_agents.py',
    language: 'python',
    icon: '⚡',
    identityTag: 'Autonomous AI Agents & RAG',
    projectTag: 'Autonomous AI Systems',
    codeLines: [
      'from langchain_core.prompts import ChatPromptTemplate',
      'from langchain_community.vectorstores import Chroma',
      'from langchain_openai import ChatOpenAI',
      'from langchain.agents import create_tool_calling_agent, AgentExecutor',
      '',
      '# Autonomous AI Agent with custom reasoning toolchains',
      'class AutonomousAgentOrchestrator:',
      '    def __init__(self, model_name="gpt-4o", temperature=0.1):',
      '        self.llm = ChatOpenAI(model=model_name, temperature=temperature)',
      '        self.vector_store = Chroma(persist_directory="./knowledge_vault")',
      '        self.retriever = self.vector_store.as_retriever(search_kwargs={"k": 5})',
      '',
      '    def build_workflow(self, tools_catalog):',
      '        prompt = ChatPromptTemplate.from_messages([',
      '            ("system", "You are an autonomous engineering reasoning agent."),',
      '            ("user", "{input}"),',
      '            ("placeholder", "{agent_scratchpad}"),',
      '        ])',
      '        agent = create_tool_calling_agent(self.llm, tools=tools_catalog, prompt=prompt)',
      '        return AgentExecutor(agent=agent, tools=tools_catalog, verbose=True)',
      '',
      '# Autonomous reasoning engine initialized and ready for dispatch',
    ],
  },
  {
    id: 'ml',
    filename: 'machine_learning.py',
    path: 'pipelines/machine_learning.py',
    language: 'python',
    icon: '📈',
    identityTag: 'Machine Learning & Predictive Modeling',
    projectTag: 'Machine Learning Pipelines',
    codeLines: [
      'import numpy as np',
      'import pandas as pd',
      'from sklearn.model_selection import train_test_split',
      'from sklearn.ensemble import GradientBoostingClassifier',
      'from sklearn.metrics import classification_report, roc_auc_score',
      '',
      '# High-performance predictive modeling pipeline',
      'def train_predictive_pipeline(dataset_path="data/features.parquet"):',
      '    df = pd.read_parquet(dataset_path)',
      '    X = df.drop(columns=["target"])',
      '    y = df["target"]',
      '    ',
      '    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)',
      '    classifier = GradientBoostingClassifier(n_estimators=300, learning_rate=0.05, max_depth=5)',
      '    classifier.fit(X_train, y_train)',
      '    ',
      '    predictions = classifier.predict(X_test)',
      '    accuracy = classifier.score(X_test, y_test)',
      '    print(f"Model converged • Accuracy: {accuracy * 100:.2f}% | ROC-AUC: 0.9982")',
      '    return classifier',
    ],
  },
  {
    id: 'fullstack',
    filename: 'fullstack_systems.tsx',
    path: 'src/fullstack_systems.tsx',
    language: 'jsx',
    icon: '⚛️',
    identityTag: 'Full Stack & Web Architecture',
    projectTag: 'Full-Stack Architecture',
    codeLines: [
      "import React, { useSyncExternalStore } from 'react';",
      "import { Hero, Work, Capabilities, About, Contact } from '@/components';",
      "import { useScrollReveal } from '@/hooks/useScrollReveal';",
      '',
      '// High-performance React 18+ Web & Architecture Platform',
      'export const FullStackPlatform: React.FC = () => {',
      '  useScrollReveal();',
      '',
      '  return (',
      '    <div className="portfolio-app bg-[#0c0e0d] text-[#f2f4f3] font-mono selection:bg-[#c6ff00]/25">',
      '      <Hero headline="AI/ML Engineer & Product Designer" location="Pune, India" />',
      '      <Work domains={["Computer Vision", "Deep Learning", "AI Agents", "Full Stack"]} />',
      '      <Capabilities performance="Sub-1s LCP • Zero Layout Shift • Composited GPU" />',
      '      <Contact direct="available for high-impact engineering" />',
      '    </div>',
      '  );',
      '};',
    ],
  },
];

export interface ProjectModule {
  id: string;
  name: string;
  category: string;
  metric: string;
  tech: string[];
  status: 'ACTIVE' | 'DEPLOYED' | 'COMPILED' | 'RESEARCH';
}

// 5. General Engineering Domains & Work Capabilities (No specific project names)
export const PROJECT_MODULES: ProjectModule[] = [
  {
    id: 'vision',
    name: 'Computer Vision & Spatial AI',
    category: 'Real-Time Perception & Object Tracking',
    metric: '60 FPS Live Camera Inference',
    tech: ['OpenCV', 'PyTorch', 'MediaPipe'],
    status: 'ACTIVE',
  },
  {
    id: 'deeplearning',
    name: 'Deep Learning & Neural Systems',
    category: 'Convolutional & Transformer Architectures',
    metric: 'Multi-Modal Tensor Embeddings',
    tech: ['PyTorch', 'TensorFlow', 'CUDA'],
    status: 'COMPILED',
  },
  {
    id: 'agents',
    name: 'Autonomous AI Agents & RAG',
    category: 'LLM Reasoning & Tool Orchestration',
    metric: 'Sub-second Vector Search',
    tech: ['LangChain', 'ChromaDB', 'APIs'],
    status: 'DEPLOYED',
  },
  {
    id: 'fullstack',
    name: 'Full Stack & Web Systems',
    category: 'Modern Web Architecture & Design Systems',
    metric: 'React 18 • TypeScript • Tailwind',
    tech: ['React', 'TypeScript', 'Vite'],
    status: 'ACTIVE',
  },
];

export interface TechEcosystemNode {
  id: string;
  name: string;
  category: string;
  badge: string;
  xPercent: number; // orbital relative coordinate
  yPercent: number;
}

// 4. Floating Technology Ecosystem
export const TECH_ECOSYSTEM: TechEcosystemNode[] = [
  { id: 'python', name: 'Python', category: 'Core Language', badge: '🐍', xPercent: 12, yPercent: 22 },
  { id: 'pytorch', name: 'PyTorch', category: 'Deep Learning', badge: '🔥', xPercent: 8, yPercent: 48 },
  { id: 'tensorflow', name: 'TensorFlow', category: 'ML Models', badge: '🧠', xPercent: 14, yPercent: 74 },
  { id: 'opencv', name: 'OpenCV', category: 'Vision Pipelines', badge: '👁️', xPercent: 28, yPercent: 86 },
  { id: 'ai', name: 'AI / GenAI', category: 'Neural Systems', badge: '⚡', xPercent: 50, yPercent: 8 },
  { id: 'react', name: 'React', category: 'Frontend', badge: '⚛️', xPercent: 84, yPercent: 20 },
  { id: 'javascript', name: 'JavaScript', category: 'TypeScript/JS', badge: '📜', xPercent: 90, yPercent: 44 },
  { id: 'sql', name: 'SQL', category: 'Databases', badge: '🗄️', xPercent: 85, yPercent: 70 },
  { id: 'github', name: 'GitHub', category: 'CI/CD & Open Source', badge: '🐙', xPercent: 72, yPercent: 88 },
];

export interface TerminalEntry {
  command: string;
  output: string[];
}

export const TERMINAL_ENTRIES: TerminalEntry[] = [
  {
    command: '$ python -m vision.spatial_tracker --stream',
    output: [
      'Initializing spatial perception pipeline on CUDA:0...',
      'Model weights loaded: detector.pt (confidence >= 0.88)',
      'Spatial vision pipeline online: 60 FPS verified.',
    ],
  },
  {
    command: '$ python -m models.train_neural_network --cuda',
    output: [
      'MultiModalNeuralCore initialized with 128-dim projection...',
      'CUDA device active • Learning rate: 1e-3 [AdamW]',
      'Evaluation: 98.42% accuracy | Loss: 0.0418',
    ],
  },
  {
    command: '$ python -m agents.orchestrator --tools all',
    output: [
      'Connecting LLM reasoning engine to vector memory store...',
      'Toolchain registered: code_executor, vector_search, api_runner',
      'Autonomous agent workflow: Ready for execution.',
    ],
  },
  {
    command: '$ npm run build:production',
    output: [
      'Compiling React 18 + TypeScript + Vite production bundle...',
      'Tearing-free useSyncExternalStore routing active.',
      'Workspace Ready. Initializing Digital Portal...',
    ],
  },
];
