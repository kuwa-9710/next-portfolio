/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  },
  images: {    
    domains: ["images.microcms-assets.io"],
  },
};
