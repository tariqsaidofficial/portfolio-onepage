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
  title: "About Tariq Said | Personal Journey & Professional Philosophy",
  description: "Personal journey, values, and philosophy of Tariq Said - Full-Stack Developer & AV Specialist. 15+ years experience, continuous learning mindset, and human-centered technology approach across UAE, Egypt, GCC, and UK markets.",
  keywords: [
    "Tariq Said Personal",
    "Developer Journey",
    "Professional Philosophy",
    "Personal Values",
    "Technology Mindset",
    "Career Timeline",
    "Professional Development",
    "UAE Developer Story",
    "GCC Technology Professional",
    "Personal Background",
    "Developer Philosophy",
    "Human-Centered Technology"
  ],
  openGraph: {
    title: "About Tariq Said | Personal Journey & Professional Philosophy",
    description: "Personal journey, values, and philosophy behind 15+ years of professional development experience across UAE, Egypt, GCC, and UK markets.",
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
    "description": "Personal journey and professional philosophy of a developer with 15+ years experience in web development, AV systems, and DevOps solutions serving the UAE, Egypt, GCC, and UK markets with focus on continuous learning, quality over quantity, and human-centered technology.",
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
      "Docker",
      "Continuous Learning",
      "Human-Centered Technology",
      "Cross-Cultural Collaboration"
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
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Extron AV Associate Program"
      },
      {
        "@type": "Organization", 
        "name": "Crestron Audio Certification Program"
      },
      {
        "@type": "Organization",
        "name": "Google Cloud Innovator Program"
      }
    ]
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
                Personal Story & Philosophy
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Personal Journey in
                  <span className="text-primary block">Technology & Innovation</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  The story behind 15+ years of passionate development, continuous learning, and building 
                  meaningful solutions across UAE, Egypt, GCC, and UK markets with a human-centered approach.
                </p>
              </div>

              {/* Personal Values */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Continuous Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Quality Over Quantity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Human-Centered Tech</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Schedule a Consultation"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="#personal-journey">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Briefcase className="w-5 h-5 mr-2" />
                    My Journey
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
            "Tariq Said is a passionate developer and technical consultant whose 15+ years journey spans web development, AV systems, and DevOps solutions across the UAE, Egypt, GCC, and UK markets, driven by values of continuous learning, quality over quantity, and human-centered technology that creates meaningful impact for businesses and communities."
          </CitationBlock>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Personal Journey & Professional Philosophy</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This is the story behind the code, the person behind the projects, and the values that drive every decision. 
            From early curiosity about technology to building platforms that serve thousands, this journey reflects a 
            commitment to growth, quality, and making technology work for people across diverse cultures and markets.
          </p>
        </div>

        {/* Personal Journey & Timeline */}
        <ServiceSection title="Personal Journey & Career Timeline" titleLevel="h2">
          <div className="glass rounded-xl p-4 md:p-6 lg:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="relative">
                <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">2008</div>
                <div className="font-semibold mb-1 text-sm md:text-base">IT Infrastructure Specialist</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Started career in IT systems and infrastructure, building foundation in network administration and system integration
                </div>
              </div>
              <div className="relative">
                <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">2015</div>
                <div className="font-semibold mb-1 text-sm md:text-base">Full-Stack Developer</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Transitioned to web development and software engineering, mastering modern frameworks and development practices
                </div>
              </div>
              <div className="relative">
                <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">2020</div>
                <div className="font-semibold mb-1 text-sm md:text-base">Event Tech Director</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Led AV systems for major international conferences, managing complex multi-camera productions and live streaming
                </div>
              </div>
              <div className="relative">
                <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">2024</div>
                <div className="font-semibold mb-1 text-sm md:text-base">Co-Founder, DXBMark</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Built platform serving 3K+ users with 98% uptime, demonstrating expertise in scalable architecture and team leadership
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              My journey began with a passion for solving complex technical challenges. From managing server infrastructures 
              to creating user-friendly web applications, each step has been driven by curiosity and the desire to build 
              solutions that make a real difference for businesses and their users.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              What started as troubleshooting network issues evolved into architecting complete digital ecosystems. 
              Today, I combine technical expertise with business understanding to deliver solutions that not only work 
              but scale and adapt to changing needs.
            </p>
          </div>
        </ServiceSection>

        {/* Personal Certifications & Achievements */}
        <ServiceSection title="Certifications & Professional Development" titleLevel="h2">
          <div className="text-center mb-8">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Continuous learning has been a cornerstone of my career. These certifications represent not just technical 
              knowledge, but a commitment to staying current with industry best practices and emerging technologies.
            </p>
          </div>
          
          {/* All Certifications & Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-center mb-8">
            {/* Extron AV Associate */}
            <div className="certification-badge">
              <a 
                href="https://media.licdn.com/dms/document/media/v2/D4D2DAQFBKRILEcZs_A/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1710096680164?e=1762387200&v=beta&t=e15Kd6Ocy5aSfrfwXxzLUakLCZanvQLlOHV1zqhp_iM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <img
                  src="/assets/ExtronAVassociate.png"
                  alt="Extron AV Associate"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Extron AV Associate</span>
              </a>
            </div>

            {/* Certified Audio Technician - Crestron */}
            <div className="certification-badge">
              <a 
                href="https://media.licdn.com/dms/document/media/v2/D4D2DAQHqF8RfckHnQw/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1734471373098?e=1762387200&v=beta&t=zxyMsSxT464LqXq5nqYDw3FhbHizSg7EwVTVHfyPiFc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <img
                  src="/assets/CrestronAudiocertification.png"
                  alt="Certified Audio Technician"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Certified Audio Technician</span>
              </a>
            </div>

            {/* AI Prompt Engineering */}
            <div className="certification-badge">
              <a 
                href="https://omp.dub.ai/certificate/MRLdeP96FXnN?locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <img
                  src="/assets/1MP-Logo-badge.png"
                  alt="AI Prompt Engineering"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">AI Prompt Engineering</span>
              </a>
            </div>

            {/* Certified Digital Citizen */}
            <div className="certification-badge">
              <a 
                href="https://media.licdn.com/dms/image/v2/D4D2DAQHw76aQ2aeJqg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703078575621?e=1761901200&v=beta&t=fvXfCp_5xr2UIULi3fq4tMtzyxr4KQs1ZjFtCDGfBjA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <img
                  src="/assets/joulyacademyuk.png"
                  alt="Certified Digital Citizen"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Certified Digital Citizen</span>
              </a>
            </div>

            {/* Google Cloud Innovator Badge */}
            <div className="certification-badge">
              <img
                src="https://developers.google.com/static/profile/badges/community/innovators/cloud/2021_member/badge.svg"
                alt="Google Cloud Innovator"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">Google Cloud Innovator</span>
            </div>

            {/* Android Studio User Badge */}
            <div className="certification-badge">
              <img
                src="https://developers.google.com/static/profile/badges/activity/android/install-android-studio/badge.svg"
                alt="Android Studio User"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">Android Studio User</span>
            </div>

            {/* Firebase Studio Developer Badge */}
            <div className="certification-badge">
              <img
                src="https://developers.google.com/static/profile/badges/community/firebasestudio/firebase-studio/badge.svg"
                alt="Firebase Studio Developer"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">Firebase Studio Developer</span>
            </div>

            {/* Google Developer Program */}
            <div className="certification-badge">
              <img
                src="https://developers.google.com/static/profile/badges/profile/created-profile/created_profile.svg"
                alt="Google Developer Program"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">Google Developer Program</span>
            </div>

            {/* MEC Achievement 2019 */}
            <div className="certification-badge">
              <img
                src="https://learn.microsoft.com/en-us/training/achievements/mec-achievements-2019.svg"
                alt="MEC Achievement 2019"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">MEC Achievement 2019</span>
            </div>

            {/* Microsoft Innovative Educator */}
            <div className="certification-badge">
              <img
                src="https://learn.microsoft.com/en-us/training/achievements/learn-meclegacy-mie.svg"
                alt="Microsoft Innovative Educator"
                className="certification-badge-img"
              />
              <span className="certification-badge-label">Microsoft Innovative Educator</span>
            </div>
          </div>

          {/* Professional Memberships & Affiliations */}
          <div className="glass rounded-xl p-4 md:p-6 lg:p-8">
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">Professional Memberships & Affiliations</h4>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {/* Google Cloud & NVIDIA Community Member */}
              <div className="certification-badge">
                <img
                  src="https://developers.google.com/static/profile/badges/nvidia-developer/badge.svg"
                  alt="Google Cloud & NVIDIA Community Member"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Google Cloud & NVIDIA Member</span>
              </div>

              {/* Certified IT Professional - Egypt Ministry of ManPower */}
              <div className="certification-badge">
                <img
                  src="https://www.labour.gov.eg/assets/img/logo/logo.png"
                  alt="Certified IT Professional"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Certified IT Professional</span>
              </div>

              {/* Github Developer Program */}
              <div className="certification-badge">
                <img
                  src="/assets/GithubDevelopaer.png"
                  alt="Github Developer Program"
                  className="certification-badge-img"
                />
                <span className="certification-badge-label">Github Developer Program</span>
              </div>
            </div>
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

        {/* Personal Philosophy & Values */}
        <ServiceSection title="Personal Philosophy & Values" titleLevel="h2">
          <div className="text-center mb-8">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond the technical skills and certifications, my approach to work and life is guided by core values 
              that shape every project and interaction. These principles have been developed through years of 
              experience and continue to evolve as I grow both personally and professionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Technology evolves rapidly, and I believe in staying curious and adaptable. Every project teaches 
                something new, and I embrace challenges as opportunities to grow and improve my craft.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Quality Over Quantity</h3>
              <p className="text-sm text-muted-foreground">
                I prefer to work on fewer projects with deeper involvement rather than spreading thin. This allows 
                me to deliver exceptional results and build meaningful relationships with clients and collaborators.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-3 text-lg">Human-Centered Technology</h3>
              <p className="text-sm text-muted-foreground">
                Technology should serve people, not the other way around. I focus on creating solutions that are 
                intuitive, accessible, and genuinely improve the user experience and business outcomes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              These values guide my decision-making process, from choosing which technologies to use, to how I 
              communicate with clients, to the way I structure my code. They're not just professional principles 
              but personal commitments that define who I am as both a developer and a person.
            </p>
          </div>
        </ServiceSection>

        {/* Personal Interests & Inspiration */}
        <ServiceSection title="Beyond the Code" titleLevel="h2">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding or managing AV systems, I find inspiration in various activities that often 
              influence my professional work. These interests help me maintain creativity, stay balanced, and 
              bring fresh perspectives to technical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-primary">Technology Exploration</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I enjoy experimenting with emerging technologies, contributing to open-source projects, and 
                exploring how new tools can solve existing problems in innovative ways. This curiosity drives 
                my professional development and keeps me ahead of industry trends.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-primary">Cross-Cultural Collaboration</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Working across UAE, Egypt, GCC, and UK markets has taught me the value of cultural sensitivity 
                and adaptability. I enjoy learning about different business practices and finding ways to bridge 
                technical solutions with cultural considerations.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-primary">Knowledge Sharing</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in giving back to the community through mentoring, documentation, and sharing experiences. 
                Whether it's helping a junior developer or contributing to technical discussions, knowledge sharing 
                enriches both the giver and receiver.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-primary">Problem-Solving Mindset</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I approach challenges with curiosity rather than frustration. Every bug, every system failure, 
                every client requirement is a puzzle to solve. This mindset turns obstacles into opportunities 
                for creative solutions and learning.
              </p>
            </div>
          </div>
        </ServiceSection>

        {/* Citation-Friendly Summary */}
        <CitationBlock variant="summary">
          "In summary, Tariq Said's personal journey reflects a passionate commitment to continuous learning, quality craftsmanship, and human-centered technology, bringing 15+ years of experience in web development, AV systems, and DevOps solutions to create meaningful impact across UAE, Egypt, GCC, and UK markets through values-driven professional practice and cross-cultural collaboration."
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