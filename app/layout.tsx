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
  title: "Tariq Said | Code. Create. Deliver.",
  description:
    "Full-stack developer and audio-visual specialist with 15+ years of experience. Specializing in web development, event technology, and AV systems. Serving clients across GCC, Middle East, and the Arab World. Based in Dubai, UAE & Egypt.",
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
    icon: '/favicon.ico',
    apple: '/favicon.ico',
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
        url: "/professional-developer-portrait.png",
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
    images: ["/professional-developer-portrait.png"],
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
  verification: {
    google: "your-google-verification-code",
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
