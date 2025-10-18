# Error Handling System Documentation

## 📋 Overview

This document describes the comprehensive error handling system implemented in the portfolio website.

---

## 🎯 Error Pages

### 1. **404 Page** (`app/not-found.tsx`)

**When it appears:**
- User navigates to a non-existent route (e.g., `/test`, `/about-us`, etc.)

**Features:**
- ✅ FuzzyText "404" animation with interactive hover effect
- ✅ User-friendly error message
- ✅ "Go Home" button
- ✅ "Go Back" button (browser history)
- ✅ Quick links to main sections (About, Projects, Skills, Contact)
- ✅ Animated background gradients
- ✅ Glass morphism design

**Testing:**
```bash
# Visit any non-existent route
http://localhost:3000/test
http://localhost:3000/random-page
http://localhost:3000/404
```

---

### 2. **Error Page** (`app/error.tsx`)

**When it appears:**
- Runtime errors in any page/component
- API call failures
- Component rendering errors
- Data fetching errors

**Features:**
- ✅ Error icon with animation
- ✅ Clear error message
- ✅ Error details (development mode only)
- ✅ Error ID/digest for tracking
- ✅ "Try Again" button (calls `reset()`)
- ✅ "Go Home" button
- ✅ Link to contact section

**Testing:**
```tsx
// Add this to any component to test:
throw new Error("Test error");
```

**Development vs Production:**
```tsx
// Development: Shows full error message
{process.env.NODE_ENV === "development" && (
  <div>
    <p>{error.message}</p>
    <p>Error ID: {error.digest}</p>
  </div>
)}

// Production: Only shows user-friendly message
```

---

### 3. **Global Error Page** (`app/global-error.tsx`)

**When it appears:**
- Critical errors that crash the entire app
- Errors in root layout
- Errors before React hydration

**Features:**
- ✅ Standalone HTML (doesn't depend on layout)
- ✅ Critical error icon with animation
- ✅ Error details (development mode only)
- ✅ "Try Again" button
- ✅ "Go Home" button
- ✅ Minimal styling (inline/hardcoded)

**Testing:**
```tsx
// Add this to app/layout.tsx to test:
throw new Error("Critical error");
```

**Important Notes:**
- This page uses **inline styles** and **native HTML** (no components)
- It's the last line of defense
- Rarely triggered in normal operation

---

## 🔧 Contact Form Error Handling

### Enhanced Error States

**File:** `components/contact.tsx`

**Features:**
- ✅ Specific error messages for different failure types
- ✅ Network error detection
- ✅ Validation error messages
- ✅ Turnstile verification errors
- ✅ Visual feedback (icons + colored borders)
- ✅ Development logging

**Error Types:**

1. **Validation Error:**
```tsx
setErrorMessage("Please complete the security verification")
```

2. **API Error:**
```tsx
setErrorMessage(errorData.error || "Failed to send message. Please try again.")
```

3. **Network Error:**
```tsx
setErrorMessage("Network error. Please check your connection and try again.")
```

**UI States:**

```tsx
// Success
<div className="p-4 bg-green-500/10 border border-green-500/20">
  <p className="text-green-500">Message sent successfully!</p>
</div>

// Error
<div className="p-4 bg-red-500/10 border border-red-500/20">
  <p className="text-red-500">{errorMessage}</p>
</div>
```

---

## 🎨 FuzzyText Component

**File:** `components/fuzzy-text.tsx`

**Purpose:**
- Creates animated "fuzzy" text effect using Canvas API
- Used in 404 page for "404" text

**Props:**
```tsx
interface FuzzyTextProps {
  text: string                    // Text to display
  fontSize?: number | string      // Font size (default: clamp(2rem, 8vw, 8rem))
  fontWeight?: string | number    // Font weight (default: 900)
  fontFamily?: string             // Font family (default: inherit)
  color?: string                  // Text color (default: #fff)
  enableHover?: boolean           // Enable hover effect (default: true)
  baseIntensity?: number          // Base fuzz intensity (default: 0.18)
  hoverIntensity?: number         // Hover fuzz intensity (default: 0.5)
  className?: string              // Additional CSS classes
}
```

**Usage:**
```tsx
<FuzzyText
  text="404"
  fontSize={140}
  fontWeight={900}
  color="#e11d48"
  enableHover={true}
  baseIntensity={0.18}
  hoverIntensity={0.5}
/>
```

---

## 🔍 Error Logging Strategy

### Development Mode
```tsx
if (process.env.NODE_ENV === "development") {
  console.error("Error details:", error)
}
```

### Production Mode
- ✅ Silent errors (no console logs)
- ✅ User-friendly messages only
- ✅ Error IDs for tracking
- ✅ Ready for Sentry/error tracking integration

---

## 🧪 Testing Guide

### Test 404 Page
```bash
# Visit non-existent routes
http://localhost:3000/test
http://localhost:3000/random
http://localhost:3000/404
```

### Test Error Page
```tsx
// Add to any component:
export default function TestComponent() {
  throw new Error("Test error");
  return <div>Test</div>;
}
```

### Test Global Error
```tsx
// Add to app/layout.tsx (temporarily):
export default function RootLayout({ children }) {
  throw new Error("Critical error");
  return <html>...</html>;
}
```

### Test Contact Form Errors

1. **Validation Error:**
   - Submit form without completing Turnstile

2. **Network Error:**
   - Disconnect internet
   - Submit form

3. **API Error:**
   - Temporarily break `/api/send-email`
   - Submit form

---

## 📊 Error Hierarchy

```
┌─────────────────────────────────────┐
│     global-error.tsx                │  ← Critical/Root errors
│     (Last line of defense)          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     error.tsx                       │  ← Page/Component errors
│     (Most common errors)            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     not-found.tsx                   │  ← 404 errors
│     (Route not found)               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│     Component-level error handling  │  ← Form errors, etc.
│     (e.g., contact form)            │
└─────────────────────────────────────┘
```

---

## 🎯 Best Practices

### ✅ DO:
- Show user-friendly messages in production
- Log detailed errors in development
- Provide recovery options (Try Again, Go Home)
- Use Error IDs for tracking
- Test all error scenarios

### ❌ DON'T:
- Show technical error messages to users
- Use `console.log` in production
- Forget to handle network errors
- Use Server Components with `onClick` handlers
- Ignore error boundaries

---

## 🔮 Future Enhancements

### Optional: Sentry Integration

```bash
# Install Sentry
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

**Add to error boundaries:**
```tsx
import * as Sentry from "@sentry/nextjs"

useEffect(() => {
  Sentry.captureException(error)
}, [error])
```

---

## 📝 Summary

| Feature | Status | File |
|---------|--------|------|
| 404 Page | ✅ | `app/not-found.tsx` |
| Error Page | ✅ | `app/error.tsx` |
| Global Error | ✅ | `app/global-error.tsx` |
| FuzzyText | ✅ | `components/fuzzy-text.tsx` |
| Contact Form Errors | ✅ | `components/contact.tsx` |
| Error Logging | ✅ | All error pages |
| Development Mode | ✅ | Shows full errors |
| Production Mode | ✅ | User-friendly only |

---

## 🎨 Design Consistency

All error pages use:
- ✅ Glass morphism effects
- ✅ Animated gradients
- ✅ Smooth transitions
- ✅ Responsive design
- ✅ Dark theme
- ✅ Accessibility (ARIA labels, keyboard navigation)

---

**Last Updated:** 2025-10-18
**Version:** 1.0.0
