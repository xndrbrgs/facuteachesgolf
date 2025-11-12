import type { NextConfig } from "next";

const nextConfig: any = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
