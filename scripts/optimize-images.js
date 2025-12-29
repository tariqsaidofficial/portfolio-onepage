#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script analyzes images in the public directory and provides
 * recommendations for optimization.
 */

const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, '../public')

// File size thresholds (in bytes)
const THRESHOLDS = {
  small: 50 * 1024,      // 50KB
  medium: 100 * 1024,    // 100KB
  large: 200 * 1024,     // 200KB
  huge: 500 * 1024,      // 500KB
}

function getFileSize(filePath) {
  const stats = fs.statSync(filePath)
  return stats.size
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

function analyzeImage(filePath, relativePath) {
  const size = getFileSize(filePath)
  const ext = path.extname(filePath).toLowerCase()
  
  let status = '✅'
  let recommendation = 'Good'
  let priority = 'low'
  
  if (size > THRESHOLDS.huge) {
    status = '🔴'
    recommendation = 'CRITICAL: Convert to WebP and compress heavily'
    priority = 'critical'
  } else if (size > THRESHOLDS.large) {
    status = '🟡'
    recommendation = 'HIGH: Should be optimized'
    priority = 'high'
  } else if (size > THRESHOLDS.medium) {
    status = '🟠'
    recommendation = 'MEDIUM: Could be optimized'
    priority = 'medium'
  } else if (size > THRESHOLDS.small) {
    status = '🟢'
    recommendation = 'LOW: Minor optimization possible'
    priority = 'low'
  }
  
  // Check if should be WebP
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    recommendation += ' | Convert to WebP'
    if (priority === 'low') priority = 'medium'
  }
  
  return {
    path: relativePath,
    size,
    sizeFormatted: formatBytes(size),
    ext,
    status,
    recommendation,
    priority,
  }
}

function scanDirectory(dir, baseDir = dir) {
  const results = []
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const relativePath = path.relative(baseDir, fullPath)
    
    if (fs.statSync(fullPath).isDirectory()) {
      results.push(...scanDirectory(fullPath, baseDir))
    } else {
      const ext = path.extname(item).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        results.push(analyzeImage(fullPath, relativePath))
      }
    }
  }
  
  return results
}

function generateReport() {
  console.log('\n🖼️  IMAGE OPTIMIZATION REPORT\n')
  console.log('=' .repeat(80))
  
  const images = scanDirectory(publicDir)
  
  // Sort by priority and size
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
  images.sort((a, b) => {
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    }
    return b.size - a.size
  })
  
  // Calculate totals
  const totalSize = images.reduce((sum, img) => sum + img.size, 0)
  const jpgPngImages = images.filter(img => ['.jpg', '.jpeg', '.png'].includes(img.ext))
  const largeImages = images.filter(img => img.size > THRESHOLDS.large)
  
  // Print summary
  console.log('\n📊 SUMMARY:')
  console.log(`   Total Images: ${images.length}`)
  console.log(`   Total Size: ${formatBytes(totalSize)}`)
  console.log(`   Images needing conversion to WebP: ${jpgPngImages.length}`)
  console.log(`   Large images (>200KB): ${largeImages.length}`)
  
  // Print critical and high priority images
  console.log('\n🔴 CRITICAL & HIGH PRIORITY IMAGES:\n')
  const criticalAndHigh = images.filter(img => ['critical', 'high'].includes(img.priority))
  
  if (criticalAndHigh.length === 0) {
    console.log('   ✅ No critical or high priority images found!')
  } else {
    criticalAndHigh.forEach(img => {
      console.log(`${img.status} ${img.path}`)
      console.log(`   Size: ${img.sizeFormatted}`)
      console.log(`   Action: ${img.recommendation}`)
      console.log()
    })
  }
  
  // Print all images table
  console.log('\n📋 ALL IMAGES:\n')
  console.log('Status | Size     | Path')
  console.log('-'.repeat(80))
  images.forEach(img => {
    console.log(`${img.status}     | ${img.sizeFormatted.padEnd(8)} | ${img.path}`)
  })
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:\n')
  console.log('1. Convert all .jpg, .jpeg, .png images to .webp format')
  console.log('2. Compress images larger than 200KB')
  console.log('3. Use next/image component with blur placeholders')
  console.log('4. Consider using CDN for image delivery')
  console.log('5. Implement lazy loading for below-the-fold images')
  
  // Potential savings
  const potentialSavings = jpgPngImages.reduce((sum, img) => sum + (img.size * 0.3), 0)
  console.log(`\n💰 POTENTIAL SAVINGS: ${formatBytes(potentialSavings)} (30% average reduction)`)
  
  console.log('\n' + '='.repeat(80))
  console.log('\n✅ Report generated successfully!\n')
}

// Run the report
generateReport()
