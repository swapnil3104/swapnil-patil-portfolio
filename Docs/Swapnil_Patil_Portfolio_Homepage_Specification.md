# Swapnil Patil --- Portfolio Homepage Specification & Layout Architecture

**Source Reference:** https://wild-hours-611915.framer.app/\
**GitHub:** https://github.com/swapnil3104\
**LinkedIn:** Add verified LinkedIn profile URL\
**Persona / Brand:** Swapnil Patil --- Computer Science Engineer, AI/ML
Engineer, Python Developer & Product Designer\
**Location:** Pune, Maharashtra, India\
**Platform:** Framer (Responsive Multi-Breakpoint Architecture: Desktop,
Tablet, Mobile)\
**Aesthetic & Theme:** Premium dark-mode engineering portfolio featuring
editorial typography, monospace accents, GitHub-inspired UI widgets,
interactive project cards, subtle motion, and a high-contrast technical
visual language.

------------------------------------------------------------------------

## 1. Global Page Structure & Responsive Layout System

The portfolio should communicate technical depth, product thinking,
creativity, and practical project experience. Build a responsive
experience across Desktop, Tablet, and Mobile breakpoints using semantic
HTML5 landmarks and accessible interactions.

### 1.1 Accessibility & Intro Animation

-   **Skip Link:** `Skip to content`, positioned first in the DOM for
    keyboard navigation.
-   **Intro / Terminal Animation (`role="status"`,
    `aria-live="polite"`):**
    -   Display a short terminal-style introduction on initial load.
    -   Prompt:
        `> Swapnil Patil — AI/ML Engineer & Computer Science Engineer`
    -   Include a subtle blinking cursor.
    -   Keep the intro brief and provide a reduced-motion alternative.
-   **Accessibility:** Maintain visible focus states, sufficient
    contrast, descriptive image alt text, keyboard-operable navigation,
    and reduced-motion support.

### 1.2 Global Sticky Navigation Header (`<header>`)

A full-width horizontal navigation bar divided into three functional
zones.

  -------------------------------------------------------------------------
  Zone              Alignment         Elements & Copy     Links / Behavior
  ----------------- ----------------- ------------------- -----------------
  **Brand Mark**    Left              `Swapnil Patil` +   Links to `/` with
                                      green status dot    accessible home
                                                          label

  **Primary Nav**   Center            `01 Work`,          Links to `#work`,
                                      `02 Expertise`,     `#expertise`,
                                      `03 About`,         `#about`, `#lab`,
                                      `04 Lab`,           `#journey`
                                      `05 Journey`        

  **Availability &  Right             Availability        Contact section
  CTA**                               label +             or verified
                                      `Let's Connect`     contact link
                                      button              
  -------------------------------------------------------------------------

**Responsive behavior:** - Desktop: show all navigation links. -
Tablet/Mobile: collapse navigation into an accessible menu toggle. -
Preserve the brand mark and a compact contact CTA. - Avoid claiming
availability unless Swapnil confirms the status and wording.

------------------------------------------------------------------------

## 2. Hero Section (Primary Homepage Experience)

The hero is an asymmetric two-column layout on a deep charcoal
background. It should establish Swapnil's professional identity
immediately and guide visitors toward projects and contact.

### 2.1 Visual & Interactive Background Layer

-   **Portrait Asset:** Use Swapnil's supplied formal portrait,
    preferably the dark-background studio portrait.
-   **Image treatment:** High-contrast editorial crop, subtle edge
    lighting, and restrained grain.
-   **Interactive layer:** Optional canvas/WebGL shader effect that
    responds to pointer movement and reveals abstract code, particles,
    or subtle distortion.
-   **Helper copy:** `Move to explore` on pointer-enabled devices only.
-   **Mobile behavior:** Use a static optimized portrait or lightweight
    touch-friendly effect.
-   Do not distort, regenerate, or materially alter Swapnil's facial
    identity.

