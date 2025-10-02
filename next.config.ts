/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚙️ Tell Next.js to export a static site
  output: 'export',

  // ❓ Set the base path to your repo name
  // This is needed because your site will be hosted at https://<username>.github.io/<repo-name>/
  basePath: '/gabegaz.github.io',



  
  // 🖼️ Disable image optimization, as it requires a server
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;