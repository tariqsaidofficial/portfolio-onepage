# 🔐 GitHub Token Setup Guide

هذا الدليل يشرح كيفية إعداد GitHub Token للحصول على آخر إصدار APK تلقائياً من مستودع NFC Manager.

## 📋 المتطلبات

- **Repository:** `tariqsaidofficial/nfcManager`
- **API Endpoint:** `/api/github-release?repo=tariqsaidofficial/nfcManager`
- **Environment Variable:** `GITHUB_TOKEN`

---

## 🔑 الحقول المطلوبة

### 1. **GITHUB_TOKEN** (اختياري لكن موصى به)

| الحقل | القيمة | الوصف |
|------|--------|-------|
| **اسم المتغير** | `GITHUB_TOKEN` | متغير البيئة في Cloudflare Pages |
| **النوع** | Personal Access Token (Classic) | توكن GitHub |
| **الصلاحيات المطلوبة** | `public_repo` أو `repo` | للوصول إلى Releases |
| **Rate Limit بدون Token** | 60 طلب/ساعة | محدود جداً |
| **Rate Limit مع Token** | 5,000 طلب/ساعة | كافي للإنتاج |

---

## 📝 الخطوات التفصيلية

### الخطوة 1️⃣: إنشاء GitHub Personal Access Token

1. **اذهب إلى GitHub Settings:**
   ```
   https://github.com/settings/tokens
   ```

2. **اضغط على "Generate new token" → "Generate new token (classic)"**

3. **املأ البيانات:**
   - **Note:** `Portfolio NFC Manager API`
   - **Expiration:** `No expiration` (أو حسب رغبتك)
   - **Select scopes:**
     - ✅ `public_repo` (للمستودعات العامة فقط)
     - أو ✅ `repo` (إذا كان المستودع خاص)

4. **اضغط "Generate token"**

5. **انسخ التوكن فوراً** (لن تستطيع رؤيته مرة أخرى!)
   ```
   ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

### الخطوة 2️⃣: إضافة Token في Cloudflare Pages

#### طريقة 1: من Dashboard

1. **اذهب إلى Cloudflare Dashboard:**
   ```
   https://dash.cloudflare.com/
   ```

2. **اختر "Workers & Pages" → اختر مشروعك**

3. **اذهب إلى "Settings" → "Environment variables"**

4. **اضغط "Add variable":**
   - **Variable name:** `GITHUB_TOKEN`
   - **Value:** الصق التوكن الذي نسخته
   - **Environment:** اختر `Production` و `Preview`

5. **اضغط "Save"**

6. **أعد نشر الموقع** (Redeploy) لتطبيق التغييرات

#### طريقة 2: من Wrangler CLI

```bash
# تسجيل الدخول
npx wrangler login

# إضافة المتغير
npx wrangler pages secret put GITHUB_TOKEN
# ثم الصق التوكن عند الطلب

# التحقق
npx wrangler pages secret list
```

---

### الخطوة 3️⃣: إضافة Token محلياً (للتطوير)

1. **أنشئ ملف `.env.local` في جذر المشروع:**
   ```bash
   touch .env.local
   ```

2. **أضف التوكن:**
   ```env
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **تأكد أن `.env.local` موجود في `.gitignore`:**
   ```bash
   # في ملف .gitignore
   .env*.local
   ```

4. **أعد تشغيل السيرفر:**
   ```bash
   npm run dev
   # أو
   pnpm dev
   ```

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
