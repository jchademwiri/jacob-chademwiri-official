import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://images.pexels.com/photos/39284/**')],
  },
};

export default nextConfig;
