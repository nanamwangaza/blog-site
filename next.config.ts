import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com", // here we're allowing the nest Image component to optimize images from this host (unsplash)
        protocol: "https",
        port: "",
      },

      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
