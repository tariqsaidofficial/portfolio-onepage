#!/bin/bash

# سكريبت تنظيف الكاش الكامل لمشروع Next.js
# Clear Cache Script for Next.js Project

echo "🧹 بدء تنظيف الكاش..."
echo "🧹 Starting cache cleanup..."
echo ""

# حذف مجلد .next
if [ -d ".next" ]; then
    echo "🗑️  حذف مجلد .next..."
    rm -rf .next
    echo "✅ تم حذف .next"
else
    echo "ℹ️  مجلد .next غير موجود"
fi

# حذف مجلد out
if [ -d "out" ]; then
    echo "🗑️  حذف مجلد out..."
    rm -rf out
    echo "✅ تم حذف out"
else
    echo "ℹ️  مجلد out غير موجود"
fi

# حذف مجلد node_modules
if [ -d "node_modules" ]; then
    echo "🗑️  حذف مجلد node_modules..."
    rm -rf node_modules
    echo "✅ تم حذف node_modules"
else
    echo "ℹ️  مجلد node_modules غير موجود"
fi

# حذف ملفات قفل الحزم
if [ -f "pnpm-lock.yaml" ]; then
    echo "🗑️  حذف pnpm-lock.yaml..."
    rm -f pnpm-lock.yaml
    echo "✅ تم حذف pnpm-lock.yaml"
fi

if [ -f "package-lock.json" ]; then
    echo "🗑️  حذف package-lock.json..."
    rm -f package-lock.json
    echo "✅ تم حذف package-lock.json"
fi

if [ -f "yarn.lock" ]; then
    echo "🗑️  حذف yarn.lock..."
    rm -f yarn.lock
    echo "✅ تم حذف yarn.lock"
fi

# حذف ملفات .DS_Store على Mac
if [ "$(uname)" == "Darwin" ]; then
    echo "🗑️  حذف ملفات .DS_Store..."
    find . -name ".DS_Store" -type f -delete
    echo "✅ تم حذف ملفات .DS_Store"
fi

# حذف كاش npm
echo "🗑️  تنظيف كاش npm..."
npm cache clean --force 2>/dev/null || echo "⚠️  npm غير متاح"

# حذف كاش pnpm
echo "🗑️  تنظيف كاش pnpm..."
pnpm store prune 2>/dev/null || echo "⚠️  pnpm غير متاح"

# حذف كاش yarn
echo "🗑️  تنظيف كاش yarn..."
yarn cache clean 2>/dev/null || echo "⚠️  yarn غير متاح"

echo ""
echo "✨ تم تنظيف الكاش بنجاح!"
echo "✨ Cache cleanup completed successfully!"
echo ""
echo "📦 لإعادة تثبيت الحزم، استخدم:"
echo "📦 To reinstall packages, use:"
echo "   pnpm install"
echo "   أو / or"
echo "   npm install"
