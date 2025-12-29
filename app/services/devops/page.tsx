import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, Server, Shield, Zap, Cloud } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServiceSection, BulletList } from "@/components/service-section"
import { CitationBlock } from "@/components/citation-block"
import { ExampleGrid, type ProjectMetric } from "@/components/example-card"
import { MicroFAQSection, type FAQItem } from "@/components/micro-faq-section"

export const metadata: Metadata = {
  title: "DevOps Services | Tariq Said - Infrastructure & Deployment Solutions",
  description: "Professional DevOps services by Tariq Said. Server setup, CI/CD pipelines, performance optimization, hosting architecture, security, and monitoring for scalable applications.",
  keywords: [
    "DevOps Services",
    "Infrastructure Setup Dubai",
    "CI/CD Pipeline Development",
    "Server Configuration UAE",
    "Performance Optimization",
    "Hosting Architecture",
    "Security Implementation",
    "Monitoring Solutions",
    "Cloud Infrastructure",
    "Self-hosted Solutions",
    "Tariq Said DevOps",
    "DXBMark Infrastructure"
  ],
  openGraph: {
    title: "DevOps Services | Tariq Said",
    description: "Professional DevOps services. Server setup, CI/CD pipelines, performance optimization, hosting architecture, security, and monitoring solutions.",
    url: "https://portfolio.dxbmark.com/services/devops",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/services/devops",
  },
}

