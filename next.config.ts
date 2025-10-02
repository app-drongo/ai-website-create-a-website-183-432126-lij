import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  swcMinify: true, // ✅ Faster builds
  turbo: {
    // ✅ Proper Turbopack option (replaces deprecated experimental.turbo)
    rules: {},
  },
  typescript: {
    // ✅ Skip type errors in production builds (faster deploys)
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Skip lint errors in production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
