# Swapnil Patil Portfolio — Phase-Wise Implementation Roadmap & Task Tracker (`TASK.md`)

* **Project:** Swapnil Patil — Portfolio Website (`swapnil-patil-portfolio`)
* **Design Reference:** Soren Hale Architecture (`https://wild-hours-611915.framer.app/`)
* **Core Specifications:**
  * [`soren_hale_full_site_specification_architecture.md`](./soren_hale_full_site_specification_architecture.md)
  * [`Docs/Swapnil_Patil_Portfolio_Homepage_Specification.md`](./Docs/Swapnil_Patil_Portfolio_Homepage_Specification.md)
* **Target Audience:** Tech Recruiters, Engineering Managers, AI/ML Teams, Design Leads, and Commercial Consulting Clients.
* **Status:** `Planning & Execution`

---

## 📊 Roadmap Overview & Phase Progress

| Phase | Milestone Name | Focus Area | Status | Est. Tasks |
| :--- | :--- | :--- | :---: | :---: |
| **Phase 0** | **Project Setup & Design Tokens** | Tooling, CSS variables, typography, assets | ✅ Completed | 5 |
| **Phase 1** | **Global Layout & Navigation Shell** | Preloader, sticky header, mobile nav drawer | ✅ Completed | 5 |
| **Phase 2** | **Hero Section & Interactive Portrait** | Value prop, WebGL/canvas shader, GitHub telemetry | ✅ Completed | 6 |
| **Phase 3** | **Engineering & AI/ML Projects (`#work`)**| GitHub project cards, filter toolbar, GitHub button | ✅ Completed | 5 |
| **Phase 4** | **Independent Consultant Showcase** | 11 Commercial client websites directory & cards | ✅ Completed | 5 |
| **Phase 5** | **UI/UX Design Showcase** | 5 Figma systems, prototypes & problem breakdowns | ✅ Completed | 5 |
| **Phase 6** | **Services & Technical Capabilities** | Service offerings, skill matrix, tech tags | ✅ Completed | 4 |
| **Phase 7** | **About, Journey & Principles** | Editorial narrative, ADCET background, timeline | ✅ Completed | 4 |
| **Phase 8** | **Lab & Learning Journeys** | GitHub learning paths (ML, DL, CV, MCP, RAG), 3D runner | ✅ Completed | 4 |
| **Phase 9** | **Contact & Conversion Footer** | Contact CTA, verified channels, copyright strip | ⏳ Pending | 4 |
| **Phase 10** | **Performance, Accessibility & SEO** | Lighthouse 95+, keyboard a11y, meta tags, schema | ⏳ Pending | 5 |
| **Phase 11** | **QA, Verification & Deployment** | Multi-device testing, cross-browser, live deploy | ⏳ Pending | 4 |

---

## 🚀 Detailed Phase-Wise Task Breakdown

---

### Phase 0: Project Setup, Tooling & Design System Foundations

**Goal:** Establish clean repository structure, design tokens, asset management, and foundational styling.

- [x] **TASK-001**: **Repository & Environment Initialization**
  - Select and initialize deployment framework (Vite + React + TailwindCSS).
  - Configure ESLint, Prettier, and path aliases.
  - Setup directory hierarchy: `/components`, `/assets`, `/styles`, `/data`, `/hooks`.

- [x] **TASK-002**: **Design Tokens & Theme System Setup**
  - Implement dark-theme CSS custom properties:
    - Backgrounds: Primary `#0A0A0B`, Elevated `#111113`, Surface Card `#18181B`.
    - Borders: Hairline `rgba(255, 255, 255, 0.08)`, Hover `rgba(255, 255, 255, 0.16)`.
    - Typography Colors: Headline `#F4F4F5`, Body `#D4D4D8`, Muted `#A1A1AA`.
    - Accents: Emerald `#10B981`, Accent Hover `#34D399`, Warning `#F59E0B`.
  - Establish font pairings: Sans-serif (Geist / Inter) + Monospace (JetBrains Mono / Fira Code) for code labels (`//`).

- [x] **TASK-003**: **Asset Optimization & Organization**
  - Process portrait asset `Formal Portrait on Black Background.png` into WebP/AVIF multi-density crops.
  - Prepare SVG icons: GitHub Octocat, Figma, External Link (`↗`), Terminal Prompt (`>`), Chevron, Status Dot.
  - Create fallback placeholder visuals for project cards.

- [x] **TASK-004**: **Global Data Model Architecture**
  - Create centralized TypeScript interfaces or structured JSON data files:
    - `projects-github.json` (AI/ML & core engineering repos)
    - `projects-consultant.json` (11 client websites)
    - `projects-uiux.json` (5 Figma design systems)
    - `services.json`, `timeline.json`, `lab.json`.

- [x] **TASK-005**: **Layout Container & Grid Foundation**
  - Build responsive grid wrapper (`max-w-7xl` / `1200px` container with responsive gutter padding `px-4 sm:px-6 lg:px-8`).
  - Configure breakpoints: Desktop (`>= 1200px`), Tablet (`810px–1199px`), Mobile (`<= 809px`).

---

### Phase 1: Global Layout, Preloader & Responsive Shell

**Goal:** Build the persistent application chrome, accessible navigation, and terminal preloader.

- [x] **TASK-101**: **Terminal Boot Preloader (`role="status"`)**
  - Render terminal prompt: `> swapnil patil — ai/ml engineer & product designer`.
  - Add blinking cursor animation with automatic transition/fade out after 800ms.
  - Include `prefers-reduced-motion` override to bypass animation.
  - Ensure skip link `<a href="#main">Skip to content</a>` is positioned first in DOM.