export default function DevOpsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps Services",
    "description": "Professional DevOps services by Tariq Said. Server setup, CI/CD pipelines, performance optimization, hosting architecture, security implementation, and monitoring solutions for both cloud and self-hosted environments.",
    "provider": {
      "@type": "Person",
      "name": "Tariq Said",
      "url": "https://portfolio.dxbmark.com",
      "sameAs": [
        "https://github.com/tariqsaidofficial",
        "https://www.linkedin.com/in/tariqsaidofficial/"
      ]
    },
    "serviceType": "DevOps Infrastructure",
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
        "name": "Basic Infrastructure Setup",
        "description": "Server configuration, basic CI/CD, monitoring setup",
        "priceRange": "$2,500 - $8,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P1W/P3W"
      },
      {
        "@type": "Offer", 
        "name": "Advanced DevOps Solutions",
        "description": "Complex infrastructure, security implementation, performance optimization",
        "priceRange": "$8,000 - $25,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P3W/P8W"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Infrastructure", 
        "description": "Scalable architecture, comprehensive monitoring, ongoing maintenance",
        "priceRange": "$25,000+",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P2M/P4M"
      }
    ]
  }

  // Project examples with relevance explanations
  const projectExamples = [
    {
      title: "DXBMark Platform Infrastructure",
      metrics: [
        { label: "98% uptime", value: "High availability infrastructure" },
        { label: "3,000+ users", value: "Scalable user management" },
        { label: "Auto-scaling", value: "Dynamic resource allocation" },
        { label: "Multi-region", value: "Geographic redundancy" }
      ] as ProjectMetric[],
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Cloudflare"],
      url: "https://dxbmark.com",
      relevanceExplanation: "Demonstrates enterprise-level DevOps implementation with high availability requirements, auto-scaling capabilities, and comprehensive monitoring essential for mission-critical business applications requiring 24/7 uptime."
    },
    {
      title: "Media Server Infrastructure",
      metrics: [
        { label: "500+ TB storage", value: "Large-scale data management" },
        { label: "CDN integration", value: "Global content delivery" },
        { label: "Automated backups", value: "Data protection systems" },
        { label: "Load balancing", value: "Performance optimization" }
      ] as ProjectMetric[],
      technologies: ["Self-hosted servers", "Plex", "NAS systems", "Nginx", "Automated scripts"],
      url: "https://media.dxbmark.com",
      relevanceExplanation: "Showcases self-hosted infrastructure management with large-scale storage solutions, automated backup systems, and performance optimization relevant for businesses requiring on-premises data control and media delivery."
    },
    {
      title: "Tools Platform CI/CD Pipeline",
      metrics: [
        { label: "1,500+ tools", value: "Complex application deployment" },
        { label: "10,000+ users", value: "High-traffic handling" },
        { label: "Automated testing", value: "Quality assurance pipeline" },
        { label: "Zero-downtime", value: "Seamless deployments" }
      ] as ProjectMetric[],
      technologies: ["GitHub Actions", "Docker", "Next.js", "Vercel", "Monitoring tools"],
      url: "https://tools.dxbmark.com",
      relevanceExplanation: "Illustrates modern CI/CD pipeline implementation with automated testing, zero-downtime deployments, and performance monitoring essential for high-traffic applications requiring continuous integration and delivery."
    }
  ]

  // Micro-FAQ items
  const faqItems: FAQItem[] = [
    {
      question: "How long does a typical DevOps infrastructure project take to implement?",
      answer: "Implementation duration varies by complexity: basic server setups require 1-3 weeks, advanced infrastructure with CI/CD and monitoring needs 3-8 weeks, while enterprise-scale solutions require 2-4 months including planning, implementation, testing, and documentation phases."
    },
    {
      question: "Do you work with existing development teams or provide complete infrastructure management?",
      answer: "I work both ways - collaborating with existing teams to implement specific DevOps components or providing complete infrastructure management from planning to ongoing maintenance. Communication includes regular updates, documentation handovers, and team training sessions."
    },
    {
      question: "What ongoing support is provided after DevOps implementation?",
      answer: "All implementations include comprehensive documentation, team training, and 30-day post-deployment support for issues and optimizations. Extended maintenance packages available for ongoing monitoring, security updates, performance tuning, and infrastructure scaling as needed."
    }
  ]

  return (
    <>
      {/* Structured Data */}
      <Script
        id="devops-structured-data"
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
                <Server className="w-4 h-4 text-primary" />
                Professional DevOps Solutions
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Scale Your Infrastructure with
                  <span className="text-primary block">Expert DevOps</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your deployment process with professional DevOps solutions. 
                  From server setup to CI/CD pipelines, security, and monitoring.
                </p>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">8+ Years DevOps Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">30+ Infrastructure Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Cloud & Self-hosted</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Plan Your Infrastructure"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="#examples">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Cloud className="w-5 h-5 mr-2" />
                    View Infrastructure
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="w-full lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* DevOps Services Cards */}
                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Infrastructure</h3>
                    <p className="text-xs text-muted-foreground">Setup, Scaling</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">CI/CD</h3>
                    <p className="text-xs text-muted-foreground">Automation, Testing</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Security</h3>
                    <p className="text-xs text-muted-foreground">Protection, Monitoring</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Hosting</h3>
                    <p className="text-xs text-muted-foreground">Cloud, Self-hosted</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-12 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime Achieved</div>
              </div>

              <div className="absolute -bottom-9 -left-19 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Infrastructure Support</div>
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
            "DevOps services encompass comprehensive infrastructure management including server setup, CI/CD pipeline development, performance optimization, hosting architecture design, security implementation, and monitoring solutions for both cloud and self-hosted environments to ensure scalable, reliable, and maintainable systems."
          </CitationBlock>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Complete Infrastructure Solutions</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From initial server configuration to enterprise-scale infrastructure, I provide end-to-end DevOps solutions 
            that ensure your applications run reliably, securely, and efficiently at any scale.
          </p>
        </div>

        {/* What this service is */}
        <ServiceSection title="What this service is">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Professional DevOps services covering server setup, CI/CD pipeline development, performance optimization, 
              hosting architecture design, security implementation, and comprehensive monitoring solutions. I specialize 
              in both cloud environments (AWS, Google Cloud, Azure) and self-hosted infrastructure management.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Services include infrastructure planning, automated deployment pipelines, scalability optimization, 
              security hardening, backup strategies, monitoring implementation, and comprehensive documentation 
              with team training and ongoing maintenance support.
            </p>
          </div>
        </ServiceSection>

        {/* When to choose this service */}
        <ServiceSection title="When to choose this service">
          <BulletList items={[
            "You need professional server setup and configuration for reliable application hosting and deployment",
            "Your development team requires CI/CD pipeline implementation for automated testing and seamless deployments",
            "You want performance optimization and scalability planning for growing user bases and traffic demands",
            "Your infrastructure needs security implementation including access controls, monitoring, and compliance measures",
            "You require hosting architecture design for both cloud-based and self-hosted environment considerations",
            "You need comprehensive monitoring solutions with alerting, logging, and performance tracking capabilities"
          ]} />
        </ServiceSection>

        {/* When NOT to choose this service */}
        <ServiceSection title="When this service is NOT appropriate">
          <BulletList 
            variant="negative"
            items={[
              "You need simple website hosting that can be handled with managed platforms like Netlify, Vercel, or shared hosting providers",
              "Your project is a basic static site or simple application without complex deployment, scaling, or infrastructure requirements",
              "You're looking for ongoing content management, digital marketing services, or application development rather than infrastructure solutions"
            ]} 
          />
        </ServiceSection>

        {/* What you receive (Deliverables) */}
        <ServiceSection title="What you receive (Deliverables)">
          <BulletList items={[
            "Complete server configuration with optimized performance settings and security hardening measures",
            "Infrastructure documentation covering architecture diagrams, configuration details, and operational procedures",
            "Automated CI/CD pipelines with testing integration, deployment workflows, and rollback capabilities",
            "Comprehensive monitoring setup including performance metrics, alerting systems, and log aggregation",
            "Security implementation with access controls, firewall configuration, SSL certificates, and backup strategies",
            "Scalability planning with auto-scaling configuration, load balancing, and resource optimization guidelines",
            "Handover procedures including team training, documentation transfer, and ongoing maintenance recommendations"
          ]} />
          <div className="mt-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Final Output Format</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              All infrastructure projects are delivered with complete documentation including architecture diagrams, 
              configuration files, deployment scripts, monitoring dashboards, security protocols, backup procedures, 
              and comprehensive handover materials with team training sessions and ongoing support guidelines.
            </p>
          </div>
        </ServiceSection>

        {/* Estimated timeline */}
        <ServiceSection title="Estimated timeline">
          {/* Workflow Summary */}
          <div className="mb-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-4">DevOps Implementation Workflow</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each DevOps project follows a structured approach: <strong>Assessment & Planning</strong> (infrastructure 
              analysis, requirements gathering, architecture design), <strong>Implementation & Configuration</strong> 
              (server setup, CI/CD pipeline development, security implementation), <strong>Testing & Optimization</strong> 
              (performance tuning, security validation, monitoring setup), and <strong>Documentation & Handover</strong> 
              (team training, procedure documentation, ongoing support transition).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Basic Setup</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">1-3 weeks</p>
              <p className="text-sm text-muted-foreground">Server configuration, basic CI/CD, monitoring</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Advanced Infrastructure</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">3-8 weeks</p>
              <p className="text-sm text-muted-foreground">Complex systems, security, performance optimization</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Enterprise Solutions</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">2-4 months</p>
              <p className="text-sm text-muted-foreground">Scalable architecture, comprehensive monitoring</p>
            </div>
          </div>
        </ServiceSection>

        {/* Typical price range */}
        <ServiceSection title="Typical price range">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Basic Infrastructure</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$2,500 - $8,000</p>
              <p className="text-sm text-muted-foreground">AED 9,000 - 30,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Advanced Solutions</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$8,000 - $25,000</p>
              <p className="text-sm text-muted-foreground">AED 30,000 - 95,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Enterprise Infrastructure</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$25,000+</p>
              <p className="text-sm text-muted-foreground">AED 95,000+</p>
            </div>
          </div>
          
          {/* Pricing Factors */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Factors affecting pricing</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <BulletList items={[
                "Infrastructure complexity and scalability requirements for current and future needs",
                "Security implementation depth including compliance requirements and access controls",
                "Integration complexity with existing systems, databases, and third-party services"
              ]} />
              <BulletList items={[
                "Monitoring and alerting system sophistication with custom dashboards and reporting",
                "Ongoing maintenance requirements including updates, security patches, and optimization",
                "Team training needs and documentation depth for knowledge transfer and self-management"
              ]} />
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
            * Prices vary based on infrastructure complexity, scalability requirements, security needs, and ongoing maintenance. Contact for detailed quote.
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
          "In summary, DevOps services provide comprehensive infrastructure management solutions including server configuration, CI/CD pipeline development, performance optimization, security implementation, and monitoring systems for both cloud and self-hosted environments, delivering scalable, reliable infrastructure with complete documentation and ongoing support tailored to business requirements."
        </CitationBlock>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to scale your infrastructure?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to discuss your DevOps needs and infrastructure requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              text="Book DevOps Consultation"
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