### 2.2 Left Column: Editorial Copy, CTAs & Key Metrics

1.  **Eyebrow / Role Tag:**

    -   Copy:
        `// AI/ML Engineer · Python Developer · Computer Vision · Product Designer`
    -   Use monospace styling for the `//` prefix and technical role
        labels.

2.  **Primary Headline (`<h1>`):**

    **Building intelligent products that solve real-world problems.**

    -   Break into staggered line spans for entrance animation.
    -   Keep the headline readable and avoid excessive text effects.

3.  **Subheadline / Value Proposition:**

    `I build AI/ML applications, computer vision systems and intelligent software products by combining engineering, creativity and product thinking.`

4.  **Action Button Group:**

    -   **Primary:** `Explore My Work` → `#work`
    -   **Secondary:** `Download Resume` → verified resume PDF
    -   Optional text link: `Connect on LinkedIn` → verified LinkedIn
        profile

5.  **Key Metrics (`<dl>` Definition List --- 3-Column Grid):**

    -   **Metric 1:** `AI/ML` --- Core focus
    -   **Metric 2:** `Computer Vision` --- Specialization
    -   **Metric 3:** `RAG & AI Agents` --- Emerging focus

    Replace these category indicators with numeric metrics only when
    they are verified. Do not reuse fictional metrics such as years of
    experience, client counts, or projects launched.

### 2.3 Right / Floating Column: GitHub Activity Card

Create a GitHub-inspired repository card using real public repository
information.

**Suggested featured repository:** - Repository:
`Indian-Sign-Language-Recognition` - Owner: `swapnil3104` - Stack:
Python, TensorFlow, MediaPipe, OpenCV, Flask - Summary: Real-time Indian
Sign Language gesture recognition with hand-landmark tracking, sentence
synthesis, and an interactive learning experience. - Link:
https://github.com/swapnil3104/Indian-Sign-Language-Recognition

**Card structure:** - Git branch / repository icon and repository
name. - Short project description. - Verified language / technology
tags. - `View repository ↗` action. - Entire card may link to the
repository.

**Important:** Do not invent commit messages, branch activity, merge
timestamps, contribution counts, stars, or repository metrics. If live
GitHub API data is unavailable, label the card `Featured repository`
rather than `Latest commit`.

------------------------------------------------------------------------

## 3. Section 2: GitHub Project Marquee & Profile Metadata Strip

Immediately below the hero, add a horizontal project ticker and a
compact metadata strip.

### 3.1 Project Ticker ("Building With")

-   **Label:** `// Building with`

-   **Visual Presentation:** Seamless, slow horizontal marquee separated
    by `/` symbols.

-   **Suggested technologies:**

    `Python / PyTorch / TensorFlow / OpenCV / Scikit-learn / FastAPI / LangChain / React / SQL`

-   Pause animation when the user prefers reduced motion.

-   Keep a static accessible text equivalent for screen readers.

### 3.2 Professional Metadata Bar

A three-column horizontal strip:

1.  **Location:** `Pune · Maharashtra · India`
2.  **Focus:** `AI/ML · Computer Vision · Python`
3.  **Connect:** `GitHub · LinkedIn · Email`

Use verified links and avoid fake live-status claims.

------------------------------------------------------------------------

## 4. Section 3: Selected Work / Engineering Projects (`#work`)

This is the primary demonstration of technical depth and product capability. Present work across three cohesive categories: **Core Engineering & AI/ML Projects (GitHub)**, **Independent Consultant (Client Deliveries)**, and **UI/UX Design (Figma Systems)**.

### 4.0 GitHub Action Button & Filter Toolbar
* **Prominent GitHub Action Button in Work Section:**
  * Component: `<a href="https://github.com/swapnil3104" target="_blank" rel="noopener noreferrer" class="btn-github-work">View All Projects on GitHub ↗</a>`
  * Styling: Dark high-contrast pill button featuring the GitHub Octocat icon, live repository count badge (`15+ Repositories`), and subtle emerald hover border.
