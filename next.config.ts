/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the line you need to add 👇
  images: {
    unoptimized: true,
  },
  
  // This line was already in your config
  output: 'export', 
};

module.exports = nextConfig;
