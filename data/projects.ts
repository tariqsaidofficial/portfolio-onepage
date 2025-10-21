// Central source of truth for all projects
// This file is used by both the Projects component and the Schema in layout.tsx

export interface Project {
  id: number
  name: string
  description: string
  category: "Full-Stack Development" | "IT Infrastructure" | "AV & Event Management" | "Media Production"
  techStack: string[]
  year: string
  dateCreated: string // ISO format for Schema.org
  role: string
  metrics: Record<string, string>
  image: string
  video?: string
  github?: string
  liveUrl?: string
  genre?: string // For Schema.org
}

export const projects: Project[] = [
  {
    id: 1,
    name: "NFC Manager",
    description: "Android application for secure NFC tag management with advanced encryption and user-friendly interface.",
    category: "Full-Stack Development",
    techStack: ["Android", "Kotlin", "NFC", "Encryption", "SQLite"],
    year: "2025",
    dateCreated: "2025-01-01",
    role: "Lead Developer",
    metrics: { users: "1K+", security: "AES-256" },
    image: "/projects/nfc-manager.webp",
    video: "/projects/nfcManager_PhoneGrid.mp4",
    github: "https://github.com/tariqsaidofficial/nfcManager",
    genre: "Mobile Application",
  },
  {
    id: 2,
    name: "DXBMark",
    description: "Co-founded and led development of comprehensive platform serving 3,000+ users with 98% uptime.",
    category: "Full-Stack Development",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    year: "2024",
    dateCreated: "2024-01-01",
    role: "Co-Founder & Lead Developer",
    metrics: { users: "3K+", uptime: "98%" },
    image: "/projects/dxbmark.webp",
    liveUrl: "https://dxbmark.com",
    genre: "Web Platform",
  },
  {
    id: 3,
    name: "Media Server-as-a-Service",
    description: "Built scalable streaming solution with 500+ movies & series (1953-2025). Featuring Plex integration and NAS storage. Get your free 90-day access!",
    category: "Media Production",
    techStack: ["Plex", "NAS Storage", "Streaming", "CDN", "MinIO"],
    year: "2025",
    dateCreated: "2025-01-01",
    role: "Infrastructure Architect",
    metrics: { content: "500+", years: "1953-2025", trial: "90 days" },
    image: "/projects/media-server.webp",
    liveUrl: "https://media.dxbmark.com",
    genre: "Media Infrastructure",
  },
  {
    id: 4,
    name: "Northern Estates",
    description: "Real-estate platform with 10,000+ users and 500+ property listings, featuring advanced search and filtering. **Hosted on our server**. Need hosting + free domain? Contact us!",
    category: "Full-Stack Development",
    techStack: ["WordPress", "Elementor", "PHP", "MySQL", "Apache"],
    year: "2024",
    dateCreated: "2024-01-01",
    role: "Full-Stack Developer",
    metrics: { users: "10K+", listings: "500+" },
    image: "/projects/northern-estates.webp",
    liveUrl: "https://northernestates.ae",
    genre: "Real Estate Platform",
  },
  {
    id: 5,
    name: "Travelify",
    description: "Integrated travel application combining hotels, e-commerce, and digital services in one seamless platform. **(Under Progress)**",
    category: "Full-Stack Development",
    techStack: ["Flutter", "Android", "iOS", "Django REST", "PostgreSQL"],
    year: "2025",
    dateCreated: "2025-01-01",
    role: "Full-Stack Developer",
    metrics: { bookings: "2K+", rating: "4.8/5" },
    image: "/projects/travelify.webp",
    github: "https://github.com/tariqsaidofficial/travelify",
    genre: "Mobile Application",
  },
  {
    id: 6,
    name: "Online Web Tools",
    description: "Get things done, quickly. Use any of our 1500+ web tools and get instant results.",
    category: "Full-Stack Development",
    techStack: ["Next.js", "React", "TypeScript", "API Integration", "SEO"],
    year: "2024",
    dateCreated: "2024-01-01",
    role: "Full-Stack Developer",
    metrics: { tools: "1500+", users: "Active" },
    image: "/projects/online-web-tools.webp",
    liveUrl: "https://tools.dxbmark.com",
    genre: "Web Application",
  },
  // AV & Event Management (Demo Project)
  {
    id: 7,
    name: "AV & Event Solutions",
    description: "Professional audiovisual systems and event management solutions. From corporate conferences to live streaming platforms with cutting-edge technology.",
    category: "AV & Event Management",
    techStack: ["Dante Audio", "NDI Video", "vMix", "OBS Studio", "Crestron Control", "QSC Audio"],
    year: "2024",
    dateCreated: "2024-06-01",
    role: "AV Systems Engineer",
    metrics: { events: "50+", attendees: "10K+", uptime: "99.9%" },
    image: "/placeholder.svg",
    genre: "Event Technology",
  },
  // IT Infrastructure (Demo Project)
  {
    id: 8,
    name: "IT Infrastructure Solutions",
    description: "Enterprise-grade IT infrastructure design and implementation. Network architecture, cloud automation, and data center management with industry-leading technologies.",
    category: "IT Infrastructure",
    techStack: ["Cisco", "VMware", "Kubernetes", "Terraform", "AWS", "Docker"],
    year: "2024",
    dateCreated: "2024-02-01",
    role: "Infrastructure Architect",
    metrics: { servers: "100+", uptime: "99.9%", automation: "Full" },
    image: "/placeholder.svg",
    genre: "Network Infrastructure",
  },
  // Media Production (Demo Project)
  {
    id: 9,
    name: "Media Production Services",
    description: "Professional video production and post-production services. From corporate videos to documentaries with advanced editing, color grading, and motion graphics.",
    category: "Media Production",
    techStack: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Cinema 4D", "Pro Tools"],
    year: "2024",
    dateCreated: "2024-04-01",
    role: "Video Producer & Editor",
    metrics: { projects: "100+", clients: "50+", resolution: "4K/8K" },
    image: "/placeholder.svg",
    genre: "Video Production",
  },
]

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "Full-Stack Development", name: "Full-Stack" },
  { id: "IT Infrastructure", name: "IT Infra" },
  { id: "AV & Event Management", name: "AV & Events" },
  { id: "Media Production", name: "Media & Film" },
]
