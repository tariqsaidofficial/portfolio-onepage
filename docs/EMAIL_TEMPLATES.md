# 📧 Email Templates Documentation

This document provides comprehensive documentation for the email templates used in the contact form system.

## 📋 Table of Contents

- [Overview](#overview)
- [Email Templates](#email-templates)
- [Design System](#design-system)
- [Implementation Details](#implementation-details)
- [Testing & Preview](#testing--preview)
- [Changelog](#changelog)

---

## Overview

The contact form sends two types of emails:

1. **Admin Notification Email** - Sent to the website owner when a new contact form is submitted
2. **Client Confirmation Email** - Sent to the user confirming their message was received

Both emails follow a unified design system with branding, professional layout, and responsive HTML.

### Contact Form Structure

The contact form includes dynamic fields based on user selection:

**Always Visible Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Category (required, dropdown with 5 options)
- Subcategory (required, dynamic based on category)
- Message (required)

**Conditional Fields:**
- **Project Type** - Appears only when "Project Request / Quotation" is selected
- **CV Upload** - Appears only when "Job / Hiring Opportunity" is selected (PDF only, max 2MB)

**Categories:**
1. General Inquiries
2. Project Request / Quotation (+ Project Type field)
3. Collaboration / Partnership
4. Job / Hiring Opportunity (+ CV Upload field)
5. Feedback / Complaint / Support

---

## Email Templates

### 1. Admin Notification Email

**Purpose:** Notify the admin of new contact form submissions

**From:** `Tariq Said <info@dxbmark.com>`  
**To:** `info@dxbmark.com`, `tariq.yousef@outlook.com`  
**Reply-To:** Client's email address  
**Subject:** `New Contact Form Submission from {name}`

#### Structure:
```
┌─────────────────────────────────────┐
│ Header (Dark Navy #0a122c)          │
│ - Logo: TARIQSAID (centered)        │
│   • display: block                  │
│   • margin: 0 auto 15px auto        │
│ - Title: "New Contact Form..."     │
│   (Red #e11d48)                     │
├─────────────────────────────────────┤
│ Content Section (White Background)  │
│ - Name: {name}                      │
│ - Email: {email} (red link)         │
│ - Phone: {phone} (red link)         │
│                                     │
│ - Message:                          │
│   {message content}                 │
│                                     │
│ - Timestamp (italic, muted):        │
│   "Received: [date & time]"         │
│   • Dubai timezone (Asia/Dubai)     │
│   • Format: Full date, short time   │
├─────────────────────────────────────┤
│ Footer (Dark Navy #0a122c)          │
│ - Slogan: "Code. Create. Deliver." │
│   (italic, muted color)             │
│ - Copyright with dynamic year       │
│ - "Tariq Said" as hyperlink         │
│   • Link: portfolio.dxbmark.com     │
│   • Color: #e11d48                  │
└─────────────────────────────────────┘
```

#### Key Features:
- ✅ Simple, clean design
- ✅ Dark header and footer (#0a122c)
- ✅ White body background
- ✅ Logo centered with block display
- ✅ Clickable email and phone links (red)
- ✅ Pre-formatted message display
- ✅ Timestamp with Dubai timezone
- ✅ Dynamic copyright year
- ✅ Portfolio link in footer
- ✅ Professional minimal design

---

### 2. Client Confirmation Email

**Purpose:** Confirm to the client that their message was received

**From:** `Tariq Said <noreply@dxbmark.com>`  
**To:** Client's email address  
**Subject:** `Thank you for contacting Tariq Said`

#### Structure:
```
┌─────────────────────────────────────┐
│ Header (Dark Navy #0a122c)          │
│ - Logo: TARIQSAID (centered)        │
│   • display: block                  │
│   • margin: 0 auto 15px auto        │
│ - Title: "Message Received..."     │
│   (Red #e11d48)                     │
├─────────────────────────────────────┤
│ Content Section (White Background)  │
│ - Dear {name},                      │
│                                     │
│ - Thank you message                 │
│                                     │
│ - Your Message: (left red border)   │
│   {message content}                 │
│                                     │
│ - Response time (24-48 hours)       │
│                                     │
│ - Direct contact:                   │
│   Email: info@dxbmark.com (red)     │
│   Phone: +971 50 123 4567 (red)     │
│                                     │
│ - Thank you for choosing us!        │
│                                     │
│ - Timestamp (italic, muted):        │
│   "Sent: [date & time]"             │
│   • Dubai timezone (Asia/Dubai)     │
├─────────────────────────────────────┤
│ Promotional Section                 │
│ - Gradient background (red tint)    │
│ - "Why Choose Us?" heading          │
│ - Description:                      │
│   "Expert in full-stack dev, IT,    │
│    and Audio-Visual integration"    │
│ - "View Portfolio" CTA button       │
│   • Background: #e11d48             │
│   • Link: portfolio.dxbmark.com     │
├─────────────────────────────────────┤
│ Footer (Dark Navy #0a122c)          │
│ - Social Media Icons:               │
│   • GitHub (stroke SVG)             │
│   • LinkedIn (stroke SVG)           │
│   • Behance (official SVG path)     │
│   • Background: rgba(255,255,255,.1)│
│   • Border radius: 8px              │
│   • Padding: 10px                   │
│                                     │
│ - Slogan: "Code. Create. Deliver." │
│   (italic, muted color)             │
│                                     │
│ - Copyright with dynamic year       │
│ - "Tariq Said" as hyperlink         │
│   • Link: portfolio.dxbmark.com     │
│   • Color: #e11d48                  │
│                                     │
│ - No-reply notice                   │
│ - Support email (red link)          │
└─────────────────────────────────────┘
```

#### Key Features:
- ✅ Professional design with promotional section
- ✅ Dark header and footer (#0a122c)
- ✅ White body background
- ✅ Logo centered with block display
- ✅ Personalized greeting with client's name
- ✅ Message recap with left red border
- ✅ Direct contact information (email & phone)
- ✅ Timestamp with Dubai timezone
- ✅ Promotional "Why Choose Us?" section
- ✅ Social media icons (GitHub, LinkedIn, Behance)
- ✅ Portfolio link in footer
- ✅ Clear no-reply notice
- ✅ CTA button for portfolio

---

## Design System

### Color Palette

```css
/* Primary Colors */
--primary: #e11d48;           /* Rose/Pink - Brand color */
--dark-bg: #0a122c;           /* Dark navy - Main background */
--dark-secondary: #0f172a;    /* Slate - Secondary background */

/* Text Colors */
--text-primary: #0a122c;      /* Dark text */
--text-secondary: #333;       /* Medium text */
--text-muted: #94a3b8;        /* Muted text */
--text-light: #64748b;        /* Light text */

/* Background Colors */
--bg-light: #f5f5f5;          /* Light gray background */
--bg-white: #ffffff;          /* White background */

/* Border Colors */
--border-light: #e5e5e5;      /* Light border */
--border-primary: rgba(225, 29, 72, 0.2);  /* Primary border with opacity */
```

### Typography

```css
/* Font Family */
font-family: Arial, sans-serif;

/* Font Sizes */
--heading-large: 24px;        /* Main headings */
--heading-medium: 18px;       /* Section headings */
--text-large: 16px;           /* Important text */
--text-medium: 15px;          /* Body text */
--text-small: 14px;           /* Secondary text */
--text-tiny: 12px;            /* Footer text */
--text-micro: 11px;           /* Fine print */
```

### Spacing

```css
/* Padding */
--padding-section: 30px 20px;
--padding-box: 20px;
--padding-button: 10px 20px;

/* Margins */
--margin-section: 20px;
--margin-text: 0 0 20px 0;

/* Border Radius */
--radius-large: 8px;
--radius-medium: 6px;
```

### Components

#### Header
- Gradient background: `linear-gradient(135deg, #0a122c 0%, #0f172a 100%)`
- Logo height: 50px
- Logo centered with `margin: 0 auto`
- Title color: `#e11d48` (primary)

#### Content Boxes
- Light background: `#f5f5f5`
- White background: `#ffffff`
- Border: `1px solid #e5e5e5`
- Border radius: `8px`
- Padding: `20px`

#### Promotional Section
- Gradient background: `linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0.1) 100%)`
- Border: `1px solid rgba(225, 29, 72, 0.2)`
- CTA button: Primary color with white text

#### Social Media Icons
- SVG icons with stroke (not fill)
- Stroke width: `1.5` for Behance, `2` for others
- Background: `rgba(255, 255, 255, 0.1)`
- Border radius: `8px`
- Padding: `10px`
- Hover effect: Scale transform

#### Footer
- Dark background: `#0a122c`
- Centered text alignment
- Muted text colors
- Dynamic year with JavaScript

---

## Implementation Details

### File Location
`/app/api/send-email/route.tsx`

### Dependencies
```json
{
  "resend": "^3.x.x"
}
```

### Environment Variables
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### API Endpoint
```
POST /api/send-email
```

### Request Body
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

### Response
```json
{
  "message": "Email sent successfully"
}
```

### Error Handling
```json
{
  "error": "All fields are required"  // 400
}
{
  "error": "Failed to send email. Please try again later."  // 500
}
```

---

## Social Media Icons

### GitHub Icon
```svg
<svg viewBox="0 0 24 24" stroke="white" stroke-width="2">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5..."/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>
```

### LinkedIn Icon
```svg
<svg viewBox="0 0 24 24" stroke="white" stroke-width="2">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2..."/>
  <rect width="4" height="12" x="2" y="9"/>
  <circle cx="4" cy="4" r="2"/>
</svg>
```

### Behance Icon
```svg
<svg viewBox="1 1 22 22" stroke="white" stroke-width="1.5">
  <path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665Z..."/>
</svg>
```

**Note:** Behance icon uses custom SVG path from official Behance branding guidelines.

---

## Testing & Preview

### Email Demo Page (Deprecated)

A demo page was created at `/app/email-demo/page.tsx` to preview both email templates side-by-side. This page has been removed from production but the concept is documented here for future reference.

#### Demo Page Features:
- Side-by-side comparison of both email templates
- Sample data for testing
- Responsive grid layout
- Live preview of all email components
- Back to home button

#### Demo Page Structure:
```tsx
export default function EmailDemo() {
  const currentYear = new Date().getFullYear()
  const name = "John Doe"
  const email = "john.doe@example.com"
  const phone = "+971 50 123 4567"
  const message = "Sample message..."

  return (
    <div style={{ /* Container styles */ }}>
      <h1>📧 Email Templates Preview</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))' }}>
        {/* Admin Email Template */}
        <div>...</div>
        {/* Client Confirmation Template */}
        <div>...</div>
      </div>
    </div>
  )
}
```

#### Why It Was Removed:
- ✅ Templates are now stable and tested
- ✅ Not needed for production
- ✅ Can be recreated if needed for future updates
- ✅ Documentation provides sufficient reference

#### How to Recreate (if needed):
1. Create `/app/email-demo/page.tsx`
2. Copy email HTML from `/app/api/send-email/route.tsx`
3. Convert HTML strings to JSX
4. Add sample data
5. Style the container
6. Access at `http://localhost:3000/email-demo`

---

## Testing Methods

### 1. Local Testing
```bash
# Start development server
pnpm dev

# Submit test form at http://localhost:3000
# Check email inbox for both emails
```

### 2. Resend Dashboard
- View sent emails
- Check delivery status
- Review email content
- Monitor bounce rates

### 3. Email Clients Testing
Test emails in:
- Gmail (Desktop & Mobile)
- Outlook (Desktop & Mobile)
- Apple Mail
- Yahoo Mail
- ProtonMail

### 4. Automated Testing
Use GitHub Actions workflow: `.github/workflows/check-resend.yml`

```bash
# Manual trigger
gh workflow run check-resend.yml

# Check results
gh run list --workflow=check-resend.yml
```

---

## Best Practices

### HTML Email Guidelines

1. **Use Tables for Layout**
   - Email clients don't support modern CSS layouts
   - Use `<table>` for structure
   - Inline styles only

2. **Inline CSS**
   - All styles must be inline
   - No external stylesheets
   - No `<style>` tags in some clients

3. **Image Optimization**
   - Use absolute URLs for images
   - Provide alt text
   - Optimize file size
   - Use CDN for hosting

4. **Responsive Design**
   - Use max-width for containers
   - Test on mobile devices
   - Keep content width ≤ 600px

5. **Accessibility**
   - Use semantic HTML
   - Provide alt text for images
   - Ensure good color contrast
   - Use readable font sizes

6. **Testing**
   - Test in multiple email clients
   - Check spam score
   - Verify all links work
   - Test on mobile devices

---

## Changelog

### Version 5.0 (2025-10-18) - Dynamic Contact Form & Unified Email Design
- ✅ Enhanced contact form with 5 main categories
- ✅ Dynamic subcategory field based on category selection
- ✅ Conditional Project Type field (for Project category)
- ✅ Conditional CV upload field (for Job category, PDF only, max 2MB)
- ✅ Phone field made optional
- ✅ Unified email design for Admin and Client
- ✅ Subject line uses subcategory: "{subcategory} from {name}"
- ✅ Header displays subcategory as title (both emails)
- ✅ Admin email shows: Category, Subtype, Name, Email, Phone (optional), Project Type (optional), CV status (optional)
- ✅ Client email shows: Submission Details box with all info
- ✅ Dynamic field display based on category
- ✅ TypeScript type safety with proper interfaces
- ✅ Improved UX with smooth transitions
- ✅ Professional validation and error handling

### Version 4.0 (2025-10-18) - Enhanced Professional Design (Superseded)
- Logo centered in header with block display
- Added timestamp to both emails (Dubai timezone)
- Removed "Best regards, John" from admin email
- Added promotional "Why Choose Us?" section to client email
- Added social media icons (GitHub, LinkedIn, Behance) to client email footer
- "Tariq Said" as clickable link in footer (both emails)
- Official Behance SVG icon with proper path
- Improved promotional text with IT and AV integration
- Professional gradient background for promotional section
- CTA button for portfolio viewing

### Version 3.0 (2025-10-18) - Simplified Design (Deprecated)
- ❌ Too simple, missing promotional elements
- ❌ No social media presence
- ❌ No timestamp information

### Version 1.0 (Initial)
- ✅ Basic admin notification email
- ✅ Contact form integration
- ✅ Resend API setup

---

## Support & Maintenance

### Updating Email Templates

1. Edit `/app/api/send-email/route.tsx`
2. Test locally with form submission
3. Check both emails in inbox
4. Verify in multiple email clients
5. Update this documentation
6. Commit and push changes

### Adding New Email Types

1. Create new email template in route handler
2. Add to Resend API call
3. Document in this file
4. Test thoroughly
5. Update changelog

### Troubleshooting

**Emails not sending:**
- Check `RESEND_API_KEY` in environment variables
- Verify domain is verified in Resend dashboard
- Check API rate limits
- Review error logs in console

**Emails going to spam:**
- Verify SPF, DKIM, DMARC records
- Check email content for spam triggers
- Ensure proper from address
- Test spam score

**Styling issues:**
- Verify all CSS is inline
- Test in problematic email client
- Check for unsupported CSS properties
- Use email-safe HTML

---

## Resources

- [Resend Documentation](https://resend.com/docs)
- [Email HTML Best Practices](https://www.campaignmonitor.com/css/)
- [Can I Email](https://www.caniemail.com/) - CSS support in email clients
- [Email on Acid](https://www.emailonacid.com/) - Email testing tool
- [Litmus](https://www.litmus.com/) - Email preview tool

---

**Last Updated:** 2025-10-18  
**Maintained by:** Tariq Said  
**Version:** 2.0
