"use client"

import { ProfileCard } from "./profile-card"

/**
 * HomeAbout Component - Business-focused about section for Home page
 * 
 * Features:
 * - 60% Portfolio + 40% Business balance
 * - Reduced personal content compared to full About page
 * - Focus on professional expertise and business value
 * - Key certifications without extensive timeline
 * 
 * @component
 */
export function HomeAbout() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">About & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Full-stack digital solutions engineer with 15+ years of experience delivering web development, 
              audiovisual systems, and DevOps infrastructure. Specializing in transforming business requirements 
              into scalable technical solutions for UAE, GCC, and international markets.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Co-founded DXBMark platform serving 3,000+ users with 98% uptime. Certified in Crestron & Extron 
              AV systems with extensive experience in enterprise-grade infrastructure, modern web technologies, 
              and project management across healthcare, real estate, media, and technology sectors.
            </p>

            {/* Key Business Metrics */}
            <div className="pt-4 md:pt-6">
              <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-3 md:mb-4 uppercase tracking-wider">
                Key Achievements
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">3K+</div>
                  <div className="text-xs text-muted-foreground">Platform Users</div>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Uptime Record</div>
                </div>
              </div>
            </div>

            {/* Core Certifications (Key ones only) */}
            <div className="pt-4 md:pt-6">
              <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-3 md:mb-4 uppercase tracking-wider">
                Core Certifications
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3 items-center">
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
                    <span className="certification-badge-label">Extron AV</span>
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
                    <span className="certification-badge-label">Crestron Audio</span>
                  </a>
                </div>

                {/* Google Cloud Innovator Badge */}
                <div className="certification-badge">
                  <img
                    src="https://developers.google.com/static/profile/badges/community/innovators/cloud/2021_member/badge.svg"
                    alt="Google Cloud Innovator"
                    className="certification-badge-img"
                  />
                  <span className="certification-badge-label">Google Cloud</span>
                </div>

                {/* More link to About page */}
                <div className="certification-badge">
                  <a 
                    href="/about"
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="certification-badge-placeholder">
                      <span className="text-xs text-muted-foreground">+More</span>
                    </div>
                    <span className="certification-badge-label">View All</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <ProfileCard
              name="Tariq Said"
              title="Full-Stack Developer & AV Specialist"
              handle="tariqsaidofficial"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/professional-developer-portrait.webp"
              miniAvatarUrl="/professional-avatar.webp"
              showUserInfo={true}
              showBehindGradient={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>

        {/* Business Focus Areas */}
        <div className="glass rounded-xl p-4 md:p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Core Expertise Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">Full-Stack Development</div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">AV Systems & Production</div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Crestron, Extron, vMix, OBS, Multi-camera, Live Streaming
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">DevOps & Infrastructure</div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                AWS, Docker, Kubernetes, CI/CD, Monitoring, Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}