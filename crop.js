import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function cropLogo() {
  try {
    const inputPath = path.join(__dirname, 'public', 'logo.png');
    const outputPath = path.join(__dirname, 'public', 'logo-cropped.png');
    
    console.log('Reading logo...');
    const image = await Jimp.read(inputPath);
    
    console.log('Autocropping...');
    image.autocrop();
    
    console.log('Saving cropped logo...');
    await image.write(outputPath);
    
    console.log('Logo cropped successfully!');
  } catch (err) {
    console.error('Error cropping logo:', err);
  }
}

cropLogo();
