import { render, screen, waitFor } from '@testing-library/react'
import { RotatingText } from '@/components/rotating-text'

describe('RotatingText Component', () => {
  const mockTexts = ['Developer', 'Designer', 'Creator']

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  describe('Slide Variant', () => {
    it('renders the first text initially', () => {
      render(<RotatingText texts={mockTexts} variant="slide" />)
      expect(screen.getByText('Developer')).toBeInTheDocument()
    })

    it('rotates through texts with slide animation', async () => {
      render(<RotatingText texts={mockTexts} variant="slide" interval={1000} />)
      
      expect(screen.getByText('Developer')).toBeInTheDocument()
      
      jest.advanceTimersByTime(1000)
      await waitFor(() => {
        expect(screen.getByText('Designer')).toBeInTheDocument()
      })
    })
  })

  describe('Flip Variant', () => {
    it('renders with flip animation', () => {
      render(<RotatingText texts={mockTexts} variant="flip" />)
      expect(screen.getByText('Developer')).toBeInTheDocument()
    })
  })

  describe('Scale Variant', () => {
    it('renders with scale animation', () => {
      render(<RotatingText texts={mockTexts} variant="scale" />)
      expect(screen.getByText('Developer')).toBeInTheDocument()
    })
  })

  describe('Typewriter Variant', () => {
    it('renders typewriter effect', () => {
      render(<RotatingText texts={mockTexts} variant="typewriter" />)
      // Initially empty or first character
      const element = screen.getByText(/\|/)
      expect(element).toBeInTheDocument()
    })

    it('types out text character by character', async () => {
      render(<RotatingText texts={['Hello']} variant="typewriter" interval={1000} />)
      
      // Advance timers to simulate typing
      jest.advanceTimersByTime(500)
      await waitFor(() => {
        const text = screen.getByText(/H/)
        expect(text).toBeInTheDocument()
      })
    })
  })

  describe('Props', () => {
    it('accepts custom className', () => {
      const { container } = render(
        <RotatingText texts={mockTexts} className="custom-class" />
      )
      expect(container.querySelector('.custom-class')).toBeInTheDocument()
    })

    it('uses default interval when not provided', () => {
      render(<RotatingText texts={mockTexts} />)
      expect(screen.getByText('Developer')).toBeInTheDocument()
    })

    it('handles empty texts array gracefully', () => {
      render(<RotatingText texts={[]} />)
      // Should not crash
    })
  })
})
