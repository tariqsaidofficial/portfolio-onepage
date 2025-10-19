"use client"

import { LogoLoop } from "./logo-loop"

export function Skills() {
  // IT & System Administration Icons (Separate Loop)
  const itLogos = [
    // Operating Systems
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
      alt: "Windows",
      title: "Windows",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
      alt: "Windows Server",
      title: "Windows Server",
    },
    {
      src: "https://cdn.simpleicons.org/apple/000000",
      alt: "macOS",
      title: "macOS",
    },
    {
      src: "https://cdn.simpleicons.org/linux/FCC624",
      alt: "Linux",
      title: "Linux",
    },
    {
      src: "https://cdn.simpleicons.org/ubuntu/E95420",
      alt: "Ubuntu Server",
      title: "Ubuntu Server",
    },
    
    // Virtualization
    {
      src: "https://cdn.simpleicons.org/proxmox/E57000",
      alt: "Proxmox",
      title: "Proxmox VE",
    },
    {
      src: "https://cdn.simpleicons.org/vmware/607078",
      alt: "VMware",
      title: "VMware",
    },
    {
      src: "https://cdn.simpleicons.org/virtualbox/183A61",
      alt: "VirtualBox",
      title: "VirtualBox",
    },
    
    // Monitoring
    {
      src: "https://cdn.simpleicons.org/grafana/F46800",
      alt: "Grafana",
      title: "Grafana",
    },
    {
      src: "https://cdn.simpleicons.org/prometheus/E6522C",
      alt: "Prometheus",
      title: "Prometheus",
    },
    
    // Storage (NAS)
    {
      src: "https://cdn.simpleicons.org/synology/B5B5B6",
      alt: "Synology",
      title: "Synology NAS",
    },
    {
      src: "https://cdn.simpleicons.org/qnap/00A1E0",
      alt: "QNAP",
      title: "QNAP NAS",
    },
    
    // Networking
    {
      src: "https://cdn.simpleicons.org/cisco/1BA0D7",
      alt: "Cisco",
      title: "Cisco",
    },
    {
      src: "https://cdn.simpleicons.org/mikrotik/293239",
      alt: "MikroTik",
      title: "MikroTik",
    },
    {
      src: "https://cdn.simpleicons.org/pfsense/212121",
      alt: "pfSense",
      title: "pfSense",
    },
    {
      src: "https://cdn.simpleicons.org/ubiquiti/0559C9",
      alt: "UniFi",
      title: "Ubiquiti UniFi",
    },
    
    // Security & VPN
    {
      src: "https://cdn.simpleicons.org/letsencrypt/003A70",
      alt: "Let's Encrypt",
      title: "Let's Encrypt",
    },
    {
      src: "https://cdn.simpleicons.org/wireguard/88171A",
      alt: "WireGuard",
      title: "WireGuard VPN",
    },
    {
      src: "https://cdn.simpleicons.org/openvpn/EA7E20",
      alt: "OpenVPN",
      title: "OpenVPN",
    },
    {
      src: "https://www.svgrepo.com/show/353542/certbot.svg",
      alt: "Certbot",
      title: "Certbot",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bitwarden_logo.svg",
      alt: "Bitwarden",
      title: "Bitwarden",
    },
    {
      src: "https://i0.wp.com/ldap.com/wp-content/uploads/2018/04/ldapdotcom-transparent-background-without-text-768x768.png",
      alt: "LDAP",
      title: "LDAP",
    },
  ]

  // Main Technology Stack Icons
  const techLogos = [
    // Programming Languages
    {
      src: "https://cdn.simpleicons.org/python/3776AB",
      alt: "Python",
      title: "Python",
    },
    {
      src: "https://cdn.simpleicons.org/javascript/F7DF1E",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      src: "https://cdn.simpleicons.org/typescript/3178C6",
      alt: "TypeScript",
      title: "TypeScript",
    },
    {
      src: "https://cdn.simpleicons.org/php/777BB4",
      alt: "PHP",
      title: "PHP",
    },
    
    // Frameworks & Libraries
    {
      src: "https://cdn.simpleicons.org/react/61DAFB",
      alt: "React",
      title: "React",
    },
    {
      src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      alt: "Next.js",
      title: "Next.js",
    },
    {
      src: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
      alt: "Vue.js",
      title: "Vue.js",
    },
    {
      src: "https://cdn.simpleicons.org/django/44B78B",
      alt: "Django",
      title: "Django",
    },
    {
      src: "https://cdn.simpleicons.org/nodedotjs/339933",
      alt: "Node.js",
      title: "Node.js",
    },
    {
      src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
    },
    
    // Databases
    {
      src: "https://cdn.simpleicons.org/postgresql/4169E1",
      alt: "PostgreSQL",
      title: "PostgreSQL",
    },
    {
      src: "https://cdn.simpleicons.org/mysql/4479A1",
      alt: "MySQL",
      title: "MySQL",
    },
    {
      src: "https://cdn.simpleicons.org/mongodb/47A248",
      alt: "MongoDB",
      title: "MongoDB",
    },
    
    // DevOps & Infrastructure
    {
      src: "https://cdn.simpleicons.org/docker/2496ED",
      alt: "Docker",
      title: "Docker",
    },
    {
      src: "https://cdn.simpleicons.org/nginx/009639",
      alt: "Nginx",
      title: "Nginx",
    },
    {
      src: "https://cdn.simpleicons.org/github/FFFFFF",
      alt: "GitHub",
      title: "GitHub",
    },
    {
      src: "https://cdn.simpleicons.org/cloudflare/F38020",
      alt: "Cloudflare",
      title: "Cloudflare",
    },
    {
      src: "https://cdn.simpleicons.org/tailscale/FFFFFF",
      alt: "Tailscale",
      title: "Tailscale",
    },
    {
      src: "https://cdn.simpleicons.org/linux/FCC624",
      alt: "Linux",
      title: "Linux",
    },
    
    // Mobile Development
    {
      src: "https://cdn.simpleicons.org/flutter/02569B",
      alt: "Flutter",
      title: "Flutter",
    },
    {
      src: "https://cdn.simpleicons.org/android/3DDC84",
      alt: "Android",
      title: "Android",
    },
    {
      src: "https://cdn.simpleicons.org/ios/FFFFFF",
      alt: "iOS",
      title: "iOS",
    },
    {
      src: "https://cdn.simpleicons.org/androidstudio/3DDC84",
      alt: "Android Studio",
      title: "Android Studio",
    },
    {
      src: "https://cdn.simpleicons.org/kotlin/7F52FF",
      alt: "Kotlin",
      title: "Kotlin",
    },
    {
      src: "https://cdn.simpleicons.org/dart/0175C2",
      alt: "Dart",
      title: "Dart",
    },
    {
      src: "https://cdn.simpleicons.org/swift/F05138",
      alt: "Swift",
      title: "Swift",
    },
    {
      src: "https://cdn.simpleicons.org/firebase/FFCA28",
      alt: "Firebase",
      title: "Firebase",
    },
    
    // Design & Creative Tools
    {
      src: "https://cdn.simpleicons.org/figma/F24E1E",
      alt: "Figma",
      title: "Figma",
    },
    {
      src: "https://cdn.simpleicons.org/canva/00C4CC",
      alt: "Canva",
      title: "Canva",
    },
    
    // Adobe Creative Suite
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg",
      alt: "Creative Cloud",
      title: "Adobe Creative Cloud",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      alt: "Photoshop",
      title: "Adobe Photoshop",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      alt: "Illustrator",
      title: "Adobe Illustrator",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
      alt: "InDesign",
      title: "Adobe InDesign",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg",
      alt: "Lightroom",
      title: "Adobe Lightroom",
    },
    
    // Video & Audio Production
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      alt: "Premiere Pro",
      title: "Adobe Premiere Pro",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
      alt: "After Effects",
      title: "Adobe After Effects",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Adobe_Audition_CC_icon_%282020%29.svg",
      alt: "Audition",
      title: "Adobe Audition",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
      alt: "DaVinci Resolve",
      title: "DaVinci Resolve",
    },
    {
      src: "https://cdn.simpleicons.org/obsstudio/FFFFFF",
      alt: "OBS Studio",
      title: "OBS Studio",
    },
    
    // AV Equipment
    {
      src: "https://cdn.simpleicons.org/blackmagicdesign/FFFFFF",
      alt: "ATEM",
      title: "Blackmagic ATEM",
    },
    {
      src: "https://wp.logos-download.com/wp-content/uploads/2024/05/Extron_Logo-3000x623.png",
      alt: "Extron",
      title: "Extron",
      width: 80,
    },
    {
      src: "https://images.seeklogo.com/logo-png/46/2/network-device-interface-logo-png_seeklogo-460004.png",
      alt: "NDI",
      title: "NDI (NewTek)",
    },
    
    
    // Development Tools
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      alt: "VS Code",
      title: "Visual Studio Code",
    },
    {
      src: "https://cursor.com/assets/images/logo.svg",
      alt: "Cursor",
      title: "Cursor AI",
    },
    {
      src: "https://exafunction.github.io/public/brand/windsurf-black-symbol.svg",
      alt: "Windsurf",
      title: "Windsurf (Codeium)",
    },
    
    // AI Tools
    {
      src: "https://cdn.simpleicons.org/openai/412991",
      alt: "ChatGPT",
      title: "ChatGPT",
    },
    {
      src: "https://cdn.simpleicons.org/anthropic/191919",
      alt: "Claude",
      title: "Claude AI",
    },
    {
      src: "https://cdn.simpleicons.org/googlegemini/8E75B2",
      alt: "Gemini",
      title: "Google Gemini",
    },
    
    // CMS
    {
      src: "https://cdn.simpleicons.org/wordpress/21759B",
      alt: "WordPress",
      title: "WordPress",
    },
  ]

  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "Dart", "C++"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Vue.js", "Django", "Node.js", "FastAPI", "Express", "Laravel", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "MinIO", "S3", "GCS"],
    },
    {
      category: "DevOps & Infrastructure",
      skills: ["Docker", "GitHub Actions", "Nginx", "Cloudflare", "Tailscale", "Twingate"],
    },
    {
      category: "IT & System Administration",
      skills: [
        "Windows Server", "Linux", "Ubuntu Server",
        "Proxmox VE", "VMware", "VirtualBox",
        "Grafana", "Prometheus", "Synology NAS",
        "Cisco", "pfSense", "UniFi",
        "WireGuard VPN", "Let's Encrypt", "Bitwarden"
      ],
    },
    {
      category: "Mobile Development",
      skills: ["Flutter", "Android", "iOS", "Kotlin", "Dart", "Swift", "Firebase", "React Native"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Canva", "Adobe XD", "Sketch"],
    },
    {
      category: "Adobe Creative Suite",
      skills: ["Photoshop", "Illustrator", "InDesign", "Lightroom", "Creative Cloud"],
    },
    {
      category: "Video & Audio Production",
      skills: ["Premiere Pro", "After Effects", "Audition", "DaVinci Resolve", "Final Cut Pro", "OBS Studio"],
    },
    {
      category: "AV & Event Systems",
      skills: ["ATEM Switchers", "Blackmagic Design", "Extron", "NDI", "Live Streaming", "Event Production"],
    },
    {
      category: "AI Tools",
      skills: ["ChatGPT", "Claude AI", "Gemini", "Cursor AI", "Windsurf", "OpenAI API", "LangChain"],
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "Cursor", "Windsurf", "Git", "GitHub", "Postman", "Docker Desktop"],
    },
    {
      category: "CMS & Web",
      skills: ["WordPress", "Elementor", "WooCommerce", "Webflow"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills & Technologies</h2>

        {/* Main Technology Stack */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-muted-foreground">Development & Creative Tools</h3>
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

        {/* IT & System Administration */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-6 text-muted-foreground">IT & System Administration</h3>
          <LogoLoop
            logos={itLogos}
            speed={50}
            direction="right"
            logoHeight={56}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a122c"
            ariaLabel="IT & System Administration"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass rounded-xl p-6 border border-border group cursor-default">
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:scale-105 transition-transform inline-block">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary/50 rounded-full text-sm border border-border hover:border-primary/50 hover:bg-secondary/70 transition-all duration-200 cursor-pointer">
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
