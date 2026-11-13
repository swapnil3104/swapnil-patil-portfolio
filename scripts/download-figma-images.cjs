const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.resolve(__dirname, '../public/assets/uiux');
const distDir = path.resolve(__dirname, '../dist/assets/uiux');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const figmaImages = [
  {
    id: 'houstrack',
    name: 'HousTrack',
    url: 'https://api-cdn.figma.com/resize/images/2311733021099665820/89140b2c-64f2-4eef-8617-7dff82190b26?expiration=1794787200&signature=5311a4f3a859be502712b560966c4d51c435daf830f563e1ce67539d27cf3445&width=1200',
  },
  {
    id: 'glowvita',
    name: 'GlowVita',
    url: 'https://api-cdn.figma.com/resize/images/2340411599010459634/cbb65903-1a70-43fc-bc64-30ccf7aa5bdb?expiration=1794787200&signature=9a8c7f82871f0af0c2500c3d6c939007a229abeb6007d2ef549b5d9692c05598&width=1200',
  },
  {
    id: 'melodies',
    name: 'Melodies',
    url: 'https://api-cdn.figma.com/resize/thumbnails/1dd5fa45-278a-428a-86ca-6d478257a8f7?expiration=1794787200&signature=0f1b8578b87040f1b4bb6ed76476198b67969cf6a04267633ec175dbd879763c&width=1200&bucket=figma-alpha',
  },
  {
    id: 'flymitra',
    name: 'FlyMitra',
    url: 'https://api-cdn.figma.com/resize/thumbnails/d1abfe9b-3c7d-451c-b729-22942855c213?expiration=1794787200&signature=5f310a3ede2dbdc5b98298f1900b32373cf4fc0055323291c9d3b7683b17b46f&width=1200&bucket=figma-alpha',
  },
  {
    id: 'food-app',
    name: 'Food App UI',
    url: 'https://api-cdn.figma.com/resize/thumbnails/80be1411-60d2-4163-94ab-a2aee756354d?expiration=1794787200&signature=0189eb535fe43ccb1c64106bf72a2f92800825d816a7f31097089361630acfd6&width=1200&bucket=figma-alpha',
  },
];

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 675;

async function processFigmaImages() {
  console.log('Downloading and processing actual Figma designs...');
  
  for (const item of figmaImages) {
    try {
      console.log(`\nFetching ${item.name} from Figma CDN...`);
      const res = await fetch(item.url);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      console.log(`  ✓ Downloaded ${buffer.length} bytes`);

      const pubPath = path.join(publicDir, `${item.id}.webp`);
      const disPath = path.join(distDir, `${item.id}.webp`);

      // Resize and composite nicely to 1200x675
      await sharp(buffer)
        .resize(TARGET_WIDTH, TARGET_HEIGHT, {
          fit: 'cover',
          position: 'top',
        })
        .webp({ quality: 90, effort: 4 })
        .toFile(pubPath);

      fs.copyFileSync(pubPath, disPath);
      console.log(`  ✓ Saved ${item.id}.webp (${(fs.statSync(pubPath).size / 1024).toFixed(1)} KB)`);

      // If food-app, also save as food-app-ui.webp to prevent any path mismatch
      if (item.id === 'food-app') {
        const altPub = path.join(publicDir, 'food-app-ui.webp');
        const altDis = path.join(distDir, 'food-app-ui.webp');
        fs.copyFileSync(pubPath, altPub);
        fs.copyFileSync(pubPath, altDis);
        console.log(`  ✓ Also mirrored to food-app-ui.webp`);
      }
    } catch (err) {
      console.error(`  ✗ Error downloading ${item.name}:`, err.message);
    }
  }

  console.log('\nAll Figma images processed successfully!');
}

processFigmaImages().catch(console.error);
