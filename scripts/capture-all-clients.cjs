const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve(__dirname, '../temp_chrome_profile');
const publicDir = path.resolve(__dirname, '../public/assets/consultant');
const distDir = path.resolve(__dirname, '../dist/assets/consultant');

if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const clients = [
  { id: 'altecht', name: 'Altecht', url: 'https://altecht.com/' },
  { id: 'ss-creation', name: 'SS Creation', url: 'https://www.sscreation.online/about' },
  { id: 'samarth-business-group', name: 'Samarth Business Group', url: 'https://www.samarthbusinessgroup.com/' },
  { id: 'bytepro-labs', name: 'BytePro Labs', url: 'https://byteprolabs.com/' },
  { id: 'spark', name: 'Spark App', url: 'https://spark-woad.vercel.app/' },
  { id: 'student-x', name: 'Student-X Portal', url: 'https://student-x.vercel.app/' },
  { id: 'muscle-build-nutrition', name: 'Muscle Build Nutrition', url: 'https://www.musclebuildnutrition.co.in/' },
  { id: 'shubharambh-events', name: 'Shubharambh Events', url: 'https://www.shubharambhevents.co.in/' },
  { id: 'prerna-saree', name: 'Prerna Saree', url: 'https://prernasaree.com/' },
  { id: 'studio-squanta', name: 'Studio Squanta', url: 'https://studiosquanta.com/' },
  { id: 'display-promotion', name: 'Display Promotion', url: 'https://www.displaypromotion.in/' }
];

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 675;

async function run() {
  console.log('Spawning Chrome on port 9222...');
  const chromeProc = spawn(CHROME, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${userDataDir}`,
  ]);

  let versionData = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch('http://127.0.0.1:9222/json/version');
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch (e) {}
  }

  if (!versionData) {
    chromeProc.kill();
    throw new Error('Chrome failed to start');
  }

  console.log(`Connected to ${versionData.Browser}`);

  // Create a new tab
  const tabRes = await fetch('http://127.0.0.1:9222/json/new?about:blank', { method: 'PUT' });
  const tab = await tabRes.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let msgId = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  };

  function send(method, params = {}, timeoutMs = 12000) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      const timer = setTimeout(() => {
        if (pending.has(id)) {
          pending.delete(id);
          reject(new Error(`Timeout calling ${method}`));
        }
      }, timeoutMs);

      pending.set(id, {
        resolve: (val) => { clearTimeout(timer); resolve(val); },
        reject: (err) => { clearTimeout(timer); reject(err); }
      });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  const results = [];

  for (const client of clients) {
    console.log(`\n>>> [${client.name}] Loading ${client.url}...`);
    try {
      // Navigate with timeout
      await send('Page.navigate', { url: client.url }, 10000);
      
      // Wait for rendering
      await new Promise(r => setTimeout(r, 3500));

      const captureRes = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
      }, 8000);

      const buffer = Buffer.from(captureRes.data, 'base64');
      const stats = await sharp(buffer).stats();
      const mean = (stats.channels[0].mean + stats.channels[1].mean + stats.channels[2].mean) / 3;

      console.log(`    Captured buffer: ${buffer.length} bytes (mean brightness: ${mean.toFixed(1)})`);

      if (buffer.length > 5000) {
        // Resize and optimize to WebP 1200x675
        const pubPath = path.join(publicDir, `${client.id}.webp`);
        const disPath = path.join(distDir, `${client.id}.webp`);

        await sharp(buffer)
          .resize(TARGET_WIDTH, TARGET_HEIGHT, {
            position: 'top',
            fit: 'cover'
          })
          .webp({ quality: 88, effort: 4 })
          .toFile(pubPath);

        fs.copyFileSync(pubPath, disPath);
        console.log(`  ✓ Saved: public/assets/consultant/${client.id}.webp`);
        results.push({ name: client.name, success: true, size: fs.statSync(pubPath).size });
      } else {
        console.warn(`    Warning: buffer too small, keeping fallback`);
        results.push({ name: client.name, success: false, reason: 'buffer too small' });
      }
    } catch (err) {
      console.error(`  ✗ Error capturing ${client.name}: ${err.message}`);
      results.push({ name: client.name, success: false, reason: err.message });
    }
  }

  try { ws.close(); } catch (e) {}
  try { chromeProc.kill(); } catch (e) {}

  console.log('\n========================================');
  console.log('Capture Results:');
  console.log('========================================');
  for (const r of results) {
    if (r.success) {
      console.log(`✓ ${r.name}: ${(r.size / 1024).toFixed(1)} KB`);
    } else {
      console.log(`✗ ${r.name} (${r.reason})`);
    }
  }
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

