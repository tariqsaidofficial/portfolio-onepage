import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Image License & Usage',
  description: 'License information for images and content on Tariq Said portfolio',
}

export default function LicensePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 relative" style={{ zIndex: 10 }}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>Image License & Usage</h1>
          
          <div className="space-y-8">
            {/* License Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>License Overview</h2>
              <p className="mb-4" style={{ color: '#e2e8f0' }}>
                Unless otherwise stated, all images on this portfolio are licensed under the{' '}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Creative Commons Attribution 4.0 International License (CC BY 4.0)
                </a>
                .
              </p>
            </section>

            {/* What This Means */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>What This Means</h2>
              <p className="mb-4" style={{ color: '#e2e8f0' }}>You are free to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: '#e2e8f0' }}>
                <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
                <li><strong>Adapt</strong> — remix, transform, and build upon the material for any purpose, even commercially</li>
              </ul>
            </section>

            {/* Attribution Requirements */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>Attribution Requirements</h2>
              <p className="mb-4" style={{ color: '#e2e8f0' }}>
                When using images from this portfolio, you must give appropriate credit:
              </p>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <p className="font-mono text-sm" style={{ color: '#e2e8f0' }}>
                  Photo by Tariq Said, licensed under CC BY 4.0
                  <br />
                  Source: https://portfolio.dxbmark.com
                </p>
              </div>
            </section>

            {/* Image Categories */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>Image Categories</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>Profile & Professional Photos</h3>
                  <p style={{ color: '#e2e8f0' }}>
                    <strong>Credit:</strong> Photo by Tariq Said
                    <br />
                    <strong>License:</strong> CC BY 4.0
                    <br />
                    <strong>Copyright:</strong> © 2025 Tariq Said
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>Project Screenshots</h3>
                  <p style={{ color: '#e2e8f0' }}>
                    <strong>Credit:</strong> Screenshot by Tariq Said
                    <br />
                    <strong>License:</strong> CC BY 4.0
                    <br />
                    <strong>Copyright:</strong> © 2025 Tariq Said
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>Testimonial Photos</h3>
                  <p style={{ color: '#e2e8f0' }}>
                    Photos provided by respective individuals with permission for use on this portfolio.
                    <br />
                    <strong>Copyright:</strong> © Respective owners
                  </p>
                </div>
              </div>
            </section>

            {/* Commercial Use */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>Commercial Use</h2>
              <p style={{ color: '#e2e8f0' }}>
                Yes, you can use these images for commercial purposes under the CC BY 4.0 license,
                as long as you provide proper attribution.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>Questions?</h2>
              <p className="mb-4" style={{ color: '#e2e8f0' }}>
                If you have questions about image usage or need a different license, please{' '}
                <Link href="/#contact" className="text-primary hover:underline">
                  contact me
                </Link>
                .
              </p>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>Additional Resources</h2>
              <ul className="space-y-2" style={{ color: '#e2e8f0' }}>
                <li>
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: '#e11d48' }}
                  >
                    Full CC BY 4.0 License Text
                  </a>
                </li>
                <li>
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/deed.en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: '#e11d48' }}
                  >
                    CC BY 4.0 License Summary
                  </a>
                </li>
                <li>
                  <Link href="/" className="hover:underline" style={{ color: '#e11d48' }}>
                    Back to Portfolio
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Image License & Usage',
                description: 'License information for images and content on Tariq Said portfolio',
                url: 'https://portfolio.dxbmark.com/license',
                author: {
                  '@type': 'Person',
                  name: 'Tariq Said',
                  url: 'https://portfolio.dxbmark.com',
                },
                license: 'https://creativecommons.org/licenses/by/4.0/',
              }),
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
