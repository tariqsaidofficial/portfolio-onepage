# Design Document

## Overview

This design outlines the enhancement of the existing Next.js-based portfolio website to optimize content for Generative Engine Optimization (GEO). The solution focuses on making content more AI-friendly while maintaining professional presentation and user experience. The approach involves enhancing the existing web development services page and creating four new service pages with consistent, citation-friendly structure.

## Architecture

### Content Structure Pattern

Based on GEO research, each service page will follow this proven AI-friendly structure:

1. **Citation-Friendly Definition** (50-80 words) - Quotable opening statement
2. **Service Description** - What the service encompasses
3. **When to Choose** - Positive criteria for service fit
4. **When NOT to Choose** - Negative criteria (3 specific exclusions)
5. **Deliverables** - What clients receive, including final output format
6. **Timeline** - Visual cards plus text summary explaining workflow
7. **Pricing** - Range cards plus factors affecting pricing
8. **Examples** - Project showcases with relevance explanations
9. **Micro-FAQ** - 3 embedded questions with direct answers
10. **Citation Summary** - "In summary," statement for AI extraction

### Technology Stack

- **Framework**: Next.js 14+ (existing)
- **Styling**: Tailwind CSS with existing design system
- **Components**: Reuse existing UI components (Button, Card, etc.)
- **SEO**: Enhanced structured data markup
- **Content Management**: Static content with TypeScript for type safety

## Components and Interfaces

### Page Component Structure

```typescript
interface ServicePageProps {
  metadata: ServiceMetadata
  hero: HeroSection
  content: ServiceContent
  examples: ProjectExample[]
  faq: MicroFAQ[]
}

interface ServiceMetadata {
  title: string
  description: string
  keywords: string[]
  structuredData: ServiceStructuredData
}

interface ServiceContent {
  definition: string // Citation-friendly opening
  description: string
  whenToChoose: string[]
  whenNotToChoose: string[] // New requirement
  deliverables: Deliverable[]
  finalOutputFormat: string // New requirement
  timeline: TimelinePhase[]
  timelineWorkflow: string // New requirement
  pricing: PricingTier[]
  pricingFactors: string[] // New requirement
}

interface ProjectExample {
  title: string
  description: string
  metrics: string[]
  technologies: string[]
  url: string
  relevanceExplanation: string // New requirement
}

interface MicroFAQ {
  question: string
  answer: string
}
```

### Reusable Components

1. **ServicePageLayout** - Consistent layout wrapper
2. **CitationBlock** - Formatted quotable content sections
3. **ServiceSection** - Standardized section component
4. **ExampleCard** - Project showcase with relevance explanation
5. **MicroFAQSection** - Embedded Q&A component
6. **PricingFactors** - Bullet-pointed pricing influences

## Data Models

### Service Page Content Model

```typescript
type ServiceType = 'web-development' | 'av-systems' | 'devops' | 'about' | 'faq'

interface ServicePageData {
  id: ServiceType
  slug: string
  metadata: ServiceMetadata
  content: ServiceContent
  examples: ProjectExample[]
  microFAQ: MicroFAQ[]
  citationSummary: string
}
```

### FAQ Page Model

```typescript
interface FAQPageData {
  sections: FAQSection[]
}

interface FAQSection {
  title: string
  questions: DetailedFAQ[]
}

interface DetailedFAQ {
  question: string // Used as heading
  answer: string // Direct answer immediately after
  category: 'services' | 'process' | 'partnerships' | 'geographic'
}
```

## Correctness Properties

Let me analyze the acceptance criteria for testability using the prework tool:
*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

After analyzing the acceptance criteria, several properties emerge that ensure consistent GEO optimization across all service pages:

**Property 1: Example relevance consistency**
*For any* project example displayed on service pages, that example should include an explicit relevance explanation connecting it to specific use cases or capabilities
**Validates: Requirements 1.6, 2.5**

**Property 2: Micro-FAQ constraint compliance**
*For any* service page displaying a micro-FAQ section, the section should contain exactly 3 questions or fewer
**Validates: Requirements 6.1**

**Property 3: Question formatting consistency**
*For any* FAQ question displayed, the question should use clear, searchable question structure with proper question syntax
**Validates: Requirements 6.5**

**Property 4: Citation-friendly definition presence**
*For any* service page, the page should include a one-sentence definition at the top that serves as a quotable summary
**Validates: Requirements 7.1**

