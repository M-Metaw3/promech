/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            
        },
    },
      images: {
    domains: ['promech-backend.addictaco.com'],
    // domains: ['localhost'],

  },
}

module.exports = nextConfig