- [x] **TASK-102**: **Sticky Navigation Header (`<header>`)**
  - **Left Brand:** `Swapnil Patil` linked to `#home` with pulsing emerald availability dot.
  - **Center Nav Links:**
    - `01 Work` (`#work`)
    - `02 Independent Consultant` (`#consultant`)
    - `03 UI/UX Design` (`#ui-ux`)
    - `04 Services` (`#services`)
    - `05 About` (`#about`)
    - `06 Lab` (`#lab`)
  - **Right Zone:** Availability pill (`Available for Work`) + Quick GitHub icon link + Primary `Get in touch` button (`#contact`).

- [x] **TASK-103**: **Mobile Responsive Menu Drawer**
  - Accessible hamburger button with `aria-expanded` and `aria-controls`.
  - Full-screen or slide-out mobile drawer with backdrop blur.
  - Keyboard navigation trap and Escape key listener to close drawer.
  - Auto-close drawer on link click.

- [x] **TASK-104**: **Active Scrollspy Navigation Indicator**
  - Implement IntersectionObserver to detect currently active section.
  - Highlight current navigation index item with emerald accent and monospace numbering.

- [x] **TASK-105**: **Global Hairline Dividers & Section Containers**
  - Standardize section vertical rhythm (`py-20 lg:py-28`).
  - Add hairline top/bottom borders (`border-t border-white/[0.08]`) between sections.

---

### Phase 2: Hero Section, Interactive Portrait & GitHub Telemetry

**Goal:** Deliver an impactful first impression communicating role, verified metrics, interactive portrait, and GitHub repository card.

- [x] **TASK-201**: **Hero Two-Column Asymmetric Grid Layout**
  - Desktop: 60/40 split (Left: editorial content, Right: portrait & repository card).
  - Tablet & Mobile: Stacked order (editorial content first, followed by visual portrait).

- [x] **TASK-202**: **Hero Editorial Content & Value Proposition**
  - Monospace Eyebrow: `// AI/ML Engineer · Computer Vision · Python Developer · Product Designer`.
  - Primary `<h1>`: *"Building intelligent products that solve real-world problems."*
  - Subheadline / Bio: Concise 2-sentence value proposition.
  - Action Group:
    - Primary Button: `Explore My Work` (`#work`).
    - Secondary GitHub Button: `[GitHub Profile ↗](https://github.com/swapnil3104)` with Octocat icon.
    - Tertiary Action: `Download Resume` (`/resume.pdf`).

- [x] **TASK-203**: **Hero Metrics Bar (`<dl>`)**
  - Card 1: `11+` — *Commercial Client Deployments*
  - Card 2: `12+` — *Open-Source & AI/ML Projects*
  - Card 3: `5` — *Figma Design Systems & Prototypes*

- [x] **TASK-204**: **Interactive Portrait Canvas Layer (`Formal Portrait on Black Background.png`)**
  - Implement canvas overlay (`glyphfield` code matrix or subtle particle field).
  - Pointer hover interaction: cursor emits glowing emerald/amber particles or ASCII glyphs.
  - Touch/mobile fallback: clean high-contrast static portrait with subtle vignette.
  - Interactive hint label: `Move cursor over portrait to interact`.

- [x] **TASK-205**: **Floating GitHub Activity Card**
  - Position floating widget over portrait bottom-right.
  - Featured repo: `swapnil3104/Indian-Sign-Language-Recognition`.
  - Display branch (`main`), repo visibility badge (`Public`), short description, tech stack tags (`Python`, `TensorFlow`, `MediaPipe`, `OpenCV`).
  - Action link: `View on GitHub ↗`.

- [x] **TASK-206**: **Live Ticker & Professional Metadata Strip**
  - Continuous horizontal marquee:
    `Python / PyTorch / TensorFlow / OpenCV / FastAPI / React / Three.js / LangChain / Figma / Studio Squanta / Altecht / BytePro Labs / SS Creation / Muscle Build Nutrition / Shubharambh Events / Samarth Business Group / Display Promotion / Prerna Saree / Student-X / Spark`.
  - Pause on hover, reduced-motion fallback.
  - Metadata bar: `Location: Pune, Maharashtra, India` · `Status: Open for Full-Time & Consulting` · `GitHub: github.com/swapnil3104` · `Replies within 24h`.

---

### Phase 3: Core Engineering & AI/ML Projects Grid (`#work`) & GitHub Integration

**Goal:** Present Swapnil's technical engineering, deep learning, and computer vision projects with a dedicated GitHub button and filter toolbar.

- [x] **TASK-301**: **Section Header & Prominent GitHub Action Button**
  - Eyebrow: `// Work & Production Deployments`.
  - Headline: `Intelligent systems, client products, and measured designs.`
  - Prominent Action Button:
    - `<a href="https://github.com/swapnil3104" target="_blank" class="btn-github-work">View All Projects on GitHub ↗</a>`.
    - Styled with GitHub icon, dark pill container, repository counter badge (`15+ Repos`), and hover glow.
  - Multi-category filter tabs:
    - `[All Projects (12)]` | `[Computer Vision (6)]` | `[Generative AI / RAG (2)]` | `[Edge AI (1)]` | `[WebGL (1)]` | `[Automation / Tools (2)]`.
  - Instant real-time search input for filtering projects and technology stack tags.
  - Portfolio pillars jump links to `#consultant` and `#ui-ux`.

