const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/inzkornel/inzkornel.github.io/gh-pages/' : '',
  async rewrites() {
    return [
      {
        source: '/all',
        destination: '/',
      },
      {
        source: '/offers',
        destination: '/',
      },
    ];
  },
};
