import { ReactNode } from "react"

interface ServiceSectionProps {
  title: string
  children: ReactNode
  className?: string
  titleLevel?: "h2" | "h3"
  centered?: boolean
}

interface BulletListProps {
  items: string[]
  variant?: "primary" | "negative"
  className?: string
}

/**
 * ServiceSection Component - Standardized section component for service pages
 * 
 * Features:
 * - Consistent section formatting and spacing
 * - Proper heading hierarchy (h2/h3)
 * - Responsive typography and layout
 * - Accessibility attributes
 * - Flexible content layout
 * 
 * @component
 * @example
 * ```tsx
 * <ServiceSection title="When to choose this service">
 *   <BulletList items={["Item 1", "Item 2"]} />
 * </ServiceSection>
 * ```
 */
export function ServiceSection({ 
  title, 
  children, 
  className = "",
  titleLevel = "h2",
  centered = true 
}: ServiceSectionProps) {
  const TitleTag = titleLevel
  const titleClasses = titleLevel === "h2" 
    ? "text-3xl md:text-4xl font-bold mb-8 md:mb-12"
    : "text-2xl md:text-3xl font-bold mb-6 md:mb-8"

  return (
    <section className={`mb-12 md:mb-20 ${className}`}>
      <TitleTag className={`${titleClasses} ${centered ? 'text-center' : ''}`}>
        {title}
      </TitleTag>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  )
}

/**
 * BulletList Component - Formatted bullet point lists for technical details
 * 
 * Features:
 * - Consistent bullet point formatting
 * - Primary (green) and negative (red) variants
 * - Proper spacing and typography
 * - Responsive design
 * - Accessibility support
 * 
 * @component
 * @example
 * ```tsx
 * <BulletList 
 *   items={["Feature 1", "Feature 2"]} 
 *   variant="primary" 
 * />
 * <BulletList 
 *   items={["Not suitable for X", "Not suitable for Y"]} 
 *   variant="negative" 
 * />
 * ```
 */
export function BulletList({ 
  items, 
  variant = "primary",
  className = "" 
}: BulletListProps) {
  const bulletColor = variant === "negative" ? "bg-red-500" : "bg-primary"

  return (
    <ul className={`space-y-4 md:space-y-6 text-muted-foreground ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className={`w-2 h-2 ${bulletColor} rounded-full mt-2 flex-shrink-0`}></span>
          <span className="text-sm md:text-base lg:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  )
}

// BulletList is already exported above