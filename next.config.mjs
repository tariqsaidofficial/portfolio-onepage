/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Cloudflare Pages
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    unoptimized: true, // Required for static export
  },
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
