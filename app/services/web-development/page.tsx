import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, Code, Zap, Users } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Online Web Tools",
            "description": "1500+ web tools platform with 10K+ users",
            "url": "https://tools.dxbmark.com"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Northern Estates Platform",
            "description": "Real estate platform with 10K+ users and 500+ listings",
            "url": "https://northernestates.ae"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication", 
            "name": "DXBMark Platform",
            "description": "Co-founded platform serving 3K+ users with 98% uptime",
            "url": "https://dxbmark.com"
          }
        }
      ]
    }
  }

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
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
              "Web development services encompass full-stack application development, custom platform creation, and digital solution implementation using modern technologies to deliver scalable, maintainable software that drives business growth."
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Complete Web Development Solutions</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From simple websites to complex enterprise platforms, I provide end-to-end web development services 
            tailored to your business needs and goals.
          </p>
        </div>

        {/* What this service is */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">What this service is</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Full-stack web development services covering frontend, backend, and infrastructure. 
              I build custom web applications, platforms, and digital solutions using modern technologies 
              including React, Next.js, Node.js, and cloud services.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Services include complete project development from concept to deployment, legacy system 
              modernization, API development, database design, and ongoing maintenance.
            </p>
          </div>
        </section>

        {/* When to choose this service */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">When to choose this service</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">You need a custom web application or platform built from scratch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Your existing website requires modernization or performance optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">You require API development or third-party system integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Your project needs scalable architecture for growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">You want a developer with proven track record in UAE/GCC market</span>
              </li>
            </ul>
          </div>
        </section>

        {/* When NOT to choose this service */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">When this service is NOT a good fit</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">You need a simple website that can be built with no-code platforms like Wix, Squarespace, or WordPress.com templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Your project requires immediate deployment (within 1-2 weeks) without proper planning and requirements gathering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">You're looking for ongoing content management or digital marketing services rather than technical development</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What you receive (Deliverables) */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">What you receive (Deliverables)</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Complete source code with documentation and full ownership rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Responsive web application optimized for all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Database schema and API documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Deployment configuration and hosting setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">SEO optimization and performance tuning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">Testing suite and quality assurance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm md:text-base lg:text-lg">30-day post-launch support and bug fixes</span>
              </li>
            </ul>
            <div className="mt-8 p-6 glass rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Final Output Format</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                All projects are delivered as production-ready applications with complete source code access, 
                comprehensive documentation, deployment instructions, and handover materials including database 
                exports, configuration files, and admin credentials where applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Estimated timeline */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Estimated timeline</h2>
          
          {/* Workflow Summary */}
          <div className="max-w-4xl mx-auto mb-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Development Workflow</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each project follows a structured approach: <strong>Discovery & Planning</strong> (requirements gathering, 
              technical architecture), <strong>Design & Prototyping</strong> (UI/UX design, user flow mapping), 
              <strong>Development & Testing</strong> (iterative coding, quality assurance), and 
              <strong>Deployment & Handover</strong> (production setup, documentation delivery, support transition).
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
        </section>

        {/* Typical price range */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Typical price range</h2>
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
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Factors affecting pricing</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Project complexity and feature requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Custom design vs template-based approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Third-party integrations and API connections</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Timeline urgency and resource allocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Database complexity and data migration needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Ongoing maintenance and support requirements</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
            * Prices vary based on complexity, timeline, and specific requirements. Contact for detailed quote.
          </p>
        </section>

        {/* Relevant examples */}
        <section id="examples" className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Relevant examples</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-semibold text-primary mb-4 text-lg">Online Web Tools</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><strong className="text-foreground">1,500+ tools</strong> - Comprehensive web utility platform</p>
                <p><strong className="text-foreground">10,000+ users</strong> - Active user base</p>
                <p><strong className="text-foreground">Next.js + TypeScript</strong> - Modern tech stack</p>
                <p><strong className="text-foreground">SEO optimized</strong> - High search visibility</p>
              </div>
              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Relevance:</strong> Demonstrates scalable platform development 
                  with complex feature sets, SEO optimization, and high-traffic handling capabilities essential 
                  for business applications.
                </p>
              </div>
              <Link 
                href="https://tools.dxbmark.com" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-semibold text-primary mb-4 text-lg">Northern Estates Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><strong className="text-foreground">10,000+ users</strong> - Real estate platform</p>
                <p><strong className="text-foreground">500+ listings</strong> - Property database</p>
                <p><strong className="text-foreground">WordPress + Custom PHP</strong> - Robust backend</p>
                <p><strong className="text-foreground">Advanced search</strong> - Filtering system</p>
              </div>
              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Relevance:</strong> Showcases database-driven application 
                  development with complex search functionality, user management, and content management systems 
                  suitable for data-heavy business platforms.
                </p>
              </div>
              <Link 
                href="https://northernestates.ae" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-semibold text-primary mb-4 text-lg">DXBMark Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><strong className="text-foreground">3,000+ users</strong> - Co-founded platform</p>
                <p><strong className="text-foreground">98% uptime</strong> - Reliable infrastructure</p>
                <p><strong className="text-foreground">React + Node.js</strong> - Full-stack solution</p>
                <p><strong className="text-foreground">PostgreSQL + Redis</strong> - Scalable database</p>
              </div>
              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Relevance:</strong> Illustrates enterprise-level architecture 
                  with high availability requirements, modern full-stack development, and scalable infrastructure 
                  design for mission-critical business applications.
                </p>
              </div>
              <Link 
                href="https://dxbmark.com" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-semibold text-primary mb-4 text-lg">Media Server Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p><strong className="text-foreground">500+ movies & series</strong> - Content library</p>
                <p><strong className="text-foreground">1953-2025 range</strong> - Comprehensive catalog</p>
                <p><strong className="text-foreground">Plex + NAS integration</strong> - Streaming solution</p>
                <p><strong className="text-foreground">90-day free trial</strong> - User acquisition</p>
              </div>
              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Relevance:</strong> Demonstrates media streaming platform 
                  development with content management, user subscription systems, and integration capabilities 
                  relevant for entertainment and content-based applications.
                </p>
              </div>
              <Link 
                href="https://media.dxbmark.com" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Micro-FAQ Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">How long does a typical web development project take?</h3>
              <p className="text-muted-foreground">
                Project duration varies by complexity: simple websites take 2-4 weeks, web applications require 6-12 weeks, 
                and enterprise platforms need 3-6 months. Timeline includes discovery, design, development, testing, and deployment phases.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Do you work with existing development teams or independently?</h3>
              <p className="text-muted-foreground">
                I work both independently for complete project ownership and collaboratively with existing teams for specific 
                components or expertise areas. Communication is maintained through regular updates, code reviews, and project management tools.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">What ongoing support is provided after project completion?</h3>
              <p className="text-muted-foreground">
                All projects include 30-day post-launch support for bug fixes and minor adjustments. Extended maintenance 
                packages are available for ongoing updates, security patches, and feature enhancements based on project needs.
              </p>
            </div>
          </div>
        </section>

        {/* Citation-Friendly Summary */}
        <section className="mb-12 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 glass rounded-2xl">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
                "In summary, web development services provide comprehensive full-stack solutions from concept to deployment, 
                delivering scalable applications with complete source code ownership, documentation, and ongoing support 
                tailored to business requirements and growth objectives."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to discuss your web development needs.
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