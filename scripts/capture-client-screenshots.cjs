const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BROWSER_PATH = fs.existsSync(CHROME_PATH) ? CHROME_PATH : EDGE_PATH;

const outputDir = path.resolve(__dirname, '../public/assets/consultant');
const distDir = path.resolve(__dirname, '../dist/assets/consultant');
const tempDir = path.resolve(__dirname, '../temp_screenshots');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const clients = [
  {
    id: 'studio-squanta',
    name: 'Studio Squanta',
    url: 'https://studiosquanta.com/',
  },
  {
    id: 'altecht',
    name: 'Altecht',
    url: 'https://altecht.com/',
  },
  {
    id: 'ss-creation',
    name: 'SS Creation',
    url: 'https://www.sscreation.online/about',
  },
  {
    id: 'samarth-business-group',
    name: 'Samarth Business Group',
    url: 'https://www.samarthbusinessgroup.com/',
  },
  {
    id: 'display-promotion',
    name: 'Display Promotion',
    url: 'https://www.displaypromotion.in/',
  },
  {
    id: 'muscle-build-nutrition',
    name: 'Muscle Build Nutrition',
    url: 'https://www.musclebuildnutrition.co.in/',
  },
  {
    id: 'shubharambh-events',
    name: 'Shubharambh Events',
    url: 'https://www.shubharambhevents.co.in/',
  },
  {
    id: 'prerna-saree',
    name: 'Prerna Saree',
    url: 'https://prernasaree.com/',
  },
  {
    id: 'bytepro-labs',
    name: 'BytePro Labs',
    url: 'https://byteprolabs.com/',
  },
  {
    id: 'spark',
    name: 'Spark App',
    url: 'https://spark-woad.vercel.app/',
  },
  {
    id: 'student-x',
    name: 'Student-X Portal',
    url: 'https://student-x.vercel.app/',
  },
];

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 675;

async function captureClient(client) {
  const tempPng = path.join(tempDir, `${client.id}.png`);
  const finalWebp = path.join(outputDir, `${client.id}.webp`);
  const distWebp = path.join(distDir, `${client.id}.webp`);

  if (fs.existsSync(tempPng)) {
    try { fs.unlinkSync(tempPng); } catch (e) {}
  }

  console.log(`\n[${client.name}] Capturing from ${client.url}...`);
  
  // Use headless Chrome to capture screenshot
  const cmd = `"${BROWSER_PATH}" --headless=new --disable-gpu --no-first-run --no-default-browser-check --hide-scrollbars --window-size=1440,900 --virtual-time-budget=6000 --screenshot="${tempPng}" "${client.url}"`;
  
  try {
    execSync(cmd, { timeout: 25000, stdio: 'pipe' });
  } catch (err) {
    console.warn(`  Warning: Browser command finished with message or code: ${err.message}`);
  }

  if (fs.existsSync(tempPng) && fs.statSync(tempPng).size > 1000) {
    console.log(`  ✓ Screenshot captured (${(fs.statSync(tempPng).size / 1024).toFixed(1)} KB)`);
    
    // Process with sharp: resize & crop to 1200x675 with top-focus
    await sharp(tempPng)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        position: 'top',
        fit: 'cover',
      })
      .webp({ quality: 90 })
      .toFile(finalWebp);

    // Also copy to dist if dist exists
    fs.copyFileSync(finalWebp, distWebp);
    console.log(`  ✓ Processed & saved: ${client.id}.webp (${(fs.statSync(finalWebp).size / 1024).toFixed(1)} KB)`);
    return true;
  } else {
    console.error(`  ✗ Failed to capture screenshot for ${client.name} at ${client.url}`);
    return false;
  }
}

async function main() {
  console.log(`Starting client website screenshot capture...`);
  console.log(`Browser: ${BROWSER_PATH}`);
  
  const results = [];
  for (const client of clients) {
    const success = await captureClient(client);
    results.push({ name: client.name, success });
  }

  console.log('\n--- Summary ---');
  results.forEach(r => console.log(`${r.success ? '✓' : '✗'} ${r.name}`));

  // Clean up temp dir if needed
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (e) {}
}

main().catch(console.error);

