/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vm4983125.25ssd.had.wf",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "joinposter.com",
      },
    ],
  },
};

export default nextConfig;
