import { LabProject } from '@/types';

export const labProjects: LabProject[] = [
  {
    id: 'machine-learning-journey',
    title: 'Machine Learning Journey',
    repo: 'swapnil3104/Machine-Learning-Journey',
    repoUrl: 'https://github.com/swapnil3104/Machine-Learning-Journey',
    category: 'Machine Learning',
    language: 'Python',
    badge: 'Foundations to Production',
    description: 'A structured, pedagogical curriculum mastering fundamental machine learning mathematics, statistical modeling, algorithmic theory, and Scikit-Learn workflows.',
    modules: [
      'Mathematical foundations: Linear algebra, multivariable calculus & probability theory',
      'Supervised & unsupervised learning (regression, classification, decision trees, clustering)',
      'Feature engineering, missing value imputation, scaling & PCA dimensionality reduction',
      'Model validation, cross-validation scoring, and hyperparameter grid search optimization'
    ],
    topics: ['Python', 'Scikit-Learn', 'NumPy', 'Pandas', 'Linear Algebra', 'Regression', 'Clustering', 'PCA'],
    stats: {
      commits: 'Curated',
      status: 'Active Lab',
      language: 'Python / Jupyter',
    },
    prerequisites: ['Python 3.10+', 'Linear Algebra', 'Multivariable Calculus', 'Basic Probability'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'Mathematical & Statistical Foundations',
        topics: [
          'Matrix decompositions, eigenvalues & eigenvectors',
          'Gradient descent mathematics & convex optimization',
          'Probability distributions, Bayes theorem & maximum likelihood estimation'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Supervised Learning Algorithms',
        topics: [
          'Linear & Polynomial Regression, Ridge & Lasso L1/L2 regularization',
          'Logistic Regression for binary & multiclass classification',
          'Decision Trees, Random Forests, Gradient Boosted Trees (XGBoost/LightGBM)',
          'Support Vector Machines (SVM) with linear & RBF kernels'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Unsupervised Learning & Feature Engineering',
        topics: [
          'K-Means, K-Medoids & Hierarchical Agglomerative Clustering',
          'Principal Component Analysis (PCA) & t-SNE dimensionality reduction',
          'Standardization, MinMax scaling, One-Hot & Target Encoding'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'Validation, Tuning & Pipeline Deployment',
        topics: [
          'Stratified K-Fold cross validation & ROC-AUC / F1-Score evaluation',
          'Scikit-Learn ColumnTransformer and Pipeline composition',
          'Hyperparameter tuning with GridSearchCV & RandomizedSearchCV'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/Machine-Learning-Journey.git',
  },
  {
    id: 'deep-learning-journey',
    title: 'Deep Learning Journey',
    repo: 'swapnil3104/deep-learning-journey',
    repoUrl: 'https://github.com/swapnil3104/deep-learning-journey',
    category: 'Deep Learning',
    language: 'PyTorch',
    badge: 'Neural Architectures',
    description: 'Comprehensive research and implementation notebook series charting deep learning mechanics from single-layer perceptrons to advanced computer vision backbones.',
    modules: [
      'Perceptrons, activation functions & backpropagation calculus from scratch',
      'Optimization algorithms (SGD, Momentum, Adam, RMSprop) & regularization (Dropout, BatchNorm)',
      'Convolutional Neural Networks (CNNs), feature map visualizers & pooling hierarchies',
      'Transfer learning, fine-tuning pretrained vision backbones & PyTorch/TensorFlow pipelines'
    ],
    topics: ['PyTorch', 'TensorFlow', 'CNNs', 'Backpropagation', 'Transfer Learning', 'Adam', 'Torchvision'],
    stats: {
      commits: 'Curated',
      status: 'Active Lab',
      language: 'PyTorch / Python',
    },
    prerequisites: ['Python 3.10+', 'Linear Algebra', 'Calculus (Chain Rule)', 'NumPy'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'Neural Foundations & Vectorized Backpropagation',
        topics: [
          'Single & multi-layer perceptron architecture from mathematical scratch',
          'Non-linear activations: Sigmoid, Tanh, ReLU, LeakyReLU, GeLU, Softmax',
          'Vectorized loss computation & backward pass autodiff graph traversal'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Optimization & Regularization Strategies',
        topics: [
          'SGD with Nesterov momentum, RMSprop, Adam & AdamW optimizers',
          'Weight decay, Dropout layers, Batch Normalization & Layer Normalization',
          'Learning rate warm-up, Cosine annealing & Plateau schedulers'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Convolutional Neural Networks (CNNs)',
        topics: [
          '2D convolution mathematics, stride, padding, dilation & receptive field',
          'Classic backbones: LeNet, AlexNet, VGG-16, ResNet-18/50 skip connections',
          'Grad-CAM heatmaps & visual activation feature map extraction'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'Transfer Learning & Production Training Loops',
        topics: [
          'Torchvision feature extraction vs. full layer unfreezing fine-tuning',
          'PyTorch Dataset & DataLoader pipeline with GPU CUDA acceleration',
          'Mixed precision training (torch.cuda.amp) & validation checkpoints'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/deep-learning-journey.git',
  },
  {
    id: 'opencv-learning-path',
    title: 'Computer Vision Learning Path using OpenCV',
    repo: 'swapnil3104/Computer-Vision-Learning-Path-using-OpenCV',
    repoUrl: 'https://github.com/swapnil3104/Computer-Vision-Learning-Path-using-OpenCV',
    category: 'Computer Vision',
    language: 'OpenCV / Python',
    badge: 'Spatial & Video Processing',
    description: 'A structured, pedagogical repository charting hands-on computer vision mastery from pixel manipulation to neural object detection and edge tracking.',
    modules: [
      'Image filtering, morphology & color space transformations',
      'Canny edge detection & Hough line/circle transforms',
      'Contour analysis, convex hulls & bounding hierarchies',
      'Real-time webcam video stream processing & FPS benchmarking'
    ],
    topics: ['OpenCV', 'Python', 'Image Processing', 'Edge Detection', 'Contours', 'Live Video', 'NumPy'],
    stats: {
      commits: 'Verified',
      status: 'Open Source',
      language: 'OpenCV / C++',
    },
    prerequisites: ['Python 3.9+', 'NumPy arrays', 'Basic Matrix Transformations'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'Pixel Operations & Filtering',
        topics: [
          'Color space conversions: BGR, RGB, HSV, Grayscale, Lab',
          'Gaussian blur, Median blur, Bilateral filtering & noise attenuation',
          'Morphological operations: Dilation, Erosion, Opening, Closing, Gradient'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Edge & Feature Detection',
        topics: [
          'Sobel & Scharr derivatives, Laplacian operator',
          'Canny edge detection with hysteresis thresholding',
          'Hough Line & Circle Transforms for geometric feature alignment'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Contours & Spatial Geometry',
        topics: [
          'Contour hierarchy trees (RETR_TREE, RETR_EXTERNAL)',
          'Moments, centroid coordinates, arc length & polygon approximation',
          'Convex hulls, bounding rectangles & minimum enclosing circles'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'Real-Time Video Analytics',
        topics: [
          'Video buffer capture with OpenCV VideoCapture and multithreaded readers',
          'Background subtraction algorithms (MOG2, KNN)',
          'FPS monitoring, overlay HUD generation, and video writing'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/Computer-Vision-Learning-Path-using-OpenCV.git',
  },
  {
    id: 'mcp-learning-path-lab',
    title: 'Model Context Protocol (MCP) Learning Path',
    repo: 'swapnil3104/Model-Context-Protocol-Learning-Path',
    repoUrl: 'https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path',
    category: 'LLM & Agent Systems',
    language: 'TypeScript / Python',
    badge: 'Agent Architecture',
    description: 'Deep-dive implementation experiments building MCP servers and client tools adhering to the Anthropic protocol specifications.',
    modules: [
      'JSON-RPC 2.0 communication schemas & transport layers',
      'Filesystem, SQLite & API tool registration patterns',
      'Agent resource providers & dynamic context prompt injection',
      'Multi-agent orchestration workflows'
    ],
    topics: ['Model Context Protocol', 'Anthropic', 'JSON-RPC', 'Agent Tools', 'TypeScript', 'Python'],
    stats: {
      commits: 'Verified',
      status: 'Active Lab',
      language: 'TypeScript / Python',
    },
    prerequisites: ['TypeScript / Node.js or Python', 'JSON-RPC Spec', 'LLM Function Calling'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'Protocol Foundations & Transports',
        topics: [
          'JSON-RPC 2.0 request/response/notification envelope lifecycle',
          'Standard Input/Output (stdio) transport architecture',
          'Server-Sent Events (SSE) HTTP transport for remote agent connectivity'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Tool & Resource Primitives',
        topics: [
          'Tool registration with JSON Schema input validation',
          'Resource URI schemes (file://, db://, api://) and subscriptions',
          'Prompt template providers with dynamic runtime argument expansion'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Security & Sandboxing',
        topics: [
          'Path traversal prevention & filesystem boundary enforcement',
          'Read-only vs. read-write tool permission segregation',
          'Token rate limiting & error handling protocols'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'Multi-Agent Client Integration',
        topics: [
          'Connecting MCP servers to Claude Desktop and Antigravity agents',
          'Composing multiple standalone MCP servers into unified toolkits',
          'Telemetry logging and inspector debugging workflows'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path.git',
  },
  {
    id: 'rag-engineering-lab',
    title: 'RAG Engineering & Retrieval Benchmarks',
    repo: 'swapnil3104/RAG-Engineering',
    repoUrl: 'https://github.com/swapnil3104/RAG-Engineering',
    category: 'Generative AI',
    language: 'Python',
    badge: 'Retrieval Systems',
    description: 'Systematic evaluations of document chunking strategies, embedding dimensionality, vector databases, and cross-encoder re-ranking for RAG.',
    modules: [
      'Fixed-size vs. recursive character chunking comparisons',
      'Dense vector vs. hybrid BM25 lexical search ranking',
      'Cross-encoder re-ranking precision/recall trade-offs',
      'Automated synthetic Q&A evaluation pipelines'
    ],
    topics: ['RAG', 'Vector Search', 'LangChain', 'ChromaDB', 'FAISS', 'BM25', 'Cross-Encoders'],
    stats: {
      commits: 'Benchmarked',
      status: 'Research Lab',
      language: 'Python / LangChain',
    },
    prerequisites: ['Python 3.10+', 'Embeddings Concept', 'Cosine Similarity', 'Vector Stores'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'Document Ingestion & Chunking Strategies',
        topics: [
          'Fixed-token vs. recursive character chunking evaluations',
          'Contextual chunk headers & document structure awareness',
          'Metadata enrichment for multi-tenant filtering'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Embedding Models & Vector Indices',
        topics: [
          'Evaluating dense embedding models (text-embedding-3-small, BGE, E5)',
          'HNSW vs. Flat index memory and latency benchmarks in Chroma & FAISS',
          'Cosine similarity vs. dot product vs. Euclidean distance metrics'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Hybrid Search & Re-ranking',
        topics: [
          'Combining dense semantic vectors with BM25 sparse keyword search',
          'Reciprocal Rank Fusion (RRF) weighting strategies',
          'Cross-encoder re-ranking with Cohere / BGE-Reranker'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'RAG Evaluation & Synthesis',
        topics: [
          'Ragas / TruLens metrics: Context Relevance, Groundedness, Answer Relevance',
          'Synthetic test set generation using LLM self-instruct',
          'Hallucination guardrails & prompt grounding templates'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/RAG-Engineering.git',
  },
  {
    id: 'threejs-arcade-runner',
    title: '3D Arcade Runner WebGL Experiment',
    repo: 'swapnil3104/3D_Car_RunningGame',
    repoUrl: 'https://github.com/swapnil3104/3D_Car_RunningGame',
    category: 'WebGL & Graphics',
    language: 'JavaScript / Three.js',
    badge: 'Interactive 3D Game',
    featured: true,
    description: 'Real-time 3D browser graphics lab featuring procedural road generation, dynamic shadow mapping, and audio synthesis in pure JavaScript.',
    modules: [
      'Three.js perspective camera tracking & curve geometry',
      'Particle collision detection without heavy physics engines',
      'Procedural asset instancing for lightweight memory footprint',
      'Web Audio API synthesized engine sounds & effects'
    ],
    topics: ['Three.js', 'WebGL', 'JavaScript', 'Shaders', 'Web Audio API', 'Procedural Generation'],
    stats: {
      commits: 'Interactive',
      status: 'Live Demo Available',
      language: 'JavaScript / WebGL',
    },
    prerequisites: ['JavaScript ES6+', 'HTML5 Canvas', '3D Coordinate Systems (X, Y, Z)'],
    curriculumPhases: [
      {
        phase: 'Phase 01',
        title: 'WebGL Scene & Camera Architecture',
        topics: [
          'PerspectiveCamera configuration, frustum culling & field-of-view tuning',
          'Directional sunlight with shadow map cascading & ambient fog',
          'RequestAnimationFrame rendering loop with delta-time normalization'
        ]
      },
      {
        phase: 'Phase 02',
        title: 'Procedural Road & Environment Generation',
        topics: [
          'Continuous infinite road looping via modular track segment pooling',
          'Dynamic curve calculation with CatmullRom splines',
          'Instanced roadside scenery (streetlights, pylons, barricades)'
        ]
      },
      {
        phase: 'Phase 03',
        title: 'Collision Dynamics & Physics Simulation',
        topics: [
          'Axis-Aligned Bounding Box (AABB) intersection detection',
          'Responsive lane-switch steering physics with cubic easing',
          'Speed-dependent camera shake & dynamic motion blur trails'
        ]
      },
      {
        phase: 'Phase 04',
        title: 'Web Audio Synthesis & Shaders',
        topics: [
          'Procedural engine pitch synthesis via Web Audio OscillatorNode',
          'Custom GLSL speed line shaders for high-velocity visual feedback',
          'HUD overlay rendering in pure canvas with retro arcade scoreboards'
        ]
      }
    ],
    cloneCommand: 'git clone https://github.com/swapnil3104/3D_Car_RunningGame.git',
  },
];
