/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  },

  webpack(config) {
    // Optimize for production
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 2000000, // 2 MiB max per chunk
    };
    return config;
  },
};

export default nextConfig;
