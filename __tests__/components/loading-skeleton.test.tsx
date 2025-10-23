import { render, screen } from '@testing-library/react'
import { LoadingSkeleton, SectionLoadingSkeleton } from '@/components/loading-skeleton'

describe('LoadingSkeleton Component', () => {
  it('renders with default props', () => {
    const { container } = render(<LoadingSkeleton />)
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument()
  })

  it('renders loading text', () => {
    render(<LoadingSkeleton />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('accepts custom height', () => {
    const { container } = render(<LoadingSkeleton height="h-64" />)
    expect(container.querySelector('.h-64')).toBeInTheDocument()
  })

  it('shows pulse animation by default', () => {
    const { container } = render(<LoadingSkeleton />)
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
  })

  it('hides pulse animation when showPulse is false', () => {
    const { container } = render(<LoadingSkeleton showPulse={false} />)
    const pulseElements = container.querySelectorAll('.animate-pulse')
    // Only the loading text should have pulse
    expect(pulseElements.length).toBe(1)
  })
})

describe('SectionLoadingSkeleton Component', () => {
  it('renders section skeleton', () => {
    const { container } = render(<SectionLoadingSkeleton />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders skeleton grid', () => {
    const { container } = render(<SectionLoadingSkeleton />)
    const gridItems = container.querySelectorAll('.h-64')
    expect(gridItems.length).toBe(3)
  })

  it('has animate-pulse class', () => {
    const { container } = render(<SectionLoadingSkeleton />)
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
  })
})
