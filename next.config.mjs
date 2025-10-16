/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ static export فعلي
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  trailingSlash: true,

  // ⬇️ يقلل حجم build بتعطيل ملفات السيرفر
  experimental: {
    outputFileTracingRoot: undefined,
  },

  webpack(config) {
    // إزالة sourcemaps والملفات الكبيرة
    config.devtool = false;
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 2000000, // 2 MiB حد أقصى لكل chunk
    };
    return config;
  },
};

export default nextConfig;
