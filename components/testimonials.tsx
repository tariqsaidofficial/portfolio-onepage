"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      avatar: "/professional-woman-avatar-2.webp",
      username: "@sarahjohnson",
      feedback: "Tariq delivered exceptional technical excellence. His problem-solving skills are remarkable!",
    },
    {
      avatar: "/professional-man-avatar.webp",
      username: "@michaelchen",
      feedback: "Working with Tariq on our event AV systems was transformative. Highly recommended!",
    },
    {
      avatar: "/professional-woman-avatar-2.webp",
      username: "@emmawilliams",
      feedback: "The streaming infrastructure Tariq built is flawless. Unmatched expertise!",
    },
    {
      avatar: "/professional-man-avatar-2.webp",
      username: "@davidbrown",
      feedback: "Incredible full-stack developer. Delivered our project ahead of schedule!",
    },
    {
      avatar: "/professional-woman-avatar-2.webp",
      username: "@lisaanderson",
      feedback: "Tariq's DevOps skills saved us countless hours. True professional!",
    },
    {
      avatar: "/professional-man-avatar-2.webp",
      username: "@jamessmith",
      feedback: "Best AV technician we've worked with. Made our event seamless!",
    },
    {
      avatar: "/professional-woman-avatar-2.webp",
      username: "@rachelgreen",
      feedback: "Outstanding React developer. Clean code and great communication!",
    },
    {
      avatar: "/professional-man-avatar-2.webp",
      username: "@tomwilson",
      feedback: "Tariq's media production skills are top-notch. Exceeded expectations!",
    },
  ]

  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3, 6)
  const row3 = testimonials.slice(6, 8)

  const TestimonialCard = ({ avatar, username, feedback }: { avatar: string; username?: string; feedback: string }) => (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass border border-border rounded-lg md:rounded-xl p-4 md:p-6 min-w-[280px] md:min-w-[320px] lg:min-w-[380px] mx-2 md:mx-3 cursor-pointer"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <Image 
          src={avatar || "/placeholder.svg"} 
          alt={username || "User"} 
          width={32} 
          height={32} 
          className="rounded-full object-cover border-2 border-primary/20 md:w-10 md:h-10" 
          loading="lazy"
        />
        <div className="flex-1">
          <p className="text-primary font-semibold mb-1 md:mb-2 text-sm md:text-base">{username}</p>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feedback}</p>
        </div>
      </div>
    </motion.div>
  )

  const MarqueeRow = ({ items, direction }: { items: typeof testimonials; direction: "left" | "right" }) => {
    const duplicatedItems = [...items, ...items, ...items, ...items]

    return (
      <div className="overflow-hidden py-2 md:py-4 relative">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedItems.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.username}-${index}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12"
        >
          What People Say
        </motion.h2>

        <div className="space-y-2 md:space-y-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>
      </div>
    </section>
  )
}
