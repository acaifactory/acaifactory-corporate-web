import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/promotions", destination: "/offers", permanent: true },
      { source: "/franchises", destination: "/franchise", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
      { source: "/menu/:slug", destination: "/menu", permanent: false },
      { source: "/community", destination: "/", permanent: false },
      { source: "/support", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
