<div align="center">

# 🌐 OnePage — Modern Portfolio

<img src="public/assets/TariqSaid-logo-dark.png" alt="Tariq Said Logo" width="500">

<br>

**A blazing-fast, SEO-optimized personal portfolio built with Next.js 15**

Built with performance in mind • Optimized for Google PageSpeed • Production-ready

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare_Pages-orange?style=for-the-badge&logo=cloudflare)](https://portfolio.dxbmark.com/)
[![Performance](https://img.shields.io/badge/PageSpeed-90%2B-success?style=for-the-badge&logo=lighthouse)](https://pagespeed.web.dev/)
[![Built with Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

[Live Demo](https://portfolio.dxbmark.com/) • [Features](#-features) • [Performance](#-performance-metrics) • [Getting Started](#-getting-started)

</div>

---

## 🪄 Overview

A production-ready, high-performance portfolio template featuring:
- ⚡ **90% image size reduction** through WebP optimization (8.4MB → 793KB)
- 🚀 **Sub-3s LCP** (Largest Contentful Paint)
- 🎨 **Modern animations** with Framer Motion & GSAP
- 📧 **Integrated contact form** with email notifications
- 🔍 **Complete SEO setup** with structured data
- 📱 **Fully responsive** design for all devices
- 🎯 **56+ technology icons** with primary color overlay
- 🔐 **Cloudflare Turnstile** security integration
- ✨ **NEW: Engagement Layer** - Smart contact form & live GitHub integration ([Demo](http://localhost:3000/engagement-demo))

---

## 🚀 Features

### 🎯 Core Features
- ⚡ **Next.js 15** with App Router and React Server Components
- 🎨 **Tailwind CSS 4** with custom design system
- 🧩 **ShadCN UI** components for consistent design
- 🎭 **Framer Motion** for smooth animations
- 📧 **Contact Form** with Resend API integration
- 🌐 **Cloudflare Pages Functions** for serverless email handling

### 🚀 Performance Optimizations
- 📦 **Dynamic Imports** - Lazy loading for heavy components
- 🖼️ **WebP Images** - 90% size reduction (8.4MB → 793KB)
- 🔤 **Font Optimization** - `display: swap` with fallbacks
- ⚡ **Code Splitting** - Optimized bundle sizes
- 🎯 **Priority Loading** - Critical resources loaded first
- 🎨 **CSS Filter Overlay** - Primary color branding for all icons

### 🔍 SEO & Metadata
- 📊 **Structured Data** - JSON-LD for rich results
- 🏷️ **Complete Meta Tags** - Open Graph, Twitter Cards
- 🗺️ **Sitemap & Robots.txt** - Automated generation
- 🔗 **Canonical URLs** - Prevent duplicate content
- 📱 **Social Media Integration** - Optimized sharing

### 🎨 Design Features
- 🌈 **Custom Color Palette** - DarkNavy + Rose Red theme
- ✨ **Smooth Animations** - Scroll-triggered effects with Framer Motion
- 🎭 **Interactive Components** - Hover states and transitions
- 📱 **Mobile-First** - Responsive on all devices
- 🌙 **Glass Morphism** - Modern UI effects with backdrop blur
- 🎨 **3D Holographic Card** - Interactive profile card with tilt effects
- 🎪 **Curved Text Marquee** - Infinite scrolling text animation

---

## 💫 Live Deployment

**Production:** [https://portfolio.dxbmark.com/](https://portfolio.dxbmark.com/)

**Status:** ✅ Active & auto-deployed via GitHub Actions

**Performance:** 🚀 Optimized for speed and SEO

---

## 🧰 Tech Stack

| Category | Tools |
|-----------|--------|
| **Framework** | Next.js 15 (App Router, RSC) |
| **Styling** | Tailwind CSS 4 + ShadCN UI |
| **Animations** | Framer Motion + GSAP |
| **Icons** | Lucide React + Simple Icons (56+) |
| **Email** | Resend API + Nodemailer |
| **Deployment** | Cloudflare Pages + GitHub Actions |
| **Forms** | React Hook Form + Zod |
| **Security** | Cloudflare Turnstile |
| **Analytics** | Vercel Analytics |
| **Version Control** | Git & GitHub |

---

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #e11d48        /* Rose Red - Main accent */
--primary-dark: #be123c   /* Darker Rose - Hover states */

/* Background Colors */
--background: #0a122c     /* Deep Navy - Main background */
--background-alt: #0f172a /* Slate - Secondary background */
--background-light: #1e293b /* Lighter Slate - Cards */

/* Neutral Colors */
--foreground: #f8fafc     /* Almost White - Text */
--muted: #94a3b8          /* Blue Gray - Muted text */
--muted-dark: #64748b     /* Darker Gray - Secondary text */
--border: #334155         /* Slate Gray - Borders */

/* Accent Colors */
--accent-light: #f1f5f9   /* Light Gray - Backgrounds */
--accent-gradient-start: #f8fafc
--accent-gradient-end: #f1f5f9
```

### Color Usage Examples
- **Primary (#e11d48)**: Buttons, links, highlights, CTAs
- **Background (#0a122c)**: Main page background, dark sections
- **Foreground (#f8fafc)**: Main text, headings
- **Muted (#94a3b8)**: Secondary text, descriptions
- **Border (#334155)**: Card borders, dividers

---

## ⚡ Performance Metrics

### 📊 PageSpeed Insights Results

![PageSpeed Insights](./public/assets/Screenshot-PageSpeed.png)

```text
🎯 Performance Score: 90+
⚡ LCP (Largest Contentful Paint): < 3s
🎨 CLS (Cumulative Layout Shift): < 0.1
⏱️ FID (First Input Delay): < 100ms
📦 Total Bundle Size: ~250KB (images)
🧰 Best Practices: 96/100
```

### 🚀 Optimization Techniques Applied

#### 1. **Image Optimization**
- ✅ Converted all project images to WebP format
- ✅ Reduced total image size by **90%** (8.4MB → 793KB)
- ✅ media-server.png: 6.2MB → 534KB (91% reduction)
- ✅ Implemented lazy loading for below-the-fold images
- ✅ Used `next/image` for automatic optimization

#### 2. **Code Splitting**
- ✅ Dynamic imports for heavy components
- ✅ Lazy loading for Testimonials, Projects, Services
- ✅ Reduced initial JavaScript bundle size by **42%**

#### 3. **Font Optimization**
- ✅ `display: swap` to prevent font blocking
- ✅ Preloaded critical fonts
- ✅ System font fallbacks for better CLS
- ✅ Removed unused font weights

#### 4. **SEO Optimization**
- ✅ Complete structured data (JSON-LD)
- ✅ Optimized meta tags for all platforms
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration

---

## ✨ Animations & Interactions

### 🎭 Framer Motion Animations

This portfolio uses **Framer Motion** for smooth, performant animations:

#### **Scroll-Triggered Animations**
```tsx
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Stagger children animations
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

#### **Interactive Hover Effects**
- 🎯 **Cards**: Scale + lift on hover
- 🔘 **Buttons**: Gradient shift + shadow
- 🖼️ **Images**: Smooth zoom effect
- 📝 **Links**: Underline animation

#### **Page Transitions**
- ⚡ Smooth scroll behavior
- 🎨 Section fade-ins on scroll
- 🔄 Infinite marquee for testimonials
- ✨ Glass morphism effects

### 🎨 Custom CSS Animations

```css
/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient animation */
.gradient-animate {
  background: linear-gradient(135deg, #e11d48, #be123c);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
```

---

## 📧 Email Templates

### 🎨 Modern Email Design

The contact form sends **two beautifully designed emails**:

#### 1. **Admin Notification Email**
- 📬 Modern card-based layout
- 👤 Contact info with emoji icons
- 💬 Message display with accent border
- 🔘 Quick action buttons (Reply, Call)
- 🌐 Social media links

#### 2. **User Confirmation Email**
- ✅ Professional thank you message
- 📝 Message recap
- ⏱️ "What's Next" timeline
- 🔗 Quick links to portfolio sections
- ✍️ Personal signature

**Features:**
- ✅ Responsive table-based layout
- ✅ Works in all email clients (Gmail, Outlook, Apple Mail)
- ✅ Inline CSS for compatibility
- ✅ Modern gradients and shadows
- ✅ Brand-consistent design
- ✅ Dynamic category-based auto-replies
- ✅ File attachment support (CV/Resume)
- ✅ Cloudflare Turnstile spam protection

---

## 🧑💻 Getting Started

### Clone the Repository

```bash
git clone https://github.com/tariqsaidofficial/portfolio-onepage.git
```

### Navigate to the Project Directory

```bash
cd portfolio-onepage
```

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
```

---

## 🛠️ Configuration & Customization

### 📝 Personalize Content

1. **Update Personal Info**
   - Edit `components/about.tsx` for bio and timeline
   - Modify `components/hero.tsx` for main heading
   - Update `components/contact.tsx` for contact details

2. **Change Colors**
   ```css
   /* In app/globals.css */
   :root {
     --primary: #e11d48;  /* Your brand color */
     --background: #0a122c; /* Your background */
   }
   ```

3. **Update Images**
   - Replace images in `public/` folder
   - Use WebP format for best performance
   - Update image references in components

4. **Modify Sections**
   - Add/remove sections in `app/page.tsx`
   - Create new components in `components/`
   - Follow existing patterns for consistency

### 🎨 Theme Customization

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        background: '#0a122c',
        // Add your custom colors
      },
      animation: {
        // Add custom animations
      }
    }
  }
}
```

### 📧 Email Configuration

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain
   - Get your API key

2. **Add to Cloudflare Pages**
   - Go to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key
   - Redeploy the site

3. **Customize Email Templates**
   - Edit `functions/api/send-email.js`
   - Modify HTML templates
   - Test with your email

### ☁️ Deployment on Cloudflare

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   git clone https://github.com/YOUR_USERNAME/portfolio-onepage.git
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Pages → Create a project
   - Connect your GitHub repository
   - Build settings:
     - Build command: `pnpm build`
     - Output directory: `out`

3. **Set Environment Variables**
   - `RESEND_API_KEY`: Your Resend API key
   - `NODE_VERSION`: 18 or higher

4. **Deploy**
   - Push to `main` branch
   - GitHub Actions will auto-deploy
   - Check deployment status in Actions tab

---

## 📦 Latest Updates (Version 6.0)

### 🎯 Version 6.0 - Skills & Performance Overhaul (2025-01-19)

#### **🎨 Skills & Technologies Section**
- ✅ Added **56+ technology icons** with categorization
- ✅ Implemented **primary color filter overlay** (#e11d48) for brand consistency
- ✅ New categories:
  - IT & System Administration (Grafana, Prometheus, Proxmox)
  - Security (OpenSource): Let's Encrypt, WireGuard, OpenVPN, pfSense, Fail2Ban
  - Mobile Development: iOS, Kotlin, Dart, Swift, Firebase
  - AV Equipment: ATEM, Extron, NDI
  - AI Tools: ChatGPT, Claude, Gemini, Cursor, Windsurf
- ✅ Fixed dark icons (iOS, OBS, ATEM, GitHub, Tailscale)
- ✅ Updated icon sources for better reliability

#### **⚡ Performance Improvements**
- ✅ **90% image size reduction**: 8.4MB → 793KB
- ✅ Converted all PNG to WebP format
- ✅ Optimized media-server image: 6.2MB → 534KB
- ✅ Added projects demo page with enhanced UI
- ✅ Improved animated background with `pointer-events-none`

#### **🎭 UI/UX Enhancements**
- ✅ 3D Holographic ProfileCard with DarkNavy+Gold+Red theme
- ✅ Curved text marquee component with glassmorphism
- ✅ Floating WhatsApp & Back to Top buttons
- ✅ Enhanced glassmorphism scrollbar
- ✅ Logo loop with primary color overlay

#### **📧 Email & Contact Form**
- ✅ Dynamic auto-reply messages based on category
- ✅ Cloudflare Turnstile security integration
- ✅ File upload support (CV/Resume)
- ✅ Professional email templates with CDN images
- ✅ WhatsApp integration in contact info

#### **🔐 Security & Infrastructure**
- ✅ Cloudflare Turnstile implementation
- ✅ Global error handling system
- ✅ Security headers configuration
- ✅ Blocked access to sensitive files (index.txt)
- ✅ Removed test keys and fallbacks

### 📊 Previous Versions

**Version 5.2** - Cloudflare Turnstile & Email Fixes  
**Version 5.1** - File Upload Support  
**Version 5.0** - Dynamic Contact Form  
**Version 4.0** - Enhanced Email Templates

---

## 🤖 Auto-Updating Stats

<!--AUTO-README:START-->
### 🔴 Live
- **Production:** https://portfolio-1yp.pages.dev/
- **Last update:** 2025-10-19T01:15:15.097Z

### 📊 Repo stats
- **Stars:** 1
- **Forks:** 0
- **Last commit:** `a4afeb7` — feat: Update ProfileCard to DarkNavy+Gold+Red theme with enhanced effects - Change color scheme from Purple/Cyan to DarkNavy/Gold/Red * Spotlight: Dark gray gradients * Top accent: Gold (#fbbf24) * Center glow: Red (#e11d48) * Base gradient: DarkNavy to Gold conic gradient * Inner background: DarkNavy (#0a122c) * Name text: White to Gold gradient * Title text: White to Red gradient - Add missing holographic effects from original Vue code: * Grain texture overlay (::before) with rainbow gradient * Alternative shine pattern (::after) with difference blend * Background animations (glow-bg 12s, holo-bg 18s) * Dynamic filters that change on hover - Enhance iconpattern visibility: * Default: brightness(0.85) contrast(1.8) opacity(0.75) * Hover: brightness(1) contrast(2) opacity(0.9) - Update default assets: * iconUrl: /assets/iconpattern.png * grainUrl: /assets/grain.webp (added) - Add grain.webp and iconpattern.png to public/assets (2025-10-19T03:41:16+04:00)

![GitHub Repo stars](https://img.shields.io/github/stars/tariqsaidofficial/portfolio-onepage?style=flat)&nbsp;![GitHub forks](https://img.shields.io/github/forks/tariqsaidofficial/portfolio-onepage?style=flat)
<!--AUTO-README:END-->

---

## 🙏 Credits & Acknowledgments

**Created and maintained by:** [Tariq Said](https://dxbmark.com)
- 🌐 Portfolio: [portfolio.dxbmark.com](https://portfolio.dxbmark.com)
- 💼 LinkedIn: [tariqsaidofficial](https://www.linkedin.com/in/tariqsaidofficial/)
- 🐙 GitHub: [tariqsaidofficial](https://github.com/tariqsaidofficial)

**Built with:**
- ⚡ [Next.js](https://nextjs.org/) - React framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Styling
- 🧩 [ShadCN UI](https://ui.shadcn.com/) - Components
- 🎭 [Framer Motion](https://www.framer.com/motion/) - Animations
- 📧 [Resend](https://resend.com/) - Email API
- ☁️ [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

**Special Thanks:**
- 🎨 [v0.dev](https://v0.dev) by Vercel for initial design inspiration
- 🌐 Cloudflare for excellent hosting and edge functions
- 💙 Open source community for amazing tools

---

## 🍴 Fork This Project

### 🎯 Why Fork This Portfolio?

- ✅ **Production-Ready**: No setup needed, works out of the box
- ⚡ **High Performance**: Optimized for PageSpeed (90+ score)
- 🎨 **Modern Design**: Glass morphism, gradients, animations
- 📧 **Contact Form**: Integrated email system
- 🔍 **SEO Optimized**: Complete structured data
- 📱 **Fully Responsive**: Works on all devices
- 🚀 **Easy Deployment**: One-click Cloudflare deployment

### 🚀 Quick Start

1. **Click "Use this template"** at the top of this repo
2. **Clone your new repository**
3. **Install dependencies**: `pnpm install`
4. **Run locally**: `pnpm dev`
5. **Customize** content and colors
6. **Deploy** to Cloudflare Pages

### 📚 What You'll Learn

- 🎯 Next.js 15 best practices
- ⚡ Performance optimization techniques
- 🎨 Modern CSS with Tailwind
- 🎭 Framer Motion animations
- 📧 Serverless functions (Cloudflare)
- 🔍 SEO and structured data
- 📊 Web analytics integration

### 🎁 Bonus Features

- 📧 **Email Templates**: Professional HTML emails
- 🎨 **Color Palette**: Complete design system
- ✨ **Animations**: Ready-to-use Framer Motion effects
- 📝 **Documentation**: Comprehensive README
- 🔧 **GitHub Actions**: Automated deployment
- 📊 **Analytics**: Vercel Analytics integrated

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
