import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        url: "https://portfolio.dxbmark.com/professional-developer-portrait.png",
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
    images: ["https://portfolio.dxbmark.com/professional-developer-portrait.png"],
    creator: "@tariqsaidofficial",
  },
  other: {
    "fb:app_id": "your-facebook-app-id", // TODO: Add Facebook App ID from developers.facebook.com
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
        {/* Favicon - Enhanced for all platforms */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="https://portfolio.dxbmark.com/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://portfolio.dxbmark.com/favicon.ico" />
        <meta name="theme-color" content="#0a122c" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://portfolio.dxbmark.com/" />
        
        {/* Structured Data - ProfilePage (Better for Rich Results) */}
        <Script
          id="structured-data-profilepage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Tariq Said",
                "url": "https://portfolio.dxbmark.com",
                "image": "https://portfolio.dxbmark.com/professional-developer-portrait.png",
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
                "email": "info@dxbmark.com"
              }
            })
          }}
        />
        
        {/* Structured Data - Person (Additional) */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tariq Said",
              "url": "https://portfolio.dxbmark.com",
              "image": "https://portfolio.dxbmark.com/professional-developer-portrait.png",
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
              "email": "info@dxbmark.com"
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
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
          strategy="beforeInteractive"
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
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DXBMark",
              "url": "https://dxbmark.com",
              "logo": "https://portfolio.dxbmark.com/TariqSaid-logo.png",
              "founder": {
                "@type": "Person",
                "name": "Tariq Said",
                "url": "https://portfolio.dxbmark.com"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@dxbmark.com",
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
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P6EHS0QWTZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P6EHS0QWTZ');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