- [x] **TASK-302**: **Build Core AI/ML Project Cards (Top 7 Featured Repositories)**
  1. **Indian Sign Language Recognition (ISLR Studio)** (`swapnil3104/Indian-Sign-Language-Recognition`)
  2. **DrishtiDrive AI (Drowsiness Detection for Truck Drivers)** (`swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers`)
  3. **RoadGuard AI (Pothole Detection & Municipal Reporting)** (`swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-`)
  4. **RAG Engineering Pipeline** (`swapnil3104/RAG-Engineering`)
  5. **3D Car Running Game (Three.js WebGL)** (`swapnil3104/3D_Car_RunningGame`)
  6. **Traffic Sign Recognition with Audio Alerts (CNN)** (`swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras`)
  7. **Self-Care AI (Ophthalmic Medical Diagnostics)** (`swapnil3104/Self-Care-AI`)
  - Integrated high-fidelity 16:9 AI-generated production preview images generated based on repository names and domains, with dynamic online generative AI fallback and SVG telemetry backup.

- [x] **TASK-303**: **Build Secondary Engineering Repositories Grid (Additional 5 Repositories)**
  8. **Restaurant Table Occupancy & Service Tracker (YOLO26)** (`swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker`)
  9. **VisionMeasure (Smart Object Dimensioning using OpenCV)** (`swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV`)
  10. **Website Design Automation System** (`swapnil3104/Website-Design-Automation-System`)
  11. **Model Context Protocol (MCP) Learning Path & Server Tools** (`swapnil3104/Model-Context-Protocol-Learning-Path`)
  12. **Face Recognition Attendance Management System** (`swapnil3104/Face-Recognition-Attendance-Management-System`)
  - Implemented expandable toggle (`Explore 5 Additional Production Repositories` / `Collapse to Top 7`) and automated filter visibility.

- [x] **TASK-304**: **Project Card Architecture & Technical Badges**
  - Implement card components:
    - Project number index (`01`, `02`, etc.) in monospace.
    - Title & category pill (`Computer Vision`, `Generative AI / RAG`, `Edge AI`, `WebGL`).
    - Visual media container with responsive WebP preview image (`image` property), subtle architectural grid overlay, hover scale, category badge, and graceful fallback to bespoke SVG telemetry diagrams (`ProjectVisual.tsx`).
    - Problem-solution summary paragraph.
    - Stack chips (`Python`, `PyTorch`, `OpenCV`, `FastAPI`, `React`, etc.).
    - Direct actions: `[GitHub Repo ↗]`, `[Case Study & Architecture ↗]`, and `[Live Demo ↗]` (where available).

- [x] **TASK-305**: **Expandable Project Modal / Drawer View**
  - Detailed case study popup (`ProjectModal.tsx`) with accessible keyboard focus trap, ESC listener, backdrop blur, and body scroll lock.
  - Structured tabs: Overview & Problem, System Architecture & Pipeline (numbered stages), Engineering Highlights, Verified Benchmarks & Metrics, Edge Cases & Limitations.
  - Interactive clone command bar with one-click copy feedback.

---

### Phase 4: Independent Consultant Showcase (11 Commercial Client Deployments)

**Goal:** Create a dedicated, polished section (`#consultant`) detailing Swapnil's commercial client work across 11 live web applications and corporate websites.

- [x] **TASK-401**: **Independent Consultant Section Header & Positioning**
  - Eyebrow: `// Independent Consultant — Commercial Projects & Client Deployments`.
  - Headline: `Delivering production digital systems for growing businesses.`
  - Narrative intro on technical consulting, MVP architecture, frontend development, and e-commerce optimization.
  - KPI chips: `11` live deployments, `100%` on-time delivery, `Full-Stack & UI/UX` coverage.

- [x] **TASK-402**: **Build Client Project Cards for Agency & Enterprise Tech (4 Clients)**
  - **Studio Squanta** (`https://studiosquanta.com/`) — Strategic brand, digital design & agency web architecture.
  - **Altecht** (`https://altecht.com/`) — Enterprise IT infrastructure, cloud security services & corporate portal.
  - **SS Creation** (`https://www.sscreation.online/about`) — Creative agency, production studio & client showcase.
  - **Samarth Business Group** (`https://www.samarthbusinessgroup.com/`) — Multi-division corporate conglomerate portal.

- [x] **TASK-403**: **Build Client Project Cards for Marketing, Events & E-Commerce (4 Clients)**
  - **Display Promotion** (`https://www.displaypromotion.in/`) — Marketing, video production & exhibition signage catalogue.
  - **Muscle Build Nutrition** (`https://www.musclebuildnutrition.co.in/`) — Fitness nutrition & supplements e-commerce store with checkout.
  - **Shubharambh Events** (`https://www.shubharambhevents.co.in/`) — Luxury wedding planning, experiential events & quotation booking.
  - **Prerna Saree** (`https://prernasaree.com/`) — Designer Indian sarees & luxury ethnic fashion storefront.

- [x] **TASK-404**: **Build Client Project Cards for Startup Incubators & Modern Web Apps (3 Clients)**
  - **BytePro Labs** (`https://byteprolabs.com/`) — AI & software product studio / startup accelerator hub.
  - **Spark** (`https://spark-woad.vercel.app/`) — Modern interactive web application deployed on Vercel.
  - **Student-X** (`https://student-x.vercel.app/`) — EdTech community platform & student resources portal deployed on Vercel.

- [x] **TASK-405**: **Client Card Layout & Live Verification Badges**
  - Each card includes:
    - Client brand name and industry tag.
    - Verified Live URL button (`Visit Live Site ↗`).
    - Scope of engagement: Architecture, Frontend Engineering, Performance Optimization, or UI/UX Design.
    - Summary of deliverables and business impact.
    - Tech stack / Platform badges (Next.js, React, Vercel, TailwindCSS, WordPress, Shopify).

---

### Phase 5: UI / UX Design Showcase (5 Figma Systems & App Prototypes)

**Goal:** Create a dedicated product design section (`#ui-ux`) showcasing end-to-end Figma design systems, wireframes, and interactive mobile/web prototypes.

