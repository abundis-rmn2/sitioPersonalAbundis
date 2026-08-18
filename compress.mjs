import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const ext = path.extname(file);
      const webpPath = fullPath.replace(ext, '.webp');
      console.log(`Converting ${fullPath} -> ${webpPath}`);
      try {
        await sharp(fullPath)
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(webpPath);
        // Optionally delete the old file
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processDirectory(publicDir).then(() => console.log('Compression complete!'));
