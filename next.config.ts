import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/wafflebox-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
