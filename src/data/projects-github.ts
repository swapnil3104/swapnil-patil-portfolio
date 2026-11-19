import { ProjectGitHub } from '@/types';

export const projectsGitHub: ProjectGitHub[] = [
  {
    id: 'quantum-deepfake-detection',
    index: '01',
    title: 'Quantum-Hybrid Explainable Deepfake Detection',
    repo: 'swapnil3104/Quantum-Hybrid-Explainable-Deepfake-Detection',
    repoUrl: 'https://github.com/swapnil3104/Quantum-Hybrid-Explainable-Deepfake-Detection',
    category: 'Computer Vision',
    featured: true,
    description: 'Quantum-classical hybrid neural framework detecting synthetic facial media with variational circuits and Explainable AI (XAI) overlays.',
    problemSolution: 'Combines deep learning feature extraction with quantum computing circuits to identify subtle manipulation artifacts in synthetic and face-swapped media.',
    tags: ['Python', 'PyTorch', 'PennyLane', 'Qiskit', 'OpenCV', 'XAI'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/quantum-deepfake-detection.webp',
    highlights: [
      'Hybrid quantum-classical deep learning architecture',
      'Explainable AI (XAI) heatmaps interpreting facial manipulation cues',
      'Dual-domain analysis for synthetic and face-swapped video detection',
      'Transparent forensic evidence for digital media authenticity'
    ],
    caseStudy: {
      overview: 'A research and engineering implementation exploring hybrid classical-quantum machine learning for digital media forensics. It pairs classical neural feature extractors with parameterized quantum circuits (PQCs) to detect manipulation artifacts in deepfake media.',
      problem: 'Generative AI tools and diffusion face-swap models create highly realistic synthetic media that challenge traditional detectors. Furthermore, black-box deep learning models lack interpretability, making it difficult to explain why media was flagged as manipulated.',
      pipeline: [
        'Video Frame & Face Extraction: Preprocessing video streams to detect and align faces',
        'Feature Representation: Spatial and frequency feature extraction from aligned facial crops',
        'Quantum Variational Circuit: Parameterized quantum circuit encoding classical features into quantum states',
        'Hybrid Classification: Joint classical-quantum optimization for real vs. synthetic classification',
        'Explainability Heatmaps: Visual attribution overlays highlighting manipulated facial regions'
      ],
      engineeringHighlights: [
        'Exploration of quantum variational circuits for enhanced non-linear feature representation',
        'Integration of Explainable AI (XAI) to produce visual attribution maps of manipulated regions',
        'Built with PyTorch, PennyLane, and Qiskit for hybrid classical-quantum experimentation'
      ],
      metrics: [
        { label: 'Architecture', value: 'Hybrid Classical-Quantum', detail: 'CNN backbone + Variational PQC' },
        { label: 'Explainability', value: 'XAI Visual Heatmaps', detail: 'Interpreting facial artifacts' },
        { label: 'Frameworks', value: 'PyTorch & PennyLane', detail: 'Quantum machine learning pipeline' },
        { label: 'Target Media', value: 'Synthetic Video & Images', detail: 'Deepfake manipulation detection' }
      ],
      limitations: [
        'Simulating multi-qubit circuits on classical CPUs incurs simulation overhead',
        'Heavily compressed social media video feeds reduce subtle high-frequency cues'
      ]
    }
  },
  {
    id: 'mentora-ai',
    index: '02',
    title: 'Mentora — Your Personal AI Learning Companion',
    repo: 'swapnil3104/Mentora_Your-Personal-AI-Learning-Companion',
    repoUrl: 'https://github.com/swapnil3104/Mentora_Your-Personal-AI-Learning-Companion',
    category: 'Generative AI / RAG',
    featured: true,
    description: 'AI-powered personal learning companion and study mentor that simplifies complex topics, provides step-by-step concept explanations, and interactive Q&A.',
    problemSolution: 'Assists students in mastering difficult technical subjects through conversational concept breakdown, instant doubt clearance, and structured revision.',
    tags: ['Python', 'LangChain', 'FastAPI', 'React', 'VectorDB', 'OpenAI'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/mentora-ai.webp',
    highlights: [
      'Interactive AI study companion breaking down complex technical concepts',
      'Contextual Q&A tutor for clearing subject doubts in real time',
      'Automated concept revision workflows and structured study paths',
      'Clean modern web interface designed for student focus'
    ],
    caseStudy: {
      overview: 'Mentora is an intelligent personal AI learning companion designed to help learners and students navigate challenging coursework, computer science topics, and technical concepts through interactive, personalized dialogue.',
      problem: 'Students studying technical subjects often encounter roadblocks when reading dense documentation or textbooks without an interactive tutor to answer questions, test understanding, and explain concepts at their specific skill level.',
      pipeline: [
        'Topic Input & Context Ingestion: Ingestion of student study materials and query prompts',
        'Knowledge Grounding: Semantic search and document chunk retrieval against course materials',
        'Reasoning & Breakdown Engine: Prompt-engineered LLM pipelines providing step-by-step explanations',
        'Interactive Dialogue Loop: Conversational follow-ups, concept testing, and clarifying examples',
        'Study Summary Generation: Key takeaways and revision flashpoints compiled for review'
      ],
      engineeringHighlights: [
        'Retrieval-grounded response pipeline to anchor answers to authentic study sources',
        'Multi-turn conversational context retention allowing students to ask iterative follow-up questions',
        'Responsive web UI facilitating distraction-free study sessions'
      ],
      metrics: [
        { label: 'Core Role', value: 'Personal AI Companion', detail: '24/7 interactive student mentor' },
        { label: 'Learning Modes', value: 'Concept Q&A & Notes', detail: 'Step-by-step topic breakdown' },
        { label: 'Architecture', value: 'LLM Orchestration', detail: 'Retrieval & prompt engineering' },
        { label: 'Target Audience', value: 'Students & Learners', detail: 'Mastery of technical subjects' }
      ],
      limitations: [
        'Complex mathematical derivations require LaTeX rendering and multi-modal equation input',
        'Context window limits require periodic summarization during long study sessions'
      ]
    }
  },
  {
    id: 'face-attendance',
    index: '03',
    title: 'Face Recognition Attendance Management System',
    repo: 'swapnil3104/Face-Recognition-Attendance-Management-System',
    repoUrl: 'https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System',
    category: 'Computer Vision',
    featured: true,
    description: 'Automated biometric attendance verification system using face recognition to streamline student tracking with admin and lecturer management portals.',
    problemSolution: 'Eliminates paper roll calls and proxy attendance by matching student faces in real-time from camera feeds and exporting reports to Excel.',
    tags: ['PHP', 'Python', 'OpenCV', 'Face API', 'JavaScript', 'MySQL'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/face-attendance.webp',
    highlights: [
      'Real-time facial detection and matching from camera feed',
      'Role-based authentication separating administrator and lecturer portals',
      'Student enrollment, course assignment, and classroom venue tracking',
      'Automated attendance recording with Excel spreadsheet (.xlsx/.csv) export'
    ],
    caseStudy: {
      overview: 'An automated biometric attendance management system built to modernize student tracking across academic institutions, replacing manual roll calls with fast facial recognition and automated attendance logging.',
      problem: 'Traditional classroom attendance taking is time-consuming, prone to manual entry errors, and vulnerable to proxy attendance ("buddy punching"), wasting instructional time.',
      pipeline: [
        'Camera Feed Capture: Video frame ingestion from local webcam or classroom camera',
        'Face Localization: Computer vision face detection isolating facial bounding boxes',
        'Feature Matching: Comparing captured facial landmarks against enrolled student database',
        'Ledger Timestamp Recording: Logging confirmed student presence, class code, and timestamp in MySQL',
        'Administrative Reporting: Compiling attendance records into exportable Excel spreadsheet tables'
      ],
      engineeringHighlights: [
        'Role-based security architecture separating administrative operations from lecturer classroom access',
        'Integrated student registration workflow associating photos with student IDs and courses',
        'Direct export capability allowing faculty to download clean Excel spreadsheets for university records'
      ],
      metrics: [
        { label: 'User Roles', value: 'Admin & Lecturer', detail: 'Separate access permissions' },
        { label: 'Export Format', value: 'Excel (.xlsx) / CSV', detail: 'Direct spreadsheet export' },
        { label: 'Tracking Mode', value: 'Real-Time Camera', detail: 'Video feed face matching' },
        { label: 'Core Database', value: 'MySQL / Relational', detail: 'Student attendance logs' }
      ],
      limitations: [
        'Extreme backlighting or poor classroom illumination can degrade camera capture quality',
        'Requires registered frontal photographs of students for enrollment baseline'
      ]
    }
  },
  {
    id: 'url-safety-checker',
    index: '04',
    title: 'URL Safety Checker Website & Phishing Detector',
    repo: 'swapnil3104/URL-Safety-Checker-website-',
    repoUrl: 'https://github.com/swapnil3104/URL-Safety-Checker-website-',
    category: 'Automation / Tools',
    featured: true,
    description: 'Web-based security tool that inspects and validates URLs in real-time to detect phishing links, suspicious redirects, and malicious domains.',
    problemSolution: 'Protects users against web scams and phishing traps by analyzing URL structures, domain indicators, and protocol validity before navigation.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'Security Heuristics'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/url-safety-checker.webp',
    highlights: [
      'Real-time URL threat auditing and security analysis',
      'Inspection of domain structure, protocol security (SSL/HTTPS), and redirection hops',
      'Immediate safety rating and threat indicator for suspicious links',
      'Responsive web interface for rapid link verification'
    ],
    caseStudy: {
      overview: 'A web-based cybersecurity utility developed to assist users in verifying the legitimacy and safety of unfamiliar links, inspecting URL attributes to warn users about potential phishing threats.',
      problem: 'Phishing attacks frequently use look-alike domains, obfuscated URLs, and unexpected redirect hops to trick unsuspecting users into visiting malicious websites and surrendering credentials.',
      pipeline: [
        'URL Input Parsing: Normalizing input URL and extracting protocol, domain, port, and query strings',
        'Structural Heuristics: Checking domain length, special characters, homoglyphs, and IP address patterns',
        'Protocol & Security Audit: Checking HTTPS status, domain structure, and potential deceptive subdomains',
        'Risk Aggregation: Scoring threat indicators to classify URL as safe, suspicious, or malicious',
        'Visual Report Rendering: Presenting a color-coded safety assessment with actionable advice'
      ],
      engineeringHighlights: [
        'Heuristic rules engine checking common phishing obfuscation techniques without requiring bulky downloads',
        'Simple, clean user interface designed for immediate URL testing on both mobile and desktop',
        'Lightweight Python/Flask backend delivering instant scan results'
      ],
      metrics: [
        { label: 'Audit Mode', value: 'Real-Time URL Scan', detail: 'Instant link structure analysis' },
        { label: 'Inspection Checks', value: 'Protocol, Domain & Hops', detail: 'Detecting phishing indicators' },
        { label: 'Output', value: 'Safety Score & Warnings', detail: 'Immediate risk rating' },
        { label: 'Application', value: 'Flask & Web UI', detail: 'Responsive web security checker' }
      ],
      limitations: [
        'Zero-day malicious URLs hosted on legitimate platforms may pass basic structural heuristic checks',
        'Requires network access to perform live redirect inspection and DNS checks'
      ]
    }
  },
  {
    id: '3d-car-running-game',
    index: '05',
    title: '3D Car Running Game — WebGL Interactive Arcade',
    repo: 'swapnil3104/3D_Car_RunningGame',
    repoUrl: 'https://github.com/swapnil3104/3D_Car_RunningGame',
    liveUrl: 'https://swapnil3104.github.io/3D_Car_RunningGame/',
    category: 'WebGL',
    featured: true,
    description: 'Interactive 3D infinite car runner and arcade racing game built with React 19, Three.js, TailwindCSS, Zustand, and Web Audio API.',
    problemSolution: 'Delivers a smooth 60 FPS browser-based 3D racing experience with procedural obstacle tracks and synthesized audio without heavy asset downloads.',
    tags: ['React', 'Three.js', 'TailwindCSS', 'Zustand', 'WebGL', 'Web Audio API'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/3d-car-running-game.webp',
    highlights: [
      'Procedural infinite 3D road generation and obstacle spawning',
      'Responsive keyboard and touch steering with smooth collision physics',
      'Procedural audio sound effects synthesized via native Web Audio API',
      'Real-time score counter, state management with Zustand, and locked 60 FPS'
    ],
    caseStudy: {
      overview: 'An action-packed, professional-grade 3D infinite car runner built in native WebGL using Three.js and React 19. It showcases browser graphics performance, procedural generation algorithms, and synthetic sound design.',
      problem: 'Many browser 3D games require large asset downloads that cause initial loading delay, and experience garbage collection frame stutters during continuous gameplay on mobile devices.',
      pipeline: [
        'Three.js Viewport: PerspectiveCamera setup with dynamic field-of-view acceleration effects',
        'Procedural Road Generator: Endless track calculation with continuous forward segment recycling',
        'Collision Detection: Bounding box (AABB) intersection tests between player car and obstacle hurdles',
        'Web Audio Engine: Real-time dual oscillator synth generating engine revs and collision impacts',
        'Zustand State Store: Frame-rate independent game loop tracking speed, score, and state transitions'
      ],
      engineeringHighlights: [
        '100% procedural geometry eliminating external 3D asset downloads for rapid web loading',
        'Pre-allocated object pooling architecture sustaining locked 60 FPS performance without GC spikes',
        'Synthesized Web Audio oscillators replacing heavy audio files with real-time browser sound synthesis'
      ],
      metrics: [
        { label: 'Rendering Engine', value: 'Three.js / WebGL', detail: '60 FPS browser-based 3D canvas' },
        { label: 'Audio Engine', value: 'Web Audio API', detail: 'Procedural synthesized sound effects' },
        { label: 'State Management', value: 'Zustand Store', detail: 'Decoupled reactive game loops' },
        { label: 'World Generation', value: 'Procedural Spline', detail: 'Infinite track and obstacle loops' }
      ],
      limitations: [
        'Devices lacking WebGL hardware acceleration may experience reduced graphics performance',
        'Mobile touch steering requires calibrated virtual thumb drag zones'
      ]
    }
  },
  {
    id: 'roadguard-ai',
    index: '06',
    title: 'RoadGuard AI — Pothole Detection & Municipal Reporting',
    repo: 'swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-',
    repoUrl: 'https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-',
    category: 'Computer Vision',
    featured: true,
    description: 'Computer vision road hazard detection system using YOLOv8 to identify potholes and generate automated geotagged reports for municipal maintenance.',
    problemSolution: 'Transforms camera feeds into actionable road defect reports with GPS coordinates to accelerate municipal road repairs.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'FastAPI'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/roadguard-ai.webp',
    highlights: [
      'Real-time video-based road surface defect and pothole localization',
      'Fine-tuned YOLOv8 computer vision detection model',
      'GPS coordinates extraction and defect geotagging for maintenance units',
      'Automated reporting pipeline generating actionable maintenance records'
    ],
    caseStudy: {
      overview: 'RoadGuard AI is an automated civic infrastructure monitoring project that leverages computer vision to identify asphalt potholes, cracks, and road hazards from vehicle camera feeds and generate geolocated maintenance reports.',
      problem: 'Municipal road inspection often relies on citizen complaints or delayed periodic surveys, leaving hazardous potholes unattended and causing vehicle damage and traffic accidents.',
      pipeline: [
        'Video Stream Ingestion: Camera footage ingestion from dashboard or patrol vehicles',
        'Frame Preprocessing: Image resizing and contrast normalization for varying road lighting',
        'Object Detection: YOLOv8 model localizing potholes and asphalt depressions with bounding boxes',
        'Geotag Association: Matching detection timestamps with recorded GPS location coordinates',
        'Report Automation: Generating structured maintenance tickets and defect logs for road engineers'
      ],
      engineeringHighlights: [
        'Trained YOLOv8 model tuned for road hazard patterns across varying surface textures',
        'Geotag association linking road defect frames directly to geographic coordinates',
        'Automated summary report creation to reduce manual paperwork for municipal public works'
      ],
      metrics: [
        { label: 'Model Backbone', value: 'YOLOv8 Vision', detail: 'Asphalt defect & pothole detection' },
        { label: 'Spatial Telematics', value: 'GPS Geotagging', detail: 'Coordinate extraction for repairs' },
        { label: 'Output Artifact', value: 'Automated Reports', detail: 'Municipal complaint generation' },
        { label: 'Input Stream', value: 'Road Video Feeds', detail: 'Dashcam & patrol camera streams' }
      ],
      limitations: [
        'Potholes submerged under deep standing rain water cannot be reliably detected optically',
        'Nighttime detection requires adequate vehicle headlight illumination'
      ]
    }
  },
  {
    id: 'drishtidrive-ai',
    index: '07',
    title: 'DrishtiDrive AI — Driver Drowsiness Alert System',
    repo: 'swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers',
    repoUrl: 'https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers',
    category: 'Edge AI',
    featured: true,
    description: 'Portable edge AI driver safety system detecting operator fatigue, micro-sleeps, and yawning from camera feeds to trigger immediate auditory warnings.',
    problemSolution: 'Monitors driver facial landmarks in real-time to detect eye closure duration and yawning, sounding alarms to prevent fatigue accidents.',
    tags: ['Python', 'OpenCV', 'Dlib', 'Raspberry Pi', 'Computer Vision'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/drishtidrive-ai.webp',
    highlights: [
      'Facial landmark tracking analyzing eye aspect ratio and yawning patterns',
      'Real-time visual monitoring designed for nighttime vehicle cabin conditions',
      'Immediate auditory alarm and voice warning triggers upon fatigue detection',
      'Portable edge computing architecture suitable for in-cabin Raspberry Pi setups'
    ],
    caseStudy: {
      overview: 'DrishtiDrive AI is a life-safety computer vision project designed to detect operator drowsiness, prolonged eye closures (micro-sleeps), and yawning among commercial drivers during overnight highway journeys.',
      problem: 'Driver fatigue is a leading cause of highway accidents during long overnight hauls. An automated in-cabin monitoring system can alert fatigued drivers before catastrophic collisions occur.',
      pipeline: [
        'Video Capture: In-cabin camera feed monitoring driver face orientation',
        'Facial Landmark Detection: Dlib shape predictor extracting 68 facial landmark coordinates',
        'Geometric Ratio Computation: Real-time Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR)',
        'Fatigue Threshold Logic: Accumulator tracking consecutive frames of eye closure exceeding normal blink duration',
        'Audio Alarm Dispatch: Triggering audible warning sound to immediately alert the driver'
      ],
      engineeringHighlights: [
        'Blink discrimination logic distinguishing involuntary natural blinks from micro-sleep episodes',
        'Geometric ratio approach requiring minimal computational overhead compared to heavy deep CNNs',
        'Lightweight Python implementation executable on portable single-board computers'
      ],
      metrics: [
        { label: 'Tracking Target', value: 'Facial Landmarks', detail: 'Eye aspect ratio & yawning frequency' },
        { label: 'Alert System', value: 'Auditory & Voice Alerts', detail: 'Instant warning upon fatigue signs' },
        { label: 'Vision Library', value: 'OpenCV & Dlib', detail: 'Real-time facial geometry analysis' },
        { label: 'Target Deployment', value: 'Vehicle Cabins', detail: 'Portable driver safety monitoring' }
      ],
      limitations: [
        'Dark sunglasses or heavily tinted eyewear obstruct eye landmark visibility',
        'Extreme head rotations off-camera interrupt facial landmark acquisition'
      ]
    }
  },
  {
    id: 'self-care-ai',
    index: '08',
    title: 'Self-Care AI — Wellness & Habit Tracking App',
    repo: 'swapnil3104/Self-Care-AI',
    repoUrl: 'https://github.com/swapnil3104/Self-Care-AI',
    category: 'Automation / Tools',
    featured: false,
    description: 'Personal wellness and self-care web application built with TypeScript, offering personalized health habits, daily wellness routines, and interactive self-care guidance.',
    problemSolution: 'Helps users build consistent health and wellness habits through structured daily tracking and intelligent wellness insights.',
    tags: ['TypeScript', 'React', 'TailwindCSS', 'HTML5', 'CSS3'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/self-care-ai.webp',
    highlights: [
      'Interactive daily wellness routines and self-care habit logging',
      'Clean modern dashboard built with TypeScript and responsive styling',
      'Personalized wellness suggestions and mindfulness tracking',
      'Lightweight client-side architecture with persistent state'
    ],
    caseStudy: {
      overview: 'Self-Care AI is a modern web application built using TypeScript and React to support personal well-being, mindfulness, and daily health habit management with a clean, focused user interface.',
      problem: 'Maintaining healthy habits and consistent self-care routines is often neglected amid busy schedules without a clear, accessible digital companion to track progress and offer encouragement.',
      pipeline: [
        'User Profile & Habit Goals: Setting wellness priorities, daily targets, and mindfulness routines',
        'Habit Check-in Interface: Interactive toggles and progress rings recording daily accomplishments',
        'Wellness Recommendation Engine: Suggesting restorative activities based on daily user input',
        'Progress Visualization: Historical consistency charts and streak tracking'
      ],
      engineeringHighlights: [
        'Type-safe architecture built entirely in TypeScript with modular React components',
        'Responsive, accessible layout styled with TailwindCSS for fluid mobile and desktop experiences',
        'Zero backend dependency option using local state persistence for user privacy'
      ],
      metrics: [
        { label: 'Application Type', value: 'Personal Wellness', detail: 'Self-care routines & habit logging' },
        { label: 'Technology', value: 'TypeScript & React', detail: 'Type-safe interactive interface' },
        { label: 'Guidance', value: 'AI Insights', detail: 'Personalized wellness suggestions' },
        { label: 'Persistence', value: 'Local State & Storage', detail: 'Offline habit tracking data' }
      ],
      limitations: [
        'Designed for lifestyle wellness and habit guidance, not intended for medical diagnostics',
        'Local-only mode requires export/import for multi-device sync'
      ]
    }
  },
  {
    id: 'student-attendance',
    index: '09',
    title: 'Student Attendance System Website',
    repo: 'swapnil3104/Student-Attendance-System-Website',
    repoUrl: 'https://github.com/swapnil3104/Student-Attendance-System-Website',
    category: 'Automation / Tools',
    featured: false,
    description: 'Comprehensive web-based student attendance portal featuring student and teacher login interfaces, classroom attendance tracking, and report generation.',
    problemSolution: 'Simplifies institutional attendance logging with dedicated faculty and student portals for recording and monitoring classroom attendance.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/student-attendance.webp',
    highlights: [
      'Teacher and student dedicated authentication dashboards',
      'Daily classroom attendance marking and historical record lookup',
      'Student course registration and class schedule management',
      'Clean responsive web interface with database persistence'
    ],
    caseStudy: {
      overview: 'A full-stack web application designed for schools and universities to manage daily attendance records, course enrollments, and student attendance percentages through dedicated user portals.',
      problem: 'Managing student attendance records on paper spreadsheets leads to lost records, slow percentage calculations, and lack of transparency for students wanting to check their attendance status.',
      pipeline: [
        'Authentication: Secure session-based login for instructors and students',
        'Course & Roster Management: Faculty managing enrolled students by semester and department',
        'Daily Attendance Marking: Quick-entry grid for recording present/absent status per lecture',
        'Report Calculation: Automated calculation of student attendance percentages and shortage lists'
      ],
      engineeringHighlights: [
        'Separate portal views for faculty (data entry and export) and students (attendance inspection)',
        'Relational MySQL database schema linking students, subjects, classes, and daily timestamps',
        'Responsive Bootstrap user interface accessible on smartphones and campus desktop terminals'
      ],
      metrics: [
        { label: 'Portal Roles', value: 'Faculty & Student', detail: 'Dedicated login dashboards' },
        { label: 'Features', value: 'Attendance & Courses', detail: 'Class attendance logging' },
        { label: 'Database', value: 'MySQL Relational', detail: 'Student record storage' },
        { label: 'Technology', value: 'PHP & JavaScript', detail: 'Full-stack web application' }
      ],
      limitations: [
        'Relies on manual attendance marking by instructors rather than automated biometric capture',
        'Campus network access recommended for institutional deployment'
      ]
    }
  },
  {
    id: 'mcp-learning-path',
    index: '10',
    title: 'Model Context Protocol (MCP) Learning Path & Guide',
    repo: 'swapnil3104/Model-Context-Protocol-Learning-Path',
    repoUrl: 'https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path',
    category: 'Generative AI / RAG',
    featured: false,
    description: 'Comprehensive hands-on architectural guide and reference implementations for Anthropic’s Model Context Protocol (MCP) in Python and TypeScript.',
    problemSolution: 'Provides clear reference architectures and code examples for building custom MCP servers and connecting AI models with tools and data.',
    tags: ['Python', 'TypeScript', 'MCP SDK', 'JSON-RPC', 'Node.js'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/mcp-learning-path.webp',
    highlights: [
      'Step-by-step learning modules for Model Context Protocol primitives',
      'Reference server examples demonstrating tools, resources, and prompts',
      'Dual implementations in Python (FastMCP/asyncio) and TypeScript',
      'Integration guides for connecting AI agents to external databases and APIs'
    ],
    caseStudy: {
      overview: 'An open-source educational repository and architectural guide providing hands-on code examples for building and deploying Model Context Protocol (MCP) servers and clients.',
      problem: 'Developers building LLM agent workflows often encounter proprietary, fragmented tool-calling frameworks that lack standardized transport, security negotiation, and reusable contracts.',
      pipeline: [
        'Protocol Specification: Standardized JSON-RPC 2.0 contracts for Tools, Prompts, and Resources',
        'Transport Modes: Local process communication via Stdio and network communication via SSE',
        'Tool Implementation: Defining executable tools with JSON Schema input validation',
        'Resource Providers: Exposing structured files, data tables, and dynamic context to agents'
      ],
      engineeringHighlights: [
        'Side-by-side code implementations in both Python and TypeScript for multi-stack developers',
        'Clear explanations of security capabilities, permissions, and tool schemas',
        'Modular repository structure enabling developers to clone and adapt reference servers'
      ],
      metrics: [
        { label: 'Protocol', value: 'Anthropic MCP', detail: 'Open standard for AI agent tools' },
        { label: 'Languages', value: 'Python & TypeScript', detail: 'Dual reference implementations' },
        { label: 'Components', value: 'Tools, Resources, Prompts', detail: 'Complete MCP specification coverage' },
        { label: 'Transports', value: 'Stdio & SSE', detail: 'Local process & remote streaming' }
      ],
      limitations: [
        'Protocol specification evolves as the ecosystem advances, requiring periodic updates',
        'Remote SSE transports require appropriate network configuration and reverse proxy handling'
      ]
    }
  }
];
