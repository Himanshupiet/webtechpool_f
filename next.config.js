/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dnssegvit/image/upload/**',
      },
    ],
  }
}
 
module.exports = nextConfig
