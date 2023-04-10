/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['fastly.picsum.photos'],
  },
};

module.exports = nextConfig;
