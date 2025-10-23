# دليل المكونات - Components Guide

دليل شامل لجميع المكونات في المشروع مع أمثلة الاستخدام.

---

## 🎨 المكونات الرئيسية

### 1. RotatingText
مكون موحد لعرض نصوص متحركة بأنماط مختلفة.

**الموقع:** `components/rotating-text.tsx`

**الخصائص:**
```typescript
interface RotatingTextProps {
  texts: string[]              // مصفوفة النصوص للتبديل بينها
  className?: string           // CSS classes إضافية
  interval?: number            // الفترة الزمنية بالميلي ثانية (افتراضي: 3500)
  variant?: RotatingTextVariant // نمط الحركة
}

type RotatingTextVariant = "slide" | "flip" | "scale" | "typewriter"
```

**أمثلة الاستخدام:**

#### Slide Animation (الافتراضي):
```tsx
<RotatingText 
  texts={["Developer", "Designer", "Creator"]} 
  interval={3000}
/>
```

#### Flip Animation (3D):
```tsx
<RotatingText 
  texts={["Developer", "Designer", "Creator"]} 
  variant="flip"
  interval={2500}
/>
```

#### Scale Animation:
```tsx
<RotatingText 
  texts={["Developer", "Designer", "Creator"]} 
  variant="scale"
  interval={2500}
/>
```

#### Typewriter Effect:
```tsx
<RotatingText 
  texts={["Developer", "Designer", "Creator"]} 
  variant="typewriter"
  interval={2000}
/>
```

---

### 2. Header
شريط التنقل الرئيسي مع قائمة متجاوبة.

**الموقع:** `components/header.tsx`

**الميزات:**
- تصميم ثابت (sticky) مع تأثيرات التمرير
- قائمة متجاوبة للموبايل
- تحميل السيرة الذاتية مع إشعار
- روابط سلسة للأقسام

**الاستخدام:**
```tsx
import { Header } from "@/components/header"

<Header />
```

---

### 3. Hero
قسم الهبوط الرئيسي مع نص متحرك وروبوت 3D.

**الموقع:** `components/hero.tsx`

**الميزات:**
- نص متحرك يعرض الخبرات
- روبوت 3D تفاعلي (Spline)
- نص منحني دائري
- عرض الإحصائيات
- أزرار CTA

**الاستخدام:**
```tsx
import { Hero } from "@/components/hero"

<Hero />
```

---

### 4. CurvedLoop
نص منحني دائري متحرك.

**الموقع:** `components/curved-loop.tsx`

**الخصائص:**
```typescript
interface CurvedLoopProps {
  marqueeText: string      // النص المعروض
  speed?: number          // سرعة الحركة
  curveAmount?: number    // درجة الانحناء
  direction?: "left" | "right"
  interactive?: boolean   // تفاعلي مع الماوس
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  position?: "top" | "bottom"
}
```

**مثال:**
```tsx
<CurvedLoop
  marqueeText="Code ✦ Create ✦ Deliver ✦ "
  speed={1.5}
  curveAmount={300}
  direction="left"
  variant="primary"
/>
```

---

### 5. FloatingWhatsApp
زر واتساب عائم.

**الموقع:** `components/floating-whatsapp.tsx`

**الاستخدام:**
```tsx
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

<FloatingWhatsApp />
```

---

### 6. BackToTop
زر العودة للأعلى.

**الموقع:** `components/back-to-top.tsx`

**الاستخدام:**
```tsx
import { BackToTop } from "@/components/back-to-top"

<BackToTop />
```

---

### 7. AnimatedBackground
خلفية متحركة بجزيئات.

**الموقع:** `components/animated-background.tsx`

**الاستخدام:**
```tsx
import { AnimatedBackground } from "@/components/animated-background"

<AnimatedBackground />
```

---

## 🎯 مكونات UI

### Button
زر قابل للتخصيص مع أنماط متعددة.

**الموقع:** `components/ui/button.tsx`

