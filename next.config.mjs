/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  trailingSlash: false,

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
