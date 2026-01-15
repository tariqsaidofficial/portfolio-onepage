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

        {/* Payment Methods */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-xs md:text-sm font-bold text-primary">Payment Options</span>
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/payment/visa.webp" alt="VISA" title="VISA" className="h-8 w-auto" />
            <img src="/assets/payment/mastercard.webp" alt="MasterCard" title="MasterCard" className="h-8 w-auto" />
            <img src="/assets/payment/ziina.webp" alt="Ziina" title="Ziina" className="h-8 w-auto" />
            <span className="mx-3 text-primary font-bold text-lg">|</span>
            <img src="/assets/payment/Orange-Money.webp" alt="Orange Money" title="Orange Money" className="h-8 w-auto" />
            <img src="/assets/payment/instapay.webp" alt="InstaPay" title="InstaPay" className="h-8 w-auto" />
            <span className="mx-3 text-primary font-bold text-lg">|</span>
            <img src="/assets/payment/paypal.webp" alt="PayPal" title="PayPal" className="h-8 w-auto" />
            <img src="/assets/payment/bank-transfer.webp" alt="Bank Transfer" title="Bank Transfer" className="h-8 w-auto" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 text-xs">
          <Link 
            href="/privacy-policy" 
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
            <span className="mx-1 text-lg text-primary font-bold align-middle">•</span>
          <Link 
            href="/cookie-policy" 
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            Cookie Policy
          </Link>
            <span className="mx-1 text-lg text-primary font-bold align-middle">•</span>
          <Link 
            href="/partnership-policy" 
            className="text-muted-foreground/70 hover:text-primary transition-colors"
          >
            Partnership Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
