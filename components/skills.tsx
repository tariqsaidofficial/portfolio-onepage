"use client"

import { LogoLoop } from "./logo-loop"

export function Skills() {
  const techLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      title: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      title: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      title: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      title: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      alt: "Vue.js",
      title: "Vue.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      alt: "Django",
      title: "Django",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      title: "PostgreSQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      title: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker",
      title: "Docker",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      alt: "Nginx",
      title: "Nginx",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      alt: "Flutter",
      title: "Flutter",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      alt: "Android",
      title: "Android",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      alt: "Linux",
      title: "Linux",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      alt: "Photoshop",
      title: "Adobe Photoshop",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      alt: "Premiere Pro",
      title: "Adobe Premiere Pro",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      alt: "After Effects",
      title: "Adobe After Effects",
    },
  ]

  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "Dart", "PHP"],
    },
    {
      category: "Frameworks",
      skills: ["Django", "FastAPI", "Node.js", "Express", "Laravel", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "MinIO", "S3", "GCS"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "GitHub Actions", "Nginx", "Prometheus", "Grafana", "Postman", "Celery"],
    },
    {
      category: "AI/Data",
      skills: ["OpenAI", "LangChain", "Pinecone", "TensorFlow", "Pandas", "NumPy"],
    },
    {
      category: "Mobile",
      skills: ["Android Studio", "Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      category: "IT/AV Systems",
      skills: ["Windows/macOS/Linux", "Proxmox", "Cloudflare", "Home Assistant", "IoT", "IFTTT"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills & Technologies</h2>

        <div className="mb-16">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={56}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a122c"
            ariaLabel="Technology stack"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary/50 rounded-full text-sm border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
