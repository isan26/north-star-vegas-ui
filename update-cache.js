const fs = require('fs');
const path = require('path');

const swPath = path.join(__dirname, 'public', 'sw.js');

// Read the service worker file
let swContent = fs.readFileSync(swPath, 'utf8');

// Extract current version number
const versionMatch = swContent.match(/const CACHE_NAME = 'north-star-vegas-v(\d+)'/);
if (versionMatch) {
  const currentVersion = parseInt(versionMatch[1]);
  const newVersion = currentVersion + 1;
  
  // Update the version
  swContent = swContent.replace(
    /const CACHE_NAME = 'north-star-vegas-v\d+'/,
    `const CACHE_NAME = 'north-star-vegas-v${newVersion}'`
  );
  
  // Write back to file
  fs.writeFileSync(swPath, swContent);
  console.log(`✅ Cache version updated: v${currentVersion} → v${newVersion}`);
} else {
  console.log('❌ Could not find cache version in sw.js');
}
