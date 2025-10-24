import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { SectionLoadingSkeleton } from "@/components/loading-skeleton"
import { generateImageObject, getProfileImageMetadata, getProjectImageMetadata } from "@/lib/image-metadata"

/**
 * Dynamic imports for heavy components
 * These components are loaded only when they're about to be visible
 * This significantly improves initial page load performance
 */

// About section - loads after Hero
const About = dynamic(
  () => import('@/components/about').then(mod => ({ default: mod.About })), 
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

// Projects section - contains images and animations
const Projects = dynamic(
  () => import('@/components/projects').then(mod => ({ default: mod.Projects })), 
  {
    loading: () => <SectionLoadingSkeleton />,
    ssr: true // Keep SSR for SEO
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
  ]

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
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <OffTheGrid />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
