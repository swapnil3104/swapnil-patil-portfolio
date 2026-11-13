const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateAssets() {
  const publicDir = path.resolve(__dirname, '../public');
  const faviconSvgPath = path.join(publicDir, 'favicon.svg');
  const portraitPath = path.join(publicDir, 'assets/swapnil-portrait.png');

  console.log('Generating favicon package...');

  // 1. Generate Favicons from SVG
  const faviconSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ];

  for (const { size, name } of faviconSizes) {
    const dest = path.join(publicDir, name);
    await sharp(faviconSvgPath, { density: 300 })
      .resize(size, size)
      .png()
      .toFile(dest);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Also create favicon.ico from 32x32 png
  fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
  console.log('✓ Generated favicon.ico');

  // 2. Generate site.webmanifest
  const manifest = {
    name: "Swapnil Patil — AI/ML Engineer & Product Designer",
    short_name: "Swapnil Patil",
    description: "Portfolio of Swapnil Patil — Computer Science Engineer, AI/ML specialist, Python developer, and UI/UX product designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✓ Generated site.webmanifest');

  // 3. Generate robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Host & Sitemap
Host: https://swapnilpatil.dev
Sitemap: https://swapnilpatil.dev/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('✓ Generated robots.txt');

  // 4. Generate sitemap.xml
  const currentDate = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://swapnilpatil.dev/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#work</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#consultant</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#ui-ux</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#lab</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://swapnilpatil.dev/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('✓ Generated sitemap.xml');

  // 5. Generate 1200x630 OpenGraph Banner Image (og-image.png)
  console.log('Generating OpenGraph Preview Image (1200x630)...');
  
  // Resize portrait for OG right panel
  const portraitResizedBuffer = await sharp(portraitPath)
    .resize(460, 575, { fit: 'cover', position: 'top' })
    .toBuffer();

  const ogSvgOverlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0f0e" />
        <stop offset="100%" stop-color="#070808" />
      </linearGradient>
      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10B981" />
        <stop offset="100%" stop-color="#34D399" />
      </linearGradient>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
      </pattern>
    </defs>

    <!-- Background Base -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <rect width="1200" height="630" fill="url(#grid)" />

    <!-- Ambient Glow Top Left & Right -->
    <circle cx="150" cy="120" r="300" fill="#10B981" opacity="0.08" filter="blur(80px)" />
    <circle cx="950" cy="300" r="350" fill="#10B981" opacity="0.12" filter="blur(90px)" />

    <!-- Outer Border Hairline -->
    <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Top Left Eyebrow -->
    <text x="60" y="80" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" letter-spacing="1.5">
      // SWAPNIL PATIL · PRODUCTION PORTFOLIO 2026
    </text>

    <!-- Main Headline -->
    <text x="60" y="150" fill="#F4F4F5" font-family="'Bricolage Grotesque', sans-serif" font-size="52" font-weight="800">
      Swapnil Patil
    </text>

    <!-- Subtitle / Role -->
    <text x="60" y="195" fill="url(#emeraldGrad)" font-family="'Geist', sans-serif" font-size="24" font-weight="600">
      AI/ML Engineer, Python Developer &amp; Product Designer
    </text>

    <!-- Bio Description -->
    <text x="60" y="245" fill="#A1A1AA" font-family="'Geist', sans-serif" font-size="16" font-weight="400">
      Building intelligent systems that solve real-world problems.
    </text>
    <text x="60" y="272" fill="#A1A1AA" font-family="'Geist', sans-serif" font-size="16" font-weight="400">
      Applied Computer Vision, Edge AI, Full-Stack Architecture &amp; UI/UX Systems.
    </text>

    <!-- Telemetry Badges (4 Grid Badges) -->
    <!-- Badge 1: 11+ Client Systems -->
    <g transform="translate(60, 315)">
      <rect width="135" height="74" rx="10" fill="#121714" stroke="rgba(255,255,255,0.08)" />
      <text x="16" y="38" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">11+</text>
      <text x="16" y="58" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="11">Client Systems</text>
    </g>

    <!-- Badge 2: 12+ AI/ML Repos -->
    <g transform="translate(205, 315)">
      <rect width="135" height="74" rx="10" fill="#121714" stroke="rgba(255,255,255,0.08)" />
      <text x="16" y="38" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">12+</text>
      <text x="16" y="58" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="11">Open-Source AI</text>
    </g>

    <!-- Badge 3: ₹1.5L+ Grant -->
    <g transform="translate(350, 315)">
      <rect width="145" height="74" rx="10" fill="#121714" stroke="rgba(255,255,255,0.08)" />
      <text x="16" y="38" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">&#8377;1.5L+</text>
      <text x="16" y="58" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="11">Research Grant</text>
    </g>

    <!-- Badge 4: 1st Place Discovery -->
    <g transform="translate(505, 315)">
      <rect width="145" height="74" rx="10" fill="#121714" stroke="rgba(255,255,255,0.08)" />
      <text x="16" y="38" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700">1st Place</text>
      <text x="16" y="58" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="11">B-Plan 2k24</text>
    </g>

    <!-- Core Stack Badges Strip -->
    <g transform="translate(60, 420)">
      <text x="0" y="0" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">
        // CORE TECHNICAL STACK
      </text>
      <g transform="translate(0, 15)">
        <rect x="0" y="0" width="70" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="12" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">Python</text>

        <rect x="80" y="0" width="75" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="92" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">PyTorch</text>

        <rect x="165" y="0" width="95" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="177" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">TensorFlow</text>

        <rect x="270" y="0" width="75" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="282" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">OpenCV</text>

        <rect x="355" y="0" width="70" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="367" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">FastAPI</text>

        <rect x="435" y="0" width="60" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="447" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">React</text>

        <rect x="505" y="0" width="60" height="26" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="517" y="17" fill="#F4F4F5" font-family="'JetBrains Mono', monospace" font-size="11">Figma</text>
      </g>
    </g>

    <!-- Bottom Status Bar -->
    <g transform="translate(60, 555)">
      <circle cx="5" cy="5" r="4" fill="#10B981" />
      <text x="18" y="9" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">
        Available for Full-Time Roles &amp; Select Consulting
      </text>
      <text x="440" y="9" fill="#8E8E93" font-family="'JetBrains Mono', monospace" font-size="13">
        &#8226; Pune, MH, India &#8226; swapnilpatil.dev
      </text>
    </g>

    <!-- Right Side Portrait Frame Placeholder -->
    <rect x="710" y="48" width="440" height="534" rx="16" fill="none" stroke="rgba(16,185,129,0.3)" stroke-width="1.5" />
  </svg>
  `;

  // Composite portrait onto the right side of the canvas
  const ogCanvas = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 12, g: 15, b: 14, alpha: 1 }
    }
  });

  const finalOgImage = await ogCanvas
    .composite([
      {
        input: portraitResizedBuffer,
        top: 48,
        left: 710,
      },
      {
        input: Buffer.from(ogSvgOverlay),
        top: 0,
        left: 0,
      }
    ])
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('✓ Generated public/og-image.png (1200x630)');
  console.log('All SEO & Favicon assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
