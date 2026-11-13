# Swapnil Patil — Complete Portfolio Architecture & Content Specification
*(Adapted from Framer Reference: Soren Hale — `https://wild-hours-611915.framer.app/`)*

* **Source Reference Architecture:** `https://wild-hours-611915.framer.app/`
* **Persona / Brand:** **Swapnil Patil** — Computer Science Engineer, AI/ML Engineer, Python Developer & Product Designer
* **Location:** Pune, Maharashtra, India (`Asia/Kolkata` · UTC+05:30)
* **GitHub Profile:** `https://github.com/swapnil3104`
* **Platform:** Framer (Multi-Breakpoint Architecture: `Desktop >= 1200px`, `Tablet 810px–1199px`, `Mobile <= 809px`)
* **Design System & Aesthetic:** Dark-mode technical portfolio featuring terminal/CLI prompts, live GitHub activity widgets, interactive WebGL/canvas shader effects (`glyphfield` / particle field), monospace eyebrow labels (`//`), measurable engineering metrics, and clean high-contrast card grids.

---

## 1. Global Layout & Shared Components

Every route and anchor section shares a unified shell engineered across three responsive viewport variants:

### 1.1 Accessibility & Terminal Boot Preloader
* **Skip Link:** `<a href="#main" class="skip-link">Skip to content</a>`
* **Boot Preloader (`role="status"`, `aria-live="polite"`):**
  * Terminal prompt: `> swapnil patil — ai/ml engineer & product designer` with a blinking monospace cursor block.
  * Reduced-motion fallback: Instant fade-out without terminal typing delay.

### 1.2 Global Sticky Navigation Header (`<header>`)
* **Left Zone (Brand):** `Swapnil Patil` (links to `/` or `#home`) with a live status indicator dot (pulsing emerald green).
* **Center Zone (`<nav aria-label="Main">`):**
  * `01` **Work** (`#work` / `/work`)
  * `02` **Independent Consultant** (`#consultant` / `/consultant`)
  * `03` **UI/UX Design** (`#ui-ux` / `/ui-ux`)
  * `04` **Services & Expertise** (`#services` / `/services`)
  * `05` **About & Journey** (`#about` / `/about`)
  * `06` **Lab** (`#lab` / `/lab`)
* **Right Zone (Status & CTA):**
  * Availability badge: `Open to opportunities & collaborations`
  * GitHub Quick Action: `[GitHub ↗](https://github.com/swapnil3104)` (compact icon pill)
  * Primary Action Button: `Get in touch` (`#contact` / `/contact`)

---

## 2. Homepage (`/`) — Hero & Above-the-Fold Architecture

### 2.1 Hero Section (`<section id="home">`)
A two-column asymmetric split layout on desktop (stacked on mobile/tablet) pairing editorial engineering copy with Swapnil's high-contrast portrait canvas and real GitHub repository telemetry.

* **Left Column — Editorial Value Proposition & KPIs:**
  * **Eyebrow:** `// AI/ML Engineer · Computer Vision · Python Developer · Product Designer`
  * **Main Headline (`<h1>`):**
    > Building intelligent products that solve real-world problems.
  * **Subheadline / Bio:**
    > Computer Science Engineer engineering end-to-end machine learning pipelines, real-time computer vision systems, and high-performance interactive web products with clean code and intuitive design.
  * **Action Button Group:**
    * Primary CTA: `Explore the work` (`#work`)
    * Secondary CTA (GitHub Action): `[GitHub Profile ↗](https://github.com/swapnil3104)`
    * Tertiary CTA: `Download Resume` (`/resume.pdf`)
  * **Key Metrics Bar (`<dl>`):**
    * **11+** — *Commercial Client Deployments*
    * **12+** — *Open-Source & AI/ML Projects*
    * **5** — *Figma Design Systems & Prototypes*

