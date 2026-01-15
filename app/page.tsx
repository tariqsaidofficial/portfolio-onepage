import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { SectionLoadingSkeleton } from "@/components/loading-skeleton"
import { generateImageObject, getProfileImageMetadata, getProjectImageMetadata } from "@/lib/image-metadata"
import HomeTawkClient from '../components/HomeTawkClient'

/**
 * Dynamic imports for heavy components
 * These components are loaded only when they're about to be visible
 * This significantly improves initial page load performance
 */

// Partnerships section - trust signals and business partnerships
const Partnerships = dynamic(
  () => import('@/components/partnerships').then(mod => ({ default: mod.Partnerships })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true // Keep SSR for SEO
  }
)

// Featured Projects section - business-focused showcase for Home
const FeaturedProjects = dynamic(
  () => import('@/components/featured-projects').then(mod => ({ default: mod.FeaturedProjects })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true // Keep SSR for SEO
  }
)

// About section - business-focused version for Home (reduced personal content)
const HomeAbout = dynamic(
  () => import('@/components/home-about').then(mod => ({ default: mod.HomeAbout })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true // Keep SSR for SEO
  }
)

// Skills section - heavy component with many logos
const Skills = dynamic(
  () => import('@/components/skills').then(mod => ({ default: mod.Skills })), 
  {
    loading: () => <SectionLoadingSkeleton />
  }
)

// Services section
const Services = dynamic(
  () => import('@/components/services').then(mod => ({ default: mod.Services })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true
  }
)

// Testimonials section
const Testimonials = dynamic(
  () => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true
  }
)

// Off the Grid section
const OffTheGrid = dynamic(
  () => import('@/components/off-the-grid').then(mod => ({ default: mod.OffTheGrid })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true
  }
)

// Contact form - heavy component with Turnstile and validation
const Contact = dynamic(
  () => import('@/components/smart-contact').then(mod => ({ default: mod.SmartContact })), 
  {
    loading: () => <SectionLoadingSkeleton />
  }
)

export default function Home() {
  // Generate image metadata for main portfolio images
  const portfolioImages = [
    getProfileImageMetadata(
      '/professional-developer-portrait.webp',
      'Tariq Said - Full-Stack Developer & AV Specialist professional portrait'
    ),
    getProjectImageMetadata(
      '/projects/travelify.webp',
      'Travelify - Travel booking platform project screenshot'
    ),
    getProjectImageMetadata(
      '/projects/media-server.webp',
      'Media Server - Digital asset management system screenshot'
    ),
  ];


  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tariq Said - Full-Stack Developer & AV Specialist Portfolio',
    description: 'Professional portfolio showcasing web development, audio-visual systems, and IT infrastructure projects',
    url: 'https://portfolio.dxbmark.com',
    image: portfolioImages.map(img => generateImageObject(img)),
    primaryImageOfPage: generateImageObject(portfolioImages[0]),
    author: {
      '@type': 'Person',
      name: 'Tariq Said',
      url: 'https://portfolio.dxbmark.com',
    },
  }

  return (
    <>
      {/* Structured Data for Images */}
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main id="main-content" className="min-h-screen text-foreground relative z-10">
        <Header />
        <Hero />
        {/* Book a meeting CTA - place wherever needed */}
        <HomeTawkClient />
        <HomeAbout />
        <Partnerships />
        <Skills />
        <FeaturedProjects />
        <Services />
        <Testimonials />
        <OffTheGrid />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
