import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { BackToTop } from "@/components/back-to-top"
import { AnimatedBackground } from "@/components/animated-background"
import { ShareButton } from "@/components/share-button"
import { Toaster } from "sonner"
import { projects } from "@/data/projects"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Removed 300 to reduce font size
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.dxbmark.com'),
  title: {
    default: "Tariq Said | Code. Create. Deliver.",
    template: "%s | Tariq Said"
  },
  description:
    "Full-stack developer and audio-visual specialist with 15+ years of experience. Specializing in web development, event technology, and AV systems. Serving clients across GCC, Middle East, and the Arab World. Based in Dubai, UAE & Egypt.",
  alternates: {
    canonical: 'https://portfolio.dxbmark.com',
  },
  keywords: [
    "Full-Stack Developer",
    "Audio-Visual Specialist",
    "Web Development Dubai",
    "Web Development Egypt",
    "Web Development Saudi Arabia",
    "Web Development Kuwait",
    "Web Development Qatar",
    "Web Development Bahrain",
    "Web Development Oman",
    "Event Technology",
    "AV Systems Expert",
    "Next.js Developer",
    "React Developer",
    "IT Infrastructure",
    "DXBMark Co-Founder",
    "Dubai Developer",
    "Egypt Developer",
    "UAE Tech Professional",
    "Egypt Tech Professional",
    "GCC Developer",
    "Gulf Developer",
    "Saudi Arabia Developer",
    "Kuwait Developer",
    "Qatar Developer",
    "Media Technician",
    "Conference Technology",
    "Cairo Developer",
    "Middle East Developer",
    "Arab World Developer",
    "مطور مواقع",
    "مطور ويب",
    "مبرمج",
  ],
  authors: [{ name: "Tariq Said", url: "https://dxbmark.com" }],
  creator: "Tariq Said",
  publisher: "Tariq Said",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.ico', sizes: 'any' },
    ],
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.dxbmark.com",
    siteName: "Tariq Said Portfolio",
    title: "Tariq Said | Full-Stack Developer & AV Specialist",
    description:
      "Full-stack developer and audio-visual specialist with 15+ years of experience. Specializing in web development, event technology, and AV systems. Serving clients across GCC, Middle East, and the Arab World. Based in Dubai, UAE & Egypt.",
    images: [
      {
        url: "https://portfolio.dxbmark.com/professional-developer-portrait.webp",
        width: 1200,
        height: 630,
        alt: "Tariq Said - Full-Stack Developer & AV Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tariq Said | Code. Create. Deliver.",
    description:
      "Full-stack developer and audio-visual specialist with 15+ years of experience. Serving GCC, Middle East & Arab World. Based in Dubai, UAE & Egypt.",
    images: ["https://portfolio.dxbmark.com/professional-developer-portrait.webp"],
    creator: "@tariqsaidofficial",
  },
  other: {
    "facebook:profile_id": "tariqsaidofficial",
    "instagram:username": "tariqsaidofficial",
    "linkedin:profile": "tariqsaidofficial",
    "github:username": "tariqsaidofficial",
    "behance:profile": "tariqsaidofficial",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon - Enhanced for all platforms */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="https://portfolio.dxbmark.com/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://portfolio.dxbmark.com/favicon.ico" />
        <meta name="theme-color" content="#0a122c" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Tariq Said" />
        <meta name="copyright" content="© 2025 Tariq Said" />
        <meta name="application-name" content="Tariq Said Portfolio" />
        
        {/* Structured Data - ProfilePage with Person (Consolidated) */}
        <Script
          id="structured-data-profilepage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Tariq Said",
                "url": "https://portfolio.dxbmark.com",
                "image": "https://portfolio.dxbmark.com/professional-developer-portrait.webp",
                "jobTitle": "Full-Stack Developer & Audio-Visual Specialist",
                "worksFor": {
                  "@type": "Organization",
                  "name": "DXBMark",
                  "url": "https://dxbmark.com"
                },
                "description": "Full-stack developer and audio-visual specialist with 15+ years of experience. Specializing in web development, event technology, and AV systems.",
                "knowsAbout": [
                  "Web Development",
                  "Full-Stack Development",
                  "Audio-Visual Systems",
                  "Event Technology",
                  "React",
                  "Next.js",
                  "Node.js",
                  "IT Infrastructure"
                ],
                "sameAs": [
                  "https://github.com/tariqsaidofficial",
                  "https://www.linkedin.com/in/tariqsaidofficial/",
                  "https://www.behance.net/tariqsaidofficial"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "AE",
                  "addressLocality": "Dubai",
                  "addressRegion": "Dubai"
                },
                "email": "mailto:info@dxbmark.com"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tariq Said Portfolio",
              "url": "https://portfolio.dxbmark.com",
              "description": "Professional portfolio of Tariq Said - Full-Stack Developer & Audio-Visual Specialist",
              "inLanguage": "en",
              "author": {
                "@type": "Person",
                "name": "Tariq Said"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://portfolio.dxbmark.com/#contact",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - BreadcrumbList */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://portfolio.dxbmark.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://portfolio.dxbmark.com/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Skills",
                  "item": "https://portfolio.dxbmark.com/#skills"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Projects",
                  "item": "https://portfolio.dxbmark.com/#projects"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Services",
                  "item": "https://portfolio.dxbmark.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": "https://portfolio.dxbmark.com/#contact"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DXBMark",
              "url": "https://dxbmark.com",
              "logo": "https://portfolio.dxbmark.com/TariqSaid-logo.webp",
              "founder": {
                "@type": "Person",
                "name": "Tariq Said",
                "url": "https://portfolio.dxbmark.com"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "mailto:info@dxbmark.com",
                "contactType": "Customer Service",
                "areaServed": ["AE", "EG", "SA", "KW", "QA", "BH", "OM"],
                "availableLanguage": ["en", "ar"]
              },
              "sameAs": [
                "https://github.com/tariqsaidofficial",
                "https://www.linkedin.com/in/tariqsaidofficial/",
                "https://www.behance.net/tariqsaidofficial"
              ]
            })
          }}
        />
        
        {/* Structured Data - Portfolio ItemList with Projects (Dynamic from data/projects.ts) */}
        <Script
          id="structured-data-portfolio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Tariq Said Portfolio Projects",
              "description": "Collection of web development, mobile apps, IT infrastructure, AV systems, and media production projects by Tariq Said",
              "numberOfItems": projects.length,
              "itemListElement": projects.map((project, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": project.name,
                "description": project.description.replace(/\*\*/g, ''), // Remove markdown
                "image": `https://portfolio.dxbmark.com${project.image}`,
                "author": {
                  "@type": "Person",
                  "name": "Tariq Said",
                  "url": "https://portfolio.dxbmark.com"
                },
                "dateCreated": project.dateCreated,
                "keywords": project.techStack,
                "url": project.liveUrl || "https://portfolio.dxbmark.com/#projects",
                "genre": project.genre || project.category,
                "inLanguage": "en"
              }))
            })
          }}
        />
        
        {/* Cloudflare Turnstile - Explicit Rendering for SPA */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          async
          defer
        />
        
        {/* Google Tag Manager - Load as high as possible */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58VTPGXL');
            `,
          }}
        />
        
        {/* Google Consent Mode v2 - Must load BEFORE Google Analytics */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Define dataLayer and the gtag function.
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Set default consent for EEA, UK, GCC, Middle East, and other privacy-regulated regions
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500,
                'regions': [
                  // EEA (European Economic Area)
                  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
                  // UK & EFTA
                  'GB', 'CH', 'NO', 'IS', 'LI',
                  // GCC (Gulf Cooperation Council)
                  'SA', 'AE', 'KW', 'OM', 'QA', 'BH',
                  // Middle East & North Africa
                  'EG', 'JO', 'LB', 'IQ', 'SY', 'YE', 'PS', 'TR', 'IR',
                  // Other Privacy-Regulated Regions
                  'CA-QC', 'BR', 'ZA'
                ]
              });
              
              // Set default consent for all other regions
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        
        {/* Cookie Script - GDPR Compliance */}
        <Script
          type="text/javascript"
          src="//cdn.cookie-script.com/s/7fa260f868618f7e849c683cbef1949c.js"
          strategy="afterInteractive"
        />
        
        {/* Cookie Script Consent Update Handler */}
        <Script
          id="cookie-consent-handler"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Listen for Cookie Script consent changes
              document.addEventListener('CookieScriptAccept', function() {
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                  });
                }
              });
              
              document.addEventListener('CookieScriptAcceptAll', function() {
                if (typeof gtag === 'function') {
                  gtag('consent', 'update', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                  });
                }
              });
            `,
          }}
        />
        
        {/* Google Analytics - Lazy loaded for better performance */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-P6EHS0QWTZ"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('set', 'developer_id.dY2E1Nz', true);
              
              // Primary Analytics Property
              gtag('config', 'G-P6EHS0QWTZ', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
              
              // Secondary Analytics Property
              gtag('config', 'G-SNY82JTB4Z', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            `,
          }}
        />
        
        {/* JSON-LD Structured Data for Google Knowledge Panel */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.wikidata.org/wiki/Q136538198",
              "mainEntityOfPage": [
                {
                  "@type": "WebPage",
                  "@id": "https://portfolio.dxbmark.com/"
                },
                {
                  "@type": "CreativeWork",
                  "@id": "https://www.wikidata.org/wiki/Q136538198"
                }
              ],
              "name": "Tariq Said",
              "alternateName": [
                "Tariq M. Said",
                "Tariq Moh. Said",
                "Tariq Mohamed Yousef Mohamed Said",
                "طارق سعيد"
              ],
              "description": "Egyptian AV/IT Integration Specialist, ICT teacher, software engineer, and theatre actor based in Dubai.",
              "jobTitle": "AV/IT Integration Specialist, ICT Teacher, and Software Engineer",
              "nationality": {
                "@type": "Country",
                "name": "Egypt"
              },
              "homeLocation": {
                "@type": "Place",
                "name": "Dubai, United Arab Emirates"
              },
              "gender": "Male",
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "The Higher Institute of Tourism, Hotels & Computer (H.I.T.H.C.)"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Faculty of Education, Alexandria University"
                }
              ],
              "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Portrait_of_Tariq_Said.jpg",
              "associatedMedia": {
                "@type": "ImageObject",
                "contentUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/Portrait_of_Tariq_Said.jpg",
                "description": "Official portrait of Tariq Said hosted on Wikimedia Commons",
                "license": "https://creativecommons.org/licenses/by/4.0/",
                "acquireLicensePage": "https://creativecommons.org/licenses/by/4.0/",
                "creditText": "Photo by Tariq Said, licensed under CC BY 4.0",
                "creator": {
                  "@type": "Person",
                  "name": "Tariq Said"
                },
                "copyrightNotice": "© 2025 Tariq Said, licensed under CC BY 4.0"
              },
              "url": "http://portfolio.dxbmark.com/",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q136538198",
                "https://commons.wikimedia.org/wiki/File:Portrait_of_Tariq_Said.jpg",
                "https://www.linkedin.com/in/tariqsaidofficial/",
                "https://github.com/tariqsaidofficial",
                "https://www.instagram.com/tariqsaidofficial/"
              ],
              "affiliation": {
                "@type": "Organization",
                "name": "Sunmarke School"
              },
              "knowsLanguage": ["English", "Arabic"],
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/FollowAction",
                "userInteractionCount": 502,
                "description": "Combined followers across LinkedIn, Instagram, and GitHub as of 2025"
              },
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "AV/IT Integration Specialist",
                  "occupationalCategory": "Information Technology"
                },
                {
                  "@type": "Occupation",
                  "name": "ICT Teacher",
                  "occupationalCategory": "Education"
                },
                {
                  "@type": "Occupation",
                  "name": "Software Engineer",
                  "occupationalCategory": "Technology"
                },
                {
                  "@type": "Occupation",
                  "name": "Theatre Actor",
                  "occupationalCategory": "Performing Arts"
                }
              ]
            })
          }}
        />
      </head>
      <body id="root" className={`${poppins.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-58VTPGXL"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        
        {/* Animated Background */}
        <AnimatedBackground />
        
        {children}
        
        {/* Floating Action Buttons */}
        <ShareButton variant="floating" />
        <FloatingWhatsApp />
        <BackToTop />
        
        {/* Toast Notifications */}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