* **Category Filters:**
  * `All Work`
  * `AI/ML & Engineering (GitHub)`
  * `Independent Consultant (Client Deliveries)`
  * `UI/UX Design (Figma)`

### 4.1 Featured Projects (GitHub Showcase)

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Order          Project          Focus            Technology /   Repository
                                                   Concepts       
  -------------- ---------------- ---------------- -------------- -----------------------------------------------------------------------------------------------------------------
  **01**         **Indian Sign    Real-time        Python,        https://github.com/swapnil3104/Indian-Sign-Language-Recognition
                 Language         gesture          TensorFlow,    
                 Recognition**    recognition and  MediaPipe,     
                                  learning studio  OpenCV, Flask  

  **02**         **DrishtiDrive   Portable driver  Python,        https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers
                 AI**             drowsiness       PyTorch,       
                                  detection and    OpenCV,        
                                  multi-stage      FastAPI,       
                                  alerts           React,         
                                                   Raspberry Pi   

  **03**         **RoadGuard AI** Pothole          Python,        https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-
                                  detection and    Computer       
                                  municipal        Vision, YOLO,  
                                  reporting        geolocation    
                                  concept                         

  **04**         **RAG            End-to-end RAG   Python,        https://github.com/swapnil3104/RAG-Engineering
                 Engineering**    learning and     LangChain,     
                                  implementation   LlamaIndex,    
                                  resource         vector         
                                                   databases,     
                                                   FastAPI        

  **05**         **3D Car Running Infinite arcade  React,         https://github.com/swapnil3104/3D_Car_RunningGame
                 Game**           racing runner    Three.js,      
                                  in WebGL         TailwindCSS,   
                                  (60 FPS)         Zustand,       
                                                   Web Audio API  

  **06**         **Traffic Sign   Deep-learning    Python,        https://github.com/swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras
                 Recognition**    traffic sign     TensorFlow,    
                                  classification   Keras, CNN,    
                                  and voice        Flask          
                                  guidance                        

  **07**         **Restaurant     Table occupancy  YOLO26,        https://github.com/swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker
                 Table Occupancy  and service      computer       
                 Tracker**        monitoring       vision, object 
                                                   tracking       
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 4.2 Additional GitHub Projects

Show these in a secondary grid or an expandable `More Projects` section:

-   **SelfCareAI --- Eye Disease Detection:**
    https://github.com/swapnil3104/Self-Care-AI
-   **VisionMeasure --- Smart Object Measurement:**
    https://github.com/swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV
-   **Machine Learning Journey:**
    https://github.com/swapnil3104/Machine-Learning-Journey
-   **Deep Learning Journey:**
    https://github.com/swapnil3104/deep-learning-journey
-   **Computer Vision Learning Path:**
    https://github.com/swapnil3104/Computer-Vision-Learning-Path-using-OpenCV
-   **Model Context Protocol Learning Path:**
    https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path
-   **Website Design Automation System:**
    https://github.com/swapnil3104/Website-Design-Automation-System
-   **Face Recognition Attendance Management System:**
    https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System

### 4.3 Project Card Layout

Each project card should include: - Project number and category. -
Project name and concise problem statement. - One genuine project
screenshot, architecture image, or custom visual. - Technology tags. -
Short description of the approach and outcome. - Repository link and,
only when available, a live demo link.

### 4.4 Case Study Detail Template

Each featured project detail page or expanded panel should contain:

1.  Problem / motivation.
2.  Project objective.
3.  Solution overview.
4.  Architecture and workflow.
5.  Tech stack.
6.  Implementation highlights.
7.  Evaluation results, only when documented and verified.
8.  Limitations and future improvements.
9.  Repository and demo links.

### 4.5 Section: Independent Consultant (Client Deliveries & Commercial Projects)

