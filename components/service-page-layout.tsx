import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReactNode } from "react"

interface ServicePageLayoutProps {
  children: ReactNode
  metadata: Metadata
  structuredData?: object
  heroSection?: ReactNode
}

/**
 * ServicePageLayout Component - Consistent layout wrapper for GEO-optimized service pages
 * 
 * Implements the 10-section layout pattern:
 * 1. Citation-Friendly Definition
 * 2. Service Description  
 * 3. When to Choose
 * 4. When NOT to Choose
 * 5. Deliverables
 * 6. Timeline
 * 7. Pricing
 * 8. Examples
 * 9. Micro-FAQ
 * 10. Citation Summary
 * 
 * Features:
 * - Proper heading hierarchy and semantic markup
 * - Structured data integration
 * - Consistent spacing and typography
 * - Responsive design
 * - Accessibility attributes
 * 
 * @component
 * @example
 * ```tsx
 * <ServicePageLayout 
 *   metadata={metadata} 
 *   structuredData={structuredData}
 *   heroSection={<HeroSection />}
 * >
 *   <ServiceContent />
 * </ServicePageLayout>
 * ```
 */
export function ServicePageLayout({ 
  children, 
  metadata, 
  structuredData,
  heroSection 
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Structured Data */}
      {structuredData && (
        <Script
          id="service-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      {heroSection && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
          {heroSection}
        </section>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}