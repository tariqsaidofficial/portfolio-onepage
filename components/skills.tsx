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
      src: "https://cdn.simpleicons.org/apple/FFFFFF",
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
      width: 80,
      height: 80,
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
      width: 80,
      height: 80,
    },
    {
      src: "https://cdn.simpleicons.org/qnap/00A1E0",
      alt: "QNAP",
      title: "QNAP NAS",
      width: 80,
      height: 80,
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
      width: 80,
      height: 80,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bitwarden_logo.svg",
      alt: "Bitwarden",
      title: "Bitwarden",
      width: 80,
      height: 80,
    },
    {
      src: "https://i0.wp.com/ldap.com/wp-content/uploads/2018/04/ldapdotcom-transparent-background-without-text-768x768.png",
      alt: "LDAP",
      title: "LDAP",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/AdGuard.svg",
      alt: "AdGuard",
      title: "AdGuard",
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
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg",
      alt: "FastAPI",
      title: "FastAPI",
      width: 50,
      height: 50,
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
    {
      src: "https://cdn.simpleicons.org/redis/DC382D",
      alt: "Redis",
      title: "Redis",
    },
    {
      src: "https://cdn.simpleicons.org/sqlite/003B57",
      alt: "SQLite",
      title: "SQLite",
    },
    {
      src: "https://cdn.simpleicons.org/supabase/3FCF8E",
      alt: "Supabase",
      title: "Supabase",
    },
    {
      src: "https://cdn.simpleicons.org/minio/C72E49",
      alt: "MinIO",
      title: "MinIO",
    },
    
    // DevOps & Infrastructure
    {
      src: "https://cdn.worldvectorlogo.com/logos/devops-2.svg",
      alt: "DevOps",
      title: "DevOps",
      width: 80,
      height: 80,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      alt: "Git",
      title: "Git",
      width: 80,
      height: 80,
    },
    {
      src: "https://cdn.simpleicons.org/github/FFFFFF",
      alt: "GitHub",
      title: "GitHub",
    },
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
    {
      src: "https://icon.icepanel.io/Technology/svg/Swagger.svg",
      alt: "Swagger",
      title: "Swagger",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/OpenAPI_Specification_Logo_Pantone.svg",
      alt: "OpenAPI",
      title: "OpenAPI",
      width: 70,
      height: 70,
    },
    
    // Package Managers & Build Tools
    {
      src: "https://cdn.simpleicons.org/npm/CB3837",
      alt: "npm",
      title: "npm",
    },
    {
      src: "https://cdn.simpleicons.org/pnpm/F69220",
      alt: "pnpm",
      title: "pnpm",
    },
    {
      src: "https://cdn.simpleicons.org/yarn/2C8EBB",
      alt: "Yarn",
      title: "Yarn",
    },
    {
      src: "https://cdn.simpleicons.org/vite/646CFF",
      alt: "Vite",
      title: "Vite",
    },
    {
      src: "https://cdn.simpleicons.org/webpack/8DD6F9",
      alt: "Webpack",
      title: "Webpack",
    },
    
    // Cloud Platforms
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "AWS",
      title: "Amazon Web Services",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      alt: "Google Cloud",
      title: "Google Cloud Platform",
    },
    {
      src: "https://cdn.simpleicons.org/vercel/FFFFFF",
      alt: "Vercel",
      title: "Vercel",
    },
    {
      src: "https://cdn.simpleicons.org/netlify/00C7B7",
      alt: "Netlify",
      title: "Netlify",
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
      src: "https://cdn.simpleicons.org/xcode/147EFB",
      alt: "Xcode",
      title: "Xcode",
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
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Cinema_4D_Logo.svg",
      alt: "Cinema 4D",
      title: "Cinema 4D",
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
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Adobe_Media_Encoder_Icon.svg",
      alt: "Media Encoder",
      title: "Adobe Media Encoder",
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
      src: "https://upload.wikimedia.org/wikipedia/en/9/9f/2015_Final_Cut_Pro_Logo.png",
      alt: "Final Cut Pro",
      title: "Final Cut Pro",
    },
    {
      src: "https://cdn.simpleicons.org/obsstudio/FFFFFF",
      alt: "OBS Studio",
      title: "OBS Studio",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg",
      alt: "Audacity",
      title: "Audacity",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/HandBrake_Icon.png",
      alt: "HandBrake",
      title: "HandBrake",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/FFmpeg_Logo_new.svg",
      alt: "FFmpeg",
      title: "FFmpeg",
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
      width: 50,
      height: 36,
    },
    {
      src: "https://images.seeklogo.com/logo-png/46/2/network-device-interface-logo-png_seeklogo-460004.png",
      alt: "NDI",
      title: "NDI (NewTek)",
      width: 70,
      height: 70,
      className: "brightness-[3]",
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
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/GitHub_Copilot_logo.svg/1024px-GitHub_Copilot_logo.svg.png",
      alt: "GitHub Copilot",
      title: "GitHub Copilot",
      className: "brightness-[1.5]",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/640px-Perplexity_AI_logo.svg.png",
      alt: "Perplexity",
      title: "Perplexity AI",
    },
    
    // CMS & Platforms
    {
      src: "https://cdn.simpleicons.org/wordpress/21759B",
      alt: "WordPress",
      title: "WordPress",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      alt: "Shopify",
      title: "Shopify",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg",
      alt: "Wix",
      title: "Wix.com",
      className: "brightness-[1.3]",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Webflow_logo_2023.svg",
      alt: "Webflow",
      title: "Webflow",
      className: "brightness-[1.3]",
    },
    
    // Communication & Productivity
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      alt: "Slack",
      title: "Slack",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
      alt: "Google Meet",
      title: "Google Meet",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
      alt: "Zoom",
      title: "Zoom",
      width: 50,
      height: 50,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg",
      alt: "Trello",
      title: "Trello",
    },
    {
      src: "https://cdn.simpleicons.org/notion/FFFFFF",
      alt: "Notion",
      title: "Notion",
    },
    {
      src: "https://cdn.simpleicons.org/markdown/FFFFFF",
      alt: "Markdown",
      title: "Markdown",
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
        "Linux", "Ubuntu Server",
        "Proxmox VE", "VMware", "VirtualBox",
        "Grafana", "Prometheus", "Synology NAS",
        "Cisco", "pfSense", "UniFi",
        "WireGuard VPN", "Let's Encrypt", "Bitwarden", "AdGuard"
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
    <section id="skills" className="py-12 md:py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Skills & Technologies</h2>

        {/* Main Technology Stack */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4 md:mb-6 text-muted-foreground">Development & Creative Tools</h3>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={32}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a122c"
            ariaLabel="Technology stack"
          />
        </div>

        {/* IT & System Administration */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4 md:mb-6 text-muted-foreground">IT & System Administration</h3>
          <LogoLoop
            logos={itLogos}
            speed={50}
            direction="right"
            logoHeight={40}
            gap={32}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0a122c"
            ariaLabel="IT & System Administration"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass rounded-xl p-4 md:p-6 border border-border group cursor-default">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary group-hover:scale-105 transition-transform inline-block">{category.category}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2 md:px-3 py-0.5 md:py-1 bg-secondary/50 rounded-full text-xs md:text-sm border border-border hover:border-primary/50 hover:bg-secondary/70 transition-all duration-200 cursor-pointer">
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
