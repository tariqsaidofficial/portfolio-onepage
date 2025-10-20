import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a122c] border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground italic mb-2 text-sm md:text-base">
          Code. Create. Deliver.
        </p>
        <p className="text-muted-foreground/70 text-xs md:text-sm mb-2">
          © {currentYear} Tariq Said. All rights reserved.
        </p>
        <p className="text-muted-foreground/70 text-xs mb-3">
          Official portrait available on{" "}
          <a 
            href="https://commons.wikimedia.org/wiki/File:Portrait_of_Tariq_Said.jpg" 
            rel="nofollow"
            target="_blank"
            className="text-primary/80 hover:text-primary transition-colors underline"
          >
            Wikimedia Commons
          </a>.
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
