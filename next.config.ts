const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/decleanup-landingpage' : '',
  assetPrefix: isProd ? '/decleanup-landingpage/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;