* **Right Column — Interactive Shader Portrait & GitHub Repository Card:**
  * **Portrait Media & Canvas Layer:**
    * Base image: `Formal Portrait on Black Background.png` (Swapnil Patil).
    * Interactive Canvas (`glyphfield` / particle cursor): Emits subtle matrix-code glyphs or glowing particles on hover.
    * Interactive helper hint (Desktop/Tablet): `Move cursor over portrait to interact`
  * **Floating GitHub Repository Card (`https://github.com/swapnil3104`):**
    * Repo: `swapnil3104/Indian-Sign-Language-Recognition`
    * Branch & Status: `main` · `Public Repository`
    * Description: *Real-time ISL gesture recognition with MediaPipe landmark tracking & sentence synthesis.*
    * Tech tags: `Python` · `TensorFlow` · `MediaPipe` · `OpenCV` · `Flask`
    * Action: `View on GitHub ↗`

### 2.2 Live Marquee & Operational Metadata Strip
* **Technology & Client Ticker (`// Building with & Deploying for`):**
  * Continuous horizontal marquee with pause-on-hover:
    `Python / PyTorch / TensorFlow / OpenCV / FastAPI / React / Three.js / LangChain / Figma / Studio Squanta / Altecht / BytePro Labs / SS Creation / Muscle Build Nutrition / Shubharambh Events / Samarth Business Group / Display Promotion / Prerna Saree / Student-X / Spark`
* **Operational Metadata Strip:**
  * `location`: `Pune, Maharashtra, India · UTC+05:30`
  * `status`: `Available for Full-time Roles & High-Impact Consulting`
  * `github`: `github.com/swapnil3104`
  * `reply`: `Replies within 24 hours`

---

## 3. Section `01 Work` (`#work` / `/work`)

### 3.1 Section Hero & Global Controls
* **Eyebrow:** `// Work & Production Deployments`
* **Headline (`<h1>`):** `Intelligent systems, client products, and measured designs.`
* **Description:** *Every project pairs rigorous engineering with real-world utility — spanning deep learning models, commercial web infrastructure, and user-centered design systems.*
* **Metrics (`<dl>`):** `12+` GitHub repositories · `11` commercial client builds · `5` Figma UX systems
* **Prominent GitHub Action Button in Work Section:**
  * Component: `<a href="https://github.com/swapnil3104" target="_blank" rel="noopener noreferrer" class="btn-github-work">`
  * Label: `View All Projects on GitHub ↗`
  * UI Styling: High-contrast dark pill with GitHub Octocat icon, live repository count badge (`15+ Repos`), and border hover glow (`rgba(16, 185, 129, 0.4)`).
* **Multi-Category Filter Toolbar:**
  * `[All Work]`
  * `[AI/ML & Engineering (GitHub)]`
  * `[Independent Consultant (Client Deliveries)]`
  * `[UI/UX Design (Figma)]`

---

### 3.2 Featured AI/ML & Core Engineering Projects (GitHub Showcase)

Each card features direct repository links, technical stack tags, architecture highlights, and measured outcomes:

#### 1. Indian Sign Language Recognition (ISLR Studio)
* **Repository:** `https://github.com/swapnil3104/Indian-Sign-Language-Recognition`
* **Category:** `Computer Vision & Deep Learning` · **Status:** `Open Source`
* **Summary:** Real-time Indian Sign Language gesture recognition platform utilizing hand-landmark detection, continuous gesture tracking, and real-time sentence synthesis with an interactive learning studio.
* **Architecture:** MediaPipe holistic hand landmarking (21 keypoints per hand), custom CNN/LSTM sequence classification model, multi-gesture sentence builder.
* **Stack:** `Python`, `TensorFlow`, `MediaPipe`, `OpenCV`, `Flask`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Indian-Sign-Language-Recognition)`

#### 2. DrishtiDrive AI — Driver Drowsiness Detection & Alert System
* **Repository:** `https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers`
* **Category:** `Edge AI & Driver Safety` · **Status:** `Open Source / Hardware Prototype`
* **Summary:** Portable, non-intrusive edge-computing system specifically engineered for Indian commercial vehicle drivers to detect micro-sleeps, yawning, and head-drop fatigue in real time.
* **Architecture:** Facial landmark tracking via dlib/OpenCV, 6-point Eye Aspect Ratio (EAR) & Mouth Aspect Ratio (MAR) temporal calculation, tiered progressive audio-visual buzzer alerts.
* **Stack:** `Python`, `PyTorch`, `OpenCV`, `FastAPI`, `React`, `Raspberry Pi`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers)`

