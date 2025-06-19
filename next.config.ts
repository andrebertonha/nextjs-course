import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "letsenhance.io"}]
  }
};

export default nextConfig;
