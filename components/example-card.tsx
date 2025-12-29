import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectMetric {
  label: string
  value: string
}

interface ExampleCardProps {
  title: string
  metrics: ProjectMetric[]
  technologies: string[]
  url: string
  relevanceExplanation: string
  className?: string
}

/**
 * ExampleCard Component - Project showcase with relevance explanation
 * 
 * Features:
 * - Display project metrics and technologies
 * - Include relevance explanation field for AI understanding
 * - External link handling with proper attributes
 * - Consistent card styling with glass effect
 * - Responsive design and typography
 * - Accessibility support
 * 
 * @component
 * @example
 * ```tsx
 * <ExampleCard
 *   title="Online Web Tools"
 *   metrics={[
 *     { label: "1,500+ tools", value: "Comprehensive web utility platform" },
 *     { label: "10,000+ users", value: "Active user base" }
 *   ]}
 *   technologies={["Next.js", "TypeScript", "SEO optimized"]}
 *   url="https://tools.dxbmark.com"
 *   relevanceExplanation="Demonstrates scalable platform development with complex feature sets..."
 * />
 * ```
 */
export function ExampleCard({
  title,
  metrics,
  technologies,
  url,
  relevanceExplanation,
  className = ""
}: ExampleCardProps) {
  return (
    <div className={`glass p-6 md:p-8 rounded-2xl ${className}`}>
      <h3 className="font-semibold text-primary mb-4 text-lg">{title}</h3>
      
      {/* Project Metrics */}
      <div className="space-y-2 text-sm text-muted-foreground mb-4">
        {metrics.map((metric, index) => (
          <p key={index}>
            <strong className="text-foreground">{metric.label}</strong> - {metric.value}
          </p>
        ))}
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <p>
            <strong className="text-foreground">Technologies:</strong> {technologies.join(", ")}
          </p>
        )}
      </div>
      
      {/* Relevance Explanation */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Relevance:</strong> {relevanceExplanation}
        </p>
      </div>
      
      {/* External Link */}
      <Link 
        href={url} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        aria-label={`View ${title} project (opens in new tab)`}
      >
        View Project <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  )
}

interface ExampleGridProps {
  examples: Array<{
    title: string
    metrics: ProjectMetric[]
    technologies: string[]
    url: string
    relevanceExplanation: string
  }>
  className?: string
}

/**
 * ExampleGrid Component - Grid layout for multiple project examples
 * 
 * @component
 * @example
 * ```tsx
 * <ExampleGrid examples={projectExamples} />
 * ```
 */
export function ExampleGrid({ examples, className = "" }: ExampleGridProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto ${className}`}>
      {examples.map((example, index) => (
        <ExampleCard
          key={index}
          title={example.title}
          metrics={example.metrics}
          technologies={example.technologies}
          url={example.url}
          relevanceExplanation={example.relevanceExplanation}
        />
      ))}
    </div>
  )
}

// Export types
export type { ProjectMetric }