#### 3. RoadGuard AI — Pothole Detection & Municipal Reporting System
* **Repository:** `https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-`
* **Category:** `Computer Vision & Civic Tech` · **Status:** `Open Source`
* **Summary:** Automated road safety vision pipeline that identifies road hazards, classifies pothole severity dimensions, tags GPS coordinates, and compiles automated civic grievance reports.
* **Architecture:** YOLOv8 deep object detector trained on road hazard datasets, automated bounding-box dimension estimation, GPS EXIF parsing, and municipal notification dispatcher.
* **Stack:** `Python`, `YOLOv8`, `Computer Vision`, `FastAPI`, `Geolocation API`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-)`

#### 4. RAG Engineering Architecture & Pipeline
* **Repository:** `https://github.com/swapnil3104/RAG-Engineering`
* **Category:** `Generative AI & LLM Systems` · **Status:** `Open Source`
* **Summary:** End-to-end Retrieval-Augmented Generation implementation exploring advanced chunking strategies, semantic embedding models, vector indexing, and grounded query synthesis.
* **Architecture:** LangChain & LlamaIndex orchestrations, hybrid keyword/vector search, cross-encoder reranking, and low-latency contextual generation with local/cloud LLMs.
* **Stack:** `Python`, `LangChain`, `LlamaIndex`, `ChromaDB`, `FAISS`, `FastAPI`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/RAG-Engineering)`

#### 5. 3D Car Running Game — Infinite Arcade WebGL Experience
* **Repository:** `https://github.com/swapnil3104/3D_Car_RunningGame`
* **Category:** `Creative Engineering & WebGL` · **Status:** `Open Source / Live Demo`
* **Summary:** High-octane 3D infinite car runner and arcade racing simulation running smoothly in the browser at 60 FPS without external game engines.
* **Architecture:** Three.js scene graph optimization, procedural track generation, AABB bounding-box collision detection, Zustand reactive state management, and Web Audio API synthesizer.
* **Stack:** `React`, `Three.js`, `TailwindCSS`, `Zustand`, `Web Audio API`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/3D_Car_RunningGame)`

#### 6. Traffic Sign Recognition with Audio Alerts
* **Repository:** `https://github.com/swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras`
* **Category:** `Computer Vision & Deep Learning` · **Status:** `Open Source`
* **Summary:** Autonomous driving assist model classifying 43+ traffic sign categories (GTSRB) in real-time camera feeds, outputting instantaneous vocal warnings to the driver.
* **Architecture:** Multi-layered CNN with data augmentation, dropout regularization, high test accuracy, and integrated text-to-speech audio feedback.
* **Stack:** `Python`, `TensorFlow`, `Keras`, `CNN`, `OpenCV`, `Flask`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras)`

#### 7. Restaurant Table Occupancy & Service Tracker (YOLO26)
* **Repository:** `https://github.com/swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker`
* **Category:** `Computer Vision & Analytics` · **Status:** `Open Source`
* **Summary:** Real-time hospitality analytics system tracking dining table availability, seating durations, customer turnaround rates, and service bottlenecks via overhead surveillance feeds.
* **Architecture:** Fine-tuned YOLO detection model with spatial polygon zoning for each table, presence tracking counters, and managerial analytics dashboard.
* **Stack:** `Python`, `YOLO`, `OpenCV`, `Computer Vision`, `Streamlit`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker)`

#### 8. Self-Care AI — Ophthalmic Disease Diagnostic System
* **Repository:** `https://github.com/swapnil3104/Self-Care-AI`
* **Category:** `Healthcare AI & Computer Vision` · **Status:** `Open Source`
* **Summary:** AI-powered medical diagnostic interface analyzing retinal fundus images for early detection of cataract, glaucoma, diabetic retinopathy, and normal ocular health.
* **Architecture:** Deep transfer learning pipeline with grad-CAM visual explanation heatmaps and patient wellness recommendations.
* **Stack:** `TypeScript`, `React`, `Python`, `PyTorch / TensorFlow`, `TailwindCSS`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Self-Care-AI)`

#### 9. VisionMeasure — Smart Object Measurement System
* **Repository:** `https://github.com/swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV`
* **Category:** `Computer Vision & Image Processing` · **Status:** `Open Source`
* **Summary:** Contactless real-time physical dimensional measurement calculating height, width, and bounding surface area using reference marker calibration.
* **Architecture:** Adaptive Canny edge detection, perspective transformation, contour sorting, Euclidean distance calculation, and pixel-to-metric ratio mapping.
* **Stack:** `Python`, `OpenCV`, `NumPy`, `Matplotlib`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV)`

#### 10. Website Design Automation System
* **Repository:** `https://github.com/swapnil3104/Website-Design-Automation-System`
* **Category:** `Generative AI & Developer Tooling` · **Status:** `Open Source`
* **Summary:** Automated landing page synthesis system converting natural-language requirements into responsive, production-ready frontend code and wireframes.
* **Architecture:** LLM-guided layout decomposition, automated CSS token mapping, modular template generation, and instant preview rendering.
* **Stack:** `Python`, `Node.js`, `LLM APIs`, `HTML5`, `TailwindCSS`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Website-Design-Automation-System)`

#### 11. Model Context Protocol (MCP) Learning Path & Server Implementations
* **Repository:** `https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path`
* **Category:** `AI Agents & Systems Architecture` · **Status:** `Open Source`
* **Summary:** Comprehensive educational guide and practical server implementations demonstrating Anthropic's Model Context Protocol (MCP) to safely connect LLMs to data and tools.
* **Architecture:** Custom MCP server instances (filesystem, database, external API wrappers), schema definitions, and agent tool-calling patterns.
* **Stack:** `Python`, `TypeScript`, `MCP SDK`, `JSON-RPC`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path)`