- [x] **TASK-501**: **UI/UX Design Section Header & Design Philosophy**
  - Section wrapper with accessible anchor id `#ui-ux` and scrollspy integration.
  - Eyebrow: `03 UI/UX Design Systems — Mobile Apps & Web Platforms`.
  - Headline: `User-centered design systems engineered for conversion and clarity.`
  - Overview narrative highlighting atomic design tokens, autolayout grids, component states, and accessibility standards.
  - Header action: direct button linking to Figma community workspace (`Explore Figma Workspace ↗`).
  - Telemetry & KPI chips: `5 Systems` (End-to-End Figma files), `100% Tokens` (Auto-Layout 5.0 & 8pt Grids), `Web & Mobile` (Dual Platform Systems), `WCAG AA` (Contrast & Touch Targets).
  - Multi-category filter toolbar: `All Systems (5)`, `Mobile Apps (3)`, `Web & Dashboards (2)` with live counts.
  - Real-time search filter and View Switcher (`Grid Cards` / `Directory Table`).

- [x] **TASK-502**: **Build Design Case Study 1: HousTrack**
  - **Figma URL:** `https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1`
  - Platform: Responsive Web Dashboard & Mobile Companion (`14+ Screens & Views`).
  - Domain: Real Estate, Property Management & Tenant Tracking.
  - Bespoke vector mockup in `DesignVisual.tsx`: portfolio occupancy radial donut gauge (96.4%, 128/132 units), rent collection ledger ($48,250), and interactive maintenance ticket Kanban board with urgent vs routine triage tags.
  - Key screens: Portfolio Overview & Occupancy HUD, Automated Rent Payment Ledger, Maintenance Ticket Kanban Pipeline, Tenant Lease & KYC Verification Drawer.
  - Case study specs: Inter + JetBrains Mono typography, 8pt responsive grid, WCAG AA 5.8:1 contrast compliance.
  - Direct Actions: `[Open in Figma ↗]` and `[Design Specs]` modal inspection.

- [x] **TASK-503**: **Build Design Case Study 2: GlowVita Salon App**
  - **Figma URL:** `https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1`
  - Platform: Native iOS & Android Mobile Application (`18+ Mobile Screens`).
  - Domain: Beauty, Salon Appointments & Stylist Scheduling.
  - Bespoke vector mockup in `DesignVisual.tsx`: smartphone frame with Dynamic Island, master colorist profile (Elena Vance 4.9★), interactive horizontal date strip picker, available time slot chips, and gold booking CTA button ($85).
  - Key screens: Curated Treatment Exploration Hub, Stylist Portfolio & Live Schedule Picker, Custom Treatment Modifier Bottom Sheet, Confirmed Appointment & Digital Pass.
  - Case study specs: Playfair Display + SF Pro typography, 390pt mobile baseline, warm obsidian & champagne gold palette, 44pt touch bounding targets.
  - Direct Actions: `[Open in Figma ↗]` and `[Design Specs]` modal inspection.

- [x] **TASK-504**: **Build Design Case Study 3: Melodies — Web & Community**
  - **Figma URL:** `https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6`
  - Platform: Web Desktop & Tablet Music Platform (`16+ Screens & Variants`).
  - Domain: Audio Streaming, Social Listening & Community Curation.
  - Bespoke vector mockup in `DesignVisual.tsx`: dark obsidian audio client workspace, persistent bottom scrub dock at 02:44 / 04:12 with volume controls, dynamic multi-bar FFT equalizer spectrum analyzer in neon emerald & cyan, and shared listening room badge (8 listening together).
  - Key screens: Persistent Bottom Audio Workstation Dock, Social Group Listening Room & Chat, Editorial Discovery & Genre Wavefront, Collaborative Playlist Studio.
  - Case study specs: Plus Jakarta Sans, 3-pane responsive desktop layout, deep charcoal palette, full keyboard accessibility.
  - Direct Actions: `[Open in Figma ↗]` and `[Design Specs]` modal inspection.

- [x] **TASK-505**: **Build Design Case Studies 4 & 5: FlyMitra & Food App**
  - **FlyMitra** (`https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6`):
    - Platform: Mobile Travel Application (`20+ Flow Screens`).
    - Domain: Aviation, Travel & Logistics.
    - Bespoke vector mockup in `DesignVisual.tsx`: BOM ➔ DXB flight route timeline, date fare price matrix with lowest fare highlight ($190), non-stop status tag, and offline boarding pass with high-contrast optical 2D barcode for airport scanners.
    - Key screens: Interactive Date Fare Price Calendar, Visual Flight Route Timeline, Aircraft Cabin Seat Selector, Offline Airport Boarding Pass & QR Pass.
  - **Food App — UI** (`https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6`):
    - Platform: Mobile Food Delivery App (`22+ Mobile Screens`).
    - Domain: Food Tech & On-Demand Logistics.
    - Bespoke vector mockup in `DesignVisual.tsx`: Truffle Wagyu burger card with 4.9★ rating, ingredient toppings customizer drawer (+Extra Truffle Aioli, +Smoked Bacon), quantity stepper, and live GPS delivery telemetry HUD with rider route and 18-24 min arrival countdown.
    - Key screens: Culinary Discovery Showcase, Meal Customization & Toppings Drawer, Transparent 1-Tap Checkout Funnel, Live GPS Courier Telemetry & Arrival HUD.
  - Direct Actions: `[Open in Figma ↗]` and `[Design Specs]` modal inspection for both systems.

---

### Phase 6: Services, Capabilities & Technical Skills Matrix

**Goal:** Present Swapnil's core technical offerings and verified skills grouped logically.

