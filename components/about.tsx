"use client"

import { ProfileCard } from "./profile-card"
import { useEffect } from "react"

export function About() {
  useEffect(() => {
    const badges = document.querySelectorAll('.certification-badge')
    const handlers: Array<{ badge: Element; handler: (e: Event) => void }> = []
    
    badges.forEach((badge) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as globalThis.MouseEvent
        if (badge instanceof HTMLElement) {
          const rect = badge.getBoundingClientRect()
          const x = mouseEvent.clientX - rect.left
          const y = mouseEvent.clientY - rect.top
          
          badge.style.setProperty('--mouse-x', `${x}px`)
          badge.style.setProperty('--mouse-y', `${y}px`)
        }
      }
      
      badge.addEventListener('mousemove', handleMouseMove)
      handlers.push({ badge, handler: handleMouseMove })
    })
    
    // Cleanup
    return () => {
      handlers.forEach(({ badge, handler }) => {
        badge.removeEventListener('mousemove', handler)
      })
    }
  }, [])

  const timeline = [
    {
      year: "2008",
      title: "IT Infrastructure Specialist",
      description: "Started career in IT systems and infrastructure",
    },
    {
      year: "2015",
      title: "Full-Stack Developer",
      description: "Transitioned to web development and software engineering",
    },
    { year: "2020", title: "Event Tech Director", description: "Led AV systems for major international conferences" },
    { year: "2024", title: "Co-Founder, DXBMark", description: "Built platform serving 3K+ users with 98% uptime" },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a full-stack digital solutions engineer with 15+ years of experience in software development and
              audiovisual systems. I specialize in transforming creative ideas into integrated technical solutions,
              from IT infrastructure to advanced web and mobile applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a certified expert in audiovisual systems (Crestron & Extron) and professional software developer,
              I design smart solutions that combine technical precision with innovation. Whether building integrated
              digital platforms or managing AV systems for major events, my goal is one: to deliver exceptional digital
              experiences that inspire audiences and meet client needs.
            </p>

            {/* Expertise Badges & Certifications */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Certifications & Badges
              </h4>
              <div className="flex flex-wrap gap-3 items-center">
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

                {/* Placeholder with Glow Effect */}
                <div className="certification-badge">
                  <div className="certification-badge-placeholder">
                    <span className="text-xs text-muted-foreground">+More</span>
                  </div>
                  <span className="certification-badge-label">Coming Soon</span>
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

        <div className="glass rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Career Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                <div className="font-semibold mb-1">{item.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships & Affiliations */}
        <div className="glass rounded-xl p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Memberships & Affiliations</h3>
          <div className="flex flex-wrap justify-center gap-4">
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

            {/* Placeholder for more memberships */}
            <div className="certification-badge">
              <div className="certification-badge-placeholder">
                <span className="text-xs text-muted-foreground">+More</span>
              </div>
              <span className="certification-badge-label">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
