/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ هذا السطر هو البديل الرسمي لـ next export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ضروري لعدم تفعيل Image Optimization في static export
  },
  trailingSlash: true, // يساعد Cloudflare على قراءة الروابط كملفات HTML في المجلدات
}

export default nextConfig
