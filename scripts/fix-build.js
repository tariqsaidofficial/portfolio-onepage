const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

console.log('Starting Next.js build with 500.html fix...');

// Start the Next.js build process
const buildProcess = spawn('next', ['build'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  shell: true
});

// Monitor for the export directory and create 500.html
const exportDir = path.join(process.cwd(), '.next', 'export');
const file500 = path.join(exportDir, '500.html');
const file404 = path.join(exportDir, '404.html');

const checkAndCreate = () => {
  if (fs.existsSync(exportDir) && fs.existsSync(file404) && !fs.existsSync(file500)) {
    console.log('\n✓ Creating missing 500.html file...');
    fs.copyFileSync(file404, file500);
    console.log('✓ 500.html created successfully\n');
  }
};

// Check every 100ms during build
const interval = setInterval(checkAndCreate, 100);

buildProcess.on('close', (code) => {
  clearInterval(interval);
  // One final check
  checkAndCreate();
  process.exit(code);
});
