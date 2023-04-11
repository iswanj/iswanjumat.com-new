/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MICROSOFT_GRAPH_API_TOKEN: process.env.MICROSOFT_GRAPH_API_TOKEN,
  },
};

module.exports = nextConfig;
