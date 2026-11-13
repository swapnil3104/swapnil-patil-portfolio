const fs = require('fs');

const figmaLinks = [
  { id: 'houstrack', url: 'https://www.figma.com/design/IowXbhELKnpZWDdboPD5Hk/HousTrack?node-id=0-1&t=fF4F1OEZmeMf1mH2-1', key: 'IowXbhELKnpZWDdboPD5Hk' },
  { id: 'glowvita', url: 'https://www.figma.com/design/vqDtG25pDLSouTXKZ9Vglp/GlowVita-Salon-App?node-id=0-1&t=dXXvZwVqs7uTqr9Q-1', key: 'vqDtG25pDLSouTXKZ9Vglp' },
  { id: 'melodies', url: 'https://www.figma.com/design/GQEYrlbUs4D2UHUTlFkDsP/melodies-Web--Community-?m=auto&t=fPrrWyPrKUjUkrSt-6', key: 'GQEYrlbUs4D2UHUTlFkDsP' },
  { id: 'flymitra', url: 'https://www.figma.com/design/DjJrxwtlnweH6anIxBjAhM/FlyMitra?m=auto&t=fPrrWyPrKUjUkrSt-6', key: 'DjJrxwtlnweH6anIxBjAhM' },
  { id: 'food-app', url: 'https://www.figma.com/design/L6vSuVVU6VafSYOBq8Q3CD/Food-App---UI?m=auto&t=fPrrWyPrKUjUkrSt-6', key: 'L6vSuVVU6VafSYOBq8Q3CD' },
];

async function checkFigma() {
  for (const item of figmaLinks) {
    try {
      console.log(`Checking ${item.id}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        }
      });
      const html = await res.text();
      console.log(`  Status: ${res.status}, Length: ${html.length}`);

      // Search for image URLs in meta tags
      const ogMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                      html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);
      const twitterMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i) ||
                           html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']twitter:image["']/i);
      
      console.log(`  og:image:`, ogMatch ? ogMatch[1] : 'null');
      console.log(`  twitter:image:`, twitterMatch ? twitterMatch[1] : 'null');

      // Also check oEmbed endpoint: https://www.figma.com/api/oembed?url=...
      const oembedUrl = `https://www.figma.com/api/oembed?url=${encodeURIComponent(item.url)}`;
      try {
        const oembedRes = await fetch(oembedUrl);
        if (oembedRes.ok) {
          const oembedData = await oembedRes.json();
          console.log(`  oEmbed thumbnail_url:`, oembedData.thumbnail_url);
        } else {
          console.log(`  oEmbed status:`, oembedRes.status);
        }
      } catch (e) {
        console.log(`  oEmbed err:`, e.message);
      }
    } catch (err) {
      console.error(`  Error for ${item.id}:`, err.message);
    }
  }
}

checkFigma();

