import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-1441974231531-c6227db76b6e",
      },
    ],
  },
};

export default nextConfig;
