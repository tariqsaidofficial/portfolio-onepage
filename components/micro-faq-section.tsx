interface FAQItem {
  question: string
  answer: string
}

interface MicroFAQSectionProps {
  title?: string
  faqs: FAQItem[]
  className?: string
  maxQuestions?: number
}

/**
 * MicroFAQSection Component - Embedded Q&A component for service pages
 * 
 * Features:
 * - Question-as-heading format for AI readability
 * - Limit to maximum 3 questions for focused content
 * - Clear question syntax validation
 * - Consistent styling with glass effect
 * - Proper semantic markup for accessibility
 * - Responsive design
 * 
 * Requirements:
 * - Maximum 3 questions per section
 * - Questions formatted as headings with direct answers
 * - Clear, searchable question structure
 * 
 * @component
 * @example
 * ```tsx
 * <MicroFAQSection 
 *   title="Frequently Asked Questions"
 *   faqs={[
 *     {
 *       question: "How long does a typical project take?",
 *       answer: "Project duration varies by complexity..."
 *     }
 *   ]}
 * />
 * ```
 */
export function MicroFAQSection({ 
  title = "Frequently Asked Questions",
  faqs, 
  className = "",
  maxQuestions = 3 
}: MicroFAQSectionProps) {
  // Validate and limit questions to maximum allowed
  const validatedFAQs = faqs.slice(0, maxQuestions)
  
  // Validate question format (should end with ?)
  const validateQuestion = (question: string): boolean => {
    return question.trim().endsWith('?') && question.trim().length > 5
  }

  if (validatedFAQs.length === 0) {
    return null
  }

  return (
    <section className={`mb-12 md:mb-20 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {validatedFAQs.map((faq, index) => {
          const isValidQuestion = validateQuestion(faq.question)
          
          if (!isValidQuestion) {
            console.warn(`FAQ question ${index + 1} does not follow proper question format:`, faq.question)
          }

          return (
            <div key={index} className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3" role="heading" aria-level={3}>
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )
        })}
      </div>
      
      {/* Warning if too many questions provided */}
      {faqs.length > maxQuestions && process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-center">
          <p className="text-sm text-yellow-600 dark:text-yellow-400">
            Warning: {faqs.length} questions provided, but only {maxQuestions} are displayed. 
            Consider reducing to {maxQuestions} questions for optimal GEO performance.
          </p>
        </div>
      )}
    </section>
  )
}

/**
 * FAQ validation utility
 */
export function validateFAQs(faqs: FAQItem[], maxQuestions: number = 3): {
  isValid: boolean
  errors: string[]
  warnings: string[]
} {
  const errors: string[] = []
  const warnings: string[] = []

  if (faqs.length === 0) {
    errors.push("At least one FAQ item is required")
  }

  if (faqs.length > maxQuestions) {
    warnings.push(`${faqs.length} questions provided, but only ${maxQuestions} will be displayed`)
  }

  faqs.forEach((faq, index) => {
    if (!faq.question.trim()) {
      errors.push(`FAQ ${index + 1}: Question cannot be empty`)
    }
    
    if (!faq.answer.trim()) {
      errors.push(`FAQ ${index + 1}: Answer cannot be empty`)
    }
    
    if (!faq.question.trim().endsWith('?')) {
      warnings.push(`FAQ ${index + 1}: Question should end with a question mark`)
    }
    
    if (faq.question.trim().length < 5) {
      warnings.push(`FAQ ${index + 1}: Question seems too short`)
    }
  })

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

// Export types and utilities
export type { FAQItem }