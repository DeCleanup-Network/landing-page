/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // No basePath needed for username.github.io repos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '', // No assetPrefix needed for username.github.io repos
  images: {
    domains: ['regenbazaar.com','avatars.githubusercontent.com','pbs.twimg.com','cdn-icons-png.flaticon.com','github.com','fonts.googleapis.com','octant.build','s2.coinmarketcap.com','cdn.prod.website-files.com','giveth.io','metapool.app','docs.arbitrum.foundation'],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig; 
