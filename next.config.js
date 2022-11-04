/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true,
  },
  env: {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
  },
};

module.exports = nextConfig;
