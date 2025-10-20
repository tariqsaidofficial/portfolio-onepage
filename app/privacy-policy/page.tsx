import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Tariq Said - Full-Stack Developer",
  description: "Privacy Policy for Tariq Said's portfolio website. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Tariq Said",
    description: "Privacy Policy for Tariq Said's portfolio website.",
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass p-8 md:p-12 rounded-2xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                Welcome to Tariq Said's portfolio website ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground">2.1 Personal Information</h3>
              <p>When you use our contact form, we collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number (optional)</li>
                <li>Company/Organization Name (optional)</li>
                <li>Project Type and Details</li>
                <li>Budget Information</li>
                <li>Timeline Preferences</li>
                <li>Any additional information you provide in your message</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.2 Automatically Collected Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP Address</li>
                <li>Browser Type and Version</li>
                <li>Device Information</li>
                <li>Pages Visited and Time Spent</li>
                <li>Referring Website</li>
                <li>Geographic Location (approximate)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. You can manage cookie preferences through our Cookie Consent banner or your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Communication:</strong> To respond to your inquiries and provide requested information</li>
                <li><strong>Project Evaluation:</strong> To assess project requirements and provide accurate quotes</li>
                <li><strong>Service Improvement:</strong> To enhance our website and services</li>
                <li><strong>Analytics:</strong> To understand user behavior and improve user experience</li>
                <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
              <p>We use the following third-party services that may collect information:</p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Google Analytics</h3>
                  <p>For website traffic analysis and user behavior insights.</p>
                  <p className="text-sm">
                    Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Cloudflare Turnstile</h3>
                  <p>For spam protection and bot detection on our contact form.</p>
                  <p className="text-sm">
                    Privacy Policy: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cloudflare.com/privacypolicy/</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Resend (Email Service)</h3>
                  <p>For processing and delivering contact form submissions.</p>
                  <p className="text-sm">
                    Privacy Policy: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://resend.com/legal/privacy-policy</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Cookie-Script</h3>
                  <p>For cookie consent management and GDPR compliance.</p>
                  <p className="text-sm">
                    Privacy Policy: <a href="https://cookie-script.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://cookie-script.com/privacy-policy</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure hosting infrastructure (Cloudflare Pages)</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Data encryption at rest and in transit</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form submissions are typically retained for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Active Inquiries:</strong> Duration of project discussion and up to 1 year after completion</li>
                <li><strong>Inactive Inquiries:</strong> Up to 2 years for reference purposes</li>
                <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at: <a href="mailto:info@dxbmark.com" className="text-primary hover:underline">info@dxbmark.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="ml-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:info@dxbmark.com" className="text-primary hover:underline">info@dxbmark.com</a></p>
                <p><strong>Website:</strong> <a href="https://portfolio.dxbmark.com" className="text-primary hover:underline">https://portfolio.dxbmark.com</a></p>
                <p><strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. GDPR Compliance (EU Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to be informed about data collection and use</li>
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
              <p className="mt-4">
                You also have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. CCPA Compliance (California Users)</h2>
              <p>
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> We do not sell your personal information to third parties.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-center text-sm">
                By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
