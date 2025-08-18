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
  async redirects() {
    return [
      {
        source: "/systems",
        destination: "/fire-life-safety-systems",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
