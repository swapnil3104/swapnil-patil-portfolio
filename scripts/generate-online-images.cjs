/**
 * Online Image Generator Script for Swapnil Patil Portfolio
 * Generates and downloads high-fidelity project preview images online based on project names.
 * Uses online generative AI (Pollinations AI) with fallback and converts directly to 16:9 WebP.
 *
 * Usage:
 *   node scripts/generate-online-images.cjs [project-id]
 *   node scripts/generate-online-images.cjs --all
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectsDir = path.resolve(__dirname, '../public/assets/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// 7 Featured Engineering & AI Systems
const featuredProjects = [
  {
    id: 'isl-recognition',
    name: 'Indian Sign Language Recognition (ISLR Studio)',
    prompt:
      'A high-tech futuristic AI computer vision interface for Indian Sign Language Recognition ISLR Studio, human hand with glowing emerald green 3D skeletal hand tracking wireframes, joint nodes, coordinates, dark obsidian tech UI dashboard, HUD telemetry, translucent glassmorphic panels, 16:9 cinematic lighting 8k',
  },
  {
    id: 'drishtidrive-ai',
    name: 'DrishtiDrive AI — Truck Driver Drowsiness Alert',
    prompt:
      'Cinematic high-tech edge AI driver safety system inside dark commercial truck cabin at night, infrared IR night vision sensor tracking face, 68-point facial landmark mesh, Eye Aspect Ratio EAR and Mouth Aspect Ratio MAR telemetry HUD overlays, Raspberry Pi edge dashboard, emerald green and amber warning alerts, 16:9',
  },
  {
    id: 'roadguard-ai',
    name: 'RoadGuard AI — Pothole Detection & Municipal Reporting',
    prompt:
      'Cinematic high-tech computer vision and GIS municipal telematics preview for RoadGuard AI, dashboard camera perspective looking over asphalt road highway, fine-tuned YOLOv8 bounding boxes neon detection frames on potholes and asphalt cracks, real-time GPS coordinates, ByteTrack telemetry, GIS heatmaps, emerald green cyber HUD, 16:9',
  },
  {
    id: 'rag-engineering',
    name: 'RAG Engineering — Production Retrieval Architecture',
    prompt:
      'Futuristic high-tech AI system architecture preview for RAG Engineering Production Retrieval Architecture, 3D multi-dimensional vector embedding cluster space, neural network semantic search data flows, FAISS dense index nodes connected by luminous glowing fiber optic lines, BM25 retrieval streams, cross-encoder matrix, obsidian background, emerald green and cyan accents, 16:9',
  },
  {
    id: '3d-car-running-game',
    name: '3D Car Running Game — WebGL Interactive Arcade',
    prompt:
      'Sleek futuristic cyber sports car speeding along infinite curving neon highway in digital cyberpunk grid city at dusk, custom vertex fragment shader emissive glow lines, procedural obstacle wireframes, real-time 60 FPS WebGL telemetry HUD speedometer RPM gauge audio synth waveforms, emerald green neon lime, 16:9',
  },
  {
    id: 'traffic-sign-cnn',
    name: 'Traffic Sign Recognition with Audio Alerts (CNN)',
    prompt:
      'Futuristic ADAS computer vision preview, dashcam view through windshield at European road traffic signs speed limits, glowing neural network CNN convolutional filter bounding overlays, feature map activation heatmaps, 97.4 percent confidence, glowing digital audio soundwave voice alert waveforms, emerald green tech HUD, 16:9',
  },
  {
    id: 'self-care-ai',
    name: 'Self-Care AI — Ophthalmic Medical Diagnostics',
    prompt:
      'Cinematic biomedical ophthalmic AI interface, macro close-up human eye with detailed iris and retina scan, overlaid with deep learning Grad-CAM visual attention heatmaps, neural network segmentation contours, cataract and conjunctivitis risk scoring indicators, clean telemedicine dashboard HUD, obsidian dark background, emerald green and cyan glows, 16:9',
  },
];

function getOnlineImageUrl(prompt) {
  const encoded = encodeURIComponent(prompt.trim());
  return `https://image.pollinations.ai/prompt/${encoded}?width=1200&height=675&nologo=true&seed=2026`;
}

async function downloadAndOptimize(url, destPath) {
  console.log(`Fetching online image from: ${url.slice(0, 80)}...`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await sharp(buffer)
    .resize(1200, 675)
    .webp({ quality: 90 })
    .toFile(destPath);
  console.log(`✓ Saved optimized image to: ${destPath}`);
}

async function run() {
  const targetId = process.argv[2];
  const list = targetId && targetId !== '--all'
    ? featuredProjects.filter((p) => p.id === targetId)
    : featuredProjects;

  if (list.length === 0) {
    console.error(`Unknown project id: ${targetId}`);
    console.log('Available projects:\n' + featuredProjects.map((p) => ` - ${p.id} (${p.name})`).join('\n'));
    process.exit(1);
  }

  console.log(`Generating online images for ${list.length} Featured Engineering & AI Systems...`);
  for (const proj of list) {
    const onlineUrl = getOnlineImageUrl(proj.prompt);
    const dest = path.join(projectsDir, `${proj.id}.webp`);
    try {
      await downloadAndOptimize(onlineUrl, dest);
    } catch (err) {
      console.warn(`Could not download online image for ${proj.id}: ${err.message}`);
      console.log(`Direct Online URL: ${onlineUrl}`);
    }
  }
}

if (require.main === module) {
  run().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = { featuredProjects, getOnlineImageUrl };

