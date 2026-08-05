const sharp = require('sharp');
const fs = require('fs');

async function generate() {
  try {
    await sharp('public/logo.svg')
      .resize(512, 512)
      .png()
      .toFile('public/apple-touch-icon.png');
      
    await sharp('public/logo.svg')
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
      
    await sharp('public/logo.svg')
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
      
    console.log('PNGs generated successfully.');
  } catch (err) {
    console.error(err);
  }
}

generate();
