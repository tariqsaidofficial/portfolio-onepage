import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, Code, Zap, Users } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServiceSection, BulletList } from "@/components/service-section"
import { CitationBlock } from "@/components/citation-block"
import { ExampleGrid, type ProjectMetric } from "@/components/example-card"
import { MicroFAQSection, type FAQItem } from "@/components/micro-faq-section"

export const metadata: Metadata = {
  title: "Web Development Services | Tariq Said - Full-Stack Developer",
  description: "Professional web development services by Tariq Said. Full-stack solutions, custom platforms, and scalable applications. 15+ years experience, 100+ projects delivered.",
  keywords: [
    "Web Development Services",
    "Full-Stack Developer Dubai",
    "Custom Web Applications",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "Web Development UAE",
    "Professional Web Developer",
    "Tariq Said Developer",
    "DXBMark Web Services"
  ],
  openGraph: {
    title: "Web Development Services | Tariq Said",
    description: "Professional web development services. Full-stack solutions, custom platforms, and scalable applications. 15+ years experience.",
    url: "https://portfolio.dxbmark.com/services/web-development",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional full-stack web development services by Tariq Said. Custom web applications, platforms, and digital solutions using modern technologies.",
    "provider": {
      "@type": "Person",
      "name": "Tariq Said",
      "url": "https://portfolio.dxbmark.com",
      "sameAs": [
        "https://github.com/tariqsaidofficial",
        "https://www.linkedin.com/in/tariqsaidofficial/"
      ]
    },
    "serviceType": "Web Development",
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
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Web Development",
        "description": "Landing pages, portfolios, small business sites",
        "priceRange": "$2,000 - $8,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P2W/P4W"
      },
      {
        "@type": "Offer", 
        "name": "Web Application Development",
        "description": "Custom platforms, dashboards, e-commerce",
        "priceRange": "$8,000 - $25,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P6W/P12W"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Platform Development", 
        "description": "Complex systems, integrations, scalable solutions",
        "priceRange": "$25,000+",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P3M/P6M"
      }
    ]
  }

  // Project examples with relevance explanations
  const projectExamples = [
    {
      title: "Online Web Tools",
      metrics: [
        { label: "1,500+ tools", value: "Comprehensive web utility platform" },
        { label: "10,000+ users", value: "Active user base" },
        { label: "Next.js + TypeScript", value: "Modern tech stack" },
        { label: "SEO optimized", value: "High search visibility" }
      ] as ProjectMetric[],
      technologies: ["Next.js", "TypeScript", "SEO optimization", "Performance tuning"],
      url: "https://tools.dxbmark.com",
      relevanceExplanation: "Demonstrates scalable platform development with complex feature sets, SEO optimization, and high-traffic handling capabilities essential for business applications requiring comprehensive web utility functionality."
    },
    {
      title: "Northern Estates Platform",
      metrics: [
        { label: "10,000+ users", value: "Real estate platform" },
        { label: "500+ listings", value: "Property database" },
        { label: "WordPress + Custom PHP", value: "Robust backend" },
        { label: "Advanced search", value: "Filtering system" }
      ] as ProjectMetric[],
      technologies: ["WordPress", "Custom PHP", "MySQL", "Advanced search"],
      url: "https://northernestates.ae",
      relevanceExplanation: "Showcases database-driven application development with complex search functionality, user management, and content management systems suitable for data-heavy business platforms."
    },
    {
      title: "DXBMark Platform",
      metrics: [
        { label: "3,000+ users", value: "Co-founded platform" },
        { label: "98% uptime", value: "Reliable infrastructure" },
        { label: "React + Node.js", value: "Full-stack solution" },
        { label: "PostgreSQL + Redis", value: "Scalable database" }
      ] as ProjectMetric[],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      url: "https://dxbmark.com",
      relevanceExplanation: "Illustrates enterprise-level architecture with high availability requirements, modern full-stack development, and scalable infrastructure design for mission-critical business applications."
    }
  ]

  // Micro-FAQ items
  const faqItems: FAQItem[] = [
    {
      question: "How long does a typical web development project take?",
      answer: "Project duration varies by complexity: simple websites take 2-4 weeks, web applications require 6-12 weeks, and enterprise platforms need 3-6 months. Timeline includes discovery, design, development, testing, and deployment phases with regular milestone reviews."
    },
    {
      question: "Do you work with existing development teams or independently?",
      answer: "I work both independently for complete project ownership and collaboratively with existing teams for specific components or expertise areas. Communication is maintained through regular updates, code reviews, and project management tools."
    },
    {
      question: "What ongoing support is provided after project completion?",
      answer: "All projects include 30-day post-launch support for bug fixes and minor adjustments. Extended maintenance packages are available for ongoing updates, security patches, and feature enhancements based on project needs."
    }
  ]

  return (
    <>
      {/* Structured Data */}
      <Script
        id="web-development-structured-data"
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
                <Zap className="w-4 h-4 text-primary" />
                Professional Web Development
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Build Your Digital
                  <span className="text-primary block">Success Story</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your ideas into powerful web applications with 15+ years of expertise. 
                  From concept to deployment, I deliver scalable solutions that drive results.
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
                  <span className="text-sm font-medium">100+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">UAE/GCC Expertise</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Get Started Today"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="#examples">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Code className="w-5 h-5 mr-2" />
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="w-full lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* Tech Stack Cards */}
                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Frontend</h3>
                    <p className="text-xs text-muted-foreground">React, Next.js, Vue</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Backend</h3>
                    <p className="text-xs text-muted-foreground">Node.js, Python, PHP</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Database</h3>
                    <p className="text-xs text-muted-foreground">PostgreSQL, MongoDB</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Cloud</h3>
                    <p className="text-xs text-muted-foreground">AWS, Cloudflare</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-12 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>

              <div className="absolute -bottom-9 -left-19 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support Available</div>
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
            "Web development services encompass full-stack application development, custom platform creation, and digital solution implementation using modern technologies to deliver scalable, maintainable software that drives business growth and user engagement."
          </CitationBlock>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Complete Web Development Solutions</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From simple websites to complex enterprise platforms, I provide end-to-end web development services 
            tailored to your business needs and goals with modern technologies and best practices.
          </p>
        </div>

        {/* What this service is */}
        <ServiceSection title="What this service is">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Full-stack web development services covering frontend, backend, and infrastructure. I build custom 
              web applications, platforms, and digital solutions using modern technologies including React, Next.js, 
              Node.js, Python, and cloud services with comprehensive project management from concept to deployment.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Services include complete project development, legacy system modernization, API development, database 
              design, performance optimization, SEO implementation, and ongoing maintenance with full source code 
              ownership and comprehensive documentation.
            </p>
          </div>
        </ServiceSection>

        {/* When to choose this service */}
        <ServiceSection title="When to choose this service">
          <BulletList items={[
            "You need a custom web application or platform built from scratch with specific business requirements",
            "Your existing website requires modernization, performance optimization, or technology stack upgrades",
            "You require API development, third-party system integration, or complex database architecture",
            "Your project needs scalable architecture designed for growth, high traffic, and future expansion",
            "You want a developer with proven track record in UAE/GCC market and cross-cultural business understanding",
            "You need complete project ownership with full source code access, documentation, and knowledge transfer"
          ]} />
        </ServiceSection>

        {/* When NOT to choose this service */}
        <ServiceSection title="When this service is NOT appropriate">
          <BulletList 
            variant="negative"
            items={[
              "You need a simple website that can be built with no-code platforms like Wix, Squarespace, or WordPress.com templates without custom functionality",
              "Your project requires immediate deployment (within 1-2 weeks) without proper planning, requirements gathering, and quality assurance phases",
              "You're looking for ongoing content management, digital marketing services, or social media management rather than technical development and implementation"
            ]} 
          />
        </ServiceSection>

        {/* What you receive (Deliverables) */}
        <ServiceSection title="What you receive (Deliverables)">
          <BulletList items={[
            "Complete source code with comprehensive documentation and full ownership rights for all developed components",
            "Responsive web application optimized for all devices, browsers, and accessibility standards compliance",
            "Database schema design, API documentation, and integration guides for third-party services and systems",
            "Deployment configuration, hosting setup, and production environment optimization with security best practices",
            "SEO optimization, performance tuning, and Core Web Vitals optimization for search engine visibility",
            "Comprehensive testing suite including unit tests, integration tests, and quality assurance documentation",
            "30-day post-launch support including bug fixes, minor adjustments, and performance monitoring setup"
          ]} />
          <div className="mt-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Final Output Format</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              All projects are delivered as production-ready applications with complete source code access, 
              comprehensive technical documentation, deployment instructions, database exports, configuration files, 
              admin credentials, and detailed handover materials including maintenance guides and future development recommendations.
            </p>
          </div>
        </ServiceSection>

        {/* Estimated timeline */}
        <ServiceSection title="Estimated timeline">
          {/* Workflow Summary */}
          <div className="mb-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Development Workflow</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each project follows a structured approach: <strong>Discovery & Planning</strong> (requirements gathering, 
              technical architecture, project scope definition), <strong>Design & Prototyping</strong> (UI/UX design, 
              user flow mapping, wireframe creation), <strong>Development & Testing</strong> (iterative coding, quality 
              assurance, performance optimization), and <strong>Deployment & Handover</strong> (production setup, 
              documentation delivery, team training, support transition).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Simple Website</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">2-4 weeks</p>
              <p className="text-sm text-muted-foreground">Landing pages, portfolios, small business sites</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Web Application</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">6-12 weeks</p>
              <p className="text-sm text-muted-foreground">Custom platforms, dashboards, e-commerce</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Enterprise Platform</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">3-6 months</p>
              <p className="text-sm text-muted-foreground">Complex systems, integrations, scalable solutions</p>
            </div>
          </div>
        </ServiceSection>

        {/* Typical price range */}
        <ServiceSection title="Typical price range">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Basic Projects</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$2,000 - $8,000</p>
              <p className="text-sm text-muted-foreground">AED 7,500 - 30,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Standard Projects</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$8,000 - $25,000</p>
              <p className="text-sm text-muted-foreground">AED 30,000 - 95,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Enterprise Projects</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$25,000+</p>
              <p className="text-sm text-muted-foreground">AED 95,000+</p>
            </div>
          </div>
          
          {/* Pricing Factors */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Factors affecting pricing</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <BulletList items={[
                "Project complexity, feature requirements, and custom functionality scope",
                "Custom design requirements versus template-based approach and branding needs",
                "Third-party integrations, API connections, and external system dependencies"
              ]} />
              <BulletList items={[
                "Timeline urgency, resource allocation, and development team size requirements",
                "Database complexity, data migration needs, and performance optimization requirements",
                "Ongoing maintenance, support requirements, and future development planning needs"
              ]} />
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
            * Prices vary based on complexity, timeline, and specific requirements. Contact for detailed quote and project assessment.
          </p>
        </ServiceSection>

        {/* Relevant examples */}
        <ServiceSection title="Relevant examples" titleLevel="h2">
          <ExampleGrid examples={projectExamples} />
        </ServiceSection>

        {/* Micro-FAQ Section */}
        <MicroFAQSection faqs={faqItems} />

        {/* Citation-Friendly Summary */}
        <CitationBlock variant="summary">
          "In summary, web development services provide comprehensive full-stack solutions from concept to deployment, delivering scalable applications with complete source code ownership, comprehensive documentation, and ongoing support tailored to business requirements and growth objectives."
        </CitationBlock>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to discuss your web development needs and project requirements.
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