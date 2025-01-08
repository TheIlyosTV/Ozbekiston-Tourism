import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['a.title.openstreetmap.org', 'b.tile.openstreetmap.org', 'c.tile.openstreetmap.org']
  }
};

export default nextConfig;
