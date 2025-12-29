/**
 * Image Metadata Utilities
 * 
 * Helper functions to generate proper structured data for images
 * according to Google Search Console requirements
 */

export interface ImageMetadata {
  contentUrl: string
  description: string
  creditText: string
  acquireLicensePage: string
  license?: string
  creator?: {
    '@type': 'Person' | 'Organization'
    name: string
  }
  copyrightNotice?: string
  width?: number
  height?: number
}

/**
 * Generate ImageObject structured data
 * @param metadata - Image metadata
 * @returns ImageObject schema
 */
export function generateImageObject(metadata: ImageMetadata) {
  return {
    '@type': 'ImageObject',
    contentUrl: metadata.contentUrl,
    description: metadata.description,
    creditText: metadata.creditText,
    acquireLicensePage: metadata.acquireLicensePage,
    ...(metadata.license && { license: metadata.license }),
    ...(metadata.creator && { creator: metadata.creator }),
    ...(metadata.copyrightNotice && { copyrightNotice: metadata.copyrightNotice }),
    ...(metadata.width && { width: metadata.width }),
    ...(metadata.height && { height: metadata.height }),
  }
}

/**
 * Default image metadata for portfolio images
 */
export const defaultImageMetadata = {
  creditText: 'Photo by Tariq Said',
  acquireLicensePage: 'https://portfolio.dxbmark.com/license',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  creator: {
    '@type': 'Person' as const,
    name: 'Tariq Said',
  },
  copyrightNotice: '© 2025 Tariq Said, All rights reserved',
}

/**
 * Generate image metadata for project images
 * @param imagePath - Path to the image
 * @param description - Image description
 * @returns Complete image metadata
 */
export function getProjectImageMetadata(
  imagePath: string,
  description: string
): ImageMetadata {
  const baseUrl = 'https://portfolio.dxbmark.com'
  const fullUrl = imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`

  return {
    contentUrl: fullUrl,
    description,
    ...defaultImageMetadata,
  }
}

/**
 * Generate image metadata for profile images
 * @param imagePath - Path to the image
 * @param description - Image description
 * @returns Complete image metadata
 */
export function getProfileImageMetadata(
  imagePath: string,
  description: string
): ImageMetadata {
  const baseUrl = 'https://portfolio.dxbmark.com'
  const fullUrl = imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`

  return {
    contentUrl: fullUrl,
    description,
    creditText: 'Professional photo by Tariq Said',
    acquireLicensePage: 'https://portfolio.dxbmark.com/license',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: {
      '@type': 'Person',
      name: 'Tariq Said',
    },
    copyrightNotice: '© 2025 Tariq Said, All rights reserved',
  }
}

/**
 * Generate image metadata for testimonial avatars
 * @param imagePath - Path to the image
 * @param personName - Name of the person
 * @returns Complete image metadata
 */
export function getTestimonialImageMetadata(
  imagePath: string,
  personName: string
): ImageMetadata {
  const baseUrl = 'https://portfolio.dxbmark.com'
  const fullUrl = imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`

  return {
    contentUrl: fullUrl,
    description: `Professional photo of ${personName}`,
    creditText: `Photo provided by ${personName}`,
    acquireLicensePage: 'https://portfolio.dxbmark.com/license',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    copyrightNotice: '© 2025 All rights reserved',
  }
}

/**
 * Generate WebPage with ImageObject structured data
 * @param pageUrl - URL of the page
 * @param pageTitle - Title of the page
 * @param pageDescription - Description of the page
 * @param images - Array of image metadata
 * @returns WebPage schema with images
 */
export function generateWebPageWithImages(
  pageUrl: string,
  pageTitle: string,
  pageDescription: string,
  images: ImageMetadata[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    image: images.map((img) => generateImageObject(img)),
    primaryImageOfPage: images.length > 0 ? generateImageObject(images[0]) : undefined,
  }
}