- [x] **TASK-601**: **Services Section Header (`#services`)**
  - Section wrapper with accessible anchor id `#services` and scrollspy indicator.
  - Eyebrow: `04 Services & Technical Capabilities`.
  - Headline: `End-to-end engineering, from AI models to production interfaces.`
  - Overview narrative highlighting custom vision pipelines, full-stack cloud web systems, atomic design tokens, and technical consulting.
  - Header action: direct button linking to consulting inquiry (`Request Service Scope ↗`).
  - Telemetry & KPI chips: `4 Offerings` (Specialized Core Services), `Full-Stack` (AI Models to Frontend UI), `2–8 Weeks` (Sprint-Based Turnaround), `100% SLA` (Direct Client Transparency & Daily Commits).

- [x] **TASK-602**: **Build 4 Core Service Cards**
  - Component: `ServiceCard.tsx` with scope eyebrow, timeline pill, deliverable checklists with checkmarks, tech stack tags, and dual actions (`Workflow & Stages` & `Inquire Scope ↗`).
  1. **AI/ML & Computer Vision Systems** (3–8 weeks): Custom neural nets, OpenCV inference, edge hardware (Raspberry Pi/Jetson), dataset curation, and FastAPI/Docker containerized endpoints.
  2. **Full-Stack Web & Product Engineering** (2–6 weeks): Production web apps, Three.js 3D WebGL scenes, clean React/Next.js architectures, sub-second loads, TypeScript, and TailwindCSS.
  3. **UI/UX Design & Design Systems** (2–4 weeks): Complete Figma token systems, Autolayout 5.0, atomic components, interactive click-through prototypes, and developer handoff specs.
  4. **Independent Technical Consulting & Audits** (Retainer / Milestone): Architecture audits, MVP scoping, digital transformation, Core Web Vitals optimization, and engineering roadmap execution.
  - Detailed modal drawer in `ServiceModal.tsx`: 4-stage sprint workflows (Feasibility ➔ Data/Tokens ➔ Iterative Sprints ➔ Launch & SLA), complete deliverable checklists, and direct contact inquiry prefill.

- [x] **TASK-603**: **Technical Capabilities Matrix (`#expertise`)**
  - Component: `CapabilitiesMatrix.tsx` featuring a structured grid grouped into 6 distinct categories with category descriptions and icons (no unsupported percentage bars):
    - **AI & Deep Learning:** PyTorch, TensorFlow, Keras, CNNs, MediaPipe, Scikit-Learn, Transfer Learning, Model Evaluation.
    - **Computer Vision:** OpenCV, YOLOv8, Object Detection, Facial Landmark Tracking, Edge AI, Dlib, Image Segmentation, Video Buffering.
    - **Generative AI & Agents:** LangChain, LlamaIndex, RAG Pipelines, Vector DBs (Chroma/FAISS), Anthropic MCP, Prompt Engineering, N8n Workflows, LLM Evaluation.
    - **Frontend & Interactive:** React, TypeScript, Next.js, Three.js, WebGL, TailwindCSS, HTML5 Canvas, Responsive Grids.
    - **Backend, Data & Cloud:** Python, FastAPI, Flask, Alteryx Designer, SQL / SQLite, Pandas & NumPy, Docker, Vercel, Git & GitHub.
    - **Product Design (UI/UX):** Figma, Design Tokens, Autolayout 5.0, Component Variants, Wireframing, Interactive Prototyping, WCAG AA Standards, Design Handoff.

- [x] **TASK-604**: **Interactive Skill Chips with Filter Tagging & Work Cross-Linking**
  - Real-time search filter allowing instant search across all 48+ skills in the matrix.
  - Interactive clickable skill chips: clicking any chip (e.g. `OpenCV`, `Figma`, `YOLOv8`, `React`, `Python`) activates an active filter banner HUD displaying verified project counts across GitHub repositories, commercial client deployments, and Figma design systems.
  - One-click cross-link action button (`View in Work Section ↗`) smoothly navigating to the active projects in `#work`.

---

### Phase 7: About, Professional Journey & Engineering Principles

**Goal:** Craft a compelling engineering narrative connecting education, awards, principles, and real-world experience.

- [x] **TASK-701**: **About Section Layout (`#about`)**
  - Modular `AboutSection.tsx` with responsive two-column editorial layout (`lg:grid-cols-12`).
  - Left column houses personal narrative, education at ADCET (8.80 SGPA), ₹1.5L+ research grant, consulting practice, and Core Principles.
  - Right column houses the interactive chronological timeline (`#journey`).
  - Section header with eyebrow `05 About & Engineering Journey`, headline `Engineering intelligent systems with creative execution.`, and high-impact telemetry cards (`8.80 SGPA`, `11+ Live`, `₹1.5L+ Grant`, `1st Place`).
  - Cross-navigation links to `#work` and `#consultant`.

- [x] **TASK-702**: **Milestones & Achievements Timeline (`#journey`)**
  - Component: `TimelineJourney.tsx` with accessible anchor id `#journey` and category filters:
    - **Academic & Research:** B.Tech in CSE at ADCET (SGPA 8.80 / 10), Minor in EV Technology; Lead student researcher in healthcare AI.
    - **Commercial Consulting:** Independent Consultant & Product Designer across 11+ deployed client systems, owning the complete UI/UX lifecycle and engineering handoff.
    - **Award & Funding:** 1st Place — B-Plan Competition (Discovery 2k24) and INR 1,50,000+ Institutional Research Sponsorship from Institution's Innovation Council (IIC) for CNN medical diagnostics.
    - **Certifications & Industry Internships:** Alteryx Designer Core Certified, Devtown Cloud Computing & DevOps, Oracle AI Agent Foundation (90/100), NVIDIA DLI Generative AI, IBM Project Management, and Paarsh Infotech Internship.
  - Interactive features: Category filtering pills (`All`, `Academic`, `Consulting`, `Awards & Grants`, `Certifications`), continuous vertical timeline connector line with glowing animated pulse node on current milestone, metric chips, and expandable highlights accordion.

