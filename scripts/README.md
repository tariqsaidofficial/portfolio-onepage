# سكريبتات التنظيف / Cleanup Scripts

## تنظيف الكاش الكامل / Complete Cache Cleanup

هذه السكريبتات تقوم بتنظيف شامل للكاش في مشروع Next.js.

These scripts perform a complete cache cleanup for the Next.js project.

### ما الذي يتم حذفه؟ / What gets deleted?

- ✅ مجلد `.next` (ملفات البناء)
- ✅ مجلد `out` (ملفات التصدير الثابت)
- ✅ مجلد `node_modules` (الحزم المثبتة)
- ✅ ملفات القفل (`pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`)
- ✅ ملفات `.DS_Store` (على macOS)
- ✅ كاش npm/pnpm/yarn

---

### طرق التشغيل / How to Run

#### 1️⃣ استخدام npm/pnpm (الطريقة الموصى بها)

\`\`\`bash
# باستخدام pnpm
pnpm clear-cache

# أو باستخدام npm
npm run clear-cache

# أو باستخدام الاختصار
pnpm clean
npm run clean
\`\`\`

#### 2️⃣ استخدام Node.js مباشرة

\`\`\`bash
node scripts/clear-cache.js
\`\`\`

#### 3️⃣ استخدام Bash Script (Linux/Mac)

\`\`\`bash
./scripts/clear-cache.sh

# أو
bash scripts/clear-cache.sh
\`\`\`

---

### بعد التنظيف / After Cleanup

بعد تنظيف الكاش، ستحتاج إلى إعادة تثبيت الحزم:

After cleaning the cache, you'll need to reinstall packages:

\`\`\`bash
# باستخدام pnpm
pnpm install

# أو باستخدام npm
npm install

# أو باستخدام yarn
yarn install
\`\`\`

---

### متى تستخدم هذا السكريبت؟ / When to use this script?

استخدم هذا السكريبت عندما:
- 🔄 تواجه مشاكل في البناء
- 🐛 تظهر أخطاء غريبة
- 📦 تريد تحديث الحزم بشكل نظيف
- 🧹 تريد تنظيف المشروع بالكامل
- 💾 تريد توفير مساحة على القرص

Use this script when:
- 🔄 You face build issues
- 🐛 Strange errors appear
- 📦 You want to cleanly update packages
- 🧹 You want to completely clean the project
- 💾 You want to save disk space

---

### ملاحظات / Notes

⚠️ **تحذير**: هذا السكريبت سيحذف جميع الملفات المذكورة أعلاه. تأكد من حفظ أي تغييرات قبل التشغيل.

⚠️ **Warning**: This script will delete all files mentioned above. Make sure to save any changes before running.

✅ **آمن**: السكريبت لا يحذف الكود المصدري أو الملفات الهامة، فقط ملفات الكاش والبناء.

✅ **Safe**: The script doesn't delete source code or important files, only cache and build files.
