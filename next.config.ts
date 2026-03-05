import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "69a8c69562aea864bacd7cca.imgix.net",
      },
    ],
  },
};

export default nextConfig;