A dedicated section displaying Swapnil's commercial client engagements as an independent technical consultant and product designer:

| # | Client / Project | Live Website | Industry Domain | Scope & Technical Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Studio Squanta** | https://studiosquanta.com/ | Brand & Digital Agency | Full-stack web architecture, interactive agency showcase, animations, and Core Web Vitals optimization. |
| **02** | **Altecht** | https://altecht.com/ | Enterprise IT & Cloud Solutions | Corporate portal development, IT infrastructure services presentation, modern dark technical branding. |
| **03** | **SS Creation** | https://www.sscreation.online/about | Creative & Production Studio | Dynamic brand website, interactive story/timeline, commercial portfolio gallery, client inquiry pipeline. |
| **04** | **Display Promotion** | https://www.displaypromotion.in/ | Marketing & Display Solutions | Digital service catalogue, visual media showcase, high-impact video & exhibition displays layout. |
| **05** | **Samarth Business Group** | https://www.samarthbusinessgroup.com/ | Business Conglomerate | Multi-division corporate website, enterprise service vertical architecture, investor relations layout. |
| **06** | **Muscle Build Nutrition** | https://www.musclebuildnutrition.co.in/ | Fitness & Supplements E-Commerce | High-speed e-commerce storefront, product catalog with nutritional specs, secure checkout flow. |
| **07** | **Shubharambh Events** | https://www.shubharambhevents.co.in/ | Event Management & Weddings | Luxury wedding and event planning portfolio, interactive service package pricing, booking workflows. |
| **08** | **BytePro Labs** | https://byteprolabs.com/ | AI & Software Product Studio | Tech startup incubator portal, product showcases (ReelShop, Student-X), developer-oriented aesthetics. |
| **09** | **Spark** | https://spark-woad.vercel.app/ | Modern Web App Platform | Modern interactive web application deployed on Vercel, clean component architecture, responsive UI. |
| **10** | **Student-X** | https://student-x.vercel.app/ | EdTech & Student Portal | Student community collaboration hub, academic resources aggregator, responsive dashboard on Vercel. |
| **11** | **Prerna Saree** | https://prernasaree.com/ | Luxury Ethnic E-Commerce | Elegant ethnic fashion digital storefront, high-resolution textile showcase, catalog filtering. |

### 4.6 Section: UI / UX Design (Figma Systems & Prototypes)

A dedicated section displaying Swapnil's end-to-end product design files, atomic design systems, and interactive prototypes crafted in Figma:

1.  **HousTrack — Real Estate & Property Asset Management System**
    *   **Figma URL:** https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1
    *   **Platform:** Responsive Web Dashboard & Mobile Companion
    *   **Highlights:** Property portfolio overview, tenant portal, automated rent tracking, and maintenance ticket kanban.

2.  **GlowVita Salon App — Luxury Salon Booking Experience**
    *   **Figma URL:** https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1
    *   **Platform:** Native iOS & Android Mobile Application
    *   **Highlights:** Stylist calendar scheduling, service discovery cards, custom treatment drawers, clean aesthetic.

3.  **Melodies — Web Music Streaming & Audio Community**
    *   **Figma URL:** https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6
    *   **Platform:** Web Desktop & Tablet Music Platform
    *   **Highlights:** High-contrast dark player UI, live listening rooms, synchronized playlist voting, and waveform visualizer.

4.  **FlyMitra — Smart Travel Companion & Flight Aggregator**
    *   **Figma URL:** https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6
    *   **Platform:** Mobile App (iOS & Android)
    *   **Highlights:** Flight price comparison, multi-city visual timeline, boarding pass wallet with QR codes.

5.  **Food App — On-Demand Food Delivery & Kitchen Ordering UI**
    *   **Figma URL:** https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6
    *   **Platform:** Mobile App (iOS & Android)
    *   **Highlights:** Dish photography cards, custom meal toppings drawer, live GPS order tracking with countdown timer.
