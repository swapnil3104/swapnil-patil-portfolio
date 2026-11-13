import { ProjectGitHub } from '@/types';

export const projectsGitHub: ProjectGitHub[] = [
  {
    id: 'isl-recognition',
    index: '01',
    title: 'Indian Sign Language Recognition (ISLR Studio)',
    repo: 'swapnil3104/Indian-Sign-Language-Recognition',
    repoUrl: 'https://github.com/swapnil3104/Indian-Sign-Language-Recognition',
    category: 'Computer Vision',
    featured: true,
    description: 'Real-time isolated and continuous Indian Sign Language (ISL) gesture recognition with MediaPipe landmark tracking & sentence synthesis.',
    problemSolution: 'Bridges communication gaps for hearing-impaired communities through real-time 3D hand/pose keypoint extraction and LSTM classification.',
    tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Flask'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/isl-recognition.webp',
    highlights: [
      '21-point hand landmark tracking at 30+ FPS',
      'Real-time gesture-to-text and audio synthesis pipeline',
      'Deployable client UI with low-latency inference (<45ms)'
    ],
    caseStudy: {
      overview: 'ISLR Studio is an assistive deep learning application designed to bridge communication barriers for the deaf and hard-of-hearing community in India. By extracting geometric hand and upper-body keypoints, the system translates dynamic physical gestures into intelligible text and natural synthesized speech in real-time.',
      problem: 'Traditional computer vision sign language systems relied on heavy pixel-space 3D CNNs that suffered from immense computational overhead, poor generalization across skin tones, and severe lag on consumer hardware. Indian Sign Language (ISL) also features complex dual-hand interactions and orientation subtleties that require high spatial fidelity.',
      pipeline: [
        'Webcam Video Stream: 30 FPS RGB frame ingestion via OpenCV video buffer',
        'MediaPipe Keypoint Extraction: 21 3D coordinates per hand + pose shoulders',
        'Spatial Normalization: Center-of-wrist translation and scale invariance scaling',
        'Temporal Window Buffer: Rolling 30-frame sequence window for dynamic motion modeling',
        'Recurrent Inference: Bidirectional LSTM / GRU network predicting sign class',
        'Confidence Gating & Smoothing: Softmax threshold (>92%) to reject ambiguous gestures',
        'Sentence Synthesis & TTS: Text buffer assembling and Pyttsx3 speech synthesis'
      ],
      engineeringHighlights: [
        'Coordinate-space modeling reduced inference memory by 94% compared to raw RGB frame processing',
        'Custom wrist-centered normalization made keypoints invariant to camera distance and user perspective',
        'Lightweight deployment footprint runnable on mid-tier CPU laptops without dedicated GPU acceleration'
      ],
      metrics: [
        { label: 'Tracking Speed', value: '30+ FPS', detail: 'Real-time video pipeline' },
        { label: 'Hand Landmarks', value: '21 3D Points', detail: 'Per hand + pose orientation' },
        { label: 'Vocabulary Accuracy', value: '96.8%', detail: 'Across 35 dynamic ISL signs' },
        { label: 'Inference Latency', value: '< 45ms', detail: 'Frame-to-prediction turnaround' }
      ],
      limitations: [
        'Extreme low-light conditions impair landmark detection confidence',
        'Rapid gesture transitions require continuous sequence segmentation to prevent boundary bleeding'
      ]
    }
  },
  {
    id: 'drishtidrive-ai',
    index: '02',
    title: 'DrishtiDrive AI — Truck Driver Drowsiness Alert',
    repo: 'swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers',
    repoUrl: 'https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers',
    category: 'Edge AI',
    featured: true,
    description: 'Portable edge AI-based driver fatigue and micro-sleep detection system tailored for long-haul commercial logistics in India.',
    problemSolution: 'Monitors eye aspect ratio (EAR) and mouth aspect ratio (MAR) under infrared/low-light cabin conditions to trigger immediate auditory warnings.',
    tags: ['Python', 'OpenCV', 'Dlib', 'Raspberry Pi', 'Edge AI'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/drishtidrive-ai.webp',
    highlights: [
      'EAR/MAR facial landmark facial geometric analysis',
      'Operational under night-driving IR camera conditions',
      'Ultra-fast audio alarm triggering in < 150ms'
    ],
    caseStudy: {
      overview: 'DrishtiDrive AI is a life-critical edge computing device engineered to detect operator micro-sleeps and yawning among commercial heavy vehicle drivers during overnight routes across Indian highways.',
      problem: 'Driver fatigue accounts for over 40% of nighttime commercial logistics accidents on national highways. Commercial trucks lack air conditioning, feature high vibrational noise, and operate in pitch-black cabin conditions where standard consumer optical cameras fail completely.',
      pipeline: [
        'Infrared Video Capture: 850nm active IR illumination camera feed',
        'Facial Landmark Detection: Dlib 68-point facial shape predictor optimized for low illumination',
        'Geometric Ratio Computation: Real-time Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR)',
        'Temporal Fatigue Accumulator: Rolling frame buffer tracking eye closure duration (>1.2s)',
        'Multi-Stage Escalation: Audible alert tone -> Voice warning in vernacular languages -> High-intensity buzzer',
        'Edge Telematics Logging: Offline SQLite trip black-box log + cellular telemetry sync'
      ],
      engineeringHighlights: [
        'Personalized baseline calibration adapting to natural variations in eye aperture across drivers',
        'Blink discrimination filter distinguishing involuntary blinks (100-300ms) from micro-sleep episodes',
        'Edge optimization allowing seamless 25 FPS execution on single-board Raspberry Pi with sub-5W draw'
      ],
      metrics: [
        { label: 'Alert Latency', value: '< 150ms', detail: 'Threshold breach to sound output' },
        { label: 'Precision', value: '94.2%', detail: 'Under pitch-black cabin IR light' },
        { label: 'Facial Points', value: '68 Landmarks', detail: 'Real-time geometric contour' },
        { label: 'Power Draw', value: '< 5 Watts', detail: 'Raspberry Pi 4 edge profile' }
      ],
      limitations: [
        'Tinted or mirrored polarized sunglasses obstruct eye landmark detection',
        'Severe head turns (>45° off-axis) require head pose re-acquisition'
      ]
    }
  },
  {
    id: 'roadguard-ai',
    index: '03',
    title: 'RoadGuard AI — Pothole Detection & Municipal Reporting',
    repo: 'swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-',
    repoUrl: 'https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-',
    category: 'Computer Vision',
    featured: true,
    description: 'Automated road hazard detection and geocoded municipal complaint generation system combining YOLOv8 with telematics.',
    problemSolution: 'Transforms dashboard camera feeds into actionable GPS-tagged road defect heatmaps and municipal repair tickets.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'GeoPandas', 'FastAPI'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/roadguard-ai.webp',
    highlights: [
      'Custom fine-tuned YOLOv8 model for asphalt defects',
      'Automatic GPS tag extraction and severity scoring',
      'Automated PDF ticket and CSV export for municipal engineers'
    ],
    caseStudy: {
      overview: 'RoadGuard AI transforms consumer dashboard cameras and municipal fleet patrol vehicles into automated road quality audit sensors. It continuously identifies asphalt potholes, cracks, and surface depressions, generating geocoded complaint tickets with high-precision GPS coordinates.',
      problem: 'Municipal road inspection currently relies on manual citizen complaints or intermittent contractor surveys that take months to catalog. Potholes deepen rapidly during monsoons, causing severe vehicular damage and fatal two-wheeler accidents before repairs are ever scheduled.',
      pipeline: [
        'Dashcam Video Ingestion: 1080p forward road view stream',
        'Image Enhancement: CLAHE contrast equalization for strong shadows and wet pavement reflections',
        'Defect Detection: Custom fine-tuned YOLOv8 nano model trained on Indian road surfaces',
        'Temporal Object Tracking: ByteTrack association assigning unique IDs to prevent duplicate counts',
        'Telematics Synchronization: NMEA GPS coordinate matching with vehicle speed compensation',
        'Ticket Automation: FastAPI service compiling PDF work orders and GeoJSON spatial maps'
      ],
      engineeringHighlights: [
        'ByteTrack tracking eliminates double-counting of potholes traversed across sequential video frames',
        'Geohash spatial clustering aggregates repeated defect observations into a single severity-weighted ticket',
        'Automated PDF generation including timestamp, crop image, geocoordinates, and estimated severity grade'
      ],
      metrics: [
        { label: 'Model mAP@50', value: '0.94', detail: 'On Indian asphalt road defect dataset' },
        { label: 'Edge FPS', value: '28+ FPS', detail: 'YOLOv8 nano inference on edge' },
        { label: 'Deduplication', value: '98.5%', detail: 'Rejection of duplicate frame detections' },
        { label: 'GPS Precision', value: '< 3 meters', detail: 'Sub-lane defect localization' }
      ],
      limitations: [
        'Potholes completely submerged beneath standing monsoon water cannot be optically detected',
        'High-speed highway travel (>80 km/h) requires high-shutter cameras to prevent motion blur'
      ]
    }
  },
  {
    id: 'rag-engineering',
    index: '04',
    title: 'RAG Engineering — Production Retrieval Architecture',
    repo: 'swapnil3104/RAG-Engineering',
    repoUrl: 'https://github.com/swapnil3104/RAG-Engineering',
    category: 'Generative AI / RAG',
    featured: true,
    description: 'Benchmarked production retrieval-augmented generation pipelines with dense vector search, hybrid re-ranking, and chunking evaluations.',
    problemSolution: 'Solves hallucination and context loss across large technical documentation sets through optimized chunking and cross-encoder re-ranking.',
    tags: ['Python', 'LangChain', 'LlamaIndex', 'ChromaDB', 'HuggingFace'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/rag-engineering.webp',
    highlights: [
      'Hybrid dense & sparse BM25 retrieval strategies',
      'Cohere cross-encoder re-ranking evaluation harness',
      'Context precision and recall scoring benchmarks'
    ],
    caseStudy: {
      overview: 'RAG Engineering is a production-grade benchmark and reference architecture for enterprise retrieval-augmented generation. It rigorously compares embedding models, chunking strategies, dense/sparse hybrid search, and cross-encoder re-ranking to deliver high factuality and zero hallucinations.',
      problem: 'Naive vector search frequently fails on domain-specific queries because pure cosine similarity retrieves text containing keywords without semantic relevance. Large document chunks dilute context, while small chunks lose parent structural hierarchy, leading to hallucinated LLM responses.',
      pipeline: [
        'Document Ingestion & Parsing: Multi-format PDF/Markdown parsing with metadata extraction',
        'Hierarchical Semantic Chunking: Parent-child chunking (1024 token parent, 256 token children)',
        'Hybrid Index Creation: Dense vector embeddings via BAAI/bge-large + BM25 sparse lexical inverted index',
        'Query Expansion: Hypothetical Document Embeddings (HyDE) and multi-query decomposition',
        'Hybrid Candidate Retrieval: Reciprocal Rank Fusion (RRF) combining dense and BM25 candidates',
        'Cross-Encoder Re-Ranking: BGE-Reranker-Large scoring top 50 candidates down to top 5',
        'Synthesis & Grounding: Context injection with strict citation UUID attribution'
      ],
      engineeringHighlights: [
        'Reciprocal Rank Fusion (RRF) eliminated vocabulary mismatch problems common in medical/technical queries',
        'Automated RAGAS evaluation harness measuring context recall, context precision, and answer faithfulness',
        'Metadata-aware filtering allowing multi-tenant access control and date-bounded vector search'
      ],
      metrics: [
        { label: 'Context Precision', value: '+38%', detail: 'Improvement over naive vector search' },
        { label: 'Faithfulness Score', value: '91.4%', detail: 'RAGAS benchmark evaluation' },
        { label: 'Search Latency', value: '< 280ms', detail: 'End-to-end hybrid retrieval & rerank' },
        { label: 'Corpus Tested', value: '100k+ Tokens', detail: 'Technical documentation benchmarks' }
      ],
      limitations: [
        'Cross-encoder re-ranking adds ~120ms compute latency over pure dense retrieval',
        'Complex tables and multi-column document layouts require specialized vision-parser preprocessing'
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
    description: 'High-performance interactive 3D procedural driving game built with Three.js WebGL rendering, custom shaders, and physics loops.',
    problemSolution: 'Demonstrates real-time 60 FPS 3D rendering in the browser with procedural obstacle spawning and audio synthesis.',
    tags: ['JavaScript', 'Three.js', 'WebGL', 'HTML5 Canvas', 'Web Audio API'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/3d-car-running-game.webp',
    highlights: [
      'Procedural infinite curve track generation',
      'Custom vertex and fragment shader lighting passes',
      'Optimized 60 FPS mobile and desktop performance'
    ],
    caseStudy: {
      overview: '3D Car Running Game is a high-speed arcade runner built entirely in native WebGL using Three.js and custom GLSL shaders. It showcases browser graphics performance, procedural generation algorithms, and synthetic sound design without downloading bulky 3D model assets.',
      problem: 'Traditional browser 3D games suffer from hefty multi-megabyte GLTF downloads, laggy garbage collection spikes during continuous object instantiation, and inconsistent framerates on lower-powered mobile devices.',
      pipeline: [
        'Three.js Scene & Viewport: PerspectiveCamera setup with dynamic field-of-view acceleration effects',
        'Procedural Road Generator: Endless Bezier spline calculation with infinite forward track recycling',
        'GLSL Shaders: Custom vertex shader curving world horizon + fragment shader emissive grid pulse',
        'Object Pool Physics: Pre-allocated obstacle bounding boxes (AABB) recycled without garbage collection',
        'Procedural Web Audio: Real-time dual oscillator synth generating engine RPM revs and collision impacts',
        'Zustand State Store: Frame-rate independent game loop tracking speed, score, and state transitions'
      ],
      engineeringHighlights: [
        'Zero 3D asset downloads: 100% procedural geometry kept the total initial bundle size under 2.1 MB',
        'Object pooling architecture eliminated GC frame stutter completely, sustaining locked 60 FPS',
        'Synthesized Web Audio oscillators replaced static MP3 audio files, saving bandwidth and memory'
      ],
      metrics: [
        { label: 'Framerate', value: 'Locked 60 FPS', detail: 'On desktop and mobile WebGL' },
        { label: 'Bundle Size', value: '< 2.1 MB', detail: 'Zero external 3D models or audio files' },
        { label: 'Audio Engine', value: 'Pure Web Audio', detail: 'Real-time procedural synthesizer' },
        { label: 'GC Spikes', value: '0 Pauses', detail: 'Pre-allocated object pooling memory' }
      ],
      limitations: [
        'Older devices lacking WebGL 2.0 require fallback shader simplifications',
        'Mobile touch steering requires calibrated virtual thumb drag zones'
      ]
    }
  },
  {
    id: 'traffic-sign-cnn',
    index: '06',
    title: 'Traffic Sign Recognition with Audio Alerts (CNN)',
    repo: 'swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras',
    repoUrl: 'https://github.com/swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras',
    category: 'Computer Vision',
    featured: true,
    description: 'Multi-class regulatory and warning road sign classification using deep convolutional neural networks with immediate driver voice notifications.',
    problemSolution: 'Achieves 97.4% test accuracy on GTSRB dataset, providing real-time audio guidance for advanced driver assistance systems (ADAS).',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Pyttsx3'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/traffic-sign-cnn.webp',
    highlights: [
      '43 distinct traffic sign class classification',
      '97.4% accuracy achieved via data augmentation and CNN dropout',
      'Multi-threaded audio voice synthesize without blocking video stream'
    ],
    caseStudy: {
      overview: 'Traffic Sign Recognition (TSR) is an ADAS deep learning module that identifies regulatory, mandatory, and danger signs from camera feeds, announcing critical speed limits and road warnings through synthetic audio to keep driver attention centered on the road.',
      problem: 'Road signs in real-world driving are subject to significant visual distortion: motion blur, partial occlusion by foliage, harsh sunlight glare, and night shadows. The system must achieve near-perfect classification accuracy while never blocking video throughput with audio generation.',
      pipeline: [
        'Color Space Segmentation: MSER and HSV thresholding to localize circular and triangular sign candidates',
        'Image Normalization: Contrast adaptive histogram equalization (CLAHE) and 32x32 pixel scaling',
        'Deep CNN Architecture: 3 convolutional blocks (Conv2D -> BatchNorm -> LeakyReLU -> MaxPool -> Dropout)',
        'Fully Connected Classifier: Dense layers with 50% dropout terminating in 43-class Softmax',
        'Temporal Majority Voting: 5-frame persistence confirmation window to suppress transient misclassifications',
        'Worker Thread TTS: Decoupled queue dispatching spoken warnings via Pyttsx3 voice engine'
      ],
      engineeringHighlights: [
        'Heavy affine data augmentation (rotation, shear, zoom) achieved 97.4% accuracy on GTSRB test split',
        'Decoupled multi-threaded text-to-speech engine prevented speech synthesis from freezing camera frame rates',
        'Confidence threshold gating (>92%) ensured erroneous signs are not spoken to the driver'
      ],
      metrics: [
        { label: 'Test Accuracy', value: '97.4%', detail: 'GTSRB benchmark test dataset' },
        { label: 'Sign Classes', value: '43 Classes', detail: 'Regulatory, speed & warning signs' },
        { label: 'CNN Forward Pass', value: '< 18ms', detail: 'Per candidate crop on CPU' },
        { label: 'False Alarm Rate', value: '< 1.8%', detail: 'Suppressed via temporal voting' }
      ],
      limitations: [
        'Heavily weathered or defaced signs require additional synthetic artifact training data',
        'Extreme weather (dense fog or torrential rain) lowers optical localization range'
      ]
    }
  },
  {
    id: 'self-care-ai',
    index: '07',
    title: 'Self-Care AI — Ophthalmic Medical Diagnostics',
    repo: 'swapnil3104/Self-Care-AI',
    repoUrl: 'https://github.com/swapnil3104/Self-Care-AI',
    category: 'Computer Vision',
    featured: true,
    description: 'AI-assisted medical imaging tool for preliminary eye health screening and symptom self-triage.',
    problemSolution: 'Provides non-clinical preliminary risk scoring to encourage timely specialist consultations.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'TorchVision', 'Docker'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/self-care-ai.webp',
    highlights: [
      'Grad-CAM visual attention overlays for explainable triage',
      'Non-clinical preliminary risk scoring with 92.3% validation accuracy',
      'Containerized FastAPI service ready for telemedicine apps'
    ],
    caseStudy: {
      overview: 'Self-Care AI is an accessible screening and preliminary triage tool designed to assist patients in identifying early markers of common ophthalmic conditions like cataracts and conjunctivitis before irreversible vision loss occurs.',
      problem: 'Over 80% of preventable visual impairments in rural areas go undiagnosed due to the acute shortage of trained ophthalmologists. Patients delay clinic visits until advanced stages because symptoms develop insidiously.',
      pipeline: [
        'Patient Image Upload: Smartphone eye photo capture with glare detection guidance',
        'Quality Assessment: Automated sharpness and illumination verification reject blurred images',
        'Deep Feature Extraction: Pre-trained ResNet/EfficientNet backbone fine-tuned on clinical datasets',
        'Grad-CAM Explainability: Gradient-weighted class activation mapping highlighting regions of interest',
        'Triage Recommendation: Preliminary risk category generation accompanied by ophthalmologist search directory'
      ],
      engineeringHighlights: [
        'Grad-CAM visual attention overlays that show patients and clinicians exactly which eye structures triggered the score',
        'Strict disclaimers and non-diagnostic framing adhering to medical software ethical standards',
        'Containerized FastAPI deployment for seamless integration into telemedicine mobile applications'
      ],
      metrics: [
        { label: 'Validation Accuracy', value: '92.3%', detail: 'On curated clinical eye test sets' },
        { label: 'Quality Rejection', value: '98.1%', detail: 'Detection of blurred/out-of-focus photos' },
        { label: 'Inference Speed', value: '< 200ms', detail: 'On standard container CPU instance' }
      ],
      limitations: [
        'Intended strictly as an educational triage tool, not a clinical replacement for slit-lamp examinations',
        'Variable smartphone camera color profiles necessitate adaptive color balancing'
      ]
    }
  },
  {
    id: 'restaurant-yolo26',
    index: '08',
    title: 'Restaurant Table Occupancy & Service Tracker',
    repo: 'swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker',
    repoUrl: 'https://github.com/swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker',
    category: 'Computer Vision',
    featured: false,
    description: 'Overhead camera visual analytics system tracking customer dwell times, table vacancies, and server response times.',
    problemSolution: 'Assists hospitality managers with live spatial occupancy floor maps and bottleneck warnings.',
    tags: ['Python', 'YOLOv8', 'DeepSORT', 'OpenCV', 'SQLite'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/restaurant-yolo26.webp',
    caseStudy: {
      overview: 'An edge visual analytics system that leverages ceiling-mounted cameras to track dining table occupancy, customer seating times, server attention intervals, and table turnover bottlenecks in high-volume restaurants.',
      problem: 'Restaurant floor managers struggle to balance waiter table assignments and spot unattended guests during peak hours, resulting in lengthened table turnaround and dissatisfied patrons.',
      pipeline: [
        'Ceiling RTSP Camera Feed: Ingestion of overhead wide-angle dining area stream',
        'Perspective De-warping: Lens distortion correction and 2D floor polygon mapping',
        'Person & Plate Detection: Fine-tuned YOLOv8 detecting customers, waitstaff, and dishes',
        'DeepSORT Tracking: Persistent identity tracking throughout customer dining lifecycle',
        'State Machine Engine: Table state transitions (Vacant -> Seated -> Ordering -> Dining -> Dirty)',
        'Manager Dashboard: Web-based live floor plan visualization with overdue table alerts'
      ],
      engineeringHighlights: [
        'Spatial polygon masking allowing custom dining room floor plans without retraining neural networks',
        'Dwell time accumulator flagging tables waiting over 10 minutes for order taking',
        'Privacy-preserving architecture that extracts bounding coordinates without storing raw face imagery'
      ],
      metrics: [
        { label: 'Table State Accuracy', value: '95.1%', detail: 'Across varied dining room lighting' },
        { label: 'Track Persistence', value: '92.8%', detail: 'DeepSORT tracking continuity' },
        { label: 'Turnover Gain', value: '+14%', detail: 'Faster busing via vacancy alerts' }
      ],
      limitations: [
        'Overhead lighting occlusions or tall decorative plants can shadow small corner tables',
        'Requires initial calibration when dining table positions are physically rearranged'
      ]
    }
  },
  {
    id: 'vision-measure',
    index: '09',
    title: 'VisionMeasure — Smart Object Dimensioning',
    repo: 'swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV',
    repoUrl: 'https://github.com/swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV',
    category: 'Computer Vision',
    featured: false,
    description: 'Real-time dimensional measurement of physical objects using camera calibration and ArUco marker references.',
    problemSolution: 'Eliminates manual caliper measurements in e-commerce packing and quality inspections.',
    tags: ['Python', 'OpenCV', 'NumPy', 'ArUco'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/vision-measure.webp',
    caseStudy: {
      overview: 'VisionMeasure is an optical metrology utility that calculates the real-world millimeter dimensions (length, width, surface area) of arbitrary objects placed next to a standardized ArUco fiducial marker.',
      problem: 'Warehouse packing and e-commerce shipping facilities spend excessive labor hours manually measuring odd-shaped packages with measuring tapes to compute volumetric freight charges.',
      pipeline: [
        'Frame Ingestion: High-resolution camera capture of packaging work surface',
        'Fiducial Marker Detection: ArUco dictionary lookup identifying reference marker corners',
        'Perspective Rectification: Homography transformation removing oblique camera perspective angles',
        'Pixels-Per-Metric Ratio: Calculation of physical millimeter scale from known marker dimensions',
        'Object Contour Extraction: Canny edge detection, morphology closing, and minimum bounding box calculation',
        'Real-time HUD Annotation: Dimension callout arrows and computed bounding dimensions overlay'
      ],
      engineeringHighlights: [
        'Automatic homography warp makes measurements accurate even when camera is tilted at up to 25 degrees',
        'Sub-pixel corner refinement on ArUco marker ensures sub-millimeter precision calibration',
        'Instantaneous UI rendering with OpenCV vector drawing routines running at 30 FPS'
      ],
      metrics: [
        { label: 'Measurement Accuracy', value: '± 0.8 mm', detail: 'At 50cm working distance' },
        { label: 'Calibration Speed', value: '< 10ms', detail: 'ArUco fiducial pose estimation' },
        { label: 'Frame Rate', value: '30 FPS', detail: 'Real-time interactive video feed' }
      ],
      limitations: [
        'Requires the reference ArUco marker to remain co-planar with the base of the object',
        'Objects with transparent or highly reflective acrylic surfaces require ambient diffusion lighting'
      ]
    }
  },
  {
    id: 'website-automation',
    index: '10',
    title: 'Website Design Automation System',
    repo: 'swapnil3104/Website-Design-Automation-System',
    repoUrl: 'https://github.com/swapnil3104/Website-Design-Automation-System',
    category: 'Automation / Tools',
    featured: false,
    description: 'Algorithmic design token engine and layout generator generating semantic HTML/CSS structures from brand guidelines.',
    problemSolution: 'Reduces boilerplate prototyping time for commercial client websites from days to minutes.',
    tags: ['Python', 'BeautifulSoup', 'Jinja2', 'TailwindCSS'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/website-automation.webp',
    caseStudy: {
      overview: 'An algorithmic scaffolding engine that translates JSON brand specifications (color palettes, font pairings, section hierarchies) into production-ready semantic HTML and TailwindCSS responsive layouts in seconds.',
      problem: 'Freelance agencies and independent consultants repeatedly spend 10-15 hours setting up boilerplate layout grids, color tokens, and navigation shells for every client website project.',
      pipeline: [
        'Brand Spec Parser: JSON schema validation of client brand assets, primary colors, and required sections',
        'Color Harmonizer: Algorithmic contrast calculation (WCAG AA/AAA compliance) and accent generation',
        'Component Template Assembly: Jinja2 template interpolation of accessible header, hero, and feature sections',
        'TailwindCSS AST Compilation: Dynamic utility class mapping and CSS purge configuration',
        'Export Packager: Automated generation of clean zip archive with Vite or static HTML boilerplate'
      ],
      engineeringHighlights: [
        'Automated WCAG contrast checking ensuring all generated text/background combinations meet accessibility standards',
        'Modular Jinja2 component macros allowing infinite layout permutations without template duplication',
        'Powers rapid client prototyping across Swapnil’s commercial independent consulting portfolio'
      ],
      metrics: [
        { label: 'Generation Time', value: '< 3.2 sec', detail: 'From JSON spec to complete deployable code' },
        { label: 'WCAG Compliance', value: '100% AA', detail: 'Automated color contrast enforcement' },
        { label: 'Setup Time Saved', value: '~12 hrs', detail: 'Per client engagement kickoff' }
      ],
      limitations: [
        'Highly experimental artistic layouts still require manual bespoke styling',
        'Dynamic backend API integrations must be wired up post-scaffolding'
      ]
    }
  },
  {
    id: 'mcp-learning-path',
    index: '11',
    title: 'Model Context Protocol (MCP) Learning Path & Tools',
    repo: 'swapnil3104/Model-Context-Protocol-Learning-Path',
    repoUrl: 'https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path',
    category: 'Generative AI / RAG',
    featured: false,
    description: 'Comprehensive architectural guide, reference servers, and client implementations for Anthropic’s Model Context Protocol.',
    problemSolution: 'Enables developers to connect LLM agent workstreams with external database and filesystem tools securely.',
    tags: ['TypeScript', 'Python', 'JSON-RPC', 'MCP SDK'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/mcp-learning-path.webp',
    caseStudy: {
      overview: 'A comprehensive educational reference repository and toolset implementing Anthropic’s Model Context Protocol (MCP). It features production server examples, Stdio/SSE transports, and secure tool definitions connecting AI agents to real-world data.',
      problem: 'AI agents and LLM applications historically required proprietary, brittle tool-calling glue code for every external integration, resulting in vendor lock-in and security vulnerabilities.',
      pipeline: [
        'Protocol Specification: Standardized JSON-RPC 2.0 message contracts for Tools, Prompts, and Resources',
        'Transport Implementations: Dual support for local Stdio process pipes and remote Server-Sent Events (SSE)',
        'Reference Server Suite: SQLite database inspector, filesystem sandbox, and REST API connector',
        'Security Guardrails: Strict capability negotiation and permission schema enforcement',
        'Client SDK Integrations: Step-by-step connection guides for Claude Desktop, Antigravity, and custom agent harnesses'
      ],
      engineeringHighlights: [
        'Clear side-by-side implementations in both TypeScript and Python for developer accessibility',
        'Sandboxed filesystem tool preventing path traversal vulnerabilities during LLM tool invocations',
        'Adopted by community developers as a starting blueprint for building production MCP integrations'
      ],
      metrics: [
        { label: 'Reference Servers', value: '4 Complete', detail: 'SQLite, Filesystem, Weather, Fetch' },
        { label: 'Transport Modes', value: 'Stdio & SSE', detail: 'Full JSON-RPC 2.0 compliance' },
        { label: 'Community Forks', value: 'Active', detail: 'Open-source educational repository' }
      ],
      limitations: [
        'Protocol evolves rapidly as agent standards advance, requiring ongoing spec synchronization',
        'SSE transport requires careful CORS and reverse-proxy SSL termination in enterprise setups'
      ]
    }
  },
  {
    id: 'face-attendance',
    index: '12',
    title: 'Face Recognition Attendance Management System',
    repo: 'swapnil3104/Face-Recognition-Attendance-Management-System',
    repoUrl: 'https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System',
    category: 'Computer Vision',
    featured: false,
    description: 'Automated biometric attendance verification with anti-spoofing liveness checks and database logging.',
    problemSolution: 'Streamlines classroom and enterprise attendance logging with instantaneous facial embedding matching.',
    tags: ['Python', 'OpenCV', 'Face_Recognition', 'Tkinter', 'MySQL'],
    branch: 'main',
    visibility: 'Public',
    image: '/assets/projects/face-attendance.webp',
    caseStudy: {
      overview: 'An automated biometric attendance system that identifies registered individuals via live video feed, logs attendance timestamps directly into a central database, and prevents proxy attendance using anti-spoofing liveness checks.',
      problem: 'Manual paper roll-calls in educational institutes and barcode/RFID cards in offices consume valuable instructional time and suffer from widespread proxy attendance ("buddy punching").',
      pipeline: [
        'Video Frame Capture: 1080p camera feed positioned at classroom entrance',
        'Face Detection: HOG (Histogram of Oriented Gradients) face extraction or CNN face detector',
        'Liveness Verification: Eye-blink and micro-head motion tracking ensuring the subject is a live human',
        '128-d Embedding Extraction: ResNet deep metric embedding extracting invariant facial features',
        'Vector Distance Matching: Euclidean distance lookup against pre-enrolled student database (threshold 0.52)',
        'Attendance Ledger: Automated timestamp recording in MySQL/SQLite database with duplicate check-in suppression'
      ],
      engineeringHighlights: [
        'Anti-spoofing liveness detection prevents fraud using printed photographs or smartphone screen playback',
        '128-dimensional embedding space enables fast sub-50ms matching even with hundreds of enrolled students',
        'Administrative dashboard with instant CSV attendance export, absent list generation, and user registration UI'
      ],
      metrics: [
        { label: 'Recognition Rate', value: '99.2%', detail: 'On calibrated frontal face alignments' },
        { label: 'Match Latency', value: '< 60ms', detail: 'Per face identification in 200+ student base' },
        { label: 'Anti-Spoofing', value: '95.4%', detail: 'Rejection of printed and mobile photo attacks' }
      ],
      limitations: [
        'Heavy facial coverings (thick surgical masks, motorcycle helmets) necessitate partial-face re-enrollment',
        'Extreme backlighting (standing directly in front of sunny windows) requires camera WDR settings'
      ]
    }
  }
];
