import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile in a parent directory
  // doesn't get picked up as the project root.
  turbopack: { root: __dirname },
};

export default nextConfig;
