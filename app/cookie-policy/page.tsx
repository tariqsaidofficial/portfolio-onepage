
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | Tariq Said - Full-Stack Developer",
  description: "Cookie Policy for Tariq Said's portfolio website. Learn how we use cookies and manage your consent.",
  openGraph: {
    title: "Cookie Policy | Tariq Said",
    description: "Cookie Policy for Tariq Said's portfolio website.",
  },
}

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Back to Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="glass p-8 md:p-12 rounded-2xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                <p>
                  This website uses <strong>CookieScript</strong> to manage cookie consent and ensure compliance with privacy regulations. Cookies are small text files placed on your device to help the website function efficiently and provide certain features.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Types of Cookies Used</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Performance Cookies:</strong> Used to analyze how visitors use the website (e.g., analytics cookies). These cookies do not directly identify visitors.</li>
                  <li><strong>Targeting Cookies:</strong> Used to identify visitors across different websites, such as content partners or ad networks. These cookies may be used to build visitor profiles or show relevant ads.</li>
                  <li><strong>Functionality Cookies:</strong> Used to remember visitor preferences (e.g., language, timezone, enhanced content).</li>
                  <li><strong>Unclassified Cookies:</strong> Cookies that do not belong to any other category or are in the process of categorization.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Third-Party Services</h2>
                <p>
                  We use third-party services such as <strong>Tawk.to</strong> (live chat), <strong>Calendly</strong> (scheduling), and <strong>WhatsApp</strong> (contact button). These services may set their own cookies for functionality and analytics purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Cookie Consent & Control</h2>
                <p>
                  Cookies required for the website to operate properly are set without your permission. All other cookies require your consent before being set in your browser. You can change your consent at any time on our <Link href="/privacy-policy" className="underline text-primary">Privacy Policy</Link> page.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Advertising & Analytics</h2>
                <p>
                  We may use cookies to collect data for personalizing and measuring the effectiveness of our advertising. For more details, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-primary">Google Privacy Policy</a>.
                </p>
              </section>

              <section className="space-y-4">
                <p className="text-muted-foreground text-xs italic">Powered by CookieScript</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
