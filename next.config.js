/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
  },
  distDir: 'build',
};

module.exports = nextConfig;
