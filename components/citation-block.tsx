import { ReactNode } from "react"

interface CitationBlockProps {
  children: ReactNode
  variant?: "definition" | "summary"
  className?: string
}

/**
 * CitationBlock Component - Formatted quotable content sections for AI extraction
 * 
 * Features:
 * - Quotable definition formatting with visual emphasis
 * - "In summary," statement formatting for AI identification
 * - Proper semantic markup for AI extraction
 * - Accessible design with proper contrast
 * - Responsive typography
 * 
 * @component
 * @example
 * ```tsx
 * <CitationBlock variant="definition">
 *   "Web development services encompass full-stack application development..."
 * </CitationBlock>
 * 
 * <CitationBlock variant="summary">
 *   "In summary, web development services provide comprehensive solutions..."
 * </CitationBlock>
 * ```
 */
export function CitationBlock({ 
  children, 
  variant = "definition",
  className = "" 
}: CitationBlockProps) {
  const baseClasses = "max-w-4xl mx-auto"
  const contentClasses = variant === "definition" 
    ? "text-lg md:text-xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6 italic"
    : "text-lg md:text-xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-6 italic"

  if (variant === "summary") {
    return (
      <section className={`mb-12 md:mb-20 ${className}`}>
        <div className={baseClasses}>
          <div className="p-8 glass rounded-2xl">
            <blockquote 
              className={contentClasses}
              role="img"
              aria-label="Citation summary"
            >
              {children}
            </blockquote>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={`${baseClasses} mb-8 ${className}`}>
      <blockquote 
        className={contentClasses}
        role="img"
        aria-label="Service definition"
      >
        {children}
      </blockquote>
    </div>
  )
}