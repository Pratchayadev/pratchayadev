const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  assetPrefix: isProd ? '/pratchayadev/' : '',
};