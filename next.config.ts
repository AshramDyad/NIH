import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-81805ff84c1645c1a62c73f691611c86.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
