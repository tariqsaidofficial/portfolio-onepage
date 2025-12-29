import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * Button Variants - Glassmorphism Design System
 * 
 * IMPORTANT: These styles are designed to work with DarkVeil Gold background (50% opacity + 12px blur)
 * 
 * Variants:
 * - default: Primary button with red background (#e11d48/90) + white text - HIGH CONTRAST
 * - outline: Glass button with transparent background (3%) + white text + subtle border
 * - destructive: Destructive actions (unchanged)
 * - secondary/ghost/link: Utility variants (unchanged)
 * 
 * DO NOT CHANGE without testing contrast against the animated background
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Primary Button: Red background (90%) + White text = High contrast
        default: 'bg-primary/90 backdrop-blur-[16px] border border-primary/50 shadow-[0_4px_16px_rgba(225,29,72,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-primary hover:border-primary hover:shadow-[0_8px_24px_rgba(225,29,72,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] text-white font-semibold',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        // Glass Button: Transparent (3%) + White text + Subtle border (15%)
        outline:
          'bg-white/[0.03] backdrop-blur-[16px] border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_8px_24px_rgba(225,29,72,0.15),inset_0_1px_0_rgba(255,255,255,0.3)] text-white font-semibold',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
