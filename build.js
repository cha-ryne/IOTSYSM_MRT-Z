const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'config.js',
  'supabase_schema.sql',
  'README.md',
  'SETUP.md',
  'publisher.py',
  'subcriber.py',
  'test.html'
];

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

for (const fileName of filesToCopy) {
  const sourcePath = path.join(rootDir, fileName);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, path.join(distDir, fileName));
  }
}

fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log(`Built ${filesToCopy.length} files into dist/`);