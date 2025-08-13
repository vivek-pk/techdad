import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable React Compiler to avoid potential invalid hook call issues with some libs
  experimental: {},
  images: {
    // Allow remote thumbnails used in frontmatter
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.televic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
