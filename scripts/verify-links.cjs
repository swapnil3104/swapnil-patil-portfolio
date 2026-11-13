const https = require('https');
const http = require('http');
const { URL } = require('url');

const projectsGitHub = [
  'https://github.com/swapnil3104/Indian-Sign-Language-Recognition',
  'https://github.com/swapnil3104/Portable-AI-Based-Drowsiness-Detection-and-Alert-System-for-Indian-Truck-Drivers',
  'https://github.com/swapnil3104/AI-Pothole-Detection-Automated-Municipal-Reporting-System-RoadGuardAI-',
  'https://github.com/swapnil3104/RAG-Engineering',
  'https://github.com/swapnil3104/3D_Car_RunningGame',
  'https://github.com/swapnil3104/Traffic-Sign-Recognition-using-CNN-Keras',
  'https://github.com/swapnil3104/YOLO26-Restaurant-Table-Occupancy-Service-Tracker',
  'https://github.com/swapnil3104/Self-Care-AI',
  'https://github.com/swapnil3104/VisionMeasure-Smart-Object-Measurement-using-OpenCV',
  'https://github.com/swapnil3104/Website-Design-Automation-System',
  'https://github.com/swapnil3104/Model-Context-Protocol-Learning-Path',
  'https://github.com/swapnil3104/Face-Recognition-Attendance-Management-System'
];

const clientWebsites = [
  'https://studiosquanta.com/',
  'https://altecht.com/',
  'https://www.sscreation.online/about',
  'https://www.samarthbusinessgroup.com/',
  'https://www.displaypromotion.in/',
  'https://www.musclebuildnutrition.co.in/',
  'https://www.shubharambhevents.co.in/',
  'https://prernasaree.com/',
  'https://byteprolabs.com/',
  'https://spark-woad.vercel.app/',
  'https://student-x.vercel.app/'
];

const figmaLinks = [
  'https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1',
  'https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1',
  'https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6',
  'https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6',
  'https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6'
];

function checkUrl(urlStr) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(urlStr);
      const mod = parsed.protocol === 'https:' ? https : http;
      const req = mod.request(parsed, {
        method: 'HEAD',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (res) => {
        resolve({ url: urlStr, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
      });

      req.on('error', (err) => {
        resolve({ url: urlStr, error: err.message, ok: false });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ url: urlStr, error: 'Timeout', ok: false });
      });

      req.end();
    } catch (e) {
      resolve({ url: urlStr, error: e.message, ok: false });
    }
  });
}

async function run() {
  console.log('--- Verifying GitHub Repos ---');
  for (const url of projectsGitHub) {
    const res = await checkUrl(url);
    console.log(`[${res.ok ? 'PASS' : 'WARN'}] ${res.url} -> status: ${res.status || res.error}`);
  }

  console.log('\n--- Verifying Client Websites ---');
  for (const url of clientWebsites) {
    const res = await checkUrl(url);
    console.log(`[${res.ok ? 'PASS' : 'WARN'}] ${res.url} -> status: ${res.status || res.error}`);
  }

  console.log('\n--- Verifying Figma Links ---');
  for (const url of figmaLinks) {
    const res = await checkUrl(url);
    console.log(`[${res.ok ? 'PASS' : 'WARN'}] ${res.url} -> status: ${res.status || res.error}`);
  }
}

run();

