const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, 'public');
const SRC_PATH = path.join(__dirname, 'src');

const distExists = fs.existsSync(path.join(DIST_PATH, 'dist'));

app.use((req, res, next) => {
  const jsFile = path.join(DIST_PATH, req.path);
  if (req.path.includes('/dist/') && fs.existsSync(jsFile)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('X-Content-Type-Options', 'nosniff');
  }
  next();
});

app.use(express.static(DIST_PATH));

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

if (!distExists) {
  console.log('\n⚠️  Build not found. Run "npm run build" first.\n');
}

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 Portfolio Server                                      ║
║                                                           ║
║   Local:    http://localhost:${PORT}                        ║
║   Mode:     ${distExists ? 'Production (secured)' : 'Development     '}          ║
║                                                           ║
║   Source files: ${distExists ? 'PROTECTED - not accessible' : 'Available - edit src/ and build'}
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});