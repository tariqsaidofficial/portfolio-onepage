import Link from "next/link"
import packageJson from "@/package.json"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const version = packageJson.version

  return (
    <footer className="bg-[#0a122c] border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Version Badge - Dynamic */}
        <div className="flex justify-center mb-4">
          <div className="v-badge">
            v{version}
          </div>
        </div>
        
        <p className="text-muted-foreground italic mb-2 text-sm md:text-base">
          Code. Create. Deliver.
        </p>
        <p className="text-muted-foreground/70 text-xs md:text-sm mb-2">
          © {currentYear} Tariq Said. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 text-xs">
          <Link 
            href="/privacy-policy" 
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
