import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow iframe embedding and external host connections
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Allow iframe embedding from any origin
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow CORS from any origin
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
