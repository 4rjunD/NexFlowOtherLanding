import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/payment-success.html',
        destination: '/payment-success',
      },
      {
        source: '/payment-cancel.html',
        destination: '/payment-cancel',
      },
    ];
  },
};

export default nextConfig;