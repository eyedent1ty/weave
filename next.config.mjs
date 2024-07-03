/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fmnl16-1.fna.fbcdn.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      }
    ]
  }
};

export default nextConfig;
