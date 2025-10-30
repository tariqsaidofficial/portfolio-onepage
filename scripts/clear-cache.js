#!/usr/bin/env node

/**
 * سكريبت تنظيف الكاش الكامل لمشروع Next.js
 * Clear Cache Script for Next.js Project
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 بدء تنظيف الكاش...');
console.log('🧹 Starting cache cleanup...\n');

// دالة لحذف مجلد بشكل متكرر
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    return true;
  }
  return false;
}

// دالة لحذف ملف
function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return true;
  }
  return false;
}

// دالة لتنفيذ أمر بشكل آمن
function safeExec(command, description) {
  try {
    execSync(command, { stdio: 'ignore' });
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`⚠️  ${description} - غير متاح / not available`);
  }
}

// حذف مجلد .next
if (deleteFolderRecursive('.next')) {
  console.log('✅ تم حذف .next');
} else {
  console.log('ℹ️  مجلد .next غير موجود');
}

// حذف مجلد out
if (deleteFolderRecursive('out')) {
  console.log('✅ تم حذف out');
} else {
  console.log('ℹ️  مجلد out غير موجود');
}

// حذف مجلد node_modules
if (deleteFolderRecursive('node_modules')) {
  console.log('✅ تم حذف node_modules');
} else {
  console.log('ℹ️  مجلد node_modules غير موجود');
}

// حذف ملفات قفل الحزم
if (deleteFile('pnpm-lock.yaml')) {
  console.log('✅ تم حذف pnpm-lock.yaml');
}

if (deleteFile('package-lock.json')) {
  console.log('✅ تم حذف package-lock.json');
}

if (deleteFile('yarn.lock')) {
  console.log('✅ تم حذف yarn.lock');
}

// حذف ملفات .DS_Store على Mac
if (process.platform === 'darwin') {
  console.log('🗑️  حذف ملفات .DS_Store...');
  try {
    execSync('find . -name ".DS_Store" -type f -delete', { stdio: 'ignore' });
    console.log('✅ تم حذف ملفات .DS_Store');
  } catch (error) {
    console.log('⚠️  فشل حذف ملفات .DS_Store');
  }
}

// تنظيف كاش npm
console.log('🗑️  تنظيف كاش npm...');
safeExec('npm cache clean --force', 'تم تنظيف كاش npm');

// تنظيف كاش pnpm
console.log('🗑️  تنظيف كاش pnpm...');
safeExec('pnpm store prune', 'تم تنظيف كاش pnpm');

// تنظيف كاش yarn
console.log('🗑️  تنظيف كاش yarn...');
safeExec('yarn cache clean', 'تم تنظيف كاش yarn');

console.log('\n✨ تم تنظيف الكاش بنجاح!');
console.log('✨ Cache cleanup completed successfully!\n');
console.log('📦 لإعادة تثبيت الحزم، استخدم:');
console.log('📦 To reinstall packages, use:');
console.log('   pnpm install');
console.log('   أو / or');
console.log('   npm install\n');