5.  Tech stack.
6.  Implementation highlights.
7.  Evaluation results, only when documented and verified.
8.  Limitations and future improvements.
9.  Repository and demo links.

Do not present prototypes, research experiments, or college projects as
commercially deployed products unless verified.

------------------------------------------------------------------------

## 5. Section 4: Expertise & Technical Capabilities (`#expertise`)

Use a structured capability grid with clear categories rather than
unsupported percentage-based skill bars.

### 5.1 AI & Machine Learning

-   Machine Learning fundamentals and model evaluation.
-   Deep Learning and CNN architectures.
-   Transfer learning and model experimentation.
-   Classification and predictive modeling.
-   Explainable AI concepts.

### 5.2 Computer Vision

-   OpenCV and image processing.
-   Object detection and tracking.
-   Image classification.
-   Face and hand landmark workflows.
-   Real-time camera and video processing.

### 5.3 Generative AI & RAG

-   Retrieval-Augmented Generation fundamentals.
-   Embeddings and vector databases.
-   Document processing and chunking.
-   LangChain and LlamaIndex.
-   Model Context Protocol learning and implementation.

### 5.4 Python & Software Development

-   Python application development.
-   FastAPI and Flask.
-   REST API integration.
-   SQL, MySQL, Oracle and SQLite.
-   Git and GitHub.

### 5.5 Product & Design

-   UI/UX design.
-   Graphic design and visual communication.
-   Product thinking and requirement analysis.
-   Project coordination and management.

### 5.6 Tools & Frameworks

Present verified tools as compact technology chips, grouped by
discipline. Do not imply expert-level proficiency for every tool simply
because it appears in a repository.

------------------------------------------------------------------------

## 6. Section 5: About & Professional Journey (`#about`)

A personal editorial section that connects engineering, creativity, and
professional growth.

### 6.1 About Copy

`I'm Swapnil Patil, a Computer Science Engineering student and aspiring AI/ML Engineer based in Pune, Maharashtra. I enjoy turning ideas into practical software products — from machine learning and computer vision systems to intelligent applications and user-focused digital experiences.`

`Beyond development, I bring an interest in product design, visual storytelling, collaboration, and continuous learning. I enjoy exploring emerging technologies and building projects that connect technical problem-solving with real-world needs.`

### 6.2 Education

-   **Degree:** B.Tech --- Computer Science and Engineering.
-   **Institution:** Annasaheb Dange College of Engineering and
    Technology (ADCET), Ashta.
-   **Education status:** Fourth-year student, subject to current
    verification.
-   Add graduation year and academic details only after confirmation.

### 6.3 Experience

Include the independent freelance / product design experience using the
accurate dates and details from LinkedIn.

Potential content to verify against LinkedIn: - Independent Freelancer
--- Product Designer & Project Lead. - Coordinated UI/UX design and
product delivery. - Led cross-functional collaboration. - Worked on
AI/ML solutions and AI-agent workflow design.

Do not publish the previously mentioned `15+ products`,
`up to 5 team members`, or other numeric claims until confirmed against
the current LinkedIn profile and supporting records.

### 6.4 Achievements & Certifications

Potential entries to verify: - Winner --- B-Plan Competition, Discovery
2k24. - Alteryx Designer Core Certified. - Devtown Cloud Computing and
DevOps bootcamp completion. - Relevant college events, leadership, and
project showcases.

Use certificate links or images where available.

------------------------------------------------------------------------

## 7. Section 6: Lab / Learning & Experiments (`#lab`)

Show the engineering process behind the projects: experiments, technical
learning, and prototypes.

### 7.1 Learning Journeys

-   Machine Learning Journey.
-   Deep Learning Journey.
-   Computer Vision Learning Path using OpenCV.
-   Natural Language Processing Learning Journey.
-   Model Context Protocol Learning Path.
-   RAG Engineering.

