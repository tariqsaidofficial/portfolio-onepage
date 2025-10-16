"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      avatar: "/professional-woman-avatar.png",
      username: "@sarahjohnson",
      feedback: "Tariq delivered exceptional technical excellence. His problem-solving skills are remarkable!",
    },
    {
      avatar: "/professional-man-avatar.png",
      username: "@michaelchen",
      feedback: "Working with Tariq on our event AV systems was transformative. Highly recommended!",
    },
    {
      avatar: "/professional-woman-avatar-2.png",
      username: "@emmawilliams",
      feedback: "The streaming infrastructure Tariq built is flawless. Unmatched expertise!",
    },
    {
      avatar: "/professional-man-avatar-2.png",
      username: "@davidbrown",
      feedback: "Incredible full-stack developer. Delivered our project ahead of schedule!",
    },
    {
      avatar: "/professional-woman-avatar-3.jpg",
      username: "@lisaanderson",
      feedback: "Tariq's DevOps skills saved us countless hours. True professional!",
    },
    {
      avatar: "/professional-man-avatar-3.jpg",
      username: "@jamessmith",
      feedback: "Best AV technician we've worked with. Made our event seamless!",
    },
    {
      avatar: "/professional-woman-avatar-4.jpg",
      username: "@rachelgreen",
      feedback: "Outstanding React developer. Clean code and great communication!",
    },
    {
      avatar: "/professional-man-avatar-4.jpg",
      username: "@tomwilson",
      feedback: "Tariq's media production skills are top-notch. Exceeded expectations!",
    },
  ]

  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3, 6)
  const row3 = testimonials.slice(6, 8)

  const TestimonialCard = ({ avatar, username, feedback }: { avatar: string; username: string; feedback: string }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass border border-border rounded-xl p-6 min-w-[320px] md:min-w-[380px] mx-3"
    >
      <div className="flex items-start gap-4">
        <img src={avatar || "/placeholder.svg"} alt={username} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <p className="text-primary font-semibold mb-2">{username}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{feedback}</p>
        </div>
      </div>
    </motion.div>
  )

  const MarqueeRow = ({ items, direction }: { items: typeof testimonials; direction: "left" | "right" }) => {
    const duplicatedItems = [...items, ...items, ...items]

    return (
      <div className="overflow-hidden py-4">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" ? [0, -33.33 + "%"] : [-33.33 + "%", 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          What People Say
        </motion.h2>

        <div className="space-y-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>
      </div>
    </section>
  )
}