**الأنماط:**
```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

---

### Input
حقل إدخال نصي.

**الموقع:** `components/ui/input.tsx`

```tsx
<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email..." />
```

---

### Textarea
حقل نص متعدد الأسطر.

**الموقع:** `components/ui/textarea.tsx`

```tsx
<Textarea placeholder="Your message..." rows={5} />
```

---

### Select
قائمة منسدلة.

**الموقع:** `components/ui/select.tsx`

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

### Toast
إشعارات منبثقة.

**الموقع:** `components/ui/toast.tsx`, `components/ui/use-toast.ts`

```tsx
import { useToast } from "@/components/ui/use-toast"

const { toast } = useToast()

toast({
  title: "Success!",
  description: "Your action was completed.",
  duration: 3000,
})
```

---

### Card
بطاقة محتوى.

**الموقع:** `components/ui/card.tsx`

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

---

### Badge
شارة صغيرة.

**الموقع:** `components/ui/badge.tsx`

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

---

### Tabs
تبويبات.

**الموقع:** `components/ui/tabs.tsx`

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content 1
  </TabsContent>
  <TabsContent value="tab2">
    Content 2
  </TabsContent>
</Tabs>
```

---

## 📦 مكونات الأقسام

### About
قسم "عني".

**الموقع:** `components/about.tsx`

```tsx
import { About } from "@/components/about"

<About />
```

---

### Skills
قسم المهارات مع رسوم متحركة.

**الموقع:** `components/skills.tsx`

```tsx
import { Skills } from "@/components/skills"

<Skills />
```

---

### Projects
قسم المشاريع.

**الموقع:** `components/projects.tsx`

```tsx
import { Projects } from "@/components/projects"

<Projects />
```

---

### Services
قسم الخدمات.

**الموقع:** `components/services.tsx`

```tsx
import { Services } from "@/components/services"

<Services />
```

---

### Testimonials
قسم الشهادات.

**الموقع:** `components/testimonials.tsx`

```tsx
import { Testimonials } from "@/components/testimonials"

<Testimonials />
```

---

### SmartContact
قسم التواصل مع نموذج ذكي.

**الموقع:** `components/smart-contact.tsx`

```tsx
import { SmartContact } from "@/components/smart-contact"

<SmartContact />
```

---

### Footer
تذييل الصفحة.

**الموقع:** `components/footer.tsx`

```tsx
import { Footer } from "@/components/footer"

<Footer />
```

---

## 🎭 مكونات خاصة

### DarkVeil
تأثير ستارة داكنة مع WebGL.

**الموقع:** `components/DarkVeil.tsx`

```tsx
import { DarkVeil } from "@/components/DarkVeil"

<DarkVeil />
```

---

### FuzzyText
نص مع تأثير ضبابي متحرك.

**الموقع:** `components/fuzzy-text.tsx`

```tsx
import { FuzzyText } from "@/components/fuzzy-text"

<FuzzyText text="Hello World" />
```

---

### LogoLoop
حلقة شعارات متحركة.

**الموقع:** `components/logo-loop.tsx`

```tsx
import { LogoLoop } from "@/components/logo-loop"

<LogoLoop />
```

---

### ProfileCard
بطاقة الملف الشخصي.

**الموقع:** `components/profile-card.tsx`

```tsx
import { ProfileCard } from "@/components/profile-card"

<ProfileCard />
```

---

### SocialActivityFeed
خلاصة النشاط الاجتماعي.

**الموقع:** `components/social-activity-feed.tsx`

```tsx
import { SocialActivityFeed } from "@/components/social-activity-feed"

<SocialActivityFeed />
```

---

## 🎨 أفضل الممارسات

### 1. الاستيرادات:
```tsx
// ✅ صحيح - استخدام alias
import { Button } from "@/components/ui/button"

// ❌ خطأ - مسار نسبي طويل
import { Button } from "../../components/ui/button"
```

### 2. TypeScript:
```tsx
// ✅ صحيح - تعريف الأنواع
interface ComponentProps {
  title: string
  count?: number
}

// ❌ خطأ - استخدام any
const Component = (props: any) => {}
```

### 3. التوثيق:
```tsx
/**
 * Component description
 * 
 * @param {string} title - The title prop
 * @returns {JSX.Element}
 */
export function Component({ title }: { title: string }) {
  return <div>{title}</div>
}
```

---

## 🔗 روابط مفيدة

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

---

**آخر تحديث:** 2025-10-23
