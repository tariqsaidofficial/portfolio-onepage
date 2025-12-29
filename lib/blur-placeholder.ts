/**
 * Blur Placeholder Utilities
 * 
 * Helper functions to generate blur placeholders for images
 */

/**
 * Generate a simple blur placeholder data URL
 * This is a lightweight alternative when plaiceholder is not available
 */
export function getSimpleBlurDataURL(width: number = 10, height: number = 10): string {
  // Create a simple gray blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(200,200,200);stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:rgb(150,150,150);stop-opacity:0.8" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Pre-generated blur placeholders for common images
 * These are optimized base64 strings for better performance
 */
export const blurPlaceholders = {
  // Hero/Professional images
  'professional-developer-portrait.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'professional-avatar.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  
  // Avatars
  'professional-man-avatar.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'professional-woman-avatar.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'professional-man-avatar-2.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'professional-woman-avatar-2.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  
  // Projects
  'projects/travelify.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'projects/media-server.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'projects/northern-estates.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'projects/online-web-tools.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'projects/nfc-manager.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  'projects/dxbmark.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  
  // Logo
  'TariqSaid-logo.webp': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
  
  // Default fallback
  'default': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
}

/**
 * Get blur placeholder for an image
 * @param imagePath - Path to the image (e.g., '/professional-avatar.webp')
 * @returns Base64 blur placeholder data URL
 */
export function getBlurPlaceholder(imagePath: string): string {
  // Remove leading slash and get filename
  const filename = imagePath.replace(/^\//, '')
  
  // Return pre-generated placeholder or default
  return blurPlaceholders[filename as keyof typeof blurPlaceholders] || blurPlaceholders.default
}

/**
 * Image optimization config
 */
export const imageConfig = {
  // Quality settings
  quality: {
    high: 90,      // For hero images
    medium: 85,    // For important images
    normal: 80,    // For regular images
    low: 75,       // For thumbnails
  },
  
  // Sizes for responsive images
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    project: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
    avatar: '(max-width: 768px) 100px, 200px',
    logo: '(max-width: 768px) 150px, 200px',
  },
}
