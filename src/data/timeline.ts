import { MilestoneItem, Principle } from '@/types';

export const milestones: MilestoneItem[] = [
  {
    id: 'paarsh-infotech',
    period: 'Jan 2026 — Jun 2026',
    title: 'Project Coordinator & Product Designer Intern',
    organization: 'Paarsh Infotech Pvt. Ltd.',
    category: 'consulting',
    badge: 'Industry Internship',
    description:
      'Coordinating cross-functional project delivery timelines and contributing high-fidelity UI/UX design systems, component libraries, and interactive prototypes using Figma.',
    highlights: [
      'Sprint backlog management and cross-functional agile coordination',
      'Atomic Figma design systems with interactive component token libraries',
      'Handoff documentation and developer alignment specs',
    ],
    metrics: { label: 'Role', value: 'Internship' },
  },
  {
    id: 'btech-adcet',
    period: '2022 — July 2026',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Annasaheb Dange College of Engineering & Technology (ADCET), Ashta',
    category: 'academic',
    badge: 'SGPA 8.80 / 10',
    description:
      'Computer Science Engineering degree with Minor in Electrical Engineering (Specialization in Electric Vehicles). Strong academic and practical foundation in deep learning, computer vision, algorithms, and distributed systems.',
    highlights: [
      'Cumulative SGPA of 8.80 / 10.0 with top-tier academic standing',
      'Coursework: Computer Vision, Deep Learning, Operating Systems, DBMS & EV Powertrain Electronics',
      'Lead student researcher in real-time computer vision and medical image classification',
    ],
    metrics: { label: 'Grade', value: '8.80 SGPA' },
  },
  {
    id: 'independent-consultant',
    period: '2023 — 2025',
    title: 'Independent Consultant & Product Designer (Lead)',
    organization: 'Independent Technical Consulting Practice · Pune & Remote',
    category: 'consulting',
    badge: '11+ Client Systems',
    description:
      'Led technical architecture and product design across 11+ deployed client systems, delivering full-stack web applications, e-commerce storefronts, and Figma design systems from discovery through production deployment.',
    highlights: [
      '11 verified commercial client deployments across marketing, luxury events, fitness, and enterprise',
      'Sub-second page load optimization, custom Three.js visuals, and automated inquiry funnels',
      'Direct client communication, sprint milestones, and zero technical debt handoff',
    ],
    metrics: { label: 'Deployments', value: '11+ Live' },
  },
  {
    id: 'b-plan-discovery',
    period: '2024',
    title: '1st Place — B-Plan Competition (Discovery 2k24)',
    organization: 'Discovery 2k24 State-Level Technical Symposium',
    category: 'award',
    badge: '1st Place Winner',
    description:
      'Awarded First Place in the flagship business plan competition for presenting a viable, technology-driven product model with complete market feasibility, unit economics, and AI operational architecture.',
    highlights: [
      'Adjudged #1 among regional collegiate tech and business model finalists',
      'Demonstrated product-market fit, unit economics, and AI-enabled edge automation',
      'Defended technical feasibility, risk mitigation, and go-to-market roadmap before industry judges',
    ],
    metrics: { label: 'Standing', value: '1st Rank' },
  },
  {
    id: 'medical-ai-sponsorship',
    period: '2024',
    title: 'INR 1,50,000+ Institutional Research Sponsorship',
    organization: "Institution's Innovation Council (IIC)",
    category: 'award',
    badge: 'Funded Research (₹1.5L+)',
    description:
      'Developed a CNN-based deep learning medical diagnosis system detecting cataracts, glaucoma, and diabetic retinopathy in retinal fundus scans with 92%+ accuracy, securing INR 1,50,000+ institutional innovation grant.',
    highlights: [
      'Competitive institutional innovation grant of ₹1,50,000+ for healthcare AI research',
      'Trained multi-class convolutional neural networks with transfer learning and Grad-CAM interpretability',
      'Designed clinician-facing diagnostic dashboard prototype for rapid pre-screening',
    ],
    metrics: { label: 'Grant', value: '₹1.5L+' },
  },
  {
    id: 'certifications-suite',
    period: '2024',
    title: 'Alteryx Core, Devtown DevOps & Verified Credentials',
    organization: 'Alteryx, Devtown, Oracle, NVIDIA DLI, IBM',
    category: 'certification',
    badge: 'Verified Credentials',
    description:
      'Rigorous certifications validating data workflow automation, cloud computing & DevOps pipelines, AI agent architectures, and LLM fundamentals.',
    highlights: [
      'Alteryx Designer Core Certified — ETL pipelines, spatial data & automated prep workflows',
      'Devtown Cloud Computing & DevOps — Docker containerization, CI/CD and cloud deployment',
      'Oracle AI Agent Foundation (Score: 90/100) & NVIDIA DLI Generative AI Fundamentals',
      'IBM Project Management & David Hogue Interaction Design Foundations',
    ],
    metrics: { label: 'Credentials', value: '5+ Certified' },
  },
];

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Real-World Utility First',
    tagline: 'Engineered for human impact, not academic novelty',
    description:
      'Build solutions engineered for verified human and operational problems — whether that is detecting road potholes for municipal engineers or fatigue warnings for night-shift drivers. If it does not solve a tangible problem, it is merely an exercise.',
  },
  {
    number: '02',
    title: 'Ship Complete Loops',
    tagline: 'Data to weights, backend to frontend, zero dangling threads',
    description:
      'Connect raw ML algorithms, robust backend data pipelines, and responsive frontend interfaces into coherent, independently operable products. True engineering begins when models run reliably outside the Jupyter notebook.',
  },
  {
    number: '03',
    title: 'Visual & Structural Clarity',
    tagline: 'Sophisticated under the hood, intuitive up front',
    description:
      'Complex backends and dense inference pipelines deserve clean, intuitive, and accessible interfaces. Technical tools should communicate status, latency, and telemetry clearly without intimidating the end user.',
  },
  {
    number: '04',
    title: 'Transparent Documentation',
    tagline: 'Reproducible code, structured READMEs, open-source trust',
    description:
      'Maintain reproducible code, benchmark reports, and detailed documentation. Clear documentation is the foundation of long-term maintainability, developer onboarding, and collaborative trust.',
  },
];
