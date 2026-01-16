/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'the-gate-images.s3.mx-central-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-bucket-landing-page.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
