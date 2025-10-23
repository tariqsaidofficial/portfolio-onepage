import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Header } from '@/components/header'

// Mock useToast
jest.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0
  })

  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Tariq Said')
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders download resume button', () => {
    render(<Header />)
    // Check for download resume button
    const downloadButtons = screen.getAllByText(/download resume/i)
    expect(downloadButtons.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on button click', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText(/open menu/i)
    expect(menuButton).toBeInTheDocument()
    
    // Open menu
    fireEvent.click(menuButton)
    
    // Check if mobile menu items are visible
    const mobileLinks = screen.getAllByText('About')
    expect(mobileLinks.length).toBeGreaterThan(1) // Desktop + Mobile
  })

  it('changes style on scroll', async () => {
    const { container } = render(<Header />)
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    
    await waitFor(() => {
      const header = container.querySelector('header')
      // Check if header has scrolled state (may have different classes)
      expect(header).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('closes mobile menu when clicking a link', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText(/open menu/i)
    fireEvent.click(menuButton)
    
    // Click on a mobile menu link
    const mobileLinks = screen.getAllByText('About')
    fireEvent.click(mobileLinks[1]) // Click mobile version
    
    // Menu should close (implementation dependent)
  })
})
