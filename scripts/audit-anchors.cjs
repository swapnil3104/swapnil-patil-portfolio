const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
let totalAnchors = 0;
let targetBlankAnchors = 0;
let issues = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match across newlines: <a ... >
  const aTags = content.match(/<a[\s\S]*?>/g) || [];
  aTags.forEach(tag => {
    totalAnchors++;
    const isTargetBlank = tag.includes('target="_blank"') || tag.includes("target='_blank'");
    if (isTargetBlank) {
      targetBlankAnchors++;
      const hasNoopener = tag.includes('noopener');
      const hasNoreferrer = tag.includes('noreferrer');
      if (!hasNoopener || !hasNoreferrer) {
        issues.push({ file, tag: tag.replace(/\s+/g, ' '), reason: 'Missing noopener or noreferrer' });
      }
    }
  });
});

console.log(`Total anchor tags: ${totalAnchors}`);
console.log(`Target="_blank" tags: ${targetBlankAnchors}`);
console.log(`Security issues found: ${issues.length}`);
if (issues.length > 0) {
  console.log(JSON.stringify(issues, null, 2));
}

