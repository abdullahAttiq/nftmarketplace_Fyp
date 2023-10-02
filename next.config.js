/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // it should be false by default

  images: {
    domains: ["nawaisjan.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
