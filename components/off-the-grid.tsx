"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Gamepad2, Sparkles, ArrowRight, X, Theater, User, GraduationCap, BookOpen, Users as UsersIcon, Globe } from "lucide-react"
import Image from "next/image"

const interests = [
  {
    icon: Theater,
    title: "Theatrical Performance & Artistic Expression",
    description: "Acting has always been my bridge between technology and humanity. Years of stage work — from comedy to tragedy — taught me how presence, timing, and empathy shape every story we tell. Stanislavski's method remains my foundation, reminding me that authentic creation starts from truth, not imitation.",
    modalContent: {
      subtitle: "My Journey in Theatre",
      details: "My experience in theatre spans years of acting, directing, and mentoring others to bring emotion to life. I've performed in a variety of genres — comedy, tragedy, and drama — exploring the full spectrum of human experience. The stage has always been a mirror for understanding how people think, feel, and transform, and this deeply informs how I design, teach, and communicate today.",
      sections: [
        {
          icon: User,
          title: "My Approach",
          content: "My preferred methodology is Konstantin Stanislavski's Methodology, which focuses on the preparation of the actor, the building of the character, and the shaping of the role. This approach has taught me how to read people, construct emotion, and communicate authenticity — whether on stage or in digital design."
        },
        {
          icon: GraduationCap,
          title: "Training & Mentorship",
          content: "I've guided and trained young actors (2012–2017) through workshops, collaborative performances, and qualification programs for Theatre Studies Department, Faculty of Arts, Alexandria University and Higher Institute of Theatrical Arts – Egypt. Many of those I worked with have since become emerging talents in the performing arts scene."
        },
        {
          icon: BookOpen,
          title: "Classical Influences",
          content: "My artistic foundations draw on classical Greek tragedy, especially Aeschylus – The originator of artistic tragedy (The Oresteia, Prometheus Bound), Sophocles – Master of moral complexity and character depth (Oedipus Rex, Antigone), and Euripides – The analyst of human emotion (Medea). These playwrights taught me that tragedy is not about despair — it's about transformation."
        },
        {
          icon: UsersIcon,
          title: "Mythological Figures That Inspire Me",
          content: "Oedipus – The eternal seeker of truth and identity. Medea – The embodiment of passion and consequence. Heracles – The hero of strength and inner conflict."
        },
        {
          icon: Globe,
          title: "Workshops & Global Influences",
          content: "I've participated in advanced training workshops led by Evdokimos Tsolakidis, Greek actor, director, and founder of the Theatre of Changes, whose teaching deepened my understanding of emotional realism and artistic presence."
        }
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Constantin_Stanislavski.jpg/500px-Constantin_Stanislavski.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWFkNDM1NmUtNjA5MC00MTAwLTliZWUtNTBhYWMwY2ViN2EzXkEyXkFqcGc@._V1_.jpg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    }
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "I'm fascinated by environments that think. Experimenting with smart devices and automation systems teaches me how technology can quietly improve comfort, efficiency, and creativity. I see every connected home as a prototype for the future of human–machine interaction.",
    modalContent: {
      subtitle: "Building Intelligent Spaces",
      details: "From voice-controlled lighting to automated climate systems, I explore how technology can anticipate needs and create seamless living experiences. Every smart device is a lesson in user experience and system integration.",
      highlights: [
        "Voice-activated home control systems",
        "Energy-efficient automation",
        "IoT device integration",
        "Predictive environment adjustment"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    }
  },
  {
    icon: Gamepad2,
    title: "Video Games",
    description: "Games are more than entertainment to me — they're living laboratories for interaction design. I study how worlds, mechanics, and feedback loops engage people and make complex systems feel intuitive. It's a constant reminder that the best design is both invisible and deeply felt.",
    modalContent: {
      subtitle: "Interactive Design Lessons",
      details: "Gaming teaches me about user engagement, progressive complexity, and reward systems. I analyze how games guide players through complex mechanics without overwhelming them — principles that apply directly to software design.",
      highlights: [
        "User onboarding & tutorials",
        "Feedback loop design",
        "Progressive difficulty curves",
        "Immersive world-building"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    }
  }
]

export function OffTheGrid() {
  const [selectedInterest, setSelectedInterest] = useState<typeof interests[0] | null>(null)

  return (
    <section id="off-the-grid" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Beyond the Code</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Off the Grid
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-foreground max-w-3xl mx-auto leading-relaxed px-4">
            When I'm not designing or building systems, I'm usually exploring how technology shapes our lives — whether through smart homes that respond to us, or virtual worlds that challenge how we think, play, and connect.
          </p>
        </motion.div>

        {/* Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="glass border-border rounded-xl p-6 md:p-8 h-full cursor-pointer group"
                  onClick={() => setSelectedInterest(interest)}
                >
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center
                    w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-xl
                    bg-primary/10
                    border border-primary/20
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-300
                  `}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-foreground leading-relaxed mb-4 md:mb-6">
                    {interest.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-xs md:text-sm font-medium">Explore more</span>
                    <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center px-4"
        >
          <div className="glass border-border rounded-xl p-4 md:p-6 lg:p-8 inline-block">
            <p className="text-sm md:text-base lg:text-lg text-foreground italic max-w-2xl">
              "The best technology doesn't just work — it understands, adapts, and becomes an invisible part of how we live and create."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedInterest && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              onClick={() => setSelectedInterest(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
            >
              <div className="glass border-border rounded-3xl h-full overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 z-10 glass-strong border-b border-border/40 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {selectedInterest.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {selectedInterest.modalContent.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedInterest(null)}
                      className="p-2 rounded-full bg-card/50 hover:bg-card border border-border/40 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 lg:p-12">
                  {/* Details */}
                  <div className="mb-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedInterest.modalContent.details}
                    </p>
                  </div>

                  {/* Highlights or Sections */}
                  {selectedInterest.modalContent.highlights && (
                    <div className="mb-12">
                      <h4 className="text-xl font-bold text-foreground mb-4">Key Areas</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedInterest.modalContent.highlights.map((highlight: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/40"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-foreground">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedInterest.modalContent.sections && (
                    <div className="space-y-6">
                      {/* Top Row - My Approach & Workshops */}
                      <div className="grid lg:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="glass border-border rounded-xl p-6"
                        >
                          <div className="flex gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-bold text-foreground">My Approach</h5>
                              </div>
                              <p className="text-sm text-foreground leading-relaxed">
                                My preferred methodology is <span className="font-bold text-primary">Konstantin Stanislavski's Methodology</span>, which focuses on <span className="font-semibold text-foreground">the preparation of the actor</span>, <span className="font-semibold text-foreground">the building of the character</span>, and <span className="font-semibold text-foreground">the shaping of the role</span>. This approach has taught me how to <span className="text-primary">read people</span>, <span className="text-primary">construct emotion</span>, and <span className="text-primary">communicate authenticity</span>.
                              </p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
                                <Image
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Constantin_Stanislavski.jpg/500px-Constantin_Stanislavski.jpg"
                                  alt="Konstantin Stanislavski"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-xs text-muted-foreground text-center mt-2">Konstantin Stanislavski</p>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="glass border-border rounded-xl p-6"
                        >
                          <div className="flex gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                  <Globe className="w-5 h-5 text-primary" />
                                </div>
                                <h5 className="text-lg font-bold text-foreground">Workshops & Global Influences</h5>
                              </div>
                              <p className="text-sm text-foreground leading-relaxed">
                                I've participated in advanced training workshops led by <span className="font-bold text-primary">Evdokimos Tsolakidis</span>, Greek actor, director, and founder of the <span className="font-semibold text-foreground">Theatre of Changes</span>, whose teaching deepened my understanding of <span className="text-primary">emotional realism</span> and <span className="text-primary">artistic presence</span>.
                              </p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
                                <Image
                                  src="https://m.media-amazon.com/images/M/MV5BYWFkNDM1NmUtNjA5MC00MTAwLTliZWUtNTBhYWMwY2ViN2EzXkEyXkFqcGc@._V1_.jpg"
                                  alt="Evdokimos Tsolakidis"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-xs text-muted-foreground text-center mt-2">Evdokimos Tsolakidis</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Training & Mentorship */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass border-border rounded-xl p-6"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-xl font-bold text-foreground mb-2">Training & Mentorship</h5>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          I've guided and trained young actors <span className="font-semibold text-primary">(2012–2017)</span> through workshops, collaborative performances, and qualification programs for <span className="font-semibold text-primary">Theatre Studies Department, Faculty of Arts, Alexandria University</span> and <span className="font-semibold text-primary">Higher Institute of Theatrical Arts – Egypt</span>. Many of those I worked with have since become <span className="font-bold text-foreground">emerging talents</span> in the performing arts scene.
                        </p>
                      </motion.div>

                      {/* Classical Influences - Full Width */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass border-border rounded-xl p-6"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="text-xl font-bold text-foreground mb-2">Classical Influences</h5>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed mb-4">
                          My artistic foundations draw on classical Greek tragedy, especially:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-3">
                              <Image
                                src="https://www.periodpaper.com/cdn/shop/products/XEZ2_032_f883dcff-272c-43f2-a8f8-d90d484da0dc.jpg"
                                alt="Aeschylus"
                                fill
                                className="object-cover scale-[1.85] translate-y-5"
                              />
                            </div>
                            <h6 className="font-bold text-primary mb-2">Aeschylus</h6>
                            <p className="text-sm text-foreground">The originator of artistic tragedy</p>
                            <p className="text-xs text-muted-foreground mt-2 italic">The Oresteia, Prometheus Bound</p>
                          </div>
                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-3">
                              <Image
                                src="https://www.lookandlearn.com/history-images/preview/YYU/YYU0/YYU0225/YYU0225815_Portrait-Bust-of-Sophocles.jpg"
                                alt="Sophocles"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h6 className="font-bold text-primary mb-2">Sophocles</h6>
                            <p className="text-sm text-foreground">Master of moral complexity and character depth</p>
                            <p className="text-xs text-muted-foreground mt-2 italic">Oedipus Rex, Antigone</p>
                          </div>
                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-3">
                              <Image
                                src="https://cdn.thecollector.com/wp-content/uploads/2022/12/euripides-portrait.jpg"
                                alt="Euripides"
                                fill
                                className="object-cover scale-[1.85] translate-y-5"
                              />
                            </div>
                            <h6 className="font-bold text-primary mb-2">Euripides</h6>
                            <p className="text-sm text-foreground">The analyst of human emotion</p>
                            <p className="text-xs text-muted-foreground mt-2 italic">Medea</p>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed mt-4 mb-6">
                          These playwrights taught me that <span className="font-bold text-primary">tragedy is not about despair — it's about transformation</span>.
                        </p>
                        
                        {/* Mythological Figures - Integrated */}
                        <div className="border-t border-border/40 pt-6">
                          <h6 className="text-lg font-bold text-foreground mb-4">Mythological Figures That Inspire Me</h6>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                              <h6 className="font-bold text-primary mb-2">Oedipus</h6>
                              <p className="text-sm text-foreground">The eternal seeker of truth and identity</p>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                              <h6 className="font-bold text-primary mb-2">Medea</h6>
                              <p className="text-sm text-foreground">The embodiment of passion and consequence</p>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                              <h6 className="font-bold text-primary mb-2">Heracles</h6>
                              <p className="text-sm text-foreground">The hero of strength and inner conflict</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Image Grid - Only for non-theatre cards */}
                  {selectedInterest.modalContent.highlights && (
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedInterest.modalContent.images.map((image: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative aspect-square rounded-xl overflow-hidden border border-border/40 bg-card/30"
                          >
                            <Image
                              src={image}
                              alt={`${selectedInterest.title} ${idx + 1}`}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
