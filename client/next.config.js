/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
};

module.exports = nextConfig;