- [x] **TASK-703**: **Core Engineering Principles (`// Principles`)**
  - Component: `PrinciplesList.tsx` rendering 4 foundational tenets with monospace indices `// 01` through `// 04`, dedicated SVG icons, titles, taglines, and descriptions:
    - `01 Real-World Utility First` — *Engineered for human impact, not academic novelty.* Build solutions for verified human and operational problems (pothole detection, drowsiness alerts).
    - `02 Ship Complete Loops` — *Data to weights, backend to frontend, zero dangling threads.* Connect raw ML algorithms, robust data pipelines, and responsive UI into independently operable products.
    - `03 Visual & Structural Clarity` — *Sophisticated under the hood, intuitive up front.* Complex backends deserve clean, intuitive, and accessible interfaces that communicate telemetry clearly.
    - `04 Transparent Documentation` — *Reproducible code, structured READMEs, open-source trust.* Maintain reproducible code, benchmark reports, and detailed documentation.
  - Production standards indicator and subtle glowing hover states matching the Soren Hale dark obsidian theme.

- [x] **TASK-704**: **Live Status & Availability Banner**
  - Component: `AvailabilityBanner.tsx` prominently rendered at the top of Section 05:
    - Current status pill with pulsing emerald dot: `Available for Hire & Select Consulting` and `Open to Full-Time AI/ML & Engineering Roles | Available for Select Client Consulting`.
    - Location badge: `Pune, Maharashtra, India` with `MapPinIcon`.
    - Direct action buttons:
      - `Download CV` button with download attribute pointing to `/Swapnil_Patil_Resume1.pdf`.
      - `GitHub` profile link (`https://github.com/swapnil3104`) with external link indicator.
      - `Let's Talk` contact quick-action smoothly navigating to `#contact`.

---

### Phase 8: Lab, Learning Journeys & Technical Experiments

**Goal:** Showcase Swapnil's commitment to continuous learning, research repositories, and creative experiments.

- [x] **TASK-801**: **Lab Section Header (`#lab`)**
  - Section wrapper `SectionWrapper id="lab"` with accessible anchor id `#lab` and scrollspy detection.
  - Eyebrow: `06 The Research Lab` (`// Lab & Technical Experiments`).
  - Headline: `Learning journeys, open-source tools, and technical deep-dives.`
  - Description: *Public study repositories and engineering experiments tracking structured mastery across machine learning mathematics, deep neural networks, computer vision, agentic protocols, and WebGL graphics.*
  - Header Action: Direct button linking to Swapnil's public repositories (`Explore All Repositories ↗`).
  - Telemetry & KPI chips: `6 Repos` (Structured Study Paths), `ML & Deep Learning` (PyTorch & Scikit-Learn), `Vision & MCP` (OpenCV & Anthropic Tools), `100% Public` (Open Source & MIT).

- [x] **TASK-802**: **Learning Path Repository Cards & Search/Filter Toolbar**
  - Component `LabCard.tsx` with category indicator, language pill, key curriculum modules checklist, topics badges, copyable clone command with one-click clipboard copy + feedback toast, and dual actions (`[Curriculum]` & `[GitHub ↗]`).
  - Implemented 6 structured learning repositories in `src/data/lab.ts`:
    - **Machine Learning Journey:** `https://github.com/swapnil3104/Machine-Learning-Journey`
      - Mathematical foundations (linear algebra, multivariable calculus, probability), supervised/unsupervised algorithms, exploratory data analysis, feature engineering, and production Scikit-Learn workflows.
    - **Deep Learning Journey:** `https://github.com/swapnil3104/deep-learning-journey`
      - Neural network architectures, backpropagation calculus, optimization algorithms (Adam/SGD), PyTorch/TensorFlow implementations, CNNs for computer vision, and transfer learning pipelines.
    - **Computer Vision Learning Path:** `https://github.com/swapnil3104/Computer-Vision-Learning-Path-using-OpenCV`
      - Module breakdown: Filtering, contours, feature matching, real-time video processing.
    - **Model Context Protocol (MCP) Learning Path:** `https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path`
      - Anthropic MCP server implementation guides, JSON-RPC schema, agent tool architectures.
    - **RAG Engineering:** `https://github.com/swapnil3104/RAG-Engineering`
      - Semantic vector indexing benchmarks, hybrid retrieval experiments.
    - **3D Arcade Runner WebGL Experiment:** `https://github.com/swapnil3104/3D_Car_RunningGame`
      - Three.js WebGL scene optimization, procedural track generation, Web Audio synthesis.
  - Real-time search filter and interactive category tabs (`All (6)`, `Machine Learning`, `Deep Learning`, `Computer Vision`, `LLM & Agent Systems`, `Generative AI`, `WebGL & Graphics`) with active count badges and empty state recovery.

- [x] **TASK-803**: **Interactive 3D & Creative Experiments Spotlight & Visual Simulation**
  - Component `ArcadeRunnerVisual.tsx` rendering vector WebGL simulation HUD with horizon line, Catmull-Rom perspective road, lane dashes, procedural obstacle pylons, wireframe sports car with glowing underglow, and telemetry overlays (184 KM/H speed HUD, 60 FPS, WebGL 2.0).
  - Spotlight feature banner highlighting Three.js rendering, procedural track generation, AABB collision detection, and Web Audio API engine oscillator synthesis.

