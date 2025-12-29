import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, HelpCircle, Users, Globe } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServiceSection } from "@/components/service-section"
import { CitationBlock } from "@/components/citation-block"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Tariq Said - Professional Services",
  description: "Frequently asked questions about Tariq Said's professional services. Learn about DXBMark vs personal services, Dubai/GCC availability, project types, engagement workflow, and partnerships.",
  keywords: [
    "FAQ Tariq Said",
    "Frequently Asked Questions",
    "DXBMark Services",
    "Personal Services Dubai",
    "GCC Availability",
    "Project Engagement Process",
    "Professional Partnerships",
    "Service Differentiation",
    "Dubai Developer FAQ",
    "UAE Services Questions"
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Tariq Said",
    description: "Get answers to common questions about professional services, availability, project types, and engagement process.",
    url: "https://portfolio.dxbmark.com/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | Tariq Said",
    description: "Get answers to common questions about professional services, availability, project types, and engagement process.",
    images: ["https://portfolio.dxbmark.com/professional-developer-portrait.webp"],
    creator: "@tariqsaidofficial",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/faq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function FAQPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Frequently Asked Questions - Tariq Said Professional Services",
    "description": "Comprehensive FAQ covering service differentiation, geographic availability, project types, engagement workflow, and professional partnerships.",
    "url": "https://portfolio.dxbmark.com/faq",
    "author": {
      "@type": "Person",
      "name": "Tariq Said",
      "url": "https://portfolio.dxbmark.com"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between DXBMark services and personal services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DXBMark services focus on comprehensive business solutions including branding, marketing, and full-scale platform development for established businesses and organizations. Personal services through this portfolio focus on direct technical implementation - web development, AV systems, and DevOps infrastructure for specific project needs. DXBMark handles multi-disciplinary projects with teams, while personal services provide specialized technical expertise for focused implementations."
        }
      },
      {
        "@type": "Question", 
        "name": "Are services available throughout the GCC or only in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Services are available throughout the GCC region including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. While based in Dubai, I regularly work with clients across the Gulf region through remote collaboration and on-site visits as needed. AV systems and infrastructure projects may require physical presence, which is coordinated based on project scope and location requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What types of projects are appropriate for these services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Appropriate projects include custom web applications requiring technical expertise, professional AV systems for conferences and events, DevOps infrastructure for scalable applications, and technical consulting for businesses needing specialized implementation. Projects should have clear technical requirements, realistic timelines (minimum 2-3 weeks for proper planning), and budgets aligned with professional service rates. Not suitable for simple websites, immediate deployments without planning, or projects requiring ongoing content management rather than technical development."
        }
      },
      {
        "@type": "Question",
        "name": "What is the step-by-step engagement workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The engagement process follows five steps: 1) Initial consultation via Calendly or contact form to discuss project requirements and feasibility, 2) Requirements analysis and technical assessment with detailed scope definition, 3) Proposal delivery including timeline, deliverables, pricing, and terms, 4) Project execution with regular updates, milestone reviews, and client communication, 5) Delivery and handover including documentation, training, and post-launch support setup."
        }
      },
      {
        "@type": "Question",
        "name": "What partnerships do you maintain with hosting providers, AV vendors, and external specialists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partnerships are maintained on a flexible, project-based approach rather than fixed reselling arrangements. Hosting partnerships include relationships with AWS, Cloudflare, and regional providers for optimal performance and compliance. AV vendor partnerships cover equipment rental, technical support, and specialized hardware access for events. Software tool partnerships provide access to professional licenses and enterprise solutions. External specialist partnerships include designers, content creators, and domain experts for comprehensive project delivery when needed."
        }
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <Script
        id="faq-structured-data"
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
                <HelpCircle className="w-4 h-4 text-primary" />
                Frequently Asked Questions
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Get Clear Answers to
                  <span className="text-primary block">Common Questions</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Find detailed answers about services, availability, project types, engagement process, 
                  and professional partnerships for informed decision-making.
                </p>
              </div>

              {/* Key Topics */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Service Differentiation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">GCC Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Engagement Process</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Schedule Consultation"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Users className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="w-full lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* FAQ Topic Cards */}
                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Services</h3>
                    <p className="text-xs text-muted-foreground">DXBMark vs Personal</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Availability</h3>
                    <p className="text-xs text-muted-foreground">Dubai, GCC Region</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Projects</h3>
                    <p className="text-xs text-muted-foreground">Appropriate Types</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Process</h3>
                    <p className="text-xs text-muted-foreground">Engagement Steps</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-12 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Key Topics</div>
              </div>

              <div className="absolute -bottom-9 -left-19 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">GCC</div>
                <div className="text-xs text-muted-foreground">Region Coverage</div>
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
            "Frequently asked questions provide comprehensive answers about professional services, geographic availability, project types, engagement processes, and partnership structures to help clients make informed decisions about technical development and consulting services."
          </CitationBlock>
        </div>

        {/* FAQ Questions as Headings with Direct Answers */}
        
        {/* Question 1: Service Differentiation */}
        <ServiceSection title="What is the difference between DXBMark services and personal services?" titleLevel="h2" centered={false}>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>DXBMark services</strong> focus on comprehensive business solutions including branding, marketing, 
              and full-scale platform development for established businesses and organizations. These services involve 
              multi-disciplinary teams, complete brand development, marketing strategy implementation, and large-scale 
              platform creation with ongoing business support.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>Personal services</strong> through this portfolio focus on direct technical implementation - 
              web development, AV systems, and DevOps infrastructure for specific project needs. These services 
              provide specialized technical expertise for focused implementations without the broader business 
              strategy components.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              The key distinction is scope: DXBMark handles multi-disciplinary projects with teams and comprehensive 
              business solutions, while personal services provide deep technical expertise for specific implementation 
              requirements with direct developer-to-client collaboration.
            </p>
          </div>
        </ServiceSection>

        {/* Question 2: Geographic Availability */}
        <ServiceSection title="Are services available throughout the GCC or only in Dubai?" titleLevel="h2" centered={false}>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Services are available throughout the <strong>GCC region</strong> including UAE, Saudi Arabia, Kuwait, 
              Qatar, Bahrain, and Oman. While based in Dubai, I regularly work with clients across the Gulf region 
              through remote collaboration and on-site visits as needed.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>Remote services</strong> (web development, DevOps, consulting) are fully available across all 
              GCC countries with regular video calls, screen sharing, and collaborative tools for seamless project 
              management and communication.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <strong>On-site services</strong> (AV systems, infrastructure setup) require physical presence, which 
              is coordinated based on project scope and location requirements. Travel and accommodation arrangements 
              are included in project planning for multi-day implementations across the region.
            </p>
          </div>
        </ServiceSection>

        {/* Question 3: Appropriate Project Types */}
        <ServiceSection title="What types of projects are appropriate for these services?" titleLevel="h2" centered={false}>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>Appropriate projects</strong> include custom web applications requiring technical expertise, 
              professional AV systems for conferences and events, DevOps infrastructure for scalable applications, 
              and technical consulting for businesses needing specialized implementation.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Projects should have <strong>clear technical requirements</strong>, realistic timelines (minimum 2-3 weeks 
              for proper planning and implementation), and budgets aligned with professional service rates. Ideal 
              projects involve custom development, integration challenges, or specialized technical expertise.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <strong>Not suitable</strong> for simple websites that can be built with templates, immediate deployments 
              without proper planning phases, or projects requiring ongoing content management and marketing rather 
              than technical development and implementation.
            </p>
          </div>
        </ServiceSection>

        {/* Question 4: Engagement Workflow */}
        <ServiceSection title="What is the step-by-step engagement workflow?" titleLevel="h2" centered={false}>
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Initial Consultation</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Schedule consultation via Calendly or contact form to discuss project requirements, technical 
                      feasibility, timeline expectations, and initial scope assessment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Requirements Analysis</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Detailed technical assessment including requirements gathering, architecture planning, 
                      technology stack selection, and comprehensive scope definition with deliverables specification.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Proposal Delivery</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Comprehensive proposal including detailed timeline, specific deliverables, transparent pricing, 
                      payment terms, and project terms with clear expectations and milestone definitions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Project Execution</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Implementation phase with regular progress updates, milestone reviews, client feedback 
                      integration, and continuous communication through preferred channels and scheduled check-ins.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Delivery and Handover</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Final delivery including comprehensive documentation, team training sessions, knowledge 
                      transfer, and post-launch support setup with ongoing maintenance recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ServiceSection>

        {/* Question 5: Partnerships */}
        <ServiceSection title="What partnerships do you maintain with hosting providers, AV vendors, software tools, and external specialists?" titleLevel="h2" centered={false}>
          <div className="prose prose-lg max-w-none">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Partnerships are maintained on a <strong>flexible, project-based approach</strong> rather than fixed 
              reselling arrangements. This ensures optimal solutions for each project without vendor lock-in or 
              markup constraints, providing clients with best-fit technologies and competitive pricing.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Hosting Providers</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Relationships with AWS, Cloudflare, Google Cloud, and regional providers for optimal performance, 
                  compliance with local regulations, and cost-effective scaling solutions.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">AV Vendors</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Equipment rental partnerships, technical support networks, and specialized hardware access for 
                  events including cameras, audio systems, streaming equipment, and backup solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Software Tools</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Access to professional licenses, enterprise solutions, development tools, and specialized 
                  software for comprehensive project delivery and ongoing maintenance.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">External Specialists</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Network of designers, content creators, domain experts, and technical specialists for 
                  comprehensive project delivery when specialized expertise beyond core services is required.
                </p>
              </div>
            </div>
          </div>
        </ServiceSection>

        {/* Citation-Friendly Summary */}
        <CitationBlock variant="summary">
          "In summary, these frequently asked questions address key aspects of professional services including service differentiation between DXBMark and personal offerings, comprehensive GCC regional availability, appropriate project types, structured engagement workflows, and flexible partnership approaches to ensure clients have complete information for informed decision-making."
        </CitationBlock>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation to discuss your specific needs and get personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              text="Schedule Free Consultation"
              size="lg"
              className="bg-primary hover:bg-primary/90"
            />
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="glass">
                Send Direct Message
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