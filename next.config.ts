import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG:true,
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
      },
    ],
    
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    
  },
};

export default nextConfig;