### 7.2 Lab Card Design

Each card should contain: - Topic or experiment name. - Short learning
objective. - Technologies used. - Progress label such as `Learning`,
`Experimenting`, or `Completed`, based on actual status. - Repository or
notebook link.

Avoid fabricated research results and unsupported claims of production
readiness.

------------------------------------------------------------------------

## 8. Section 7: Journey, Certifications & Writing (`#journey`)

Use a chronological timeline for professional milestones and a separate
editorial list for technical writing.

### 8.1 Journey Timeline

Suggested categories: - Education and academic milestones. - Project
launches and demonstrations. - Competition achievements. -
Certifications and bootcamps. - Freelance and product-design
experience. - Technical learning milestones.

Use actual dates wherever possible. Do not invent dates.

### 8.2 Writing / Technical Notes

Potential article topics: - Building practical computer vision
applications. - Lessons from developing an Indian Sign Language
Recognition system. - Understanding RAG architecture and retrieval
pipelines. - Building AI-powered applications with Python. - Model
evaluation, experimentation, and responsible reporting.

Only display published articles with real links. Unpublished topics may
appear as planned writing only if clearly labeled.

------------------------------------------------------------------------

## 9. Section 8: Contact & Conversion Footer (`#contact`)

A clear final conversion section inviting recruiters, collaborators, and
clients to connect.

### 9.1 Contact CTA

**Headline:** `Have an idea worth building? Let's connect.`

**Supporting copy:**

`I'm interested in opportunities, meaningful collaborations, AI/ML projects, and product-focused engineering work.`

### 9.2 Contact Links

-   GitHub: https://github.com/swapnil3104
-   LinkedIn: Add verified profile URL.
-   Email: Add verified professional email address.
-   Resume: Add the final downloadable PDF.
-   Optional portfolio contact form with spam protection.

### 9.3 Footer Metadata

-   `Designed & built by Swapnil Patil`
-   `Pune, Maharashtra, India`
-   GitHub and LinkedIn links.
-   Current year generated dynamically.
-   Back-to-top link.

------------------------------------------------------------------------

## 10. Design Tokens & Visual Language Summary

### 10.1 Color Palette

  Token                 Color                      Usage
  --------------------- -------------------------- -------------------------------
  Background            `#0A0A0B`                  Main page background
  Elevated Background   `#111113`                  Section backgrounds
  Surface               `#18181B`                  Cards and panels
  Border                `rgba(255,255,255,0.08)`   Hairline dividers
  Primary Text          `#F4F4F5`                  Headlines and body text
  Muted Text            `#A1A1AA`                  Supporting copy and metadata
  Accent                `#10B981`                  Status, links and highlights
  Accent Hover          `#34D399`                  Hover and focus states
  Warning / Secondary   `#F59E0B`                  Selective labels and emphasis

### 10.2 Typography Pairing

-   **Display & Headings:** Modern geometric / neo-grotesque sans-serif.
-   **Body:** Highly readable sans-serif with comfortable line height.
-   **Technical Metadata:** Monospace for code labels, section indexes,
    stack tags, timestamps, and repository metadata.
-   Use tight tracking for large headlines and avoid excessively small
    body text.

### 10.3 Grid & Borders

-   Use a consistent max-width content container.
-   Use a 12-column desktop grid and simpler tablet/mobile grids.
-   Use hairline dividers between major sections.
-   Maintain generous whitespace and consistent card radii.
-   Use subtle background gradients and restrained noise textures.
-   Avoid excessive glow, glassmorphism, and animation.

### 10.4 Motion & Interaction

-   Staggered hero text entrance.
-   Subtle image reveal or shader interaction on desktop.
-   Hover elevation and border transitions on project cards.
-   Smooth anchor navigation.
-   Slow marquee animation with reduced-motion support.
-   Keep all interactions responsive and lightweight.

------------------------------------------------------------------------