- [x] **TASK-804**: **Direct GitHub Links, Copyable Clone Commands & Curriculum Deep Dive Modal**
  - Component `LabModal.tsx`: Accessible dialog with backdrop blur, Escape key listener, body scroll lock, complete 4-phase curriculum breakdown with checkmarked topics, recommended prerequisites, clone command with copy-to-clipboard button, and direct GitHub action.
  - Clone command formatting with `$ git clone ...` in both card preview and modal with verified URLs.

---

### Phase 9: Contact & Conversion Footer

**Goal:** Ensure a seamless conversion flow for recruiters, hiring managers, and prospective consulting clients.

- [x] **TASK-901**: **High-Impact Conversion Banner (`#contact`)**
  - Component `ConversionBanner.tsx`: Ambient emerald glow card, status pill `Available for Q1/Q2 Roles & Select Consulting`, verified location and timezone metadata.
  - Headline: `Have an ambitious project or role? Let’s talk.`
  - Copy: *Open to discussing full-time engineering roles, AI/ML initiatives, technical consulting, and design system projects.*
  - Primary Contact Button: `Send an Email` on [swapnilp3104@gmail.com] with pre-filled subject line.
  - Quick action to copy verified email address with animated `Copied address!` feedback.
  - Download verified Resume (PDF) action linking directly to `/Swapnil_Patil_Resume1.pdf`.
  - Confidence metrics ribbon: `11+ Client Systems`, `₹1.5L+ Research Grant`, `< 24h Response Time`, `100% Delivery Rate`.

- [x] **TASK-902**: **Verified Social & Professional Channels**
  - Component `ContactChannels.tsx`: Obsidian card grid with border hover glows and direct access pills:
    - **GitHub:** `https://github.com/swapnil3104` with Octocat icon and repository counter.
    - **LinkedIn:** `https://www.linkedin.com/in/swapnil-sanjay-patil` (displaying `in/swapnil3104`) with verified recruiter-friendly badge.
    - **Direct Email:** `swapnilp3104@gmail.com` with one-click compose and copy buttons.
    - **Phone & WhatsApp:** `+91 93225 24034` with `tel:` trigger, WhatsApp direct chat link, and copy action.
    - **Location & Timezone:** `Pune, Maharashtra, India` with `Asia/Kolkata` (UTC+05:30) indicators and global remote availability note.

- [x] **TASK-903**: **Contact Form or Direct Email Trigger**
  - Component `ContactForm.tsx`: Accessible interactive contact form adhering to Soren Hale design standards:
    - Client-side validation for Name (min 2 chars), Email (regex matching), and Message (min 10 chars, character counter).
    - Engagement / Project Type selector with 5 tailored options and quick preset template pills (`Full-Time Role`, `Consulting Project`, `AI/ML Collab`).
    - Hidden honeypot field (`hp_website`) for automated bot and spam protection.
    - Accessible feedback states: `idle`, `submitting` with spinner, `success` with confirmation dialogue and secondary dispatch, and `error` with `role="alert"` inline notices.

- [x] **TASK-904**: **Footer Metadata & Back-to-Top Action**
  - Component `Footer.tsx`: Polished dark obsidian footer shell with hairline borders:
    - Monospace status line: `status: Open for opportunities · UTC+05:30`.
    - Live real-time Indian Standard Time clock (`hh:mm:ss AM/PM IST`) updating every second.
    - Full site index navigation (Work `01` through Contact `07`).
    - Verified resource links: Resume PDF download, GitHub profile, and LinkedIn profile.
    - Smooth "Back to top (`↑`)" scroll anchor with accessible aria-label.
    - Copyright notice: `© 2026 Swapnil Patil · Engineered with Clean Code & Framer Aesthetics`.

---

### Phase 10: Performance Optimization, Accessibility (A11y), SEO & Analytics

**Goal:** Achieve flawless Core Web Vitals, perfect keyboard accessibility, and discoverable SEO metadata.

- [x] **TASK-1001**: **Core Web Vitals Optimization**
  - **LCP (< 1.0s):** Prioritized responsive WebP hero portrait preloads (`/assets/swapnil-portrait-800.webp` and `400.webp`) with `fetchpriority="high"` and exact media queries in `index.html`. Synchronized `InteractivePortrait.tsx` with native `fetchPriority="high"`, eager decoding, and responsive srcset.
  - **CLS (= 0):** Enforced rigid aspect ratio constraints and explicit dimensions (`aspect-[4/5]`, `h-48 sm:h-52`, `viewBox="0 0 360 200"`) across all visual diagram components (`ProjectVisual`, `ClientVisual`, `DesignVisual`, `ArcadeRunnerVisual`, `InteractivePortrait`).
  - **INP (< 50ms) & Bundle Splitting:** Decomposed monolithic 545 kB bundle into dynamic chunks via `React.lazy` on all 5 case study modals (`ProjectModal`, `ClientModal`, `DesignModal`, `LabModal`, `ServiceModal`). Configured Vite `rollupOptions.output.manualChunks` isolating `vendor-react` (141 kB) and `projects-data` (105 kB). Reduced main JavaScript payload to 260 kB (52 kB gzip) with zero chunks exceeding 500 kB.

- [x] **TASK-1002**: **Comprehensive Accessibility (WCAG 2.1 AA Compliance)**
  - Enforced 4.5:1 minimum color contrast ratio across all text tokens on `#0A0A0B` (elevated `typography-dim` from `#71717A` to `#8E8E93` [5.9:1 contrast]).
  - Universal keyboard focus indicators via `:focus-visible` styling (`outline: 2px solid #10B981`, `outline-offset: 3px`, emerald glow aura) applied globally across all buttons, links, inputs, selects, and textareas.
  - Descriptive `alt` attributes on hero portrait and comprehensive `aria-label` attributes on all icon-only buttons (search clear triggers, hamburger toggle, drawer close, copy triggers, preloader skip, back-to-top button).
  - Complete `prefers-reduced-motion` compliance across CSS global rules, `useReducedMotion` hook, `TechMarquee` static fallback track, `TerminalPreloader` instant dismiss, and `InteractivePortrait` particle canvas suppression.

