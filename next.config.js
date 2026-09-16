/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com", "github.com"],
  },
  basePath: '',
};

module.exports = nextConfig;
