# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Common Changelog](https://common-changelog.org/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.2.0] - 2025-10-23

### Added

- Theme toggle button component with smooth animations (visual only, ready for full implementation)
- Multi-platform share button with support for WhatsApp, LinkedIn, Twitter, Facebook, Email, and Copy Link
- Calendly integration component for direct meeting booking
- Loading skeleton component for improved user experience
- Jest testing framework setup with component tests
- ESLint configuration for better code quality
- 11 comprehensive documentation files covering components, performance, and image optimization
- Image metadata utilities for better asset management
- Blur placeholder generation scripts
- WebP conversion optimization scripts
- "Coming Soon" tooltip on theme toggle button

### Changed

- Repositioned share button above WhatsApp with consistent 56px spacing between floating action buttons
- Optimized Calendly popup background color to #2a4173 for better visibility
- Enhanced floating action buttons layout (Share, WhatsApp, Back to Top)
- Updated all floating buttons with Framer Motion animations for smoother interactions

### Removed

- Dark overlay from theme toggle button for cleaner appearance
- Demo pages that were no longer needed (curved-text, robot, rotating-text)
- Unused rotating text variant components (flip, slide-scale, typewriter)

### Fixed

- Improved component test coverage
- Enhanced code quality with ESLint rules

## [6.1.0] - 2025-10-22

### Added

- Dynamic Android APK download functionality via GitHub API
- Smart Contact Form with Engagement Layer
- Wikidata and Wikimedia Commons integration
- Google Tag Manager (GTM-58VTPGXL) integration
- Google Consent Mode v2 for GDPR compliance
- JSON-LD structured data for Google Knowledge Panel
- Privacy Policy checkbox to contact form

### Changed

- Simplified GitHub Actions workflow
- Migrated to client-side GitHub API calls
- Optimized Cloudflare deployment process
- Redesigned Projects section with modern layout
- Enhanced animations and transitions throughout the site
- Improved error pages design
- Updated Header and Hero section with better spacing
- Changed "Resume" text to English for consistency
- Updated robots.txt according to Google Search Central guidelines
- Updated Privacy Policy with comprehensive details

### Fixed

- Next.js 15.2.4 static export build error
- Optimized image loading and performance
- Improved form validation and error handling

### Security

- Implemented Cloudflare Turnstile for form security

## [6.0.0] - 2025-01-19

### Added

- 56+ technology icons with categorization:
  - IT & System Administration (Grafana, Prometheus, Proxmox)
  - Security (OpenSource): Let's Encrypt, WireGuard, OpenVPN, pfSense, Fail2Ban
  - Mobile Development: iOS, Kotlin, Dart, Swift, Firebase
  - AV Equipment: ATEM, Extron, NDI
  - AI Tools: ChatGPT, Claude, Gemini, Cursor, Windsurf
- Primary color filter overlay (#e11d48) for brand consistency across all icons
- 3D Holographic ProfileCard with DarkNavy+Gold+Red theme
- Curved text marquee component with glassmorphism effects
- Floating WhatsApp & Back to Top buttons
- Projects demo page with enhanced UI
- Dynamic auto-reply messages based on contact form category
- File upload support for CV/Resume in contact form
- Professional email templates with CDN images
- WhatsApp integration in contact info
- Global error handling system
- Security headers configuration

### Changed

- Converted all PNG images to WebP format
- Optimized media-server image: 6.2MB → 534KB (91% reduction)
- Total image size reduction: 8.4MB → 793KB (90% reduction)
- Improved animated background with `pointer-events-none`
- Enhanced glassmorphism scrollbar design
- Updated icon sources for better reliability
- Logo loop with primary color overlay

### Fixed

- Dark icons display issues (iOS, OBS, ATEM, GitHub, Tailscale)
- Blocked access to sensitive files (index.txt)

### Security

- Implemented Cloudflare Turnstile for spam protection
- Removed test keys and fallbacks

## [5.2.0] - 2024-12-XX

### Added

- Cloudflare Turnstile integration

### Fixed

- Email delivery issues
- Form submission error handling

## [5.1.0] - 2024-11-XX

### Added

- File upload support in contact form
- CV/Resume attachment capability

## [5.0.0] - 2024-10-XX

### Added

- Dynamic contact form with category selection
- Real-time form validation
- Enhanced user feedback

## [4.0.0] - 2024-09-XX

### Added

- Enhanced email templates with modern design
- Admin notification email with card-based layout
- User confirmation email with timeline
- Responsive table-based email layout

### Changed

- Improved email compatibility across clients (Gmail, Outlook, Apple Mail)
- Updated email styling with inline CSS

---

## Release Notes

### Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

### Links

- [Live Demo](https://portfolio.dxbmark.com/)
- [GitHub Repository](https://github.com/tariqsaidofficial/portfolio-onepage)
- [Issue Tracker](https://github.com/tariqsaidofficial/portfolio-onepage/issues)

[6.2.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v6.1.0...v6.2.0
[6.1.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v5.2.0...v6.0.0
[5.2.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v5.1.0...v5.2.0
[5.1.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/tariqsaidofficial/portfolio-onepage/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/tariqsaidofficial/portfolio-onepage/releases/tag/v4.0.0
