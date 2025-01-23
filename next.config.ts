/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // You can also use 'domains' if you don't want to use remotePatterns
  },
};

module.exports = nextConfig;
