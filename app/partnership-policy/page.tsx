
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Partnership Policy | Tariq Said - Full-Stack Developer",
  description: "Partnership Policy for Tariq Said's portfolio website. Learn about our principles, process, and risk management.",
  openGraph: {
    title: "Partnership Policy | Tariq Said",
    description: "Partnership Policy for Tariq Said's portfolio website.",
  },
}

export default function PartnershipPolicy() {
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
              Partnership Policy
            </h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Purpose</h2>
                <p>
                  Our partnership policy aims to enable effective collaboration, reduce duplication, and achieve shared objectives with our partners.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Principles</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mutual trust and respect</li>
                  <li>Shared vision and goals</li>
                  <li>Accountability and transparency</li>
                  <li>Commitment to ethical standards</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Scope</h2>
                <p>
                  Partnerships are defined as formal collaborations with entities that share our values and objectives. Simple support or advisory relationships do not constitute a partnership.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Process</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Partner identification and initial contact</li>
                  <li>Due diligence and background checks</li>
                  <li>Proposal assessment and alignment with our goals</li>
                  <li>Formalization through legal agreements</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Formalization</h2>
                <p>
                  All partnerships are formalized using legal documents such as Deeds of Agreement (DoA), which define responsibilities, expectations, limitations, and dispute resolution mechanisms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Risk Management</h2>
                <p>
                  We implement internal controls and mechanisms to address legal, financial, and reputational risks associated with partnerships. Regular reviews and audits are conducted to ensure compliance and effectiveness.
                </p>
              </section>

              <section className="space-y-4">
                <p className="text-muted-foreground text-xs italic">For inquiries or partnership proposals, please contact us via the website form.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
