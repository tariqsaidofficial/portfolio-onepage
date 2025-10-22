"use client"

import { ProfileCard } from "./profile-card"

export function About() {
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

            {/* Expertise Badges */}
            <div className="flex flex-wrap gap-2 pt-4 items-center">
              <span className="text-sm text-primary/90">Certification 1</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-sm text-primary/90">Certification 2</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-sm text-primary/90">Certification 3</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-sm text-primary/90">Certification 4</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-sm text-primary/90">Certification 5</span>
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
      </div>
    </section>
  )
}
