/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/gabegaz", // Replace with your GitHub repo name
  assetPrefix: "/gabegaz/", // Ensures assets load correctly
};

export default nextConfig;
