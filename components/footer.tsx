export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a122c] border-t border-border/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground italic mb-2 text-sm md:text-base">
          Code. Create. Deliver.
        </p>
        <p className="text-muted-foreground/70 text-xs md:text-sm">
          © {currentYear} Tariq Said. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
