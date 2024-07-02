/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/uk/:path*',
          destination: '/api/404?site=uk',
        },
        {
          source: '/us/:path*',
          destination: '/api/404?site=us',
        }
      ]
    }
  }
};

export default nextConfig;
