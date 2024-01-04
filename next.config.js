/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            
        },
    },
      images: {
    domains: ['promecha.onrender.com'],
  },
}

module.exports = nextConfig
