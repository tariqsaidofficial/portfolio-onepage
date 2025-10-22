# 🔐 GitHub Release Integration Guide

هذا الدليل يشرح كيفية عمل نظام جلب آخر إصدار APK تلقائياً من مستودع NFC Manager.

## 📋 المتطلبات

- **Repository:** `tariqsaidofficial/nfcManager`
- **API:** GitHub REST API (يُستدعى مباشرة من المتصفح)
- **Rate Limit:** 60 طلب/ساعة للمستخدم الواحد

---

## 🔑 كيف يعمل النظام؟

النظام يستخدم **Client-Side API Call** مباشرة إلى GitHub:

```typescript
// في components/projects.tsx
fetch('https://api.github.com/repos/tariqsaidofficial/nfcManager/releases/latest')
```

### ✅ المزايا:
- لا يحتاج API route في Next.js
- يعمل مع Static Export (Cloudflare Pages)
- لا يحتاج Environment Variables
- تحديث تلقائي عند كل زيارة

### ⚠️ القيود:
- **Rate Limit:** 60 طلب/ساعة لكل IP
- يكفي للاستخدام العادي (الزوار المختلفون لهم rate limits منفصلة)

---

## 📝 إنشاء Release في GitHub

### الخطوة الوحيدة المطلوبة

1. **اذهب إلى مستودع NFC Manager:**

   ```text
   https://github.com/tariqsaidofficial/nfcManager/releases
   ```

2. **اضغط "Create a new release"**

3. **املأ البيانات:**
   - **Tag:** `v1.0.0` (أو أي رقم إصدار)
   - **Title:** `NFC Manager v1.0.0`
   - **Description:** وصف التحديثات

4. **ارفع ملف APK:**
   - اسحب ملف `.apk` إلى منطقة الـ Assets
   - أو اضغط "Attach binaries" واختر الملف

5. **اضغط "Publish release"**

✅ **انتهى!** الموقع سيجلب آخر إصدار تلقائياً

---

## ✅ اختبار التكامل

### اختبار محلي:

```bash
# شغل السيرفر
npm run dev

# في متصفح آخر أو Postman
curl http://localhost:3000/api/github-release?repo=tariqsaidofficial/nfcManager
```

**النتيجة المتوقعة:**
```json
{
  "version": "v1.0.0",
  "name": "NFC Manager v1.0.0",
  "apk": {
    "url": "https://github.com/tariqsaidofficial/nfcManager/releases/download/v1.0.0/app-release.apk",
    "name": "app-release.apk",
    "size": 5242880,
    "sizeFormatted": "5.00 MB"
  }
}
```

### اختبار على Production:

```bash
curl https://portfolio.dxbmark.com/api/github-release?repo=tariqsaidofficial/nfcManager
```

---

## 🔍 التحقق من Rate Limit

### بدون Token:
```bash
curl -I https://api.github.com/rate_limit
```

### مع Token:
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.github.com/rate_limit
```

**النتيجة:**
```json
{
  "resources": {
    "core": {
      "limit": 5000,  // مع Token
      "remaining": 4999,
      "reset": 1234567890
    }
  }
}
```

---

## 🚨 استكشاف الأخطاء

### المشكلة: "No releases found"
**الحل:**
1. تأكد أن المستودع `tariqsaidofficial/nfcManager` يحتوي على Release
2. اذهب إلى: `https://github.com/tariqsaidofficial/nfcManager/releases`
3. أنشئ Release جديد مع ملف APK

### المشكلة: "Rate limit exceeded"
**الحل:**
1. تأكد أن `GITHUB_TOKEN` مضاف بشكل صحيح
2. تحقق من الـ logs في Cloudflare Pages
3. أعد نشر الموقع بعد إضافة Token

### المشكلة: "No APK file found"
**الحل:**
1. تأكد أن Release يحتوي على ملف `.apk`
2. الملف يجب أن ينتهي بـ `.apk` (حساس لحالة الأحرف)

---

## 📊 مراقبة الأداء

### في Cloudflare Pages:
1. اذهب إلى "Analytics" → "Web Analytics"
2. راقب عدد الطلبات على `/api/github-release`
3. تحقق من وقت الاستجابة (يجب أن يكون < 1 ثانية)

### Cache:
- الـ API يخزن النتائج لمدة **1 ساعة**
- لإعادة التحميل فوراً، أعد نشر الموقع

---

## 🔒 أمان Token

⚠️ **لا تشارك التوكن أبداً!**

✅ **أفضل الممارسات:**
- استخدم Token مع صلاحيات محدودة (`public_repo` فقط)
- لا تضع Token في الكود مباشرة
- استخدم Environment Variables فقط
- راجع الـ Tokens بشكل دوري وامسح غير المستخدمة

---

## 📚 مصادر إضافية

- [GitHub API Documentation](https://docs.github.com/en/rest/releases/releases)
- [Cloudflare Pages Environment Variables](https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

## 🎯 الخلاصة

| الخطوة | الحالة |
|--------|--------|
| ✅ إنشاء GitHub Token | - |
| ✅ إضافة Token في Cloudflare Pages | - |
| ✅ إضافة Token في `.env.local` | - |
| ✅ اختبار API محلياً | - |
| ✅ اختبار API على Production | - |
| ✅ التحقق من عمل أيقونة Android | - |

---

**تم إنشاء هذا الدليل بواسطة:** Cascade AI  
**آخر تحديث:** 2025-10-22
