/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: { fetches: { fullUrl: true } },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "em-content.zobj.net",
        pathname: "/**",
      },
    ],
  },
  plugins: [],
};
export default nextConfig;
