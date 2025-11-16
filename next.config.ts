import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;

