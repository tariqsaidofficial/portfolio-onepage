export function Skills() {
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