- [x] **TASK-1003**: **SEO Metadata & OpenGraph Cards**
  - Exact verified page title: `Swapnil Patil — AI/ML Engineer, Python Developer & Product Designer`.
  - Comprehensive meta description highlighting AI/ML, Computer Vision, Independent Consulting, and UI/UX Design.
  - Complete OpenGraph (`og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:url`, `og:type="profile"`, `profile:first_name="Swapnil"`) and Twitter cards (`summary_large_image`).
  - Canonical URL (`https://swapnilpatil.dev`) and full favicon suite (`favicon.ico`, `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`, `robots.txt`, `sitemap.xml`).
  - Generated professional 1200x630 OpenGraph preview card (`/og-image.png`) with dark obsidian aesthetic, portrait composite, telemetry metrics ribbons, and tech pills.

- [x] **TASK-1004**: **Structured JSON-LD Schema Markup**
  - Integrated `@graph` schema markup in `index.html` with:
    - `Person` schema: Swapnil Patil, jobTitle, worksFor, alumniOf (ADCET Ashta), sameAs (GitHub, LinkedIn), verified contact email, phone, location (Pune, Maharashtra, India), and comprehensive `knowsAbout` tech stack ontology.
    - `WebSite` schema with canonical URLs and author attribution.
    - `ItemList` of `SoftwareSourceCode` schemas for featured open-source repositories: ISLR Studio, DrishtiDrive AI, Road Distress & Pothole Detection, and Smart Edge Fall Detection.

- [x] **TASK-1005**: **Privacy-Preserving Analytics & Error Logging**
  - Created zero-cookie, zero-PII privacy telemetry utility (`src/utils/analytics.ts`) with strict Global Privacy Control (`navigator.doNotTrack === '1'`) honoring.
  - Native plug-and-play triggers for Plausible / Vercel Web Analytics with custom event tracking for case study modal opens, resume downloads, contact copying, and form submissions.
  - Built dark obsidian `ErrorBoundary.tsx` component with terminal error recovery chrome, sanitized error reporting, soft reset, and application reload actions. Bound globally in `main.tsx`.

---

### Phase 11: Cross-Device QA, Verification & Production Deployment

**Goal:** Conduct thorough multi-device testing and ship the live portfolio.

- [x] **TASK-1101**: **Responsive Multi-Breakpoint QA**
  - **Desktop (`>= 1200px`):** Verified 3-column asymmetric grid layouts, micro-interaction hover states, canvas mathematical glyph particle system on portrait with pointer velocity tracking, and fluid max-width constraints (`1280px`).
  - **Tablet (`810px–1199px`):** Verified 2-column grid adaptation, smooth navigation collapse to hamburger at `< 900px` (`lg` breakpoint), and preserved portrait aspect ratio (`4:5`).
  - **Mobile (`<= 809px`):** Verified 1-column card stacking, elevated interactive touch targets to guaranteed `>= 48x48px` minimum dimensions (hamburger button, drawer action pills, navigation links), accessible focus trapping in `MobileDrawer.tsx`, and zero horizontal scroll (`overflow-x: hidden`).

- [x] **TASK-1102**: **Cross-Browser Verification**
  - Configured `target: 'es2020'` in `vite.config.ts` for broad ES module support across modern Chrome, Safari, Firefox, Edge, and iOS Safari / Android WebViews.
  - Active Autoprefixer post-processing pipeline ensuring standard vendor prefixes for layout and styling.
  - Robust typography fallback chains (`Bricolage Grotesque`, `Geist`, `JetBrains Mono`, `-apple-system`, `sans-serif`, `monospace`) and `-webkit-font-smoothing: antialiased`.

- [x] **TASK-1103**: **Link Verification & External Anchor Audit**
  - Audited all 71 anchor tags project-wide; enforced `rel="noopener noreferrer"` across all 39 `target="_blank"` external anchors (`ContactChannels.tsx`, `Footer.tsx`, `MobileDrawer.tsx`, `Navbar.tsx`, `ProjectCard.tsx`, `ProjectModal.tsx`).
  - Verified 12/12 public GitHub repositories live on `https://github.com/swapnil3104` with HTTP 200 response codes.
  - Verified 5/5 Figma design links with valid HTTP 200 response codes.
  - Audited all 11 Independent Consultant client deployment URLs in `projects-consultant.ts`.

- [x] **TASK-1104**: **Production Deployment & Domain Binding**
  - Created enterprise `vercel.json` configuration with immutable asset caching (`public, max-age=31536000, immutable`), media caching, security headers (HSTS, CSP-friendly headers, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), and SPA route rewrites to `/index.html`.
  - Production build verified via `npm run build` with zero TypeScript errors and optimized chunk allocation.
  - Production SEO suite verified: `sitemap.xml`, `robots.txt`, `site.webmanifest`, OpenGraph card (`/og-image.png`), and structured JSON-LD schemas.

---

## 📋 Definition of Done (DoD) Checklist

For any phase to be marked **Completed**:
1. All task checkboxes within the phase are checked.
2. Code/components adhere to the dark-mode engineering design tokens defined in Phase 0.
3. Every external link (GitHub, Client Website, Figma) is tested and valid.
4. Mobile responsiveness is verified on small viewports (375px–430px).
5. No horizontal overflow or layout jank.
6. Commit message follows conventional format (e.g. `feat(work): add independent consultant showcase`).

