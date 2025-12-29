import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, User, MapPin, Award, Briefcase } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServiceSection, BulletList } from "@/components/service-section"
import { CitationBlock } from "@/components/citation-block"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Tariq Said | Professional Developer & Technical Consultant",
  description: "Learn about Tariq Said's professional background, expertise in web development, AV systems, and DevOps. 15+ years experience serving UAE/GCC market with clarity, execution, and long-term value focus.",
  keywords: [
    "Tariq Said",
    "Professional Developer Dubai",
    "Technical Consultant UAE",
    "Web Development Expert",
    "AV Systems Specialist",
    "DevOps Professional",
    "UAE Developer",
    "GCC Technology Services",
    "DXBMark Founder",
    "Full-Stack Developer"
  ],
  openGraph: {
    title: "About Tariq Said | Professional Developer & Technical Consultant",
    description: "Professional background and expertise in web development, AV systems, and DevOps. 15+ years experience serving UAE/GCC market.",
    url: "https://portfolio.dxbmark.com/about",
    type: "profile",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/about",
  },
}

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tariq Said",
    "jobTitle": "Full-Stack Developer & Technical Consultant",
    "description": "Professional developer and technical consultant with 15+ years experience in web development, AV systems, and DevOps solutions serving the UAE, Egypt, GCC, and UK markets.",
    "url": "https://portfolio.dxbmark.com",
    "sameAs": [
      "https://github.com/tariqsaidofficial",
      "https://www.linkedin.com/in/tariqsaidofficial/",
      "https://dxbmark.com"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "DXBMark",
      "url": "https://dxbmark.com"
    },
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development",
      "AV Systems",
      "DevOps",
      "Infrastructure Management",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "AWS",
      "Docker"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Egypt"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai"
    }
  }

  return (
    <>
      {/* Structured Data */}
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-center lg:text-left w-full lg:w-[60%]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <User className="w-4 h-4 text-primary" />
                Professional Background
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building Digital Solutions with
                  <span className="text-primary block">Clarity & Execution</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  15+ years of professional experience delivering web development, AV systems, and DevOps solutions 
                  across the UAE, Egypt, GCC, and UK markets with focus on long-term value.
                </p>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">UAE/GCC/UK Focused</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Schedule a Consultation"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="#professional-background">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="w-full lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* Expertise Areas Cards */}
                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Development</h3>
                    <p className="text-xs text-muted-foreground">Web, Full-Stack</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AV Systems</h3>
                    <p className="text-xs text-muted-foreground">Production, Events</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">DevOps</h3>
                    <p className="text-xs text-muted-foreground">Infrastructure, CI/CD</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Consulting</h3>
                    <p className="text-xs text-muted-foreground">Strategy, Planning</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-12 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">UAE / EGYPT</div>
                <div className="text-xs text-muted-foreground">Based & Focused</div>
              </div>

              <div className="absolute -bottom-9 -left-19 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">GCC / UK</div>
                <div className="text-xs text-muted-foreground">Market Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl relative z-10">
        {/* Citation-Friendly Definition */}
        <div className="mb-12 md:mb-16 text-center">
          <CitationBlock variant="definition">
            "Tariq Said is a professional developer and technical consultant with 15+ years experience delivering web development, AV systems, and DevOps solutions across the UAE, Egypt, GCC, and UK markets, focusing on clarity, execution, and long-term value creation for businesses and organizations."
          </CitationBlock>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Professional Background & Expertise</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Based in Dubai with deep understanding of the UAE, Egypt, GCC, and UK technology landscapes, I provide comprehensive 
            technical solutions that align with regional business needs and cultural considerations across MENA and European markets.
          </p>
        </div>

        {/* Professional Background */}
        <ServiceSection title="Professional Background" titleLevel="h2">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Over 15 years of professional experience in software development, technical consulting, and project management 
              across diverse industries including healthcare, real estate, media, and enterprise technology. Started career 
              in systems integration and evolved into full-stack development and infrastructure management.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Co-founded DXBMark platform serving 3,000+ users with 98% uptime, demonstrating expertise in scalable 
              architecture and reliable system design. Extensive experience working with international teams and 
              managing complex technical projects from conception to deployment.
            </p>
          </div>
        </ServiceSection>

        {/* Expertise Areas */}
        <ServiceSection title="Expertise Areas" titleLevel="h2">
          <BulletList items={[
            "Full-stack web development using modern technologies including React, Next.js, Node.js, Python, and TypeScript",
            "Professional AV systems design and implementation for conferences, medical events, and multi-camera productions",
            "DevOps and infrastructure management covering server setup, CI/CD pipelines, security, and performance optimization",
            "Database design and management with PostgreSQL, MongoDB, and Redis for scalable data solutions",
            "Cloud infrastructure and self-hosted solutions using AWS, Docker, Kubernetes, and monitoring systems",
            "Technical consulting and project management with focus on requirements analysis and solution architecture"
          ]} />
        </ServiceSection>

        {/* Industries Served */}
        <ServiceSection title="Industries Served" titleLevel="h2">
          <BulletList items={[
            "Healthcare and medical technology including conference production and specialized AV systems for medical training",
            "Real estate platforms and property management systems with complex search functionality and user management",
            "Media and entertainment including streaming platforms, content management, and large-scale media server infrastructure",
            "Enterprise technology solutions covering custom platforms, API development, and system integration projects",
            "Educational institutions and training organizations requiring AV production and e-learning platform development",
            "Government and semi-government entities with security-focused infrastructure and compliance requirements"
          ]} />
        </ServiceSection>

        {/* Geographic Coverage */}
        <ServiceSection title="Geographic Coverage" titleLevel="h2">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>Primary Base: United Arab Emirates & Egypt</strong> - Based in Dubai with comprehensive understanding 
              of local business environments, regulatory requirements, and cultural considerations for technology 
              implementation across government, healthcare, education, and private sector organizations in both UAE and Egyptian markets.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <strong>Extended Coverage: GCC & UK Markets</strong> - Extensive experience serving clients across Saudi Arabia, 
              Kuwait, Qatar, Bahrain, Oman, and United Kingdom with remote consultation, project management, and technical implementation 
              services adapted to regional requirements, business practices, and regulatory frameworks across MENA and European markets.
            </p>
          </div>
        </ServiceSection>

        {/* Working Philosophy */}
        <ServiceSection title="Working Philosophy" titleLevel="h2">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Clarity</h3>
              <p className="text-sm text-muted-foreground">
                Clear communication, transparent processes, and well-documented solutions that teams can understand, 
                maintain, and build upon for long-term success.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Execution</h3>
              <p className="text-sm text-muted-foreground">
                Reliable delivery of working solutions on time and within scope, with focus on practical implementation 
                that addresses real business needs and operational requirements.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Long-term Value</h3>
              <p className="text-sm text-muted-foreground">
                Sustainable solutions designed for growth, maintainability, and evolution with business needs, 
                avoiding short-term fixes in favor of strategic technical decisions.
              </p>
            </div>
          </div>
        </ServiceSection>

        {/* Citation-Friendly Summary */}
        <CitationBlock variant="summary">
          "In summary, Tariq Said brings 15+ years of professional experience in web development, AV systems, and DevOps solutions to the UAE, Egypt, GCC, and UK markets, with a working philosophy centered on clarity, reliable execution, and long-term value creation for sustainable business growth and technical excellence across MENA and European regions."
        </CitationBlock>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to discuss your project?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to explore how my expertise can help achieve your technical goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              text="Book Free Consultation"
              size="lg"
              className="bg-primary hover:bg-primary/90"
            />
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="glass">
                Send Message
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}