#### 12. Face Recognition Attendance Management System
* **Repository:** `https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System`
* **Category:** `Biometrics & Enterprise Software` · **Status:** `Open Source`
* **Summary:** Contactless automated attendance logging platform using 128-dimensional facial embeddings for instant multi-face verification.
* **Architecture:** HOG face detector + deep 128D facial feature extraction via dlib, Euclidean distance metric matching, and CSV/database attendance logging.
* **Stack:** `Python`, `OpenCV`, `dlib`, `face_recognition`, `SQLite`
* **Direct Action:** `[GitHub Repository ↗](https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System)`

---

### 3.3 Separate Section: Independent Consultant (Client Deliveries & Commercial Engagements)

* **Section Header:** `// Independent Consultant — Commercial Projects & Client Deployments`
* **Headline (`<h2>`):** `Delivering production digital systems for growing businesses.`
* **Overview:** Swapnil operates as an independent technical consultant and product designer, partnering with agencies, enterprises, e-commerce brands, and startups to build robust web architectures, high-converting digital storefronts, and tailored software solutions.

#### Directory of Client Projects (11 Commercial Deployments):

| # | Client / Project | Live Website | Industry Domain | Scope & Technical Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Studio Squanta** | [studiosquanta.com](https://studiosquanta.com/) | Brand & Digital Agency | Full-stack architecture, high-performance agency showcase, interactive storytelling, responsive animations, and Core Web Vitals optimization. |
| **02** | **Altecht** | [altecht.com](https://altecht.com/) | Enterprise IT & Cloud Solutions | Corporate portal development, cybersecurity and systems infrastructure services presentation, modern dark technical branding, lead funnels. |
| **03** | **SS Creation** | [sscreation.online/about](https://www.sscreation.online/about) | Creative & Production Studio | Dynamic brand website, about/storyline interactive timeline, commercial portfolio gallery, client inquiry pipeline. |
| **04** | **Display Promotion** | [displaypromotion.in](https://www.displaypromotion.in/) | Marketing & Display Solutions | Digital service catalogue, visual media showcase, high-impact video & exhibition displays layout, customer acquisition funnels. |
| **05** | **Samarth Business Group** | [samarthbusinessgroup.com](https://www.samarthbusinessgroup.com/) | Business Conglomerate | Multi-division corporate website, enterprise service vertical architecture, investor relations presentation, clean corporate UI. |
| **06** | **Muscle Build Nutrition** | [musclebuildnutrition.co.in](https://www.musclebuildnutrition.co.in/) | Fitness & Supplements E-Commerce | High-speed e-commerce storefront, product catalog with nutritional specifications, cart and secure payment integration, mobile-first checkout. |
| **07** | **Shubharambh Events** | [shubharambhevents.co.in](https://www.shubharambhevents.co.in/) | Event Management & Weddings | Luxury wedding and event planning portfolio, interactive service package pricing, gallery showcase, booking inquiry workflows. |
| **08** | **BytePro Labs** | [byteprolabs.com](https://byteprolabs.com/) | AI & Software Product Studio | Tech startup incubator portal, product showcases (ReelShop, Student-X), developer-oriented aesthetics, venture narrative. |
| **09** | **Spark** | [spark-woad.vercel.app](https://spark-woad.vercel.app/) | Modern Web App Platform | Modern interactive web application deployed on Vercel, clean component architecture, responsive glassmorphic UI, rapid edge delivery. |
| **10** | **Student-X** | [student-x.vercel.app](https://student-x.vercel.app/) | EdTech & Student Portal | Student community collaboration hub, academic resources aggregator, responsive dashboard experience deployed on Vercel. |
| **11** | **Prerna Saree** | [prernasaree.com](https://prernasaree.com/) | Luxury Ethnic E-Commerce | Elegant ethnic fashion digital storefront, high-resolution textile showcase, category filtering, streamlined customer purchase journey. |

---

### 3.4 Separate Section: UI / UX Design (Figma Systems & Product Prototypes)

* **Section Header:** `// UI/UX Design — Mobile Apps, Web Platforms & Design Systems`
* **Headline (`<h2>`):** `User-centered design systems engineered for conversion and clarity.`
* **Overview:** Every interface is built from first principles: atomic component libraries, responsive autolayout grids, design tokens, accessible color palettes, and end-to-end interactive prototypes crafted in Figma.

#### Featured Figma Design Systems (5 Systems & Apps):

#### 1. HousTrack — Smart Real Estate & Property Asset Management
* **Figma URL:** `https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1`
* **Platform:** Responsive Web Dashboard & Mobile Companion
* **Core Problem Solved:** Property managers and landlords struggle with fragmented spreadsheets for lease tracking, rent collection, and maintenance issues.
* **UX Highlights & Features:**
  * Consolidated multi-property occupancy overview with real-time financial KPI cards.
  * Tenant portal with 1-click rent payment schedules and automated receipts.
  * Visual maintenance ticket kanban board with priority status badges.
  * Reusable design system: 40+ atomic components, dark/light token architecture, responsive autolayout frames.
* **Direct Action:** `[Open Figma File ↗](https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1)`

#### 2. GlowVita Salon App — Luxury Salon & Wellness Booking Experience
* **Figma URL:** `https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1`
* **Platform:** Native iOS & Android Mobile Application
* **Core Problem Solved:** Salon booking friction caused by unclear service pricing, stylist availability mismatches, and multi-step drop-offs.
* **UX Highlights & Features:**
  * Intuitive service discovery organized by aesthetic cards and treatment categories.
  * Real-time stylist calendar selection with dynamic time-slot booking.
  * Add-on service customization drawer with live price and duration calculation.
  * Clean, soothing pastel-modern visual language designed for beauty and wellness clientele.
* **Direct Action:** `[Open Figma File ↗](https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1)`

#### 3. Melodies — Web Music Streaming & Audio Community
* **Figma URL:** `https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6`
* **Platform:** Web Desktop & Tablet Music Platform
* **Core Problem Solved:** Bridging solitary music listening with active social community discovery and collaborative track curation.
* **UX Highlights & Features:**
  * High-contrast dark-mode interface with vibrant neon accents and audio spectrum visualization.
  * Persistent bottom audio player with scrubber, queue management, and lyrics overlay.
  * Live community listening rooms allowing real-time chat and synchronized playlist voting.
  * Responsive sidebar navigation and scalable card grids for albums, artists, and playlists.
* **Direct Action:** `[Open Figma File ↗](https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6)`

#### 4. FlyMitra — Smart Travel Companion & Flight Aggregator
* **Figma URL:** `https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6`
* **Platform:** Mobile App (iOS & Android)
* **Core Problem Solved:** Overwhelming travel aggregator search results with hidden fees and complicated layover itineraries.
* **UX Highlights & Features:**
  * Clean flight search filters: price range, departure time windows, airlines, and layover stops.
  * Clear visual timeline for multi-city journeys with layover duration warnings.
  * Digital boarding pass wallet featuring high-contrast QR codes and live terminal/gate updates.
  * Travel itinerary organizer with offline-accessible trip details.
* **Direct Action:** `[Open Figma File ↗](https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6)`

#### 5. Food App — On-Demand Food Delivery & Kitchen Ordering UI
* **Figma URL:** `https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6`
* **Platform:** Mobile App (iOS & Android)
* **Core Problem Solved:** Inefficient food ordering flows, cluttered restaurant menus, and uncertain delivery arrival times.
* **UX Highlights & Features:**
  * High-engagement dish photography cards with dietary tags (Veg/Non-Veg, Spicy, Calories).
  * Seamless meal customization: portion sizes, extra toppings, and special cooking instructions.
  * Live GPS delivery tracking screen with animated delivery partner status and estimated arrival countdown.
  * Frictionless 1-tap reordering and saved payment methods.
* **Direct Action:** `[Open Figma File ↗](https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6)`

---

## 4. Section `02 Services & Capabilities` (`#services` / `/services`)

### 4.1 Section Hero
* **Eyebrow:** `// Services & Expertise`
* **Headline (`<h1>`):** `End-to-end engineering, from AI models to production interfaces.`
* **Description:** *Engagements tailored for technology teams, startups, and growing businesses needing technical depth, rapid execution, and high visual standards.*
* **Metrics (`<dl>`):** `4` core offerings · `Full-Stack` capability · `100%` client transparency

### 4.2 Service Packages Grid (4 Cards)

| # | Service Title | Typical Engagement | Deliverables & Scope |
| :--- | :--- | :--- | :--- |
| **01** | **AI/ML & Computer Vision Systems** | `3 to 8 weeks` | *Custom ML model training, OpenCV pipelines, edge inference (Raspberry Pi/jetson), API integration (FastAPI), real-time evaluation.* |
| **02** | **Full-Stack Web & Product Engineering** | `2 to 6 weeks` | *Production web applications, React/Next.js interfaces, Three.js 3D interactions, high-speed Vercel deployments, responsive performance.* |
| **03** | **UI/UX Design & Design Systems** | `2 to 4 weeks` | *Complete Figma systems, design tokens, interactive prototypes, user flows, atomic component libraries ready for developer handoff.* |
| **04** | **Independent Technical Consulting** | `Retainer / Milestone` | *Architecture reviews, MVP scoping, digital transformation for brands, performance optimization, and project lead services.* |

---

## 5. Section `03 About & Journey` (`#about` / `/about`)

### 5.1 Section Hero & Background
* **Eyebrow:** `// About Swapnil Patil`
* **Headline (`<h1>`):** `Engineering intelligent systems with creative execution.`
* **Description:**
  > I am a Computer Science Engineer and AI/ML developer based in Pune, Maharashtra. I combine deep curiosity for artificial intelligence and computer vision with practical full-stack engineering and product design. Whether training neural networks or designing accessible web applications, my focus is always on solving tangible real-world problems.
* **CTAs:** `Explore My Work` (`#work`) · `[GitHub Profile ↗](https://github.com/swapnil3104)` · `Contact Me` (`#contact`)

### 5.2 Educational & Professional Milestones
1. **B.Tech in Computer Science and Engineering** — *Annasaheb Dange College of Engineering and Technology (ADCET), Ashta.*
   * Core study: Algorithms, Machine Learning, Computer Vision, Operating Systems, Database Architecture.
2. **Independent Consultant & Product Designer** — *Pune, Maharashtra.*
   * Partnered with 11+ commercial clients across brand marketing, e-commerce, fitness, and event sectors to architect digital solutions.
3. **AI/ML & Computer Vision Engineering** — *Open Source & Project Research.*
   * Developed real-time accessibility tools (Indian Sign Language Recognition), driver safety hardware (DrishtiDrive AI), and civic tech (RoadGuard AI).
4. **Honors & Certifications:**
   * Winner — B-Plan Competition, Discovery 2k24.
   * Alteryx Designer Core Certified.
   * Cloud Computing & DevOps Training.

### 5.3 Core Engineering Principles (`// Principles`)
1. **`01` Real-World Utility First:** Build technology that addresses a verified human problem rather than creating solutions looking for problems.
2. **`02` Ship Complete Loops:** From data preprocessing and model weights to backend APIs and polished frontend UI, ensure the product works end-to-end.
3. **`03` Visual & Structural Clarity:** Complex backends deserve clean, intuitive interfaces. Never sacrifice usability for visual novelty.
4. **`04` Transparent Documentation:** Open-source contributions, clear README guides, and structured code comments so teams can build upon the work.

---

## 6. Section `04 Lab & Learning Journeys` (`#lab` / `/lab`)

### 6.1 Section Hero
* **Eyebrow:** `// Lab`
* **Headline (`<h1>`):** `Learning journeys, experiments, and technical deep-dives.`
* **Description:** *Public study repositories and engineering experiments tracking mastery across modern computer science frontiers.*

### 6.2 Structured Learning Repositories (GitHub)
1. **Machine Learning Journey:** `https://github.com/swapnil3104/Machine-Learning-Journey`
   * *End-to-end repository documenting classical machine learning, statistical modeling, algorithmic theory, data preprocessing pipelines, and practical scikit-learn implementations.*
2. **Deep Learning Journey:** `https://github.com/swapnil3104/deep-learning-journey`
   * *Foundational to advanced deep learning architectures, covering backpropagation calculus, custom neural nets, PyTorch workflows, CNNs, and computer vision model training.*
3. **Computer Vision Learning Path using OpenCV:** `https://github.com/swapnil3104/Computer-Vision-Learning-Path-using-OpenCV`
   * *Comprehensive exploration of spatial filtering, edge detection, feature extraction, and real-time video stream manipulation.*
4. **Model Context Protocol (MCP) Learning Path:** `https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path`
   * *Deep dive into Anthropic's MCP architecture, agent tools, server protocols, and LLM context extension.*
5. **RAG Engineering:** `https://github.com/swapnil3104/RAG-Engineering`
   * *Systematic implementations of semantic vector indexing, chunking trade-offs, and embedding retrieval benchmarks.*
6. **3D Arcade Graphics & Shaders:** `https://github.com/swapnil3104/3D_Car_RunningGame`
   * *Real-time rendering experiments with Three.js, geometry instancing, lighting pipelines, and procedural physics.*

---

## 7. Section `05 Contact & Conversion Footer` (`#contact` / `/contact`)

### 7.1 Conversion Banner
* **Headline (`<h2>`):** `Have an ambitious project or role? Let’s talk.`
* **Copy:** *Open to discussing full-time engineering roles, AI/ML initiatives, technical consulting, and design system projects.*
* **Primary Email CTA:** Direct verified contact action
* **Direct Links:**
  * **GitHub:** `https://github.com/swapnil3104`
  * **LinkedIn:** `linkedin.com/in/swapnil3104` (verified profile)
  * **Portfolio:** Pune, Maharashtra, India
* **Footer Monospace Metadata:**
  * `status`: `Available for hire & select client consulting`
  * `copyright`: `© 2026 Swapnil Patil · Engineered with Framer & Clean Code`
