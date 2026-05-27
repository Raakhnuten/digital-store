/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' }
    ]
  },
  trailingSlash: true,
  ...(isGithubActions && repo
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`
      }
    : {})
};

export default nextConfig;
