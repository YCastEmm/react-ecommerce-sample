import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
    output: 'export', // This will make the site static
    basePath: isProd ? '/m/admin-material-tecnico': "",
    assetPrefix: isProd ? '/m/admin-material-tecnico': "",
    images: {
      unoptimized: true, // Image optimization is disabled in static builds
}};

export default nextConfig;