## 11. Responsive Breakpoint Architecture

  -----------------------------------------------------------------------
  Breakpoint              Layout                  Behavior
  ----------------------- ----------------------- -----------------------
  **Desktop**             Wide two-column hero,   Full navigation,
                          multi-column project    portrait interaction,
                          grid                    rich hover effects

  **Tablet**              Balanced two-column or  Compact navigation,
                          stacked hero            reduced card columns

  **Mobile**              Single-column layout    Menu toggle,
                                                  static/lightweight
                                                  portrait,
                                                  touch-friendly cards
  -----------------------------------------------------------------------

### Mobile Requirements

-   No horizontal page overflow.
-   Minimum comfortable touch target sizes.
-   Hero CTA buttons stack or wrap cleanly.
-   Project cards use readable single-column layouts.
-   Disable hover-only information and provide tap-accessible
    alternatives.
-   Optimize images and defer nonessential visual effects.

------------------------------------------------------------------------

## 12. Content Accuracy, Data Sources & Implementation Rules

### 12.1 Source of Truth

-   **GitHub:** https://github.com/swapnil3104
-   **LinkedIn:** Pending verified profile URL.
-   **Resume:** Use the latest approved resume.
-   **Certificates:** Use original certificate records.
-   **Project outcomes:** Use repository documentation, actual test
    reports, and verifiable demos.

### 12.2 GitHub Integration

Where technically supported, use GitHub API data to display: - Public
repository names and descriptions. - Repository links. - Primary
languages, if available. - Stars and forks, if available. - Latest
activity, if available and accurately timestamped.

Provide a graceful static fallback if the API is unavailable. Never
fabricate repository activity or metrics.

### 12.3 Privacy & Accuracy

-   Do not expose private repositories or private project details.
-   Do not display personal email or phone number without approval.
-   Do not invent client names, testimonials, revenue, performance
    improvements, or employment claims.
-   Do not claim a project is deployed or production-ready unless
    evidence supports it.
-   Use only portfolio assets approved by Swapnil.

------------------------------------------------------------------------

## 13. Final Homepage Section Order

  -----------------------------------------------------------------------
  Order             Section           Anchor            Primary Goal
  ----------------- ----------------- ----------------- -----------------
  **00**            Intro / Terminal  Top               Establish brand
                                                        identity

  **01**            Hero              `#home`           Communicate role
                                                        and value

  **02**            Tech Marquee /    `#stack`          Show technical
                    Metadata                            focus

  **03**            Selected Work     `#work`           Demonstrate real
                    (AI/ML & Core                       projects & GitHub
                    Engineering)                        repositories

  **03.1**          Independent       `#consultant`     Demonstrate commercial
                    Consultant                          client deployments
                                                        (11 live websites)

  **03.2**          UI / UX Design    `#ui-ux`          Showcase Figma product
                                                        systems & interactive
                                                        prototypes

  **04**            Expertise         `#expertise`      Explain
                                                        capabilities

  **05**            About & Journey   `#about`          Build
                                                        professional
                                                        context

  **06**            Lab / Learning    `#lab`            Show curiosity
                                                        and growth

  **07**            Certifications &  `#journey`        Establish
                    Writing                             credibility

  **08**            Contact & Footer  `#contact`        Convert visitors
                                                        into connections
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 14. Final Design Direction

The finished portfolio should feel like a personal engineering
workspace: confident, precise, modern, and genuinely connected to
Swapnil's work.

The visual inspiration comes from the supplied Framer reference, but the
content, projects, professional story, and identity must be Swapnil's
own.

**Core positioning:**

> AI/ML Engineer · Python Developer · Computer Vision Enthusiast ·
> Product Designer

**Core message:**

> Building intelligent products that solve real-world problems.

**Primary conversion goal:** Help recruiters, engineering teams,
collaborators, and potential clients quickly understand Swapnil's
capabilities, explore genuine projects, and make contact.
