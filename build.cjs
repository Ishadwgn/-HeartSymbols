const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const itemsToCopy = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'google1d95b362f30f061e.html',
  'assets',
  'tools',
  'about',
  'contact',
  'privacy-policy'
];

for (const item of itemsToCopy) {
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`Copied ${item} -> dist/${item}`);
  }
}

console.log('Build complete! dist/ folder populated with latest static site.');
