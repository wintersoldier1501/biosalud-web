const Jimp = require('jimp');
const path = require('path');

async function cropLogo() {
  try {
    const inputPath = path.join(__dirname, 'public', 'logo.png');
    const outputPath = path.join(__dirname, 'public', 'logo-cropped.png');
    
    console.log('Reading logo...');
    const image = await Jimp.read(inputPath);
    
    console.log('Autocropping...');
    image.autocrop();
    
    console.log('Saving cropped logo...');
    await image.writeAsync(outputPath);
    
    console.log('Logo cropped successfully!');
  } catch (err) {
    console.error('Error cropping logo:', err);
  }
}

cropLogo();
