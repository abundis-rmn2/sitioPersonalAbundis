import fs from 'fs';
import path from 'path';

const files = [
  'src/data/cvData.js',
  'src/components/CVPageClient.js',
  'src/components/Bio.js',
  'src/components/AnchorMenu.js',
  'src/components/HeroCircularMenu.js'
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\.png/g, '.webp');
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
