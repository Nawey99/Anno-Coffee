import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;