**Property 5: Summary format consistency**
*For any* summary section provided on service pages, the summary should start with "In summary," for easy AI identification and extraction
**Validates: Requirements 7.2**

**Property 6: Technical detail formatting**
*For any* technical details section, the content should use bullet points and clear formatting for AI readability
**Validates: Requirements 7.3**

**Property 7: Example relevance completeness**
*For any* example referenced on service pages, the example should include an explicit relevance statement explaining its connection to the service
**Validates: Requirements 7.4**

**Property 8: Service boundary completeness**
*For any* service page, the page should provide both clear positive criteria (when to choose) and negative criteria (when not to choose) sections
**Validates: Requirements 7.5**

**Property 9: Design pattern consistency**
*For any* new service page created, the page should follow the established design patterns and structural layout from the web development page
**Validates: Requirements 8.1**

**Property 10: Section ordering consistency**
*For any* service page content, the page should maintain consistent section ordering and formatting patterns across all service pages
**Validates: Requirements 8.2**

**Property 11: Component system adherence**
*For any* styling applied to service pages, the implementation should use existing UI components and design system elements rather than custom implementations
**Validates: Requirements 8.3**

**Property 12: Navigation integration consistency**
*For any* service page implemented, the page should integrate with existing header and footer components for consistent navigation
**Validates: Requirements 8.4**

**Property 13: SEO metadata completeness**
*For any* service page configured, the page should include proper SEO metadata and structured data markup for search engine optimization
**Validates: Requirements 8.5**

**Property 14: FAQ formatting pattern**
*For any* FAQ page content, questions should be used as headings with immediate direct answers following the question format
**Validates: Requirements 5.1**

## Error Handling

### Content Validation

1. **Missing Required Sections**: Validate that all service pages include required sections (definition, when to choose, when not to choose, deliverables, etc.)
2. **Formatting Compliance**: Check that content follows GEO-friendly formatting (bullet points, clear headings, citation-friendly summaries)
3. **Link Validation**: Ensure all external project links are functional and accessible
4. **Structured Data Validation**: Verify that structured data markup is valid and complete

### Fallback Strategies

1. **Content Fallbacks**: Provide default content templates if specific sections are missing
2. **Image Fallbacks**: Use placeholder images if project screenshots are unavailable
3. **Graceful Degradation**: Ensure pages function properly even if optional enhancements fail to load

### Monitoring and Maintenance

1. **Content Freshness**: Regular review of content accuracy and relevance
2. **Link Health**: Automated checking of external project links
3. **Performance Monitoring**: Track page load times and Core Web Vitals
4. **AI Citation Tracking**: Monitor how often content gets cited by AI engines

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific functionality with property-based tests for universal correctness guarantees:

**Unit Tests** focus on:
- Specific content validation (checking for required sections, proper formatting)
- Component integration (header/footer consistency, navigation functionality)
- SEO metadata presence and accuracy
- Structured data validation
- Link functionality and accessibility

**Property-Based Tests** focus on:
- Universal content patterns across all service pages
- Consistency of GEO optimization elements
- Formatting compliance across different content types
- Citation-friendly structure validation

### Property-Based Testing Configuration

Using **Jest** with **fast-check** library for property-based testing:
- Minimum 100 iterations per property test
- Each test tagged with: **Feature: website-content-geo-enhancement, Property {number}: {property_text}**
- Tests validate universal properties across all service page variations
- Generators create diverse content scenarios to test consistency

### Testing Implementation

**Content Structure Tests**:
- Validate that all service pages follow the 10-section structure
- Check for proper heading hierarchy and semantic markup
- Verify citation-friendly formatting patterns

**GEO Optimization Tests**:
- Confirm presence of quotable definition sentences
- Validate "In summary," statement formatting
- Check bullet point usage for technical details
- Verify relevance explanations for all examples

**Consistency Tests**:
- Ensure design pattern adherence across pages
- Validate component reuse and styling consistency
- Check navigation integration uniformity

**Integration Tests**:
- Test complete page rendering with all sections
- Validate structured data generation
- Check responsive design across device sizes
- Verify accessibility compliance

The testing approach ensures that both specific requirements are met (unit tests) and universal GEO principles are maintained across all content (property tests), providing comprehensive coverage for AI-friendly content optimization.