/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/countriesflag',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
