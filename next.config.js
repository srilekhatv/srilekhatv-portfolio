/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.accredible.com',
        port: '',
        pathname: '/v1/frontend/credential_website_embed_image/badge/**',
      },
      {
        protocol: 'https',
        hostname: 'images.credly.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  };
  
  module.exports = nextConfig;


