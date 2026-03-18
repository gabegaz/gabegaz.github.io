/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚙️ Tell Next.js to export a static site
  output: 'export',

  // 🖼️ Disable image optimization, as it requires a server
  images: {
    unoptimized: true,
  },
  
  // Explicitly allow trailing slashes for better compatibility with static hosting
  trailingSlash: true,
};

module.exports = nextConfig;
